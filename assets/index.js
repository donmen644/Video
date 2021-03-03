import MediaPlayer from './MediaPlayer.js'

const button = document.querySelector("#button")
const video = document.querySelector('video');
const player = new MediaPlayer({ el: video });


button.onclick = () => player.togglePlay();
