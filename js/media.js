import { PRESENT_IMAGES, PRESENT_GALLERIES, COMPARISON_MEDIA } from './present-media.js?v=zone-futures-20261106-1';
// Original media from the group's source sheet, kept distinct from the pixel reconstructions.
import { esc } from './ui.js?v=zone-futures-20261106-1';
import { disable, enable, isOn } from './audio.js?v=zone-futures-20261106-1';

const image = (id, file, title, alt, caption, credit, source, extra = {}) => ({ id, type: 'image', src: `assets/sources/${file}`, title, alt, caption, credit, source, ...extra });
const video = (id, youtube, title, caption, credit) => ({ id, type: 'video', youtube, title, caption, credit, source: `https://www.youtube.com/watch?v=${youtube}` });

export const MEDIA = [
  ...Object.values(PRESENT_IMAGES),
  {"id": "pamela-one", "type": "video", "youtube": "kvgj2eY8T4U", "title": "Pamela One — Vhong Navarro", "catalogLabel": "Dance artifact 02 of 03 · Popular by June 2004", "poster": "https://i.ytimg.com/vi/kvgj2eY8T4U/hqdefault.jpg", "posterAlt": "Preview of Vhong Navarro’s Pamela One performance on It’s Showtime.", "caption": "Pamela One was among the novelty songs frequently heard on Philippine radio in June 2004 (Gil, 2005). The visible preview and linked performance come from ABS-CBN Entertainment’s July 13, 2020 It’s Showtime upload: a later return to the dance, rather than original 2000s footage.", "credit": "Vhong Navarro / ABS-CBN Entertainment · Video uploaded July 13, 2020", "source": "https://www.youtube.com/watch?v=kvgj2eY8T4U", "related": "https://www.philstar.com/entertainment/2005/06/17/282039/rock-takes-over-novelty-songs"},
  {"id": "otso-otso", "type": "video", "youtube": "e8rq5B9jsBk", "title": "Otso-Otso — Bayani Agbayani", "catalogLabel": "Dance artifact 03 of 03 · Documented hit in May 2004", "poster": "https://i.ytimg.com/vi/e8rq5B9jsBk/hqdefault.jpg", "posterAlt": "Preview of Bayani Agbayani and AC Bonifacio performing the Otso-Otso dance on The Kids’ Choice.", "caption": "In a May 2004 interview, Bayani Agbayani recalled suggesting a childhood song to composer Lito Camo and described dancing the recorded hit with his children (Lo, 2004). This October 14, 2018 The Kids’ Choice upload shows Bayani sharing the routine with AC Bonifacio. It is a later demonstration, rather than footage of the original craze.", "credit": "Bayani Agbayani and AC Bonifacio / ABS-CBN Entertainment · Video uploaded October 14, 2018", "source": "https://www.youtube.com/watch?v=e8rq5B9jsBk", "related": "https://www.philstar.com/entertainment/2004/05/22/250906/bayani-singer"},
  {"id": "pacquiao-getty-viewing", "type": "gallery", "title": "Public viewing · Mayweather–Pacquiao, 2015", "caption": "Photographs of fans gathering for public screenings in Manila and Marikina on May 3, 2015. A later example of the shared viewing culture described in this exhibit.", "credit": "Getty Images editorial photo collection; individual photographer credits appear in the gallery", "source": "https://www.gettyimages.com/photos/fans-in-manila-watch-manny-pacquiao-v-floyd-mayweather"},
  {"id": "pacquiao-star-post", "type": "post", "platform": "facebook", "title": "Fight-day fans · Philippine STAR", "caption": "A Philippine STAR post supplied for this exhibit. The post’s date and specific fight have not been independently verified. If the embedded post is unavailable, open the original on Facebook.", "credit": "Philippine STAR / Facebook", "source": "https://www.facebook.com/PhilippineSTAR/posts/1212759427554601/"},
  {"id": "pacquiao-morales-2005", "type": "video", "youtube": "OMNfDiqkjdk", "title": "Morales–Pacquiao I · March 19, 2005", "caption": "The linked upload is titled “Erik Morales vs Manny Pacquiao 1 | MAR 19, 2005 | NO COMMENTARY.” Fight footage provides context for the shared viewing described here; it does not document a Filipino household gathering.", "credit": "YouTube upload supplied by the exhibit contributor", "source": "https://www.youtube.com/watch?v=OMNfDiqkjdk"},
  image('friendster', 'friendster-pink-hearts.jpg', 'A profile you could make your own', 'A Friendster profile customized with a pink heart background, colored panels, friends and testimonials.', '“Pink Hearts,” a Friendster layout submitted on October 29, 2007. A surviving example of the CSS customization described in this exhibit.', 'LoisLaneIeroWay / CreateBlog', 'https://www.createblog.com/friendster-layouts/22751-pink-hearts/'),
  image('dota', 'dota-gameplay.jpeg', 'Dota, before the standalone sequel', 'A Warcraft III Dota match showing the battlefield, minimap and hero inventory.', 'The Warcraft III-era interface illustrates online play associated with LAN cafés. This image was posted in a 2015 retrospective; it does not document a Philippine café.', 'Nerdville, “DotA: Humble Beginnings”', 'https://nerdvillage.wordpress.com/tag/dota-1/'),
  video('netopia', 'sHsNMrjFESs', 'Inside a Netopia internet café', 'A look inside Netopia at Liceo University, shared as “Netopia Internet Cafe Liceo University.”', 'Jan Mckingley Hilado / YouTube'),
  video('ragnarok', 'z9gs8Eutip4', 'Ragnarok arrives on Philippine television', 'Philippine Ragnarok Online First TVC, shared by LevelUp Philippines. The upload date is not the original broadcast date.', 'LevelUp Philippines / YouTube'),
  image('trinoma', 'trinoma.webp', 'The mall as a place to gather', 'An exterior view of the TriNoma shopping complex.', 'TriNoma, documented on its architect’s project page. The building illustrates the mall setting; the photograph’s capture date is not established.', 'GFP Architects, Ayala Malls TriNoma project', 'https://gfparchitects.com/project/ayala-malls-trinoma/'),
  image('moa', 'moa-postcard.jpg', 'Mall of Asia on a postcard', 'A postcard showing the SM Mall of Asia shopping complex.', 'A Mall of Asia postcard shared on a collector’s blog in 2019. The mall opened in 2006; the date of the postcard image itself is not established.', 'MY POSTCARD-PAGE', 'https://mypostcard-page.blogspot.com/2019/06/philippines-sm-mall-of-asia-manila.html'),
  image('opm', 'opm-artists.jpg', 'The sound of 2000s OPM', 'A retrospective collage of Filipino singers and bands.', 'Artists pictured in Ling’s retrospective on OPM from the 2000s. This later collage provides music context, rather than a photograph of a particular live gig.', 'Ling, “Greatest OPM from the 2000s”', 'https://ling-app.com/blog/opm-from-the-2000s/'),
  image('nokia', 'nokia.jpg', 'The keypad, up close', 'A white and blue Nokia keypad phone with a small monochrome screen.', 'A later photograph of a Nokia handset, illustrating the physical keypad and small screen. The accompanying article concerns Nokia’s later licensing business, not Philippine SMS statistics.', 'Thomas Kohler / Flickr, via MakeUseOf', 'https://www.makeuseof.com/nokia-hasnt-made-a-phone-in-over-a-decade-and-its-still-making-billions-from-every-one-sold/'),
  image('estrada', 'estrada-rally.jpeg', 'Before EDSA II: a November 2000 rally', 'A newspaper photograph of the anti-Estrada protest at the EDSA Shrine.', 'A prayer rally reported on November 5, 2000, before the January 2001 EDSA II protests. Historical context for the exhibit, not a photograph of the later chain-text event.', 'AFP, via Taipei Times', 'https://www.taipeitimes.com/News/front/archives/2000/11/05/0000059970'),
  image('ondoy', 'ondoy.jpg', 'Ondoy, September 2009', 'Residents cope with lingering floodwater after Typhoon Ondoy.', 'Residents of Los Baños and Bay, Laguna, on September 29, 2009. The World Bank account also describes relief organized through SMS, Facebook and Twitter during this period.', 'Bill Sta. Clara / IRRI Images, DSC_3038-b', 'https://www.flickr.com/photos/ricephotos/3965703426/', { license: 'CC BY-NC-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/2.0/', related: 'https://blogs.worldbank.org/en/eastasiapacific/philippines-surviving-tropical-storm-ondoy-ketsana', domain: 'Environmental', era: '2000s', lens: 'Space' }),
  image('cycling', 'cycling.webp', 'A different everyday commute', 'A masked cyclist rides along an urban bicycle path in the Philippines.', 'An image accompanying an account of pandemic-era cycling and Philippine bike-lane expansion. It belongs with the Archive’s 2020s active-mobility comparison.', 'As reproduced by Emission Impossible, “From crisis to opportunity”', 'https://www.emissionimpossible.co.nz/news-archive/from-crisis-to-opportunity', { domain: 'Environmental', era: '2020s', lens: 'Technology' }),
{"id": "sexbomb", "type": "image", "src": "assets/sources/sexbomb.webp", "title": "The SexBomb Girls", "alt": "A group portrait of the SexBomb Girls.", "caption": "The SexBomb Girls, as reproduced in Rolling Stone Philippines’ 2026 retrospective. The portrait’s capture date is not established; it is not identified as a still from a specific Spageti performance.", "credit": "Sexbomb Dancers Facebook, via Rolling Stone Philippines", "source": "https://rollingstonephilippines.com/music/tracing-the-origins-of-p-pop/"},
{"id": "meteor", "type": "image", "src": "assets/sources/meteor-garden.jpg", "title": "Meteor Garden: the original cast and the remake", "alt": "A cast comparison with the 2018 Meteor Garden cast above the original 2001 cast.", "caption": "The 2001 cast appears in the lower row; the 2018 remake cast appears above. An unchanged comparison image from PEP.ph’s May 26, 2018 retrospective, rather than a single 2001 promotional photograph.", "credit": "Meteor Garden, via James Patrick Anarcon / PEP.ph", "source": "https://www.pep.ph/news/local/131450/then-and-now-emmeteor-gardenem-2001-and-2018", "supplementary": true},
{"id": "pangako", "type": "image", "src": "assets/sources/pangako.jpg", "title": "The original Pangako Sa ’Yo", "alt": "A collage of the original Pangako Sa ’Yo cast, including Kristine Hermosa, Jericho Rosales, Eula Valdes and Jean Garcia.", "caption": "The original Pangako Sa ’Yo, reproduced in James Patrick Anarcon’s 2020 streaming review. The later article is a retrospective on the 2000–2002 series.", "credit": "Pangako Sa ’Yo / ABS-CBN, via PEP.ph", "source": "https://www.pep.ph/news/local/151698/pangako-sa-yo-review-a724-20200528-lfrm"},
{"id": "starstruck", "type": "image", "src": "assets/sources/starstruck.jpg", "title": "StarStruck’s first Final 14", "alt": "The first batch of StarStruck finalists posing together for a magazine photograph.", "caption": "The source identifies the first Final 14 during a YES! Magazine pictorial in 2004. Reproduced in PEP.ph’s 2019 history of the program.", "credit": "YES! Magazine, via PEP.ph", "source": "https://www.pep.ph/peptionary/145975/starstruck-anatomy-of-a-reality-show-a724-20190914-lfrm7"},
{"id": "pacquiao", "type": "image", "src": "assets/sources/pacquiao-2007.jpg", "title": "Manny Pacquiao in 2007", "alt": "Manny Pacquiao seated at the Waterfront Hotel in Cebu City.", "caption": "Manny Pacquiao at the Waterfront Hotel in Cebu City, August 22, 2007. A portrait of the boxer, not a photograph of a fight or a neighborhood viewing party.", "credit": "Mike Gonzalez (TheCoffee) / Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Manny_Pacquiao.jpg", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/", "supplementary": true},
{"id": "bpo", "type": "image", "src": "assets/sources/bpo.jpg", "title": "A call-center workplace", "alt": "Headset-wearing workers sit at computers in a call-center sales area.", "caption": "The workplace image accompanying GMA News Online’s April 4, 2013 report on night-shift work. Its capture date is not established; the article provides later context for the BPO comparison.", "credit": "GMA News Online, in Siegfried Alegado’s 2013 report", "source": "https://www.gmanetwork.com/news/topstories/nation/302384/sleepless-in-phl-more-pinoys-work-the-graveyard-shift/story/"},
{"id": "pisonet", "type": "image", "src": "assets/sources/pisonet-2010.jpg", "title": "A coin-operated PisoNet cabinet", "alt": "A blue-and-black computer cabinet with a monitor, keyboard and coin-operated timer controls.", "caption": "A PisoNet cabinet photographed on March 26, 2010. The source credits the build to Junaid Ibrahim. This dated reference illustrates the machine; it is not presented as a photograph taken in 2005.", "credit": "Naidz24 / Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:First_Peso_Net.jpg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "supplementary": true},
{"id": "cafe", "type": "image", "src": "assets/sources/cafe-2005.webp", "title": "A shared room for online play", "alt": "Players sit at computers in a small internet café with plastic chairs and green walls.", "caption": "Leevets Cyberspace Cafe, identified by the source author as circa 2005. Reproduced in Back2Gaming’s later computer-shop retrospective; the source’s dating is retained.", "credit": "BossMac Suba / Back2Gaming", "source": "https://www.back2gaming.com/games/classic-computer-shop-games-for-that-nostalgia-fix/"},
{"id": "parlor", "type": "image", "src": "https://images.squarespace-cdn.com/content/v1/636b5e138fd7c9613e2a8b61/ac242733-0327-459b-8810-913eafae8246/Tsupet%2Bby%2BDe%2BLa%2BSalle-College%2Bof%2BSaint%2BBenilde%2BPhotography%2Bstudent%2BLou%2BRussell%2BFajardo.jpg", "title": "Karla Salon: the neighborhood parlor", "alt": "Clients and workers inside Karla Salon, with hairdressing chairs, mirrors, hairstyle posters, and a large storefront sign.", "caption": "Karla Salon, photographed by Lou Russell Fajardo for Tsupet, a documentary series about Filipino gay parlor workers. Reproduced in Art+ Magazine on June 2, 2023. A later reference for the parlor setting discussed in this 2000s artifact; the image’s capture date is not established.", "credit": "Lou Russell Fajardo, Tsupet / Art+ Magazine", "source": "https://artplus.ph/features/filipino-parloristas-star-in-international-exhibition-in-china", "width": 2500, "height": 1669},
{"id": "prepaid", "type": "image", "src": "assets/sources/prepaid-recollection.jpg", "title": "Prepaid phone-load cards", "alt": "A collection of Globe, Smart and other prepaid telephone cards.", "caption": "Phone-load cards reproduced in Aldwin Chester Yap Dumago’s GSM recollection. They illustrate the scratch-card format; they are not Level Up! gaming cards. The photograph’s capture date is not established.", "credit": "As shared by Aldwin Chester Yap Dumago / LinkedIn", "source": "https://www.linkedin.com/posts/aldwindumago_the-photo-brings-back-so-many-memories-of-share-7463885287283183616-atRs/"},
{"id": "nokia6600", "type": "image", "src": "assets/sources/nokia6600.jpg", "title": "A Nokia 6600 handset", "alt": "A Nokia 6600 handset with its color screen and physical keypad.", "caption": "A Nokia 6600 photographed by Chrattac in November 2006. A period handset reference for local media sharing, rather than a photograph of a particular Bluetooth transfer.", "credit": "Chrattac / Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:Nokia_6600.jpg", "license": "Public domain", "licenseUrl": "https://commons.wikimedia.org/wiki/File:Nokia_6600.jpg#Licensing", "supplementary": true},
{"id": "mp3", "type": "image", "src": "assets/sources/ipod-nano.png", "title": "A portable music player", "alt": "Front, side and back views of a silver fourth-generation iPod nano.", "caption": "A reference image of a fourth-generation iPod nano, dated March 18, 2009. It illustrates a portable digital music player; it does not document the generic low-cost player or shared-earphone scene in the reconstruction.", "credit": "Matthieu Riegler / Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:IPod_nano.png", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/", "supplementary": true},
{"id": "remittance", "type": "image", "src": "assets/sources/remittance-centers.png", "title": "Remittance services in the Philippines", "alt": "A directory graphic listing Philippine remittance and pawnshop services.", "caption": "A service-directory graphic from CE Review Ph’s September 2012 remittance-center article. Later context for the available channels, not an authenticated 2000s claim stub or counter photograph.", "credit": "Mikhael Alvarado / CE Review Ph", "source": "https://cereviewph.wordpress.com/2012/09/04/82/"},
];

const SETS = {
  "ao-01": {
    "title": "Noontime show dance craze",
    "ids": [
      "sexbomb",
      "pamela-one",
      "otso-otso"
    ]
  },
  "ao-02": {
    "title": "Television stories and shared viewing",
    "ids": [
      "meteor",
      "pangako"
    ]
  },
  "ao-05": {
    "title": "Pacquiao fight Sunday",
    "ids": [
      "pacquiao",
      "pacquiao-morales-2005",
      "pacquiao-getty-viewing",
      "pacquiao-star-post"
    ]
  },
  "ao-06": {
    "title": "BPO night shift",
    "ids": [
      "bpo"
    ]
  },
  "ao-07": {
    "title": "Computer shops and shared access",
    "ids": [
      "pisonet",
      "cafe",
      "dota",
      "netopia",
      "ragnarok"
    ]
  },
  "ao-08": {
    "title": "Friendster profile",
    "ids": [
      "friendster"
    ]
  },
  "ao-10": {
    "title": "The mall and the Y2K look",
    "ids": [
      "trinoma",
      "moa"
    ]
  },
  "ao-11": {
    "title": "Parlor and barangay pageant",
    "ids": [
      "parlor"
    ]
  },
  "ao-13": {
    "title": "Nokia messages and shared media",
    "ids": [
      "nokia",
      "nokia6600"
    ]
  },
  "ao-14": {
    "title": "Prepaid access card",
    "ids": [
      "prepaid"
    ]
  },
  "ao-15": {
    "title": "Chain text to EDSA II",
    "ids": [
      "estrada"
    ]
  },
  "ao-18": {
    "title": "Padala from abroad",
    "ids": [
      "remittance"
    ]
  }
};
const ACTIVE_MEDIA_IDS = new Set([
  ...Object.values(SETS).flatMap(set=>set.ids),
  ...[...Object.values(PRESENT_GALLERIES),...Object.values(COMPARISON_MEDIA)].flat().map(key=>PRESENT_IMAGES[key].id)
]);
const ACTIVE_MEDIA = MEDIA.filter(m=>ACTIVE_MEDIA_IDS.has(m.id));
const BY_ID = Object.fromEntries(MEDIA.map(m => [m.id, m]));
const sourceLink = (url, text) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(text)}<span class="sr-only"> (opens in a new tab)</span></a>`;

function previewCard(key, item, count = 1, hasVideo = false) {
  return `<button class="media-preview" type="button" data-media-set="${esc(key)}" aria-haspopup="dialog" aria-label="View original media: ${esc(item.title)}">
    <img src="${esc(item.src)}" alt="" loading="lazy" decoding="async" width="160" height="100">
    <span><small>Artifact image</small><strong>${esc(item.title)}</strong><span>View ${count > 1 ? `${count} ${hasVideo ? 'images & videos' : 'images'}` : 'image & source'} <span aria-hidden="true">↗</span></span></span>
  </button>`;
}

const CARD_LABELS = {
  "ao-01": "SexBomb Girls · retrospective portrait",
  "ao-02": "Meteor Garden · 2001 / 2018 casts",
  "ao-03": "Original Pangako Sa ’Yo cast",
  "ao-04": "StarStruck Final 14 · 2004",
  "ao-05": "Manny Pacquiao · 2007 portrait",
  "ao-06": "BPO workplace · 2013 article image",
  "ao-07": "PisoNet cabinet · 2010 photo",
  "ao-08": "Friendster layout · 2007",
  "ao-09": "Leevets café · c. 2005 (source date)",
  "ao-10": "TriNoma · reference photo",
  "ao-11": "Karla Salon · later reference, published 2023",
  "ao-12": "OPM artists · retrospective collage",
  "ao-13": "Nokia · later reference photo",
  "ao-14": "Phone-load cards · format reference",
  "ao-15": "Before EDSA II · November 2000 rally",
  "ao-16": "Nokia 6600 · 2006 photo",
  "ao-17": "iPod nano · 2009 reference",
  "ao-18": "Remittance services · 2012 directory"
};

export function artifactCardMediaHTML(id) {
  const set = SETS[id];
  const item = set && set.ids.map(key => BY_ID[key]).find(m => m.type === 'image');
  if (!item) return '';
  return `${id === 'ao-01' ? '<p class="dance-artifact-meta">Dance artifact 01 of 03 · 2003 dance craze</p><h5 class="dance-artifact-title">The Spageti Song — SexBomb Girls</h5>' : ''}<figure class="artifact-card-media"><img src="${esc(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async" width="720" height="480"><figcaption><span>${esc(CARD_LABELS[id])}</span>${sourceLink(item.source, item.license ? item.credit.split(' / ')[0] : 'Source & credit')}${item.license ? ` · ${sourceLink(item.licenseUrl, item.license)}` : ''}</figcaption></figure>${set.ids.map(key => BY_ID[key]).filter(m => m.id !== item.id).map(figureHTML).join('')}`;
}

export function artifactMediaHTML(id) {
  const set = SETS[id];
  return set ? previewCard(id, BY_ID[set.ids[0]], set.ids.length, set.ids.some(id => BY_ID[id].type === 'video')) : '';
}

export function archiveMediaHTML(domain = '', lens = '', era = '') {
  const items = ACTIVE_MEDIA.filter(m => m.domain && (!domain || domain === m.domain) && (!lens || lens === m.lens) && (!era || era === m.era));
  if (!items.length) return '';
  return `<section class="archive-media" aria-labelledby="archive-media-title"><h3 id="archive-media-title">From the source collection</h3><p>Photographs related to the archive entries below.</p><div class="archive-media-grid">${items.map(figureHTML).join('')}</div></section>`;
}

function figureHTML(item) {
  const visual = item.type === 'image'
    ? `<img class="media-original" src="${esc(item.src)}" alt="${esc(item.alt)}" width="720" height="480" decoding="async" loading="lazy">`
    : item.type === 'gallery'
    ? `<div class="media-source-gallery">${sourceLink(item.source, 'Browse public-viewing photographs ↗')}</div>`
    : `<div class="${item.type === 'post' ? 'media-post' : 'media-video'}" data-video-container="${esc(item.id)}"><button class="media-play${item.poster ? ' media-play--poster' : ''}" type="button" data-play-video="${esc(item.id)}">${item.poster ? `<img class="media-poster" src="${esc(item.poster)}" alt="${esc(item.posterAlt)}" width="480" height="360" loading="lazy" decoding="async">` : ''}<span class="media-play-symbol" aria-hidden="true">${item.type === 'post' ? '▧' : '▶'}</span><span>Load ${item.type === 'post' ? 'post' : 'video'}: ${esc(item.title)}</span><small>Loads a ${item.platform === 'facebook' ? 'Facebook' : 'YouTube'} ${item.type === 'post' ? 'post' : 'player'}.</small></button></div>`;
  return `<figure class="media-figure${item.poster ? ' dance-artifact' : ''}"${item.poster ? ` id="dance-${esc(item.id)}"` : ''}>${item.catalogLabel ? `<p class="dance-artifact-meta">${esc(item.catalogLabel)}</p>` : ''}<${item.catalogLabel ? 'h5' : 'h3'} class="media-title">${esc(item.title)}</${item.catalogLabel ? 'h5' : 'h3'}>${visual}<figcaption><p>${esc(item.caption)}</p><p class="media-credit">${esc(item.credit)} · ${sourceLink(item.source, item.type === 'video' ? (item.platform === 'facebook' ? 'Watch on Facebook' : 'Watch on YouTube') : 'View source')}${item.related ? ` · ${sourceLink(item.related, 'Read the account')}` : ''}${item.license ? `<br>${sourceLink(item.licenseUrl, item.license)} · image unchanged` : ''}</p></figcaption></figure>`;
}

export function mediaCreditsHTML() {
  return `<section class="media-credits"><h4>Original images and videos</h4><p>The galleries contain documentary and reference media from the supplied links and credited supplementary sources. Dates, creators and context are credited beside each item; the surrounding pixel scenes remain reconstructions.</p><ul>${ACTIVE_MEDIA.map(m => `<li>${sourceLink(m.source, m.title)} — ${esc(m.credit)}${m.license ? ` · ${sourceLink(m.licenseUrl, m.license)}` : ''}</li>`).join('')}</ul></section>`;
}

export function mountMedia() {
  const dialog = document.createElement('dialog');
  dialog.id = 'media-dialog';
  dialog.className = 'sheet sheet--wide';
  dialog.setAttribute('aria-labelledby', 'media-title');
  dialog.innerHTML = `<div class="sheet-head"><h2 id="media-title">Original media</h2><button class="btn btn--plain" type="button" data-close>Close</button></div><div class="sheet-body" id="media-body"></div>`;
  document.body.append(dialog);
  let returnDialog = null;
  let returnFocus = null;
  let restoreSound = false;
  dialog.addEventListener('close', () => {
    // Removing the player stops playback on Close, Escape, and backdrop dismissal.
    dialog.querySelector('#media-body').replaceChildren();
    if (restoreSound) enable();
    restoreSound = false;
    if (returnDialog?.isConnected && !returnDialog.open) returnDialog.showModal();
    returnFocus?.focus({ preventScroll: true });
    returnDialog = null;
    returnFocus = null;
  });
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-media-set]');
    if (opener) {
      const key = opener.dataset.mediaSet;
      const set = SETS[key] ?? { title: BY_ID[key]?.title, ids: [key] };
      if (!set.ids.every(id => BY_ID[id])) return;
      returnDialog = opener.closest('dialog');
      returnFocus = opener;
      returnDialog?.close();
      restoreSound = isOn();
      if (restoreSound) disable();
      dialog.querySelector('#media-title').textContent = `Original media · ${set.title}`;
      dialog.querySelector('#media-body').innerHTML = set.ids.map(id => figureHTML(BY_ID[id])).join('');
      dialog.showModal();
      return;
    }
    const play = e.target.closest('[data-play-video]');
    if (play) {
      const item = BY_ID[play.dataset.playVideo];
      if (!item || !['video', 'post'].includes(item.type)) return;
      const iframe = document.createElement('iframe');
      iframe.src = item.platform === 'facebook'
        ? (item.type === 'post'
          ? `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(item.source)}&show_text=true&width=350`
          : `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.source)}&show_text=false&autoplay=false&width=560`)
        : `https://www.youtube-nocookie.com/embed/${item.youtube}?rel=0`;
      iframe.title = item.title;
      iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      play.replaceWith(iframe);
      iframe.focus();
    }
  });
  // A missing image still leaves a working, titled source card.
  document.addEventListener('error', e => {
    if (e.target instanceof HTMLImageElement && e.target.closest('.media-preview')) e.target.hidden = true;
  }, true);
}
