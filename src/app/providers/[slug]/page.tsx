import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/ui/Reveal";
import { ZipSearch } from "@/components/ui/ZipSearch";
import { SubNav } from "@/components/sections/SubNav";
import { ThemedHero } from "@/components/themed/ThemedHero";
import { Features, Plans, Ratings, TvBlock } from "@/components/themed/ProviderSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProvider, providers } from "@/data/providers";
import { typeLabels } from "@/data/internetTypes";
import { providerThemes, themeVars, type PageTheme } from "@/data/themes";
import { breadcrumbSchema, faqSchema, pageMeta, abs } from "@/lib/schema";
import { img, trademarkDisclaimer } from "@/lib/site";

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProvider(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name} Internet Plans, Prices & Deals (2026)`,
    description: `${p.name} internet plans start at $${p.startingPrice}/mo with speeds up to ${p.maxSpeed}. Compare ${p.name} plans, pricing, pros & cons, TV bundles and FAQs.`,
    path: `/providers/${p.slug}`,
    image: img(p.heroImage, 1200),
  });
}

const labels: Record<PageTheme["order"][number], string> = {
  overview: "Overview",
  plans: "Plans",
  features: "Features",
  ratings: "Ratings",
  tv: "TV",
  faqs: "FAQs",
};

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProvider(slug);
  if (!p) notFound();
  const theme = providerThemes[p.slug];
  const dark = theme.heroDark;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Internet Providers", path: "/internet-providers" },
    { name: p.name, path: `/providers/${p.slug}` },
  ];

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${p.name} Internet`,
    serviceType: "Internet service",
    provider: { "@type": "Organization", name: p.name, logo: abs(p.logo) },
    areaServed: { "@type": "Country", name: "United States" },
    description: p.quickAnswer,
    url: abs(`/providers/${p.slug}`),
    offers: p.plans.map((pl) => ({ "@type": "Offer", name: pl.name, price: pl.price, priceCurrency: "USD", description: `${pl.download} download` })),
  };

  const sections: Record<PageTheme["order"][number], React.ReactNode> = {
    overview: (
      <section id="overview" className="container-x scroll-mt-40 pt-10 sm:pt-14">
        <QuickAnswer
          text={p.quickAnswer}
          facts={[
            { label: "Starting price", value: `$${p.startingPrice}/mo` },
            { label: "Max speed", value: p.maxSpeed },
            { label: "Data", value: p.dataCap },
            { label: "Contract", value: p.contract },
          ]}
        />
      </section>
    ),
    plans: <Plans p={p} theme={theme} />,
    features: <Features p={p} theme={theme} />,
    ratings: <Ratings p={p} />,
    tv: <TvBlock p={p} />,
    faqs: (
      <section id="faqs" className="container-x scroll-mt-40 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title={`${p.name} internet FAQs`} text={`Quick answers about ${p.name} pricing, data caps, contracts and more.`} />
          <FaqList faqs={p.faqs} />
        </div>
      </section>
    ),
  };

  return (
    <div style={themeVars(theme)}>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(p.faqs), service]} />

      <ThemedHero
        theme={theme}
        crumbs={crumbs}
        title={`${p.name} Internet Plans & Deals`}
        intro={p.intro}
        image={p.heroImage}
        imageAlt={`Home internet from ${p.name}`}
        logo={{ src: p.logo, alt: `${p.name} logo`, tall: p.logoTall }}
        chips={p.types.map((t) => typeLabels[t])}
        stats={[
          { label: "Starting at", value: `$${p.startingPrice}/mo` },
          { label: "Top speed", value: p.maxSpeed },
          { label: "Contract", value: p.contract.toLowerCase().startsWith("no") ? "None" : "Price lock" },
          { label: "Our rating", value: `${p.rating.toFixed(1)} / 5` },
        ]}
        primary={{ href: "#plans", label: `View ${p.name} plans` }}
        secondary={{ href: "#availability", label: "Check availability" }}
        topline={
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${dark ? "bg-white/10 ring-1 ring-white/15" : "bg-white ring-1 ring-black/5"}`}>
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {p.rating.toFixed(1)}
            <span className={`font-medium ${dark ? "text-white/60" : "text-slate-500"}`}>editor rating</span>
          </span>
        }
      />

      <div>
        <SubNav items={theme.order.map((id) => ({ id, label: labels[id] }))} />
        {theme.order.map((id) => (
          <div key={id}>{sections[id]}</div>
        ))}

        <section id="availability" className="container-x scroll-mt-32 py-16 sm:py-24">
          <Reveal className="relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12">
            <div className="absolute inset-0" style={{ background: theme.heroDark ? theme.heroBg : "var(--acc-ink)" }} />
            <div className="relative grid grid-cols-1 items-center gap-8 text-white lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Is {p.name} available at your address?</h2>
                <p className="mt-3 text-white/75">Enter your ZIP code to check {p.name} plans near you.</p>
              </div>
              <ZipSearch compact provider={p.name} />
            </div>
          </Reveal>
          <p className="mt-6 text-xs leading-relaxed text-slate-500">{trademarkDisclaimer}</p>
        </section>
      </div>
    </div>
  );
}
