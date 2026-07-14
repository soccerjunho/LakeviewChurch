export const API_KEY='YOUR_YOUTUBE_API_KEY';
export const CHANNEL_ID='YOUR_CHANNEL_ID';

export async function loadRecentLives(){
 const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=10&key=${API_KEY}`;
 const r=await fetch(url);
 const j=await r.json();
 return j.items.map(i=>({
   videoId:i.id.videoId,
   title:i.snippet.title,
   thumb:i.snippet.thumbnails.medium.url,
   published:i.snippet.publishedAt
 }));
}
