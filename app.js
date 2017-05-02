function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    var draw = document.getElementById('songs');
    var songTemplate = "";
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      songTemplate += `
            <div class="col-xs-4">
              <div class="well animated bounceInUp">
                  <img src ="${song.albumArt}">
                  <h4>${song.artist}</h4>
                  <h4 id="title" onclick="playSong(${song.id})">${song.title}</h4>
                  <marquee>${song.collection}</marquee>
                  <h4>$${song.price}</h4>
                  <audio id="${song.id}" controls = "controls" preload="none"><source src="${song.preview}" type="audio/mp4"/></audio>
              </div>
            </div>
        `
    }
    draw.innerHTML = songTemplate

  }
}

function playSong(id) {
  var audios = document.getElementById(id);
  if (audios.paused == false) {
    audios.pause()
    return
  }
  audios.play();

}

document.addEventListener('play', function (e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0; i < audios.length; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true)

$('#h1').addClass('animated bounceOutLeft');






var itunesCtrl = new ItunesController()

