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
  }
};
export const FUTURE_REFERENCES = Object.values(SOURCES);
export const FUTURE_ARTIFACTS = [
  {
    "id": "F-SOC-T",
    "category": "Social",
    "aspect": "Time",
    "title": "Shared-time planner for families and barkadas",
    "bridge": "Television appointments and short SMS invitations connect with present-day group chats and conflicting school, work, and family schedules.",
    "foundation": "Google’s Help me schedule already suggests meeting times from calendar information and email context.",
    "scenario": "By 2030, a shared-time planner could negotiate a call, gaming session, or viewing night from availability that each person chooses to share. AI would compare shift changes, time zones, and rest windows, then offer explainable options for everyone to approve. Voice or text replies could include relatives with simpler devices. The artifact would be the agreed plan, including permission to decline.",
    "advance": "More dependable group coordination around irregular work and care, with limited availability sharing and human approval.",
    "values": "Making time becomes a form of care when the group accommodates its least available member instead of demanding constant responsiveness.",
    "conditions": "Calendar access, local-language understanding, and fair suggestions require testing. No one must disclose private appointments or accept a proposed time.",
    "sources": [
      "schedule",
      "work"
    ],
    "existing": "New proposal",
    "embodiment": "An AI scheduling app showing private availability, work/rest constraints, a proposed shared time, and participant approval.",
    "zone": 1,
    "htmlId": "future-social-time",
    "image": "assets/future-2030/f-soc-t.jpg",
    "alt": "Proposed 2030 visualization: An AI scheduling app showing private availability, work/rest constraints, a proposed shared time, and participant approval.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-SOC-S",
    "category": "Social",
    "aspect": "Space",
    "title": "AI co-created virtual tambayan",
    "bridge": "The computer-shop chair and Friendster profile connect with current multiplayer lobbies and online gathering places.",
    "foundation": "Roblox’s Cube beta demonstrates schema-based functional-object generation, rather than unlimited self-generating worlds.",
    "scenario": "By 2030, friends living apart could maintain one saved virtual tambayan on an established game platform. AI would propose supported decorations or simple activities from ordinary-language requests. Members would preview, approve, and undo changes together. A familiar corner or shared mural could preserve a sense of place, while contribution records recognize who helped make it and a basic view supports less powerful devices.",
    "advance": "An easier, locally tested co-creation interface within one bounded room. Ordinary platform systems handle storage and multiplayer rules.",
    "values": "Hospitality involves sharing decisions and noticing who lacks equipment or confidence. A saved room carries meaning through the people welcomed back into it.",
    "conditions": "Supported activities stay limited. Philippine-language support, moderation, device performance, and connectivity need evaluation.",
    "sources": [
      "cube"
    ],
    "existing": "Develops the current Zone 2 future",
    "embodiment": "A shared online room on a conventional computer, with remote friends, AI-assisted room editing, and saved group decisions.",
    "zone": 2,
    "htmlId": "future-social-space",
    "image": "assets/future-2030/f-soc-s.jpg",
    "alt": "Proposed 2030 visualization: A shared online room on a conventional computer, with remote friends, AI-assisted room editing, and saved group decisions.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-SOC-X",
    "category": "Social",
    "aspect": "Technology",
    "title": "Right-sized community family telepresence booth",
    "bridge": "Keypad messages and padala connect with video calls and the continuing separation of overseas workers from their families.",
    "foundation": "Google Beam combines AI video reconstruction with a light-field display for 3D conversations.",
    "scenario": "A possible 2030 community pilot could offer booked, eye-level telepresence sessions for overseas workers and relatives. AI-assisted capture and reconstruction would help preserve gaze and gestures within a supported viewing area. The portrait display would present a natural-scale seated person, making gaze and gestures easier to follow during a shared conversation. Ordinary video and voice would remain available. Wider group viewing remains a proposed extension requiring testing.",
    "advance": "A constrained, right-sized community telepresence service that makes gaze and shared gestures easier to follow while retaining natural proportions.",
    "values": "The person sending support also deserves company, patient listening, and interest in everyday life. Care must travel in both directions.",
    "conditions": "Multi-view optics, bandwidth, cost, and occlusion remain substantial constraints. This is a pilot possibility, not a prediction of affordable household adoption.",
    "sources": [
      "beam"
    ],
    "existing": "Narrows the current Zone 3 future to a 2030 pilot",
    "embodiment": "A portrait telepresence display showing the remote person at natural scale, with the complete seated figure visible.",
    "zone": 3,
    "htmlId": "future-social-technology",
    "image": "assets/future-2030/f-soc-x.jpg",
    "alt": "Proposed 2030 visualization: A portrait telepresence display showing the remote person at natural scale, with the complete seated figure visible.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-ECO-T",
    "category": "Economic",
    "aspect": "Time",
    "title": "Worker-controlled shift and learning planner",
    "bridge": "The BPO night-shift schedule connects with remote work, platform tasks, and AI-assisted service jobs.",
    "foundation": "The ILO identifies uneven Philippine GenAI uptake and potential task transformation. Occupational exposure is not equivalent to full job replacement.",
    "scenario": "By 2030, a worker-controlled planner could compare proposed shifts, learning tasks, and earnings estimates using records the worker supplies. AI would explain schedule changes and identify conflicts with agreed rest or care time. A worker could prepare questions before accepting a shift or training plan. The artifact would show whose time an efficiency gain saves and who carries the extra work.",
    "advance": "Integrated, explainable planning around changing tasks and care commitments, with assumptions and revisions visible to the worker.",
    "values": "Respect for labor includes recognizing fatigue and unpaid care. Productivity has social value when it supports a workable life and shared household responsibility.",
    "conditions": "Employer cooperation, reliable records, and contestable decisions are needed. Estimates do not guarantee income or protection from displacement.",
    "sources": [
      "work",
      "schedule"
    ],
    "existing": "New proposal",
    "embodiment": "A work-and-care planning web app on a normal rigid, flat tablet with a visible support stand.",
    "zone": 1,
    "htmlId": "future-economic-time",
    "image": "assets/future-2030/f-eco-t.jpg",
    "alt": "Proposed 2030 visualization: A work-and-care planning web app on a normal rigid, flat tablet with a visible support stand.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-ECO-S",
    "category": "Economic",
    "aspect": "Space",
    "title": "AI-assisted neighborhood live-selling service",
    "bridge": "Mall browsing and the sari-sari counter connect with present-day live selling and small-business creator sessions.",
    "foundation": "TikTok documents Philippine live-commerce examples and seller training in its own platform reporting.",
    "scenario": "By 2030, a cooperative live-selling service could connect a neighborhood counter with an online storefront and pickup records. A phone or ordinary camera would capture real products. AI would draft local-language captions, organize seller-approved details and stock, and group customer questions for the seller to answer. The seller would check product claims and remain available for physical inspection, returns, and pickup. The artifact is the connected service and listing, rather than a dedicated scanning machine.",
    "advance": "An integrated seller-controlled service linking product capture, checked descriptions, stock, inquiries, and local pickup on ordinary devices.",
    "values": "Tiwala grows through honest descriptions, repairable mistakes, and a seller who listens. Helping small enterprises should also protect buyers from pressure and misleading claims.",
    "conditions": "Service costs, platform dependence, returns, and seller approval affect feasibility. More views do not guarantee higher earnings.",
    "sources": [
      "shop"
    ],
    "existing": "New proposal",
    "embodiment": "A seller dashboard, a conventional camera or phone, and real products at a local counter.",
    "zone": 2,
    "htmlId": "future-economic-space",
    "image": "assets/future-2030/f-eco-s.jpg",
    "alt": "Proposed 2030 visualization: A seller dashboard, a conventional camera or phone, and real products at a local counter.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
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
    "title": "AI-assisted blockchain civic accountability ledger",
    "bridge": "The circulating SMS invitation to EDSA connects with reposts, public-issue threads, and questions about what happens after attention fades.",
    "foundation": "NIST explains tamper-evident distributed ledgers. A January 2026 Philippine government announcement describes a blockchain budget-transparency portal. These support the direction, rather than establish the proposed 2030 civic platform.",
    "scenario": "By 2030, a civic accountability website could connect a public concern or project with source documents, dated commitments, responses, and unresolved questions. AI would draft linked summaries and flag missing or inconsistent updates for human review. A permissioned blockchain could anchor document hashes and timestamps so published versions and later changes can be checked. Public records would remain readable in an ordinary browser, with corrections added transparently rather than silently replacing earlier entries. This would support follow-up after a viral issue fades; it would not turn an inaccurate submission into a true one.",
    "advance": "An AI-assisted, source-linked public follow-up service with independently checkable record history, document integrity, and visible human corrections.",
    "values": "Pananagutan involves returning to a commitment and allowing others to check the record. Responsible citizenship requires patience with evidence as well as urgency about a problem.",
    "conditions": "Record integrity is different from factual accuracy. Incomplete source data, selective publication, governance, privacy, and human verification still matter. Sensitive personal complaints should not be written directly into a permanent public ledger.",
    "sources": [
      "ledger",
      "phledger",
      "iverify"
    ],
    "existing": "New proposal",
    "embodiment": "A civic web portal with source-linked project records, dated updates, document-hash verification, and an audit trail.",
    "zone": 1,
    "htmlId": "future-political-time",
    "image": "assets/future-2030/f-pol-t.jpg",
    "alt": "Proposed 2030 visualization: A civic web portal with source-linked project records, dated updates, document-hash verification, and an audit trail.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-POL-S",
    "category": "Political",
    "aspect": "Space",
    "title": "AI meeting concierge for community forums",
    "bridge": "Physical assemblies and street gatherings connect with online meetings, livestream comments, and remote participation.",
    "foundation": "Zoom documents waiting-room admission controls and has announced custom AI agents and workflow orchestration. Their combination into the described community forum remains a proposed 2030 service.",
    "scenario": "By 2030, an AI concierge could welcome residents into an online community forum, collect their inquiries, and suggest topic groups such as water, road access, or permits. Participants would see their group, queue position, and what is currently being discussed. When a topic reaches the agenda, the concierge could invite the relevant participants from their waiting group into the main meeting under rules set by the moderator. People could correct a mistaken grouping, and the moderator could override admission decisions, keep distinct concerns visible, and review the resulting minutes. Phone and text routes could support residents with less reliable connectivity.",
    "advance": "A coordinated inquiry-to-discussion workflow: AI intake and topic grouping, visible queues, and timely invitations into the main room, with human moderation.",
    "values": "Pakikipagkapwa means giving a distant worker, a quiet resident, and a person without reliable data a fair opportunity to be heard.",
    "conditions": "Language interpretation and grouping can be wrong. Participants need correction and appeal routes, visible waiting status, and alternatives for people without reliable video access. The concierge should not silently discard minority concerns or force cameras on.",
    "sources": [
      "zoomagents",
      "zoomwaiting",
      "dilg"
    ],
    "existing": "New proposal",
    "embodiment": "A Zoom-style meeting app with an AI concierge, grouped inquiry queues, topic-based waiting rooms, and invitations to join the main discussion.",
    "zone": 2,
    "htmlId": "future-political-space",
    "image": "assets/future-2030/f-pol-s.jpg",
    "alt": "Proposed 2030 visualization: A Zoom-style meeting app with an AI concierge, grouped inquiry queues, topic-based waiting rooms, and invitations to join the main discussion.",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
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
    "title": "Community-controlled hybrid performance stage",
    "bridge": "The parlor, barangay pageant, and local gig connect with drag streaming, viewing parties, and online performance discovery.",
    "foundation": "UNESCO identifies digital participation, diversity, artistic freedom, and creator conditions as cultural-policy concerns.",
    "scenario": "By 2030, a local performance venue could maintain a small digital stage connected to its physical audience. AI would assist camera selection, captions, and searchable archives, while performers approve publication, descriptions, and reuse. A remote viewer could discover a local artist and return for a live event. The proposed artifact would preserve the venue’s people and context alongside the distributed performance.",
    "advance": "A community-operated capture and archive service with performer-controlled access, rather than visibility determined only by a platform feed.",
    "values": "Recognition includes creative control and respectful conditions, especially for queer performers. A larger audience should strengthen the community that sustains an artist.",
    "conditions": "Permission, moderation, technical costs, and fair payment require agreements. Digital visibility does not guarantee safety or acceptance.",
    "sources": [
      "culture",
      "speech"
    ],
    "existing": "New proposal",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 2,
    "htmlId": "future-cultural-space",
    "image": "assets/future-2030/f-cul-s.jpg",
    "alt": "Proposed 2030 visualization: Artist-controlled capture pods and publishing token",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  },
  {
    "id": "F-CUL-X",
    "category": "Cultural",
    "aspect": "Technology",
    "title": "Artist-approved AI caption and credit layer",
    "bridge": "OPM and novelty-song revivals connect with P-pop clips, dance covers, and music reaching audiences across languages.",
    "foundation": "Microsoft documents language-dependent speech and translation tools. C2PA provides a foundation for recording available media history.",
    "scenario": "By 2030, an artist-approved layer could attach checked captions, performer and choreographer credits, and permitted-use links to supported performance clips. AI would draft translations and suggest matches to an authorized catalogue. Creators or editors would approve the results and preserve difficult expressions when translation loses their meaning. The artifact would help new audiences find the people and cultural context behind a circulating routine.",
    "advance": "More dependable code-switching support and approved credit records carried across participating services, with explicit correction routes.",
    "values": "Cultural pride involves acknowledging work and meaning, rather than treating a song as a disposable trend. Inclusion expands access while respecting authorship.",
    "conditions": "Music audio, Philippine languages, code-switching, permissions, and catalogue matching need testing. AI does not decide ownership or invent licenses.",
    "sources": [
      "speech",
      "credentials",
      "culture"
    ],
    "existing": "New proposal",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 3,
    "htmlId": "future-cultural-technology",
    "image": "assets/future-2030/f-cul-x.jpg",
    "alt": "Proposed 2030 visualization: Performance-access caption strip and creator authorization token",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
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
    "category": "Others — Aesthetics",
    "aspect": "Time",
    "title": "Wear-again wardrobe diary",
    "bridge": "Y2K revivals and nostalgic silhouettes connect with fast-moving outfit trends and existing AI style visualization.",
    "foundation": "Doppl demonstrates AI outfit visualization. UNEP’s textile roadmap connects consumption choices with wider circular systems.",
    "scenario": "By 2030, a wardrobe diary could suggest outfits from garments a person already owns before recommending a purchase. AI would connect saved looks, repairs, and occasions across time and offer ways to reinterpret an older style. The user could reject reminders or delete records. The artifact would make repeating a garment visible as a continuing personal story rather than a failure to keep up.",
    "advance": "A locally tested styling service organized around existing garments, repair, and repeated use instead of primarily a shopping feed.",
    "values": "Confidence can grow from making something one’s own. Repeating an outfit need not diminish belonging, and affordability should not be a source of humiliation.",
    "conditions": "Photo privacy, inaccurate garment recognition, and actual use affect usefulness. Virtual images do not establish precise fit or environmental savings.",
    "sources": [
      "tryon",
      "textiles"
    ],
    "existing": "New proposal; restores Aesthetics under Others",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 1,
    "htmlId": "future-others-time",
    "image": "assets/future-2030/f-oth-t.jpg",
    "alt": "Proposed 2030 visualization: Garment-memory reader and private wear-and-repair diary",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
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
    "title": "User-controlled AI style mirror",
    "bridge": "Beauty-product imagery and filtered faces connect with generative try-on tools and questions about who sets an acceptable appearance.",
    "foundation": "Google’s Doppl visualizes outfits with AI and explicitly warns that appearance, garment details, and fit can be inaccurate.",
    "scenario": "By 2030, a style mirror could render selected garments on a user-approved likeness while preserving chosen body and complexion settings. AI would explain which details are simulated, let a user compare views, and keep automatic beauty corrections switched off. The proposed artifact would support experimenting with presentation without requiring lighter skin, a different body, or an idealized face to enter the picture.",
    "advance": "More controllable, transparent garment visualization with evaluated local body diversity and clear image-deletion controls.",
    "values": "Dignity includes deciding how to represent oneself. Creativity should enlarge the room for difference instead of turning an algorithm’s preferred appearance into a condition for acceptance.",
    "conditions": "Image privacy, biased rendering, and inaccurate fit remain concerns. A visualization cannot certify comfort, size, or the user’s worth.",
    "sources": [
      "tryon"
    ],
    "existing": "New proposal; restores Aesthetics under Others",
    "embodiment": "Retained for separate functional and plausibility review.",
    "zone": 3,
    "htmlId": "future-others-technology",
    "image": "assets/future-2030/f-oth-x.jpg",
    "alt": "Proposed 2030 visualization: Calibrated style mirror with user-controlled appearance settings",
    "imageCaption": "AI-generated 2030 scenario · Illustrative people, interfaces, records and example amounts."
  }
];

export const ZONE_FUTURES = [
 {zone:1,id:'zone-1-future',next:'zone-2',title:'Time · Six possible futures',intro:'Who gets time to rest, earn, gather, and belong? These six 2030 proposals consider the rhythms of shared life.'},
 {zone:2,id:'zone-2-future',next:'zone-3',title:'Space · Six possible futures',intro:'A place can welcome people or leave them outside. These six 2030 proposals explore access, participation, and the places people make together.'},
 {zone:3,id:'zone-3-future',next:'pause',title:'Technology · Six possible futures',intro:'A more capable service still depends on care, judgment, and trust. These six 2030 proposals ask whose choices technology should support.'}
];
const categoryName=a=>a.category.startsWith('Others')?'Others · Aesthetics':a.category;
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
  <p class="future-bridge">${esc(a.bridge)}</p>
  <p>${esc(a.scenario)}</p>
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
 return '<p>The eighteen 2030 illustrations were generated with OpenAI Imagegen for this museum in November 2026. They portray proposed interfaces and hardware; people, settings, records, and example figures are illustrative. Research references appear with each artifact. The images are not product announcements or documentary photographs.</p>';
}
