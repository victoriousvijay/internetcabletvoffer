import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { extraSections } from "./part4";
import { researchSections } from "./part5";
import type { Article, ArticleSection } from "./types";
import { providers } from "../providers";
import { money } from "../providerPlans";

/** Data-driven sections so every guide lists each plan and the key facts in plain text. */
function autoSections(slug: string): ArticleSection[] {
  const p = providers.find((x) => x.slug === slug);
  if (!p) return [];
  return [
    {
      id: "compare-plans",
      h2: `${p.name} plans compared: speed and price`,
      body: [`Here is every ${p.name} plan side by side so you can quickly match speed to budget. Prices are the current promotional rates and may require AutoPay; taxes and fees are extra.`],
      bullets: p.plans.map(
        (pl) => `${pl.tier}: ${pl.download} download${pl.upload !== "Varies" ? `, ${pl.upload} upload` : ""}, ${pl.price !== undefined ? `${money(pl.price)}/mo` : "call for pricing"}. ${pl.desc}`,
      ),
    },
    {
      id: "key-facts",
      h2: `${p.name} internet key facts`,
      body: [`${p.intro} Here are the essentials to know before you order.`],
      bullets: [
        `Starting price: ${money(p.startingPrice)}/mo`,
        `Top speed: ${p.maxSpeed}`,
        `Contract: ${p.contract}`,
        `Data: ${p.dataCap}`,
        `Equipment: ${p.equipment}`,
        `Coverage: ${p.coverage}`,
        `Best for: ${p.bestFor}`,
      ],
    },
  ];
}

export type { Article, ArticleSection } from "./types";

/** Base guides with the extra sections inserted before the closing "availability" section. */
const base: Record<string, Article> = { ...part1, ...part2, ...part3 };

export const articles: Record<string, Article> = Object.fromEntries(
  Object.entries(base).map(([slug, a]) => {
    const extra = [...autoSections(slug), ...(researchSections[slug] ?? []), ...(extraSections[slug] ?? [])];
    const i = a.sections.findIndex((s) => s.id === "availability");
    const sections = i >= 0 ? [...a.sections.slice(0, i), ...extra, ...a.sections.slice(i)] : [...a.sections, ...extra];
    return [slug, { ...a, sections }];
  }),
);
