import { images } from "@/lib/site";
import { providers, type Faq, type Provider, type TypeKey } from "./providers";

export type InternetType = {
  slug: string;
  key: TypeKey | "no-contract";
  name: string;
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  quickAnswer: string;
  heroImage: string;
  sideImage: string;
  keyFacts: { label: string; value: string }[];
  howItWorks: { title: string; text: string }[];
  pros: string[];
  cons: string[];
  bestFor: { title: string; text: string }[];
  verdict: string;
  faqs: Faq[];
};

export const internetTypes: InternetType[] = [
  {
    slug: "fiber",
    key: "fiber",
    name: "Fiber Internet",
    short: "Fiber",
    h1: "Fiber Internet Providers & Plans",
    metaTitle: "Best Fiber Internet Providers 2026 — Plans, Prices & Speeds",
    metaDescription:
      "Compare fiber internet providers like AT&T Fiber, Verizon Fios, Frontier, Kinetic and Optimum. See fiber plans up to 8 Gbps, prices, pros and cons, and whether fiber is worth it.",
    eyebrow: "Fastest home internet",
    quickAnswer:
      "Fiber internet sends data as pulses of light through glass strands, delivering the fastest and most reliable home internet available — typically 300 Mbps to 8 Gbps with upload speeds equal to download speeds. Fiber plans start around $40–$55 per month and usually include unlimited data.",
    heroImage: images.lightWaves,
    sideImage: images.dataCenter,
    keyFacts: [
      { label: "Typical speeds", value: "300 Mbps – 8 Gbps" },
      { label: "Upload speeds", value: "Symmetrical" },
      { label: "Starting price", value: "$40–$55/mo" },
      { label: "Latency", value: "1–10 ms" },
    ],
    howItWorks: [
      { title: "Light, not electricity", text: "Lasers send data as light through hair-thin glass fibers — far less signal loss than copper." },
      { title: "Fiber to the home", text: "The fiber line runs all the way to an optical terminal (ONT) inside or outside your home." },
      { title: "Gateway & Wi-Fi", text: "A router converts the signal into Wi-Fi and Ethernet for every device in the house." },
    ],
    pros: [
      "Fastest residential speeds available, up to multi-gig",
      "Symmetrical uploads for video calls, gaming and cloud backups",
      "Very low latency and highly consistent performance",
      "Usually unlimited data and no annual contract",
    ],
    cons: [
      "Availability is still limited in rural areas",
      "Installation may require a technician visit",
      "Multi-gig plans cost more than most homes need",
    ],
    bestFor: [
      { title: "Remote work", text: "Crystal-clear video calls and fast uploads of large files." },
      { title: "Gaming & streaming", text: "Low latency and enough bandwidth for multiple 4K streams." },
      { title: "Smart homes", text: "Handles dozens of connected devices without slowdowns." },
    ],
    verdict:
      "If fiber is available at your address, it is almost always the best-value choice — even the entry-level plan outperforms most cable, DSL and wireless options.",
    faqs: [
      { q: "Is fiber internet worth it?", a: "For most households, yes. Fiber costs about the same as cable in many areas but delivers faster uploads, lower latency and better reliability." },
      { q: "How fast is fiber internet?", a: "Residential fiber plans typically range from 300 Mbps to 2 Gbps, with some providers offering 5, 7 or 8 Gbps tiers." },
      { q: "Is fiber better than cable internet?", a: "Fiber generally beats cable on upload speed, latency and consistency. Cable is more widely available and can match fiber's download speeds on top plans." },
      { q: "How do I know if fiber is available at my address?", a: "Fiber is building out quickly. Check each provider's availability tool with your street address, since coverage can differ house to house." },
      { q: "Does fiber internet need a phone line?", a: "No. Fiber uses its own fiber-optic line and doesn't require a landline or cable TV service." },
    ],
  },
  {
    slug: "5g-home-internet",
    key: "5g",
    name: "5G Home Internet",
    short: "5G Home",
    h1: "5G Home Internet Providers & Plans",
    metaTitle: "5G Home Internet Providers 2026 — Plans, Prices & Coverage",
    metaDescription:
      "Compare 5G home internet from Verizon, AT&T Internet Air and more. Learn how 5G home internet works, typical speeds, prices, and whether it can replace cable.",
    eyebrow: "Wireless broadband",
    quickAnswer:
      "5G home internet uses a cellular carrier's 5G network to deliver broadband to a plug-in receiver at home — no cables or technician needed. Typical speeds are 50–300 Mbps, plans cost about $35–$70 per month with unlimited data, and price-lock guarantees are common.",
    heroImage: images.phoneHand,
    sideImage: images.city,
    keyFacts: [
      { label: "Typical speeds", value: "50 – 300 Mbps" },
      { label: "Upload speeds", value: "10 – 50 Mbps" },
      { label: "Starting price", value: "$35–$60/mo" },
      { label: "Setup", value: "Self-install in minutes" },
    ],
    howItWorks: [
      { title: "Cell tower signal", text: "Nearby 5G towers beam broadband signal wirelessly to your home." },
      { title: "5G gateway", text: "A plug-in receiver near a window catches the signal and creates your Wi-Fi network." },
      { title: "Connect & go", text: "Plug it in, follow the app, and you're online — often in under 15 minutes." },
    ],
    pros: [
      "Simple self-installation with no drilling or cables",
      "Unlimited data and no annual contracts",
      "Competitive pricing with mobile-bundle discounts",
      "Good alternative where fiber isn't available",
    ],
    cons: [
      "Speeds vary with signal strength and network congestion",
      "Home internet traffic may be deprioritized during busy times",
      "Availability depends on local 5G coverage",
    ],
    bestFor: [
      { title: "Renters & movers", text: "No installation appointment and easy to take with you." },
      { title: "Cable switchers", text: "A cheaper, simpler alternative to cable in many cities." },
      { title: "Light-to-moderate users", text: "Plenty of speed for streaming, browsing and video calls." },
    ],
    verdict:
      "5G home internet is a strong, affordable option if you get a good signal — test it during the provider's trial period before cancelling your current service.",
    faqs: [
      { q: "Is 5G home internet good?", a: "In areas with strong 5G coverage, it's fast enough for streaming, work calls and most households. Performance can dip during peak hours." },
      { q: "Is 5G home internet unlimited?", a: "Most 5G home internet plans include unlimited data, though traffic may be prioritized below mobile phone users during congestion." },
      { q: "Can 5G home internet replace cable?", a: "For many households, yes. Heavy gamers or homes that need consistent upload speeds may still prefer fiber or cable." },
      { q: "Do I need a technician to install 5G home internet?", a: "No. 5G home internet is self-installed — plug in the gateway, place it near a window and follow the app." },
    ],
  },
  {
    slug: "cable",
    key: "cable",
    name: "Cable Internet",
    short: "Cable",
    h1: "Cable Internet Providers & Plans",
    metaTitle: "Cable Internet Providers 2026 — Compare Plans & Prices",
    metaDescription:
      "Compare cable internet providers like Spectrum and Optimum. See cable internet speeds, prices, pros and cons, and how cable compares to fiber and 5G.",
    eyebrow: "Widely available broadband",
    quickAnswer:
      "Cable internet delivers broadband over the same coaxial lines used for cable TV. It's available to most U.S. homes, offers download speeds from about 300 Mbps to 2 Gbps, and plans typically start around $40–$50 per month — but upload speeds are usually much lower than fiber.",
    heroImage: images.ethernet,
    sideImage: images.livingTv,
    keyFacts: [
      { label: "Typical speeds", value: "300 Mbps – 2 Gbps" },
      { label: "Upload speeds", value: "10 – 100 Mbps" },
      { label: "Starting price", value: "$40–$50/mo" },
      { label: "Availability", value: "Most U.S. homes" },
    ],
    howItWorks: [
      { title: "Hybrid fiber-coax", text: "Fiber carries data to your neighborhood; coaxial cable covers the last stretch to your home." },
      { title: "Cable modem", text: "A DOCSIS modem translates the signal into internet for your router." },
      { title: "Shared node", text: "Bandwidth is shared with nearby homes, so speeds can dip at peak hours." },
    ],
    pros: [
      "Widely available in cities and suburbs",
      "Fast download speeds up to gigabit and beyond",
      "Easy to bundle with cable TV",
      "Many plans have no contracts and no data caps",
    ],
    cons: [
      "Upload speeds are much lower than download",
      "Speeds can slow during neighborhood peak times",
      "Promotional prices often rise after 12 months",
    ],
    bestFor: [
      { title: "Streaming families", text: "Plenty of download bandwidth for multiple 4K streams." },
      { title: "TV bundlers", text: "One bill for internet, cable TV and phone." },
      { title: "Suburban homes", text: "A dependable wired option where fiber hasn't arrived." },
    ],
    verdict:
      "Cable is a reliable, widely available choice for most households. If you upload a lot — creators, remote workers — compare fiber first.",
    faqs: [
      { q: "Is cable internet good?", a: "Yes. Cable internet offers fast download speeds and wide availability, making it a solid choice for streaming and general use." },
      { q: "What's the difference between cable and fiber?", a: "Cable uses coaxial copper lines for the final connection, while fiber uses glass fiber all the way. Fiber offers faster uploads and lower latency." },
      { q: "Do I need cable TV to get cable internet?", a: "No. You can buy cable internet on its own, though bundling with TV can sometimes lower the total cost." },
      { q: "Does cable internet have data caps?", a: "It depends on the provider. Spectrum and Optimum include unlimited data; some other cable companies have monthly allowances." },
    ],
  },
  {
    slug: "dsl",
    key: "dsl",
    name: "DSL Internet",
    short: "DSL",
    h1: "DSL Internet Providers & Plans",
    metaTitle: "DSL Internet Providers 2026 — Plans, Speeds & Alternatives",
    metaDescription:
      "Compare DSL internet providers like Kinetic, Brightspeed, Frontier and AT&T. Learn DSL speeds, prices, pros and cons, and faster alternatives near you.",
    eyebrow: "Budget internet over phone lines",
    quickAnswer:
      "DSL (Digital Subscriber Line) internet runs over existing copper telephone lines. It's affordable and widely available in rural and suburban areas, but speeds are modest — typically 10–140 Mbps — and depend on how far your home is from the provider's equipment.",
    heroImage: images.router,
    sideImage: images.cozyRoom,
    keyFacts: [
      { label: "Typical speeds", value: "10 – 140 Mbps" },
      { label: "Upload speeds", value: "1 – 20 Mbps" },
      { label: "Starting price", value: "$40–$55/mo" },
      { label: "Availability", value: "Rural & suburban" },
    ],
    howItWorks: [
      { title: "Copper phone lines", text: "DSL uses high frequencies on your telephone line — voice and data share the wire." },
      { title: "Distance matters", text: "The farther you are from the provider's hub, the slower your speeds." },
      { title: "DSL modem", text: "A modem converts the signal into Wi-Fi for your home devices." },
    ],
    pros: [
      "Available where cable and fiber aren't",
      "Dedicated line not shared with neighbors",
      "Typically affordable with no contract",
    ],
    cons: [
      "Much slower than cable, fiber and 5G",
      "Speeds drop with distance from the hub",
      "Many providers are phasing DSL out in favor of fiber",
    ],
    bestFor: [
      { title: "Light users", text: "Browsing, email and HD streaming on one or two devices." },
      { title: "Rural homes", text: "A wired option where cable doesn't reach." },
      { title: "Budget shoppers", text: "Basic connectivity at a low monthly cost." },
    ],
    verdict:
      "DSL works for basic needs, but check for fiber, 5G home or fixed wireless first — many DSL areas are being upgraded to much faster service.",
    faqs: [
      { q: "Is DSL internet good?", a: "DSL is fine for light use like browsing and HD streaming, but it struggles with multiple users, 4K streaming and large uploads." },
      { q: "Is DSL faster than satellite?", a: "DSL can match or beat older satellite plans on speed and has much lower latency, which makes video calls and gaming smoother." },
      { q: "Do I need a landline for DSL?", a: "DSL uses a phone line, but most providers no longer require you to pay for home phone service to get DSL internet." },
      { q: "Is DSL being discontinued?", a: "Many providers, including AT&T, Frontier, Kinetic and Brightspeed, are replacing DSL with fiber. Check whether fiber has reached your address." },
    ],
  },
  {
    slug: "fixed-wireless",
    key: "fixed-wireless",
    name: "Fixed Wireless Internet",
    short: "Fixed Wireless",
    h1: "Fixed Wireless Internet Providers",
    metaTitle: "Fixed Wireless Internet Providers 2026 — Rural Broadband Guide",
    metaDescription:
      "What is fixed wireless internet? Compare fixed wireless providers, speeds, prices and how it compares to satellite and DSL for rural homes.",
    eyebrow: "Rural broadband, tower to home",
    quickAnswer:
      "Fixed wireless internet beams broadband from a nearby tower to a small antenna mounted on your home. It's popular in rural areas, delivers roughly 25–300 Mbps with far lower latency than satellite, and plans usually cost $50–$80 per month.",
    heroImage: images.ruralField,
    sideImage: images.modernHome,
    keyFacts: [
      { label: "Typical speeds", value: "25 – 300 Mbps" },
      { label: "Latency", value: "20 – 50 ms" },
      { label: "Starting price", value: "$50–$80/mo" },
      { label: "Best for", value: "Rural homes" },
    ],
    howItWorks: [
      { title: "Tower broadcast", text: "A provider tower transmits signal over the air to homes within several miles." },
      { title: "Rooftop antenna", text: "A small receiver on your roof needs a clear line of sight to the tower." },
      { title: "Home network", text: "The antenna connects to a router that powers your Wi-Fi." },
    ],
    pros: [
      "Much lower latency than satellite",
      "No phone or cable lines required",
      "Faster than DSL in many rural areas",
    ],
    cons: [
      "Requires line of sight to the tower",
      "Trees, hills and heavy weather can affect signal",
      "Some plans have data caps",
    ],
    bestFor: [
      { title: "Rural households", text: "Faster, more responsive than satellite where towers reach." },
      { title: "Remote workers", text: "Latency low enough for video calls and VPNs." },
      { title: "Satellite switchers", text: "A snappier alternative if you're in tower range." },
    ],
    verdict:
      "If you live in the country and a fixed wireless tower covers your home, it's usually a better experience than satellite for work and play.",
    faqs: [
      { q: "What is fixed wireless internet?", a: "Fixed wireless internet sends broadband from a tower to an antenna on your home over radio signals, rather than through cables." },
      { q: "Is fixed wireless better than satellite?", a: "Usually yes. Fixed wireless has much lower latency and often more generous data allowances than traditional satellite." },
      { q: "Is 5G home internet fixed wireless?", a: "Yes — 5G home internet is a type of fixed wireless access that uses a mobile carrier's cellular network." },
      { q: "Does weather affect fixed wireless?", a: "Heavy rain, snow or foliage can occasionally weaken the signal, but service is generally stable." },
    ],
  },
  {
    slug: "satellite",
    key: "satellite",
    name: "Satellite Internet",
    short: "Satellite",
    h1: "Satellite Internet Providers & Plans",
    metaTitle: "Satellite Internet Providers 2026 — HughesNet Plans & Prices",
    metaDescription:
      "Compare satellite internet providers including HughesNet and EarthLink satellite. See speeds, data policies, prices, and the pros and cons of satellite internet.",
    eyebrow: "Internet almost anywhere",
    quickAnswer:
      "Satellite internet connects your home to the internet through a dish that communicates with satellites in orbit. It's available virtually everywhere in the U.S., offers 50–100+ Mbps on current plans, and costs about $50–$120 per month — but latency is higher than wired or 5G internet.",
    heroImage: images.earthSatellite,
    sideImage: images.ruralField,
    keyFacts: [
      { label: "Typical speeds", value: "50 – 100+ Mbps" },
      { label: "Latency", value: "30 – 600+ ms" },
      { label: "Starting price", value: "$50/mo" },
      { label: "Availability", value: "All 50 states" },
    ],
    howItWorks: [
      { title: "Dish on your home", text: "A dish sends and receives data to and from a satellite in orbit." },
      { title: "Network operations center", text: "The satellite relays traffic to a ground station connected to the internet." },
      { title: "Modem & Wi-Fi", text: "Your modem turns the satellite link into home Wi-Fi." },
    ],
    pros: [
      "Available nearly everywhere, including remote areas",
      "No cable or phone line needed",
      "Newer plans offer much faster speeds than before",
    ],
    cons: [
      "Higher latency affects gaming and video calls",
      "Priority data limits on many plans",
      "Weather and obstructions can disrupt signal",
    ],
    bestFor: [
      { title: "Remote homes", text: "When cable, fiber, DSL and 5G aren't options." },
      { title: "Cabins & farms", text: "Reliable coverage far from town." },
      { title: "Basic connectivity", text: "Browsing, email, streaming in HD." },
    ],
    verdict:
      "Satellite is the right call when nothing else reaches your home. If fixed wireless or 5G is available, compare those first for lower latency.",
    faqs: [
      { q: "Is satellite internet good?", a: "Satellite internet is good for getting online where no wired or cellular options exist. It's slower to respond than wired internet due to higher latency." },
      { q: "How much does satellite internet cost?", a: "Satellite plans typically cost $50–$120 per month, plus equipment lease or purchase fees." },
      { q: "Can you game on satellite internet?", a: "Casual and turn-based games work, but high latency makes competitive shooters difficult on geostationary satellite service." },
      { q: "Does weather affect satellite internet?", a: "Heavy rain or snow can temporarily interrupt satellite service, known as rain fade." },
    ],
  },
  {
    slug: "no-contract",
    key: "no-contract",
    name: "No-Contract Internet Plans",
    short: "No-Contract",
    h1: "No-Contract Internet Plans",
    metaTitle: "No-Contract Internet Plans 2026 — Month-to-Month Providers",
    metaDescription:
      "Find no-contract internet plans from Spectrum, AT&T, Verizon, Frontier, Optimum and more. Compare month-to-month pricing, fees and tips to avoid price hikes.",
    eyebrow: "Month-to-month freedom",
    quickAnswer:
      "No-contract internet plans let you pay month to month and cancel anytime without early termination fees. Most major providers — including Spectrum, AT&T, Verizon, Frontier, Kinetic and Optimum — now offer no-contract plans, often at the same price as contract plans.",
    heroImage: images.workspace,
    sideImage: images.kitchen,
    keyFacts: [
      { label: "Early termination fee", value: "None" },
      { label: "Starting price", value: "$40–$55/mo" },
      { label: "Credit check", value: "Sometimes" },
      { label: "Best for", value: "Renters, movers" },
    ],
    howItWorks: [
      { title: "Month-to-month billing", text: "You're billed each month with no long-term commitment." },
      { title: "Cancel anytime", text: "Stop service without early termination fees — just return equipment." },
      { title: "Watch promo pricing", text: "Some plans raise prices after 12 months; price-lock plans avoid this." },
    ],
    pros: [
      "Freedom to switch or cancel anytime",
      "No early termination fees",
      "Great for renters, students and frequent movers",
    ],
    cons: [
      "Promotional pricing may be shorter",
      "Some providers charge installation or equipment fees",
      "Prices can change with notice",
    ],
    bestFor: [
      { title: "Renters", text: "Move without paying a cancellation penalty." },
      { title: "Students", text: "Service only for the months you need it." },
      { title: "Deal hunters", text: "Switch when a better offer arrives." },
    ],
    verdict:
      "No-contract is now the norm for most wired and 5G providers — prioritize plans that also include a price guarantee.",
    faqs: [
      { q: "Are no-contract internet plans more expensive?", a: "Not usually. Most major providers price their no-contract plans the same as, or very close to, contract plans." },
      { q: "Which internet providers have no contracts?", a: "Spectrum, AT&T Fiber, Verizon Fios and 5G Home, Frontier, Kinetic, Brightspeed and Optimum all offer month-to-month plans." },
      { q: "Can I cancel no-contract internet anytime?", a: "Yes. You can cancel without early termination fees, though you'll need to return any leased equipment." },
      { q: "Do no-contract plans require a credit check?", a: "Some providers run a soft credit check or ask for a deposit. Prepaid and 5G plans often skip credit checks." },
    ],
  },
];

export const getInternetType = (slug: string) => internetTypes.find((t) => t.slug === slug);

export function providersForType(t: InternetType): Provider[] {
  if (t.key === "no-contract") return providers.filter((p) => p.contract.toLowerCase().includes("no"));
  if (t.key === "fixed-wireless") return providers.filter((p) => p.types.includes("fixed-wireless") || p.types.includes("5g"));
  return providers.filter((p) => p.types.includes(t.key as TypeKey));
}

export const typeLabels: Record<TypeKey, string> = {
  fiber: "Fiber",
  "5g": "5G Home",
  cable: "Cable",
  dsl: "DSL",
  "fixed-wireless": "Fixed Wireless",
  satellite: "Satellite",
};
