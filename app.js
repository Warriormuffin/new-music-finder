function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    console.log(songList);
    var draw = document.getElementById('songs');
    var songTemplate = "";
    debugger
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      songTemplate += `
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="well">
                <div class="col-xs-2">
                  <img src ="${song.albumArt}">
                </div class="col-xs-2">
                  <h4>${song.artist}</h4>
                <div class="col-xs-2">
                  <h4>${song.collection}</h4>
                </div class="col-xs-2">
                  <h4>${song.title}</h4>
                <div class="col-xs-2">
                  <h4>${song.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }
    draw.innerHTML = songTemplate

  }

}



var itunesCtrl = new ItunesController()