export const site = {
  name: "Internet Cable TV Offers",
  shortName: "ICTO",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://internetcabletvoffer.vercel.app").replace(/\/$/, ""),
  tagline: "Compare internet & TV deals from America's top providers",
  description:
    "Internet Cable TV Offers helps you compare internet, cable TV and home phone deals from AT&T, Spectrum, Verizon, Frontier, Optimum, HughesNet and more — plans, prices, speeds and honest guidance in one place.",
  email: "support@internetcabletvoffers.com",
  lastReviewed: "September 2026",
  lastReviewedISO: "2026-09-24",
};

export const pricingDisclaimer =
  "Prices and speeds shown are representative starting rates reviewed in September 2026. Offers often require autopay and paperless billing, exclude taxes and fees, and vary by address. Always confirm current pricing and availability with the provider before ordering.";

export const trademarkDisclaimer =
  "Internet Cable TV Offers is an independent comparison website and is not owned by, or an official site of, any internet or TV provider. All product names, logos and brands are property of their respective owners and are used for identification purposes only.";

export type NavLink = { label: string; href: string; description?: string };

export const internetNav: NavLink[] = [
  { label: "Internet Providers", href: "/internet-providers", description: "Compare every major provider side by side" },
  { label: "Fiber Internet", href: "/internet/fiber", description: "Fastest speeds, symmetrical uploads" },
  { label: "5G Home Internet", href: "/internet/5g-home-internet", description: "Wireless, plug-and-play broadband" },
  { label: "Cable Internet", href: "/internet/cable", description: "Widely available, fast downloads" },
  { label: "DSL Internet", href: "/internet/dsl", description: "Budget service over phone lines" },
  { label: "Fixed Wireless", href: "/internet/fixed-wireless", description: "Tower-to-home rural broadband" },
  { label: "Satellite Internet", href: "/internet/satellite", description: "Coverage almost everywhere" },
  { label: "No-Contract Plans", href: "/internet/no-contract", description: "Month-to-month freedom" },
];

export const resourceNav: NavLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  livingTv: "1593784991095-a205069470b6",
  livingRoom: "1586023492125-27b2c045efd7",
  modernHome: "1600585154340-be6161a56a0c",
  kitchen: "1484154218962-a197022b5858",
  homeOffice: "1600494603989-9650cf6ddd3d",
  laptopDesk: "1516321318423-f06f85e504b3",
  friendsLaptops: "1522202176988-66273c2fd55f",
  gaming: "1542751371-adc38448a05e",
  dataCenter: "1558494949-ef010cbdcc31",
  ethernet: "1544197150-b99a580bb7a8",
  router: "1606904825846-647eb07f5be2",
  earthLights: "1451187580459-43490279c0fa",
  earthSatellite: "1446776811953-b23d57bd21aa",
  lightWaves: "1617791160505-6f00504e3519",
  phoneHand: "1554260570-e9689a3418b8",
  phoneApps: "1512941937669-90a1b58e7e9c",
  ruralField: "1500382017468-9049fed747ef",
  city: "1449824913935-59a10b8d2000",
  teamOffice: "1600880292203-757bb62b4baf",
  cozyRoom: "1513694203232-719a280e022f",
  bedroom: "1586105251261-72a756497a11",
  smartLock: "1558002038-1055907df827",
  workspace: "1556761175-5973dc0f32e7",
};
