import { providers } from "@/data/providers";
import { internetTypes } from "@/data/internetTypes";
import { site, pricingDisclaimer } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Pricing last reviewed: ${site.lastReviewed}. ${pricingDisclaimer}`,
    "",
    "## Internet types",
    ...internetTypes.map((t) => `- [${t.name}](${site.url}/internet/${t.slug}): ${t.quickAnswer}`),
    "",
    "## Providers",
    ...providers.map(
      (p) => `- [${p.name}](${site.url}/providers/${p.slug}): from $${p.startingPrice}/mo, up to ${p.maxSpeed}; ${p.contract}; ${p.dataCap}. ${p.quickAnswer}`,
    ),
    "",
    "## Other",
    `- [Compare all providers](${site.url}/internet-providers)`,
    `- [FAQs](${site.url}/faqs)`,
    `- [About](${site.url}/about)`,
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
