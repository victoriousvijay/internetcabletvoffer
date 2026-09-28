import type { Article } from "./types";

export const part1: Record<string, Article> = {
  att: {
    lead:
      "AT&T is one of the largest home internet providers in the United States, and its 100% fiber network is the reason many households choose it. Below you'll find a plain-English guide to AT&T Fiber and AT&T Internet Air: what each plan includes, who it's best for, how installation works and how to get the best price at your address.",
    sections: [
      {
        id: "overview",
        h2: "AT&T Internet: fiber speed without the fine print",
        body: [
          "AT&T Fiber delivers internet over fiber-optic lines that run all the way to your home. Because light travels through glass with almost no signal loss, fiber keeps its speed at any time of day and over long distances. That's why AT&T can offer upload speeds that match download speeds on every fiber plan, something traditional cable and DSL connections can't do.",
          "Every AT&T Fiber plan includes unlimited data, a Wi-Fi gateway and no annual contract. If fiber hasn't reached your street yet, AT&T Internet Air brings wireless home internet over AT&T's 5G and 4G LTE network, so most households have an AT&T option either way.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Which AT&T internet plan is right for you?",
        body: ["AT&T keeps its lineup simple. Prices below are for new customers with eligible AT&T wireless service, AutoPay and paperless billing, plus taxes and fees; discounts start within three bills. Every plan includes AT&T Internet Backup for unlimited wireless customers and an optional All-Fi Pro add-on for $25/mo."],
        subs: [
          { h3: "AT&T Internet 300 — the everyday plan", body: "Just $20/mo with eligible AT&T wireless service, AutoPay and paperless billing (regular $60/mo, or $35/mo without a wireless plan). Game, stream and video chat with confidence and support all your smart home devices, with uploads far faster than a typical cable plan." },
          { h3: "AT&T Internet 500 — for busy homes", body: "$35/mo with eligible AT&T wireless (regular $75/mo). Level up your gaming with low lag and connect and control multiple smart devices with ease. It's the sweet spot when several people stream and work online at the same time." },
          { h3: "AT&T Internet 1000 (1 GIG) — best value", body: "$45/mo with eligible AT&T wireless (regular $90/mo), a $45 monthly savings. It's the speed to succeed for work and pro-level gaming and unleashes the full potential of your smart home ecosystem." },
          { h3: "AT&T Internet Air — $55/mo wireless option", body: "No fiber at your address yet? AT&T Internet Air brings plug-and-play home Wi-Fi over AT&T's wireless network for $55/mo with equipment included, no data caps and no annual contract." },
        ],
      },
      {
        id: "internet-air",
        h2: "What is AT&T Internet Air?",
        body: [
          "AT&T Internet Air is a plug-and-play wireless home internet service for addresses where AT&T Fiber isn't available. A small receiver picks up AT&T's cellular signal and turns it into home Wi-Fi. Most customers see average download speeds between 75 and 225 Mbps, which is plenty for streaming, browsing and video calls.",
          "Internet Air costs $55/mo with equipment included, has no data caps and no annual contract, and sets up in minutes using the Smart Home Manager app. During rare periods of heavy network congestion, speeds may be temporarily reduced to keep the network fair for everyone.",
        ],
      },
      {
        id: "fiber-vs-cable",
        h2: "AT&T Fiber vs. cable internet",
        body: ["The biggest difference is the upload speed and consistency. Cable networks share bandwidth across a neighborhood and usually offer uploads that are a small fraction of the download speed. Fiber doesn't slow down during peak hours and uploads as fast as it downloads."],
        bullets: [
          "Game with low latency and fewer lag spikes",
          "Crystal-clear video calls even when others are streaming",
          "Upload large files and cloud backups in seconds",
          "Stream 4K and 8K content on multiple TVs without buffering",
        ],
      },
      {
        id: "bundles",
        h2: "AT&T bundles and savings",
        body: [
          "The easiest way to save is to pair AT&T Fiber with an eligible AT&T wireless plan, which can cut your monthly internet bill and adds up to hundreds of dollars a year. AT&T also runs limited-time offers for new customers, such as reward cards and discounted gig plans, so ask about current promotions when you call.",
          "For home-based businesses, AT&T offers business fiber bundles with managed internet backup, security features and a business-grade Wi-Fi gateway, giving remote workers and entrepreneurs dependable connectivity at home.",
        ],
      },
      {
        id: "wifi-security",
        h2: "Wi-Fi, backup and security features",
        body: [
          "AT&T includes a Wi-Fi gateway with every fiber plan, and you can add All-Fi Pro for $25/mo for Wi-Fi 7 technology, equipment upgrades and extended whole-home coverage. AT&T Internet Backup can automatically switch your home connection to wireless data if your line ever goes down.",
          "AT&T ActiveArmor adds network-level protection that helps block threats before they reach your devices, and AT&T HomeTech Protection offers device repair and tech support for a monthly fee.",
        ],
      },
      {
        id: "installation",
        h2: "How AT&T Fiber installation works",
        body: [
          "A professional installation usually takes about four to six hours. A technician runs the fiber line to your home, installs an optical network terminal and sets up your Wi-Fi gateway in the best spot for coverage. Internet Air customers skip the appointment and install the receiver themselves.",
          "Moving? AT&T can transfer service to your new address and, in many areas, will cover early termination fees when you switch from another provider.",
        ],
      },
      {
        id: "availability",
        h2: "Is AT&T Fiber available at my address?",
        body: [
          "AT&T Fiber now reaches more than 37 million homes and businesses and keeps expanding every year, but availability changes from street to street. The fastest way to know which plans you qualify for, whether that's Fiber or Internet Air, is to call and give us your address. We'll confirm the best available speed and today's pricing in a few minutes.",
        ],
      },
    ],
  },

  spectrum: {
    lead:
      "Spectrum is the largest cable internet provider in the country, reaching homes in 45 states. Its plans are easy to understand: no data caps, no annual contracts and a year of Unlimited Mobile included. Here's everything to know before you order Spectrum Internet, TV or a bundle.",
    sections: [
      {
        id: "overview",
        h2: "Spectrum Internet at a glance",
        body: [
          "Spectrum delivers internet over a fiber-powered network that connects to homes with coaxial cable. That design lets Spectrum offer fast download speeds almost everywhere it operates, from 100 Mbps up to 1 Gig, with multi-gig speeds in select markets.",
          "Every plan includes unlimited data, a modem and no annual contract. New customers currently get Spectrum Mobile free for a year, which makes Spectrum one of the best-value choices for families that also need phone service.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Spectrum Internet plans explained",
        body: ["Spectrum's three core plans cover almost every household. Promotional prices apply for the first 12 months."],
        subs: [
          { h3: "Internet 100 — 100 Mbps for $30/mo", body: "A reliable, budget-friendly plan for browsing, email, video calls and streaming on a few devices. Add Advanced WiFi for $10/mo." },
          { h3: "Internet 500 — 500 Mbps for $40/mo", body: "The plan most families should start with. 500 Mbps comfortably powers work, school, 4K streaming and gaming across many devices at once. Add Advanced WiFi for $10/mo for mesh coverage." },
          { h3: "Internet 1 Gig — 1000 Mbps for $60/mo", body: "Spectrum's fastest widely available plan, built for serious gaming, large households and working from home. Advanced WiFi is included at no extra charge." },
        ],
      },
      {
        id: "mobile",
        h2: "Spectrum Mobile: save on your phone bill",
        body: [
          "Spectrum Mobile runs on a nationwide 5G network and is only available to Spectrum Internet customers. Unlimited lines start at $30/mo per line, with Unlimited Plus and Unlimited Plus Premium tiers adding more hotspot data and phone credits. Spectrum may even pay off your remaining phone balance when you switch, up to $2,500 per account.",
        ],
      },
      {
        id: "tv",
        h2: "Spectrum TV and streaming bundles",
        body: [
          "Spectrum TV Select and Spectrum Stream TV packages bring local channels, live sports, news and entertainment together, and many packages include popular streaming apps at no extra cost. Spectrum TV Lite is a low-cost option for households that mainly want local channels.",
          "Bundling internet, TV and mobile on one bill is the easiest way to lower your total cost. Our team can price a double-play or triple-play bundle for your address in minutes.",
        ],
      },
      {
        id: "cable-vs-fiber",
        h2: "Is Spectrum cable as good as fiber?",
        body: [
          "For downloads, Spectrum matches fiber on most everyday tasks: streaming, browsing and gaming all run smoothly on 500 Mbps or 1 Gig. The main trade-off is upload speed, which is lower on cable. If you regularly upload large videos or run a home business, compare Spectrum's upload speeds with fiber options at your address.",
        ],
        bullets: ["No data caps on any plan", "No annual contract", "Free modem, WiFi router available", "Available in 45 states"],
      },
      {
        id: "switching",
        h2: "Switching to Spectrum",
        body: [
          "Spectrum offers a contract buyout that can help cover early termination fees when you leave another provider. Installation can be professional or self-install, and most self-install kits get you online the same day.",
        ],
      },
      {
        id: "availability",
        h2: "Check Spectrum availability",
        body: [
          "Spectrum is available to tens of millions of homes, but speeds and bundle pricing can differ by neighborhood. Call us with your address to confirm the fastest Spectrum plan available and today's promotional rate.",
        ],
      },
    ],
  },

  kinetic: {
    lead:
      "Kinetic is the consumer internet brand of Windstream, serving small towns, suburbs and rural communities in 18 states. Kinetic is replacing older copper lines with fiber, bringing gig-speed internet to places that used to rely on DSL or satellite. Here's how Kinetic plans, pricing and price guarantees work.",
    sections: [
      {
        id: "overview",
        h2: "Kinetic internet: fiber for smaller communities",
        body: [
          "Many rural and suburban towns have been left with slow internet because big cable companies don't build there. Kinetic focuses on exactly those communities. Where fiber is live, customers get symmetrical upload and download speeds up to 2 Gig. Where the upgrade is still underway, Kinetic Internet provides the fastest speed available at the address.",
          "Kinetic Fiber plans come with unlimited data, Wi-Fi equipment and prepaid card offers on gig tiers, and AT&T Wireless customers save $20/mo.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Kinetic plans and pricing",
        body: ["Kinetic Fiber comes in three simple tiers. AT&T Wireless customers save $20/mo on their Kinetic internet bill. Terms apply."],
        subs: [
          { h3: "Fiber 300 Mbps — $34.99/mo", body: "Good for most day-to-day internet use, including streaming video. Work, stream and play on multiple devices, and download a 2.5-hour 4K movie in about eight minutes." },
          { h3: "Fiber 1 Gig — $39.99/mo", body: "Boosted speed and capacity for working from home and gaming, with faster uploads than cable and plenty of bandwidth for mid-sized households. New customers get a $100 prepaid Mastercard." },
          { h3: "Fiber 2 Gig — $59.99/mo (best value)", body: "Ultra-fast speeds for large smart homes and immersive gaming, the latest Wi-Fi 7 technology, a $200 prepaid Mastercard and a 2-year price guarantee." },
        ],
      },
      {
        id: "price-guarantee",
        h2: "Kinetic prepaid card offers and price guarantee",
        body: [
          "Kinetic rewards faster plans: Fiber 1 Gig comes with a $100 prepaid Mastercard and Fiber 2 Gig with a $200 prepaid Mastercard. Fiber 2 Gig also includes a 2-year price guarantee, so your rate stays the same while you enjoy multi-gig speed and Wi-Fi 7. Ask about current offer terms when you call.",
        ],
      },
      {
        id: "fiber-upgrade",
        h2: "Upgrading from DSL to Kinetic Fiber",
        body: [
          "If you currently have Kinetic DSL, fiber may already be available on your street. Moving to fiber can multiply your speed many times over for a similar monthly price. Call us and we'll check whether your address has been upgraded.",
        ],
        bullets: ["Symmetrical upload and download speeds", "Low latency for gaming and video calls", "No data caps", "Professional installation"],
      },
      {
        id: "bundles",
        h2: "Kinetic internet and phone bundles",
        body: [
          "Kinetic offers unlimited nationwide home phone service that can be bundled with internet, a popular choice for rural households and small businesses that still rely on a landline. Add Kinetic Secure Shield for online security across your devices.",
        ],
      },
      {
        id: "availability",
        h2: "Is Kinetic available in my area?",
        body: [
          "Kinetic serves parts of 18 states, including Georgia, Kentucky, Ohio, Pennsylvania, Texas and more. Because fiber availability changes as the network expands, the best way to know your options is to call with your address.",
        ],
      },
    ],
  },
};
