import { esc } from './ui.js?v=debug-20261108-1';

const SOURCES = {
  "schedule": {
    "id": "future-ref-schedule",
    "short": "Google, 2025",
    "apa": "Google. (2025, October 14). Gemini can now help you schedule time with others in Gmail.",
    "url": "https://blog.google/products-and-platforms/products/workspace/help-me-schedule-gmail-gemini/",
    "supports": "AI-assisted meeting-time suggestions already exist. It does not establish the proposed family scheduling system."
  },
  "cube": {
    "id": "future-ref-cube",
    "short": "Singh, 2026",
    "apa": "Singh, A. (2026, February 4). Accelerating creation, powered by Roblox’s Cube Foundation Model. Roblox.",
    "url": "https://about.roblox.com/newsroom/2026/02/accelerating-creation-powered-roblox-cube-foundation-model",
    "supports": "The beta generated functional objects through predefined schemas. It does not establish unlimited autonomous worlds."
  },
  "beam": {
    "id": "future-ref-beam",
    "short": "Nartker, 2025",
    "apa": "Nartker, A. (2025, May 20). Google Beam: Our AI-first 3D video communication platform. Google.",
    "url": "https://blog.google/innovation-and-ai/technology/research/project-starline-google-beam-update/",
    "supports": "AI video reconstruction and light-field communication are current foundations. A multi-view community family wall remains a proposed extension."
  },
  "work": {
    "id": "future-ref-work",
    "short": "Huynh, 2026",
    "apa": "Huynh, P. (2026, February 5). Generative AI and jobs in the Philippines: Labour market exposure and policy implications. International Labour Organization.",
    "url": "https://www.ilo.org/publications/generative-ai-and-jobs-philippines-labour-market-exposure-and-policy",
    "supports": "Philippine occupational exposure and uneven AI uptake. Exposure is not the same as job loss."
  },
  "shop": {
    "id": "future-ref-shop",
    "short": "TikTok, 2026",
    "apa": "TikTok. (2026, January 16). TikTok Shop drives +200% increase in sales for local sellers in 2025.",
    "url": "https://newsroom.tiktok.com/tiktok-shop-drives-200-increase-in-sales-for-local-sellers-in-2025?lang=en-PH",
    "supports": "Platform-reported Philippine live-commerce examples and training. Promotional reporting does not establish typical seller earnings."
  },
  "payments": {
    "id": "future-ref-payments",
    "short": "Bangko Sentral ng Pilipinas, 2025",
    "apa": "Bangko Sentral ng Pilipinas. (2025). From surge to stability: Digital payments driving a steady transition: 2024 status of digital payments in the Philippines.",
    "url": "https://www.bsp.gov.ph/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf",
    "supports": "Retail digital-payment activity and interoperability priorities. It does not describe the proposed AI wallet or establish cash disappearance."
  },
  "iverify": {
    "id": "future-ref-iverify",
    "short": "United Nations Development Programme, n.d.",
    "apa": "United Nations Development Programme. (n.d.). iVerify. Retrieved November 8, 2026, from",
    "url": "https://www.undp.org/digital/iverify",
    "supports": "Source-based fact checking, independent review, publication, and later correction. It is an international foundation, not evidence of deployment in every Philippine locality."
  },
  "dilg": {
    "id": "future-ref-dilg",
    "short": "Department of the Interior and Local Government–Region I, 2021",
    "apa": "Department of the Interior and Local Government–Region I. (2021, April–June). Conduct of barangay assembly for the first semester of CY 2021. Paganninawan, 17(2), 6.",
    "url": "https://region1.dilg.gov.ph/Paganninawan/2021%20Paganninawan%202nd%20Quarter.pdf",
    "supports": "The page 6 article documents online video or social-media assemblies and printed information in some barangays during COVID-19 restrictions."
  },
  "credentials": {
    "id": "future-ref-credentials",
    "short": "Coalition for Content Provenance and Authenticity, n.d.",
    "apa": "Coalition for Content Provenance and Authenticity. (n.d.). C2PA and Content Credentials explainer (Version 2.4).",
    "url": "https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html",
    "supports": "Tamper-evident origin and editing records. Provenance alone cannot establish that a claim is true; absent credentials do not establish falsity."
  },
  "concert": {
    "id": "future-ref-concert",
    "short": "Apple, 2025",
    "apa": "Apple. (2025, March 12). Apple unveils immersive concert experience with Metallica for Apple Vision Pro.",
    "url": "https://images.apple.com/uk/newsroom/2025/03/apple-unveils-immersive-concert-experience-with-metallica-for-apple-vision-pro/",
    "supports": "A recorded immersive concert captured from multiple camera positions. It does not prove live free-viewpoint volumetric concerts."
  },
  "shareplay": {
    "id": "future-ref-shareplay",
    "short": "Apple, 2021",
    "apa": "Apple. (2021, October 28). SharePlay now available. Apple Developer.",
    "url": "https://developer.apple.com/news/?id=so6638jq",
    "supports": "Existing synchronized shared media. The future integration with a Philippine event service is a museum scenario."
  },
  "culture": {
    "id": "future-ref-culture",
    "short": "UNESCO, 2022",
    "apa": "UNESCO. (2022). Re|Shaping policies for creativity: Addressing culture as a global public good.",
    "url": "https://www.unesco.org/reports/reshaping-creativity/2022/en",
    "supports": "Digital cultural participation, diversity, artistic freedom, and creator conditions. It does not document the proposed booth."
  },
  "speech": {
    "id": "future-ref-speech",
    "short": "Microsoft, n.d.",
    "apa": "Microsoft. (n.d.). Language and voice support for Azure Speech. Microsoft Learn. Retrieved November 8, 2026, from",
    "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support",
    "supports": "Speech capabilities vary by language and function. Local code-switching and performance audio still require validation."
  },
  "heat": {
    "id": "future-ref-heat",
    "short": "PAGASA, n.d.",
    "apa": "Philippine Atmospheric, Geophysical and Astronomical Services Administration. (n.d.). Heat index. Retrieved November 8, 2026, from",
    "url": "https://www.pagasa.dost.gov.ph/weather/heat-index/",
    "supports": "Published heat-index observations and data limitations. It does not guarantee conditions at a specific future event."
  },
  "hazard": {
    "id": "future-ref-hazard",
    "short": "GeoRisk Philippines, n.d.",
    "apa": "GeoRisk Philippines. (n.d.). About HazardHunterPH. Retrieved November 8, 2026, from",
    "url": "https://hazardhunter.georisk.gov.ph/about-hazardhunterph",
    "supports": "Indicative location-based assessments using government hazard data. It is not an all-clear or real-time route-safety guarantee."
  },
  "repair": {
    "id": "future-ref-repair",
    "short": "Fairphone, n.d.",
    "apa": "Fairphone. (n.d.). Here’s how you can repair your Fairphone device yourself. Retrieved November 8, 2026, from",
    "url": "https://www.fairphone.com/repairs",
    "supports": "Repairable components, guides, and diagnosis already exist. Local repair networks and the proposed AI repair passport need separate implementation."
  },
  "ewaste": {
    "id": "future-ref-ewaste",
    "short": "International Telecommunication Union, 2024",
    "apa": "International Telecommunication Union. (2024, March 20). Electronic waste rising five times faster than documented e-waste recycling: UN.",
    "url": "https://www.itu.int/en/mediacentre/Pages/PR-2024-03-20-e-waste-recycling.aspx",
    "supports": "Global e-waste and repair-system challenges. Global results are not Philippine-specific rates."
  },
  "textiles": {
    "id": "future-ref-textiles",
    "short": "United Nations Environment Programme, 2023",
    "apa": "United Nations Environment Programme. (2023, May). Sustainability and circularity in the textile value chain: A global roadmap.",
    "url": "https://wedocs.unep.org/handle/20.500.11822/42580",
    "supports": "Changes in consumption, production, and infrastructure for textile circularity. Reuse does not automatically prove a quantified environmental saving."
  },
  "tryon": {
    "id": "future-ref-tryon",
    "short": "Rambhia & Kemelmacher-Shlizerman, 2025",
    "apa": "Rambhia, S., & Kemelmacher-Shlizerman, I. (2025, June 26). Try on looks and discover your style with Doppl. Google.",
    "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/doppl/",
    "supports": "Experimental image-based outfit visualization and its inaccuracies. The launch was in the United States; this source does not establish Philippine availability or exact fit."
  },
  "ledger": {
    "id": "future-ref-ledger",
    "short": "Yaga et al., 2018",
    "apa": "Yaga, D., Mell, P., Roby, N., & Scarfone, K. (2018). Blockchain technology overview (NISTIR 8202). National Institute of Standards and Technology. https://doi.org/10.6028/NIST.IR.8202",
    "url": "https://csrc.nist.gov/pubs/ir/8202/final",
    "supports": "Distributed, tamper-evident and tamper-resistant record keeping. Integrity of a recorded entry does not establish that its underlying claim is true."
  },
  "phledger": {
    "id": "future-ref-phledger",
    "short": "Presidential Communications Office, 2026",
    "apa": "Presidential Communications Office. (2026, January 15). DICT rolls out blockchain-based portal to boost transparency, ensure tamper-proof digital records. Philippine Information Agency.",
    "url": "https://pia.gov.ph/news/dict-rolls-out-blockchain-based-portal-to-boost-transparency-ensure-tamper-proof-digital-records/",
    "supports": "Documents a Philippine government announcement about a blockchain budget-transparency portal. It is an official account of an initiative, not an independent audit or proof that corruption is eliminated."
  },
  "zoomagents": {
    "id": "future-ref-zoomagents",
    "short": "Zoom, 2026",
    "apa": "Zoom. (2026, March 10). Zoom expands enterprise agentic AI platform to orchestrate workflows across collaboration and customer experience.",
    "url": "https://news.zoom.com/ec26-agentic-ai-platform-announcements/",
    "supports": "Announced custom AI agents and workflow orchestration across collaboration and other systems. It does not establish the proposed complete barangay concierge workflow."
  },
  "zoomwaiting": {
    "id": "future-ref-zoomwaiting",
    "short": "Zoom, n.d.",
    "apa": "Zoom. (n.d.). Enabling and customizing the waiting room. Zoom Support. Retrieved November 9, 2026, from",
    "url": "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059359",
    "supports": "Current waiting-room and host-admission controls. AI topic grouping, visible inquiry queues, and coordinated invitation are proposed integrations."
  },
  "photo-youtube": {
    "id": "future-ref-photo-youtube",
    "short": "YouTube Help, n.d.",
    "apa": "YouTube Help. (n.d.). Premiere a new video. Google.",
    "url": "https://support.google.com/youtube/answer/9080341",
    "supports": "Verified help page; no publication date shown."
  },
  "photo-labor": {
    "id": "future-ref-photo-labor",
    "short": "Labor Code of the Philippines, 1974",
    "apa": "Labor Code of the Philippines, Presidential Decree No. 442, Book Three, art. 86. (1974).",
    "url": "https://lawphil.net/statutes/presdecs/pd1974/pd_442_1974.html",
    "supports": "Verified Article 86 against the Lawphil reproduction; the supplied ChanRobles link was unavailable."
  },
  "photo-hearing": {
    "id": "future-ref-photo-hearing",
    "short": "PhilstarLIVE, 2024",
    "apa": "PhilstarLIVE. (2024, July 16). LIVE: Senate hearing on anti-online gambling act, POGO taxation. Philstar.com.",
    "url": "https://www.philstar.com/headlines/2024/07/16/2370587/live-senate-hearing-anti-online-gambling-act-pogo-taxation",
    "supports": "Verified named organizational byline and date."
  },
  "photo-gig": {
    "id": "future-ref-photo-gig",
    "short": "Angan, 2023",
    "apa": "Angan, K. (2023, July 14). Tuning in to Philippine gig culture. PhilSTAR Life.",
    "url": "https://philstarlife.com/geeky/488932-tuning-philippine-gig-culture",
    "supports": "Corrected the supplied n.d. entry using the visible author and publication date."
  },
  "photo-wifi": {
    "id": "future-ref-photo-wifi",
    "short": "Mercurio, 2021",
    "apa": "Mercurio, R. (2021, October 10). DICT’s free WiFi rollout continues. The Philippine Star.",
    "url": "https://www.philstar.com/business/2021/10/10/2132980/dicts-free-wifi-rollout-continues",
    "supports": "Corrected the corporate-author attribution to the visible author."
  },
  "photo-inquirer": {
    "id": "future-ref-photo-inquirer",
    "short": "Inquirer Business, 2024",
    "apa": "Inquirer Business. (2024, October 26). TikTok Shop getting bigger slice of e-commerce sales.",
    "url": "https://business.inquirer.net/?p=486688",
    "supports": "Supplied reference retained for consistency. The original page could not be accessed, so its author and publication date remain unconfirmed. It is not treated as independently verified evidence."
  },
  "photo-assembly": {
    "id": "future-ref-photo-assembly",
    "short": "Chavez, 2024",
    "apa": "Chavez, C. (2024, October 5). DILG warns: Conduct barangay assembly or face sanctions. Manila Bulletin.",
    "url": "https://mb.com.ph/2024/10/5/dilg-warns-conduct-barangay-assembly-",
    "supports": "Author and text verified through the indexed publisher record; the live page returned an access error."
  },
  "photo-localcode": {
    "id": "future-ref-photo-localcode",
    "short": "Republic Act No. 7160, 1991",
    "apa": "Local Government Code of 1991, Republic Act No. 7160, sec. 397. (1991).",
    "url": "https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html",
    "supports": "Verified primary legal foundation for barangay assemblies."
  },
  "photo-drag": {
    "id": "future-ref-photo-drag",
    "short": "Licsi, 2022",
    "apa": "Licsi, A. (2022, August 25). LIST: Where to catch ‘Drag Race Philippines’ viewing parties and see the queens live. PhilSTAR Life.",
    "url": "https://philstarlife.com/geeky/140320-drag-race-philippines-viewing-parties-live-shows",
    "supports": "Corrected author, title, and publication date from the visible page. August 24 is an event date in the article, not its publication date."
  },
  "photo-spotify": {
    "id": "future-ref-photo-spotify",
    "short": "Spotify, 2023",
    "apa": "Spotify. (2023, September 26). Spotify unveils Jam, a new, personalized way to listen with your entire squad.",
    "url": "https://newsroom.spotify.com/2023-09-26/spotify-jam-personalized-collaborative-listening-session-free-premium-users/",
    "supports": "Verified the full title, date, and current canonical URL."
  },
  "photo-viki": {
    "id": "future-ref-photo-viki",
    "short": "Burt, 2021",
    "apa": "Burt, K. (2021, August 28). The best streaming service you don’t have. Den of Geek.",
    "url": "https://www.denofgeek.com/tv/the-best-streaming-service-you-dont-have/",
    "supports": "Corrected the supplied n.d. entry using the visible author and publication date."
  },
  "photo-monk": {
    "id": "future-ref-photo-monk",
    "short": "Doshi, 2022",
    "apa": "Doshi, T. (2022, May 11). Improving skin tone representation across Google. Google.",
    "url": "https://blog.google/innovation-and-ai/products/monk-skin-tone-scale/",
    "supports": "Corrected author and full article title from the visible page."
  },
  "photo-commerce": {
    "id": "future-ref-photo-commerce",
    "short": "TikTok, 2026",
    "apa": "TikTok. (2026, January 16). TikTok Shop drives +200% increase in sales for local sellers in 2025.",
    "url": "https://newsroom.tiktok.com/tiktok-shop-drives-200-increase-in-sales-for-local-sellers-in-2025?lang=en-PH",
    "supports": "Verified additional primary source for Philippine live selling. Platform reporting is identified as such; no sales statistic is generalized to typical sellers."
  }
};
export const FUTURE_REFERENCES = Object.values(SOURCES);
export const FUTURE_ARTIFACTS = [
  {
    "id": "F-SOC-T",
    "category": "Social",
    "aspect": "Time",
    "title": "AI assisted shared premiere night",
    "bridge": "Television appointments and short SMS invitations connect with present-day group chats and conflicting school, work, and family schedules.",
    "foundation": "YouTube Premieres already lets viewers meet around a scheduled video, use reminders, and interact through live chat. A shared countdown is therefore an existing feature, not a prediction for 2030 (YouTube Help, n.d.).",
    "scenario": "By 2030, a family viewing service could coordinate that appointment with availability people voluntarily share. AI could compare time zones and rest periods, suggest an agreed replay session when the live premiere is inconvenient, and explain why a time suits the group. Relatives would approve the plan and decide whether to enable a small video sidebar. This proposes better coordination across services, rather than claiming that scheduled online viewing is new.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "The television appointment becomes a question of whose time matters. A family shows care when it accommodates the relative coming off a shift instead of expecting everyone to be available on demand.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-youtube"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-social-time",
    "image": "assets/future-2030/f-soc-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted shared premiere night",
    "imageCaption": "AI-generated 2030 scenario · Inspired by YouTube Premieres (YouTube Help, n.d.)",
    "revisedPhotography": true
  },
  {
    "id": "F-SOC-S",
    "category": "Social",
    "aspect": "Space",
    "title": "AI assisted public Wi Fi access hub",
    "bridge": "The computer-shop chair and Friendster profile connect with current multiplayer lobbies and online gathering places.",
    "foundation": "Mercurio reported the DICT’s expansion of free Wi-Fi in public places in 2021. The source supports public access as an existing program; the pictured community center is a generated setting (Mercurio, 2021).",
    "scenario": "By 2030, a public access hub could combine maintained connectivity with optional Filipino-language voice help, clear connection notices, and a human assistance point. AI could guide a user through an access problem without requesting unrelated personal information. Staff would review recurring failures and provide an ordinary non-AI access route. The improvement is dependable assistance and inclusion around familiar infrastructure, rather than a new kind of router.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Free access has value when someone can actually use it. Pakikipagkapwa appears in a volunteer patiently helping an older resident, making public space welcoming across age and confidence levels.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-wifi"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-social-space",
    "image": "assets/future-2030/f-soc-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted public Wi Fi access hub",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the free public Wi-Fi program (Mercurio, 2021)",
    "revisedPhotography": true
  },
  {
    "id": "F-SOC-X",
    "category": "Social",
    "aspect": "Technology",
    "title": "AI assisted shared listening with group approval",
    "bridge": "Keypad messages and padala connect with video calls and the continuing separation of overseas workers from their families.",
    "foundation": "Spotify Jam already supports shared listening, a collaborative queue, and recommendations informed by overlapping tastes. Those functions belong to the existing foundation, not the proposed 2030 advancement (Spotify, 2023).",
    "scenario": "By 2030, a shared listening service could add an optional fairness review that shows whose selections dominate, explains a proposed balance, and asks the group to approve changes. Members could keep private listening history out of the session, set content preferences, or contribute without surrendering the queue to an automatic selection. The advance would be more transparent group control and inclusion across participating services; it would require evaluation with real users.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Friendship makes room for another person’s taste. Sharing a speaker becomes meaningful when the quieter friend can contribute a song and decline an algorithm’s suggestion without embarrassment.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-spotify"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 3,
    "htmlId": "future-social-technology",
    "image": "assets/future-2030/f-soc-x.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted shared listening with group approval",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Spotify Jam (Spotify, 2023)",
    "revisedPhotography": true
  },
  {
    "id": "F-ECO-T",
    "category": "Economic",
    "aspect": "Time",
    "title": "AI assisted night shift and rest planner",
    "bridge": "The BPO night-shift schedule connects with remote work, platform tasks, and AI-assisted service jobs.",
    "foundation": "Night work already has a recognized compensation dimension. Article 86 of the Labor Code addresses night-shift differential for covered work, within the Code’s coverage rules (Labor Code of the Philippines, 1974, art. 86).",
    "scenario": "By 2030, a worker-controlled planner could connect verified attendance, applicable pay rules, and personal care commitments. AI would explain a proposed shift change, show the additional-pay component separately, and flag conflicts with agreed rest. The worker could question an entry before payroll closes. Employers and qualified staff would remain responsible for rule application and corrections; an AI estimate would not establish legal entitlement or replace human review.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "The headset links income with the hours a worker cannot spend at home. Respect for labor includes understandable pay and protected recovery, so that providing for a family does not make fatigue invisible.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-labor"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-economic-time",
    "image": "assets/future-2030/f-eco-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted night shift and rest planner",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the night shift differential (Labor Code of the Philippines, 1974, art. 86)",
    "revisedPhotography": true
  },
  {
    "id": "F-ECO-S",
    "category": "Economic",
    "aspect": "Space",
    "title": "AI assisted live selling and gig merchandise stall",
    "bridge": "Mall browsing and the sari-sari counter connect with present-day live selling and small-business creator sessions.",
    "foundation": "Philippine live-commerce examples appear in TikTok’s own reporting, while Angan documents independent gig communities (Angan, 2023; TikTok, 2026). The supplied Inquirer Business (2024) entry is retained in the caption but its original page remains unverified.",
    "scenario": "By 2030, a merchandise stall could connect in-person sales, a livestream, and one seller-approved stock record. AI could draft item descriptions, group repeated customer questions, and flag a potential oversell before an order is confirmed. The seller would check claims, handle returns, and approve changes. The proposal brings together existing channels around a small venue; it does not assume that ordinary live selling will first appear in 2030.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Buying a shirt can support the local scene as well as express fandom. Trust depends on the seller answering for the goods and artists retaining control over their designs and income.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review. The supplied Inquirer Business reference is retained for consistency, but its author and date remain unconfirmed. TikTok’s verified primary report and Angan’s gig-culture article support the existing foundation.",
    "sources": [
      "photo-inquirer",
      "photo-gig",
      "photo-commerce"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-economic-space",
    "image": "assets/future-2030/f-eco-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted live selling and gig merchandise stall",
    "imageCaption": "AI-generated 2030 scenario · Inspired by live selling and gig merch stalls (Inquirer Business, 2024; Angan, 2023)",
    "revisedPhotography": true
  },
  {
    "id": "F-ECO-X",
    "category": "Economic",
    "aspect": "Technology",
    "title": "AI-assisted payment and padala app",
    "bridge": "Scratch-card codes and remittance counters connect with digital wallets, QR payments, and cross-border transfers.",
    "foundation": "BSP documents rising retail digital-payment use and interoperability priorities. These figures do not measure app-based remittances alone.",
    "scenario": "By 2030, an assistant inside a supported payment app or website could explain a transfer in familiar language before a person confirms it. It would show the intended recipient, total fees, the amount expected to arrive, a delivery estimate, and a route to a human adviser using verified provider data. AI could flag a mismatch for review; authentication and transfer execution would remain with the regulated payment service. The artifact is this understandable review workflow, not an additional gadget.",
    "advance": "A more understandable, accessible payment review across supported services, delivered through familiar apps and websites with the user retaining confirmation.",
    "values": "Respect means helping someone understand a transaction without taking control of their money. Convenience should include the less confident user and the relative paying fees.",
    "conditions": "Provider integration, accurate disclosures, authentication, and error recovery are essential. AI does not eliminate fraud or authorize transfers by itself.",
    "sources": [
      "payments"
    ],
    "existing": "New proposal",
    "embodiment": "A familiar mobile wallet or web interface with explained fees, recipient details, provider comparison, and user confirmation.",
    "zone": 3,
    "htmlId": "future-economic-technology",
    "image": "assets/future-2030/f-eco-x.jpg",
    "alt": "Proposed 2030 visualization: A familiar mobile wallet or web interface with explained fees, recipient details, provider comparison, and user confirmation.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-POL-T",
    "category": "Political",
    "aspect": "Time",
    "title": "AI assisted public hearing follow up viewer",
    "bridge": "The circulating SMS invitation to EDSA connects with reposts, public-issue threads, and questions about what happens after attention fades.",
    "foundation": "A PhilstarLIVE page documents a Senate committee hearing streamed on July 16, 2024. It establishes a specific example of public proceedings made available online (PhilstarLIVE, 2024).",
    "scenario": "By 2030, a hearing viewer could connect the recording with a searchable transcript, source-linked summaries, and a dated follow-up list. AI could propose chapter markers and retrieve the passage behind a summary; an editor would check names, quotations, and corrections. Visitors could return to unresolved questions after the live broadcast ends. The improvement is an accountable path from watching to checking and following up, not simply another livestream.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Pananagutan requires patience after the moment of public attention. Remembering a commitment and checking its context can matter as much as sharing a dramatic clip.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-hearing"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-political-time",
    "image": "assets/future-2030/f-pol-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted public hearing follow up viewer",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Senate hearing livestreams (PhilstarLIVE, 2024)",
    "revisedPhotography": true
  },
  {
    "id": "F-POL-S",
    "category": "Political",
    "aspect": "Space",
    "title": "AI meeting concierge for barangay assemblies",
    "bridge": "Physical assemblies and street gatherings connect with online meetings, livestream comments, and remote participation.",
    "foundation": "Section 397 of the Local Government Code establishes barangay assembly meetings. Chavez’s 2024 report describes a DILG reminder about holding them and informing residents (Chavez, 2024; Republic Act No. 7160, 1991, sec. 397).",
    "scenario": "By 2030, an AI concierge could receive inquiries before an online or hybrid assembly, suggest topic groups, and display a clear speaking queue. When a topic is due, the system could invite relevant residents from their waiting group into the main room under the moderator’s rules. Residents could correct a grouping and the moderator could override admission decisions. Phone, text, and in-person participation would need an equivalent route; remote attendance arrangements would still require official approval.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Being invited is not the same as being heard. Pakikipagkapwa requires a fair turn for the distant worker and quiet resident, with the final responsibility remaining with human organizers.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-assembly",
      "photo-localcode"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-political-space",
    "image": "assets/future-2030/f-pol-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI meeting concierge for barangay assemblies",
    "imageCaption": "AI-generated 2030 scenario · Inspired by required barangay assemblies (Chavez, 2024)",
    "revisedPhotography": true
  },
  {
    "id": "F-POL-X",
    "category": "Political",
    "aspect": "Technology",
    "title": "Source-tracing card for civic media",
    "bridge": "Forwarded recordings and chain messages connect with edited clips, synthetic media, and rapid political circulation.",
    "foundation": "C2PA records media origin and edits where credentials exist. UNDP’s iVerify adds human source investigation and review.",
    "scenario": "By 2030, a civic-media card could present available origin records, edit history, original context, and links to independent checks before a clip is forwarded. AI would help find matching material and summarize discrepancies, with uncertainty shown. The card would separate provenance from factual accuracy and invite a user to read the supporting record. A missing credential would not automatically label a post false.",
    "advance": "More usable combination of provenance, contextual retrieval, and reviewed evidence inside everyday sharing workflows.",
    "values": "Care for a community includes refusing to turn uncertainty into an accusation. Accountability protects both informed discussion and the dignity of people shown in a clip.",
    "conditions": "Credentials can be absent or incomplete. Provenance does not certify truth, and AI matching can make mistakes.",
    "sources": [
      "credentials",
      "iverify"
    ],
    "existing": "New proposal",
    "embodiment": "A source-tracing app on a normal opaque-screen tablet or phone, comparing the original clip, edits, context, and reviewed evidence.",
    "zone": 3,
    "htmlId": "future-political-technology",
    "image": "assets/future-2030/f-pol-x.jpg",
    "alt": "Proposed 2030 visualization: A source-tracing app on a normal opaque-screen tablet or phone, comparing the original clip, edits, context, and reviewed evidence.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-CUL-T",
    "category": "Cultural",
    "aspect": "Time",
    "title": "Shared immersive P-pop concert pass",
    "bridge": "Noontime dance crazes and Pacquiao Sundays connect with present-day P-pop fandoms, streams, and watch parties.",
    "foundation": "Apple’s recorded Metallica concert demonstrates immersive multi-camera performance capture. SharePlay supplies an existing synchronized-viewing foundation.",
    "scenario": "A possible 2030 concert pass could let a barkada book the same viewing session across compatible headsets and ordinary screens. AI could prepare limited reconstructed viewpoints for selected, licensed performance segments and help synchronize access. A recorded or delayed segment is more plausible than an unrestricted live volumetric concert. The shared appointment would preserve conversation, credits, and the ability to pause for one another.",
    "advance": "A constrained Philippine performance pilot combining synchronized attendance and selected reconstructed views, rather than promising unlimited live movement.",
    "values": "The shared event matters through the time people reserve together and the labor they recognize. Friendship includes welcoming a member watching through a simpler screen.",
    "conditions": "Licensing, capture quality, viewing comfort, delay, and cost limit the proposal. The source concert itself is recorded 180-degree video.",
    "sources": [
      "concert",
      "shareplay"
    ],
    "existing": "Narrows the current Zone 1 future to a 2030 pilot",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 1,
    "htmlId": "future-cultural-time",
    "image": "assets/future-2030/f-cul-t.jpg",
    "alt": "Proposed 2030 visualization: Shared-session concert wrist token and immersive eyewear",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-CUL-S",
    "category": "Cultural",
    "aspect": "Space",
    "title": "AI assisted hybrid drag viewing party",
    "bridge": "The parlor, barangay pageant, and local gig connect with drag streaming, viewing parties, and online performance discovery.",
    "foundation": "Licsi’s 2022 guide identifies venues hosting Drag Race Philippines viewing parties and live appearances. Gathering around streamed performance is already part of this documented cultural setting (Licsi, 2022).",
    "scenario": "By 2030, a community venue could coordinate a licensed screening, opt-in remote participation, and checked live captions within one service. AI might draft captions and identify passages needing correction, while the venue and performers decide what may be recorded or shared. A moderator would protect guests’ privacy and keep control over remote access. The improvement would be more accessible, locally governed participation, not the invention of the viewing party.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Queer belonging is sustained by the people who make room for one another. A larger audience should strengthen the venue and its performers, while respecting a guest’s choice to remain off camera.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-drag"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-cultural-space",
    "image": "assets/future-2030/f-cul-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted hybrid drag viewing party",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Drag Race Philippines viewing parties (Licsi, 2022)",
    "revisedPhotography": true
  },
  {
    "id": "F-CUL-X",
    "category": "Cultural",
    "aspect": "Technology",
    "title": "AI drafts with human reviewed community subtitles",
    "bridge": "OPM and novelty-song revivals connect with P-pop clips, dance covers, and music reaching audiences across languages.",
    "foundation": "Burt describes Viki’s volunteer fan translators and their role in opening East Asian entertainment to audiences across languages. Translation as community participation therefore precedes the proposed system (Burt, 2021).",
    "scenario": "By 2030, a subtitling workspace could combine AI drafts with context notes, shared glossaries, clear uncertainty flags, and approval by a named language editor. The human reviewer would choose how to handle jokes, honorifics, and expressions that lose meaning in literal translation. Corrections and contributor credits would remain attached to the approved version. This proposes a more accountable workflow; it does not assume that an AI draft understands every cultural context or that volunteer work should replace fairly recognized labor.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "A subtitle carries someone else’s voice. Cultural respect means making meaning accessible while acknowledging the translators whose judgment helps a new audience understand it.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-viki"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 3,
    "htmlId": "future-cultural-technology",
    "image": "assets/future-2030/f-cul-x.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI drafts with human reviewed community subtitles",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Viki’s volunteer subtitlers (Burt, 2021)",
    "revisedPhotography": true
  },
  {
    "id": "F-ENV-T",
    "category": "Environmental",
    "aspect": "Time",
    "title": "Heat-aware fiesta and community-event planner",
    "bridge": "A scheduled Earth Hour gesture connects with climate concern and decisions about when communities gather for sport, performance, and celebration.",
    "foundation": "PAGASA publishes heat-index information with limits and update notices. The data describe conditions, not guaranteed future event safety.",
    "scenario": "By 2030, an event planner could combine current official advisories, local observations, and the needs of performers, vendors, and audiences. AI would suggest alternative times and explain whose activities would be affected. Organizers would review the options and publish changes through online and offline channels. The artifact would show environmental care becoming part of the timetable of an ordinary celebration.",
    "advance": "A locally tested scheduling service linking official information with event operations and accessible change notices.",
    "values": "Collective joy carries a duty to consider those waiting, working, or performing outdoors. Care means adapting the event instead of leaving vulnerable participants to absorb the burden.",
    "conditions": "Local conditions and data can change. Organizers must use current official advice and qualified local assessment, not treat an AI suggestion as a safety guarantee.",
    "sources": [
      "heat"
    ],
    "existing": "New proposal; restores Environmental coverage",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 1,
    "htmlId": "future-environmental-time",
    "image": "assets/future-2030/f-env-t.jpg",
    "alt": "Proposed 2030 visualization: Flexible event-planning sheet and local environmental sensor",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-ENV-S",
    "category": "Environmental",
    "aspect": "Space",
    "title": "Community-reviewed hazard and access map",
    "bridge": "The Payatas and Ondoy material connects with present-day hazard maps and unequal exposure across neighborhoods.",
    "foundation": "HazardHunterPH generates indicative location-based reports from government hazard information and distinguishes these from official assessments.",
    "scenario": "By 2030, a community map could combine indicative hazard layers with reviewed information about meeting places, accessibility barriers, and service interruptions. AI would turn the records into plain-language explanations and identify information that needs updating. Residents and local authorities would validate changes. The artifact could inform discussions about where to hold a gathering or invest in access, while uncertainty and the source date remain visible.",
    "advance": "A maintained, understandable map that joins technical layers and reviewed local knowledge, rather than a one-time screenshot.",
    "values": "Bayanihan includes noticing unequal exposure and listening to residents whose routes or homes are easily overlooked. Shared knowledge should guide prevention and collective responsibility.",
    "conditions": "A map cannot guarantee that a route or place is safe. Privacy, missing records, current advisories, and professional assessment remain important.",
    "sources": [
      "hazard"
    ],
    "existing": "New proposal; restores Environmental coverage",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 2,
    "htmlId": "future-environmental-space",
    "image": "assets/future-2030/f-env-s.jpg",
    "alt": "Proposed 2030 visualization: Community-reviewed tactile hazard and access planning table",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-ENV-X",
    "category": "Environmental",
    "aspect": "Technology",
    "title": "Repairable phone with an AI repair passport",
    "bridge": "The Nokia handset and the memory of keeping a device useful connect with rapid upgrades and growing electronic waste.",
    "foundation": "Fairphone already provides replaceable components, repair guides, and diagnosis. ITU documents global challenges from limited repair and growing e-waste.",
    "scenario": "By 2030, a repairable phone could carry an owner-controlled record of replaced parts, software support, and checked service work. AI would interpret device diagnostics and retrieve model-specific instructions or suggest a qualified repairer. The advance would join repair information with local parts and service availability. A repairer would verify faults and repair decisions, while the passport makes a secondhand device’s history easier to understand.",
    "advance": "More practical continuity between device diagnostics, repair history, available parts, and local service, with a record that survives resale.",
    "values": "Pagpapahalaga can include maintaining an object and respecting the skilled person who repairs it. An upgrade gains meaning when it avoids shifting waste onto another community.",
    "conditions": "Parts, software support, safe servicing, and trusted records are necessary. AI diagnosis and a repairable design alone do not prove lower lifecycle impact.",
    "sources": [
      "repair",
      "ewaste"
    ],
    "existing": "New proposal; restores Environmental coverage",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 3,
    "htmlId": "future-environmental-technology",
    "image": "assets/future-2030/f-env-x.jpg",
    "alt": "Proposed 2030 visualization: Serviceable modular phone, parts tray, and continuing repair record",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-OTH-T",
    "category": "Others — Music and aesthetics",
    "aspect": "Time",
    "title": "AI assisted independent gig timetable",
    "bridge": "The fashion revivals in the past and present panels show how cultural styles return. This future proposal broadens Others to the local music scene, focusing on the time and labor that sustain a shared night out.",
    "foundation": "Angan’s account describes Philippine gigs as communities of independent artists, organizers, venues, and audiences. This grounds the image in a documented local music scene (Angan, 2023).",
    "scenario": "By 2030, a gig scheduling app could compare a venue’s running order with musicians’ agreed availability, soundcheck needs, and travel constraints. AI would suggest changes for the organizer and performers to approve, with the reason and effect on each act visible. A late change could trigger an agreed notice to ticket holders. The app would support coordination, while people retain decisions about fees, repertoire, and working conditions.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "A night of music rests on work that audiences may never see. Keeping a set on time and making room for a musician’s day job or journey home recognizes the person behind the performance.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-gig"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-others-time",
    "image": "assets/future-2030/f-oth-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted independent gig timetable",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the independent gig scene (Angan, 2023)",
    "revisedPhotography": true
  },
  {
    "id": "F-OTH-S",
    "category": "Others — Aesthetics",
    "aspect": "Space",
    "title": "AI-assisted ukay, repair, and swap booth",
    "bridge": "The ukay rack and barkada mall trip connect with online resale and a renewed interest in older garments.",
    "foundation": "UNEP’s textile roadmap treats consumption change, improved practices, and enabling infrastructure as connected needs.",
    "scenario": "By 2030, a neighborhood booth could connect physical garment inspection with local repair, exchange, and resale listings. AI would draft descriptions from photographs and suggest possible alterations for a tailor to assess. Users could meet, compare actual fabric and condition, and decide without relying on a simulated image. The artifact would be a shared service where an older garment acquires another useful life.",
    "advance": "A coordinated local service combining inspection, skill, and searchable stock, with human-checked descriptions and alteration options.",
    "values": "Resourcefulness is strengthened by fair exchange and respect for tailors and sellers. Affordable self-expression should carry dignity rather than a stigma about buying secondhand.",
    "conditions": "Cleanliness, truthful condition records, prices, transport, and repair capacity affect outcomes. The booth does not automatically make every transaction sustainable.",
    "sources": [
      "textiles",
      "tryon"
    ],
    "existing": "New proposal; restores Aesthetics under Others",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 2,
    "htmlId": "future-others-space",
    "image": "assets/future-2030/f-oth-s.jpg",
    "alt": "Proposed 2030 visualization: Fabric-analysis hoop linking inspection, alteration, and exchange",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-OTH-X",
    "category": "Others — Aesthetics",
    "aspect": "Technology",
    "title": "AI styling that preserves the user’s complexion",
    "bridge": "Beauty-product imagery and filtered faces connect with generative try-on tools and questions about who sets an acceptable appearance.",
    "foundation": "Doshi introduced Google’s use of the ten-shade Monk Skin Tone Scale to improve representation and evaluate image-based technologies. The scale is a foundation for inclusive development, not a guarantee that a styling tool is unbiased (Doshi, 2022).",
    "scenario": "By 2030, an outfit preview service could preserve the user’s chosen complexion and proportions, explain simulated details, and make automatic appearance changes optional. Developers could test results across a broader range of skin tones, publish limitations, and offer correction and deletion controls. A customer would approve the likeness before trying a look. The generated screen’s swatches are illustrative; they are not a calibrated reproduction of the official scale.",
    "advance": "This is a proposed 2030 improvement to an existing foundation. The cited sources document the foundation; they do not announce this complete future service.",
    "values": "Dignity includes seeing oneself represented without being treated as a problem to correct. The useful advance is more choice and accountable evaluation, rather than an expectation that everyone must look lighter or more alike.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-monk"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 3,
    "htmlId": "future-others-technology",
    "image": "assets/future-2030/f-oth-x.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI styling that preserves the user’s complexion",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the Monk Skin Tone Scale (Doshi, 2022)",
    "revisedPhotography": true
  }
];

export const ZONE_FUTURES = [
 {zone:1,id:'zone-1-future',next:'zone-2',title:'Time · Six possible futures',intro:'Who gets time to rest, earn, gather, and belong? These six 2030 proposals consider the rhythms of shared life.'},
 {zone:2,id:'zone-2-future',next:'zone-3',title:'Space · Six possible futures',intro:'A place can welcome people or leave them outside. These six 2030 proposals explore access, participation, and the places people make together.'},
 {zone:3,id:'zone-3-future',next:'pause',title:'Technology · Six possible futures',intro:'A more capable service still depends on care, judgment, and trust. These six 2030 proposals ask whose choices technology should support.'}
];
const categoryName=a=>a.category.startsWith('Others')?a.category.replace(' — ',' · '):a.category;
const categoryShort=a=>a.category.startsWith('Others')?'Others':a.category;
function referenceHTML(key) {
 const r=SOURCES[key];
 return `<li>${esc(r.apa)} <a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Source ↗</a></li>`;
}
export function futureArtifactHTML(a) {
 return `<section class="future-proposal future-collection-card" id="${a.htmlId}" data-future="${a.id}" aria-labelledby="${a.htmlId}-title">
  <p class="future-category">${esc(categoryName(a))} · ${esc(a.aspect)} · 2030</p>
  <h4 id="${a.htmlId}-title">${esc(a.title)}</h4>
  <figure class="future-concept"><img src="${a.image}" alt="${esc(a.alt)}" width="1536" height="1024" loading="lazy" decoding="async"><figcaption>${esc(a.imageCaption)}</figcaption></figure>
  ${a.revisedPhotography?`<p class="future-foundation"><strong>Existing foundation.</strong> ${esc(a.foundation)}</p>`:''}
  <p class="future-bridge">${esc(a.bridge)}</p>
  <p>${a.revisedPhotography?'<strong>Proposed 2030 improvement.</strong> ':''}${esc(a.scenario)}</p>
  <p class="future-capability"><strong>The proposed improvement</strong>${esc(a.advance)}</p>
  <div class="future-values" id="${a.htmlId}-values"><h5>What we carry forward</h5><p>${esc(a.values)}</p></div>
  <details class="future-research future-references" id="${a.htmlId}-references"><summary>Current foundations &amp; APA references</summary>
   <p>${esc(a.foundation)}</p><p><strong>Practical limits.</strong> ${esc(a.conditions)}</p>
   <ol class="future-reference-list">${[...a.sources].sort((x,y)=>SOURCES[x].apa.localeCompare(SOURCES[y].apa)).map(referenceHTML).join('')}</ol>
   <p class="future-scope">The sources document present-day foundations. The 2030 workflow, design, and image are proposed interpretations.</p>
  </details>
  <a class="future-return" href="#${a.htmlId.replace(/^future-/,'')}">Back to this comparison ↑</a>
 </section>`;
}
export function futureZoneHTML(zone) {
 const f=ZONE_FUTURES.find(x=>x.zone===zone),items=FUTURE_ARTIFACTS.filter(a=>a.zone===zone);
 return `<article class="step zone-future-step" id="${f.id}" data-step="${f.id}" aria-labelledby="${f.id}-title"><div class="label label-zone-future">
  <div class="label-head"><span class="label-no">Zone ${zone} · Future collection</span><span>2030 · Six proposals</span></div>
  <h3 id="${f.id}-title">${esc(f.title)}</h3><p class="future-zone-intro">${esc(f.intro)}</p>
  <p class="future-collection-note">Choose a category, or continue down through all six. Images and stories are visible directly.</p>
  <nav class="future-category-nav" aria-label="Zone ${zone} future categories">${items.map(a=>`<a href="#${a.htmlId}">${esc(categoryShort(a))}</a>`).join('')}</nav>
  <div class="future-legacy-anchors" aria-hidden="true">${['today','proposal','values','references'].map(part=>`<span id="${f.id}-${part}"></span>`).join('')}</div>
  ${items.map(futureArtifactHTML).join('')}
  <a class="comparison-next" href="#${f.next}">${zone<3?`Continue to Zone ${zone+1}`:'Continue to the closing reflection'} <span aria-hidden="true">↓</span></a>
 </div></article>`;
}
export function futureCreditsHTML() {
 return '<p>The eighteen 2030 illustrations were generated with OpenAI Imagegen for this museum in November 2026. Eleven images and their write-ups were revised on November 12 to emphasize realistic settings, familiar devices, and proposed software improvements. People, interfaces, settings, records, and example figures are illustrative. Research references appear with each artifact. The images are not product announcements or documentary photographs.</p>';
}
