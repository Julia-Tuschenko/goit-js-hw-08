import Player from '@vimeo/player';
import  throttle from "lodash.throttle";
// console.log(Player);

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALPLAYER_KEY = 'videoplayer-current-time';



function onPlay(data) {
    const timePlayer = data.seconds;
    localStorage.setItem(LOCALPLAYER_KEY, timePlayer);
}

player.on('timeupdate', throttle(onPlay, 1000));
console.log(onPlay);


function getTime() {
    const saveTime = localStorage.getItem(LOCALPLAYER_KEY);

    player
      .setCurrentTime(saveTime)
      .then()
      .catch(function (error) {
        return error.name;
      });
  }

  player.on('play', throttle(getTime, 1000));
// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });



