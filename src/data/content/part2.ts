import type { Article } from "./types";

export const part2: Record<string, Article> = {
  brightspeed: {
    lead:
      "Brightspeed took over the local networks of CenturyLink in 20 states in 2022 and has been building fiber ever since. For many rural and suburban households, Brightspeed is the first real chance at gig-speed internet. This guide covers Brightspeed Fiber plans, pricing, coverage and what to expect.",
    sections: [
      {
        id: "overview",
        h2: "What is Brightspeed internet?",
        body: [
          "Brightspeed is a newer internet provider with a long history: its network previously belonged to CenturyLink. The company is investing heavily in fiber-to-the-home, replacing copper lines so customers get faster, more reliable service. Where fiber isn't available yet, Brightspeed continues to offer DSL internet.",
          "Brightspeed Fiber plans come with unlimited data, a Wi-Fi router and no annual contract, which keeps things simple for households that just want dependable internet at a fair price.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Brightspeed Fiber plans",
        body: ["Brightspeed offers three fiber tiers. Pricing and availability depend on your address."],
        subs: [
          { h3: "Fiber 200 — $50/mo", body: "Up to 200 Mbps, enough for streaming, browsing and video calls for a small household." },
          { h3: "Fiber 500 — $65/mo", body: "Up to 500 Mbps. The best fit for families who stream, game and work from home at the same time." },
          { h3: "Fiber Gig — $80/mo", body: "Up to 1000 Mbps for heavy streaming, online gaming, remote work and large downloads." },
        ],
      },
      {
        id: "choosing",
        h2: "Choosing the right Brightspeed plan",
        body: [
          "Think about how many people and devices use the internet at once. One or two people who mostly browse and stream are well served by Fiber 200. Families with several streamers, gamers or remote workers should look at Fiber 500. If your household downloads large files, streams 4K on multiple TVs or runs a home office, Fiber Gig removes bottlenecks.",
        ],
      },
      {
        id: "why",
        h2: "Why choose Brightspeed?",
        body: ["Brightspeed's biggest advantage is fiber in places that rarely get it. Fiber keeps its speed at peak times and offers upload speeds that match downloads."],
        bullets: ["100% fiber on fiber plans", "Unlimited data", "No annual contract", "Wi-Fi router included", "Local focus on rural and suburban communities"],
      },
      {
        id: "coverage",
        h2: "Brightspeed coverage",
        body: [
          "Brightspeed serves parts of 20 states, including North Carolina, Ohio, Virginia, Missouri, Alabama and Tennessee, with a focus on small towns and suburbs. The fiber footprint grows every month, so an address that only had DSL last year may qualify for fiber today.",
        ],
      },
      {
        id: "availability",
        h2: "Check Brightspeed availability",
        body: ["Call us with your address and we'll confirm whether Brightspeed Fiber is available, the fastest speed you can get and the current price."],
      },
    ],
  },

  verizon: {
    lead:
      "Verizon Fios is one of the most respected fiber networks in the country, known for consistent speed and long price guarantees. Verizon also offers 5G Home Internet in hundreds of cities. Here's a complete guide to Fios plans, pricing, guarantees and ways to save.",
    sections: [
      {
        id: "overview",
        h2: "Verizon Fios: 100% fiber with price guarantees",
        body: [
          "Fios runs on a 100% fiber-optic network across the Northeast and Mid-Atlantic, including New York, New Jersey, Pennsylvania, Massachusetts, Maryland, Virginia and Washington, D.C. Fiber delivers symmetrical speeds, very low latency and reliable performance during busy evening hours.",
          "Every Fios plan has no annual contract and no data caps, and when you order today your price is locked for three years (500 Mbps) or five years (1 Gig and 2 Gig).",
        ],
      },
      {
        id: "plans-explained",
        h2: "Verizon Fios plans and pricing",
        body: ["Fios keeps its lineup simple with three fiber speeds. Verizon mobile customers who enroll in Mobile + Home get extra perks on every plan."],
        subs: [
          { h3: "Fios 500 Mbps — $65/mo", body: "Up to 500 Mbps with a router included at no additional cost and a 3-year price lock. With Mobile + Home you also get the $99 pro setup fee waived, Cellular Wi-Fi Backup and Priority Care support." },
          { h3: "Fios 1 Gig — $80/mo", body: "Up to 940 Mbps with a router and Whole-Home Wi-Fi included and a 5-year price lock. Mobile + Home customers get up to $10/mo toward a perk such as Netflix and HBO Max (with ads) or the Disney+, Hulu and ESPN+ bundle." },
          { h3: "Fios 2 Gig — $90/mo", body: "Up to 2.3 Gbps with a router, Whole-Home Wi-Fi Plus and Digital Home Secure Plus included, plus a 5-year price lock. The best choice for large households, creators and power users." },
        ],
      },
      {
        id: "5g-home",
        h2: "Verizon 5G Home Internet",
        body: [
          "Where Fios isn't available, Verizon 5G Home Internet delivers broadband over Verizon's 5G network. It sets up in minutes with a plug-in receiver, has unlimited data and no annual contract, and comes with a price guarantee. Verizon mobile customers get the biggest discounts, so call to compare 5G Home pricing at your address.",
        ],
      },
      {
        id: "mobile-savings",
        h2: "Save with Verizon Mobile + Home",
        body: [
          "Combining Fios or 5G Home with an eligible Verizon mobile plan lowers your monthly internet cost and unlocks perks, such as credit toward streaming services. If your household already uses Verizon Wireless, bundling is usually the cheapest way to get fiber.",
        ],
      },
      {
        id: "fios-tv",
        h2: "Fios TV",
        body: [
          "Fios TV brings live channels, on-demand content and a multi-room DVR over the same fiber connection. Many customers pair Fios internet with a streaming service instead. Either way, fiber speeds make 4K streaming on several TVs effortless.",
        ],
        bullets: ["Symmetrical fiber speeds", "3- to 5-year price locks", "No data caps or annual contracts", "Whole-Home Wi-Fi included on gig plans"],
      },
      {
        id: "availability",
        h2: "Is Verizon Fios available at my address?",
        body: ["Fios availability is address-specific even within the same city. Call us and we'll check Fios and 5G Home availability for your address and tell you the best price you qualify for."],
      },
    ],
  },

  frontier: {
    lead:
      "Frontier has transformed from a DSL company into one of the fastest-growing fiber providers in America, now part of Verizon. Frontier Fiber offers symmetrical speeds from 500 Mbps to 2 Gig in 25 states, with Wi-Fi 7, Visa reward cards and long price guarantees. Here's what to know about Frontier plans, equipment and availability.",
    sections: [
      {
        id: "overview",
        h2: "Frontier Fiber: fast, reliable, future-ready",
        body: [
          "Frontier Fiber is a 100% fiber-to-the-home network. Unlike cable, which shares bandwidth across a neighborhood, fiber gives each home a dedicated, high-capacity connection. That means equal upload and download speeds, very low latency and no slowdowns during peak hours.",
          "Every Frontier Fiber plan includes unlimited data, a Wi-Fi router and no annual contract.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Frontier Fiber plans",
        body: ["Frontier offers three fiber tiers, all with Wi-Fi 7 and a Visa Reward Card. Verizon mobile customers pay even less."],
        subs: [
          { h3: "Fiber 500 — $44.99/mo", body: "500/500 Mbps to work, stream and play on several devices. The first month is on Frontier, then $44.99/mo with AutoPay (as low as $29.99/mo with Verizon mobile). Includes a $100 Visa Reward Card, free expert install, a Wi-Fi 7 router and a 4-year price guarantee." },
          { h3: "Fiber 1 Gig — $64.99/mo (recommended)", body: "1000/1000 Mbps for smart homes with dozens of devices. The first month is free, then $64.99/mo with AutoPay (as low as $49.99/mo with Verizon mobile). Includes a $150 Visa Reward Card, free expert install plus Whole-Home Wi-Fi, advanced parental controls and a 5-year price guarantee." },
          { h3: "Fiber 2 Gig — $79.99/mo", body: "2000/2000 Mbps for large smart homes, at $79.99/mo with AutoPay (as low as $64.99/mo with Verizon mobile). Includes a $200 Visa Reward Card, free expert install, free Whole-Home Wi-Fi and a 5-year price guarantee." },
        ],
      },
      {
        id: "fiber-vs-cable",
        h2: "Frontier Fiber vs. cable internet",
        body: ["Here's how Frontier Fiber compares with a typical cable connection:"],
        bullets: [
          "Connection: 100% fiber-to-the-home vs. coaxial cable",
          "Top speeds: up to 2 Gig symmetrical vs. slower cable uploads",
          "Uploads: equal to downloads vs. much slower",
          "Reliability: no peak-time slowdowns vs. neighborhood congestion",
          "Latency: very low, ideal for gaming and video calls",
        ],
      },
      {
        id: "extras",
        h2: "Wi-Fi and add-ons",
        body: [
          "Every Frontier Fiber plan includes a Wi-Fi 7 router, and Fiber 1 Gig and 2 Gig add Whole-Home Wi-Fi. Whole-home Wi-Fi extenders help cover larger homes, and Premium Tech Pro gives you expert help with devices and networking.",
        ],
      },
      {
        id: "installation",
        h2: "Frontier Fiber installation",
        body: [
          "Getting connected is straightforward: confirm availability, choose your plan, schedule a professional installation and start using your new connection the same day. Installation typically takes a few hours.",
        ],
      },
      {
        id: "availability",
        h2: "Frontier Fiber coverage",
        body: ["Frontier serves customers in 25 states, including California, Texas, Florida, Connecticut and Indiana. Call us to confirm whether Frontier Fiber is available at your address and which speed tiers you qualify for."],
      },
    ],
  },
};
