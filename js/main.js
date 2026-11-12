import { futureArtifactHTML, futureCreditsHTML, FUTURE_REFERENCES, FUTURE_ARTIFACTS } from './future.js?v=feedback-20261112';
import { CHRONOLOGY_GROUPS, WORKSHEET_REFERENCES } from './chronology-data.js?v=photos-20261112';
import { ringtonePanelHTML, mountRingtones } from './ringtones.js?v=debug-20261108-1';
import { presentMediaHTML, comparisonMediaHTML } from './present-media.js?v=image-repair-20261109-1';
// Boot: render every label and dialog from the content modules, fill asset slots, then drive the
// HUD, the passport and each stage from the scroll observers.
import { SITE, ZONES, TOUR_ARTIFACTS as ARTIFACTS, LOBBY_NOTES, CREDITS } from './content.js?v=chronology-20261109-2';
import { COMPARISONS, DOCUMENT_REFERENCES, DOCUMENT_SCOPE, SYNOPSIS, CLOSING } from './exhibit-text.js?v=chronology-20261109-2';
import { SLOTS } from './slots.js?v=debug-20261108-1';
import { loadIndex } from './assets.js?v=debug-20261108-1';
import { wallet, passport } from './state.js?v=debug-20261108-1';
import { watchSteps, watchSections, watchProgress, watchMiddle } from './scroll.js?v=debug-20261108-1';
import { placeholder } from './scenes.js?v=debug-20261108-1';
import { $, $$, esc, accession, citeText, img, go, resolveAnchor, reduceMotion, emit } from './ui.js?v=debug-20261108-1';
import { mountTransitions } from './exhibits/transitions.js?v=debug-20261108-1';
import { mountTV } from './exhibits/tvguide.js?v=debug-20261108-1';
import { mountStreet } from './exhibits/pisonet.js?v=debug-20261108-1';
import { mountNokia, messageDemoHTML } from './exhibits/nokia.js?v=debug-20261108-1';
import { mountChainText } from './exhibits/chaintext.js?v=debug-20261108-1';
import { enable, disable, isOn, sfx, setAmbience, playMusic, playGuide, stopGuide } from './audio.js?v=debug-20261108-1';
import { MEDIA, artifactCardMediaHTML, artifactMediaHTML, archiveMediaHTML, mediaCreditsHTML, mountMedia } from './media.js?v=image-repair-20261109-1';

const activeStampCount = () => ARTIFACTS.filter(a=>passport.has(a.id)).length;
const ALL_REFERENCES = [...new Map([...DOCUMENT_REFERENCES, ...WORKSHEET_REFERENCES, ...FUTURE_REFERENCES.map(r=>({...r,apa:r.apa+' '+r.url}))].map(r=>[r.url || r.apa,r])).values()].sort((a,b)=>a.apa.localeCompare(b.apa));
const resolveStop = resolveAnchor;
const BY_ID = Object.fromEntries(ARTIFACTS.map(a => [a.id, a]));
const ZONE_BY_ID = Object.fromEntries(ZONES.map(z => [z.id, z]));
const GROUP_BY_ID=Object.fromEntries(CHRONOLOGY_GROUPS.map(g=>[g.id,g]));
const groupFor=id=>GROUP_BY_ID[id] || CHRONOLOGY_GROUPS.find(g=>g.members.includes(id));
const futureFor=g=>FUTURE_ARTIFACTS.find(a=>a.zone===g.zone && (a.category.startsWith('Others')?'Others':a.category)===g.category);
const DOMAINS = ['Social', 'Economic', 'Political', 'Cultural'];
const LENSES = ['Time', 'Space', 'Technology', 'Overall'];
const LENS_LABEL = { Time: 'time', Space: 'space', Technology: 'technology', Overall: 'overall trend' };
// Scrubbed steps (the fight crowd, the chain text) run two screens long. They are sized here,
// before the asset index loads, so a reload restores the scroll against the final page height.
const LONG = new Set(['ao-05', 'ao-15']);

/* Rendering */

// Link the supplied author–date citations to their source without changing their wording.
function documentText(text) {
  const aliases = { 'A. K. S. Ong et al.': 'Ong, A. K.', 'J. C. Ong et al.': 'Ong, J. C., Fallorina',
    'J. C. Ong & Tapsell': 'Ong, J. C., & Tapsell', 'Messenger & Ghosheh': 'Messenger,',
    'Anoc & Cruz': 'Anoc,', 'Anarcon & Maglipon': 'Anarcon, J. P., & Maglipon', 'Rico & de Leon': 'Rico,' };
  return text.split(/(\([^()]*(?:(?:19|20)\d{2}[ab]?|n\.d\.)[^()]*\))/g).map(part => {
    if (!part.startsWith('(')) return esc(part);
    return '(' + part.slice(1, -1).split('; ').map(citation => {
      const match = citation.match(/^(.*), ((?:19|20)\d{2}[ab]?|n\.d\.)$/);
      if (!match) return esc(citation);
      const author = match[1], year = match[2];
      const prefix = aliases[author] || author.replace(/ et al\.$/, '').split(' & ')[0];
      const ref = ALL_REFERENCES.find(ref => ref.apa.startsWith(prefix) && ref.apa.includes('(' + year));
      return ref?.url ? `<a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(citation)}</a>` : esc(citation);
    }).join('; ') + ')';
  }).join('');
}
function documentReferencesHTML() {
  return `<p>${esc(DOCUMENT_SCOPE)}</p><ul class="ref-list">${ALL_REFERENCES.map(ref => `<li>${ref.url ? `<a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.apa)}</a>` : esc(ref.apa)}</li>`).join('')}</ul>`;
}
function documentParagraphs(text) {
  return text.split(/\n\n+/).map(paragraph => `<p>${documentText(paragraph)}</p>`).join('');
}
function comparisonHTML(c, era = '') {
  return `<details class="archive-card document-comparison" id="${c.id}"><summary><span>${esc(c.domain)} · ${esc(LENS_LABEL[c.lens])}</span><h3>${esc(c.title)}</h3></summary><div class="comparison-copy"><p>${esc(c.intro)}</p>
    ${!era || era==='2000s' ? `<h4>2000s</h4>${documentParagraphs(c.past)}` : ''}
    ${!era || era==='2020s' ? `<h4>2020s</h4>${comparisonMediaHTML(c.id,era)}${documentParagraphs(c.present)}` : ''}
    <h4>Past–present connection</h4>${documentParagraphs(c.synthesis)}</div></details>`;
}

const SHORT_LABELS = {
  'ao-01': 'SexBomb’s Spageti Song, Vhong Navarro’s Pamela One, and Bayani Agbayani’s Otso-Otso connect the novelty-song moment of 2003–2004 with family time, shared play, and recognition for performers (Gloria, 2026; Gil, 2005; Lo, 2004).',
  'ao-02': 'Meteor Garden became a Philippine viewing phenomenon in 2003. Following its story and stars gave audiences shared references within the television schedule (Flores, 2003).',
  'ao-03': 'Pangako Sa ’Yo attracted audiences during its original 2000–2002 run. Following a story meant making room for it in the day’s television schedule (ABS-CBN, 2022; Anarcon & Maglipon, 2020).',
  'ao-04': 'StarStruck launched in 2003, followed by Pinoy Big Brother in 2005. Reality formats gave viewers reasons to keep following performers and participants as their stories developed (Anarcon, 2019; Sabio, 2025).',
  'ao-05': 'On fight Sundays, neighbors gathered around a television to follow Pacquiao’s bouts. This reconstructed scene recalls the shared anticipation of a live broadcast.',
  'ao-06': 'BPO work connected Philippine workers to international service operations. Night shifts changed local routines around customers elsewhere, raising questions about working hours and conditions (Messenger & Ghosheh, 2010).',
  'ao-07': 'A coin slot, a monitor, and a few minutes online. This reconstructed PisoNet scene recalls neighborhood access shared, timed, and paid for in small amounts.',
  'ao-08': 'Friendster gave users a profile to visit and a way to make friendship visible. Internet cafés provided access for people without convenient connections at home (DigitalFilipino, 2007; Glasner, 2005).',
  'ao-09': 'Computer shops combined digital play with company in the same room. Students gathered to play Ragnarok Online; Netopia and neighborhood cafés also offered research and social networking (Gokongwei-Cheng, 2003; Limos, 2021).',
  'ao-10': 'Mall of Asia opened in 2006 and TriNoma in 2007. Shopping, food, and shared leisure met in a physical destination, with participation shaped by commercial power and unequal access (GMANews.TV, 2007b; Rico & de Leon, 2017).',
  'ao-11': 'Salons and local pageants frame this comparison of space and queer expression. Cabalfin’s 2000 publication is verified through a catalog; claims about these particular venues remain curatorial questions, with safety and acceptance varying by setting (Cabalfin, 2000).',
  'ao-12': 'Kamikazee and Sponge Cola were part of the decade’s band culture. Both appeared in the 2006 Kami nAPO Muna tribute project, a record of their presence in the music scene (The Philippine Star, 2006).',
  'ao-13': 'Prepaid access and relatively affordable SMS helped make mobile conversation familiar. Texting developed its own shorthand and etiquette, while cost still shaped how messages were exchanged (Lichauco, 2001).',
  'ao-14': 'Scratch a card and enter a code: physical money became digital access. Level Up! prepaid cards gave Ragnarok players paid access to the game (Gokongwei-Cheng, 2003).',
  'ao-15': 'During EDSA II in January 2001, SMS circulated information and calls to assemble. Rafael examines the phone together with the crowd, including class assumptions about political participation (Rafael, 2003).',
  'ao-16': 'Phones carried media as well as messages. Nokia’s 2003 announcement for the 6600 documented video clips and local sharing through Bluetooth and infrared (Nokia, 2003).',
  'ao-17': 'Two people, one player, one earphone each. This reconstructed scene recalls music as something people carried and shared with someone beside them.',
  'ao-18': 'Remittance counters connected money sent across distance with families at home. Reporting described Cebuana Lhuillier expanding its transfer partnerships in 2006 (Torres, 2006).',
};

function detailedStoryHTML(details, pastMedia, presentMedia) {
  const paragraphs = list => list.map(text => `<p>${documentText(text)}</p>`).join('');
  return `<p class="story-intro">${esc(details.intro)}</p><h3>${esc(details.pastHeading || '2000s · Carrying a music collection')}</h3>${pastMedia}${paragraphs(details.past)}<h3>${esc(details.presentHeading || '2020s · Discovery, sharing, and gathering')}</h3>${presentMedia}${paragraphs(details.present)}<h3>What connects them</h3>${documentParagraphs(details.connection)}<details class="story-sources"><summary>Sources for this comparison</summary><ul>${details.sources.map(source => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a></li>`).join('')}</ul></details>`;
}

function renderArtifactStory(a) {
  const c = COMPARISONS.find(c => c.id === a.comparison);
  const pastMedia = artifactCardMediaHTML(a.id);
  const presentMedia = presentMediaHTML(a.id);
  $('#artifact-read-title').textContent = a.title;
  $('#artifact-read-body').innerHTML = `<article class="artifact-story">
    ${a.id === 'ao-13' ? messageDemoHTML() : ''}
    ${a.details ? detailedStoryHTML(a.details, pastMedia, presentMedia) : c ? `<p class="story-intro">${esc(c.intro)}</p><h3>2000s</h3>${pastMedia}${documentParagraphs(c.past)}<h3>2020s</h3>${presentMedia}${documentParagraphs(c.present)}<h3>What connects them</h3>${documentParagraphs(c.synthesis)}` : `<h3>2000s</h3>${pastMedia}<p>${esc(a.body)}</p><h3>2020s</h3>${presentMedia}<p>${esc(a.now.body)}</p><p class="label-cite is-note">${esc(a.note)}</p>`}
    ${c ? '<p class="story-note">Author–date links open the supporting sources. The Archive contains all 13 comparisons and the full reference list.</p>' : ''}
    <button class="btn btn--plain" type="button" data-open="archive-dialog">Explore all 13 comparisons</button></article>`;
}

function stepHTML(a) {
  const no = accession(a);
  const long = LONG.has(a.id);
  const c = COMPARISONS.find(c => c.id === a.comparison);
  const details = a.details;
  const past = details ? details.past.map(documentParagraphs).join('') : documentParagraphs(c?.past || SHORT_LABELS[a.id] || a.body);
  const present = details ? details.present.map(documentParagraphs).join('') : documentParagraphs(c?.present || a.now.body);
  const connection = details?.connection || c?.synthesis || 'The shared anticipation of a live event connects the reconstructed viewing scene with newer ways to follow a fight. Broadcasts, streams and clips add viewing routes; gathering with other people continues alongside personal screens.';
  const sources = details?.sources?.length ? `<details class="story-sources"><summary>Sources for this comparison</summary><ul>${details.sources.map(source => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a></li>`).join('')}</ul></details>` : '';
  const next = ARTIFACTS[ARTIFACTS.indexOf(a) + 1];
  const lastInZone = !next || next.zone !== a.zone;
  const nextId = lastInZone ? `zone-${a.zone}-future` : next.id;
  const nextTitle = lastInZone ? `Zone ${a.zone} · 2030 culmination` : next.title;
  return `<article class="step${long ? ' is-long' : ''}"${long ? ' data-progress' : ''} id="${a.id}" data-step="${a.id}" aria-labelledby="${a.id}-title">
    <div class="label label-comparison" data-label="${a.id}">
      <div class="label-head"><span class="label-no">${no}</span><span>${esc(a.when)}, ${esc(a.medium.toLowerCase())}</span></div>
      <h3 id="${a.id}-title">${esc(a.title)}</h3>
      <p class="comparison-intro">${esc(details?.intro || c?.intro || SHORT_LABELS[a.id])}</p>
      <nav class="comparison-jumps" aria-label="Jump within ${esc(a.title)}"><a href="#${a.id}-past">2000s</a><a href="#${a.id}-present">2020s</a><a href="#${a.id}-connection">Connection</a></nav>
      <section class="artifact-era artifact-era--past" id="${a.id}-past" aria-labelledby="${a.id}-past-title"><h4 id="${a.id}-past-title">${esc(details?.pastHeading || '2000s')}</h4>
        ${artifactCardMediaHTML(a.id)}<div class="era-copy">${past}</div>
        ${a.id === 'ao-13' ? messageDemoHTML() : ''}
        <details class="label-interaction" hidden><summary>Try the exhibit</summary><div class="try" data-try="${a.id}"></div></details>
      </section>
      <section class="artifact-era artifact-era--present" id="${a.id}-present" aria-labelledby="${a.id}-present-title"><h4 id="${a.id}-present-title">${esc(details?.presentHeading || '2020s')}</h4>
        <p class="era-subtitle">${esc(a.now.title)}</p>${presentMediaHTML(a.id)}<div class="era-copy">${present}</div>
      </section>
      <section class="artifact-connection" id="${a.id}-connection" aria-labelledby="${a.id}-connection-title"><h4 id="${a.id}-connection-title">The connection between eras</h4>${documentParagraphs(connection)}</section>
      ${sources}
      <p class="story-note">Author–date links open the supporting sources. <button class="btn btn--plain" type="button" data-open="archive-dialog">Explore the Archive</button></p>
      <a class="comparison-next" href="#${nextId}">Next · ${esc(nextTitle)} <span aria-hidden="true">↓</span></a>
      ${!a.comparison ? '<p class="label-cite is-note">Supplemental curatorial scene</p>' : ''}
      <span class="stamp" aria-hidden="true">${no}<br>stamped</span>
    </div>
  </article>`;
}

function worksheetMedia(key) {
  const aliases={nokia:'nokia',estrada:'edsa',messenger:'present-messenger',protest:'present-protest',gento:'present-sb19'};
  const m=MEDIA.find(m=>m.id===(aliases[key] || key) || m.id===`present-${key}`);
  if(!m || m.type!=='image') return '';
  return `<figure class="artifact-card-media"><img src="${esc(m.src)}" alt="${esc(m.alt)}" width="720" height="480" loading="lazy" decoding="async"><figcaption><span>${esc(m.title)}</span><p>${esc(m.caption)}</p><a href="${esc(m.source)}" target="_blank" rel="noopener noreferrer">${esc(m.credit)} · Source ↗</a></figcaption></figure>`;
}
function worksheetEra(g,era) {
  const c=COMPARISONS.find(c=>c.id===g.comparison);
  let text=c ? (era==='past'?c.past:c.present) : g[era];
  const parts=text.split('\n');
  let title='',body=text;
  if(!c && parts.length>1 && parts[0].length<120 && !/[.!?]$/.test(parts[0])){title=parts.shift();body=parts.join('\n');}
  let media=worksheetMedia(g.photos[era==='past'?0:1]);
  if(g.id==='social-time') {
    const t=document.createElement('template');t.innerHTML=era==='past'?artifactCardMediaHTML('ao-13'):presentMediaHTML('ao-13');
    media=t.content.querySelector('figure')?.outerHTML || media;
  }
  if(g.id==='cultural-technology'){const t=document.createElement('template');t.innerHTML=artifactCardMediaHTML('ao-02');media=era==='past'?(t.content.querySelector('figure')?.outerHTML || ''):presentMediaHTML('ao-01');}
  if(g.id.startsWith('political-') && g.id!=='political-technology') {
    const t=document.createElement('template');t.innerHTML=era==='past'?artifactCardMediaHTML('ao-15'):presentMediaHTML('ao-15');
    media=t.content.querySelector('figure')?.outerHTML || media;
  }
  return `${title?`<h5 class="chronology-artifact-title">${esc(title)}</h5>`:''}${media}<div class="era-copy">${documentParagraphs(body)}</div>`;
}
function chronologyHTML(g,index) {
  const f=futureFor(g),examples=g.members.map(id=>BY_ID[id]);
  const old=examples.map(a=>{const t=document.createElement('template');t.innerHTML=stepHTML(a);for(const h of t.content.querySelectorAll('.artifact-era > h4'))h.classList.add('sr-only');for(const subtitle of t.content.querySelectorAll('.era-subtitle'))subtitle.remove();return {a,el:t.content};});
  const eraHTML=era=>old.length?old.map(({a,el})=>`<div data-scene="${a.id}" class="chronology-example${era==='past'?' label':''}" ${era==='past'?`id="${a.id}" data-label="${a.id}" ${LONG.has(a.id)?'data-progress':''}`:''}><h5 class="chronology-artifact-title label-head">${accession(a)} · ${esc(era==='past'?a.title:a.now.title)}</h5>${el.querySelector(`#${a.id}-${era}`).outerHTML}</div>`).join(''):worksheetEra(g,era);
  const connections=old.map(({el})=>el.querySelector('.artifact-connection')?.outerHTML || '').join('');
  const next=CHRONOLOGY_GROUPS[index+1];
  return `<article class="step chronology-step" id="${g.id}" data-step="${g.id}" data-category="${esc(g.category)}" aria-labelledby="${g.id}-title"><div class="label label-comparison chronology-label">
   <div class="label-head"><span class="label-no">${esc(g.label)}</span><span>2000s → 2020s → 2030</span></div>
   <h3 id="${g.id}-title">${esc(g.label)}</h3>
   <p class="comparison-intro">Follow this comparison through the 2000s, the 2020s, and a possible 2030.</p>
   <nav class="comparison-jumps" aria-label="Decades for ${esc(g.label)}"><a href="#${g.id}-past">2000s</a><a href="#${g.id}-present">2020s</a><a href="#${f.htmlId}">2030</a></nav>
   <section class="artifact-era chronology-era" id="${g.id}-past" data-era="2000s" aria-labelledby="${g.id}-past-title"><h4 id="${g.id}-past-title">2000s · ${esc(g.label)}</h4>${eraHTML('past')}</section>
   <section class="artifact-era chronology-era" id="${g.id}-present" data-era="2020s" aria-labelledby="${g.id}-present-title"><h4 id="${g.id}-present-title">2020s · ${esc(g.label)}</h4>${eraHTML('present')}${connections?`<details class="chronology-connection"><summary>What connects the past and present?</summary>${connections}</details>`:''}</section>
   <div class="chronology-future" data-era="2030" ${g.category==='Social'?`id="zone-${g.zone}-future"`:''}>${futureArtifactHTML(f)}</div>
   <a class="comparison-next" href="#${next?.id || 'pause'}">${next?`Next · ${esc(next.label)}`:'Continue to the museum exit'} ↓</a>
  </div></article>`;
}
function renderSteps() {
  for(const z of ZONES) {
    const groups=CHRONOLOGY_GROUPS.filter(g=>g.zone===z.n);
    const intro=`<article class="step" data-step="${z.id}"><div class="label label-intro" role="group" aria-label="Zone ${z.n} introduction, ${esc(z.title)}"><div class="label-head"><span class="label-no">Zone ${z.n}</span><span>Zone introduction</span></div><p class="label-body">${esc(z.intro)}</p><p>Each category follows 2000s → 2020s → 2030 before the next category begins.</p><nav class="future-category-nav" aria-label="Zone ${z.n} categories">${groups.map(g=>`<a href="#${g.id}">${esc(g.category)}</a>`).join('')}</nav></div></article>`;
    $(`[data-zone-steps="${z.n}"]`).innerHTML=intro+groups.map(g=>chronologyHTML(g,CHRONOLOGY_GROUPS.indexOf(g))).join('');
  }
}
const ASPECTS=['Time','Space','Technology'];
function renderZoneNavigation() {
 for(const z of ZONES) {
  const groups=CHRONOLOGY_GROUPS.filter(g=>g.zone===z.n),first=groups[0];
  $(`#${z.id} .zone-card`).insertAdjacentHTML('beforeend',`<details class="zone-navigator" ${matchMedia('(min-width:1200px)').matches?'open':''}><summary>Jump through the museum</summary><nav class="zone-navigation" id="zone-navigation-${z.n}" data-selected-artifact="${first.id}" aria-label="Zone ${z.n} shortcuts"><div class="zone-nav-group"><p class="zone-nav-heading">Aspects</p><div class="zone-nav-links zone-nav-links--three">${ZONES.map(other=>`<a href="#${other.id}" ${other.n===z.n?'aria-current="location"':''}>${ASPECTS[other.n-1]}</a>`).join('')}</div></div><div class="zone-nav-group"><p class="zone-nav-heading">Categories</p><div class="zone-nav-links zone-nav-links--artifacts">${groups.map(g=>`<a href="#${g.id}" data-zone-nav-artifact="${g.id}">${esc(g.category)}</a>`).join('')}</div></div><div class="zone-nav-group"><p class="zone-nav-heading">Decades</p><p class="zone-nav-context">${esc(first.label)}</p><div class="zone-nav-links zone-nav-links--three"><a data-zone-nav-era="2000s" href="#${first.id}-past">2000s</a><a data-zone-nav-era="2020s" href="#${first.id}-present">2020s</a><a data-zone-nav-era="2030" href="#${futureFor(first).htmlId}">2030</a></div><p class="zone-nav-note">Each category keeps its three decades together.</p></div></nav></details>`);
 }
}
function updateZoneNavigation(id,explicitEra) {
 const group=groupFor(id),n=group?.zone || Number(id.match(/^zone-(\d)/)?.[1]);
 const nav=$(`#zone-navigation-${n}`);if(!nav)return;
 const selected=group || GROUP_BY_ID[nav.dataset.selectedArtifact] || CHRONOLOGY_GROUPS.find(g=>g.zone===n);
 nav.dataset.selectedArtifact=selected.id;
 const parts=[...document.querySelectorAll(`#${selected.id} > .chronology-label > [data-era]`)];
 const visible=parts.find(el=>{const b=el.getBoundingClientRect();return b.top<=innerHeight/2&&b.bottom>innerHeight/2;});
 const era=explicitEra || visible?.dataset.era || '2000s';
 $('.zone-nav-context',nav).textContent=selected.label;
 for(const a of $$('[data-zone-nav-artifact]',nav)){if(a.dataset.zoneNavArtifact===selected.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}
 const links=()=>`<div class="zone-nav-links zone-nav-links--three">${['2000s','2020s','2030'].map(e=>`<a href="#${e==='2030'?futureFor(selected).htmlId:selected.id+'-'+(e==='2000s'?'past':'present')}">${e}</a>`).join('')}</div>`;
 for(const a of $$('[data-zone-nav-era]',nav)){const e=a.dataset.zoneNavEra;a.href='#'+(e==='2030'?futureFor(selected).htmlId:selected.id+'-'+(e==='2000s'?'past':'present'));if(e===era)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}
 const menu=$('#map-current');if(menu)menu.innerHTML=`<p class="zone-nav-heading">Decades · ${esc(selected.label)}</p>${links()}`;
 if(era==='2030'){activate(document.getElementById(`zone-${n}`),`zone-${n}-future`);setClock('2030');}
}
function watchNavigationEras() {
  return watchMiddle('.chronology-era, .future-proposal', el => {
    const step=el.closest('.step');
    const future=!!el.closest('.chronology-future');
    const era=future ? '2030' : el.classList.contains('artifact-connection') ? 'connection' : el.id.endsWith('-present') ? '2020s' : '2000s';
    updateZoneNavigation(step.dataset.step,era);
    const anchor=el.id || el.getAttribute('aria-labelledby');
    if(anchor) mark(anchor);
  });
}

function renderMap() {
 const zone=z=>`<a class="map-stop" href="#${z.id}"><strong>Zone ${z.n}: ${esc(z.title)}</strong><small>${esc(z.place)}</small></a><ul class="map-artifacts">${CHRONOLOGY_GROUPS.filter(g=>g.zone===z.n).map(g=>`<li><a href="#${g.id}"><strong>${esc(g.label)}</strong></a><nav class="comparison-jumps" aria-label="${esc(g.label)} decades"><a href="#${g.id}-past">2000s</a><a href="#${g.id}-present">2020s</a><a href="#${futureFor(g).htmlId}">2030</a></nav></li>`).join('')}</ul>`;
 $('#map-body').innerHTML=`<div class="map-wing"><a class="map-stop" href="#lobby"><strong>Lobby</strong><small>The ticket</small></a></div><div class="map-wing" id="map-current"></div><div class="map-wing"><h3>18 comparisons · 2000s → 2020s → 2030</h3>${ZONES.map(zone).join('')}</div><div class="map-wing"><a class="map-stop" href="#pause"><strong>Museum exit</strong><small>Closing reflection, credits and references</small></a><a class="map-stop" href="#museum-team"><strong>Meet Group 8</strong><small>Ralf Kevin Piano · Catherine Gatilago · Jonathan Restua</small></a></div><div class="map-wing menu-tools"><button class="btn" type="button" data-open="passport-dialog">Your passport</button><button class="btn" type="button" data-open="archive-dialog">Research archive & references</button><button class="btn btn--plain" id="extra-effects" type="button" aria-pressed="false">Extra effects: off</button></div>${ringtonePanelHTML()}`;
}

function markMap() {
  for (const a of $$('[data-map-artifact]')) a.classList.toggle('is-stamped', passport.has(a.dataset.mapArtifact));
}

function renderPassport() {
  $('#passport-body').innerHTML = `
    <p class="passport-summary">${activeStampCount()} of ${ARTIFACTS.length} exhibit stops stamped. An artifact is stamped after its heading has been on screen for a second.</p>
    <div class="passport-grid">${ARTIFACTS.map(a =>
      `<a class="passport-slot${passport.has(a.id) ? ' is-stamped' : ''}" data-zone="${a.zone}" href="#${a.id}"><span><b>${accession(a)}</b>${esc(a.title)}${passport.has(a.id) ? '<span class="sr-only">, stamped</span>' : ''}</span></a>`).join('')}</div>`;
}

function renderArchive() {
  const chips = (name, values, all) => `<fieldset><legend>${name}</legend>${[all, ...values].map((v, i) =>
    `<label class="chip"><input type="radio" name="${name.toLowerCase()}" value="${i ? v : ''}"${i ? '' : ' checked'}><span>${v}</span></label>`).join('')}</fieldset>`;
  $('#archive-body').innerHTML = `
    <details class="archive-section document-synopsis"><summary>About the 13 comparisons</summary>${SYNOPSIS.map(text => `<p>${esc(text)}</p>`).join('')}<p>The thirteen comparisons accompany twelve curated stops. The tour combines overlapping television, computer-shop, and phone material. Pacquiao’s shared-viewing scene remains a supplemental curatorial interpretation. The main tour has eighteen category-and-aspect comparisons, each ordered 2000s → 2020s → 2030. Social, Economic, Political, Cultural, Environmental, and Others / Aesthetics each appear under Time, Space, and Technology. Additional historical entries use the supplied worksheet. The Archive preserves the thirteen developed research comparisons.</p></details>
    <details class="archive-filter-panel"><summary>Filter comparisons</summary><form class="filters" id="archive-filters">${chips('Domain', DOMAINS, 'All')}${chips('Lens', LENSES, 'All')}${chips('Era', ['2000s', '2020s'], 'All eras')}<button class="btn btn--small btn--plain" type="reset">Reset filters</button></form></details>
    <p class="archive-count" id="archive-count"></p><div id="archive-media"></div>
    <div class="archive-list" id="archive-list"></div>
    <section class="archive-section"><h3>References for the exhibit text</h3>${documentReferencesHTML()}</section>`;
  const form = $('#archive-filters');
  const draw = () => {
    const f = new FormData(form);
    const [d, l, e] = ['domain', 'lens', 'era'].map(k => f.get(k));
    const rows = COMPARISONS.filter(c => (!d || c.domain === d) && (!l || c.lens === l));
    $('#archive-media').innerHTML = archiveMediaHTML(d, l, e);
    $('#archive-count').textContent = `${rows.length} of ${COMPARISONS.length} artifact comparisons${e ? ' · ' + e + ' with synthesis' : ''}`;
    $('#archive-list').innerHTML = rows.length ? rows.map(c => comparisonHTML(c, e)).join('') : '<p class="archive-empty" role="status">No comparisons match these filters. Choose All or use Reset filters to see the collection again.</p>';
  };
  form.addEventListener('change', draw);
  form.addEventListener('reset', () => requestAnimationFrame(draw));
  draw();
}

function renderFinale() {
  $('#conclusion').textContent = CLOSING[0];
  $('#impacts').innerHTML = CLOSING.slice(1).map(text => `<p>${esc(text)}</p>`).join('');
  $('#credits').innerHTML = `<details><summary id="credits-title">Credits & media sources</summary>
    <p class="credit-ai">${esc(SITE.group)}, ${esc(SITE.project)}</p>
    <ul class="credit-list">${CREDITS.members.map(m => `<li>${esc(m.name)}: ${esc(m.role)}</li>`).join('')}</ul>
    <p class="credit-ai">${esc(CREDITS.ai)}</p>${mediaCreditsHTML()}${futureCreditsHTML()}</details>`;
  $('#references').innerHTML = `<details><summary id="references-title">References & research notes</summary>
    ${documentReferencesHTML()}</details>`;
  updateFinalePassport();
}

function updateFinalePassport() {
  const n = activeStampCount();
  $('#finale-passport').textContent = n === ARTIFACTS.length
    ? 'You visited all 12 exhibit stops. Eighteen category-and-aspect comparisons each connect the 2000s, 2020s, and a 2030 proposal. Explore the Archive for the 13 research comparisons.'
    : `You visited ${n} of ${ARTIFACTS.length} exhibit stops. The map can take you back to the rest.`;
}

function fillSlots() {
  const debug = new URLSearchParams(location.search).has('slots');
  for (const el of $$('[data-slot-bg]')) {
    for (const child of $$(':scope > [data-slot-rendered]', el)) child.remove();
    delete el.dataset.placeholderOn;
    const slot = el.dataset.slotBg;
    const fallback = () => {
      if (el.dataset.placeholder) {
        const template = document.createElement('template');
        template.innerHTML = placeholder(el.dataset.placeholder);
        for (const child of template.content.children) child.setAttribute('data-slot-rendered', '');
        el.append(template.content);
      } else el.dataset.placeholderOn = '';
    };
    const art = img(slot, SLOTS[slot]?.alt ?? '');
    if (art) {
      art.setAttribute('data-slot-rendered', '');
      art.addEventListener('error', () => { if (art.isConnected) { art.remove(); fallback(); } }, { once: true });
      el.append(art);
    } else fallback();
    if (debug) el.insertAdjacentHTML('beforeend', `<span class="ph-tag" data-slot-rendered>${slot}</span>`);
  }
}

/* The lobby: the present, buzzing. */

const TILE = { GCash: '#2f6fb3', Messenger: '#6e7bff', TikTok: '#2a2a33', Shopee: '#e5793b', Calendar: '#b23a2e' };
const clockNow = () => new Date().toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' }).replace(/\s?[ap]\.?m\.?$/i, '');

function lobby() {
  $('#lock-date').textContent = new Date().toLocaleDateString('en-PH', { weekday: 'long', month: 'long', day: 'numeric' });
  $('#lock-notes').replaceChildren();
}

// A gentle auto-scroll from the ticket through the rewind. Any input from the visitor stops it
// (a press too, so a map jump made mid-glide is not dragged back), and so does a second glide.
const GLIDE_STOPPERS = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
let stopGlide = null;

function glide(target, ms = 4600) {
  stopGlide?.();
  if (reduceMotion()) { target.scrollIntoView(); return; }
  const root = document.documentElement;
  const start = scrollY;
  const end = target.getBoundingClientRect().top + scrollY;
  const t0 = performance.now();
  let raf = 0;
  const stop = () => {
    stopGlide = null;
    cancelAnimationFrame(raf);
    root.style.scrollBehavior = '';
    for (const type of GLIDE_STOPPERS) removeEventListener(type, stop);
  };
  stopGlide = stop;
  root.style.scrollBehavior = 'auto';
  for (const type of GLIDE_STOPPERS) addEventListener(type, stop, { passive: true });
  const tick = now => {
    const k = Math.min(1, (now - t0) / ms);
    const ease = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
    scrollTo(0, start + (end - start) * ease);
    if (k < 1) raf = requestAnimationFrame(tick); else stop();
  };
  raf = requestAnimationFrame(tick);
}

/* HUD, stages and the passport */

const hudClock = $('#hud-clock');
let liveClock = true;

function setClock(text) {
  liveClock = text === null;
  hudClock.textContent = liveClock ? clockNow() : text;
}

function tickNow() {
  $('#lock-time').textContent = clockNow();
  if (liveClock) hudClock.textContent = clockNow();
}

function showWallet({ balance, infinite }) {
  $('#hud-load-value').textContent = infinite ? '∞' : `₱${balance.toFixed(2)}`;
}

// The address bar follows the visitor. Chrome scrolls to the URL's fragment after restoring a
// reload, so a stale one would pull the visitor back to their last jump; a current one is also a
// link to where they are. Safari limits how often the URL may change, so a refused update is skipped.
function mark(id) {
  const current=document.getElementById(location.hash.slice(1));
  const part=current?.closest('.artifact-era, .artifact-connection, .future-proposal, .future-today, .future-values, .future-references');
  if (part && current.closest('.step')?.dataset.step===id) {
    const box=part.getBoundingClientRect();
    if (box.top<=innerHeight/2 && box.bottom>innerHeight/2) return;
  }
  if (current?.closest('main > section')?.id===id) {
    const box=current.getBoundingClientRect();
    if (box.height>0 && box.bottom>44 && box.top<innerHeight) return;
  }
  try { history.replaceState(null, '', id === 'lobby' ? location.pathname + location.search : `#${id}`); } catch { /* rate-limited */ }
}

function onSection(section) {
  const root = document.documentElement;
  const era = section.dataset.era;
  root.dataset.era = era;
  root.dataset.sky = section.dataset.sky ?? '';
  root.dataset.stop = section.id;
  $('#hud-load').hidden = !['2000', '2010', '2020'].includes(era);
  if (era === '2000') wallet.setInfinite(false);
  if (era === '2020') wallet.setInfinite(true);
  const id = section.id;
  if (id === 'lobby' || id === 'pause') setClock(null);
  else if (id === 'rewind') setClock($('#rewind-year').textContent);
  else if (id === 'signoff') setClock('23:59');
  else if (id === 'upgrade') setClock($('#upgrade-year').textContent);
  else if (id === 'void') setClock('--:--');
  else if (ZONE_BY_ID[id]) {
    // The step observer may fire before or after this one, so read the middle line directly.
    const mid = innerHeight / 2;
    const step = $$('.step', section).find(s => { const box = s.getBoundingClientRect(); return box.top <= mid && box.bottom >= mid; });
    const active = step?.dataset.step ?? id;
    activate(section, active);
    updateZoneNavigation(active);
    setClock(clockForStep(active));
    mark(active);
  }
  if (!ZONE_BY_ID[id]) mark(id);
  if (id === 'pause') updateFinalePassport();
  emit('section:enter', { id, era });
}

// Points a zone's stage at a step (or at the zone itself, its intro) and swaps the scene layers.
function activate(zoneEl, id) {
  const stage = zoneEl.querySelector('[data-stage]');
  id=groupFor(id)?.members[0] || (groupFor(id)?`zone-${groupFor(id).zone}-future`:id);
  stage.dataset.active = id;
  for (const layer of $$('[data-show]', stage)) {
    const shows = layer.dataset.show.split(' ');
    const on = shows.includes('*') || shows.includes(id);
    layer.classList.toggle('is-on', on);
    layer.inert = !on;
    if (on) layer.removeAttribute('aria-hidden'); else layer.setAttribute('aria-hidden', 'true');
  }
}

function clockForStep(id) {
 const g=groupFor(id);if(!g)return BY_ID[id]?.clock ?? ZONE_BY_ID[id]?.clock ?? null;
 const b=document.getElementById(futureFor(g).htmlId)?.getBoundingClientRect();
 return b && b.top<=innerHeight/2 && b.bottom>innerHeight/2 ? '2030' : BY_ID[g.members[0]]?.clock ?? ZONES.find(z=>z.n===g.zone).clock;
}

function onStep(step) {
  const id = step.dataset.step;
  const zoneEl = step.closest('.zone');
  if (zoneEl) { activate(zoneEl, id); updateZoneNavigation(id); }
  mark(id);
  setClock(clockForStep(id));
  emit('step:enter', { id: groupFor(id)?.members[0] || id, zone: Number(zoneEl?.dataset.zone) });
}

function watchStamps() {
  for (const a of ARTIFACTS) if (passport.has(a.id)) $(`[data-label="${a.id}"]`)?.classList.add('is-stamped');
  const timers = new Map();
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      const id = e.target.closest('[data-label]').dataset.label;
      if (e.intersectionRatio >= 0.6) {
        if (!timers.has(id)) timers.set(id, setTimeout(() => { timers.delete(id); passport.stamp(id); }, 1000));
      } else {
        clearTimeout(timers.get(id));
        timers.delete(id);
      }
    }
  }, { threshold: [0, 0.6] });
  for (const el of $$('.label[data-label]')) io.observe(el.querySelector('.label-head') || el);
  document.addEventListener('stamp', ({ detail }) => {
    $(`[data-label="${detail.id}"]`)?.classList.add('is-stamped');
    $('#hud-count').textContent = activeStampCount();
    const btn = $('#hud-passport');
    btn.classList.remove('is-bumped');
    void btn.offsetWidth;
    btn.classList.add('is-bumped');
    markMap();
  });
  $('#hud-count').textContent = activeStampCount();
}

function wireDialogs() {
  const open = id => {
    for (const d of $$('dialog[open]')) d.close();
    if (id === 'passport-dialog') renderPassport();
    if (id === 'map-dialog') markMap();
    $(`#${id}`).showModal();
  };
  $('#hud-map').addEventListener('click', () => open('map-dialog'));
  $('#hud-passport').addEventListener('click', () => open('passport-dialog'));
  document.addEventListener('click', e => {
    const reader = e.target.closest('[data-read-artifact]');
    if (reader) {
      renderArtifactStory(BY_ID[reader.dataset.readArtifact]);
      open('artifact-dialog');
      $('#artifact-read-body').scrollTop = 0;
      return;
    }
    const effects = e.target.closest('#extra-effects');
    if (effects) {
      const enabled = document.documentElement.dataset.effects !== 'on';
      document.documentElement.dataset.effects = enabled ? 'on' : 'off';
      effects.setAttribute('aria-pressed', String(enabled));
      effects.textContent = `Extra effects: ${enabled ? 'on' : 'off'}`;
      emit('effects:change', { enabled });
      return;
    }
    const comparison = e.target.closest('[data-comparison]');
    if (comparison) {
      const form = $('#archive-filters');
      form.reset();
      form.dispatchEvent(new Event('change'));
      open('archive-dialog');
      document.getElementById(comparison.dataset.comparison).open = true;
      requestAnimationFrame(() => document.getElementById(comparison.dataset.comparison)?.scrollIntoView({ block: 'start' }));
      return;
    }
    const opener = e.target.closest('[data-open]');
    if (opener) { open(opener.dataset.open); return; }
    if (e.target.closest('[data-close]')) { e.target.closest('dialog').close(); return; }
    if (e.target instanceof HTMLDialogElement) { e.target.close(); return; }
    const link = e.target.closest('a[href^="#"]');
    if (link && link.hash.length > 1) {
      e.preventDefault();
      link.closest('dialog')?.close();
      const shortcuts=link.closest('.zone-navigator');
      if(shortcuts && !matchMedia('(min-width:1200px)').matches) shortcuts.open=false;
      const destination=resolveStop(link.hash.slice(1));
      go(destination);
      const target=document.getElementById(destination);
      const targetZone=target?.closest('.zone');
      if (targetZone && document.documentElement.dataset.stop!==targetZone.id) onSection(targetZone);
      // Returning to the start of the same zone need not trigger its section observer.
      if (ZONE_BY_ID[destination]) {
        const zone=ZONE_BY_ID[destination];
        activate(document.getElementById(destination),destination);
        updateZoneNavigation(destination);
        setClock(zone.clock);
        emit('step:enter',{id:destination,zone:zone.n});
      } else if (targetZone) {
        // A fast jump can return to the observer's last target before an
        // intermediate intro was observed. Commit the clicked state now.
        const step=target.closest('.step');
        if (step) {
          onStep(step);
          const part=target.closest('.artifact-era, .artifact-connection');
          const era=target.closest('.chronology-future') ? '2030' : part?.classList.contains('artifact-connection') ? 'connection' : part?.id.endsWith('-present') ? '2020s' : part?.id.endsWith('-past') ? '2000s' : undefined;
          updateZoneNavigation(step.dataset.step,era);
          mark(destination);
        }
      }
    }
  });
}

function wireTicket() {
  const enter = () => {
    $('.ticket').classList.add('is-torn');
    if (isOn()) playGuide('lobby');
    glide($('#zone-1'), 1800);
  };
  // Not awaited: on iOS the resume can stay pending, and the visit must start regardless.
  $('#enter-sound').addEventListener('click', () => { enable(); enter(); });
  $('#enter-silent').addEventListener('click', enter);
}

// Room sound per stop; zone 2 switches to the LAN cafe while its step is active.
const AMBIENCE = { 'zone-1': ['amb-sala'], 'zone-2': ['amb-street'], 'zone-3': ['amb-night'], void: ['amb-void'] };
const GUIDED = new Set(['zone-1', 'zone-2', 'zone-3', 'void']);
const STOP_MUSIC = { void: 'music-void', pause: 'music-finale' };
const streetBed = () => ($('#zone-2 [data-stage]').dataset.active === 'ao-09' ? ['amb-lan'] : ['amb-street']);

function wireSound() {
  let beds = [];
  const root = document.documentElement;
  const button = $('#hud-sound');
  button.addEventListener('click', () => (isOn() ? disable() : enable()));
  document.addEventListener('sound', ({ detail }) => {
    button.setAttribute('aria-pressed', String(detail.on));
    button.textContent = detail.on ? 'Sound on' : 'Sound off';
    root.classList.toggle('sound-on', detail.on);
    if (!detail.on) { stopGuide(); return; }
    setAmbience(beds);
    if (GUIDED.has(root.dataset.stop)) playGuide(root.dataset.stop);
    if (STOP_MUSIC[root.dataset.stop]) playMusic(STOP_MUSIC[root.dataset.stop]);
  });
  document.addEventListener('section:enter', ({ detail: { id } }) => {
    // onSection has already pointed the stage at the step on the middle line.
    beds = id === 'zone-2' ? streetBed() : AMBIENCE[id] ?? [];
    setAmbience(beds);
    playMusic(id === 'void' ? 'music-void' : null);
    if (isOn() && GUIDED.has(id)) playGuide(id);
  });
  document.addEventListener('step:enter', ({ detail: { zone } }) => {
    if (zone !== 2) return;
    beds = streetBed();
    setAmbience(beds);
  });
  document.addEventListener('stamp', () => { if (document.documentElement.dataset.effects === 'on') { sfx.stamp(); sfx.vibrate(15); } });
  // The bar shows the caption; an always-rendered region outside it announces it.
  const bar = $('#caption');
  const live = $('[data-captions]');
  document.addEventListener('caption', ({ detail }) => {
    bar.hidden = !detail.text;
    if (detail.text) $('#caption-text').textContent = detail.text;
    live.textContent = detail.text ?? '';
  });
  $('#caption-skip').addEventListener('click', stopGuide);
}

function wireSourceImageFallbacks() {
  const recover=img=>{
    if(!(img instanceof HTMLImageElement) || !img.closest('figure') || img.dataset.unavailable)return;
    img.dataset.unavailable='true';
    const note=document.createElement('p');note.className='media-unavailable';
    note.textContent='This source image is currently unavailable. Open the credited source below to view the original.';
    img.replaceWith(note);
  };
  document.addEventListener('error',e=>recover(e.target),true);
}

async function boot() {
  wireSourceImageFallbacks();
  // A slow asset request must not pull a visitor back to the original deep link
  // after they have already scrolled, opened a story, or used the map.
  const requestedId = resolveStop(location.hash.slice(1));
  const arrivalId = ['void', 'upgrade', 'signoff'].includes(requestedId) ? 'pause' : requestedId;
  // Accession/era anchors remain valid when a revision changes the cards' heights.
  // Avoid restoring an obsolete pixel offset into a different artifact.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  // Let this boot handle the fragment once the dynamically rendered stops exist.
  // Otherwise the browser can schedule its own late fragment scroll as well.
  if (arrivalId) history.replaceState(null, '', location.pathname + location.search);
  let arrivalCancelled = false;
  const cancelArrival = () => { arrivalCancelled = true; };
  const arrivalStoppers = [...GLIDE_STOPPERS, 'scroll'];
  for (const type of arrivalStoppers) addEventListener(type, cancelArrival, { passive: true, once: true });
  if (reduceMotion()) document.documentElement.classList.add('reduce-motion');
  renderSteps();
  renderZoneNavigation();
  renderMap();
  renderArchive();
  renderFinale();
  // The ticket and the HUD work before the asset index arrives, however slow the connection.
  wireDialogs();
  mountMedia();
  wireSound();
  mountRingtones();
  wireTicket();
  fillSlots();
  for (const z of ZONES) activate($(`#${z.id}`), z.id);
  lobby();
  setClock(null);
  tickNow();
  setInterval(tickNow, 15000);
  document.addEventListener('wallet', e => showWallet(e.detail));
  showWallet(wallet);
  watchStamps();
  watchSections(onSection);
  watchSteps(onStep);
  watchNavigationEras();
  watchMiddle('.chronology-example',el=>{const a=BY_ID[el.dataset.scene];if(!a)return;activate(el.closest('.zone'),a.id);setClock(a.clock);emit('step:enter',{id:a.id,zone:a.zone});});
  watchProgress();
  await loadIndex();
  fillSlots();
  mountTransitions();
  mountTV($('#zone-1'));
  mountStreet($('#zone-2'));
  mountNokia($('#zone-3'));
  mountChainText($('#zone-3'));
  for (const row of $$('.try')) row.closest('.label-interaction').hidden = row.childElementCount === 0;
  // Hydrating artwork and interactive devices must retain any navigation made
  // while the index was loading, rather than resetting every room to its intro.
  for (const z of ZONES) {
    const zone=document.getElementById(z.id);
    activate(zone, $('[data-stage]', zone).dataset.active || z.id);
  }
  // Restore the requested artifact or era unless the visitor has already taken control.
  if (arrivalId && !arrivalCancelled) go(arrivalId);
  for (const type of arrivalStoppers) removeEventListener(type, cancelArrival);
  const middle=innerHeight/2;
  const section=$$('main > section').find(el=>{ const box=el.getBoundingClientRect(); return box.top<=middle && box.bottom>middle; });
  if(section) onSection(section);
  const step=$$('.step').find(el=>{ const box=el.getBoundingClientRect(); return box.top<=middle && box.bottom>middle; });
  if(step) onStep(step);
}

boot();
