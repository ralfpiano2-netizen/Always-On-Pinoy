import { esc } from './ui.js?v=realistic-futures-20261106-1';

export const FUTURE_REFERENCES = [
  {
    "id": "future-ref-shareplay",
    "short": "Apple, 2021",
    "apa": "Apple. (2021, October 28). SharePlay now available. Apple Developer.",
    "url": "https://developer.apple.com/news/?id=so6638jq"
  },
  {
    "id": "future-ref-access",
    "short": "International Telecommunication Union, n.d.",
    "apa": "International Telecommunication Union. (n.d.). Universal and meaningful connectivity. Retrieved November 5, 2026, from",
    "url": "https://www.itu.int/itu-d/sites/projectumc/aboutumc/"
  },
  {
    "id": "future-ref-pwc",
    "short": "PwC, 2026",
    "apa": "PwC. (2026). PwC Global Entertainment & Media Outlook 2026–2030.",
    "url": "https://www.pwc.com/id/en/media-centre/press-release/2026/english/pwc-global-entertainment-media-outlook-2026-2030.html"
  },
  {
    "id": "future-ref-beam",
    "short": "Nartker, 2025",
    "apa": "Nartker, A. (2025, May 20). Google Beam: Our AI-first 3D video communication platform. Google.",
    "url": "https://blog.google/innovation-and-ai/technology/research/project-starline-google-beam-update/"
  },
  {
    "id": "future-ref-unesco",
    "short": "UNESCO, 2026",
    "apa": "UNESCO. (2026). Re|Shaping policies for creativity: We share, we act, we build.",
    "url": "https://www.unesco.org/en/reshaping-creativity-reports"
  },
  {
    "id": "future-ref-tv",
    "short": "Google, n.d.",
    "apa": "Google. (n.d.). Do more with Gemini on Google TV. Google TV Help. Retrieved November 6, 2026, from",
    "url": "https://support.google.com/googletv/answer/16522213?hl=en"
  },
  {
    "id": "future-ref-tv2026",
    "short": "GovilPai, 2026",
    "apa": "GovilPai, S. (2026, January 5). Google introduces new Gemini for Google TV features. Google.",
    "url": "https://blog.google/products-and-platforms/platforms/google-tv/ces-2026/"
  },
  {
    "id": "future-ref-roblox",
    "short": "Roblox, n.d.-a",
    "apa": "Roblox. (n.d.-a). AI on Roblox. Roblox Creator Hub. Retrieved November 6, 2026, from",
    "url": "https://create.roblox.com/docs/ai/accelerated-workflows"
  },
  {
    "id": "future-ref-cube",
    "short": "Singh, 2026",
    "apa": "Singh, A. (2026, February 4). Accelerating creation, powered by Roblox’s Cube Foundation Model. Roblox.",
    "url": "https://about.roblox.com/newsroom/2026/02/accelerating-creation-powered-roblox-cube-foundation-model"
  },
  {
    "id": "future-ref-beamfamilies",
    "short": "Woodward, 2026",
    "apa": "Woodward, J. (2026, October 26). How Google Beam connects military families globally. Google.",
    "url": "https://blog.google/innovation-and-ai/technology/research/google-beam-uso-docuseries-service-members/"
  },
  {
    "id": "future-ref-collab",
    "short": "Roblox, n.d.-b",
    "apa": "Roblox. (n.d.-b). Collaboration. Roblox Creator Hub. Retrieved November 6, 2026, from",
    "url": "https://create.roblox.com/docs/projects/collaboration"
  },
  {
    "id": "future-ref-aura",
    "short": "Izadi, 2026",
    "title": "XREAL AURA: Wired XR glasses to watch, work, and play",
    "apa": "Izadi, S. (2026, October 28). XREAL AURA: Wired XR glasses to watch, work, and play. Google.",
    "url": "https://blog.google/products-and-platforms/platforms/android/xreal-aura/"
  },
  {
    "id": "future-ref-genie",
    "short": "Rivas et al., 2026",
    "title": "Project Genie: Experimenting with infinite, interactive worlds",
    "apa": "Rivas, D., Breece, E., & Chambers, S. (2026, January 29). Project Genie: Experimenting with infinite, interactive worlds. Google.",
    "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/"
  },
  {
    "id": "future-ref-gs4d",
    "short": "Wu et al., 2024",
    "title": "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    "apa": "Wu, G., Yi, T., Fang, J., Xie, L., Zhang, X., Wei, W., Liu, W., Tian, Q., & Wang, X. (2024). 4D Gaussian splatting for real-time dynamic scene rendering. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 20310–20320).",
    "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Wu_4D_Gaussian_Splatting_for_Real-Time_Dynamic_Scene_Rendering_CVPR_2024_paper.html"
  },
  {
    "id": "future-ref-holoportation",
    "short": "Microsoft Research, n.d.",
    "title": "Holoportation",
    "apa": "Microsoft Research. (n.d.). Holoportation. Retrieved November 6, 2026, from",
    "url": "https://www.microsoft.com/en-us/research/project/holoportation-3/"
  }
];
const SOURCE = {
  "shareplay": {
    "id": "future-ref-shareplay",
    "short": "Apple, 2021",
    "apa": "Apple. (2021, October 28). SharePlay now available. Apple Developer.",
    "url": "https://developer.apple.com/news/?id=so6638jq"
  },
  "access": {
    "id": "future-ref-access",
    "short": "International Telecommunication Union, n.d.",
    "apa": "International Telecommunication Union. (n.d.). Universal and meaningful connectivity. Retrieved November 5, 2026, from",
    "url": "https://www.itu.int/itu-d/sites/projectumc/aboutumc/"
  },
  "pwc": {
    "id": "future-ref-pwc",
    "short": "PwC, 2026",
    "apa": "PwC. (2026). PwC Global Entertainment & Media Outlook 2026–2030.",
    "url": "https://www.pwc.com/id/en/media-centre/press-release/2026/english/pwc-global-entertainment-media-outlook-2026-2030.html"
  },
  "beam": {
    "id": "future-ref-beam",
    "short": "Nartker, 2025",
    "apa": "Nartker, A. (2025, May 20). Google Beam: Our AI-first 3D video communication platform. Google.",
    "url": "https://blog.google/innovation-and-ai/technology/research/project-starline-google-beam-update/"
  },
  "unesco": {
    "id": "future-ref-unesco",
    "short": "UNESCO, 2026",
    "apa": "UNESCO. (2026). Re|Shaping policies for creativity: We share, we act, we build.",
    "url": "https://www.unesco.org/en/reshaping-creativity-reports"
  },
  "tv": {
    "id": "future-ref-tv",
    "short": "Google, n.d.",
    "apa": "Google. (n.d.). Do more with Gemini on Google TV. Google TV Help. Retrieved November 6, 2026, from",
    "url": "https://support.google.com/googletv/answer/16522213?hl=en"
  },
  "tv2026": {
    "id": "future-ref-tv2026",
    "short": "GovilPai, 2026",
    "apa": "GovilPai, S. (2026, January 5). Google introduces new Gemini for Google TV features. Google.",
    "url": "https://blog.google/products-and-platforms/platforms/google-tv/ces-2026/"
  },
  "roblox": {
    "id": "future-ref-roblox",
    "short": "Roblox, n.d.-a",
    "apa": "Roblox. (n.d.-a). AI on Roblox. Roblox Creator Hub. Retrieved November 6, 2026, from",
    "url": "https://create.roblox.com/docs/ai/accelerated-workflows"
  },
  "cube": {
    "id": "future-ref-cube",
    "short": "Singh, 2026",
    "apa": "Singh, A. (2026, February 4). Accelerating creation, powered by Roblox’s Cube Foundation Model. Roblox.",
    "url": "https://about.roblox.com/newsroom/2026/02/accelerating-creation-powered-roblox-cube-foundation-model"
  },
  "beamfamilies": {
    "id": "future-ref-beamfamilies",
    "short": "Woodward, 2026",
    "apa": "Woodward, J. (2026, October 26). How Google Beam connects military families globally. Google.",
    "url": "https://blog.google/innovation-and-ai/technology/research/google-beam-uso-docuseries-service-members/"
  },
  "collab": {
    "id": "future-ref-collab",
    "short": "Roblox, n.d.-b",
    "apa": "Roblox. (n.d.-b). Collaboration. Roblox Creator Hub. Retrieved November 6, 2026, from",
    "url": "https://create.roblox.com/docs/projects/collaboration"
  },
  "aura": {
    "id": "future-ref-aura",
    "short": "Izadi, 2026",
    "title": "XREAL AURA: Wired XR glasses to watch, work, and play",
    "apa": "Izadi, S. (2026, October 28). XREAL AURA: Wired XR glasses to watch, work, and play. Google.",
    "url": "https://blog.google/products-and-platforms/platforms/android/xreal-aura/"
  },
  "genie": {
    "id": "future-ref-genie",
    "short": "Rivas et al., 2026",
    "title": "Project Genie: Experimenting with infinite, interactive worlds",
    "apa": "Rivas, D., Breece, E., & Chambers, S. (2026, January 29). Project Genie: Experimenting with infinite, interactive worlds. Google.",
    "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/"
  },
  "gs4d": {
    "id": "future-ref-gs4d",
    "short": "Wu et al., 2024",
    "title": "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    "apa": "Wu, G., Yi, T., Fang, J., Xie, L., Zhang, X., Wei, W., Liu, W., Tian, Q., & Wang, X. (2024). 4D Gaussian splatting for real-time dynamic scene rendering. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 20310–20320).",
    "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Wu_4D_Gaussian_Splatting_for_Real-Time_Dynamic_Scene_Rendering_CVPR_2024_paper.html"
  },
  "holoportation": {
    "id": "future-ref-holoportation",
    "short": "Microsoft Research, n.d.",
    "title": "Holoportation",
    "apa": "Microsoft Research. (n.d.). Holoportation. Retrieved November 6, 2026, from",
    "url": "https://www.microsoft.com/en-us/research/project/holoportation-3/"
  }
};
export const ZONE_FUTURES = [
  {
    "id": "zone-1-future",
    "zone": 1,
    "next": "zone-2",
    "kind": "spatial-glasses",
    "title": "Volumetric live-event glasses",
    "screen": "SHARE THE SAME MOMENT",
    "labels": [
      "LIVE 3D EVENTS",
      "UNTETHERED VIEWING",
      "SYNCHRONIZED COMPANY"
    ],
    "intro": "From gathering around a television to sharing a live event across distance: a possible next stage for Filipino concerts, dance performances, and fight-night viewing.",
    "delta": "From watching a screen inside glasses to choosing a viewpoint within a live, reconstructed event—with friends watching the same moment.",
    "today": "XREAL AURA’s October 2026 announcement describes transparent XR glasses connected by cable to a battery-and-compute puck. Immersive films and spatial video already exist. Separately, 4D Gaussian-splatting research demonstrates real-time rendering of dynamic 3D scenes; it does not establish an end-to-end live concert service.",
    "scenario": "The proposed 2030s artifact combines untethered glasses with a licensed volumetric live-event service. A multi-camera capture system would reconstruct a performance in 3D. Viewers could lean or move within a defined virtual viewing area, rather than simply turn toward a flat video. A barkada in different places could join a synchronized session, hear one another, and choose whether to appear together. An ordinary television or phone stream would offer another way to join.",
    "aiRole": "Neural reconstruction would turn synchronized camera feeds into a changing 3D scene; view synthesis would render the perspective for each viewer. Efficient local and nearby-server processing would have to reduce the power and delay required for untethered use. The image depicts proposed optics and hardware, not demonstrated specifications.",
    "advances": [
      "A live reconstructed event with limited positional movement, beyond a fixed 180° or 360° video viewpoint.",
      "Untethered viewing that combines wearable optics with efficient neural rendering, rather than a wired compute puck.",
      "Synchronized shared attendance, with performer credit and a conventional stream for people without the glasses."
    ],
    "constraints": "Live multi-camera capture, occluded surfaces, transmission delay, battery life, heat, and comfortable optics still need to work together. The museum does not claim a guaranteed weight, price, runtime, or launch date.",
    "connection": "Dance crazes, teleseryes, Pacquiao Sundays, and night shifts reveal that shared time depends on someone making room for another person. More immersive viewing could reunite a scattered barkada, yet a private headset could also isolate people sitting in the same sala. The meaningful advance would preserve conversation: waiting for a relative finishing a shift, welcoming someone using an ordinary screen, and pausing when a person needs attention. Pakikisama is expressed through those choices. A better view of the stage has value when it strengthens our attention to the people beside us and far away.",
    "question": "If everyone can enter the event, who will make sure no one is left out of the company?",
    "foundation": "Izadi documents the wired XR baseline. Wu and colleagues support the dynamic-scene rendering component, without proving live capture, networking, or wearable deployment. SharePlay documents existing synchronized viewing. Combining these into an untethered volumetric event service is this museum’s 2030s proposal.",
    "sources": [
      "aura",
      "gs4d",
      "shareplay"
    ],
    "photo": {
      "src": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ManinOffice_V2.width-1600.format-webp.webp",
      "alt": "Google’s reference photograph of a person using XREAL AURA glasses.",
      "caption": "Documented baseline · XREAL AURA, announced October 28, 2026. This is current wired XR equipment, not the museum’s proposed glasses.",
      "source": "aura"
    },
    "conceptImage": "assets/concepts/volumetric-event-glasses-2030s-v2.jpg",
    "conceptAlt": "AI-generated photorealistic prototype concept of untethered spatial-viewing glasses, showing optical lenses, cameras, and substantial temple hardware."
  },
  {
    "id": "zone-2-future",
    "zone": 2,
    "next": "zone-3",
    "kind": "world-engine",
    "title": "Persistent AI world engine",
    "screen": "A PLACE WE CAN RETURN TO",
    "labels": [
      "PERSISTENT SHARED WORLD",
      "CONSISTENT OBJECTS",
      "EDITABLE AI GENERATION"
    ],
    "intro": "From the computer shop and profile page to a digital tambayan a barkada can build, change, and return to together.",
    "delta": "From a short generated exploration to an enduring, editable multiplayer place whose objects and shared history stay consistent.",
    "today": "Google’s January 2026 Project Genie prototype generated explorable worlds but limited generations to 60 seconds and reported imperfect physics, control, and latency. Roblox already supports AI creation and collaborative editing. Those are dated examples of current capabilities, not evidence that persistent multiplayer games or collaborative creation are new inventions.",
    "scenario": "The future artifact is software: a saved digital barangay and the AI world engine that maintains it. A barkada could describe a place, generate editable streets and objects, and meet there across separate sessions. Changes would become durable shared state: a redesigned court, a completed mural, or a fan gathering space would remain when people return. Neural generation would work with a conventional simulation and shared server so that different players encounter the same objects and rules. The pictured workstation is a plausible access device; the advance is in the engine.",
    "aiRole": "A world model would generate and extend environments while retaining a structured record of objects and events. A simulation layer would check collisions and agreed rules; shared state would resolve changes between players. Human creators would be able to inspect, revise, save, and export their work. Long-term consistency and controllable generation are the proposed advances.",
    "advances": [
      "Generated worlds that retain editable object identities and changes across repeated sessions.",
      "Several participants sharing one consistent simulation, instead of separate generated views that disagree.",
      "Human control over revisions, contributor credit, and reusable scene data."
    ],
    "constraints": "Long-term memory, coherent physics, simultaneous edits, computing cost, and reliable export remain engineering goals. The proposal does not assume that scaling a short video world automatically creates a dependable multiplayer game.",
    "connection": "Computer shops, Friendster, malls, and parlors offered different ways to be recognized by other people. A place acquires meaning because someone remembers that we were there and makes room for our return. A persistent digital tambayan could carry that continuity across distance. Its social test would be whether a newcomer can contribute, a queer member can be present without ridicule, and a friend with limited equipment can still join. The people who make art, organize gatherings, and care for the space deserve visible credit. AI can generate a setting; belonging grows from how its members treat one another.",
    "question": "Who gets to shape this shared place, and whose contribution will still be remembered?",
    "foundation": "The January 2026 Genie announcement documents an early world-model prototype and its stated limits. Roblox documents existing AI-assisted creation and collaboration. The proposed contribution is persistent, controllable, shared neural-world generation; neither multiplayer editing nor a new computer case is being claimed as a future invention.",
    "sources": [
      "genie",
      "roblox",
      "collab",
      "access"
    ],
    "photo": {
      "src": "https://prod.docsiteassets.roblox.com/assets/ai-landing/assistant-planning-mode.png",
      "alt": "Roblox Studio documentation showing its existing AI Assistant planning interface.",
      "caption": "Documented baseline · Roblox Studio AI Assistant, documentation reviewed November 6, 2026. This illustrates current creation tools; it is not Project Genie or the proposed world engine.",
      "source": "roblox"
    },
    "conceptImage": "assets/concepts/persistent-ai-world-engine-2030s-v2.jpg",
    "conceptAlt": "AI-generated photorealistic concept of a workstation showing a detailed editable digital Filipino barangay, a scene editor, and shared player markers."
  },
  {
    "id": "zone-3-future",
    "zone": 3,
    "next": "pause",
    "kind": "telepresence-wall",
    "title": "Multi-view family telepresence wall",
    "screen": "A CONVERSATION WITH ROOM FOR EVERYONE",
    "labels": [
      "LIFE-SIZE PRESENCE",
      "SEVERAL VIEWPOINTS",
      "NEURAL 3D RECONSTRUCTION"
    ],
    "intro": "From prepaid messages and padala to a live, life-size family gathering across distance—through a physical display, with room for several viewers.",
    "delta": "From a seated 3D call to a wider, life-size viewing area where several people can move and see different perspectives of the same remote relative.",
    "today": "Google Beam combines AI video reconstruction with a light-field display. Its October 2026 family program already shows family telepresence in use. Microsoft’s Holoportation research also reconstructs and transmits people in 3D. Family calls, volumetric capture, and 3D displays therefore already exist; making a video-call screen larger would be an insufficient future claim.",
    "scenario": "The proposed artifact is a room-scale telepresence wall for shared community facilities or homes. Synchronized cameras at each location would capture a wider volume, including body movement and gestures. A multi-view optical display would show a life-size remote relative with perspective changing as several viewers move within a defined viewing area. The caller would remain visibly inside a physical display. This is a proposal for a larger, more flexible capture-and-display system, not a person projected into empty air.",
    "aiRole": "Neural reconstruction would combine camera views into a changing 3D person and surrounding context. Compression and view synthesis would deliver the perspectives needed by the optical display. AI would estimate unseen detail, so uncertain or missing reconstruction should remain identifiable rather than fabricate expressions or actions. The connection would represent a consenting real caller.",
    "advances": [
      "A wider capture volume for body language and shared activities, beyond a fixed seated conversation.",
      "Several viewers receiving perspective-appropriate views within a defined optical viewing area.",
      "A complete capture, compression, and display pipeline intended for ordinary group conversations, with video or voice fallback."
    ],
    "constraints": "Occlusion, capture coverage, display resolution per viewpoint, viewing angles, network delay, bandwidth, heat, and installation cost remain major constraints. Existing research supports components, not a proven affordable household wall or a promised 2030s release.",
    "connection": "The phone, prepaid card, EDSA II messages, and padala show that reaching someone creates responsibilities as well as opportunities. Life-size presence could help an OFW share everyday gestures that a remittance receipt cannot carry. Yet the person abroad must also receive care: questions about their day, room to express difficulty, and time that does not revolve around requests for money. Technology can convey a face and a voice. Family members must provide the listening, patience, and shared responsibility that make those signals feel like company. The future worth pursuing makes care travel in both directions.",
    "question": "When the person abroad becomes easier to see, will the family also become better at listening?",
    "foundation": "Beam establishes AI-based 3D video and light-field display; its family program prevents us from treating family telepresence as a new invention. Holoportation documents earlier live 3D capture. Wu and colleagues support dynamic 3D rendering research. The proposed wider, multi-view home system combines and extends these components; its performance and accessibility remain unproven.",
    "sources": [
      "beam",
      "beamfamilies",
      "holoportation",
      "gs4d"
    ],
    "photo": {
      "src": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IO_HERO_BLOG_2025_2096_x_1182_px.width-1600.format-webp.webp",
      "alt": "Two people using Project Starline, the predecessor to Google Beam, for a seated 3D conversation.",
      "caption": "Documented baseline · Project Starline / Google Beam, Google’s May 2025 announcement. The proposed life-size multi-view wall is a separate museum scenario.",
      "source": "beam"
    },
    "conceptImage": "assets/concepts/multiview-telepresence-wall-2030s-v2.jpg",
    "conceptAlt": "AI-generated photorealistic concept of a full-height optical telepresence display showing a remote Filipino relative while two family members converse from different angles."
  }
];

const REFERENCE_TITLES = {
  shareplay:'SharePlay now available',tv:'Do more with Gemini on Google TV',tv2026:'Google introduces new Gemini for Google TV features',
  roblox:'AI on Roblox',cube:'Accelerating creation, powered by Roblox’s Cube Foundation Model',collab:'Collaboration',
  access:'Universal and meaningful connectivity',beam:'Google Beam: Our AI-first 3D video communication platform',beamfamilies:'How Google Beam connects military families globally'
};
function referenceHTML(key) {
  const ref=SOURCE[key],title=ref.title||REFERENCE_TITLES[key];
  const apa=title ? esc(ref.apa).replace(esc(title),`<i>${esc(title)}</i>`) : esc(ref.apa);
  return `<li>${apa} <a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.url)}</a></li>`;
}
export function futureZoneHTML(zone) {
  const f=ZONE_FUTURES.find(item=>item.zone===zone);
  const illustration=f.conceptImage;
  const sourceLinks=f.sources.map(key=>`<a href="${esc(SOURCE[key].url)}" target="_blank" rel="noopener noreferrer">${esc(SOURCE[key].short)} ↗</a>`).join(' · ');
  return `<article class="step zone-future-step" id="${f.id}" data-step="${f.id}" aria-labelledby="${f.id}-title">
    <div class="label label-zone-future">
      <div class="label-head"><span class="label-no">Zone ${zone} · Culmination</span><span>2030s · Possible future</span></div>
      <h3 id="${f.id}-title">${esc(f.title)}</h3><p class="future-zone-intro">${esc(f.intro)}</p><nav class="comparison-jumps future-zone-jumps" aria-label="Within the Zone ${zone} culmination"><a href="#${f.id}-today">Today</a><a href="#${f.id}-proposal">2030s</a><a href="#${f.id}-values">Connection</a><a href="#${f.id}-references">References</a></nav>
      <div class="future-artifact" data-future="${f.id}">
        <section class="future-proposal" aria-labelledby="${f.id}-proposal"><h4 id="${f.id}-proposal">The proposed advance · 2030s</h4>
          <figure class="future-concept"><img src="${illustration}" alt="${esc(f.conceptAlt)}" width="1536" height="1024" loading="lazy" decoding="async"><figcaption>AI-generated prototype visualization · OpenAI, 2026 · a proposed 2030s concept.</figcaption></figure>
          <p class="future-capability"><strong>The change in capability</strong>${esc(f.delta)}</p>
          <ul class="future-features" aria-label="Concept features">${f.labels.map(text=>`<li>${esc(text.toLowerCase())}</li>`).join('')}</ul><p>${esc(f.scenario)}</p>
          <h4>What AI would improve</h4><p>${esc(f.aiRole)}</p><ul class="future-advances">${f.advances.map(text=>`<li>${esc(text)}</li>`).join('')}</ul>
          <div class="future-engineering"><h4>What still needs to be solved</h4><p>${esc(f.constraints)}</p></div></section>
        <section class="future-today" aria-labelledby="${f.id}-today"><h4 id="${f.id}-today">The documented starting point</h4><p>${esc(f.today)}</p>
          <figure class="future-foundation-photo"><img src="${esc(f.photo.src)}" alt="${esc(f.photo.alt)}" loading="lazy" decoding="async" width="1200" height="700"><figcaption>${esc(f.photo.caption)} <a href="${esc(SOURCE[f.photo.source].url)}" target="_blank" rel="noopener noreferrer">Source & credit ↗</a></figcaption></figure>
          <p class="future-source-links">${sourceLinks}</p></section>
        <div class="future-values" id="${f.id}-values"><h4>What this zone leaves us with</h4><p>${esc(f.connection)}</p></div><p class="future-question">${esc(f.question)}</p>
        <section class="future-research future-references" id="${f.id}-references" aria-labelledby="${f.id}-references-title"><h4 id="${f.id}-references-title">References for this future artifact</h4><p>${esc(f.foundation)}</p><p class="future-scope">These sources support the current technology and research. The 2030s design, improvements, and generated illustration are the museum’s proposed interpretation.</p><ol class="future-reference-list">${[...f.sources].sort((a,b)=>SOURCE[a].apa.localeCompare(SOURCE[b].apa)).map(referenceHTML).join('')}</ol></section>
      </div>
      <a class="comparison-next" href="#${f.next}">${zone<3 ? `Continue to Zone ${zone+1}` : 'Continue to the closing reflection'} <span aria-hidden="true">↓</span></a>
    </div></article>`;
}
export function futureCreditsHTML() { return '<p>The three 2030s concept illustrations were generated with OpenAI image generation for this museum on November 6, 2026. They visualize proposed hardware and software; the people and settings are generated. They are not product announcements or documentary photographs. Real-world photographs and software illustrations are credited separately. Full research references appear within each future artifact.</p>'; }
