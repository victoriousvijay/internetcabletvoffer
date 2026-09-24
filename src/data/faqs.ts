import type { Faq } from "./providers";

export const homeFaqs: Faq[] = [
  { q: "How do I find the best internet provider for my home?", a: "Start with what's available at your address, then compare connection type (fiber is usually best), price after promotions, data caps, contract terms and upload speed. Our provider and internet-type guides walk you through each factor." },
  { q: "How much internet speed do I need?", a: "Most households do well with 300–500 Mbps. Light users can get by with 100 Mbps, while homes with many 4K streams, gamers or remote workers benefit from 1 Gbps or more." },
  { q: "What is the cheapest way to get internet and cable TV?", a: "Bundling internet with TV from providers like Spectrum, Optimum or Verizon Fios usually lowers the combined price. Many households also save by pairing fast internet with a live TV streaming service." },
  { q: "Which type of internet is the fastest?", a: "Fiber internet is the fastest and most reliable, with multi-gig plans up to 8 Gbps and symmetrical upload speeds. Cable is next, followed by 5G home internet, fixed wireless, DSL and satellite." },
  { q: "Is Internet Cable TV Offers a provider?", a: "No. Internet Cable TV Offers is an independent comparison site. We research plans and pricing so you can make an informed decision, then you order directly from the provider." },
];

export const generalFaqs: { group: string; items: Faq[] }[] = [
  {
    group: "Choosing a provider",
    items: [
      ...homeFaqs.slice(0, 2),
      { q: "What should I compare besides price?", a: "Look at upload speed, data caps, contract length, equipment fees, price increases after the promo period, and customer satisfaction scores." },
      { q: "Can I switch internet providers easily?", a: "Yes. Schedule the new service first, confirm it works, then cancel the old provider and return any equipment. Some providers offer contract buyouts." },
    ],
  },
  {
    group: "Internet types",
    items: [
      homeFaqs[3],
      { q: "What's the difference between 5G home internet and fixed wireless?", a: "5G home internet is a type of fixed wireless that uses a mobile carrier's cellular network. Traditional fixed wireless uses dedicated towers and a rooftop antenna." },
      { q: "Is satellite internet good for remote work?", a: "It works for email and most video calls, but higher latency can cause delays. Fixed wireless or 5G home internet is better if available." },
    ],
  },
  {
    group: "TV & bundles",
    items: [
      homeFaqs[2],
      { q: "Do I need cable TV to get cable internet?", a: "No. Internet can be purchased on its own from every provider we cover." },
      { q: "Can I stream TV instead of paying for cable?", a: "Yes. With 100 Mbps or more, you can stream live TV services and on-demand apps on several screens at once." },
    ],
  },
  {
    group: "About our site",
    items: [
      homeFaqs[4],
      { q: "How do you get your pricing data?", a: "We review providers' published plans and promotional offers regularly. Prices change often, so always confirm the final price with the provider." },
      { q: "How do you make money?", a: "We may earn a commission when you order through links on our site. This never changes the price you pay, and it doesn't influence our ratings." },
    ],
  },
];
