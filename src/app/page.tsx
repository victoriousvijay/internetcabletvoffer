import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, MousePointerClick, PlugZap, Tv, Radio, Smartphone } from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProviderCard } from "@/components/sections/ProviderCard";
import { TypeGrid } from "@/components/sections/TypeGrid";
import { CompareTable } from "@/components/sections/CompareTable";
import { SpeedGuide } from "@/components/sections/SpeedGuide";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProviderBadge } from "@/components/ui/ProviderBadge";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { providers } from "@/data/providers";
import { homeFaqs } from "@/data/faqs";
import { faqSchema, abs } from "@/lib/schema";
import { img, images } from "@/lib/site";

const stats = [
  { value: "9", label: "Top national providers" },
  { value: "7", label: "Internet types explained" },
  { value: "8 Gbps", label: "Fastest plan we track" },
  { value: "$40", label: "Lowest starting price" },
];

const steps = [
  { icon: ClipboardList, title: "Tell us what you need", text: "Enter your ZIP or pick your household type to see the speed you actually need." },
  { icon: MousePointerClick, title: "Compare real plans", text: "See prices, speeds, contracts and data caps side by side — no fine-print surprises." },
  { icon: PlugZap, title: "Connect with confidence", text: "Choose your plan and order directly from the provider. Our service is always free." },
];

export default function Home() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top internet providers",
    itemListElement: providers.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: `${p.name} Internet`, url: abs(`/providers/${p.slug}`) })),
  };

  return (
    <>
      <JsonLd data={[faqSchema(homeFaqs), itemList]} />
      <HomeHero />

      {/* Provider marquee */}
      <section aria-label="Providers we compare" className="border-y border-slate-100 bg-white py-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...providers, ...providers].map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                href={`/providers/${p.slug}`}
                className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2.5 ring-1 ring-slate-100 transition-colors hover:bg-brand-50"
                tabIndex={i >= providers.length ? -1 : undefined}
                aria-hidden={i >= providers.length ? true : undefined}
              >
                <ProviderBadge p={p} size="sm" />
                <span className="whitespace-nowrap text-sm font-bold text-navy">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-x py-14 sm:py-16">
        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="rounded-3xl bg-sky-soft p-6 text-center ring-1 ring-brand-100/70">
              <p className="bg-gradient-to-br from-brand-600 to-navy bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Providers */}
      <section className="container-x py-10 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Top providers"
            title="Compare America's leading internet providers"
            text="Fiber, cable, 5G and satellite — every major provider rated on speed, value, reliability and service."
          />
          <Reveal>
            <Link href="/internet-providers" className="btn btn-ghost">
              All providers <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <StaggerItem key={p.slug}>
              <ProviderCard p={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Internet types */}
      <section className="bg-gradient-to-b from-white to-sky-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Internet types"
            title="Find the right connection for your home"
            text="Every technology has trade-offs. Explore how each one works, what it costs and who it's best for."
          />
          <div className="mt-10">
            <TypeGrid />
          </div>
        </div>
      </section>

      {/* Speed guide */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading
          eyebrow="Speed guide"
          title="How much internet speed do you need?"
          text="Pick the household that sounds like yours — we'll recommend a speed and connection type."
        />
        <div className="mt-10">
          <SpeedGuide />
        </div>
      </section>

      {/* TV bundles */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image
                src={img(images.livingRoom, 1200)}
                alt="Modern living room with a wall-mounted TV ready for cable TV and streaming"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 grid grid-cols-3 gap-2 rounded-2xl bg-white p-3 text-navy shadow-lift sm:right-8">
              {[
                { icon: Tv, t: "Cable TV" },
                { icon: Radio, t: "Internet" },
                { icon: Smartphone, t: "Mobile" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex flex-col items-center gap-1 rounded-xl bg-sky-soft px-3 py-2">
                  <Icon className="h-5 w-5 text-brand-700" />
                  <span className="text-[11px] font-bold">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              light
              eyebrow="Internet + TV"
              title="Bundle internet and cable TV to save more"
              text="Spectrum, Verizon Fios and Optimum offer cable TV bundles, while fiber providers pair perfectly with live TV streaming."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "One bill for internet, TV and mobile",
                  "Bundle discounts that lower your monthly total",
                  "Local channels, sports and on-demand in one place",
                  "Or cut the cord — fast internet makes streaming TV easy",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-brand-100/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/providers/spectrum" className="btn btn-light">
                  Spectrum TV bundles <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/providers/verizon" className="btn bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
                  Verizon Fios TV
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading center eyebrow="How it works" title="Better internet in three simple steps" />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title} className="card group relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="absolute right-6 top-4 text-6xl font-extrabold text-brand-50 transition-colors group-hover:text-brand-100">0{i + 1}</span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-lift">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 text-lg font-extrabold text-navy">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Comparison table */}
      <section id="compare" className="bg-sky-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Side-by-side"
            title="Internet provider comparison chart"
            text="Starting prices, top speeds, contract terms and ratings for every provider we cover."
          />
          <div className="mt-10">
            <CompareTable list={providers} caption="Internet provider comparison" />
          </div>
        </div>
      </section>

      {/* Choosing guide with image */}
      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Buyer's guide" title="Choosing the right internet provider in 2026" />
          <Reveal delay={0.1} className="mt-8 space-y-5">
            {[
              { t: "Check what's available first", d: "Availability varies street by street. Start with the providers that actually serve your address." },
              { t: "Prioritize the connection type", d: "Fiber > cable > 5G home > fixed wireless > DSL > satellite for speed and reliability." },
              { t: "Look past the promo price", d: "Check the price after 12 months, equipment fees and whether there's a price guarantee." },
              { t: "Confirm data caps & contracts", d: "Most top plans now include unlimited data and no annual contract — don't settle for less." },
            ].map((x, i) => (
              <div key={x.t} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-navy">{x.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image src={img(images.homeOffice, 800)} alt="Home office set up for remote work on fast internet" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image src={img(images.friendsLaptops, 800)} alt="Friends using laptops on a shared home Wi-Fi network" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQs */}
      <section className="container-x pb-8 sm:pb-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title="Internet & cable TV questions, answered" />
            <Reveal delay={0.1}>
              <Link href="/faqs" className="btn btn-ghost mt-6">
                View all FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FaqList faqs={homeFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
