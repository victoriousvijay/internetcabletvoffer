import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Lightbulb, Target } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ProviderCard } from "@/components/sections/ProviderCard";
import { CompareTable } from "@/components/sections/CompareTable";
import { ProsCons } from "@/components/sections/ProsCons";
import { TypeGrid } from "@/components/sections/TypeGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { getInternetType, internetTypes, providersForType } from "@/data/internetTypes";
import { breadcrumbSchema, faqSchema, pageMeta, abs } from "@/lib/schema";
import { img, site } from "@/lib/site";

export function generateStaticParams() {
  return internetTypes.map((t) => ({ type: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = getInternetType(type);
  if (!t) return {};
  return pageMeta({ title: t.metaTitle, description: t.metaDescription, path: `/internet/${t.slug}`, image: img(t.heroImage, 1200) });
}

export default async function InternetTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const t = getInternetType(type);
  if (!t) notFound();
  const list = providersForType(t);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Internet Providers", path: "/internet-providers" },
    { name: t.name, path: `/internet/${t.slug}` },
  ];
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.h1,
    description: t.metaDescription,
    dateModified: site.lastReviewedISO,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: abs(`/internet/${t.slug}`),
    image: img(t.heroImage, 1200),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(t.faqs), article]} />
      <PageHero
        crumbs={crumbs}
        eyebrow={t.eyebrow}
        title={t.h1}
        text={`Compare ${t.name.toLowerCase()} providers, plans and prices — plus how ${t.short.toLowerCase()} works and who it's best for.`}
        image={t.heroImage}
        imageAlt={`${t.name} — ${t.eyebrow}`}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#providers" className="btn btn-primary">
            See {t.short} providers <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#faqs" className="btn btn-ghost">
            Read FAQs
          </Link>
        </div>
      </PageHero>

      <section className="container-x">
        <QuickAnswer text={t.quickAnswer} facts={t.keyFacts} />
      </section>

      {/* How it works */}
      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={img(t.sideImage, 1200)} alt={`How ${t.name.toLowerCase()} is delivered to your home`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-lg font-bold text-white">{t.keyFacts[0].label}: {t.keyFacts[0].value}</p>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="How it works" title={`How does ${t.short.toLowerCase()} internet work?`} />
          <Stagger className="mt-8 space-y-4">
            {t.howItWorks.map((s, i) => (
              <StaggerItem key={s.title} className="flex gap-4 rounded-2xl bg-sky-soft p-5 ring-1 ring-brand-100/70">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-sm font-extrabold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="scroll-mt-28 bg-sky-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow={`${list.length} providers`}
            title={`Best ${t.name.toLowerCase()} providers`}
            text={`Providers offering ${t.name.toLowerCase()}, rated on speed, value, reliability and service.`}
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <StaggerItem key={p.slug}>
                <ProviderCard p={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <CompareTable list={list} caption={`${t.name} providers compared`} />
          </div>
        </div>
      </section>

      {/* Pros & cons */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading eyebrow="Pros & cons" title={`Is ${t.short.toLowerCase()} internet worth it?`} />
        <div className="mt-10">
          <ProsCons pros={t.pros} cons={t.cons} subject={t.short} />
        </div>
      </section>

      {/* Best for */}
      <section className="container-x pb-16 sm:pb-24">
        <SectionHeading eyebrow="Best for" title={`Who should choose ${t.short.toLowerCase()}?`} />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {t.bestFor.map((b) => (
            <StaggerItem key={b.title} className="card group p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-navy">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 flex gap-4 rounded-3xl bg-gradient-to-br from-brand-700 to-navy p-6 text-white sm:p-8">
          <Lightbulb className="h-7 w-7 shrink-0 text-brand-200" />
          <div>
            <h3 className="text-lg font-extrabold">Our verdict</h3>
            <p className="mt-2 leading-relaxed text-brand-100/90">{t.verdict}</p>
          </div>
        </Reveal>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container-x scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title={`${t.name} FAQs`} />
          <FaqList faqs={t.faqs} />
        </div>
      </section>

      <section className="container-x pt-16 sm:pt-24">
        <SectionHeading eyebrow="Keep exploring" title="Other internet types" />
        <div className="mt-10">
          <TypeGrid exclude={t.slug} />
        </div>
      </section>

      <CtaBand title={`Find ${t.name.toLowerCase()} deals near you`} />
    </>
  );
}
