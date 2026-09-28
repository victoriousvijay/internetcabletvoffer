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
          "Every Fios plan has no annual contract and no data caps. Prices include the Auto Pay and paper-free billing discount, and each plan is protected by a three- or five-year price guarantee.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Verizon Fios plans and pricing",
        body: ["Fios offers five speed tiers so you only pay for what you need."],
        subs: [
          { h3: "Fios 300 Mbps — $40/mo", body: "Great for streaming, browsing and remote work in smaller households, with a 3-year price guarantee." },
          { h3: "Fios 500 Mbps — $75/mo", body: "More bandwidth for families with many devices, also with a 3-year price guarantee." },
          { h3: "Fios 1 Gig — $90/mo", body: "Up to 940 Mbps download and 750–880 Mbps upload, a 5-year price guarantee and a Wi-Fi 7 router. The most popular choice for gamers and busy homes." },
          { h3: "Fios 2 Gig — $100/mo", body: "Average wired speeds of 1.5–2.3 Gbps in both directions for creators and large households, with a 5-year guarantee." },
          { h3: "Fios 5 Gig — $110/mo", body: "Average wired speeds of 4.5–5.3 Gbps, Verizon's fastest home internet, backed by a 5-year price guarantee." },
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
        bullets: ["Symmetrical fiber speeds", "3- to 5-year price guarantees", "No data caps or annual contracts", "Wi-Fi 7 router on gig plans"],
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
      "Frontier has transformed from a DSL company into one of the fastest-growing fiber providers in America, now part of Verizon. Frontier Fiber offers symmetrical speeds from 1 Gig to 5 Gig in 25 states. Here's what to know about Frontier plans, equipment and availability.",
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
        body: ["Frontier focuses on gig and multi-gig fiber."],
        subs: [
          { h3: "Fiber 1 Gig — $44.99/mo", body: "Up to 1000/1000 Mbps symmetrical speeds. Ideal for families, gamers, remote workers and smart homes." },
          { h3: "Fiber 2 Gig — $69.99/mo", body: "Up to 2000/2000 Mbps for large households, content creators and anyone who uploads big files." },
          { h3: "Fiber 5 Gig — call for pricing", body: "Frontier's fastest tier, paired with advanced Wi-Fi 7 equipment, available in select areas." },
        ],
      },
      {
        id: "fiber-vs-cable",
        h2: "Frontier Fiber vs. cable internet",
        body: ["Here's how Frontier Fiber compares with a typical cable connection:"],
        bullets: [
          "Connection: 100% fiber-to-the-home vs. coaxial cable",
          "Top speeds: multi-gig vs. typically 1–2 Gig",
          "Uploads: equal to downloads vs. much slower",
          "Reliability: no peak-time slowdowns vs. neighborhood congestion",
          "Latency: very low, ideal for gaming and video calls",
        ],
      },
      {
        id: "extras",
        h2: "Wi-Fi and add-ons",
        body: [
          "Frontier includes a Wi-Fi router with every plan, and higher tiers include premium Wi-Fi 7 equipment. Whole-home Wi-Fi extenders help cover larger homes, and Premium Tech Pro gives you expert help with devices and networking.",
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
