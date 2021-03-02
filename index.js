
function MediaPlayer(config) {
    this.media = config.el

}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
    console.log(this.media.paused)
};


const button = document.querySelector("#button")


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video });


button.onclick = () => player.togglePlay();
