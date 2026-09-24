import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, Check, Flame, Gauge, MapPinned, Router, ShieldCheck, Sparkles, Tv, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProviderBadge } from "@/components/ui/ProviderBadge";
import { Stars } from "@/components/ui/Stars";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ZipSearch } from "@/components/ui/ZipSearch";
import { ProsCons } from "@/components/sections/ProsCons";
import { ProviderCard } from "@/components/sections/ProviderCard";
import { RatingBars } from "@/components/sections/RatingBars";
import { SubNav } from "@/components/sections/SubNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProvider, providers } from "@/data/providers";
import { internetTypes, typeLabels } from "@/data/internetTypes";
import { breadcrumbSchema, faqSchema, pageMeta, abs } from "@/lib/schema";
import { img, images, pricingDisclaimer, site, trademarkDisclaimer } from "@/lib/site";

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

const featureIcons = [Sparkles, Router, ShieldCheck, Users];

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProvider(slug);
  if (!p) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Internet Providers", path: "/internet-providers" },
    { name: p.name, path: `/providers/${p.slug}` },
  ];
  const alternatives = providers
    .filter((o) => o.slug !== p.slug && o.types.some((t) => p.types.includes(t)))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  const relatedTypes = internetTypes.filter((t) => t.key !== "no-contract" && p.types.includes(t.key));

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${p.name} Internet`,
    serviceType: "Internet service",
    provider: { "@type": "Organization", name: p.name },
    areaServed: { "@type": "Country", name: "United States" },
    description: p.quickAnswer,
    url: abs(`/providers/${p.slug}`),
    offers: p.plans.map((pl) => ({
      "@type": "Offer",
      name: pl.name,
      price: pl.price,
      priceCurrency: "USD",
      description: `${pl.download} download`,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(p.faqs), service]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft to-white pb-6 pt-28 sm:pt-36">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Breadcrumbs items={crumbs} />
            <div className="mt-6 flex items-center gap-4">
              <ProviderBadge p={p} size="lg" />
              <div>
                <div className="flex items-center gap-2">
                  <Stars value={p.rating} />
                  <span className="text-sm font-bold text-navy">{p.rating.toFixed(1)}</span>
                  <span className="text-sm text-slate-500">/ 5 editor rating</span>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {p.types.map((t) => (
                    <span key={t} className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-brand-800 ring-1 ring-brand-100">
                      {typeLabels[t]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.3rem] lg:leading-[1.05]">
              {p.name} Internet Plans, Prices &amp; Deals
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{p.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#plans" className="btn btn-primary">
                View {p.name} plans <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/internet-providers#compare" className="btn btn-ghost">
                Compare providers
              </Link>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <CalendarCheck className="h-4 w-4 text-brand-600" /> Plans &amp; pricing last reviewed {site.lastReviewed}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-slate-200/60">
              <Image src={img(p.heroImage, 1200)} alt={`Home internet from ${p.name} — ${p.bestFor.toLowerCase()}`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-2 rounded-2xl bg-white p-3 shadow-lift ring-1 ring-slate-200/70 sm:left-8 sm:right-8">
              {[
                { l: "From", v: `$${p.startingPrice}/mo` },
                { l: "Up to", v: p.maxSpeed },
                { l: "Contract", v: p.contract.toLowerCase().startsWith("no") ? "None" : "Varies" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-sky-soft px-2 py-2.5 text-center">
                  <p className="text-[11px] text-slate-500">{x.l}</p>
                  <p className="text-sm font-extrabold text-navy sm:text-base">{x.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div>
        <SubNav
          items={[
            { id: "overview", label: "Overview" },
            { id: "plans", label: "Plans" },
            { id: "features", label: "Features" },
            { id: "ratings", label: "Ratings" },
            { id: "tv", label: "TV" },
            { id: "faqs", label: "FAQs" },
          ]}
        />

      {/* Overview */}
      <section id="overview" className="container-x scroll-mt-40 pt-10">
        <QuickAnswer
          text={p.quickAnswer}
          facts={[
            { label: "Starting price", value: `$${p.startingPrice}/mo` },
            { label: "Max speed", value: p.maxSpeed },
            { label: "Data cap", value: p.dataCap },
            { label: "Equipment", value: p.equipment },
          ]}
        />
      </section>

      {/* Plans */}
      <section id="plans" className="container-x scroll-mt-40 py-16 sm:py-24">
        <SectionHeading eyebrow={`${p.name} plans`} title={`${p.name} internet plans & pricing`} text={`Compare every ${p.name} plan by speed and monthly price.`} />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.plans.map((pl) => (
            <StaggerItem key={pl.name}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                  pl.popular ? "bg-gradient-to-br from-brand-700 to-navy text-white shadow-lift" : "bg-white ring-1 ring-slate-200/70 shadow-card hover:shadow-lift"
                }`}
              >
                {pl.popular && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
                    <Flame className="h-3.5 w-3.5 text-amber-300" /> Popular
                  </span>
                )}
                <h3 className={`pr-20 text-lg font-extrabold ${pl.popular ? "text-white" : "text-navy"}`}>{pl.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">${pl.price}</span>
                  <span className={`text-sm ${pl.popular ? "text-brand-200" : "text-slate-500"}`}>/mo*</span>
                </p>
                <ul className={`mt-5 space-y-2.5 text-sm ${pl.popular ? "text-brand-100" : "text-slate-600"}`}>
                  <li className="flex items-center gap-2">
                    <Gauge className={`h-4 w-4 ${pl.popular ? "text-brand-300" : "text-brand-600"}`} /> Download: <strong className={pl.popular ? "text-white" : "text-navy"}>{pl.download}</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${pl.popular ? "text-brand-300" : "text-brand-600"}`} /> Upload: {pl.upload}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${pl.popular ? "text-brand-300" : "text-brand-600"}`} /> {p.dataCap}
                  </li>
                  {pl.note && (
                    <li className="flex items-center gap-2">
                      <Check className={`h-4 w-4 ${pl.popular ? "text-brand-300" : "text-brand-600"}`} /> {pl.note}
                    </li>
                  )}
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="#availability" className={`btn w-full ${pl.popular ? "btn-light" : "btn-ghost"}`}>
                    Check availability
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-xs leading-relaxed text-slate-500">*{pricingDisclaimer}</p>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-40 bg-sky-soft py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why choose it" title={`${p.name} features & perks`} />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {p.features.map((f, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <StaggerItem key={f.title} className="card group p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-extrabold text-navy">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.text}</p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/5]">
              <Image src={img(p.sideImage, 1100)} alt={`Using ${p.name} internet at home`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">Best for</p>
                <p className="mt-1 text-xl font-extrabold leading-snug">{p.bestFor}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ratings + coverage */}
      <section id="ratings" className="container-x scroll-mt-40 py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="card p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-navy">{p.name} ratings</h2>
              <div className="text-right">
                <p className="text-4xl font-extrabold text-brand-700">{p.rating.toFixed(1)}</p>
                <Stars value={p.rating} />
              </div>
            </div>
            <div className="mt-8">
              <RatingBars scores={p.scores} />
            </div>
            <p className="mt-6 text-xs text-slate-500">Editorial scores based on published plan details, speed tiers, pricing and industry satisfaction data.</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="card p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-navy">
                <MapPinned className="h-6 w-6 text-brand-600" /> {p.name} availability
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">{p.coverage}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-sky-soft p-4"><dt className="text-slate-500">Contract</dt><dd className="mt-1 font-bold text-navy">{p.contract}</dd></div>
                <div className="rounded-2xl bg-sky-soft p-4"><dt className="text-slate-500">Data</dt><dd className="mt-1 font-bold text-navy">{p.dataCap}</dd></div>
              </dl>
            </div>
            <div className="card flex-1 p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-navy">Connection types</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedTypes.map((t) => (
                  <Link key={t.slug} href={`/internet/${t.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-100 transition-colors hover:bg-brand-700 hover:text-white">
                    {t.name} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-12">
          <ProsCons pros={p.pros} cons={p.cons} subject={p.name} />
        </div>
      </section>

      {/* TV */}
      <section id="tv" className="scroll-mt-40">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy text-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative p-8 sm:p-12">
                <div className="grid-bg absolute inset-0 opacity-20" />
                <span className="relative eyebrow bg-white/10 text-brand-200 ring-white/15">
                  <Tv className="h-3.5 w-3.5" /> Internet + TV
                </span>
                <h2 className="relative mt-4 text-3xl font-extrabold tracking-tight">{p.tv.title}</h2>
                <p className="relative mt-4 leading-relaxed text-brand-100/85">{p.tv.text}</p>
                <Link href="#availability" className="btn btn-light relative mt-8">
                  Explore bundles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative min-h-64">
                <Image src={img(p.slug === "hughesnet" ? images.livingTv : images.livingRoom, 1000)} alt={`${p.name} internet and TV entertainment setup`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container-x scroll-mt-40 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title={`${p.name} internet FAQs`} text={`Quick answers about ${p.name} pricing, data caps, contracts and more.`} />
          <FaqList faqs={p.faqs} />
        </div>
      </section>

      {/* Alternatives */}
      <section className="bg-sky-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Alternatives" title={`${p.name} alternatives to compare`} />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((a) => (
              <StaggerItem key={a.slug}>
                <ProviderCard p={a} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Availability */}
      <section id="availability" className="container-x scroll-mt-32 py-16 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-800 to-navy px-6 py-12 text-white sm:px-12">
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Is {p.name} available at your address?</h2>
              <p className="mt-3 text-brand-100/85">Enter your ZIP code to compare {p.name} with other providers near you.</p>
            </div>
            <ZipSearch compact />
          </div>
        </Reveal>
        <p className="mt-6 text-xs leading-relaxed text-slate-500">{trademarkDisclaimer}</p>
      </section>
      </div>
    </>
  );
}
