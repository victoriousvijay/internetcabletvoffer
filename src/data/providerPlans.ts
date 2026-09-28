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
      "AT&T Fiber plans start at $35/mo for 300 Mbps, $50/mo for 500 Mbps and $65/mo for 1 GIG (save $15/mo), with AutoPay and paperless billing plus taxes and fees. Every fiber plan has equal upload and download speeds, unlimited data and no annual contract. Where fiber isn't built, AT&T Internet Air delivers wireless home internet for $55/mo.",
    priceFaq:
      "AT&T Internet 300 starts at $35/mo, Internet 500 at $50/mo and Internet 1000 (1 GIG) at $65/mo after a $15/mo savings, with AutoPay and paperless billing, plus taxes and fees. AT&T Internet Air is $55/mo with equipment included.",
    plans: [
      { tier: "AT&T Internet 300", headline: "300 Mbps Fiber", desc: "Fast, smooth and reliable for everyday streaming, school and work.", download: "300 Mbps", upload: "300 Mbps", price: 35, term: "/mo. plus taxes & fees, w/ AutoPay & paperless bill", icon: "shield", features: ["15x faster uploads than cable", "Unlimited data, no annual contract", "Wi-Fi gateway included", "AT&T Internet Backup included"] },
      { tier: "AT&T Internet 500", headline: "500 Mbps Fiber", desc: "Lag-free gaming and room to connect every device in the house.", download: "500 Mbps", upload: "500 Mbps", price: 50, term: "/mo. plus tax, w/ AutoPay", icon: "flame", features: ["20x faster uploads than cable", "Unlimited data, no annual contract", "Wi-Fi gateway included", "AT&T Internet Backup included"] },
      { tier: "AT&T Internet 1000", headline: "1 GIG Fiber", desc: "Built for gaming, 4K streaming and a fully connected smart home.", download: "Up to 1 Gbps", upload: "Up to 1 Gbps", price: 65, wasPrice: 80, term: "/mo. plus tax, w/ AutoPay", badge: "Save $15/mo", popular: true, icon: "bolt", features: ["25x faster uploads than cable", "Unlimited data, no annual contract", "Ask about reward card offers", "AT&T Internet Backup included"] },
      { tier: "AT&T Internet Air", headline: "AT&T Internet Air", desc: "Plug-and-play wireless home internet where fiber isn't available.", download: "75–225 Mbps avg.", upload: "Varies", price: 55, term: "/mo., equipment included", icon: "wifi", features: ["Self-install in minutes", "No data caps", "No annual contract", "No price increase after 12 months"] },
    ],
  },
  spectrum: {
    startingPrice: 30,
    maxSpeed: "1 Gbps",
    maxSpeedMbps: 1000,
    quickAnswer:
      "Spectrum Internet plans are Internet 100 at $30/mo, Internet 500 at $40/mo and Internet 1 Gig at $60/mo, each for the first year. Every plan includes a free modem, no data caps, no contracts and Spectrum Mobile free for a year, and Internet 1 Gig includes Advanced WiFi. Spectrum also bundles cable TV and mobile in 41 states.",
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
    startingPrice: 40,
    maxSpeed: "5 Gbps",
    maxSpeedMbps: 5000,
    tagline: "Fios fiber up to 5 Gig with price guarantees",
    quickAnswer:
      "Verizon Fios plans start at $40/mo for 300 Mbps and $75/mo for 500 Mbps (3-year price guarantee), with 1 Gig at $90/mo, 2 Gig at $100/mo and 5 Gig at $110/mo (5-year price guarantee), all with Auto Pay and paper-free billing. Fios is 100% fiber with no annual contract and no data caps, and Verizon mobile customers save more.",
    priceFaq:
      "Verizon Fios 300 Mbps is $40/mo and 500 Mbps is $75/mo with a 3-year price guarantee; Fios 1 Gig is $90/mo, 2 Gig $100/mo and 5 Gig $110/mo with a 5-year price guarantee. Prices include the Auto Pay and paper-free billing discount.",
    plans: [
      { tier: "Fios 300 Mbps", headline: "300 Mbps Fiber", desc: "Fast, dependable fiber for streaming and work-from-home.", download: "Up to 300 Mbps", upload: "Up to 300 Mbps", price: 40, term: "/mo w/ Auto Pay & paper-free billing", icon: "shield", features: ["100% fiber-optic network", "3-year price guarantee", "Router included", "No annual contract"] },
      { tier: "Fios 500 Mbps", headline: "500 Mbps Fiber", desc: "More speed for larger households and more devices.", download: "Up to 500 Mbps", upload: "Up to 500 Mbps", price: 75, term: "/mo w/ Auto Pay & paper-free billing", icon: "flame", features: ["Symmetrical speeds", "3-year price guarantee", "Router included", "No data caps"] },
      { tier: "Fios 1 Gig", headline: "1 Gig Fiber", desc: "Up to 940 Mbps for gaming, 4K streaming and big uploads.", download: "Up to 940 Mbps", upload: "750–880 Mbps", price: 90, term: "/mo w/ Auto Pay & paper-free billing", popular: true, icon: "bolt", features: ["5-year price guarantee", "Wi-Fi 7 router included", "No data caps", "No annual contract"] },
      { tier: "Fios 2 Gig", headline: "2 Gig Fiber", desc: "Average wired speeds of 1.5–2.3 Gbps in both directions.", download: "1.5–2.3 Gbps", upload: "1.5–2.3 Gbps", price: 100, term: "/mo w/ Auto Pay & paper-free billing", icon: "rocket", features: ["5-year price guarantee", "Wi-Fi 7 router included", "No data caps", "No annual contract"] },
      { tier: "Fios 5 Gig", headline: "5 Gig Fiber", desc: "Average wired speeds of 4.5–5.3 Gbps for power users.", download: "4.5–5.3 Gbps", upload: "4.5–5.3 Gbps", price: 110, term: "/mo w/ Auto Pay & paper-free billing", badge: "Fastest Fios", icon: "rocket", features: ["5-year price guarantee", "Wi-Fi 7 router included", "No data caps", "No annual contract"] },
      { tier: "Verizon 5G Home", headline: "5G Home Internet", desc: "Wireless home internet with no cables where Fios isn't available.", download: "Varies by location", upload: "Varies", term: "Call for pricing & mobile discounts", icon: "wifi", features: ["Self-setup in minutes", "Unlimited data", "Price guarantee", "No annual contract"] },
    ],
  },
  frontier: {
    startingPrice: 44.99,
    maxSpeed: "5 Gbps",
    maxSpeedMbps: 5000,
    blurb: "Pure fiber, 1 Gig to 5 Gig",
    tagline: "100% fiber plans from 1 Gig to 5 Gig",
    quickAnswer:
      "Frontier Fiber plans start at $44.99/mo for Fiber 1 Gig and $69.99/mo for Fiber 2 Gig, with a Fiber 5 Gig tier featuring Wi-Fi 7 in select areas. Every plan is 100% fiber with symmetrical upload and download speeds, unlimited data and no annual contract, across 25 states.",
    priceFaq:
      "Frontier Fiber 1 Gig starts at $44.99/mo and Fiber 2 Gig at $69.99/mo. Fiber 5 Gig with Wi-Fi 7 is available in select areas; call to confirm pricing at your address.",
    plans: [
      { tier: "Fiber 1 Gig", headline: "1 Gig Fiber", desc: "Up to 1000/1000 Mbps for streaming, gaming and working from home.", download: "Up to 1000 Mbps", upload: "Up to 1000 Mbps", price: 44.99, term: "/mo", badge: "Online exclusive price", popular: true, icon: "bolt", features: ["100% fiber-to-the-home", "Symmetrical upload & download", "Unlimited data, no contract", "Wi-Fi router included"] },
      { tier: "Fiber 2 Gig", headline: "2 Gig Fiber", desc: "Up to 2000/2000 Mbps for big households and creators.", download: "Up to 2000 Mbps", upload: "Up to 2000 Mbps", price: 69.99, term: "/mo", icon: "rocket", features: ["Symmetrical multi-gig speed", "Unlimited data", "Premium Wi-Fi equipment", "No annual contract"] },
      { tier: "Fiber 5 Gig", headline: "5 Gig Fiber", desc: "Next-level speed with advanced Wi-Fi 7 technology.", download: "Up to 5000 Mbps", upload: "Up to 5000 Mbps", term: "Call for pricing at your address", icon: "rocket", features: ["Wi-Fi 7 equipment", "Symmetrical speeds", "Unlimited data", "No annual contract"] },
    ],
  },
  optimum: {
    startingPrice: 40,
    maxSpeed: "8 Gbps",
    maxSpeedMbps: 8000,
    quickAnswer:
      "Optimum internet starts at $40/mo for Optimum 300, with Optimum 500 at $50/mo and Optimum 1 Gig at $60/mo on its cable network. Where Optimum Fiber is available, plans run from Fiber 1 Gig at $70/mo up to Fiber 8 Gig at $280/mo, all with unlimited data and no annual contract.",
    priceFaq:
      "Optimum 300 starts at $40/mo, Optimum 500 at $50/mo and Optimum 1 Gig at $60/mo. Optimum Fiber plans range from Fiber 1 Gig at $70/mo to Fiber 2 Gig at $120/mo, Fiber 5 Gig at $180/mo and Fiber 8 Gig at $280/mo.",
    plans: [
      { tier: "Optimum 300", headline: "300 Mbps Internet", desc: "Everyday speed for streaming, browsing and video calls.", download: "Up to 300 Mbps", upload: "Up to 20 Mbps", price: 40, term: "/mo", icon: "shield", features: ["Unlimited data", "Smart WiFi 6 router included", "No annual contract", "Professional installation"] },
      { tier: "Optimum 500", headline: "500 Mbps Internet", desc: "More bandwidth for multi-device homes.", download: "Up to 500 Mbps", upload: "Up to 20 Mbps", price: 50, term: "/mo", icon: "flame", features: ["Unlimited data", "Smart WiFi 6 router included", "No annual contract", "Bundle with TV & mobile"] },
      { tier: "Optimum 1 Gig", headline: "1 Gig Internet", desc: "Gig speed for gaming and 4K streaming on every screen.", download: "Up to 940 Mbps", upload: "Up to 35 Mbps", price: 60, term: "/mo", popular: true, icon: "bolt", features: ["Unlimited data", "Smart WiFi 6 router included", "No annual contract", "Bundle with TV & mobile"] },
      { tier: "Optimum Fiber 1 Gig", headline: "1 Gig Fiber", desc: "Symmetrical fiber for creators and remote workers.", download: "Up to 940 Mbps", upload: "Up to 940 Mbps", price: 70, term: "/mo", icon: "bolt", features: ["100% fiber connection", "Symmetrical speeds", "Unlimited data", "No annual contract"] },
      { tier: "Optimum Fiber 2 Gig", headline: "2 Gig Fiber", desc: "Multi-gig speed for large households.", download: "Up to 2000 Mbps", upload: "Up to 2000 Mbps", price: 120, term: "/mo", icon: "rocket", features: ["Symmetrical multi-gig", "Unlimited data", "Premium Wi-Fi", "No annual contract"] },
      { tier: "Optimum Fiber 8 Gig", headline: "8 Gig Fiber", desc: "Optimum's fastest tier for power users.", download: "Up to 8000 Mbps", upload: "Up to 8000 Mbps", price: 280, term: "/mo", badge: "Fastest", icon: "rocket", features: ["Symmetrical 8 Gig", "Unlimited data", "Premium Wi-Fi", "No annual contract"] },
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
    startingPrice: 74.99,
    maxSpeed: "100 Mbps",
    maxSpeedMbps: 100,
    quickAnswer:
      "HughesNet satellite internet plans are Select (up to 50 Mbps, 100 GB priority data) at $74.99/mo, Elite (up to 100 Mbps, 200 GB) at $89.99/mo and Fusion (up to 100 Mbps, 200 GB, lower latency) at $119.99/mo, on a 24-month agreement. There are no hard data limits and service is available in all 50 states.",
    priceFaq:
      "HughesNet Select is $74.99/mo, Elite is $89.99/mo and Fusion is $119.99/mo on a 24-month agreement. All plans have no hard data limits; after your priority data, speeds may be reduced.",
    plans: [
      { tier: "HughesNet Select", headline: "Up to 50 Mbps", desc: "Best for small families whose internet use is growing.", download: "Up to 50 Mbps", upload: "Up to 5 Mbps", price: 74.99, term: "/mo, 24-month agreement", icon: "satellite", features: ["100 GB priority data", "No hard data limits", "Built-in Wi-Fi", "Off-peak bonus data (2–8 AM)"] },
      { tier: "HughesNet Elite", headline: "Up to 100 Mbps", desc: "For users and couples who want faster satellite internet.", download: "Up to 100 Mbps", upload: "Up to 5 Mbps", price: 89.99, term: "/mo, 24-month agreement", popular: true, icon: "satellite", features: ["200 GB priority data", "No hard data limits", "Built-in Wi-Fi", "Off-peak bonus data (2–8 AM)"] },
      { tier: "HughesNet Fusion", headline: "Up to 100 Mbps + low latency", desc: "Satellite plus wireless for smoother calls and browsing.", download: "Up to 100 Mbps", upload: "Up to 5 Mbps", price: 119.99, term: "/mo, 24-month agreement", icon: "wifi", features: ["200 GB priority data", "Hybrid satellite + wireless", "Lower latency for video calls", "No hard data limits"] },
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
