import { catchSpriteHTML } from './catch-sprites.js?v=pixel-catch-20261113';
import { esc } from './ui.js?v=debug-20261108-1';

const checkpoints = [
 { id:'reply', group:'social-time', title:'A message and a moment', kind:'question',
   question:'What does the move from prepaid texts to group chats suggest about care?',
   answers:['A faster reply always means a stronger friendship.','More ways to communicate still require respect for another person’s time.','Everyone can now stay connected all day.'], correct:1,
   explanation:'Care includes paying attention and allowing someone time to respond. Messenger adds shared media, while prepaid texting shows how practical limits shaped communication.',
   source:['Crisan (2024), Messenger shared albums','https://about.fb.com/news/2024/04/hd-photos-shared-albums-and-more-on-messenger/'] },
 { id:'watch', group:'cultural-time', title:'Make room on the sofa', kind:'question',
   question:'What connects a Pacquiao public screening with a shared P-pop concert screening?',
   answers:['Both can become occasions to reserve time and make room for other people.','Both require every viewer to own the newest device.','Both prove that all Filipino families watch together.'], correct:0,
   explanation:'Shared viewing can create an occasion to gather. The 2009 screenings are documented examples, while the 2030 P-pop screening is a proposal inspired by existing concert formats.',
   source:['Villar (2009), public fight screenings','https://www.philstar.com/sports/2009/11/16/523550/jampacked-crowds-cheer-historic-win'] },
 { id:'timeline', group:'social-space', title:'Snapshot Safari', kind:'game' },
 { id:'shop', group:'economic-space', title:'More than a transaction', kind:'question',
   question:'What should we notice when comparing mall hangouts and live selling?',
   answers:['Live selling has replaced every physical mall.','Every shopping interaction creates a close friendship.','Shopping also involves places, people and access, which change across settings.'], correct:2,
   explanation:'A mall can be a place to spend time together, while a livestream connects buyers and sellers through another setting. The museum asks who can participate and how.',
   source:['SM Prime, company history','https://www.smprime.com/our-history/'] },
 { id:'match', group:'others-space', title:'Barkada Basket', kind:'game' },
 { id:'padala', group:'economic-technology', title:'The person behind the padala', kind:'question',
   question:'What does the shift from remittance counters to digital payment channels teach us?',
   answers:['Methods can change while communicating and caring across distance still take effort.','A faster transfer automatically improves a family relationship.','Retail digital-payment statistics measure every overseas remittance.'], correct:0,
   explanation:'The sender’s work and the family relationship remain part of the story. BSP retail-payment figures describe retail activity, so the exhibit keeps their scope clear.',
   source:['BSP (2025), 2024 digital payments report','https://www.bsp.gov.ph/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf'] },
 { id:'verify', group:'political-technology', title:'Before you forward', kind:'question',
   question:'What should a future source-tracing card help a visitor do?',
   answers:['Assume every clip with an edit history is true.','Examine available origin, context and independent checks before sharing.','Treat missing metadata as proof that a clip is false.'], correct:1,
   explanation:'Origin and edit history can inform a check, while the claim still needs context and evidence. Responsibility includes avoiding accusations that the evidence cannot support.',
   source:['C2PA, provenance explainer','https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html'] }
];
const key='always-on-learning-v1';
function readProgress() {
 try { const saved=JSON.parse(localStorage.getItem(key));return new Set(Array.isArray(saved)?saved.filter(id=>checkpoints.some(c=>c.id===id)):[]); }
 catch { return new Set(); }
}
export function checkpointHTML(group) {
 const c=checkpoints.find(c=>c.group===group);
 if(!c)return '';
 const number=checkpoints.filter(x=>x.kind===c.kind).indexOf(c)+1;
 return '<section class="learning-card" id="checkpoint-'+c.id+'" aria-labelledby="checkpoint-title-'+c.id+'"><p class="learning-eyebrow">'+(c.kind==='question'?'Question '+number+' of 5':'Game '+number+' of 2')+' · 10 points</p><h4 id="checkpoint-title-'+c.id+'">'+esc(c.title)+'</h4><p>Pause here for a short '+(c.kind==='question'?'question':'game')+'. Collect all seven stamps to unlock your certificate.</p><button type="button" class="btn btn--ink" data-checkpoint="'+c.id+'">'+(c.kind==='question'?'Open question':'Play game')+'</button><span class="learning-card-status" data-status="'+c.id+'"></span></section>';
}
export function mountLearning() {
 const complete=readProgress(),seen=new Set(complete);
 const dialog=document.createElement('dialog');
 dialog.className='learning-dialog';dialog.setAttribute('aria-labelledby','learning-title');
 dialog.innerHTML='<div class="learning-dialog-head"><h2 id="learning-title"></h2><button type="button" class="btn btn--plain" data-learning-close>Close</button></div><div class="learning-dialog-body" id="learning-content"></div>';
 document.body.append(dialog);
 const content=dialog.querySelector('#learning-content'),title=dialog.querySelector('h2');
 let opener,certificate;
 let stopGame=()=>{};
 const badge=document.createElement('button');badge.type='button';badge.className='learning-badge';document.body.append(badge);
 const final=document.createElement('section');final.id='master-certificate';final.className='learning-finale';
 document.querySelector('#visitor-closing').after(final);
 function update() {
  const points=complete.size*10;
  badge.textContent='Mastery '+complete.size+'/7 · '+points+' pts';badge.setAttribute('aria-label','Open learning passport: '+complete.size+' of 7 completed, '+points+' points');
  document.querySelectorAll('[data-status]').forEach(el=>{el.textContent=complete.has(el.dataset.status)?'✓ Earned · 10 points':'Ready to earn';});
  final.innerHTML='<h3>Your Philippine Pop Culture Master certificate</h3><p>'+complete.size+' of 7 stamps · '+points+' of 70 points</p><p>Complete five questions and two games correctly. You can retry each checkpoint and return to saved progress in this browser.</p><button type="button" class="btn btn--ink" data-learning-passport>'+ (complete.size===7?'Enter your name & create certificate':'Open my learning passport')+'</button>';
 }
 function show(c,source) {
  if(document.querySelector('dialog[open]'))return;
  stopGame();opener=source||document.querySelector('[data-checkpoint="'+c.id+'"]');seen.add(c.id);title.textContent=c.title;
  if(c.kind==='question')question(c);else if(c.id==='timeline')timelineGame(c);else matchGame(c);
  dialog.showModal();
 }
 function award(c) {
  complete.add(c.id);try{localStorage.setItem(key,JSON.stringify([...complete]));}catch{}
  update();
 }
 function question(c) {
  content.innerHTML='<p class="learning-eyebrow">Question · 10 points'+(complete.has(c.id)?' · Already earned':'')+'</p><form><fieldset><legend>'+esc(c.question)+'</legend>'+c.answers.map((a,i)=>'<label class="learning-option"><input type="radio" name="answer" value="'+i+'" required> '+esc(a)+'</label>').join('')+'</fieldset><button class="btn btn--ink" type="submit">Check my answer</button><p class="learning-feedback" role="status"></p><div class="learning-next"></div></form>';
  content.querySelector('form').addEventListener('submit',e=>{
   e.preventDefault();const chosen=Number(new FormData(e.currentTarget).get('answer'));
   const feedback=content.querySelector('[role=status]');
   if(chosen===c.correct){award(c);feedback.textContent='Correct. '+c.explanation;content.querySelector('.learning-next').innerHTML='<p><a href="'+esc(c.source[1])+'" target="_blank" rel="noopener noreferrer">'+esc(c.source[0])+' ↗</a></p><button class="btn" type="button" data-learning-close>Continue exploring</button>';}
   else {feedback.textContent='Try again. Consider the people, access and evidence behind the technology.';content.querySelector('.learning-next').innerHTML='';}
  });
 }
 function finishGame(c,message) {
  award(c);content.innerHTML='<p class="learning-feedback" role="status">'+esc(message)+'</p><p>Stamp earned · 10 points. You now have '+complete.size+' of 7 stamps.</p><button class="btn btn--ink" type="button" data-learning-close>Continue exploring</button>';
 }
 function timelineGame(c) {
  stopGame();let hits=0,ended=false,timer;
  const artifacts=[['Nokia keypad','nokia.jpg'],['PisoNet','pisonet-2010.jpg'],['Friendster','friendster-pink-hearts.jpg'],['MP3 player','ipod-nano.png'],['Prepaid card','prepaid-recollection.jpg']];
  content.innerHTML='<p>Aim your camera! Tap each moving 2000s artifact to photograph it. Collect five snapshots.</p><p class="arcade-score" role="status">Snapshots: 0 / 5</p><div class="arcade-field snapshot-field"><button type="button" class="snapshot-target"><img src="assets/sources/nokia.jpg" alt="">📷 Nokia keypad</button></div><button type="button" class="btn" id="steady-camera">Steady camera</button>';
  const target=content.querySelector('.snapshot-target'),field=content.querySelector('.arcade-field');
  let steady=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function move(){if(ended)return;target.style.left=Math.round(Math.random()*Math.max(0,field.clientWidth-target.offsetWidth-12))+'px';target.style.top=Math.round(Math.random()*Math.max(0,field.clientHeight-target.offsetHeight-12))+'px';}
  timer=setInterval(()=>{if(!steady)move();},1100);move();
  content.querySelector('#steady-camera').onclick=event=>{steady=!steady;event.currentTarget.textContent=steady?'Move targets':'Steady camera';};
  target.onclick=()=>{
   hits++;content.querySelector('[role=status]').textContent='Snapshots: '+hits+' / 5';
   if(hits===5){ended=true;clearInterval(timer);finishGame(c,'Five artifacts photographed! Everyday objects help us remember how people kept in touch, shared access and carried music.');return;}
   target.innerHTML='<img src="assets/sources/'+artifacts[hits][1]+'" alt="">📷 '+esc(artifacts[hits][0]);move();
  };
  stopGame=()=>{ended=true;clearInterval(timer);};
 }
 function matchGame(c) {
  stopGame();let caught=0,lane=1,falling,frame,ended=false,playing=false,lastDrop=0,slow=false;
  const drops=[['Text',0],['Song',2],['Spam',1],['Photo',0],['Song',1],['Spam',2],['Text',2],['Photo',1]];
  let next=0;
  content.innerHTML='<p>Move your basket to catch Text, Song and Photo keepsakes. Let Spam fall past. Catch five to earn your stamp. Drops start slow and speed up with each catch.</p><p class="arcade-score" role="status">Caught: 0 / 5</p><div class="arcade-field basket-field" tabindex="0" aria-label="Barkada Basket play area. Use left and right arrow keys."><span class="falling-keepsake" hidden></span><span class="keepsake-basket" aria-hidden="true">'+catchSpriteHTML('Basket','')+'</span></div><div class="basket-controls"><button type="button" class="btn" data-lane="0">Left</button><button type="button" class="btn" data-lane="1">Middle</button><button type="button" class="btn" data-lane="2">Right</button></div><button type="button" class="btn btn--ink" id="basket-start">Start game</button> <button type="button" class="btn" id="basket-slow" aria-pressed="false">Slower drops</button>';
  const field=content.querySelector('.basket-field'),item=content.querySelector('.falling-keepsake'),basket=content.querySelector('.keepsake-basket'),status=content.querySelector('[role=status]'),start=content.querySelector('#basket-start');
  function steer(value){lane=Math.max(0,Math.min(2,value));basket.style.left=(lane*33.333+16.667)+'%';content.querySelectorAll('[data-lane]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.lane)===lane)));}
  field.insertAdjacentHTML('beforebegin','<div class="catch-legend">'+['Text','Song','Photo','Spam'].map(name=>'<span>'+catchSpriteHTML(name,'')+' '+name+'</span>').join('')+'</div>');
  steer(lane);
  content.querySelectorAll('[data-lane]').forEach(b=>b.onclick=()=>steer(Number(b.dataset.lane)));
  field.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();steer(lane+(event.key==='ArrowLeft'?-1:1));}});
  field.addEventListener('pointerdown',event=>{const rect=field.getBoundingClientRect();steer(Math.floor((event.clientX-rect.left)/rect.width*3));});
  content.querySelector('#basket-slow').onclick=event=>{slow=!slow;event.currentTarget.setAttribute('aria-pressed',String(slow));event.currentTarget.textContent=slow?'Normal speed':'Slower drops';};
  function tick(time){
   if(ended||!playing)return;
   if(!falling){const [name,position]=drops[next++%drops.length];falling={name,lane:position,progress:0,duration:5000-caught*700};item.hidden=false;item.innerHTML=catchSpriteHTML(name,name==='Text'?'Text message':name==='Song'?'Music note':name==='Photo'?'Photograph':'Spam warning');item.style.left=(position*33.333+16.667)+'%';lastDrop=time;}
   falling.progress+=Math.min(time-lastDrop,50)/(falling.duration*(slow?1.7:1));lastDrop=time;
   item.style.top=(falling.progress*(field.clientHeight-112))+'px';
   if(falling.progress>=1){
    if(lane===falling.lane){
     if(falling.name==='Spam')status.textContent='Let spam pass. Caught: '+caught+' / 5';
     else {caught++;status.textContent='Keepsake caught! '+caught+' / 5';}
    }else status.textContent='Keep going! Caught: '+caught+' / 5';
    falling=null;item.hidden=true;
    if(caught>=5){ended=true;finishGame(c,'Five keepsakes saved! Sharing a message, photograph or song can give someone a place in a shared memory.');return;}
   }
   frame=requestAnimationFrame(tick);
  }
  start.onclick=()=>{playing=!playing;start.textContent=playing?'Pause':'Resume';if(playing){lastDrop=performance.now();frame=requestAnimationFrame(tick);}else cancelAnimationFrame(frame);};
  stopGame=()=>{ended=true;cancelAnimationFrame(frame);};
 }
 function passport(source) {
  stopGame();
  if(dialog.open)dialog.close();
  opener=source;title.textContent='Your learning passport';
  content.innerHTML='<p>'+complete.size+' of 7 stamps · '+complete.size*10+' / 70 points</p><p>Five questions and two games. Earn each stamp once, with unlimited retries.</p><ul class="learning-stamps">'+checkpoints.map(c=>'<li><span>'+ (complete.has(c.id)?'✓':'○')+' '+esc(c.title)+'</span><button type="button" class="btn btn--plain" data-review="'+c.id+'">'+(complete.has(c.id)?'Review':'Open')+'</button></li>').join('')+'</ul>'+(complete.size===7?'<form id="certificate-form"><label for="certificate-name">Your name on the certificate</label><input id="certificate-name" name="name" autocomplete="name" maxlength="70" required placeholder="Enter your full name"><button type="submit" class="btn btn--ink">Preview my certificate</button><p role="status" id="certificate-status"></p></form>':'<p>Collect the remaining stamps to unlock your name field and certificate.</p>');
  content.insertAdjacentHTML('beforeend','<button class="btn btn--plain" type="button" id="restart-learning">Start a new challenge</button>');
  content.querySelector('#restart-learning').onclick=()=>{complete.clear();seen.clear();try{localStorage.removeItem(key);}catch{}update();passport(source);};
  content.querySelectorAll('[data-review]').forEach(button=>button.onclick=()=>{dialog.close();show(checkpoints.find(c=>c.id===button.dataset.review),source);});
  content.querySelector('form')?.addEventListener('submit',event=>{
   event.preventDefault();const name=content.querySelector('input').value.trim();
   if(!name){content.querySelector('[role=status]').textContent='Enter the name you want printed on the certificate.';return;}
   certificate={name,date:new Date().toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})};
   certificateView();
  });
  dialog.showModal();
 }
 function certificateView() {
  title.textContent='Your certificate';
  content.innerHTML='<div class="certificate-preview"><p>ALWAYS-ON · THE PHILIPPINE POP CULTURE TIME MACHINE</p><h3>Philippine Pop Culture Master</h3><p>Awarded to</p><strong>'+esc(certificate.name)+'</strong><p>For completing five questions and two interactive games exploring Filipino experiences across Time, Space and Technology.</p><p>70 / 70 points · '+esc(certificate.date)+'</p><small>Issued by Always-On · Group 8 · A1106<br>A student digital museum learning certificate</small></div><button type="button" class="btn btn--ink" id="download-certificate">Download certificate image</button><button type="button" class="btn btn--plain" id="edit-certificate">Edit name</button><p role="status" id="download-status"></p>';
  content.querySelector('#edit-certificate').onclick=()=>passport(opener);
  content.querySelector('#download-certificate').onclick=()=>downloadCertificate(certificate,content.querySelector('#download-status'));
 }
 function close() {
  stopGame();dialog.close();opener?.focus({preventScroll:true});scheduleCheckpoint();
 }

 dialog.addEventListener('click',event=>{if(event.target.closest('[data-learning-close]'))close();});
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 document.addEventListener('click',event=>{
  const card=event.target.closest('[data-checkpoint]');
  if(card)show(checkpoints.find(c=>c.id===card.dataset.checkpoint),card);
  const progress=event.target.closest('[data-learning-passport]');
  if(progress)passport(progress);
 });
 badge.onclick=()=>passport(badge);
 update();
 // Recheck positions on scrolling and after other museum dialogs close.
 // This also works when a checkpoint entered view while the tab was inactive.
 const cards=[...document.querySelectorAll('.learning-card')];
 let scheduled=false;
 function checkPosition() {
  scheduled=false;
  const visible=cards.filter(card=>{
   const rect=card.getBoundingClientRect();
   return rect.bottom>64&&rect.top<innerHeight*.85;
  });
  for(const card of cards)if(!visible.includes(card)&&!complete.has(card.id.replace('checkpoint-','')))seen.delete(card.id.replace('checkpoint-',''));
  if(document.querySelector('dialog[open]'))return;
  const card=visible.find(card=>!seen.has(card.id.replace('checkpoint-','')));
  if(card)show(checkpoints.find(c=>c.id===card.id.replace('checkpoint-','')),card.querySelector('button'));
 }
 function scheduleCheckpoint() {
  if(scheduled)return;scheduled=true;requestAnimationFrame(checkPosition);
 }
 addEventListener('scroll',scheduleCheckpoint,{passive:true});
 addEventListener('resize',scheduleCheckpoint,{passive:true});
 addEventListener('hashchange',scheduleCheckpoint);
 document.addEventListener('visibilitychange',scheduleCheckpoint);
 document.addEventListener('close',scheduleCheckpoint,true);
 const observer=new IntersectionObserver(scheduleCheckpoint,{threshold:0});
 cards.forEach(card=>observer.observe(card));
 scheduleCheckpoint();

}
function downloadCertificate(certificate,status) {
 const canvas=document.createElement('canvas');canvas.width=2000;canvas.height=1414;
 const c=canvas.getContext('2d');c.fillStyle='#faf3df';c.fillRect(0,0,2000,1414);c.strokeStyle='#9b6b2d';c.lineWidth=8;c.strokeRect(55,55,1890,1304);c.lineWidth=2;c.strokeRect(80,80,1840,1254);
 c.textAlign='center';c.fillStyle='#333026';c.font='26px monospace';c.fillText('ALWAYS-ON · THE PHILIPPINE POP CULTURE TIME MACHINE',1000,220);
 c.font='bold 68px Georgia';c.fillText('Philippine Pop Culture Master',1000,390);
 c.font='30px Georgia';c.fillText('Awarded to',1000,520);
 let size=82;c.font='bold '+size+'px Georgia';
 while(c.measureText(certificate.name).width>1660&&size>24){size-=2;c.font='bold '+size+'px Georgia';}
 c.fillText(certificate.name,1000,665);
 c.font='30px Georgia';c.fillText('For completing five questions and two interactive games',1000,815);c.fillText('exploring Filipino experiences across Time, Space and Technology.',1000,865);
 c.font='bold 30px monospace';c.fillText('70 / 70 POINTS',1000,975);
 c.font='28px Georgia';c.fillText(certificate.date,1000,1045);
 c.font='26px Georgia';c.fillText('Issued by Always-On · Group 8 · A1106',1000,1170);
 c.font='22px Georgia';c.fillText('A student digital museum learning certificate',1000,1220);
 canvas.toBlob(blob=>{
  if(!blob){status.textContent='The image could not be created. Please try again.';return;}
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Philippine-Pop-Culture-Master.png';a.click();status.textContent='Your certificate image is ready to save.';setTimeout(()=>URL.revokeObjectURL(url),1000);
 },'image/png');
}
