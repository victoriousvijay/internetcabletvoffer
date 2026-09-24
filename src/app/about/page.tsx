import Image from "next/image";
import type { Metadata } from "next";
import { Compass, HeartHandshake, Scale, SearchCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMeta } from "@/lib/schema";
import { img, images, site } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

export const metadata: Metadata = pageMeta({
  title: "About Us — Independent Internet & TV Comparison",
  description: `Learn about ${site.name}: our mission, how we research internet and cable TV providers, and how we keep our comparisons independent.`,
  path: "/about",
});

const values = [
  { icon: SearchCheck, title: "Research-first", text: "We review published plans, pricing, fine print and satisfaction data before we rate a provider." },
  { icon: Scale, title: "Independent ratings", text: "Commissions never influence our scores or the order of our recommendations." },
  { icon: Compass, title: "Plain English", text: "No jargon. Just clear guidance on speeds, prices and what really matters." },
  { icon: HeartHandshake, title: "Always free", text: "Comparing providers on our site costs nothing — you always order directly from the provider." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        title="Helping every home find a better connection"
        text={`${site.name} was built to make choosing internet and TV simple — clear comparisons, honest pros and cons, and zero pressure.`}
        image={images.teamOffice}
        imageAlt="Team collaborating in a bright office"
        showReviewed={false}
      />

      <section className="container-x grid items-center gap-12 py-10 sm:py-16 lg:grid-cols-2">
        <div>
          <SectionHeading title="Clarity in a confusing market" />
          <Reveal delay={0.1} className="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>
              Promo prices, equipment fees, data caps and contracts make internet shopping harder than it should be. We cut through
              the noise with side-by-side comparisons and guides written for real households.
            </p>
            <p>
              We cover the nation&apos;s leading providers — from fiber leaders like AT&amp;T, Verizon and Frontier to cable giants
              like Spectrum and Optimum, and satellite service from HughesNet — so you can decide with confidence.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
          <Image src={img(images.workspace, 1200)} alt="Researchers reviewing internet plans together" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </Reveal>
      </section>

      <section className="bg-sky-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading center title="Our values" />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHeading title="How we rate providers" />
        <Reveal delay={0.1} className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { k: "Speed", v: "Available tiers, upload speeds and consistency" },
            { k: "Value", v: "Starting price, price after promo, fees" },
            { k: "Reliability", v: "Network type and published performance data" },
            { k: "Service", v: "Industry satisfaction surveys and support options" },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200/70">
              <p className="text-sm font-extrabold text-brand-700">{m.k}</p>
              <p className="mt-1 text-sm text-slate-600">{m.v}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
