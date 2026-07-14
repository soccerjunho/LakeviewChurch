import {loadRecentLives} from './youtube.js';
import {renderLiveList} from './ui.js';

let player;

window.onYouTubeIframeAPIReady=()=>{
 player=new YT.Player('player',{
   videoId:'',
   playerVars:{rel:0}
 });
};

document.getElementById('loadBtn').onclick=()=>{
 const id=document.getElementById('youtube-url').value.split('v=').pop();
 if(player) player.loadVideoById(id);
};

loadRecentLives().then(items=>{
 renderLiveList(items,v=>{
   document.getElementById('youtube-url').value='https://www.youtube.com/watch?v='+v.videoId;
   if(player) player.loadVideoById(v.videoId);
 });
});
