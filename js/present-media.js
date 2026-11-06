import { esc } from './ui.js';

export const PRESENT_IMAGES = {
  "bini": {
    "id": "present-bini",
    "type": "image",
    "src": "https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/ncstpr%20abs%20music/082324%20-%20awit%20awards%202024/bini%20record%20of%20the%20year.jpg",
    "title": "BINI and Pantropiko · 2024",
    "alt": "BINI members in pastel outfits beneath a beach umbrella.",
    "caption": "Pantropiko promotional image in ABS-CBN’s August 2024 Awit Awards release. Connects the choreography comparison with a named P-pop example.",
    "credit": "BINI / ABS-CBN Music",
    "source": "https://corporate.abs-cbn.com/newsroom/news-releases/2024/8/23/abs-cbn-music-31-nominations-awit-awards?lang=en"
  },
  "netflix": {
    "id": "present-netflix",
    "type": "image",
    "src": "https://images.ctfassets.net/4cd45et68cgf/2IB4TZHFAOjYxVL0XzpMfl/e38f1241f9ea20d725245cb81009c94e/RCC_Main_KA_for_blog_post.jpg?w=2000",
    "title": "Filipino streaming drama · 2023",
    "alt": "Promotional artwork featuring the three leads of Replacing Chef Chico.",
    "caption": "Official key art for Replacing Chef Chico, announced in November 2023. An example of Filipino streaming drama, rather than an image of an autoplay control.",
    "credit": "Netflix / Replacing Chef Chico",
    "source": "https://about.netflix.com/en/news/a-recipe-for-romance-netflix-unveils-stunning-key-art-for-replacing-chef"
  },
  "grab": {
    "id": "present-grab",
    "type": "image",
    "src": "https://assets.grab.com/wp-content/uploads/sites/12/2024/01/25133349/PHOTO-RELEASE-GrabFood-Saver-Delivery.jpeg",
    "title": "App-based delivery · 2024",
    "alt": "GrabFood promotional photograph from its Saver Delivery announcement.",
    "caption": "Image from Grab Philippines’ January 2024 delivery announcement. Platform-supplied promotional material; it does not establish individual riders’ working hours or conditions.",
    "credit": "Grab Philippines",
    "source": "https://www.grab.com/ph/press/others/grab-outlines-new-affordable-solutions-so-you-can-enjoy-more-for-less/"
  },
  "phone": {
    "id": "present-phone",
    "type": "image",
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Hand_holding_Smartphone.jpg/500px-Hand_holding_Smartphone.jpg",
    "title": "A handheld smartphone · 2021",
    "alt": "A hand holding a touchscreen smartphone.",
    "caption": "Photographed April 21, 2021. A device reference, not evidence of connectivity quality or a photograph identified as Philippine use. Image unchanged.",
    "credit": "Mictlancihuatl / Wikimedia Commons",
    "source": "https://commons.wikimedia.org/wiki/File:Hand_holding_Smartphone.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "reels": {
    "id": "present-reels",
    "type": "image",
    "src": "https://about.fb.com/wp-content/uploads/2023/05/Facebook-Reels-Updates_Header.jpg",
    "title": "Recommended video feeds · 2023",
    "alt": "Meta’s interface illustration of Facebook Reels personalization controls.",
    "caption": "Meta’s May 2023 product illustration shows Reels personalization. It documents the platform’s interface, not an individual Filipino user’s feed.",
    "credit": "Meta Newsroom",
    "source": "https://about.fb.com/news/2023/05/discover-and-personalize-facebook-reels/"
  },
  "messenger": {
    "id": "present-messenger",
    "type": "image",
    "src": "https://about.fb.com/wp-content/uploads/2024/04/Messenger-Media-Improvements_Header.jpg",
    "title": "Shared photos and group chats · 2024",
    "alt": "Meta’s illustration of a shared photo album in Messenger.",
    "caption": "Official April 2024 product illustration of shared media in Messenger. The conversation shown is demonstration material, not a private conversation collected for the museum.",
    "credit": "Meta / Messenger",
    "source": "https://about.fb.com/news/2024/04/hd-photos-shared-albums-and-more-on-messenger/"
  },
  "selling": {
    "id": "present-selling",
    "type": "image",
    "src": "https://p16-ttark-useast8.tiktokcdn-us.com/tos-useast8-i-zr23xo8qx2-tx2/a36456f7bc767fcb17a0f72514ee4c5e.png~tplv-zr23xo8qx2-default%3A0%3A0%3Aq75.image",
    "title": "TikTok Shop live selling · 2025",
    "alt": "Lauren Young and Papanan presenting products in TikTok Shop livestreams.",
    "caption": "Creator sessions reproduced in TikTok’s January 2026 account of live commerce in 2025. Platform promotional material, identified as such.",
    "credit": "TikTok Shop Philippines",
    "source": "https://newsroom.tiktok.com/tiktok-shop-drives-200-increase-in-sales-for-local-sellers-in-2025?lang=en-PH"
  },
  "music-hub": {
    "id": "present-music-hub",
    "type": "image",
    "src": "https://storage.googleapis.com/pr-newsroom-wp/1/2024/11/02-Refreshed-Pinoy-Music-Hub-1024x683.jpg",
    "title": "Pinoy music playlists · 2024",
    "alt": "Spotify’s promotional image for its refreshed Pinoy Music hub.",
    "caption": "Spotify’s November 2024 Pinoy Music hub image illustrates playlist-based discovery. This is a platform illustration rather than a listener’s personal library.",
    "credit": "Spotify Newsroom",
    "source": "https://newsroom.spotify.com/2024-11-01/philippines-10-year-anniversary-ben-and-ben/"
  },
  "music-live": {
    "id": "present-music-live",
    "type": "image",
    "src": "https://storage.googleapis.com/pr-newsroom-wp/1/2024/11/05-Spotify-Lounge-Illest-Morena-1024x683.jpg",
    "title": "OPM on stage · Spotify Lounge, 2024",
    "alt": "Illest Morena performing at Spotify Lounge: Philippines Edition.",
    "caption": "A live-performance photograph in Spotify’s November 2024 Philippine anniversary report. Streaming promotion and physical performance appear together in this event.",
    "credit": "Spotify Newsroom / Spotify Lounge",
    "source": "https://newsroom.spotify.com/2024-11-01/philippines-10-year-anniversary-ben-and-ben/"
  },
  "wallet": {
    "id": "present-wallet",
    "type": "image",
    "src": "https://images.gmanews.tv/webpics/2024/01/640_GCash_PR_trust_rating_photo_2_2024_01_10_14_16_09.jpg",
    "title": "Digital-wallet checkout · 2024",
    "alt": "A shopper presents a phone at a checkout displaying GCash signage.",
    "caption": "GCash promotional photograph reproduced in a January 2024 GMA corporate bulletin. Illustrates a retail payment channel, not an overseas remittance transaction.",
    "credit": "GCash, via GMA News corporate bulletin",
    "source": "https://www.gmanetwork.com/news/cbb/content/893677/gcash-among-highly-recommended-philippine-brands-in-2023-with-92-net-promoter-score/story/"
  },
  "gathering": {
    "id": "present-gathering",
    "type": "image",
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/UniTeam_2022_proclamation_rally_4.jpg/960px-UniTeam_2022_proclamation_rally_4.jpg",
    "title": "Political gathering · February 2022",
    "alt": "Supporters at the UniTeam proclamation rally at the Philippine Arena.",
    "caption": "Photographed February 8, 2022, in Bulacan. Shows a particular physical campaign gathering; the photograph alone does not establish how attendees were mobilized online. Image unchanged.",
    "credit": "Avito Dalan / Philippine News Agency, via Wikimedia Commons",
    "source": "https://commons.wikimedia.org/wiki/File:UniTeam_2022_proclamation_rally_4.jpg",
    "license": "Public domain in the Philippines",
    "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-PhilippinesGov"
  },
  "gaming": {
    "id": "present-gaming",
    "type": "image",
    "src": "https://i.ytimg.com/vi/oz2WBRrQWzE/hqdefault.jpg",
    "title": "Mobile Legends livestream · 2025",
    "alt": "Thumbnail of an official MPL Philippines tournament broadcast.",
    "caption": "Official MPL Philippines broadcast thumbnail from September 28, 2025. Promotional broadcast artwork, not a photograph of friends playing together.",
    "credit": "MPL Philippines / YouTube",
    "source": "https://www.youtube.com/watch?v=oz2WBRrQWzE"
  },
  "drag": {
    "id": "present-drag",
    "type": "image",
    "src": "assets/sources/eva-pageants.jpg",
    "title": "Drag Race Philippines · 2022",
    "alt": "Drag performers talk together in a brightly colored Drag Race Philippines setting.",
    "caption": "A 2022 Drag Race Philippines image accompanying Eva Le Queen’s discussion of why pageants matter to the LGBT community. This is the exhibit’s 2020s counterpart, not a photograph of a 2000s barangay pageant.",
    "credit": "Drag Race Philippines, via ABS-CBN News",
    "source": "https://www.abs-cbn.com/entertainment/09/13/22/eva-le-queen-explains-why-pageants-matter-to-lgbt-community"
  },
  "ai-playlist": {
    "id": "present-ai-playlist",
    "type": "image",
    "src": "https://storage.googleapis.com/pr-newsroom-wp/1/2025/04/AI-Playlist-Newsroom-Header-1920x733.jpg",
    "title": "An idea becomes a playlist · 2025",
    "alt": "Spotify promotional artwork for its AI Playlist feature.",
    "caption": "Artwork accompanying Spotify’s April 2025 expansion of AI Playlist in beta, including the Philippines. Connects the prepared MP3 library with prompt-based music discovery.",
    "credit": "Spotify Newsroom",
    "source": "https://newsroom.spotify.com/2025-04-24/spotify-expands-ai-playlist-in-beta-to-premium-listeners-in-40-new-markets/",
    "width": 1920,
    "height": 733
  },
  "ai-playlist-steps": {
    "id": "present-ai-playlist-steps",
    "type": "image",
    "src": "https://storage.googleapis.com/pr-newsroom-wp/1/2025/04/Spotify-AI-Playlist-Infographic.png",
    "title": "Choosing and refining songs · 2025",
    "alt": "Spotify’s illustrated sequence for creating an AI Playlist from a written idea.",
    "caption": "Official interface demonstration: describe an idea, receive a selection, and refine it. This documents a particular Premium beta feature, rather than every kind of personalized playlist.",
    "credit": "Spotify Newsroom",
    "source": "https://newsroom.spotify.com/2025-04-24/spotify-expands-ai-playlist-in-beta-to-premium-listeners-in-40-new-markets/",
    "width": 3240,
    "height": 1620
  },
  "phone-trial": {
    "id": "present-phone-trial",
    "type": "image",
    "src": "https://www.globe.com.ph/sites/default/files/2025-08/newsroom-globe-corporate-5g-advanced-in-article-02.jpg",
    "title": "Testing mobile access in BGC · 2025",
    "alt": "A smartphone running a mobile-network speed test at the BGC Amphitheater.",
    "caption": "Globe’s August 2025 photograph of a 5G-Advanced pilot trial in Taguig. A documented test setting; its result does not describe every subscriber’s connection.",
    "credit": "Globe Telecom",
    "source": "https://www.globe.com.ph/about-us/newsroom/corporate/first-5g-advanced-live-pilot-trial-ph",
    "width": 860,
    "height": 1147
  },
  "network-team": {
    "id": "present-network-team",
    "type": "image",
    "src": "https://www.globe.com.ph/sites/default/files/2025-08/newsroom-globe-corporate-5g-advanced-in-article-03.jpg",
    "title": "The people behind a connection · 2025",
    "alt": "Globe’s network team during a 5G-Advanced field trial at Bonifacio High Street.",
    "caption": "A field-trial team in Globe’s August 2025 report. The image makes the infrastructure and work behind mobile access visible alongside the handset.",
    "credit": "Globe Telecom",
    "source": "https://www.globe.com.ph/about-us/newsroom/corporate/first-5g-advanced-live-pilot-trial-ph",
    "width": 860,
    "height": 645
  },
  "secondhand": {
    "id": "present-secondhand",
    "type": "image",
    "src": "https://i0.wp.com/press.carousell.com/wp-content/uploads/2024/11/ph_infographics_yearenddatastory.png?resize=810%2C580&ssl=1",
    "title": "Secondhand finds move online · 2024",
    "alt": "Carousell’s Philippine Year-in-Secondhand graphic for 2024.",
    "caption": "Carousell’s Philippine infographic links secondhand fashion and renewed interest in 2000s digital cameras. Its figures describe platform activity from January through October 2024.",
    "credit": "Carousell Press",
    "source": "https://press.carousell.com/2024/11/26/ukay-ukay-goes-digital-on-carousell-filipinos-lead-the-region-in-secondhand-fashion-transactions-gen-z-users-brings-back-retro-2000s-digital-cameras/",
    "width": 810,
    "height": 580
  },
  "home-work": {
    "id": "present-home-work",
    "type": "image",
    "src": "https://od2-image-api.abs-cbn.com/prod/editorImage/171540673913320240510-louella-paranal-MT-7.jpg",
    "title": "A workspace inside the home · 2024",
    "alt": "A woman works at a laptop in a room lined with books.",
    "caption": "Image accompanying ABS-CBN’s May 2024 feature on virtual-assistant work. The domestic setting supports the story about earning, care, and the boundaries of a working day.",
    "credit": "ABS-CBN News, Benise Balaoing feature",
    "source": "https://www.abs-cbn.com/lifestyle/2024/5/11/mompreneur-helps-mothers-get-virtual-assistant-jobs-1336",
    "width": 950,
    "height": 632
  },
  "market-qr": {
    "id": "present-market-qr",
    "type": "image",
    "src": "https://media.philstar.com/photos/2024/01/19/3_2024-01-19_20-55-48.jpg",
    "title": "A QR payment at the palengke · 2024",
    "alt": "Quezon City Mayor Joy Belmonte makes a QR-code purchase at a public-market eatery.",
    "caption": "Project 4 Public Market during the Paleng-QR Ph launch in January 2024. An everyday setting for the payment comparison: the code sits beside the food and the seller.",
    "credit": "Michael Varcas / The Philippine Star",
    "source": "https://www.philstar.com/nation/2024/01/20/2327093/paleng-qr-philippines-launched-quezon-city-public-market",
    "width": 800,
    "height": 533
  },
  "ev-charging": {
    "id": "present-ev-charging",
    "type": "image",
    "src": "https://haspcms-ac-mobility.s3.ap-southeast-1.amazonaws.com/media/955/01K9YDZAJ664KT33TFVV6TNZF5.webp?q=100&w=1080",
    "title": "Charging infrastructure in Makati · 2025",
    "alt": "ACMobility electric-vehicle charging bays at the Corinthians Carpark in Makati.",
    "caption": "ACMobility’s May 2025 station photograph illustrates the infrastructure needed around electric mobility. It is a dated local example alongside the national 2026 sales data.",
    "credit": "ACMobility",
    "source": "https://www.acmobility.ph/news/acmobility-launches-ph-fastest-ev-chargers",
    "width": 1636,
    "height": 1091
  },
  "beauty-filter": {
    "id": "present-beauty-filter",
    "type": "image",
    "src": "https://www.thenationalnews.com/resizer/v2/INKJPUF3G5GVDKZPHGLYGCXEWY.jpg?auth=0759b9c796ef6d179767fdbe9efb90f00dc472e78bd8f8d62c98847cd7df3320&smart=true&width=812&height=456",
    "title": "The face and its filtered image · 2023",
    "alt": "Joanna Kenny demonstrates a before-and-after view of TikTok’s Bold Glamour effect.",
    "caption": "The National’s June 2023 example of Bold Glamour, credited to joannajkenny on TikTok. Shows an image transformation; the separate research discussion explains what studies can establish about appearance expectations.",
    "credit": "joannajkenny / TikTok, via The National",
    "source": "https://www.thenationalnews.com/lifestyle/wellbeing/2023/06/25/beauty-filters-are-now-powered-by-ai-should-we-be-scared/",
    "width": 812,
    "height": 456
  },
  "youth-activism": {
    "id": "present-youth-activism",
    "type": "image",
    "src": "https://toda.org/wp-content/uploads/2026/08/tr-314-cover.jpg",
    "title": "Popular culture at a protest · 2025",
    "alt": "A One Piece flag at an anti-corruption protest in Manila.",
    "caption": "Manila, 2025, reproduced in Toda Peace Institute’s 2026 report. A visible example of a pop-culture symbol entering a physical gathering, connecting the SMS-to-mobilization storyline with newer forms of expression.",
    "credit": "MJX Studio / Shutterstock, via Toda Peace Institute",
    "source": "https://toda.org/publications/policy-briefs-and-reports/report-314-full-text/",
    "width": 1280,
    "height": 640
  },
  "gaming-team": {
    "id": "present-gaming-team",
    "type": "image",
    "src": "https://media.philstar.com/photos/2025/02/14/untitled-design_2025-02-14_09-17-14.jpg",
    "title": "Mobile Legends players together · 2025",
    "alt": "Six professional Mobile Legends players pose in team jerseys at the MPL Philippines Season 15 press conference.",
    "caption": "MPL Philippines’ Season 15 press-conference photograph, published in February 2025. A professional gaming setting that coexists with remote play; it is separate from the studies of everyday players.",
    "credit": "MPL Philippines, via Michelle Lojo / Philstar.com",
    "source": "https://www.philstar.com/sports/2025/02/14/2421479/new-mpl-ph-era-begins-season-15",
    "width": 800,
    "height": 600
  },
  "sb19": {
    "id": "present-sb19-gento",
    "type": "image",
    "src": "https://i.ytimg.com/vi/VZZA_38RUBI/hqdefault.jpg",
    "title": "SB19 · GENTO, 2023",
    "linkLabel": "watch GENTO on YouTube",
    "alt": "Preview of SB19 performing GENTO in their official music video.",
    "caption": "Preview image from SB19’s official GENTO music video, released in May 2023. Open the credited YouTube source to watch the video. SB19’s June 2023 interview connects the song with the sustained work behind the group’s journey.",
    "credit": "SB19 Official / 1Z Entertainment",
    "source": "https://www.youtube.com/watch?v=VZZA_38RUBI",
    "width": 480,
    "height": 360
  },
  "rochelle-gento": {
    "id": "present-rochelle-gento",
    "type": "image",
    "src": "https://aphrodite.gmanetwork.com/entertainment/articles/900_675_Main_Image07_0714_-20230714140359.jpg",
    "title": "Rochelle Pangilinan joins GENTO · 2023",
    "alt": "Rochelle Pangilinan pictured in GMA’s report about her GENTO dance cover.",
    "caption": "Image accompanying Faye Almazan’s July 14, 2023 report. The report documents Rochelle’s GENTO cover on Instagram and TikTok, giving this exhibit a direct connection between a SexBomb performer and SB19’s newer dance craze.",
    "credit": "rochellepangilinan / Instagram, via GMA Entertainment",
    "source": "https://www.gmanetwork.com/entertainment/showbiznews/rochelle-pangilinan-takes-on-sb19s-gento-dance-challenge/103539/",
    "width": 900,
    "height": 675
  }
};
export const PRESENT_GALLERIES = {
  "ao-01": [
    "sb19",
    "rochelle-gento"
  ],
  "ao-02": [
    "netflix"
  ],
  "ao-03": [
    "netflix"
  ],
  "ao-04": [
    "netflix"
  ],
  "ao-05": [
    "reels"
  ],
  "ao-06": [
    "home-work",
    "grab"
  ],
  "ao-07": [
    "phone-trial",
    "network-team"
  ],
  "ao-08": [
    "reels"
  ],
  "ao-09": [
    "gaming-team",
    "gaming"
  ],
  "ao-10": [
    "selling",
    "market-qr"
  ],
  "ao-11": [
    "drag"
  ],
  "ao-12": [
    "music-live",
    "ai-playlist-steps"
  ],
  "ao-13": [
    "messenger",
    "network-team"
  ],
  "ao-14": [
    "market-qr",
    "wallet"
  ],
  "ao-15": [
    "youth-activism"
  ],
  "ao-16": [
    "network-team",
    "messenger"
  ],
  "ao-17": [
    "ai-playlist",
    "ai-playlist-steps",
    "music-hub"
  ],
  "ao-18": [
    "market-qr",
    "wallet"
  ]
};
export const PRESENT_MEDIA = {
  "ao-01": "sb19",
  "ao-02": "netflix",
  "ao-03": "netflix",
  "ao-04": "netflix",
  "ao-05": "reels",
  "ao-06": "home-work",
  "ao-07": "phone-trial",
  "ao-08": "reels",
  "ao-09": "gaming-team",
  "ao-10": "selling",
  "ao-11": "drag",
  "ao-12": "music-live",
  "ao-13": "messenger",
  "ao-14": "market-qr",
  "ao-15": "youth-activism",
  "ao-16": "network-team",
  "ao-17": "ai-playlist",
  "ao-18": "market-qr"
};
export const COMPARISON_MEDIA = {
  "comparison-01": [
    "reels"
  ],
  "comparison-02": [
    "messenger",
    "phone-trial"
  ],
  "comparison-03": [
    "gaming-team",
    "gaming"
  ],
  "comparison-04": [
    "home-work",
    "grab"
  ],
  "comparison-05": [
    "selling",
    "market-qr"
  ],
  "comparison-06": [
    "market-qr",
    "wallet"
  ],
  "comparison-07": [
    "youth-activism"
  ],
  "comparison-08": [
    "reels"
  ],
  "comparison-09": [
    "reels"
  ],
  "comparison-10": [
    "sb19",
    "rochelle-gento"
  ],
  "comparison-11": [
    "netflix"
  ],
  "comparison-12": [
    "drag"
  ],
  "comparison-13": [
    "bini",
    "music-live"
  ],
  "comparison-16": [
    "secondhand"
  ],
  "comparison-17": [
    "ev-charging"
  ],
  "comparison-18": [
    "music-live",
    "ai-playlist-steps"
  ],
  "comparison-19": [
    "secondhand"
  ],
  "comparison-20": [
    "secondhand"
  ],
  "comparison-21": [
    "beauty-filter"
  ]
};

export function presentFigureHTML(item) {
  return `<figure class="present-figure"><img src="${esc(item.src)}" alt="${esc(item.alt)}"${item.width ? ` width="${item.width}" height="${item.height}"` : ''} loading="lazy" decoding="async" referrerpolicy="no-referrer"><figcaption><strong>${esc(item.title)}</strong><p>${esc(item.caption)}</p><a href="${esc(item.source)}" target="_blank" rel="noopener noreferrer">${esc(item.credit)} · ${esc(item.linkLabel || 'source')} ↗</a>${item.license ? ` · <a href="${esc(item.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(item.license)}</a>` : ''}</figcaption></figure>`;
}
export function presentMediaHTML(id) {
  return (PRESENT_GALLERIES[id] || []).map(key => presentFigureHTML(PRESENT_IMAGES[key])).join('');
}
export function comparisonMediaHTML(id, era = '') {
  if (era === '2000s') return '';
  return (COMPARISON_MEDIA[id] || []).map(key => presentFigureHTML(PRESENT_IMAGES[key])).join('');
}
