import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
auditLocalStorage();

player.on('timeupdate', throttle(currentTime, 1000));

//зберігаю у сховище
function currentTime({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  console.log(seconds);
}


function auditLocalStorage() {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
}
