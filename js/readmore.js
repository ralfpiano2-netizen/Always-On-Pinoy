// Keep images and interactive exhibits visible; shorten only longer reading passages.
let passageNumber=0;
function enhance(copy) {
 if(copy.dataset.rm || copy.textContent.trim().length<360) return;
 const children=[...copy.children]; const first=children[0]; if(!first)return;
 copy.dataset.rm='1'; const rest=children.slice(1),clamp=first.textContent.trim().length>320;
 if(clamp)first.classList.add('rm-clamp');
 rest.forEach(el=>el.classList.add('rm-hidden'));
 const button=document.createElement('button');button.type='button';button.className='btn btn--plain readmore-btn';
 button.textContent='Read more';button.setAttribute('aria-expanded','false');
 const id=copy.id || `era-copy-${++passageNumber}`;copy.id=id;button.setAttribute('aria-controls',id);
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.textContent=open?'Show less':'Read more';if(clamp)first.classList.toggle('rm-clamp',!open);rest.forEach(el=>el.classList.toggle('rm-hidden',!open));});
 copy.append(button);
}
function scan(){document.querySelectorAll('.era-copy').forEach(enhance);}
let scheduled=false;
new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;scan();});}).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',scan);scan();
