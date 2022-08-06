import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
const player = new Player(iframe);
auditLocalStorage();

player.on('timeupdate', throttle(currentTime, 1000));

//зберігаю у сховище
function currentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
}




function auditLocalStorage() {
  if ('videoplayer-current-time' === undefined || 'videoplayer-current-time' === null) {
   
  }
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  console.log(localStorage.getItem('videoplayer-current-time'));
}
