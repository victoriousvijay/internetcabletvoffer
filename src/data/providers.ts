import { images } from "@/lib/site";

export type TypeKey = "fiber" | "5g" | "cable" | "dsl" | "fixed-wireless" | "satellite";

export type Plan = {
  name: string;
  download: string;
  upload: string;
  price: number;
  note?: string;
  popular?: boolean;
};

export type Faq = { q: string; a: string };

export type Provider = {
  slug: string;
  name: string;
  monogram: string;
  accent: string;
  logo: string;
  /** Logo artwork is taller than wide-format wordmarks; render it larger. */
  logoTall?: boolean;
  blurb: string;
  loader: { primary: string; light: string };
  tagline: string;
  quickAnswer: string;
  intro: string;
  types: TypeKey[];
  startingPrice: number;
  maxSpeed: string;
  maxSpeedMbps: number;
  contract: string;
  dataCap: string;
  equipment: string;
  rating: number;
  scores: { label: string; value: number }[];
  coverage: string;
  bestFor: string;
  heroImage: string;
  sideImage: string;
  plans: Plan[];
  pros: string[];
  cons: string[];
  features: { title: string; text: string }[];
  tv: { title: string; text: string };
  faqs: Faq[];
};

export const providers: Provider[] = [
  {
    slug: "att",
    name: "AT&T",
    monogram: "AT",
    accent: "#009fdb",
    logo: "/logos/att.png",
    blurb: "Multi-gig fiber, zero contracts",
    loader: { primary: "#00a8e0", light: "#4cc6ef" },
    tagline: "Multi-gig fiber with no annual contract",
    quickAnswer:
      "AT&T is one of the largest fiber internet providers in the U.S., offering AT&T Fiber plans from 300 Mbps up to 5 Gbps with symmetrical upload speeds, no annual contract and no data caps on fiber. Where fiber isn't available, AT&T Internet Air delivers wireless home internet over its 5G/4G network.",
    intro:
      "AT&T combines one of the country's biggest fiber footprints with a wireless fallback option, making it a strong pick for remote workers, gamers and busy households that need fast uploads.",
    types: ["fiber", "5g", "dsl"],
    startingPrice: 55,
    maxSpeed: "5 Gbps",
    maxSpeedMbps: 5000,
    contract: "No annual contract",
    dataCap: "Unlimited on Fiber & Internet Air",
    equipment: "Wi-Fi 7 gateway included on fiber",
    rating: 4.6,
    scores: [
      { label: "Speed", value: 4.8 },
      { label: "Reliability", value: 4.6 },
      { label: "Value", value: 4.3 },
      { label: "Customer service", value: 4.1 },
    ],
    coverage: "Available to tens of millions of homes across 21 states, with fiber expanding every year.",
    bestFor: "Remote workers, creators and gamers who need fast, symmetrical uploads",
    heroImage: images.homeOffice,
    sideImage: images.gaming,
    plans: [
      { name: "AT&T Fiber 300", download: "300 Mbps", upload: "300 Mbps", price: 55 },
      { name: "AT&T Fiber 500", download: "500 Mbps", upload: "500 Mbps", price: 65, popular: true },
      { name: "AT&T Fiber 1 GIG", download: "1 Gbps", upload: "1 Gbps", price: 80 },
      { name: "AT&T Fiber 2 GIG", download: "2 Gbps", upload: "2 Gbps", price: 150 },
      { name: "AT&T Fiber 5 GIG", download: "5 Gbps", upload: "5 Gbps", price: 245 },
      { name: "AT&T Internet Air", download: "Up to ~300 Mbps", upload: "Varies", price: 60, note: "Discount with eligible AT&T wireless" },
    ],
    pros: [
      "Symmetrical upload and download speeds on fiber",
      "No annual contract and no data caps on fiber plans",
      "Latest-generation Wi-Fi gateway included",
      "Wireless Internet Air option where fiber isn't built yet",
    ],
    cons: [
      "Fiber availability depends on your exact address",
      "Multi-gig tiers are priced at a premium",
      "Legacy DSL areas offer far slower speeds",
    ],
    features: [
      { title: "Symmetrical fiber", text: "Upload as fast as you download — ideal for video calls, cloud backups and streaming to Twitch." },
      { title: "Wi-Fi 7 gateway", text: "Higher-tier fiber plans include AT&T's newest gateway for whole-home coverage." },
      { title: "Internet Air", text: "Plug-and-play wireless home internet that sets up in minutes, no technician needed." },
      { title: "Bundle savings", text: "Save on internet when you add an eligible AT&T wireless line." },
    ],
    tv: {
      title: "TV options with AT&T",
      text: "AT&T no longer sells its own cable TV, but you can pair AT&T Fiber with DIRECTV or any live TV streaming service — fiber's speed makes 4K streaming on several TVs effortless.",
    },
    faqs: [
      { q: "How much does AT&T internet cost?", a: "AT&T Fiber starts around $55/month for 300 Mbps with autopay, while 1 Gbps runs about $80/month. Multi-gig 2 GIG and 5 GIG plans cost more. Prices vary by address." },
      { q: "Does AT&T have data caps?", a: "No. AT&T Fiber and AT&T Internet Air include unlimited data. Some legacy DSL plans may still carry a monthly data allowance." },
      { q: "Does AT&T require a contract?", a: "No. AT&T Fiber plans are month-to-month with no annual contract." },
      { q: "What is AT&T Internet Air?", a: "Internet Air is AT&T's fixed wireless home internet that uses its cellular network. It's a good option where AT&T Fiber isn't available." },
      { q: "Is AT&T Fiber good for gaming?", a: "Yes. Fiber delivers low latency and consistent speeds, which makes AT&T Fiber one of the better choices for online gaming." },
    ],
  },
  {
    slug: "earthlink",
    name: "EarthLink",
    monogram: "EL",
    accent: "#f7941d",
    logo: "/logos/earthlink.png",
    blurb: "Privacy-first nationwide internet",
    loader: { primary: "#f7941d", light: "#ffb257" },
    tagline: "Trusted ISP with fiber, wireless and satellite options",
    quickAnswer:
      "EarthLink is a nationwide internet service provider that sells fiber, 5G home internet, fixed wireless and satellite plans over partner networks. Its fiber plans reach up to 5 Gbps with unlimited data, and EarthLink is known for transparent pricing and strong privacy commitments.",
    intro:
      "Because EarthLink runs on several partner networks, it's often available in places where you have only one or two other choices — and it pairs that reach with a privacy-first reputation.",
    types: ["fiber", "5g", "fixed-wireless", "satellite", "dsl"],
    startingPrice: 50,
    maxSpeed: "5 Gbps",
    maxSpeedMbps: 5000,
    contract: "12-month price lock on most plans",
    dataCap: "Unlimited on fiber plans",
    equipment: "Router rental available",
    rating: 4.3,
    scores: [
      { label: "Speed", value: 4.4 },
      { label: "Reliability", value: 4.3 },
      { label: "Value", value: 4.1 },
      { label: "Customer service", value: 4.4 },
    ],
    coverage: "Available in all 50 states through fiber, wireless and satellite partner networks.",
    bestFor: "Privacy-minded households and shoppers who want more options at their address",
    heroImage: images.laptopDesk,
    sideImage: images.friendsLaptops,
    plans: [
      { name: "EarthLink Fiber 100", download: "100 Mbps", upload: "Up to 100 Mbps", price: 50 },
      { name: "EarthLink Fiber 500", download: "500 Mbps", upload: "Up to 500 Mbps", price: 60, popular: true },
      { name: "EarthLink Fiber 1 Gig", download: "1 Gbps", upload: "Up to 1 Gbps", price: 75 },
      { name: "EarthLink Fiber 2 Gig", download: "2 Gbps", upload: "Up to 2 Gbps", price: 100 },
      { name: "EarthLink Fiber 5 Gig", download: "5 Gbps", upload: "Up to 5 Gbps", price: 150 },
      { name: "EarthLink 5G Home", download: "Up to ~300 Mbps", upload: "Varies", price: 55, note: "Where available" },
    ],
    pros: [
      "Multiple technologies, so it's available almost everywhere",
      "Privacy-focused — EarthLink states it doesn't track browsing to sell ads",
      "Unlimited data on fiber plans",
      "U.S.-based customer support",
    ],
    cons: [
      "Prices can rise after the initial price-lock period",
      "Router is an added monthly fee on some plans",
      "Speeds depend on the partner network in your area",
    ],
    features: [
      { title: "Privacy first", text: "EarthLink has built its brand on not monitoring or selling your browsing activity." },
      { title: "Many ways to connect", text: "Fiber, 5G home, fixed wireless, satellite and DSL — one provider, many options." },
      { title: "Price lock", text: "Most plans include a guaranteed rate for the first 12 months." },
      { title: "Security add-ons", text: "Optional Guardian protection and tech support add-ons for the whole family." },
    ],
    tv: {
      title: "Adding TV to EarthLink",
      text: "EarthLink focuses on internet. Pair it with a live TV streaming service or a satellite TV provider to build a flexible TV bundle.",
    },
    faqs: [
      { q: "Is EarthLink a real internet provider?", a: "Yes. EarthLink is one of the oldest U.S. internet service providers. It delivers service over partner fiber, wireless and satellite networks and handles billing and support itself." },
      { q: "How fast is EarthLink internet?", a: "EarthLink fiber plans range from about 100 Mbps up to 5 Gbps. Wireless and satellite speeds are lower and vary by location." },
      { q: "Does EarthLink have data caps?", a: "EarthLink fiber plans include unlimited data. Some wireless and satellite plans have data allowances." },
      { q: "Is EarthLink good for privacy?", a: "EarthLink positions itself as a privacy-focused ISP and says it does not track or sell customers' browsing history." },
    ],
  },
  {
    slug: "spectrum",
    name: "Spectrum",
    monogram: "SP",
    accent: "#0b2d5b",
    logo: "/logos/spectrum.png",
    blurb: "Unlimited cable, no contracts",
    loader: { primary: "#0b2d5b", light: "#1e5cae" },
    tagline: "No contracts, no data caps, huge cable footprint",
    quickAnswer:
      "Spectrum is the largest cable internet provider in the U.S., with plans from 500 Mbps up to 2 Gbps, no annual contracts, no data caps and a free modem. Spectrum also offers cable TV, Spectrum Mobile and home phone bundles in 41 states.",
    intro:
      "Spectrum is the go-to cable option for millions of households thanks to straightforward pricing, unlimited data and easy bundling with TV and mobile.",
    types: ["cable", "fiber"],
    startingPrice: 50,
    maxSpeed: "2 Gbps",
    maxSpeedMbps: 2000,
    contract: "No annual contract",
    dataCap: "Unlimited data",
    equipment: "Free modem included",
    rating: 4.3,
    scores: [
      { label: "Speed", value: 4.4 },
      { label: "Reliability", value: 4.2 },
      { label: "Value", value: 4.3 },
      { label: "Customer service", value: 3.9 },
    ],
    coverage: "Serves customers in 41 states, making it one of the most widely available wired providers.",
    bestFor: "Families who want simple, unlimited internet bundled with TV and mobile",
    heroImage: images.kitchen,
    sideImage: images.cozyRoom,
    plans: [
      { name: "Spectrum Internet Premier", download: "500 Mbps", upload: "Up to 20 Mbps", price: 50 },
      { name: "Spectrum Internet Advantage", download: "1 Gbps", upload: "Up to 35 Mbps", price: 70, popular: true },
      { name: "Spectrum Internet Gig", download: "2 Gbps", upload: "Up to 1 Gbps", price: 90, note: "In select areas" },
    ],
    pros: [
      "No data caps and no annual contracts",
      "Free modem and free access to Spectrum Wi-Fi hotspots",
      "Wide availability across 41 states",
      "Easy bundling with Spectrum TV and Spectrum Mobile",
    ],
    cons: [
      "Upload speeds are much lower than fiber on most plans",
      "Promotional prices increase after the first year",
      "Advanced Wi-Fi router may cost extra",
    ],
    features: [
      { title: "Unlimited data", text: "Stream, game and download as much as you want — no overage fees." },
      { title: "Contract buyout", text: "Spectrum may help cover early termination fees when you switch from another provider." },
      { title: "Spectrum TV", text: "Cable TV packages plus the Spectrum TV app for streaming on any device." },
      { title: "Mobile bundle", text: "Add Spectrum Mobile lines and save on both services." },
    ],
    tv: {
      title: "Spectrum TV bundles",
      text: "Spectrum TV Select, Silver and Gold packages add 125+ to 200+ channels, local networks and on-demand content. Bundle with internet to simplify your bill.",
    },
    faqs: [
      { q: "How much is Spectrum internet?", a: "Spectrum Internet Premier (500 Mbps) starts around $50/month and Internet Advantage (1 Gbps) around $70/month for the first 12 months, depending on location and promotions." },
      { q: "Does Spectrum have data caps?", a: "No. Every Spectrum Internet plan includes unlimited data with no overage charges." },
      { q: "Does Spectrum require a contract?", a: "No. Spectrum internet is month-to-month with no annual contract." },
      { q: "Is Spectrum cable or fiber?", a: "Spectrum mainly uses a hybrid fiber-coaxial (cable) network, and is rolling out fiber-to-the-home and symmetrical speeds in select markets." },
      { q: "Can I bundle Spectrum internet and TV?", a: "Yes. Spectrum offers internet, cable TV, mobile and home phone bundles, and bundling usually lowers the combined price." },
    ],
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    monogram: "KI",
    accent: "#8b1e7e",
    logo: "/logos/kinetic.png",
    blurb: "Fiber for small-town America",
    loader: { primary: "#8b1e7e", light: "#b54aa8" },
    tagline: "Fast-growing fiber across small-town America",
    quickAnswer:
      "Kinetic is a fiber and DSL internet provider serving suburban and rural communities in 18 states. Kinetic fiber plans reach up to 8 Gbps with unlimited data, free Wi-Fi equipment on many plans and no annual contract.",
    intro:
      "Kinetic is aggressively upgrading its network to fiber, bringing gig-speed internet to towns that historically had only DSL or satellite.",
    types: ["fiber", "dsl"],
    startingPrice: 40,
    maxSpeed: "8 Gbps",
    maxSpeedMbps: 8000,
    contract: "No annual contract",
    dataCap: "Unlimited data",
    equipment: "Wi-Fi gateway included on most fiber plans",
    rating: 4.1,
    scores: [
      { label: "Speed", value: 4.3 },
      { label: "Reliability", value: 4.0 },
      { label: "Value", value: 4.2 },
      { label: "Customer service", value: 3.8 },
    ],
    coverage: "Serves homes in 18 states, focused on small towns, suburbs and rural areas.",
    bestFor: "Suburban and rural homes upgrading from DSL to fiber",
    heroImage: images.modernHome,
    sideImage: images.ruralField,
    plans: [
      { name: "Kinetic 100", download: "100 Mbps", upload: "Varies", price: 40, note: "DSL/fiber by address" },
      { name: "Kinetic Fiber 300", download: "300 Mbps", upload: "300 Mbps", price: 50 },
      { name: "Kinetic Fiber 1 Gig", download: "1 Gbps", upload: "1 Gbps", price: 70, popular: true },
      { name: "Kinetic Fiber 2 Gig", download: "2 Gbps", upload: "2 Gbps", price: 100 },
      { name: "Kinetic Fiber 8 Gig", download: "8 Gbps", upload: "8 Gbps", price: 250 },
    ],
    pros: [
      "Multi-gig fiber in areas with few alternatives",
      "Unlimited data on all plans",
      "No annual contract required",
      "Price guarantees on many plans",
    ],
    cons: [
      "DSL speeds are limited where fiber hasn't arrived",
      "Customer service scores trail larger rivals",
      "Availability limited to 18 states",
    ],
    features: [
      { title: "Fiber upgrades", text: "Kinetic is rapidly replacing copper with fiber, adding gig speeds to rural towns." },
      { title: "Whole-home Wi-Fi", text: "Mesh extenders available so every room gets a strong signal." },
      { title: "Price lock", text: "Many plans include a multi-year price guarantee." },
      { title: "Secure Shield", text: "Optional online security suite for the household." },
    ],
    tv: {
      title: "TV with Kinetic",
      text: "Kinetic doesn't sell traditional cable TV. Pair Kinetic fiber with a live TV streaming service or satellite TV for a full entertainment setup.",
    },
    faqs: [
      { q: "Is Kinetic fiber or DSL?", a: "Both. Kinetic delivers fiber-to-the-home in a growing number of areas and DSL elsewhere. Your address determines which technology you can get." },
      { q: "How much does Kinetic internet cost?", a: "Kinetic plans start around $40/month. Fiber 1 Gig costs about $70/month, with multi-gig tiers priced higher." },
      { q: "Does Kinetic have data caps?", a: "No. Kinetic plans include unlimited data." },
      { q: "Who owns Kinetic internet?", a: "Kinetic is the consumer brand of Windstream, a long-time telecom provider serving rural and suburban America." },
    ],
  },
  {
    slug: "brightspeed",
    name: "Brightspeed",
    monogram: "BS",
    accent: "#ffb400",
    logo: "/logos/brightspeed.png",
    blurb: "Fresh fiber for rural homes",
    loader: { primary: "#ffb400", light: "#ffd24d" },
    tagline: "New fiber network built for rural and suburban homes",
    quickAnswer:
      "Brightspeed is an internet provider serving 20 states, primarily in rural and suburban communities. It offers fiber internet up to 2 Gbps with unlimited data and no annual contract, plus DSL where fiber isn't yet available.",
    intro:
      "Brightspeed took over legacy copper networks and is investing heavily in fiber — so many customers are seeing a big jump from DSL to gig speeds.",
    types: ["fiber", "dsl"],
    startingPrice: 49,
    maxSpeed: "2 Gbps",
    maxSpeedMbps: 2000,
    contract: "No annual contract",
    dataCap: "Unlimited data",
    equipment: "Wi-Fi router included on fiber",
    rating: 4.0,
    scores: [
      { label: "Speed", value: 4.1 },
      { label: "Reliability", value: 4.0 },
      { label: "Value", value: 4.2 },
      { label: "Customer service", value: 3.7 },
    ],
    coverage: "Available in 20 states, focused on rural and suburban communities.",
    bestFor: "Rural and suburban homes that finally have a fiber option",
    heroImage: images.cozyRoom,
    sideImage: images.kitchen,
    plans: [
      { name: "Brightspeed Internet", download: "Up to 140 Mbps", upload: "Varies", price: 49, note: "DSL service" },
      { name: "Brightspeed Fiber 300", download: "300 Mbps", upload: "300 Mbps", price: 49 },
      { name: "Brightspeed Fiber 500", download: "500 Mbps", upload: "500 Mbps", price: 59, popular: true },
      { name: "Brightspeed Fiber 1 Gig", download: "940 Mbps", upload: "940 Mbps", price: 69 },
      { name: "Brightspeed Fiber 2 Gig", download: "2 Gbps", upload: "2 Gbps", price: 99 },
    ],
    pros: [
      "Affordable fiber pricing",
      "Unlimited data with no contracts",
      "Wi-Fi equipment included on fiber plans",
      "Rapidly expanding fiber network",
    ],
    cons: [
      "DSL areas see much lower speeds",
      "Newer company with evolving support experience",
      "Fiber still reaching many service areas",
    ],
    features: [
      { title: "Fiber build-out", text: "Brightspeed is building fiber to millions of locations across its footprint." },
      { title: "Simple pricing", text: "Straightforward monthly rates with no annual contract." },
      { title: "Included Wi-Fi", text: "Fiber customers get a modern Wi-Fi router at no extra charge." },
      { title: "Tech support", text: "Optional premium support for setup and troubleshooting." },
    ],
    tv: {
      title: "TV with Brightspeed",
      text: "Brightspeed focuses on internet. Its fiber speeds easily support live TV streaming services for cord-cutters.",
    },
    faqs: [
      { q: "Where is Brightspeed available?", a: "Brightspeed serves parts of 20 states, mostly rural and suburban areas in the Southeast, Midwest and Mid-Atlantic." },
      { q: "How much does Brightspeed fiber cost?", a: "Brightspeed Fiber starts around $49/month for 300 Mbps, with gig service near $69/month." },
      { q: "Does Brightspeed have data caps?", a: "No. Brightspeed plans include unlimited data." },
      { q: "Is Brightspeed the same as CenturyLink?", a: "Brightspeed acquired CenturyLink's local networks in 20 states in 2022 and now operates them under the Brightspeed brand." },
    ],
  },
  {
    slug: "verizon",
    name: "Verizon",
    monogram: "VZ",
    accent: "#111111",
    logo: "/logos/verizon.png",
    logoTall: true,
    blurb: "Fios fiber & 5G Home",
    loader: { primary: "#262626", light: "#525252" },
    tagline: "Fios fiber and 5G Home with price guarantees",
    quickAnswer:
      "Verizon offers Fios fiber internet from 300 Mbps to 2 Gbps in the Northeast and Mid-Atlantic, plus 5G Home Internet in hundreds of cities nationwide. Plans have no annual contracts, no data caps, and include multi-year price guarantees with big discounts for Verizon mobile customers.",
    intro:
      "Verizon is a top choice where Fios is available, and its 5G Home Internet brings wireless broadband with guaranteed pricing to many more cities.",
    types: ["fiber", "5g"],
    startingPrice: 50,
    maxSpeed: "2 Gbps",
    maxSpeedMbps: 2000,
    contract: "No annual contract",
    dataCap: "Unlimited data",
    equipment: "Router included",
    rating: 4.6,
    scores: [
      { label: "Speed", value: 4.7 },
      { label: "Reliability", value: 4.7 },
      { label: "Value", value: 4.4 },
      { label: "Customer service", value: 4.3 },
    ],
    coverage: "Fios in 9 states plus Washington, D.C.; 5G Home Internet in hundreds of cities nationwide.",
    bestFor: "Verizon mobile customers and anyone who wants a long price guarantee",
    heroImage: images.friendsLaptops,
    sideImage: images.phoneHand,
    plans: [
      { name: "Fios 300 Mbps", download: "300 Mbps", upload: "300 Mbps", price: 50 },
      { name: "Fios 1 Gig", download: "1 Gbps", upload: "1 Gbps", price: 70, popular: true },
      { name: "Fios 2 Gig", download: "2 Gbps", upload: "2 Gbps", price: 90 },
      { name: "5G Home", download: "50–250 Mbps", upload: "Varies", price: 50, note: "Lower with Verizon mobile" },
      { name: "5G Home Plus", download: "85–250 Mbps", upload: "Varies", price: 70 },
    ],
    pros: [
      "Fios consistently ranks among the most reliable ISPs",
      "Multi-year price guarantees",
      "Large discounts for Verizon mobile customers",
      "No contracts, no data caps, router included",
    ],
    cons: [
      "Fios availability limited to the Northeast and Mid-Atlantic",
      "5G Home speeds vary by signal strength",
      "Best prices require autopay",
    ],
    features: [
      { title: "Price guarantee", text: "Lock in your rate for up to several years depending on plan." },
      { title: "Mobile + Home discount", text: "Verizon mobile customers can save significantly on Fios or 5G Home." },
      { title: "Fios TV", text: "Cable TV over fiber with hundreds of channels and a flexible Fios TV app." },
      { title: "Perks", text: "Add streaming services and extras like Disney+ bundles at a discount." },
    ],
    tv: {
      title: "Fios TV",
      text: "Fios TV packages offer 125+ to 425+ channels delivered over fiber, with Fios TV Test Drive, multi-room DVR and a streaming app. You can also pair 5G Home with YouTube TV or other streaming services.",
    },
    faqs: [
      { q: "How much is Verizon Fios?", a: "Verizon Fios starts around $50/month for 300 Mbps with autopay. Fios 1 Gig is about $70/month and 2 Gig about $90/month, with extra savings for Verizon mobile customers." },
      { q: "Is Verizon 5G Home Internet good?", a: "Verizon 5G Home typically delivers 50–250 Mbps with unlimited data and a price guarantee. Performance depends on your distance from a 5G tower." },
      { q: "Does Verizon Fios have data caps?", a: "No. Fios and 5G Home both include unlimited data." },
      { q: "Does Verizon require a contract?", a: "No. Verizon home internet plans are month-to-month with no annual contract." },
      { q: "Is Verizon Fios real fiber?", a: "Yes. Fios is a 100% fiber-optic network delivering symmetrical upload and download speeds." },
    ],
  },
  {
    slug: "frontier",
    name: "Frontier",
    monogram: "FR",
    accent: "#ff0037",
    logo: "/logos/frontier.png",
    blurb: "Pure fiber up to 7 Gig",
    loader: { primary: "#ff0037", light: "#ff5577" },
    tagline: "100% fiber plans up to 7 Gbps",
    quickAnswer:
      "Frontier Communications offers Frontier Fiber internet with speeds from 500 Mbps to 7 Gbps in 25 states. Fiber plans include unlimited data, no annual contract, a Wi-Fi router and symmetrical upload speeds, making Frontier one of the fastest-growing fiber ISPs.",
    intro:
      "Frontier has transformed from a DSL company into a fiber-first provider, offering some of the fastest residential speeds available in the U.S.",
    types: ["fiber", "dsl"],
    startingPrice: 45,
    maxSpeed: "7 Gbps",
    maxSpeedMbps: 7000,
    contract: "No annual contract",
    dataCap: "Unlimited data",
    equipment: "Wi-Fi router included",
    rating: 4.4,
    scores: [
      { label: "Speed", value: 4.7 },
      { label: "Reliability", value: 4.4 },
      { label: "Value", value: 4.4 },
      { label: "Customer service", value: 3.9 },
    ],
    coverage: "Serves customers in 25 states, with fiber passing millions of homes.",
    bestFor: "Speed seekers who want multi-gig fiber at competitive prices",
    heroImage: images.lightWaves,
    sideImage: images.gaming,
    plans: [
      { name: "Fiber 500", download: "500 Mbps", upload: "500 Mbps", price: 45 },
      { name: "Fiber 1 Gig", download: "1 Gbps", upload: "1 Gbps", price: 65, popular: true },
      { name: "Fiber 2 Gig", download: "2 Gbps", upload: "2 Gbps", price: 95 },
      { name: "Fiber 5 Gig", download: "5 Gbps", upload: "5 Gbps", price: 125 },
      { name: "Fiber 7 Gig", download: "7 Gbps", upload: "7 Gbps", price: 155 },
    ],
    pros: [
      "Symmetrical multi-gig fiber up to 7 Gbps",
      "Unlimited data and no annual contract",
      "Wi-Fi router included; Wi-Fi 7 on top tiers",
      "Competitive gig pricing",
    ],
    cons: [
      "DSL-only areas remain slow",
      "Support experience varies by region",
      "Top tiers need Wi-Fi 7 devices to benefit fully",
    ],
    features: [
      { title: "Multi-gig fiber", text: "Speeds up to 7 Gbps for power users and large smart homes." },
      { title: "Wi-Fi 7 ready", text: "Premium tiers include next-gen Wi-Fi equipment." },
      { title: "Whole-home Wi-Fi", text: "Add extenders for full coverage in bigger homes." },
      { title: "Premium tech pro", text: "Optional expert support for devices and networking." },
    ],
    tv: {
      title: "TV with Frontier",
      text: "Frontier partners with streaming TV services. Its fiber speeds make it easy to run multiple 4K streams at once.",
    },
    faqs: [
      { q: "How much is Frontier Fiber?", a: "Frontier Fiber 500 starts around $45/month and Fiber 1 Gig around $65/month with autopay. Multi-gig plans cost more." },
      { q: "Does Frontier have data caps?", a: "No. Frontier Fiber includes unlimited data." },
      { q: "Is Frontier internet good?", a: "Frontier Fiber is fast and reliable with symmetrical speeds. Frontier's legacy DSL service is much slower, so check which technology serves your address." },
      { q: "Does Frontier require a contract?", a: "No. Frontier Fiber plans don't require an annual contract." },
    ],
  },
  {
    slug: "hughesnet",
    name: "HughesNet",
    monogram: "HN",
    accent: "#005bac",
    logo: "/logos/hughesnet.png",
    blurb: "Satellite internet, almost anywhere",
    loader: { primary: "#005bac", light: "#0a9bff" },
    tagline: "Satellite internet that reaches almost anywhere",
    quickAnswer:
      "HughesNet is a satellite internet provider available in all 50 states, including remote rural areas without cable or fiber. Plans offer download speeds of 50–100 Mbps with no hard data limits, though higher latency makes satellite less suited to competitive gaming.",
    intro:
      "When wired options aren't available, HughesNet provides dependable coverage almost anywhere with a clear view of the southern sky.",
    types: ["satellite"],
    startingPrice: 50,
    maxSpeed: "100 Mbps",
    maxSpeedMbps: 100,
    contract: "24-month agreement or no-contract option",
    dataCap: "No hard data limits (priority data applies)",
    equipment: "Satellite dish & Wi-Fi modem (lease or purchase)",
    rating: 3.7,
    scores: [
      { label: "Speed", value: 3.4 },
      { label: "Reliability", value: 3.8 },
      { label: "Value", value: 3.6 },
      { label: "Customer service", value: 3.8 },
    ],
    coverage: "Available across all 50 states, including remote and rural areas.",
    bestFor: "Rural homes without access to cable, fiber or 5G",
    heroImage: images.ruralField,
    sideImage: images.earthSatellite,
    plans: [
      { name: "HughesNet Select", download: "50 Mbps", upload: "5 Mbps", price: 50 },
      { name: "HughesNet Elite", download: "100 Mbps", upload: "5 Mbps", price: 65, popular: true },
      { name: "HughesNet Fusion", download: "100 Mbps", upload: "5 Mbps", price: 80, note: "Hybrid satellite + wireless for lower latency" },
    ],
    pros: [
      "Available virtually everywhere in the U.S.",
      "No hard data caps",
      "Fusion plans reduce latency for smoother browsing",
      "Professional installation included",
    ],
    cons: [
      "Higher latency than wired connections",
      "Speeds may slow after priority data is used",
      "Weather can affect signal",
    ],
    features: [
      { title: "Nationwide coverage", text: "If you can see the southern sky, you can likely get HughesNet." },
      { title: "Fusion technology", text: "Blends satellite with wireless to cut latency for video calls and browsing." },
      { title: "Built-in Wi-Fi", text: "The HughesNet modem includes Wi-Fi for whole-home coverage." },
      { title: "Bonus data", text: "Off-peak hours offer extra data allowances for big downloads." },
    ],
    tv: {
      title: "TV with HughesNet",
      text: "Satellite internet data is best saved for browsing and calls. For TV, rural customers often pair HughesNet with satellite TV service.",
    },
    faqs: [
      { q: "How fast is HughesNet?", a: "HughesNet plans offer 50 to 100 Mbps download speeds and about 5 Mbps upload." },
      { q: "Does HughesNet have data caps?", a: "HughesNet has no hard data limits. Each plan includes priority data; after that, speeds may be reduced during congestion." },
      { q: "Is HughesNet good for gaming?", a: "Satellite latency makes fast-paced online gaming difficult. HughesNet Fusion reduces latency, but wired or 5G internet is better for gaming." },
      { q: "Does HughesNet require a contract?", a: "HughesNet typically uses a 24-month service agreement, with a no-contract option available for an upfront equipment fee." },
    ],
  },
  {
    slug: "optimum",
    name: "Optimum",
    monogram: "OP",
    accent: "#111111",
    logo: "/logos/optimum.png",
    blurb: "Fiber, cable & TV bundles",
    loader: { primary: "#262626", light: "#525252" },
    tagline: "Fiber and cable up to 8 Gbps in the Northeast & beyond",
    quickAnswer:
      "Optimum offers fiber and cable internet from 300 Mbps up to 8 Gbps across 21 states, with unlimited data, no annual contracts and a price guarantee on many plans. Optimum also bundles TV, mobile and home phone service.",
    intro:
      "Optimum pairs a large cable footprint with a growing fiber network and flexible bundles, making it a solid all-in-one provider where it's available.",
    types: ["fiber", "cable"],
    startingPrice: 40,
    maxSpeed: "8 Gbps",
    maxSpeedMbps: 8000,
    contract: "No annual contract",
    dataCap: "Unlimited data",
    equipment: "Wi-Fi router included",
    rating: 4.0,
    scores: [
      { label: "Speed", value: 4.3 },
      { label: "Reliability", value: 4.0 },
      { label: "Value", value: 4.2 },
      { label: "Customer service", value: 3.6 },
    ],
    coverage: "Available in 21 states with its largest presence in the New York metro area.",
    bestFor: "Households wanting internet, TV and mobile from one company",
    heroImage: images.livingRoom,
    sideImage: images.bedroom,
    plans: [
      { name: "Optimum 300", download: "300 Mbps", upload: "Up to 300 Mbps on fiber", price: 40 },
      { name: "Optimum 500", download: "500 Mbps", upload: "Up to 500 Mbps on fiber", price: 60 },
      { name: "Optimum 1 Gig", download: "1 Gbps", upload: "Up to 1 Gbps on fiber", price: 80, popular: true },
      { name: "Optimum 2 Gig", download: "2 Gbps", upload: "2 Gbps (fiber)", price: 100 },
      { name: "Optimum 8 Gig", download: "8 Gbps", upload: "8 Gbps (fiber)", price: 180 },
    ],
    pros: [
      "Low starting price",
      "Fiber tiers up to 8 Gbps",
      "Unlimited data, no annual contract",
      "Flexible TV and mobile bundles",
    ],
    cons: [
      "Cable plans have slower uploads than fiber",
      "Customer service ratings are mixed",
      "Some fees for equipment and TV add up",
    ],
    features: [
      { title: "Fiber & cable", text: "Choose fiber where available or dependable cable elsewhere." },
      { title: "Optimum TV", text: "Packages from basic local channels to premium entertainment." },
      { title: "Optimum Mobile", text: "Save when you bundle unlimited mobile lines." },
      { title: "Whole-home Wi-Fi", text: "Wi-Fi extenders available for large homes." },
    ],
    tv: {
      title: "Optimum TV bundles",
      text: "Optimum TV offers packages with local channels, sports and entertainment networks, plus cloud DVR and the Optimum TV app.",
    },
    faqs: [
      { q: "How much is Optimum internet?", a: "Optimum 300 starts around $40/month, with 1 Gig around $80/month. Prices vary by technology and location." },
      { q: "Is Optimum fiber or cable?", a: "Both. Optimum operates a hybrid fiber-coax cable network and a growing fiber-to-the-home network." },
      { q: "Does Optimum have data caps?", a: "No. Optimum internet plans include unlimited data." },
      { q: "Can I bundle Optimum internet and TV?", a: "Yes. Optimum offers internet, TV, mobile and home phone bundles." },
    ],
  },
];

export const getProvider = (slug: string) => providers.find((p) => p.slug === slug);
