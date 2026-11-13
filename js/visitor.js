import { esc } from './ui.js?v=debug-20261108-1';

const openings = [
 ['Sino ang hinihintay mong mag-reply?', 'Care includes making time to respond and respecting when someone needs to rest.'],
 ['Kapag gabi ang trabaho, kailan nagkakasama ang pamilya?', 'Providing for a family also takes time away from it. Rest and shared time deserve a place in the schedule.'],
 ['Kapag tapos na ang balita, sino ang patuloy na nagtatanong?', 'Public attention becomes accountability when people return to the evidence and follow up on commitments.'],
 ['Sino ang katabi mo nang sabay-sabay kayong napasigaw?', 'A dance, drama or fight becomes a shared memory through the people who make room for one another.'],
 ['Paano nagiging araw-araw na pag-aalaga ang isang oras ng pakikiisa?', 'Environmental care involves the daily choices and local conditions that make participation possible.'],
 ['Anong uso ang nagpapaalala sa iyo ng isang panahon sa buhay mo?', 'A returning style can carry a memory, while each wearer gives it another meaning.'],
 ['Kapag puno ang computer shop, sino ang naghihintay para sabay kayong makalaro?', 'Friendship includes making room for someone with less time, money or access.'],
 ['Sino ang kasama mo kahit wala kayong bibilhin?', 'Shopping spaces can also hold companionship. Convenience changes how we meet sellers and one another.'],
 ['Sino ang nakakapasok sa usapan, at sino ang naiiwan?', 'Participation depends on a fair opportunity to speak and a willingness to listen.'],
 ['Saan ka nakakaramdam na puwede kang maging ikaw?', 'Belonging grows through the people who make a place welcoming and respect another person’s choices.'],
 ['Kapag may panganib, sino ang unang napapansin natin?', 'Bayanihan includes listening to people whose homes and routes face different risks.'],
 ['Kanino galing ang damit, at sino ang nag-alaga nito?', 'An object can carry another person’s work. Repair and fair exchange give resourcefulness dignity.'],
 ['Anong mensahe ang sisiguraduhin mong maipadala?', 'A richer message still needs someone willing to listen and make room for another person’s voice.'],
 ['Pagkatapos ng “Nakuha mo na ba?”, naitatanong ba natin ang “Kumusta ka na?”', 'Support carries work and sacrifice. Care can travel back toward the person who sends it.'],
 ['Bago mo i-forward, kanino ka may pananagutan?', 'Sharing a message brings responsibility for its context and the people it may affect.'],
 ['Sino ang tumulong para marinig at maintindihan ang kuwentong ito?', 'Performers, translators and audiences all contribute to how a story travels.'],
 ['Kapag nasira, sino ang marunong mag-ayos?', 'Keeping a device useful can recognize repair skills and reduce the pressure to replace it.'],
 ['Nakikita mo ba ang sarili mo sa sinasabing maganda?', 'Representation matters when people can choose a style without being treated as something to correct.']
];
const bridges = {
 Time: 'These shared hours also depend on a place to gather. In Space, we follow the people who make room for one another.',
 Space: 'A welcoming place also needs a way to connect. In Technology, we ask whose choices the tools support.'
};
export function openingHTML(index) {
 const [question,insight]=openings[index];
 return '<p class="visitor-question" lang="fil">'+esc(question)+'</p><p class="visitor-insight">'+esc(insight)+'</p>';
}
export function transitionHTML(group,next) {
 const transitions = {
 'social-time': 'Finding time to reply becomes harder when someone is working through the night. The next exhibit asks whose hours we make room for.',
 'economic-time': 'Work divides the hours of a household. Public events can interrupt them. Next, we follow how attention gathers around political moments.',
 'political-time': 'A hearing asks for our attention; a performance invites us to share it. What changes when the household gathers to watch together?',
 'cultural-time': 'Shared occasions also depend on the conditions around us. The next exhibit asks how environmental care enters our routines.',
 'environmental-time': 'Care can begin with what we keep using. Next, familiar clothes bring the memory of a decade into the present.',
 'social-space': 'A computer shop offers company through a paid turn. The mall offers another place to spend time, even when friends buy nothing.',
 'economic-space': 'Commercial places bring people together, but public participation asks another question: who gets a voice in the gathering?',
 'political-space': 'Being present does not always mean feeling welcome. Next, salons, pageants and drag spaces ask what belonging can feel like.',
 'cultural-space': 'The places that hold a community also face hazards. We turn to the uneven risks people carry in the same city.',
 'environmental-space': 'Looking after a place includes noticing what we throw away. The next stop follows garments into secondhand shops and online resale.',
 'social-technology': 'A phone can carry a song or a message. It can also carry support earned far from home. Next, we follow the person behind the transfer.',
 'economic-technology': 'Sending value requires trust. Forwarding information does too. The next exhibit asks what we owe the people affected by a message.',
 'political-technology': 'Messages can organize a crowd, while performances can gather a fandom. Who helps a story reach another audience?',
 'cultural-technology': 'Stories travel through devices that eventually wear out. Next, we ask how care might extend to the objects and skills behind our connections.',
 'environmental-technology': 'Keeping an object useful asks us to value what is already there. The last comparison brings that question to appearance and self-expression.'
 };
 const text=!next?'Across time, places and tools, whose needs will we choose to carry forward?':
 group.aspect!==next.aspect?bridges[group.aspect]:transitions[group.id];
 return '<p class="visitor-transition">'+esc(text)+'</p>';
}
export function activityHTML(id) {
 if(id==='social-technology')return '<form class="visitor-activity" data-memory="message"><h5 lang="fil">Kung isang text lang…</h5><label for="memory-message">You have limited load. What would you make sure to say?</label><textarea id="memory-message" maxlength="160" rows="3" placeholder="Write a message you would want someone to receive."></textarea><small>Up to 160 characters. Your message stays on this page.</small><button class="btn" type="submit">Keep this thought</button><p class="visitor-response" role="status"></p></form>';
 if(id==='social-space')return '<form class="visitor-activity" data-memory="turn"><h5>Your turn is almost over</h5><fieldset><legend>Your friend is still waiting to use the computer. What would you do?</legend>'+[['share','Finish together and give them a turn'],['wait','Wait for another session so we can play together'],['ask','Ask what they need the computer for']].map(([v,t])=>'<label class="visitor-option"><input type="radio" required name="turn" value="'+v+'"> '+t+'</label>').join('')+'</fieldset><button class="btn" type="submit">Reflect on my choice</button><p class="visitor-response" role="status"></p></form>';
 if(id==='cultural-time')return '<form class="visitor-activity" data-memory="tv"><h5>Make room on the sofa</h5><label for="memory-tv">Which program, performance or fight would bring your household together?</label><input id="memory-tv" maxlength="100" required placeholder="A show or event you remember"><button class="btn" type="submit">Remember together</button><p class="visitor-response" role="status"></p></form>';
 return '';
}
const domains=[
 ['Social','Who do we make time for?'],['Economic','Whose work makes our convenience possible?'],['Political','How do we listen, verify and hold people accountable?'],['Cultural','Who gets to participate and be recognized?'],['Environmental','What responsibilities do we share toward our surroundings?'],['Music, fashion and aesthetics','Who gets to feel represented and valued?']
];
function savePostcard(value,reason) {
 const canvas=document.createElement('canvas');canvas.width=1400;canvas.height=1000;
 const c=canvas.getContext('2d');c.fillStyle='#f5eedc';c.fillRect(0,0,1400,1000);c.fillStyle='#9b3326';c.font='bold 26px monospace';c.fillText('ALWAYS-ON · MY MUSEUM POSTCARD',85,95);
 c.fillStyle='#25231e';c.font='bold 42px Georgia';c.fillText('What I carry forward',85,180);
 let y=270;
 function paragraph(text,font){c.font=font;let line='';for(const word of text.split(/\s+/)){const next=line?line+' '+word:word;if(c.measureText(next).width>1200){c.fillText(line,85,y);y+=46;line=word;}else line=next;}c.fillText(line,85,y);y+=72;}
 paragraph('As our culture changes, I want us to keep '+value+'.','34px Georgia');
 paragraph('Because '+reason,'30px Georgia');c.font='22px monospace';c.fillText('A personal visitor reflection · Always-On digital museum',85,920);
 canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='My-Always-On-Postcard.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'image/png');
}
export function mountVisitor() {
 const target=document.querySelector('#visitor-closing');
 target.innerHTML='<h3>What would you carry forward?</h3><p>Our objects carry different stories of Filipino life. Together, they ask how we make room for one another.</p><ul class="reflection-domains">'+domains.map(([d,q])=>'<li><strong>'+esc(d)+'</strong><p>'+esc(q)+'</p></li>').join('')+'</ul><form id="visitor-postcard"><label for="carry-value">As our culture changes, I want us to keep…</label><select id="carry-value"><option>pakikipagkapwa</option><option>care for family</option><option>friendship and belonging</option><option>respect for work</option><option>accountability</option><option>bayanihan</option><option>dignity and self-expression</option></select><label for="carry-reason">Because…</label><textarea id="carry-reason" rows="4" maxlength="320" required placeholder="Connect your choice to an artifact, a person or a memory."></textarea><small>Your reflection stays on this page. Save the postcard to keep a copy.</small><button type="submit" class="btn btn--ink">Create my postcard</button><p id="postcard-status" role="status"></p></form><div id="postcard-result" hidden><blockquote id="postcard-quote"></blockquote><button class="btn" type="button" id="save-postcard">Save postcard as an image</button></div>';
 let saved;
 document.querySelector('#visitor-postcard').addEventListener('submit',event=>{event.preventDefault();const reason=document.querySelector('#carry-reason').value.trim();if(!reason){document.querySelector('#postcard-status').textContent='Add a thought or memory to your postcard.';return;}saved={value:document.querySelector('#carry-value').value,reason};document.querySelector('#postcard-quote').textContent='As our culture changes, I want us to keep '+saved.value+' because '+reason;document.querySelector('#postcard-result').hidden=false;document.querySelector('#postcard-status').textContent='Your postcard is ready below.';});
 document.querySelector('#save-postcard').addEventListener('click',()=>{if(saved)savePostcard(saved.value,saved.reason)});
 document.querySelectorAll('[data-memory]').forEach(form=>form.addEventListener('submit',event=>{
 event.preventDefault();const kind=form.dataset.memory,response=form.querySelector('[role="status"]');
 if(kind==='message'){if(!form.querySelector('textarea').value.trim()){response.textContent='Write a message before reflecting.';return;}response.textContent='A short message can carry attention and care. When would the person receiving yours have time to reply?';}
 if(kind==='turn')response.textContent={share:'Sharing a turn can help a friend join in. What if they need more time than you do?',wait:'Waiting can be a way of keeping someone company. Could your friend afford another session?',ask:'Asking first gives your friend a say. Their reason for going online may be different from yours.'}[new FormData(form).get('turn')];
 if(kind==='tv')response.textContent='Think of who might miss that shared moment because of work, school or care responsibilities. How could you make room for them?';
 }));
}
