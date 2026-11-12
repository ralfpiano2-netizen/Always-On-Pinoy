import { esc } from './ui.js?v=debug-20261108-1';

const SOURCES = {
  "schedule": {
    "id": "future-ref-schedule",
    "short": "Google, 2025",
    "apa": "Google. (2025, October 14). Gemini can now help you schedule time with others in Gmail.",
    "url": "https://blog.google/products-and-platforms/products/workspace/help-me-schedule-gmail-gemini/",
    "supports": "AI-assisted meeting-time suggestions already exist. It does not establish the proposed family scheduling system."
  },
  "work": {
    "id": "future-ref-work",
    "short": "Huynh, 2026",
    "apa": "Huynh, P. (2026, February 5). Generative AI and jobs in the Philippines: Labour market exposure and policy implications. International Labour Organization.",
    "url": "https://www.ilo.org/publications/generative-ai-and-jobs-philippines-labour-market-exposure-and-policy",
    "supports": "Philippine occupational exposure and uneven AI uptake. Exposure is not the same as job loss."
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
    "apa": "United Nations Development Programme. (n.d.). iVerify. Retrieved November 12, 2026, from",
    "url": "https://www.undp.org/digital/iverify",
    "supports": "Source-based fact checking, independent review, publication, and later correction. It is an international foundation, not evidence of deployment in every Philippine locality."
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
    "apa": "Apple. (2025, March 11). Apple unveils immersive concert experience with Metallica for Apple Vision Pro.",
    "url": "https://www.apple.com/newsroom/2025/03/apple-unveils-immersive-concert-experience-with-metallica-for-apple-vision-pro/",
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
    "apa": "Microsoft. (n.d.). Language and voice support for Azure Speech. Microsoft Learn. Retrieved November 12, 2026, from",
    "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support",
    "supports": "Speech capabilities vary by language and function. Local code-switching and performance audio still require validation."
  },
  "heat": {
    "id": "future-ref-heat",
    "short": "PAGASA, n.d.",
    "apa": "Philippine Atmospheric, Geophysical and Astronomical Services Administration. (n.d.). Heat index. Retrieved November 12, 2026, from",
    "url": "https://www.pagasa.dost.gov.ph/weather/heat-index/",
    "supports": "Published heat-index observations and data limitations. It does not guarantee conditions at a specific future event."
  },
  "hazard": {
    "id": "future-ref-hazard",
    "short": "GeoRisk Philippines, n.d.",
    "apa": "GeoRisk Philippines. (n.d.). About HazardHunterPH. Retrieved November 12, 2026, from",
    "url": "https://hazardhunter.georisk.gov.ph/about-hazardhunterph",
    "supports": "Indicative location-based assessments using government hazard data. It is not an all-clear or real-time route-safety guarantee."
  },
  "repair": {
    "id": "future-ref-repair",
    "short": "Fairphone, n.d.",
    "apa": "Fairphone. (n.d.). Here’s how you can repair your Fairphone device yourself. Retrieved November 12, 2026, from",
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
    "apa": "Zoom. (n.d.). Enabling and customizing the waiting room. Zoom Support. Retrieved November 12, 2026, from",
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
    "apa": "Labor Code of the Philippines, Presidential Decree No. 442, Book III, art. 86 (1974).",
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
  "photo-localcode": {
    "id": "future-ref-photo-localcode",
    "short": "Republic Act No. 7160, 1991",
    "apa": "Local Government Code of 1991, Republic Act No. 7160, § 397 (1991).",
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
  },
  "spotify-ai": {
    "id": "future-ref-spotify-ai",
    "short": "Spotify, 2024",
    "apa": "Spotify. (2024, April 7). Spotify Premium users can now turn any idea into a personalized playlist with AI Playlist in beta.",
    "url": "https://newsroom.spotify.com/2024-04-07/spotify-premium-users-can-now-turn-any-idea-into-a-personalized-playlist-with-ai-playlist-in-beta/",
    "supports": "Documents prompt-based AI playlist creation, initially in the United Kingdom and Australia. It does not establish the proposed group-fairness controls or Philippine availability."
  },
  "rag": {
    "id": "future-ref-rag",
    "short": "Lewis et al., 2020",
    "apa": "Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W.-t., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. arXiv. https://doi.org/10.48550/arXiv.2005.11401",
    "url": "https://arxiv.org/abs/2005.11401",
    "supports": "A research foundation for combining retrieval from a document collection with generated language. It does not guarantee truthful answers or demonstrate the museum’s specific Philippine integrations."
  }
};
export const FUTURE_REFERENCES = Object.values(SOURCES);
export const FUTURE_ARTIFACTS = [
  {
    "id": "F-SOC-T",
    "category": "Social",
    "aspect": "Time",
    "title": "Family premiere night",
    "bridge": "Television appointments and short SMS invitations connect with present-day group chats and conflicting school, work, and family schedules.",
    "foundation": "YouTube Premieres already combines a scheduled video release with a shared countdown and live chat (YouTube Help, n.d.). Google’s Help me schedule uses calendar availability and email context to suggest meeting times. This supplies an AI coordination foundation; the family service below is our proposed extension (Google, 2025).",
    "scenario": "A possible 2030 entertainment release could offer a regular family premiere alongside agreed catch-up sessions. Relatives in different places would choose a session that respects work, school, and rest. The program could include locally reviewed captions and a brief conversation prompt after an episode. AI scheduling would be optional support; the cultural artifact is the shared appointment and episode experience. Rights holders would approve access, while families could watch through ordinary screens and decline any invitation.",
    "advance": "A shared release format that makes family conversation part of watching, with scheduling assistance available when useful.",
    "values": "The television appointment becomes a question of whose time matters. A family shows care when it accommodates the relative coming off a shift instead of expecting everyone to be available on demand.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-youtube",
      "schedule"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-social-time",
    "image": "assets/future-2030/f-soc-t.jpg?v=photos-20261112",
    "alt": "AI-generated illustration of a proposed 2030 scene: Family premiere night",
    "imageCaption": "AI-generated 2030 scenario · Inspired by YouTube Premieres (YouTube Help, n.d.)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "YouTube Premieres already combines a scheduled video release with a shared countdown and live chat",
        "sources": [
          "photo-youtube"
        ]
      },
      {
        "text": "Google’s Help me schedule uses calendar availability and email context to suggest meeting times. This supplies an AI coordination foundation; the family service below is our proposed extension",
        "sources": [
          "schedule"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A new episode becomes a family appointment again. In this possible 2030 format, relatives choose a premiere or catch-up session together, with room for shift work, distance, and the person who needs to rest."
  },
  {
    "id": "F-SOC-S",
    "category": "Social",
    "aspect": "Space",
    "title": "AI assisted public Wi Fi access hub",
    "bridge": "The computer-shop chair and Friendster profile connect with current multiplayer lobbies and online gathering places.",
    "foundation": "Mercurio documents the DICT’s expansion of free Wi-Fi in Philippine public places, including geographically isolated communities (Mercurio, 2021). Microsoft lists Filipino speech recognition and neural voices, while warning that language support differs by feature. These are components for an optional spoken help service, not proof of universal local-language access (Microsoft, n.d.).",
    "scenario": "By 2030, a public access hub could combine maintained connectivity with optional Filipino-language voice help, clear connection notices, and a human assistance point. AI could guide a user through an access problem without requesting unrelated personal information. Staff would review recurring failures and provide an ordinary non-AI access route. The improvement is dependable assistance and inclusion around familiar infrastructure, rather than a new kind of router.",
    "advance": "Join public connectivity with tested spoken assistance and a human help point, retaining a straightforward non-AI access route.",
    "values": "Free access has value when someone can actually use it. Pakikipagkapwa appears in a volunteer patiently helping an older resident, making public space welcoming across age and confidence levels.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-wifi",
      "speech"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-social-space",
    "image": "assets/future-2030/f-soc-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted public Wi Fi access hub",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the free public Wi-Fi program (Mercurio, 2021)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Mercurio documents the DICT’s expansion of free Wi-Fi in Philippine public places, including geographically isolated communities",
        "sources": [
          "photo-wifi"
        ]
      },
      {
        "text": "Microsoft lists Filipino speech recognition and neural voices, while warning that language support differs by feature. These are components for an optional spoken help service, not proof of universal local-language access",
        "sources": [
          "speech"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "Public internet should come with someone willing to help. This 2030 access hub pairs a familiar connection with spoken guidance and a human assistance point, so confidence and age do not decide who can join in."
  },
  {
    "id": "F-SOC-X",
    "category": "Social",
    "aspect": "Technology",
    "title": "OPM listening circle",
    "bridge": "Keypad messages and padala connect with video calls and the continuing separation of overseas workers from their families.",
    "foundation": "Spotify Jam already offers a shared queue and recommendations for a group (Spotify, 2023). Spotify’s 2024 AI Playlist announcement documents music selection from written prompts, initially in selected markets. The proposed group-approval and participation review would extend those existing capabilities (Spotify, 2024).",
    "scenario": "By 2030, an OPM listening series could pair a neighborhood meetup with a shared online queue. Participants would take turns choosing a song and adding a short memory or artist credit; listeners joining remotely could contribute to the same session. Local musicians could host an occasional discussion under agreed performance and licensing terms. Recommendations would remain optional and the group could review whose selections dominate. The improvement would be a repeatable cultural gathering with fair participation, rather than another personalized feed.",
    "advance": "Bring shared queues into a recurring OPM gathering where members introduce songs, recognize artists, and make room for different tastes.",
    "values": "Friendship makes room for another person’s taste. Sharing a speaker becomes meaningful when the quieter friend can contribute a song and decline an algorithm’s suggestion without embarrassment.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-spotify",
      "spotify-ai",
      "photo-gig"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 3,
    "htmlId": "future-social-technology",
    "image": "assets/future-2030/f-soc-x.jpg?v=photos-20261112",
    "alt": "AI-generated illustration of a proposed 2030 scene: OPM listening circle",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Spotify Jam (Spotify, 2023)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Spotify Jam already offers a shared queue and recommendations for a group",
        "sources": [
          "photo-spotify"
        ]
      },
      {
        "text": "Spotify’s 2024 AI Playlist announcement documents music selection from written prompts, initially in selected markets. The proposed group-approval and participation review would extend those existing capabilities",
        "sources": [
          "spotify-ai"
        ]
      },
      {
        "text": "Angan describes local gigs as independent communities formed around music, providing a Philippine setting for a recurring listening gathering",
        "sources": [
          "photo-gig"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "Pass the speaker, share an OPM song, and tell the story behind it. A possible 2030 listening circle combines a shared queue with regular meetups, giving the quietest friend a turn instead of letting recommendations set the whole mood."
  },
  {
    "id": "F-ECO-T",
    "category": "Economic",
    "aspect": "Time",
    "title": "AI assisted night shift and rest planner",
    "bridge": "The BPO night-shift schedule connects with remote work, platform tasks, and AI-assisted service jobs.",
    "foundation": "Huynh’s Philippine labour-market brief describes uneven AI adoption and changes to tasks, particularly in IT-BPM work; exposure to AI does not itself mean a job is eliminated (Huynh, 2026). Article 86 recognizes night-shift differential within the Labor Code’s coverage rules. Google’s scheduling feature supplies a separate example of AI-assisted time coordination (Labor Code of the Philippines, 1974; Google, 2025).",
    "scenario": "By 2030, a worker-controlled planner could connect verified attendance, applicable pay rules, and personal care commitments. AI would explain a proposed shift change, show the additional-pay component separately, and flag conflicts with agreed rest. The worker could question an entry before payroll closes. Employers and qualified staff would remain responsible for rule application and corrections; an AI estimate would not establish legal entitlement or replace human review.",
    "advance": "Connect reviewed attendance, applicable pay information, and care commitments in a worker-controlled plan with a correction route.",
    "values": "The headset links income with the hours a worker cannot spend at home. Respect for labor includes understandable pay and protected recovery, so that providing for a family does not make fatigue invisible.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "work",
      "photo-labor",
      "schedule"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-economic-time",
    "image": "assets/future-2030/f-eco-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted night shift and rest planner",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the night shift differential (Labor Code of the Philippines, 1974, art. 86)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Huynh’s Philippine labour-market brief describes uneven AI adoption and changes to tasks, particularly in IT-BPM work; exposure to AI does not itself mean a job is eliminated",
        "sources": [
          "work"
        ]
      },
      {
        "text": "Article 86 recognizes night-shift differential within the Labor Code’s coverage rules. Google’s scheduling feature supplies a separate example of AI-assisted time coordination",
        "sources": [
          "photo-labor",
          "schedule"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A shift is part of a life, not just a row in a timetable. A worker-controlled 2030 planner would make pay assumptions, rest conflicts, and care commitments easier to question before a schedule becomes final."
  },
  {
    "id": "F-ECO-S",
    "category": "Economic",
    "aspect": "Space",
    "title": "AI assisted live selling and gig merchandise stall",
    "bridge": "Mall browsing and the sari-sari counter connect with present-day live selling and small-business creator sessions.",
    "foundation": "TikTok reports Philippine sellers using live commerce and training programs. This is the platform’s own account, rather than independent evidence of typical earnings (TikTok, 2026). Angan describes independent Filipino gig communities. Retrieval-augmented generation offers a technical basis for drafting answers from a selected information collection, which this proposal would adapt to seller-approved stock and product records (Angan, 2023; Lewis et al., 2020).",
    "scenario": "By 2030, a merchandise stall could connect in-person sales, a livestream, and one seller-approved stock record. AI could draft item descriptions, group repeated customer questions, and flag a potential oversell before an order is confirmed. The seller would check claims, handle returns, and approve changes. The proposal brings together existing channels around a small venue; it does not assume that ordinary live selling will first appear in 2030.",
    "advance": "Coordinate in-person and livestream sales around one seller-approved stock record, with questions and overselling warnings checked by the seller.",
    "values": "Buying a shirt can support the local scene as well as express fandom. Trust depends on the seller answering for the goods and artists retaining control over their designs and income.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-commerce",
      "photo-gig",
      "rag"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-economic-space",
    "image": "assets/future-2030/f-eco-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted live selling and gig merchandise stall",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Philippine live commerce and independent gigs (TikTok, 2026; Angan, 2023)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "TikTok reports Philippine sellers using live commerce and training programs. This is the platform’s own account, rather than independent evidence of typical earnings",
        "sources": [
          "photo-commerce"
        ]
      },
      {
        "text": "Angan describes independent Filipino gig communities. Retrieval-augmented generation offers a technical basis for drafting answers from a selected information collection, which this proposal would adapt to seller-approved stock and product records",
        "sources": [
          "photo-gig",
          "rag"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "The shirt on a gig’s merch table can also reach a fan watching from home. One checked stock record would help a small seller serve both audiences while artists keep control over their designs."
  },
  {
    "id": "F-ECO-X",
    "category": "Economic",
    "aspect": "Technology",
    "title": "AI-assisted payment and padala app",
    "bridge": "Scratch-card codes and remittance counters connect with digital wallets, QR payments, and cross-border transfers.",
    "foundation": "The BSP reports the growth of Philippine digital payments and identifies inclusion, interoperability, and consumer welfare as priorities (Bangko Sentral ng Pilipinas, 2025). Retrieval-augmented generation combines document retrieval with generated language. It is a technical foundation for an assistant explaining verified provider information; the paper does not demonstrate a payment app or authorize a transfer (Lewis et al., 2020).",
    "scenario": "By 2030, an assistant inside a supported payment app or website could explain a transfer in familiar language before a person confirms it. It would show the intended recipient, total fees, the amount expected to arrive, a delivery estimate, and a route to a human adviser using verified provider data. AI could flag a mismatch for review; authentication and transfer execution would remain with the regulated payment service. The artifact is this understandable review workflow, not an additional gadget.",
    "advance": "Explain verified fees, recipient details, and expected delivery in familiar language before the user confirms through the regulated provider.",
    "values": "Respect means helping someone understand a transaction without taking control of their money. Convenience should include the less confident user and the relative paying fees.",
    "conditions": "Provider integration, accurate disclosures, authentication, and error recovery are essential. AI does not eliminate fraud or authorize transfers by itself.",
    "sources": [
      "payments",
      "rag"
    ],
    "existing": "New proposal",
    "embodiment": "A familiar mobile wallet or web interface with explained fees, recipient details, provider comparison, and user confirmation.",
    "zone": 3,
    "htmlId": "future-economic-technology",
    "image": "assets/future-2030/f-eco-x.jpg",
    "alt": "Proposed 2030 visualization: A familiar mobile wallet or web interface with explained fees, recipient details, provider comparison, and user confirmation.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "The BSP reports the growth of Philippine digital payments and identifies inclusion, interoperability, and consumer welfare as priorities",
        "sources": [
          "payments"
        ]
      },
      {
        "text": "Retrieval-augmented generation combines document retrieval with generated language. It is a technical foundation for an assistant explaining verified provider information; the paper does not demonstrate a payment app or authorize a transfer",
        "sources": [
          "rag"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "Before sending support, understand what will arrive. This possible payment review explains fees, recipient details, and delivery expectations in familiar language, with the sender retaining the final choice."
  },
  {
    "id": "F-POL-T",
    "category": "Political",
    "aspect": "Time",
    "title": "AI assisted public hearing follow up viewer",
    "bridge": "The circulating SMS invitation to EDSA connects with reposts, public-issue threads, and questions about what happens after attention fades.",
    "foundation": "PhilstarLIVE documents an online Senate hearing on July 16, 2024, providing a concrete Philippine example of public proceedings distributed through video (PhilstarLIVE, 2024). Speech-recognition tools and retrieval-augmented generation supply components for a searchable transcript and source-linked explanations. The hearing archive and follow-up workflow below would still need editorial checking (Microsoft, n.d.; Lewis et al., 2020).",
    "scenario": "By 2030, a hearing viewer could connect the recording with a searchable transcript, source-linked summaries, and a dated follow-up list. AI could propose chapter markers and retrieve the passage behind a summary; an editor would check names, quotations, and corrections. Visitors could return to unresolved questions after the live broadcast ends. The improvement is an accountable path from watching to checking and following up, not simply another livestream.",
    "advance": "Connect the recording, checked transcript, cited summaries, and dated follow-up so public attention can continue after the broadcast.",
    "values": "Pananagutan requires patience after the moment of public attention. Remembering a commitment and checking its context can matter as much as sharing a dramatic clip.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-hearing",
      "speech",
      "rag"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-political-time",
    "image": "assets/future-2030/f-pol-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted public hearing follow up viewer",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Senate hearing livestreams (PhilstarLIVE, 2024)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "PhilstarLIVE documents an online Senate hearing on July 16, 2024, providing a concrete Philippine example of public proceedings distributed through video",
        "sources": [
          "photo-hearing"
        ]
      },
      {
        "text": "Speech-recognition tools and retrieval-augmented generation supply components for a searchable transcript and source-linked explanations. The hearing archive and follow-up workflow below would still need editorial checking",
        "sources": [
          "speech",
          "rag"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "The hearing ends; the question should not disappear. A 2030 viewer could connect a recording to checked transcripts, source-linked summaries, and dated follow-ups, making commitments easier to revisit after the viral clip fades."
  },
  {
    "id": "F-POL-S",
    "category": "Political",
    "aspect": "Space",
    "title": "AI meeting concierge for barangay assemblies",
    "bridge": "Physical assemblies and street gatherings connect with online meetings, livestream comments, and remote participation.",
    "foundation": "Section 397 of the Local Government Code establishes barangay assemblies as a setting for community discussion (Republic Act No. 7160, 1991). Zoom documents host-controlled waiting-room admission and announced custom AI agents for coordinating workflows. Topic queues and invitations into a barangay discussion would be a proposed integration of those components (Zoom, n.d.; Zoom, 2026).",
    "scenario": "By 2030, an AI concierge could receive inquiries before an online or hybrid assembly, suggest topic groups, and display a clear speaking queue. When a topic is due, the system could invite relevant residents from their waiting group into the main room under the moderator’s rules. Residents could correct a grouping and the moderator could override admission decisions. Phone, text, and in-person participation would need an equivalent route; remote attendance arrangements would still require official approval.",
    "advance": "Group inquiries and show speaking turns before a moderator-controlled invitation into the main meeting room.",
    "values": "Being invited is not the same as being heard. Pakikipagkapwa requires a fair turn for the distant worker and quiet resident, with the final responsibility remaining with human organizers.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-localcode",
      "zoomwaiting",
      "zoomagents"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-political-space",
    "image": "assets/future-2030/f-pol-s.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI meeting concierge for barangay assemblies",
    "imageCaption": "AI-generated 2030 scenario · Inspired by barangay assemblies and online meeting controls (Republic Act No. 7160, 1991; Zoom, n.d.)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Section 397 of the Local Government Code establishes barangay assemblies as a setting for community discussion",
        "sources": [
          "photo-localcode"
        ]
      },
      {
        "text": "Zoom documents host-controlled waiting-room admission and announced custom AI agents for coordinating workflows. Topic queues and invitations into a barangay discussion would be a proposed integration of those components",
        "sources": [
          "zoomwaiting",
          "zoomagents"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A public meeting needs a fair turn, not just an invitation. An online concierge could group questions and show the queue, while a human moderator decides when residents enter the discussion."
  },
  {
    "id": "F-POL-X",
    "category": "Political",
    "aspect": "Technology",
    "title": "Source-tracing card for civic media",
    "bridge": "Forwarded recordings and chain messages connect with edited clips, synthetic media, and rapid political circulation.",
    "foundation": "C2PA records available media origin and editing history, but explicitly states that provenance alone cannot establish whether content is factually true (Coalition for Content Provenance and Authenticity, n.d.). UNDP’s iVerify describes source consultation, independent review, published evidence, and later corrections. This supplies a human verification model for the proposed civic-media card (United Nations Development Programme, n.d.).",
    "scenario": "By 2030, a civic-media card could present available origin records, edit history, original context, and links to independent checks before a clip is forwarded. AI would help find matching material and summarize discrepancies, with uncertainty shown. The card would separate provenance from factual accuracy and invite a user to read the supporting record. A missing credential would not automatically label a post false.",
    "advance": "Present available origin records alongside context and independent checks in an everyday sharing workflow, with uncertainty and corrections visible.",
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
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "C2PA records available media origin and editing history, but explicitly states that provenance alone cannot establish whether content is factually true",
        "sources": [
          "credentials"
        ]
      },
      {
        "text": "UNDP’s iVerify describes source consultation, independent review, published evidence, and later corrections. This supplies a human verification model for the proposed civic-media card",
        "sources": [
          "iverify"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "Before forwarding a dramatic clip, see where it came from. A civic-media card could put available edit history beside context and independent checks, while showing what is still uncertain."
  },
  {
    "id": "F-CUL-T",
    "category": "Cultural",
    "aspect": "Time",
    "title": "Shared P-pop concert screening",
    "bridge": "Noontime dance crazes and Pacquiao Sundays connect with present-day P-pop fandoms, streams, and watch parties.",
    "foundation": "Apple’s 2025 Metallica release demonstrates a recorded 180-degree immersive concert captured from selected viewpoints, rather than unrestricted movement through a live show (Apple, 2025). SharePlay already supports synchronized media experiences during calls. Combining licensed Filipino performances, synchronized sessions, and checked captions is the proposed next step (Apple, 2021).",
    "scenario": "A possible 2030 P-pop release could include licensed concert chapters for synchronized barkada screenings in community venues and at home. A screening ticket would connect the performance with checked captions, performer credits, and an optional scheduled artist conversation where feasible. Selected recorded immersive views could complement ordinary screens. Artists and rights holders would approve distribution and reuse; the proposal does not promise free access or unrestricted movement through a live concert. The advance is a shared cultural release format that welcomes people who cannot attend the original show.",
    "advance": "Connect a recorded P-pop release with shared screenings, accessible captions, artist recognition, and an agreed time to gather.",
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
    "alt": "AI-generated illustration of a proposed 2030 scene: Shared P-pop concert screening",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "Apple’s 2025 Metallica release demonstrates a recorded 180-degree immersive concert captured from selected viewpoints, rather than unrestricted movement through a live show",
        "sources": [
          "concert"
        ]
      },
      {
        "text": "SharePlay already supports synchronized media experiences during calls. Combining licensed Filipino performances, synchronized sessions, and checked captions is the proposed next step",
        "sources": [
          "shareplay"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A P-pop concert release becomes a barkada occasion. This possible 2030 screening format brings licensed performances to shared sessions in community venues and at home, with ordinary screens welcome alongside immersive viewing."
  },
  {
    "id": "F-CUL-S",
    "category": "Cultural",
    "aspect": "Space",
    "title": "Community drag showcase",
    "bridge": "The parlor, barangay pageant, and local gig connect with drag streaming, viewing parties, and online performance discovery.",
    "foundation": "Licsi identifies Philippine venues where Drag Race fans gathered for viewing parties and appearances by performers, grounding this scenario in existing queer social spaces (Licsi, 2022). Microsoft documents speech-to-text and translation capabilities with language-specific limits. UNESCO addresses digital cultural access and artistic freedom; neither source establishes this future venue service (Microsoft, n.d.; UNESCO, 2022).",
    "scenario": "By 2030, a community-run venue could offer a recurring program pairing local drag performances with licensed screenings where permitted. The program would identify performers, provide reviewed captions for supported segments, and offer opt-in remote attendance. Guests and artists would choose what may be recorded. Ticketing and reuse agreements would need to support the people who sustain the venue. Technical assistance would serve the event; the future artifact is an artist-controlled show program and its continuing audience.",
    "advance": "Extend a community venue’s program through accessible, consent-based participation while keeping performers and local organizers in control.",
    "values": "Queer belonging is sustained by the people who make room for one another. A larger audience should strengthen the venue and its performers, while respecting a guest’s choice to remain off camera.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-drag",
      "speech",
      "culture"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 2,
    "htmlId": "future-cultural-space",
    "image": "assets/future-2030/f-cul-s.jpg?v=photos-20261112",
    "alt": "AI-generated illustration of a proposed 2030 scene: Community drag showcase",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Drag Race Philippines viewing parties (Licsi, 2022)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Licsi identifies Philippine venues where Drag Race fans gathered for viewing parties and appearances by performers, grounding this scenario in existing queer social spaces",
        "sources": [
          "photo-drag"
        ]
      },
      {
        "text": "Microsoft documents speech-to-text and translation capabilities with language-specific limits. UNESCO addresses digital cultural access and artistic freedom; neither source establishes this future venue service",
        "sources": [
          "speech",
          "culture"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "The future artifact is a show program: local drag, a shared screening, and a chance to meet the people behind the performance. By 2030, a community venue could connect nearby audiences and opt-in remote guests without surrendering control of its stage."
  },
  {
    "id": "F-CUL-X",
    "category": "Cultural",
    "aspect": "Technology",
    "title": "AI drafts with human reviewed community subtitles",
    "bridge": "OPM and novelty-song revivals connect with P-pop clips, dance covers, and music reaching audiences across languages.",
    "foundation": "Burt describes Viki’s community of volunteer fan translators, showing that subtitles can be a form of audience participation and cultural exchange (Burt, 2021). Microsoft’s language-support documentation establishes existing speech and translation components. Human judgment about jokes, code-switching, and cultural meaning remains a requirement of the proposed workflow (Microsoft, n.d.).",
    "scenario": "By 2030, a subtitling workspace could combine AI drafts with context notes, shared glossaries, clear uncertainty flags, and approval by a named language editor. The human reviewer would choose how to handle jokes, honorifics, and expressions that lose meaning in literal translation. Corrections and contributor credits would remain attached to the approved version. This proposes a more accountable workflow; it does not assume that an AI draft understands every cultural context or that volunteer work should replace fairly recognized labor.",
    "advance": "Link AI drafts, shared context notes, named human review, corrections, and contributor credits in one accountable subtitling workflow.",
    "values": "A subtitle carries someone else’s voice. Cultural respect means making meaning accessible while acknowledging the translators whose judgment helps a new audience understand it.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-viki",
      "speech"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 3,
    "htmlId": "future-cultural-technology",
    "image": "assets/future-2030/f-cul-x.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI drafts with human reviewed community subtitles",
    "imageCaption": "AI-generated 2030 scenario · Inspired by Viki’s volunteer subtitlers (Burt, 2021)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Burt describes Viki’s community of volunteer fan translators, showing that subtitles can be a form of audience participation and cultural exchange",
        "sources": [
          "photo-viki"
        ]
      },
      {
        "text": "Microsoft’s language-support documentation establishes existing speech and translation components. Human judgment about jokes, code-switching, and cultural meaning remains a requirement of the proposed workflow",
        "sources": [
          "speech"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A subtitle can carry a joke, a memory, or an expression that deserves care. This 2030 workflow keeps translators’ judgment and credits attached to AI-assisted drafts, helping stories travel without flattening their meaning."
  },
  {
    "id": "F-ENV-T",
    "category": "Environmental",
    "aspect": "Time",
    "title": "Heat-aware fiesta and community-event planner",
    "bridge": "A scheduled Earth Hour gesture connects with climate concern and decisions about when communities gather for sport, performance, and celebration.",
    "foundation": "PAGASA publishes heat-index information and cautions that reported values can be corrected and station data may contain gaps or errors (PAGASA, n.d.). Google’s AI scheduling announcement demonstrates suggestions based on calendar context. The proposal would add reviewed environmental information to event coordination; it does not claim that this scheduling tool forecasts local weather (Google, 2025).",
    "scenario": "By 2030, an event planner could combine current official advisories, local observations, and the needs of performers, vendors, and audiences. AI would suggest alternative times and explain whose activities would be affected. Organizers would review the options and publish changes through online and offline channels. The artifact would show environmental care becoming part of the timetable of an ordinary celebration.",
    "advance": "Help organizers compare event times using current reviewed advisories, with human decisions and accessible change notices.",
    "values": "Collective joy carries a duty to consider those waiting, working, or performing outdoors. Care means adapting the event instead of leaving vulnerable participants to absorb the burden.",
    "conditions": "Local conditions and data can change. Organizers must use current official advice and qualified local assessment, not treat an AI suggestion as a safety guarantee.",
    "sources": [
      "heat",
      "schedule"
    ],
    "existing": "New proposal; restores Environmental coverage",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 1,
    "htmlId": "future-environmental-time",
    "image": "assets/future-2030/f-env-t.jpg",
    "alt": "Proposed 2030 visualization: Flexible event-planning sheet and local environmental sensor",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "PAGASA publishes heat-index information and cautions that reported values can be corrected and station data may contain gaps or errors",
        "sources": [
          "heat"
        ]
      },
      {
        "text": "Google’s AI scheduling announcement demonstrates suggestions based on calendar context. The proposal would add reviewed environmental information to event coordination; it does not claim that this scheduling tool forecasts local weather",
        "sources": [
          "schedule"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A fiesta timetable can show care for the people working in the heat. This possible planner helps organizers compare times using current advisories, with people checking decisions and sharing changes beyond social media."
  },
  {
    "id": "F-ENV-S",
    "category": "Environmental",
    "aspect": "Space",
    "title": "Community-reviewed hazard and access map",
    "bridge": "The Payatas and Ondoy material connects with present-day hazard maps and unequal exposure across neighborhoods.",
    "foundation": "HazardHunterPH generates indicative location-based assessments using government hazard information and distinguishes them from official assessment reports (GeoRisk Philippines, n.d.). Retrieval-augmented generation supplies a method for producing language from retrieved documents. Here it would be adapted to explain dated, reviewed records; the research does not establish a safe route or a local hazard prediction (Lewis et al., 2020).",
    "scenario": "By 2030, a community map could combine indicative hazard layers with reviewed information about meeting places, accessibility barriers, and service interruptions. AI would turn the records into plain-language explanations and identify information that needs updating. Residents and local authorities would validate changes. The artifact could inform discussions about where to hold a gathering or invest in access, while uncertainty and the source date remain visible.",
    "advance": "Make dated technical and local records understandable and correctable without treating a generated explanation as a safety clearance.",
    "values": "Bayanihan includes noticing unequal exposure and listening to residents whose routes or homes are easily overlooked. Shared knowledge should guide prevention and collective responsibility.",
    "conditions": "A map cannot guarantee that a route or place is safe. Privacy, missing records, current advisories, and professional assessment remain important.",
    "sources": [
      "hazard",
      "rag"
    ],
    "existing": "New proposal; restores Environmental coverage",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 2,
    "htmlId": "future-environmental-space",
    "image": "assets/future-2030/f-env-s.jpg",
    "alt": "Proposed 2030 visualization: Community-reviewed tactile hazard and access planning table",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "HazardHunterPH generates indicative location-based assessments using government hazard information and distinguishes them from official assessment reports",
        "sources": [
          "hazard"
        ]
      },
      {
        "text": "Retrieval-augmented generation supplies a method for producing language from retrieved documents. Here it would be adapted to explain dated, reviewed records; the research does not establish a safe route or a local hazard prediction",
        "sources": [
          "rag"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A map becomes useful when residents can question and update it. This 2030 proposal joins dated hazard information with reviewed local knowledge, without pretending that a generated explanation can guarantee safety."
  },
  {
    "id": "F-ENV-X",
    "category": "Environmental",
    "aspect": "Technology",
    "title": "Repairable phone with an AI repair passport",
    "bridge": "The Nokia handset and the memory of keeping a device useful connect with rapid upgrades and growing electronic waste.",
    "foundation": "Fairphone provides diagnostics, replaceable components, and repair guides. ITU identifies limited repair options and shorter product life cycles among the challenges behind growing global electronic waste (Fairphone, n.d.; International Telecommunication Union, 2024). Document retrieval combined with generated explanations offers a foundation for finding model-specific repair information. Linking it to verified service history and local parts remains a proposed integration (Lewis et al., 2020).",
    "scenario": "By 2030, a repairable phone could carry an owner-controlled record of replaced parts, software support, and checked service work. AI would interpret device diagnostics and retrieve model-specific instructions or suggest a qualified repairer. The advance would join repair information with local parts and service availability. A repairer would verify faults and repair decisions, while the passport makes a secondhand device’s history easier to understand.",
    "advance": "Connect model-specific instructions, verified repairs, and local service availability in a record an owner can retain when a device is resold.",
    "values": "Pagpapahalaga can include maintaining an object and respecting the skilled person who repairs it. An upgrade gains meaning when it avoids shifting waste onto another community.",
    "conditions": "Parts, software support, safe servicing, and trusted records are necessary. AI diagnosis and a repairable design alone do not prove lower lifecycle impact.",
    "sources": [
      "repair",
      "ewaste",
      "rag"
    ],
    "existing": "New proposal; restores Environmental coverage",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 3,
    "htmlId": "future-environmental-technology",
    "image": "assets/future-2030/f-env-x.jpg",
    "alt": "Proposed 2030 visualization: Serviceable modular phone, parts tray, and continuing repair record",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "Fairphone provides diagnostics, replaceable components, and repair guides. ITU identifies limited repair options and shorter product life cycles among the challenges behind growing global electronic waste",
        "sources": [
          "repair",
          "ewaste"
        ]
      },
      {
        "text": "Document retrieval combined with generated explanations offers a foundation for finding model-specific repair information. Linking it to verified service history and local parts remains a proposed integration",
        "sources": [
          "rag"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "Keep the phone; keep its repair story. An owner-controlled passport could connect replaced parts, checked servicing, and useful instructions, making repair and secondhand ownership easier to understand."
  },
  {
    "id": "F-OTH-T",
    "category": "Others — Music and aesthetics",
    "aspect": "Time",
    "title": "Independent gig running order",
    "bridge": "The fashion revivals in the past and present panels show how cultural styles return. This future proposal broadens Others to the local music scene, focusing on the time and labor that sustain a shared night out.",
    "foundation": "Angan portrays Philippine gigs as independent communities of artists, organizers, venues, and listeners (Angan, 2023). Google already uses AI to suggest meeting times from calendar information. The museum adapts that coordination idea to soundchecks, travel, and performers’ agreed availability; the article does not describe a gig-management product (Google, 2025).",
    "scenario": "By 2030, a gig scheduling app could compare a venue’s running order with musicians’ agreed availability, soundcheck needs, and travel constraints. AI would suggest changes for the organizer and performers to approve, with the reason and effect on each act visible. A late change could trigger an agreed notice to ticket holders. The app would support coordination, while people retain decisions about fees, repertoire, and working conditions.",
    "advance": "Coordinate a gig’s running order around soundcheck, travel, and day-job constraints with performers approving changes.",
    "values": "A night of music rests on work that audiences may never see. Keeping a set on time and making room for a musician’s day job or journey home recognizes the person behind the performance.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-gig",
      "schedule"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 1,
    "htmlId": "future-others-time",
    "image": "assets/future-2030/f-oth-t.jpg?v=photos-20261112",
    "alt": "AI-generated proposed 2030 scene: AI assisted independent gig timetable",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the independent gig scene (Angan, 2023)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Angan portrays Philippine gigs as independent communities of artists, organizers, venues, and listeners",
        "sources": [
          "photo-gig"
        ]
      },
      {
        "text": "Google already uses AI to suggest meeting times from calendar information. The museum adapts that coordination idea to soundchecks, travel, and performers’ agreed availability; the article does not describe a gig-management product",
        "sources": [
          "schedule"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A good gig starts before the first song. A shared running order could make room for soundchecks, day jobs, and the journey home, with performers approving changes rather than quietly absorbing them."
  },
  {
    "id": "F-OTH-S",
    "category": "Others — Aesthetics",
    "aspect": "Space",
    "title": "Rewear, repair and swap pop-up",
    "bridge": "The ukay rack and barkada mall trip connect with online resale and a renewed interest in older garments.",
    "foundation": "UNEP’s textile roadmap connects changes in consumption with production practices and enabling infrastructure; it does not treat one resale transaction as proof of sustainability (United Nations Environment Programme, 2023). Doppl demonstrates experimental AI outfit visualization. A neighborhood service could combine a preview with real garment inspection and a tailor’s judgment, while keeping simulated fit distinct from actual condition (Rambhia & Kemelmacher-Shlizerman, 2025).",
    "scenario": "A possible 2030 neighborhood pop-up could combine a secondhand rack, a swap rail, a tailor’s repair appointments, and garment story tags showing previous alterations. A shared listing could help visitors find sizes or book a repair before arriving. Optional AI previews could suggest a restyling idea, while a person checks the actual fabric, fit, condition, and cost. The future artifact is the repaired garment and its continuing story, supported by a dependable local service. Environmental benefits would need to be assessed rather than assumed from a single swap.",
    "advance": "Connect repair, exchange, and repeated wear in a local fashion gathering, with digital previews supporting actual inspection and skilled work.",
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
    "alt": "AI-generated illustration of a proposed 2030 scene: Rewear, repair and swap pop-up",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts.",
    "researchNotes": [
      {
        "text": "UNEP’s textile roadmap connects changes in consumption with production practices and enabling infrastructure; it does not treat one resale transaction as proof of sustainability",
        "sources": [
          "textiles"
        ]
      },
      {
        "text": "Doppl demonstrates experimental AI outfit visualization. A neighborhood service could combine a preview with real garment inspection and a tailor’s judgment, while keeping simulated fit distinct from actual condition",
        "sources": [
          "tryon"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "The next outfit could already be in the neighborhood. This possible 2030 pop-up brings secondhand finds, repair skills, and a swap rail together, making repeated wear part of personal style rather than something to hide."
  },
  {
    "id": "F-OTH-X",
    "category": "Others — Aesthetics",
    "aspect": "Technology",
    "title": "Morena style lookbook",
    "bridge": "Beauty-product imagery and filtered faces connect with generative try-on tools and questions about who sets an acceptable appearance.",
    "foundation": "Doshi introduces the ten-shade Monk Skin Tone Scale as a resource for more inclusive technology development and evaluation (Doshi, 2022). Rambhia and Kemelmacher-Shlizerman demonstrate AI outfit visualization through Doppl. Preserving a user-approved likeness and evaluating results across diverse complexions are the museum’s proposed improvements, not guarantees made by either source (Rambhia & Kemelmacher-Shlizerman, 2025).",
    "scenario": "By 2030, a Filipino style lookbook could show locally available outfits across varied complexions and body types, with maker credits and clear distinctions between photographed garments and simulated previews. Users could explore styles without automatic skin-lightening or body reshaping. Optional AI visualization would preserve a user-approved likeness and disclose uncertain garment details; customers could return to actual measurements, fabric inspection, and a tailor’s advice. The proposed advance is a more inclusive fashion presentation with evaluated rendering and user control, rather than a promise of perfect virtual fit.",
    "advance": "Make diversity visible in fashion presentation and give users control over simulations, corrections, and deletion of their images.",
    "values": "Dignity includes seeing oneself represented without being treated as a problem to correct. The useful advance is more choice and accountable evaluation, rather than an expectation that everyone must look lighter or more alike.",
    "conditions": "The people, interfaces, and settings are AI-generated illustrations. The proposed integration would require local testing, permission, and human review.",
    "sources": [
      "photo-monk",
      "tryon"
    ],
    "existing": "Existing foundation with a proposed 2030 improvement",
    "embodiment": "Software and familiar devices, illustrated in a realistic Filipino setting.",
    "zone": 3,
    "htmlId": "future-others-technology",
    "image": "assets/future-2030/f-oth-x.jpg?v=photos-20261112",
    "alt": "AI-generated illustration of a proposed 2030 scene: Morena style lookbook",
    "imageCaption": "AI-generated 2030 scenario · Inspired by the Monk Skin Tone Scale (Doshi, 2022)",
    "revisedPhotography": true,
    "researchNotes": [
      {
        "text": "Doshi introduces the ten-shade Monk Skin Tone Scale as a resource for more inclusive technology development and evaluation",
        "sources": [
          "photo-monk"
        ]
      },
      {
        "text": "Rambhia and Kemelmacher-Shlizerman demonstrate AI outfit visualization through Doppl. Preserving a user-approved likeness and evaluating results across diverse complexions are the museum’s proposed improvements, not guarantees made by either source",
        "sources": [
          "tryon"
        ]
      }
    ],
    "citationRevision": "2026-11-12",
    "preview": "A future style lookbook should make room for the person looking at it. The proposal features varied Filipino complexions and body types, real garments, and optional previews that keep automatic skin-lightening switched off."
  }
];

export const ZONE_FUTURES = [
 {zone:1,id:'zone-1-future',next:'zone-2',title:'Time · Six possible futures',intro:'Who gets time to rest, earn, gather, and belong? These six 2030 proposals consider the rhythms of shared life.'},
 {zone:2,id:'zone-2-future',next:'zone-3',title:'Space · Six possible futures',intro:'A place can welcome people or leave them outside. These six 2030 proposals explore access, participation, and the places people make together.'},
 {zone:3,id:'zone-3-future',next:'pause',title:'Technology · Six possible futures',intro:'A more capable service still depends on care, judgment, and trust. These six 2030 proposals ask whose choices technology should support.'}
];
const categoryName=a=>a.category.startsWith('Others')?a.category.replace(' — ',' · '):a.category;
const categoryShort=a=>a.category.startsWith('Others')?'Others':a.category;
function citationHTML(key) {
 const r=SOURCES[key];
 return `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.short)}</a>`;
}
function researchHTML(a) {
 return `<div class="future-foundation future-evidence" aria-label="Research behind this artifact"><h5>Research behind this artifact</h5>${a.researchNotes.map(n=>`<p>${esc(n.text)} (${n.sources.map(citationHTML).join('; ')}).</p>`).join('')}</div>`;
}
function referenceHTML(key) {
 const r=SOURCES[key];
 const apa=esc(r.apa).replace(/https?:\/\/[^\s<]+/g,url=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
 return `<li>${apa}${r.apa.includes('https://')?'':` <a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.url)}</a>`}<p class="future-source-scope">What it supports: ${esc(r.supports)}</p></li>`;
}
export function futureArtifactHTML(a) {
 return `<section class="future-proposal future-collection-card" id="${a.htmlId}" data-future="${a.id}" aria-labelledby="${a.htmlId}-title">
  <p class="future-category">${esc(categoryName(a))} · ${esc(a.aspect)} · 2030</p>
  <h4 id="${a.htmlId}-title">${esc(a.title)}</h4>
  <figure class="future-concept"><img src="${a.image}" alt="${esc(a.alt)}" width="1536" height="1024" loading="lazy" decoding="async"><figcaption>${esc(a.imageCaption)}</figcaption></figure>
  <p class="future-preview">${esc(a.preview)}</p>
  <p class="future-citation-row">Research basis: ${a.sources.map(citationHTML).join('; ')}.</p>
  <div class="future-values" id="${a.htmlId}-values"><h5>What we carry forward</h5><p>${esc(a.values)}</p></div>
  <details class="future-story" id="${a.htmlId}-story"><summary>Read more · story &amp; research</summary>
   <p class="future-bridge">${esc(a.bridge)}</p>
   <p><strong>Proposed 2030 improvement.</strong> ${esc(a.scenario)}</p>
   <p class="future-capability"><strong>What improves</strong>${esc(a.advance)}</p>
   ${researchHTML(a)}
   <p class="future-scope">The sources describe existing foundations. This 2030 extension is a museum proposal.</p>
  </details>
  <details class="future-research future-references" id="${a.htmlId}-references"><summary>APA references &amp; practical limits</summary>
   <p><strong>Practical limits.</strong> ${esc(a.conditions)}</p>
   <ol class="future-reference-list">${[...a.sources].sort((x,y)=>SOURCES[x].apa.localeCompare(SOURCES[y].apa)).map(referenceHTML).join('')}</ol>
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
