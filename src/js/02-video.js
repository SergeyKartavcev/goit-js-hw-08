import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
auditLocalStorage();

player.on('timeupdate', throttle(currentTime, 1000));


function currentTime({ seconds }) {
  localStorage.setItem(localStorageKey, seconds);
  console.log(seconds);
};

function auditLocalStorage() {
  player.setCurrentTime(localStorage.getItem(localStorageKey));
  console.log(localStorage.getItem(localStorageKey));
};
