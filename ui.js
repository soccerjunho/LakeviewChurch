export function renderLiveList(items,onClick){
const root=document.getElementById('liveList');
root.innerHTML='';
items.forEach(v=>{
 const d=document.createElement('div');
 d.innerHTML=`<img width=160 src="${v.thumb}"><br>${v.title}`;
 d.onclick=()=>onClick(v);
 root.appendChild(d);
});
}