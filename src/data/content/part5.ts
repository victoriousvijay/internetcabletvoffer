import type { ArticleSection } from "./types";

/**
 * Research-based sections (company news, network size, satisfaction data) added September 2026.
 * Facts come from provider press releases, SEC filings and the 2026 ACSI telecom study; copy is original.
 * Re-check these facts when refreshing content — they date quickly.
 */
export const researchSections: Record<string, ArticleSection[]> = {
  att: [
    {
      id: "att-network-2026",
      h2: "How big is AT&T's fiber network in 2026?",
      body: [
        "AT&T is the largest fiber internet provider in the country, and its network grew sharply in 2026. On February 2, 2026, AT&T completed its $5.75 billion purchase of Lumen's consumer fiber business, adding about 1.1 million fiber customers and more than 4 million fiber-ready homes and businesses across 11 states. Former Quantum Fiber and CenturyLink fiber customers in those areas are being moved onto AT&T Fiber.",
        "AT&T is also building faster than ever. The company expects to connect fiber to roughly 4 million new locations a year by the end of 2026 and about 5 million a year through the end of the decade, with a goal of around 40 million fiber passings by year-end 2026. If AT&T Fiber isn't on your street yet, there's a good chance it's on the way.",
      ],
      bullets: [
        "Lumen consumer fiber acquisition closed February 2026",
        "More than 37 million fiber passings in 2026 and growing",
        "Former Quantum Fiber customers transitioning to AT&T Fiber",
      ],
    },
    {
      id: "att-satisfaction",
      h2: "Is AT&T Fiber a good provider? What customers say",
      body: [
        "Independent research consistently puts AT&T Fiber at or near the top for customer satisfaction. In the 2026 American Customer Satisfaction Index (ACSI) telecommunications study, AT&T Fiber was the top-ranked fiber provider nationwide, while fiber internet overall scored higher than cable, DSL and other non-fiber services.",
        "Customers typically point to consistent speeds, equal upload and download performance and the simplicity of no annual contracts and no data caps. That combination is why so many households choose AT&T Fiber when it's available.",
      ],
    },
    {
      id: "att-internet-air-growth",
      h2: "AT&T Internet Air keeps growing",
      body: [
        "AT&T Internet Air, the company's wireless home internet service, passed 2 million subscribers in July 2026, adding its second million customers in about half the time it took to reach the first. More than half of Internet Air customers also use AT&T for their mobile phones, which is where the biggest bundle savings come from.",
        "Internet Air is offered across the contiguous United States, though availability depends on your exact address and local network capacity. Since August 2026, customers can also buy Internet Air in AT&T stores and leave with the equipment the same day.",
      ],
    },
  ],

  spectrum: [
    {
      id: "spectrum-cox",
      h2: "Spectrum and Cox are now one company",
      body: [
        "Charter Communications, the company behind Spectrum, completed its roughly $34.5 billion combination with Cox Communications on August 20, 2026. Spectrum is now the brand for home and business customers across the combined footprint, reaching more than 70 million homes and businesses in 45 states and serving about 37 million customers.",
        "For former Cox customers, service keeps working as before while Spectrum pricing and packages roll out across Cox markets starting in mid-September 2026. Cox internet customers who don't already have Cox Mobile can get one free Spectrum mobile line for a year, and the combined company has committed to 24/7 U.S.-based customer service and same-day technician visits when requested.",
      ],
      bullets: [
        "Charter–Cox combination closed August 20, 2026",
        "Spectrum now available in 45 states",
        "About 70 million homes and businesses in the combined network",
        "Free mobile line for a year for eligible former Cox internet customers",
      ],
    },
    {
      id: "spectrum-what-it-means",
      h2: "What the merger means for you",
      body: [
        "If you live in a former Cox area, you'll gradually see Spectrum's simple lineup of Internet 100, Internet 500 and Internet 1 Gig, with no data caps and no contracts. If you're already a Spectrum customer, the larger network gives Spectrum more scale to keep upgrading speeds and expanding its fiber-powered network. Either way, call us to confirm which Spectrum plans and promotions are available at your address today.",
      ],
    },
  ],

  kinetic: [
    {
      id: "kinetic-2026",
      h2: "Kinetic's fiber expansion in 2026",
      body: [
        "Kinetic is now a business unit of Uniti, following Uniti's combination with Windstream. It serves about 1,400 markets across 18 states in the Southwest, Southeast, Midwest and Northeast, with roughly 11.5 million miles of fiber strands in its network.",
        "Kinetic passed the milestone of 2 million homes reachable by fiber and has kept building through 2026, with new fiber reaching thousands of homes in Texas, Kentucky, Oklahoma and North Carolina, including about 38,000 fiber-ready homes in the Concord, North Carolina area. The company expects its fiber network to reach about 3.5 million homes and businesses by 2029.",
      ],
      bullets: [
        "About 2.1 million homes passed with Kinetic Fiber",
        "18 states and about 1,400 markets",
        "New 2026 fiber builds in Texas, Kentucky, Oklahoma and North Carolina",
        "Target of 3.5 million fiber locations by 2029",
      ],
    },
    {
      id: "kinetic-dsl-to-fiber",
      h2: "Why Kinetic is replacing DSL with fiber",
      body: [
        "Many Kinetic customers have relied on DSL over copper phone lines for years. Fiber replaces those lines with glass strands that carry far more data, so a home that once topped out at modest DSL speeds can jump to 300 Mbps, 1 Gig or 2 Gig. Because new neighborhoods are added every quarter, it's worth checking again even if fiber wasn't available at your address last year.",
      ],
    },
  ],

  brightspeed: [
    {
      id: "brightspeed-2026",
      h2: "Brightspeed's fiber build: over 3 million locations",
      body: [
        "In April 2026, Brightspeed announced it had passed 3 million fiber-enabled homes and businesses across its 20-state footprint, its second year in a row of building more than 1 million new fiber locations. The company's goal is to bring fiber to more than 5 million locations.",
        "Progress varies by state. By spring 2026, Brightspeed's Indiana fiber build was about 75 percent complete, with nearly 200,000 residents able to order fiber, and its Virginia build was about 60 percent complete, reaching nearly 122,000 families and businesses.",
      ],
      bullets: [
        "3 million+ fiber-enabled locations (April 2026)",
        "Two straight years of 1 million+ new fiber passings",
        "Goal of 5 million+ fiber locations in 20 states",
      ],
    },
    {
      id: "brightspeed-rural",
      h2: "Why Brightspeed matters for rural and suburban homes",
      body: [
        "Brightspeed focuses on the small towns and suburbs that national cable companies have often skipped. For many of these communities, Brightspeed Fiber is the first chance at symmetrical, gig-class internet, replacing DSL service that struggled with streaming, video calls and multiple devices. If you've been waiting for a real upgrade, Brightspeed's rapid build-out means it may now be available at your address.",
      ],
    },
  ],

  verizon: [
    {
      id: "verizon-frontier",
      h2: "Verizon now includes Frontier Fiber",
      body: [
        "Verizon completed its $20 billion acquisition of Frontier Communications on January 20, 2026. Together, Verizon Fios and Frontier Fiber reach almost 30 million fiber passings across 31 states and Washington, D.C., making Verizon one of the largest fiber providers in the country.",
        "Frontier Fiber customers are being moved to Verizon Fios over time. Until then, they keep their current equipment, app and billing, and Verizon has said costs don't change because of the acquisition. For households in former Frontier areas, the deal also opens the door to Verizon's Mobile + Home bundle savings.",
      ],
      bullets: [
        "Frontier acquisition closed January 20, 2026",
        "About 30 million fiber passings in 31 states + D.C.",
        "Frontier Fiber customers transitioning to Fios",
      ],
    },
    {
      id: "verizon-satisfaction",
      h2: "How Verizon rates with customers",
      body: [
        "Verizon scores well in independent satisfaction research. In the 2026 ACSI telecommunications study, Verizon 5G Home Internet rose 3 percent to a score of 79 and ranked first among non-fiber internet providers, while Fios is consistently rated among the best fiber services. Customers highlight Fios's reliability, symmetrical speeds and long price locks.",
      ],
    },
  ],

  frontier: [
    {
      id: "frontier-verizon",
      h2: "Frontier is now a Verizon company",
      body: [
        "On January 20, 2026, Verizon completed its $20 billion acquisition of Frontier Communications. Frontier now operates as Frontier, a Verizon Company, and Frontier Fiber customers will be transitioned to Verizon Fios over the coming months.",
        "For customers, service continues as normal: you keep your equipment, the Frontier app and your billing, and Verizon has said costs don't change because of the deal. That's also why Frontier plans now show lower prices for customers who have Verizon mobile service.",
      ],
      bullets: [
        "Acquisition closed January 20, 2026",
        "Combined Verizon + Frontier fiber: about 30 million passings",
        "Lower Frontier prices with Verizon mobile",
      ],
    },
    {
      id: "frontier-why-fiber",
      h2: "Why Frontier Fiber is worth considering",
      body: [
        "Frontier spent years replacing its older copper network with fiber-to-the-home, and every current Frontier Fiber plan delivers equal upload and download speeds. With Wi-Fi 7 equipment, Visa reward cards and four- to five-year price guarantees, Frontier Fiber is one of the strongest fiber offers available where it's built.",
      ],
    },
  ],

  optimum: [
    {
      id: "optimum-network",
      h2: "Optimum's network in 2026",
      body: [
        "Optimum is the brand of Optimum Communications (formerly Altice USA). At the start of 2026, its network passed about 10 million homes and businesses, including roughly 3.1 million passed with 100% fiber, concentrated in New York, New Jersey and Connecticut. Overall, Optimum offers cable and fiber internet to more than 14 million people in 21 states, with its largest footprints in West Virginia, New York and New Jersey.",
        "Optimum continues to upgrade neighborhoods from cable to fiber, which is why its current plans focus on fiber speeds from 300 Mbps to 1 Gig with long price locks.",
      ],
      bullets: ["About 10 million total passings", "About 3.1 million fiber passings", "21 states, strongest in WV, NY and NJ"],
    },
  ],

  earthlink: [
    {
      id: "earthlink-company",
      h2: "Who owns EarthLink?",
      body: [
        "EarthLink is a privately held internet provider headquartered in Atlanta, Georgia, and owned by Trive Capital. One of the original internet service providers from the 1990s, EarthLink today partners with major networks such as AT&T, Lumen and Verizon to deliver fiber and other connections under the EarthLink brand, which is why it's available in so many parts of the country.",
        "EarthLink has continued to invest in customer support, including a new customer service center in Norton, Virginia, reinforcing its focus on U.S.-based help.",
      ],
    },
    {
      id: "earthlink-vs",
      h2: "EarthLink vs. buying fiber directly from the network owner",
      body: [
        "Because EarthLink uses partner fiber networks, the physical connection is often the same fiber line a larger carrier would use. What changes is the service: EarthLink offers its own pricing, 12-month price terms, privacy commitments and support. For shoppers who value privacy or want an alternative to a big carrier, that can make EarthLink the better fit.",
      ],
    },
  ],

  hughesnet: [
    {
      id: "hughesnet-jupiter3",
      h2: "What is the Jupiter 3 satellite?",
      body: [
        "HughesNet's current plans run on Jupiter 3, one of the highest-capacity satellites ever built. It entered commercial service on December 19, 2023, from its position at 95° West and uses more than 300 spot beams to deliver speeds up to 100 Mbps across the United States and much of Latin America.",
        "Jupiter 3's extra capacity is what made today's faster plans possible, with speeds up to 100 Mbps on Elite and more priority data than earlier generations of HughesNet service.",
      ],
      bullets: ["In service since December 2023", "300+ spot beams", "Speeds up to 100 Mbps"],
    },
    {
      id: "hughesnet-vs-alternatives",
      h2: "HughesNet vs. other rural internet options",
      body: [
        "Rural households now have more choices than ever, including fixed wireless, 5G home internet and low-earth-orbit satellite services. HughesNet's advantages are its wide availability, predictable monthly pricing starting at $39.99/mo and professional installation. If you can get fiber, cable or 5G home internet at your address, those usually offer lower latency; if not, HughesNet remains a dependable way to get online almost anywhere.",
      ],
    },
  ],
};
