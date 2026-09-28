import type { Article } from "./types";

export const part3: Record<string, Article> = {
  optimum: {
    lead:
      "Optimum is the fourth-largest cable provider in the United States, with a growing fiber network and flexible internet, TV and mobile bundles. Optimum serves 21 states, with its largest presence in the New York metro area. Here's a complete look at Optimum Fiber plans, pricing and price locks.",
    sections: [
      {
        id: "overview",
        h2: "Optimum internet: cable and fiber options",
        body: [
          "Optimum has been expanding its fiber-to-the-home network alongside its long-standing hybrid fiber-coax network. Optimum Fiber plans deliver fast, reliable speeds with much faster uploads than 5G home internet, from 300 Mbps up to 1 Gig.",
          "Optimum Fiber plans include unlimited data, a WiFi router and no annual contract, and you can lock in your price for up to three years.",
        ],
      },
      {
        id: "plans-explained",
        h2: "Optimum plans and pricing",
        body: ["Prices below include an eligible $10 AutoPay and paperless bill discount, plus taxes and fees."],
        subs: [
          { h3: "300 Mbps Fiber Internet — $35/mo", body: "Supports essential online activities like streaming, browsing and video calls, with uploads about 5x faster than 5G home internet and up to a 3-year price lock." },
          { h3: "500 Mbps Fiber Internet — $45/mo", body: "Great for everyday use in busier homes, with uploads about 9x faster than 5G home internet and up to a 3-year price lock." },
          { h3: "1 Gig Fiber Internet — $55/mo", body: "More speed for more screens, gaming and working from home. Uploads are about 17x faster than 5G home internet, and the plan includes up to a 3-year price lock plus up to a $50 gift of your choice." },
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
        bullets: ["Fiber from $35/mo", "Up to a 3-year price lock", "Up to a $50 gift on 1 Gig", "Unlimited data", "No annual contract"],
      },
      {
        id: "availability",
        h2: "Is Optimum available near me?",
        body: ["Optimum serves 21 states, including New York, New Jersey, Connecticut, Texas, Arkansas and more. Call us to check whether Optimum Fiber is available at your address and today's pricing."],
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
      "HughesNet is satellite internet that's available almost anywhere in the United States, including remote rural areas without cable, fiber or 5G. Here's how HughesNet plans, priority data and the Lite, Select and Elite plans work so you can pick the right option.",
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
        body: ["HughesNet offers three plans, each with a 12-month promotional price. Lite uses a 12-month commitment; Select and Elite use a 24-month commitment."],
        subs: [
          { h3: "Lite — $39.99/mo (reg. $49.99)", body: "Speeds up to 25 Mbps with 100 GB of priority data, unlimited standard data and built-in Wi-Fi. A budget-friendly plan for customers with basic connectivity needs and light use." },
          { h3: "Select — $49.99/mo (reg. $74.99)", body: "Speeds up to 50 Mbps with 100 GB of priority data and advanced built-in Wi-Fi, with Whole Home Wi-Fi available. The most popular plan for typical households that browse, shop, stream HD video and join video calls." },
          { h3: "Elite — $64.99/mo (reg. $89.99)", body: "Speeds up to 100 Mbps with 200 GB of priority data, advanced built-in Wi-Fi and Whole Home Wi-Fi available. Built for larger households with more devices and higher data needs." },
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
        id: "which-plan",
        h2: "Which HughesNet plan should you choose?",
        body: [
          "Choose Lite if you mainly check email, browse and use social media on one or two devices. Select is the right fit for most families: 50 Mbps handles HD streaming, music, video-conferencing and strategy or role-playing games. Pick Elite if more people are online at once or you use more data, since it doubles your priority data to 200 GB and doubles the top speed to 100 Mbps.",
        ],
        bullets: ["Available in all 50 states", "No hard data limits", "Off-peak bonus data", "Professional installation", "HughesNet Voice add-on available"],
      },
      {
        id: "availability",
        h2: "Get HughesNet at your home",
        body: ["Call us to confirm HughesNet plans and pricing at your address, including today's promotional pricing."],
      },
    ],
  },
};
