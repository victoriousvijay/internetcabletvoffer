/**
 * Current plans and pricing per provider (reviewed September 2026).
 * Sources: provider/partner offer pages and broadbandsearch.net plan tables. Prices are the advertised
 * promotional rates (usually with AutoPay / paperless billing, before taxes and fees).
 * `price` left undefined = "Call for pricing".
 */
export type Plan = {
  /** Tier name shown in small caps, e.g. "Internet Premier". */
  tier: string;
  /** Big headline, e.g. "500 Mbps Internet". */
  headline: string;
  /** One-line description of who the plan suits. */
  desc: string;
  download: string;
  upload: string;
  price?: number;
  /** Regular price shown struck through. */
  wasPrice?: number;
  /** Price terms under the price, e.g. "for 1 year", "w/ AutoPay, plus tax". */
  term: string;
  badge?: string;
  popular?: boolean;
  icon: "shield" | "flame" | "bolt" | "rocket" | "wifi" | "satellite" | "home";
  features: string[];
};

export type PlanOverrides = {
  startingPrice: number;
  maxSpeed: string;
  maxSpeedMbps: number;
  blurb?: string;
  tagline?: string;
  quickAnswer: string;
  priceFaq: string;
  plans: Plan[];
};

export const planData: Record<string, PlanOverrides> = {
  att: {
    startingPrice: 35,
    maxSpeed: "1 Gbps",
    maxSpeedMbps: 1000,
    blurb: "Fast fiber, zero contracts",
    tagline: "100% fiber with no annual contract",
    quickAnswer:
      "AT&T Fiber plans are Internet 300 at $35/mo, Internet 500 at $50/mo and Internet 1000 (up to 1 GIG) at $65/mo for new customers after discounts with eligible AutoPay and paperless billing, plus taxes and fees (regular $60, $75 and $90/mo). AT&T Internet Air is $55/mo where fiber isn't available.",
    priceFaq:
      "After discounts with eligible AutoPay and paperless billing, AT&T Internet 300 is $35/mo, Internet 500 is $50/mo and Internet 1000 is $65/mo, plus taxes and fees (regular prices $60, $75 and $90/mo) for new customers in select markets. AT&T Internet Air is $55/mo with equipment included.",
    plans: [
      { tier: "AT&T Internet 300", headline: "300Mbps speed", desc: "Game, stream and video chat with confidence.", download: "300 Mbps", upload: "300 Mbps", price: 35, wasPrice: 60, term: "/mo. plus taxes & fees after discounts w/ elig. AutoPay & paperless bill", icon: "shield", features: ["Game, stream and video chat with confidence", "Support your smart home devices", "AT&T Internet Backup included for unlimited wireless customers"] },
      { tier: "AT&T Internet 500", headline: "500Mbps speed", desc: "Level up your gaming with low lag.", download: "500 Mbps", upload: "500 Mbps", price: 50, wasPrice: 75, term: "/mo. plus taxes & fees after discounts w/ elig. AutoPay & paperless bill", popular: true, icon: "flame", features: ["Level up your gaming with low lag", "Connect and control multiple smart devices with ease", "AT&T Internet Backup included for unlimited wireless customers"] },
      { tier: "AT&T Internet 1000", headline: "Up to 1 GIG speed", desc: "The speed to succeed for work and pro-level gaming.", download: "Up to 1 Gbps", upload: "Up to 1 Gbps", price: 65, wasPrice: 90, term: "/mo. plus taxes & fees after discounts w/ elig. AutoPay & paperless bill", badge: "Save $25/mo", icon: "bolt", features: ["The speed to succeed for work and pro-level gaming", "Unleash the full potential of your smart home ecosystem", "AT&T Internet Backup included for unlimited wireless customers"] },
      { tier: "AT&T Internet Air", headline: "AT&T Internet Air", desc: "Plug-and-play wireless home internet where fiber isn't available.", download: "75–225 Mbps avg.", upload: "Varies", price: 55, term: "/mo., equipment included", icon: "wifi", features: ["Self-install in minutes", "No data caps", "No annual contract", "No price increase after 12 months"] },
    ],
  },
  spectrum: {
    startingPrice: 30,
    maxSpeed: "1 Gbps",
    maxSpeedMbps: 1000,
    quickAnswer:
      "Spectrum Internet plans are Internet 100 at $30/mo, Internet 500 at $40/mo and Internet 1 Gig at $60/mo, each for the first year. Every plan includes a free modem, no data caps, no contracts and Spectrum Mobile free for a year, and Internet 1 Gig includes Advanced WiFi. Spectrum also bundles cable TV and mobile in 45 states.",
    priceFaq:
      "Spectrum Internet 100 is $30/mo, Internet 500 is $40/mo and Internet 1 Gig is $60/mo, each for the first year. Advanced WiFi is $10/mo on the 100 and 500 plans and included with 1 Gig. Standard rates apply after the promotional period.",
    plans: [
      { tier: "Internet 100", headline: "100 Mbps Internet", desc: "Browsing, email, video calls and streaming.", download: "100 Mbps", upload: "Up to 10 Mbps", price: 30, term: "/mo for 1 year", icon: "shield", features: ["Add Advanced WiFi for $10/mo", "Spectrum Mobile free for a year", "Free modem", "No data caps, no contracts"] },
      { tier: "Internet 500", headline: "500 Mbps Internet", desc: "Multiple streams, work from home and gaming, all at once.", download: "500 Mbps", upload: "Up to 20 Mbps", price: 40, term: "/mo for 1 year", badge: "Online exclusive price", popular: true, icon: "flame", features: ["Add Advanced WiFi for $10/mo", "Spectrum Mobile free for a year", "Free modem", "No data caps, no contracts"] },
      { tier: "Internet 1 Gig", headline: "1000 Mbps Internet", desc: "4K on every screen, lag-free gaming, smart home devices and more.", download: "1000 Mbps", upload: "Up to 35 Mbps", price: 60, term: "/mo for 1 year", badge: "Online exclusive price", icon: "bolt", features: ["Advanced WiFi included", "Spectrum Mobile free for a year", "Free modem", "No data caps, no contracts"] },
    ],
  },
  kinetic: {
    startingPrice: 34.99,
    maxSpeed: "2 Gbps",
    maxSpeedMbps: 2000,
    tagline: "Fiber from $34.99 with prepaid card offers",
    quickAnswer:
      "Kinetic Fiber plans are Fiber 300 at $34.99/mo, Fiber 1 Gig at $39.99/mo with a $100 prepaid Mastercard, and Fiber 2 Gig at $59.99/mo with a $200 prepaid Mastercard, Wi-Fi 7 and a 2-year price guarantee. Fiber plans include unlimited data, and AT&T Wireless customers save $20/mo on their internet bill.",
    priceFaq:
      "Kinetic Fiber 300 is $34.99/mo, Fiber 1 Gig is $39.99/mo (plus a $100 prepaid Mastercard) and Fiber 2 Gig is $59.99/mo (plus a $200 prepaid Mastercard and a 2-year price guarantee). AT&T Wireless customers save $20/mo on their Kinetic internet bill. Terms apply.",
    plans: [
      { tier: "Fiber 300 Mbps", headline: "300 Mbps Fiber", desc: "Good for most day-to-day internet uses, including streaming video.", download: "300 Mbps", upload: "300 Mbps", price: 34.99, term: "per month, terms apply", icon: "shield", features: ["Work, stream and play on multiple devices", "Download a 2.5-hour 4K movie in about 8 minutes", "AT&T Wireless customers save $20/mo on internet", "Unlimited data"] },
      { tier: "Fiber 1 Gig", headline: "1 Gig Fiber", desc: "Boosted speed and capacity for working from home and gaming.", download: "1 Gbps", upload: "1 Gbps", price: 39.99, term: "per month, terms apply", badge: "$100 prepaid Mastercard", icon: "bolt", features: ["$100 prepaid Mastercard", "Plenty of bandwidth for mid-sized households", "Faster upload speeds than cable", "AT&T Wireless customers save $20/mo on internet"] },
      { tier: "Fiber 2 Gig", headline: "2 Gig Fiber", desc: "Ultra-fast speeds for large smart homes.", download: "2 Gbps", upload: "2 Gbps", price: 59.99, term: "per month, 2-year price guarantee", badge: "Best value", popular: true, icon: "rocket", features: ["$200 prepaid Mastercard", "Ideal for immersive gaming", "Supports dozens of devices streaming at once", "The most advanced Wi-Fi 7 technology", "AT&T Wireless customers save $20/mo on internet"] },
    ],
  },
  brightspeed: {
    startingPrice: 50,
    maxSpeed: "1 Gbps",
    maxSpeedMbps: 1000,
    quickAnswer:
      "Brightspeed Fiber plans start at $50/mo for Fiber 200, $65/mo for Fiber 500 and $80/mo for Fiber Gig, with unlimited data and no annual contract. Brightspeed serves rural and suburban communities in 20 states and offers DSL where fiber hasn't arrived yet.",
    priceFaq:
      "Brightspeed Fiber 200 starts at $50/mo, Fiber 500 at $65/mo and Fiber Gig (1000 Mbps) at $80/mo. Pricing and speeds depend on your address, so call to confirm what's available at your home.",
    plans: [
      { tier: "Brightspeed Fiber 200", headline: "200 Mbps Fiber", desc: "Solid everyday speed for browsing, streaming and video calls.", download: "Up to 200 Mbps", upload: "Up to 200 Mbps", price: 50, term: "/mo", icon: "shield", features: ["100% fiber connection", "Unlimited data", "Wi-Fi router included", "No annual contract"] },
      { tier: "Brightspeed Fiber 500", headline: "500 Mbps Fiber", desc: "Room for the whole family to stream, game and work at once.", download: "Up to 500 Mbps", upload: "Up to 500 Mbps", price: 65, term: "/mo", popular: true, icon: "flame", features: ["Symmetrical upload & download", "Unlimited data", "Wi-Fi router included", "No annual contract"] },
      { tier: "Brightspeed Fiber Gig", headline: "1 Gig Fiber", desc: "Gig-speed fiber for heavy streaming, gaming and large downloads.", download: "Up to 1000 Mbps", upload: "Up to 1000 Mbps", price: 80, term: "/mo", icon: "bolt", features: ["Brightspeed's fastest fiber tier", "Unlimited data", "Wi-Fi router included", "No annual contract"] },
    ],
  },
  verizon: {
    startingPrice: 65,
    maxSpeed: "2 Gbps",
    maxSpeedMbps: 2000,
    tagline: "Fios fiber with up to a 5-year price lock",
    quickAnswer:
      "Verizon Fios plans are 500 Mbps for $65/mo (3-year price lock), 1 Gig for $80/mo and 2 Gig for $90/mo (5-year price lock). Gig plans include a router plus Whole-Home Wi-Fi at no extra cost, and Mobile + Home customers get extra perks such as $10/mo toward Netflix, Disney+ and more, a waived $99 setup fee and Cellular Wi-Fi Backup.",
    priceFaq:
      "Verizon Fios 500 Mbps is $65/mo with a 3-year price lock, Fios 1 Gig is $80/mo and Fios 2 Gig is $90/mo, both with a 5-year price lock. Verizon mobile customers who enroll in Mobile + Home get extra perks and a waived $99 pro setup fee.",
    plans: [
      { tier: "Fios 500 Mbps", headline: "500 Mbps Fiber", desc: "Fast, dependable fiber for streaming, school and work-from-home.", download: "Up to 500 Mbps", upload: "Up to 500 Mbps", price: 65, term: "/mo, price locked for 3 years", icon: "shield", features: ["Router included at no additional cost", "Mobile + Home: $99 pro setup fee waived", "Cellular Wi-Fi Backup with Mobile + Home", "Priority Care customer support with Mobile + Home"] },
      { tier: "Fios 1 Gig", headline: "1 Gig Fiber", desc: "Up to 940 Mbps for gaming, 4K streaming and busy homes.", download: "Up to 940 Mbps", upload: "Up to 880 Mbps", price: 80, term: "/mo, price locked for 5 years", badge: "5-year price lock", popular: true, icon: "bolt", features: ["Router and Whole-Home Wi-Fi included", "Mobile + Home: $10/mo toward a perk (Netflix, Disney+ & more)", "$99 pro setup fee waived with Mobile + Home", "Cellular Wi-Fi Backup & Priority Care"] },
      { tier: "Fios 2 Gig", headline: "2 Gig Fiber", desc: "Up to 2.3 Gbps for large households, creators and power users.", download: "Up to 2.3 Gbps", upload: "Up to 2.3 Gbps", price: 90, term: "/mo, price locked for 5 years", badge: "5-year price lock", icon: "rocket", features: ["Router and Whole-Home Wi-Fi Plus included", "Digital Home Secure Plus", "Mobile + Home: $10/mo toward a perk", "$99 setup fee waived, Cellular Wi-Fi Backup & Priority Care"] },
    ],
  },
  frontier: {
    startingPrice: 44.99,
    maxSpeed: "2 Gbps",
    maxSpeedMbps: 2000,
    blurb: "Pure fiber with Visa reward cards",
    tagline: "100% fiber with Wi-Fi 7 and up to a 5-year price guarantee",
    quickAnswer:
      "Frontier Fiber plans are Fiber 500 at $44.99/mo, Fiber 1 Gig at $64.99/mo and Fiber 2 Gig at $79.99/mo with AutoPay, and Fiber 500 and 1 Gig include the first month free. Each plan includes a Wi-Fi 7 router, a Visa Reward Card ($100 to $200) and a 4- or 5-year price guarantee, with even lower prices for Verizon mobile customers.",
    priceFaq:
      "Frontier Fiber 500 is $44.99/mo and Fiber 1 Gig is $64.99/mo with AutoPay after one free month; Fiber 2 Gig is $79.99/mo with AutoPay. With Verizon mobile, prices drop to as low as $29.99, $49.99 and $64.99/mo. Plans come with a $100, $150 or $200 Visa Reward Card.",
    plans: [
      { tier: "Fiber 500", headline: "500/500 Mbps", desc: "Work, stream and play on several devices.", download: "500 Mbps", upload: "500 Mbps", price: 44.99, wasPrice: 54.99, term: "/mo w/ AutoPay after 1 month; as low as $29.99 w/ Verizon mobile", badge: "1 month of fiber on us", icon: "shield", features: ["Claim a $100 Visa Reward Card", "Free expert install", "Wi-Fi 7 router included", "4-year price guarantee"] },
      { tier: "Fiber 1 Gig", headline: "1000/1000 Mbps", desc: "For smart homes with dozens of devices.", download: "1000 Mbps", upload: "1000 Mbps", price: 64.99, wasPrice: 74.99, term: "/mo w/ AutoPay after 1 month; as low as $49.99 w/ Verizon mobile", badge: "Recommended", popular: true, icon: "bolt", features: ["Claim a $150 Visa Reward Card", "1 month of fiber on us", "Free expert install + Whole-Home Wi-Fi", "Wi-Fi 7 & advanced parental controls", "5-year price guarantee"] },
      { tier: "Fiber 2 Gig", headline: "2000/2000 Mbps", desc: "Ultra-fast speeds for large smart homes.", download: "2000 Mbps", upload: "2000 Mbps", price: 79.99, wasPrice: 89.99, term: "/mo w/ AutoPay; as low as $64.99 w/ Verizon mobile", badge: "Special gift, on us", icon: "rocket", features: ["Claim a $200 Visa Reward Card", "Free expert install", "Free Whole-Home Wi-Fi", "Reliable Wi-Fi 7 coverage", "5-year price guarantee"] },
    ],
  },
  optimum: {
    startingPrice: 35,
    maxSpeed: "1 Gbps",
    maxSpeedMbps: 1000,
    tagline: "Fiber internet from $35 with up to a 3-year price lock",
    quickAnswer:
      "Optimum Fiber plans are 300 Mbps for $35/mo, 500 Mbps for $45/mo and 1 Gig for $55/mo, each with an eligible $10 AutoPay and paperless bill discount plus taxes and fees. Every plan includes up to a 3-year price lock and unlimited data, and the 1 Gig plan adds up to a $50 gift of your choice.",
    priceFaq:
      "Optimum 300 Mbps Fiber is $35/mo, 500 Mbps Fiber is $45/mo and 1 Gig Fiber is $55/mo, with an eligible $10 AutoPay and paperless bill discount, plus taxes and fees. Plans include up to a 3-year price lock.",
    plans: [
      { tier: "Optimum Fiber 300", headline: "300 Mbps Fiber Internet", desc: "Supports essential online activities for everyday households.", download: "300 Mbps", upload: "Varies", price: 35, term: "w/ elig. $10 AutoPay & paperless bill discount, plus taxes & fees", icon: "shield", features: ["Supports essential online activities", "5x faster upload than 5G internet", "Up to 3-year price lock", "Unlimited data, no annual contract"] },
      { tier: "Optimum Fiber 500", headline: "500 Mbps Fiber Internet", desc: "Great for everyday use across more devices.", download: "500 Mbps", upload: "Varies", price: 45, term: "w/ elig. $10 AutoPay & paperless bill discount, plus taxes & fees", popular: true, icon: "flame", features: ["Great for everyday use", "9x faster upload than 5G internet", "Up to 3-year price lock", "Unlimited data, no annual contract"] },
      { tier: "Optimum Fiber 1 Gig", headline: "1 Gig Fiber Internet", desc: "More speed for more screens, gaming and working from home.", download: "1 Gbps", upload: "Varies", price: 55, term: "w/ elig. $10 AutoPay & paperless bill discount, plus taxes & fees", badge: "Up to $50 gift", icon: "bolt", features: ["More speed for more screens", "17x faster upload than 5G internet", "Up to 3-year price lock", "Up to $50 gift of your choice"] },
    ],
  },
  earthlink: {
    startingPrice: 39.95,
    maxSpeed: "5 Gbps",
    maxSpeedMbps: 5000,
    quickAnswer:
      "EarthLink Fiber starts at $39.95/mo for Fiber 100 and $49.95/mo for 300 Mbps, with 500 Mbps at $64.95/mo, 1 Gig at $74.95/mo and 2 Gig at $129.95/mo, each for 12 months. Fiber 5 Gig is available in select areas. Every EarthLink Fiber plan includes unlimited data.",
    priceFaq:
      "EarthLink Fiber 100 is $39.95/mo, 300 Mbps is $49.95/mo, 500 Mbps is $64.95/mo, 1 Gig is $74.95/mo and 2 Gig is $129.95/mo, each for 12 months. Call for Fiber 5 Gig pricing at your address.",
    plans: [
      { tier: "EarthLink Fiber 100", headline: "100 Mbps Fiber", desc: "Affordable fiber for browsing, email and HD streaming.", download: "100 Mbps", upload: "Up to 100 Mbps", price: 39.95, term: "/mo for 12 months", icon: "shield", features: ["Unlimited data", "Fiber connection", "U.S.-based support", "Privacy-first ISP"] },
      { tier: "Optimal Value High-Speed", headline: "300 Mbps Fiber", desc: "Perfect for multiplayer gaming and smooth 4K streaming.", download: "300 Mbps", upload: "Up to 300 Mbps", price: 49.95, term: "/mo for 12 months", icon: "flame", features: ["Unlimited data", "Streams in 4K and UHD", "U.S.-based support", "Privacy-first ISP"] },
      { tier: "Preferred Choice Ultra-Fast", headline: "500 Mbps Fiber", desc: "Ideal for households with many users and devices.", download: "500 Mbps", upload: "Up to 500 Mbps", price: 64.95, term: "/mo for 12 months", popular: true, icon: "bolt", features: ["Unlimited data", "No speed drops with many users", "U.S.-based support", "Privacy-first ISP"] },
      { tier: "Supreme Fiber Maximum Velocity", headline: "1 Gig Fiber", desc: "Top-tier streaming and gaming on a stable connection.", download: "1000 Mbps", upload: "Up to 1000 Mbps", price: 74.95, term: "/mo for 12 months", icon: "bolt", features: ["Unlimited data", "Stable, reliable connection", "U.S.-based support", "Privacy-first ISP"] },
      { tier: "EarthLink Fiber 2 Gig", headline: "2 Gig Fiber", desc: "Multi-gig speed for creators and large homes.", download: "2000 Mbps", upload: "Up to 2000 Mbps", price: 129.95, term: "/mo for 12 months", icon: "rocket", features: ["Unlimited data", "Multi-gig fiber", "U.S.-based support", "Privacy-first ISP"] },
      { tier: "EarthLink Fiber 5 Gig", headline: "5 Gig Fiber", desc: "EarthLink's fastest fiber in select areas.", download: "5000 Mbps", upload: "Up to 5000 Mbps", term: "Call for pricing at your address", icon: "rocket", features: ["Unlimited data", "Fastest EarthLink tier", "U.S.-based support", "Privacy-first ISP"] },
    ],
  },
  hughesnet: {
    startingPrice: 39.99,
    maxSpeed: "100 Mbps",
    maxSpeedMbps: 100,
    quickAnswer:
      "HughesNet satellite internet plans are Lite (up to 25 Mbps) at $39.99/mo, Select (up to 50 Mbps) at $49.99/mo and Elite (up to 100 Mbps) at $64.99/mo, each for 12 months. Every plan includes unlimited standard data with 100 GB or 200 GB of priority data and built-in Wi-Fi, and HughesNet is available in all 50 states.",
    priceFaq:
      "HughesNet Lite is $39.99/mo for 12 months (12-month commitment), Select is $49.99/mo for 12 months and Elite is $64.99/mo for 12 months (24-month commitment). Regular prices are $49.99, $74.99 and $89.99/mo.",
    plans: [
      { tier: "HughesNet Lite", headline: "Up to 25 Mbps", desc: "For basic connectivity needs and light use.", download: "Up to 25 Mbps", upload: "Varies", price: 39.99, wasPrice: 49.99, term: "/mo for 12 months, 12-month commitment", icon: "satellite", features: ["100 GB Priority Data", "Unlimited Standard Data", "Built-in Wi-Fi", "Budget-friendly for low internet usage"] },
      { tier: "HughesNet Select", headline: "Up to 50 Mbps", desc: "For typical households that browse, shop and stream.", download: "Up to 50 Mbps", upload: "Varies", price: 49.99, wasPrice: 74.99, term: "/mo for 12 months, 24-month commitment", badge: "Most popular", popular: true, icon: "satellite", features: ["100 GB Priority Data", "Unlimited Standard Data", "Advanced built-in Wi-Fi", "Whole Home Wi-Fi available", "HD streaming & video-conferencing"] },
      { tier: "HughesNet Elite", headline: "Up to 100 Mbps", desc: "For larger households with more devices and higher data needs.", download: "Up to 100 Mbps", upload: "Varies", price: 64.99, wasPrice: 89.99, term: "/mo for 12 months, 24-month commitment", icon: "wifi", features: ["200 GB Priority Data", "Unlimited Standard Data", "Advanced built-in Wi-Fi", "Whole Home Wi-Fi available", "HD streaming & video-conferencing"] },
    ],
  },
};

/** Display helper: $40 or $39.99. */
export const money = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);

/** Parse a plan's top download speed in Mbps (used by the speed-guide recommendations). */
export function planMbps(download: string): number {
  const nums = [...download.matchAll(/(\d+(?:\.\d+)?)\s*(Gbps|Mbps|GIG|Gig)?/gi)];
  if (!nums.length) return 0;
  const last = nums[nums.length - 1];
  const unit = (last[2] || nums.find((n) => n[2])?.[2] || "Mbps").toLowerCase();
  const val = parseFloat(last[1]);
  return unit.startsWith("g") ? val * 1000 : val;
}
