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
 { id:'timeline', group:'social-space', title:'Build the timeline', kind:'game' },
 { id:'shop', group:'economic-space', title:'More than a transaction', kind:'question',
   question:'What should we notice when comparing mall hangouts and live selling?',
   answers:['Live selling has replaced every physical mall.','Every shopping interaction creates a close friendship.','Shopping also involves places, people and access, which change across settings.'], correct:2,
   explanation:'A mall can be a place to spend time together, while a livestream connects buyers and sellers through another setting. The museum asks who can participate and how.',
   source:['SM Prime, company history','https://www.smprime.com/our-history/'] },
 { id:'match', group:'others-space', title:'Match the everyday practice', kind:'game' },
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
const timeline = [
 {id:'sms',label:'2000s · Prepaid Nokia texts'},
 {id:'album',label:'2020s · Messenger shared albums'},
 {id:'premiere',label:'2030 proposal · Family premiere night'}
];
const pairs = [
 {artifact:'Nokia keypad phone',practice:'Compose a short text'},
 {artifact:'PisoNet computer',practice:'Share a timed, paid session'},
 {artifact:'Ukay-ukay garment',practice:'Inspect, reuse and repair clothing'}
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
 let opener,active,certificate;
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
  opener=source||document.querySelector('[data-checkpoint="'+c.id+'"]');active=c;seen.add(c.id);title.textContent=c.title;
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
  let selected=[];
  content.innerHTML='<p>Tap the three artifacts in order from earliest to latest. The final scene is a proposed future.</p><ol class="timeline-slots" aria-label="Your timeline"></ol><div class="learning-choices">'+[timeline[2],timeline[0],timeline[1]].map(t=>'<button class="btn" type="button" data-era="'+t.id+'">'+esc(t.label)+'</button>').join('')+'</div><p class="learning-feedback" role="status"></p><button class="btn btn--plain" type="button" data-timeline-reset>Start again</button>';
  const buttons=[...content.querySelectorAll('[data-era]')];
  content.querySelector('[data-timeline-reset]').onclick=()=>timelineGame(c);
  buttons.forEach(button=>button.onclick=()=>{
   const item=timeline.find(t=>t.id===button.dataset.era);
   if(item.id!==timeline[selected.length].id){content.querySelector('[role=status]').textContent='That belongs later. Start with the prepaid texting artifact.';return;}
   selected.push(item.id);button.disabled=true;
   const li=document.createElement('li');li.textContent=item.label;content.querySelector('ol').append(li);
   content.querySelector('[role=status]').textContent='Placed in order. Choose the next artifact.';
   if(selected.length===3)finishGame(c,'Timeline complete. Texts, shared albums and a proposed family premiere show different ways to make time for one another.');
  });
 }
 function matchGame(c) {
  let index=0;
  function round() {
   content.innerHTML='<p>Match each artifact with the practice it represents. Match '+(index+1)+' of 3.</p><p class="match-artifact">'+esc(pairs[index].artifact)+'</p><div class="learning-choices">'+[pairs[2],pairs[0],pairs[1]].map(p=>'<button class="btn" type="button" data-practice="'+esc(p.practice)+'">'+esc(p.practice)+'</button>').join('')+'</div><p class="learning-feedback" role="status"></p>';
   content.querySelectorAll('[data-practice]').forEach(button=>button.onclick=()=>{
    if(button.dataset.practice!==pairs[index].practice){content.querySelector('[role=status]').textContent='Try again. Think about how someone would use this artifact.';return;}
    index++;if(index===pairs.length)finishGame(c,'All three matched. Small objects can reveal how people communicate, share access and keep things useful.');else round();
   });
  }
  round();
 }
 function passport(source) {
  if(dialog.open)dialog.close();
  opener=source;active=null;title.textContent='Your learning passport';
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
 function close() {dialog.close();opener?.focus({preventScroll:true});}
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
 // Offer each checkpoint once when its card reaches the reading area.
 const pending=new Map();
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  const id=entry.target.id.replace('checkpoint-','');
  clearTimeout(pending.get(id));
  if(!entry.isIntersecting||seen.has(id))return;
  pending.set(id,setTimeout(()=>{
   const rect=entry.target.getBoundingClientRect();
   if(seen.has(id)||rect.top<40||rect.bottom>innerHeight||document.querySelector('dialog[open]')||document.visibilityState!=='visible')return;
   show(checkpoints.find(c=>c.id===id),entry.target.querySelector('button'));
  },850));
 }),{threshold:.65});

 document.querySelectorAll('.learning-card').forEach(el=>observer.observe(el));
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
