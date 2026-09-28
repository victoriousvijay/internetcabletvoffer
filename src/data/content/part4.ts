import type { ArticleSection } from "./types";

/**
 * Extra long-form sections appended to each provider guide (inserted before the final
 * "availability" section). Keeps each guide comprehensive for SEO. All copy is original.
 */
export const extraSections: Record<string, ArticleSection[]> = {
  att: [
    {
      id: "gaming-streaming",
      h2: "Is AT&T Fiber good for gaming and streaming?",
      body: [
        "Yes. Online gaming depends more on latency and stability than on raw download speed, and fiber excels at both. AT&T Fiber typically delivers low, consistent ping times because the signal travels as light over a dedicated line instead of competing for shared neighborhood bandwidth. That means fewer lag spikes in fast shooters and smoother voice chat.",
        "For streaming, even the 300 Mbps plan can run several 4K streams at once. Households that stream on three or more TVs while someone games or works online will appreciate the extra headroom of the 500 Mbps or 1 GIG plans. Symmetrical uploads also make AT&T Fiber a favorite for live-streamers who broadcast to Twitch or YouTube.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best AT&T internet deal",
      body: ["A few simple steps can lower your AT&T bill and add extra value:"],
      bullets: [
        "Enroll in AutoPay and paperless billing to get the advertised price",
        "Bundle with an eligible AT&T wireless plan for monthly internet savings",
        "Ask about new-customer offers such as reward cards and gig-plan discounts",
        "Choose the 1 GIG plan if you're between tiers — the savings make it close in price to 500 Mbps",
        "If you're switching, ask whether AT&T will cover your current provider's early termination fee",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose AT&T internet?",
      body: [
        "AT&T Fiber is ideal for remote workers who spend the day on video calls, students who upload assignments and join virtual classes, gamers who need low latency, and families with a house full of smart devices. If fiber isn't available yet, AT&T Internet Air is a great fit for renters, small households and anyone who wants a quick, no-installation setup with no data caps.",
      ],
    },
    {
      id: "support",
      h2: "AT&T customer service and account management",
      body: [
        "AT&T customers can manage their account, pay bills, run speed tests and troubleshoot Wi-Fi through the Smart Home Manager app. Professional technicians handle fiber installation, and 24/7 support is available if anything goes wrong. When you order through our team, we'll walk you through plan choices and scheduling so there are no surprises on installation day.",
      ],
    },
  ],
  spectrum: [
    {
      id: "gaming-streaming",
      h2: "Is Spectrum good for streaming and gaming?",
      body: [
        "Spectrum is a strong choice for streaming. With no data caps, you can watch as much 4K content as you like without worrying about overage fees. Internet Premier at 500 Mbps comfortably supports several simultaneous 4K streams, and Internet Gig handles even the busiest households.",
        "For gaming, Spectrum's download speeds are more than enough, and latency is generally good on its cable network. Competitive gamers and streamers who upload a lot of video may prefer Internet Gig for its higher upload speed.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best Spectrum deal",
      body: ["Spectrum's best savings come from bundling and choosing the right tier:"],
      bullets: [
        "Take advantage of Unlimited Mobile included for a year with new internet service",
        "Bundle Spectrum TV or Spectrum Mobile lines to lower your combined bill",
        "Choose Internet Gig if you want Advanced WiFi included at no extra cost",
        "Use Spectrum's contract buyout when leaving another provider",
        "Remember promotional pricing lasts 12 months; call us before it ends to review options",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose Spectrum?",
      body: [
        "Spectrum fits families that want simple, unlimited internet with the option to bundle TV and mobile on one bill. It's also a smart pick for renters and people who move often, because there are no annual contracts and service is widely available across 41 states.",
      ],
    },
    {
      id: "equipment",
      h2: "Spectrum equipment and WiFi",
      body: [
        "A modem is included with every Spectrum Internet plan. Spectrum Advanced WiFi adds a mesh router system with app-based controls and security features. It's $10/mo on Advantage and Premier and included with Internet Gig and many bundles. Self-install kits make it easy to get online the same day.",
      ],
    },
  ],
  kinetic: [
    {
      id: "gaming-streaming",
      h2: "Is Kinetic Fiber good for streaming and gaming?",
      body: [
        "Kinetic Fiber is excellent for both. Symmetrical fiber speeds and low latency keep online games responsive, and there are no data caps to limit how much you stream. Fiber 300 handles 4K on a couple of TVs, while Fiber Gig and 2 Gig are built for households with many streamers, gamers and remote workers.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best Kinetic deal",
      bullets: [
        "Sign up for AutoPay and paperless billing to get the advertised price",
        "Choose Fiber Gig or 2 Gig for the longest price guarantees (24 and 36 months)",
        "Bundle unlimited home phone service if you still need a landline",
        "Ask about whole-home Wi-Fi extenders if your home is large",
      ],
      body: ["Kinetic's pricing rewards longer commitments to a plan, not a contract:"],
    },
    {
      id: "who-for",
      h2: "Who should choose Kinetic?",
      body: [
        "Kinetic is ideal for households in small towns, suburbs and rural areas where cable and fiber options have historically been limited. If you've been stuck with slow DSL or satellite, Kinetic Fiber can be a dramatic upgrade at a comparable monthly price.",
      ],
    },
    {
      id: "equipment",
      h2: "Kinetic equipment and installation",
      body: [
        "Most Kinetic fiber plans include a Wi-Fi gateway, and whole-home Wi-Fi extenders are available for larger homes. A professional technician installs fiber service and makes sure your Wi-Fi covers the rooms you use most. One-time installation charges may apply depending on your plan and promotion.",
      ],
    },
  ],
  brightspeed: [
    {
      id: "gaming-streaming",
      h2: "Is Brightspeed good for streaming and gaming?",
      body: [
        "Brightspeed Fiber provides the low latency and consistent speeds that gamers and streamers need, with unlimited data so there's no worry about overages. Fiber 500 is a great all-round choice for families, while Fiber Gig suits heavy gamers and households with multiple 4K TVs.",
        "Customers on Brightspeed DSL will see slower speeds, which work well for browsing and HD streaming on a few devices but can struggle with 4K and competitive gaming. That's why upgrading to fiber is worth checking as soon as it reaches your street.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best Brightspeed deal",
      body: ["Keep these tips in mind when ordering Brightspeed:"],
      bullets: [
        "Confirm whether your address has fiber — it's a much better value than DSL",
        "Pick the tier that matches your household instead of paying for unused speed",
        "Ask about current promotions and installation offers",
        "Place your router centrally for the best Wi-Fi coverage",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose Brightspeed?",
      body: [
        "Brightspeed is a great fit for rural and suburban households that want reliable fiber without a long-term contract. It's especially attractive in towns where the main alternatives are satellite or slower DSL.",
      ],
    },
    {
      id: "support",
      h2: "Brightspeed customer support",
      body: [
        "Brightspeed offers online account management, support by phone and chat, and optional premium tech support for setup and troubleshooting. When you order through our team, we'll confirm fiber availability and help schedule installation.",
      ],
    },
  ],
  verizon: [
    {
      id: "gaming-streaming",
      h2: "Is Verizon Fios good for gaming and streaming?",
      body: [
        "Fios is one of the best home internet services for gaming, thanks to fiber's low latency and consistent performance even during peak evening hours. For streaming, every Fios tier handles 4K, and the gig and multi-gig plans easily support large households with many screens.",
        "Content creators benefit from Fios's near-symmetrical upload speeds, which make uploading videos, streaming live and backing up to the cloud fast and reliable.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best Verizon Fios deal",
      body: ["Maximize your savings with these steps:"],
      bullets: [
        "Use Auto Pay and paper-free billing to get the advertised Fios price",
        "Bundle with an eligible Verizon mobile plan for extra monthly savings",
        "Choose 1 Gig or higher to lock in a 5-year price guarantee",
        "Ask about perks such as discounted streaming subscriptions",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose Verizon?",
      body: [
        "Verizon Fios is ideal for households in its Northeast and Mid-Atlantic footprint that want premium fiber performance with long-term price stability. Existing Verizon Wireless customers get the most value from bundling. Where Fios isn't available, Verizon 5G Home is a strong wireless alternative.",
      ],
    },
    {
      id: "equipment",
      h2: "Verizon Fios equipment",
      body: [
        "Every Fios plan includes a router, and gig and multi-gig plans come with a Wi-Fi 7 router for faster in-home speeds. Extenders are available for larger homes, and professional installation ensures your fiber connection is set up correctly from day one.",
      ],
    },
  ],
  frontier: [
    {
      id: "gaming-streaming",
      h2: "Is Frontier Fiber good for gaming and streaming?",
      body: [
        "Frontier Fiber is built for it. With 1 Gig as the entry plan, every Frontier Fiber customer has enough bandwidth for multiple 4K streams, online gaming and video calls at the same time. Symmetrical speeds and low latency keep gameplay responsive and live streams sharp.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best Frontier deal",
      body: ["Frontier offers straightforward pricing, but these tips help:"],
      bullets: [
        "Start with Fiber 1 Gig — it's the best value for most homes",
        "Step up to 2 Gig if you upload large files or have many heavy users",
        "Ask about Wi-Fi 7 equipment on higher tiers",
        "Check current online-exclusive pricing when you call",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose Frontier?",
      body: [
        "Frontier Fiber is a great choice for anyone who wants top-tier fiber speed at a competitive price, from families and gamers to remote professionals. Customers still on Frontier's older copper service should check whether fiber is available, since the upgrade is dramatic.",
      ],
    },
    {
      id: "support",
      h2: "Frontier customer support",
      body: [
        "Frontier offers online account management, a mobile app and 24/7 support. Premium Tech Pro adds hands-on help with devices, Wi-Fi and smart-home setup. Our team can help you choose the right plan and schedule installation.",
      ],
    },
  ],
  optimum: [
    {
      id: "gaming-streaming",
      h2: "Is Optimum good for streaming and gaming?",
      body: [
        "Optimum's cable plans deliver plenty of download speed for streaming and gaming, and there are no data caps. Optimum 1 Gig is the most popular choice for gamers and multi-TV households. Where available, Optimum Fiber adds symmetrical upload speeds and lower latency, which is ideal for competitive gaming and live-streaming.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best Optimum deal",
      body: ["Save more on Optimum with these tips:"],
      bullets: [
        "Bundle internet with Optimum TV and Optimum Mobile",
        "Check whether Optimum Fiber is available — it adds faster uploads",
        "Choose the tier that fits your household to avoid paying for unused speed",
        "Ask about current promotions and installation offers",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose Optimum?",
      body: [
        "Optimum is a strong fit for households in its footprint that want an affordable, no-contract internet plan with the option to add TV and mobile. Power users with access to Optimum Fiber can choose some of the fastest residential speeds available anywhere, up to 8 Gig.",
      ],
    },
    {
      id: "equipment",
      h2: "Optimum equipment and installation",
      body: [
        "Every Optimum internet plan includes a Smart WiFi 6 router that supports up to 20 wireless devices. Optimum offers professional installation to make sure your equipment and service work correctly from day one, and Wi-Fi extenders are available for larger homes.",
      ],
    },
  ],
  earthlink: [
    {
      id: "gaming-streaming",
      h2: "Is EarthLink good for streaming and gaming?",
      body: [
        "EarthLink Fiber is well suited to streaming and gaming, with unlimited data and fiber's low latency. The 300 Mbps plan handles multiplayer gaming and 4K streaming, while 500 Mbps and 1 Gig suit larger households with more simultaneous users.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best EarthLink deal",
      body: ["Make the most of your EarthLink plan:"],
      bullets: [
        "Choose the fiber tier that matches your household size",
        "Note that promotional pricing lasts 12 months",
        "Ask about router rental versus using your own compatible router",
        "Add security and tech-support extras only if you need them",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose EarthLink?",
      body: [
        "EarthLink is a great choice for privacy-conscious households and for anyone who wants a trusted ISP with U.S.-based support. Because it operates across multiple networks, it's also worth checking if your address has limited provider options.",
      ],
    },
    {
      id: "support",
      h2: "EarthLink customer support",
      body: [
        "EarthLink provides 24/7 support online, by chat and by phone, plus an app for managing your account on the go. Complimentary services include multiple email addresses, virus and spam filtering and a customizable homepage.",
      ],
    },
  ],
  hughesnet: [
    {
      id: "streaming",
      h2: "Can you stream and game on HughesNet?",
      body: [
        "You can stream video on HughesNet, and the no-hard-limit data policy means you won't be cut off. To make your priority data last, set streaming apps to standard definition during the day and schedule large downloads during the 2 AM–8 AM bonus window.",
        "Casual and turn-based games work fine, but satellite latency makes fast-paced competitive shooters difficult. HughesNet Fusion reduces latency and is the best HughesNet option for gamers and video calls.",
      ],
    },
    {
      id: "best-deal",
      h2: "How to get the best HughesNet deal",
      body: ["Get more from your HughesNet plan:"],
      bullets: [
        "Pick Elite over Select if you stream often — it doubles priority data",
        "Choose Fusion if you work from home or make lots of video calls",
        "Use off-peak hours for software updates and big downloads",
        "Ask about equipment lease versus purchase options",
      ],
    },
    {
      id: "who-for",
      h2: "Who should choose HughesNet?",
      body: [
        "HughesNet is the right choice for rural homes, farms and cabins where cable, fiber and 5G aren't available. It provides dependable coverage almost anywhere in the U.S. with a clear view of the southern sky.",
      ],
    },
    {
      id: "equipment",
      h2: "HughesNet equipment and installation",
      body: [
        "HughesNet service includes a satellite dish and a Wi-Fi modem, installed by a professional technician who aims the dish for the best signal. You can lease or purchase the equipment, and HughesNet Voice adds home phone service for $29.95/mo.",
      ],
    },
  ],
};
