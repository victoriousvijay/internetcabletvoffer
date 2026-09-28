import type { Article } from "./types";

export const part3: Record<string, Article> = {
  optimum: {
    lead:
      "Optimum is the fourth-largest cable provider in the United States, with a growing fiber network and flexible internet, TV and mobile bundles. Optimum serves 21 states, with its largest presence in the New York metro area. Here's a complete look at Optimum cable and fiber plans.",
    sections: [
      {
        id: "overview",
        h2: "Optimum internet: cable and fiber options",
        body: [
          "Optimum runs two networks. Its hybrid fiber-coax cable network reaches most of its service area with speeds up to 1 Gig. Where Optimum Fiber has been built, customers can choose symmetrical plans from 1 Gig all the way to 8 Gig.",
          "All Optimum internet plans include unlimited data, a Smart WiFi 6 router and no annual contract.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Optimum plans and pricing",
        body: ["Optimum's cable plans are among the most affordable ways to get fast internet in its footprint."],
        subs: [
          { h3: "Optimum 300 — $40/mo", body: "Up to 300 Mbps download, a good fit for streaming and browsing." },
          { h3: "Optimum 500 — $50/mo", body: "Up to 500 Mbps download for homes with more users and devices." },
          { h3: "Optimum 1 Gig — $60/mo", body: "Up to 940 Mbps download, the most popular cable plan for gamers and 4K streaming." },
          { h3: "Optimum Fiber — from $70/mo", body: "Fiber 1 Gig ($70/mo), Fiber 2 Gig ($120/mo), Fiber 5 Gig ($180/mo) and Fiber 8 Gig ($280/mo) offer equal upload and download speeds where available." },
        ],
      },
      {
        id: "tv",
        h2: "Optimum TV and bundles",
        body: [
          "Optimum TV packages range from local channels to premium sports and entertainment, with Cloud DVR that records more than a dozen shows at once and the Optimum TV app for watching on any device. Bundle internet, TV and Optimum Mobile for the lowest combined price.",
        ],
      },
      {
        id: "why",
        h2: "Why choose Optimum?",
        body: ["Optimum is a strong all-in-one choice for households that want internet, TV and mobile from one company."],
        bullets: ["Low starting price", "Fiber tiers up to 8 Gig", "Unlimited data", "No annual contract", "Professional installation"],
      },
      {
        id: "availability",
        h2: "Is Optimum available near me?",
        body: ["Optimum serves 21 states, including New York, New Jersey, Connecticut, Texas, Arkansas and more. Call us to check whether you can get Optimum Fiber or cable at your address and today's pricing."],
      },
    ],
  },

  earthlink: {
    lead:
      "EarthLink is one of America's original internet service providers, now offering fiber, wireless and satellite internet nationwide over partner networks. EarthLink is known for transparent pricing, U.S.-based support and a strong privacy stance. Here's how EarthLink plans and pricing work.",
    sections: [
      {
        id: "overview",
        h2: "EarthLink: a trusted name in home internet",
        body: [
          "EarthLink partners with fiber, 5G and satellite networks across the country and handles your billing, service and support. Because it uses several networks, EarthLink is often available in places where you have only one or two other options.",
          "EarthLink Fiber plans include unlimited data and a 12-month price, plus complimentary extras such as email addresses, virus and spam filtering and 24/7 support.",
        ],
      },
      {
        id: "plans-explained",
        h2: "EarthLink Fiber plans and pricing",
        body: ["Prices below are for the first 12 months."],
        subs: [
          { h3: "Fiber 100 — $39.95/mo", body: "Affordable fiber for browsing, email and HD streaming." },
          { h3: "Optimal Value High-Speed (300 Mbps) — $49.95/mo", body: "Great for multiplayer gaming and smooth 4K and Ultra HD streaming." },
          { h3: "Preferred Choice Ultra-Fast (500 Mbps) — $64.95/mo", body: "Ideal for households with many devices, with no speed drops when several people are online." },
          { h3: "Supreme Fiber Maximum Velocity (1 Gig) — $74.95/mo", body: "Top-tier streaming and gaming with a stable, reliable connection." },
          { h3: "Fiber 2 Gig — $129.95/mo, Fiber 5 Gig — call for pricing", body: "Multi-gig tiers for creators and large households, available in select areas." },
        ],
      },
      {
        id: "privacy",
        h2: "Why EarthLink stands out for privacy",
        body: [
          "EarthLink has built its brand on protecting customers' privacy and says it does not track or sell your browsing activity. For households that care about data privacy, that commitment is a meaningful difference from many large ISPs.",
        ],
        bullets: ["Unlimited data on fiber", "U.S.-based customer support", "Free email, virus and spam protection", "Easy account management app"],
      },
      {
        id: "options",
        h2: "EarthLink wireless and satellite options",
        body: [
          "If fiber isn't available at your address, EarthLink may offer 5G home internet, fixed wireless or satellite service through its partner networks, which is especially helpful for rural homes.",
        ],
      },
      {
        id: "availability",
        h2: "Check EarthLink availability",
        body: ["EarthLink is available in all 50 states, but the technology and speeds depend on your address. Call us and we'll find the fastest EarthLink plan you can get."],
      },
    ],
  },

  hughesnet: {
    lead:
      "HughesNet is satellite internet that's available almost anywhere in the United States, including remote rural areas without cable, fiber or 5G. Here's how HughesNet plans, priority data and the Fusion plan work so you can pick the right option.",
    sections: [
      {
        id: "overview",
        h2: "HughesNet satellite internet: coverage everywhere",
        body: [
          "HughesNet connects your home through a small dish that communicates with satellites in orbit. If your home has a clear view of the southern sky, you can very likely get HughesNet, even where no wired provider has built service.",
          "HughesNet plans have no hard data limits and include built-in Wi-Fi. Each plan comes with priority data; if you use it all, you stay connected at reduced speeds.",
        ],
      },
      {
        id: "plans-explained",
        h2: "HughesNet plans and pricing",
        body: ["All plans use a 24-month service agreement."],
        subs: [
          { h3: "Select — $74.99/mo", body: "Up to 50 Mbps with 100 GB of priority data. Best for small families whose internet use is growing." },
          { h3: "Elite — $89.99/mo", body: "Up to 100 Mbps with 200 GB of priority data, perfect for users and couples who want faster satellite internet." },
          { h3: "Fusion — $119.99/mo", body: "Up to 100 Mbps and 200 GB of priority data, combining satellite with wireless technology for noticeably lower latency on video calls and browsing." },
        ],
      },
      {
        id: "priority-data",
        h2: "How HughesNet priority data works",
        body: [
          "Priority data is the amount of high-speed data you get each month. Usage between 2 AM and 8 AM doesn't count against it, so scheduling big downloads and updates overnight stretches your plan much further. If you run out, you can buy data tokens or stay online at reduced speeds.",
        ],
      },
      {
        id: "fusion",
        h2: "Is HughesNet Fusion worth it?",
        body: [
          "Traditional satellite has higher latency because signals travel thousands of miles. Fusion blends satellite with a wireless connection to route latency-sensitive traffic more efficiently, making video calls, browsing and online apps feel more responsive. It's worth it for remote workers in areas where it's available.",
        ],
        bullets: ["Available in all 50 states", "No hard data limits", "Off-peak bonus data", "Professional installation", "HughesNet Voice add-on available"],
      },
      {
        id: "availability",
        h2: "Get HughesNet at your home",
        body: ["Call us to confirm HughesNet plans and pricing at your address, including whether Fusion is available where you live."],
      },
    ],
  },
};
