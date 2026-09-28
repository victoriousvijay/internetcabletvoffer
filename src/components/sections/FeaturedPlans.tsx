import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { providers } from "@/data/providers";
import { providerThemes, themeVars } from "@/data/themes";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { PlanCard } from "./PlanCard";

/** Hand-picked best-value plans shown on the home page, each in its provider's colors. */
const picks: { slug: string; tier: string }[] = [
  { slug: "att", tier: "AT&T Internet 1000" },
  { slug: "spectrum", tier: "Internet 500" },
  { slug: "frontier", tier: "Fiber 1 Gig" },
  { slug: "verizon", tier: "Fios 1 Gig" },
];

export function FeaturedPlans() {
  const items = picks.flatMap(({ slug, tier }) => {
    const p = providers.find((x) => x.slug === slug);
    const plan = p?.plans.find((pl) => pl.tier === tier);
    return p && plan ? [{ p, plan }] : [];
  });
  return (
    <>
      <Stagger className="snap-row no-scrollbar -mx-4 flex gap-5 overflow-x-auto px-4 pb-4 pt-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 xl:grid-cols-4">
        {items.map(({ p, plan }) => (
          <StaggerItem key={p.slug} className="w-[86%] shrink-0 sm:w-auto" >
            <div className="flex h-full flex-col" style={themeVars(providerThemes[p.slug])}>
              <PlanCard plan={{ ...plan, popular: false, badge: plan.badge }} logo={{ src: p.logo, alt: `${p.name} logo` }} />
              <Link href={`/providers/${p.slug}#plans`} className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-navy">
                All {p.name} plans <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}
