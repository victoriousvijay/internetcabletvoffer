import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProviderExplorer } from "@/components/sections/ProviderExplorer";
import { CompareTable } from "@/components/sections/CompareTable";
import { TypeGrid } from "@/components/sections/TypeGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { ZipSearch } from "@/components/ui/ZipSearch";
import { JsonLd } from "@/components/seo/JsonLd";
import { providers } from "@/data/providers";
import { breadcrumbSchema, faqSchema, pageMeta, abs } from "@/lib/schema";
import { img, images } from "@/lib/site";

const faqs = [
  { q: "Who is the best internet provider?", a: "For most people, the best provider is the fastest fiber option available at their address — often AT&T Fiber, Verizon Fios or Frontier Fiber. Where fiber isn't available, Spectrum and Optimum cable or 5G home internet are strong alternatives." },
  { q: "Which internet provider is the cheapest?", a: "Among the providers we cover, Optimum and Kinetic have some of the lowest starting prices at around $40/month. Always compare the price after any promotional period." },
  { q: "Which providers have no data caps?", a: "AT&T Fiber, Spectrum, Verizon, Frontier, Kinetic, Brightspeed and Optimum all offer unlimited data. HughesNet uses priority data instead of hard caps." },
  { q: "How many internet providers are available at my address?", a: "Most U.S. addresses have two to four wired or wireless options, plus satellite. Rural addresses may have fewer choices." },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Internet Providers", path: "/internet-providers" },
];

export const metadata: Metadata = pageMeta({
  title: "Internet Providers 2026 — Compare Plans, Prices & Speeds",
  description:
    "Compare the best internet providers: AT&T, Spectrum, Verizon, Frontier, Optimum, Kinetic, Brightspeed, EarthLink and HughesNet. See prices, speeds, contracts and ratings side by side.",
  path: "/internet-providers",
  image: img(images.earthLights, 1200),
});

export default function ProvidersHub() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Internet providers compared",
    itemListElement: providers.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: `${p.name} Internet`, url: abs(`/providers/${p.slug}`) })),
  };
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs), itemList]} />
      <PageHero
        crumbs={crumbs}
        title="Internet Providers: Compare Plans & Prices"
        text="Every major U.S. internet provider in one place — filter by connection type and sort by price, speed or rating."
        image={images.earthLights}
        imageAlt="Night view of Earth with city lights representing nationwide internet coverage"
      >
        <div className="max-w-lg">
          <ZipSearch />
        </div>
      </PageHero>

      <section className="container-x">
        <QuickAnswer
          text="The best internet providers in 2026 are AT&T Fiber and Verizon Fios for reliability and symmetrical speed, Frontier and Optimum for multi-gig fiber value, Spectrum for widely available cable with no data caps, and HughesNet for rural satellite coverage. The right choice depends on which providers serve your address."
          facts={[
            { label: "Providers compared", value: `${providers.length}` },
            { label: "Lowest starting price", value: "$40/mo" },
            { label: "Fastest plan", value: "8 Gbps" },
            { label: "Unlimited data", value: "8 of 9 providers" },
          ]}
        />
      </section>

      <section id="compare" className="container-x scroll-mt-28 py-16 sm:py-20">
        <SectionHeading title="Find your provider" text="Filter by technology and sort to find the right plan faster." />
        <div className="mt-8">
          <Suspense>
            <ProviderExplorer />
          </Suspense>
        </div>
      </section>

      <section className="bg-sky-soft py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading title="Internet providers side by side" />
          <div className="mt-10">
            <CompareTable list={providers} caption="Internet providers side by side" />
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <SectionHeading title="Browse providers by internet type" />
        <div className="mt-10">
          <TypeGrid />
        </div>
      </section>

      <section className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title="Internet provider FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
