import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Lightbulb, Target } from "lucide-react";
import { ThemedHero } from "@/components/themed/ThemedHero";
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
import { getInternetType, internetTypes, providersForType, type InternetType } from "@/data/internetTypes";
import { typeThemes, themeVars, type PageTheme } from "@/data/themes";
import { breadcrumbSchema, faqSchema, pageMeta, abs } from "@/lib/schema";
import { img, site } from "@/lib/site";

/** Lower-case for mid-sentence use, but keep acronyms like DSL and 5G. */
const lc = (s: string) => s.split(" ").map((w) => (/^[A-Z0-9]{2,}/.test(w) ? w : w.toLowerCase())).join(" ");

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

/** "How it works" in two looks: dark numbered steps, or a vertical timeline beside a photo. */
function HowItWorks({ t, theme }: { t: InternetType; theme: PageTheme }) {
  const title = `How does ${lc(t.short)} internet work?`;
  if (theme.features === "bento") {
    return (
      <section className="container-x py-16 sm:py-24">
        <SectionHeading title={title} />
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {t.howItWorks.map((s, i) => (
            <StaggerItem
              key={s.title}
              className={`relative overflow-hidden rounded-3xl p-7 ${i === 1 ? "bg-acc text-on-acc" : "text-white"}`}
            >
              {i !== 1 && <div className="absolute inset-0 -z-0" style={{ background: "var(--acc-ink)" }} />}
              <span className="relative text-6xl font-black opacity-25">0{i + 1}</span>
              <h3 className="relative mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed opacity-80">{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    );
  }
  return (
    <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
      <Reveal className="relative order-2 lg:order-1">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
          <Image src={img(t.sideImage, 1200)} alt={`How ${lc(t.name)} reaches your home`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </Reveal>
      <div className="order-1 lg:order-2">
        <SectionHeading title={title} />
        <ol className="relative mt-8 space-y-8 border-l-2 border-acc/20 pl-8">
          {t.howItWorks.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="relative">
              <span className="absolute -left-[2.85rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-acc text-sm font-extrabold text-on-acc ring-4 ring-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-extrabold text-acc-ink">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default async function InternetTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const t = getInternetType(type);
  if (!t) notFound();
  const theme = typeThemes[t.slug];
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
    <div style={themeVars(theme)}>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(t.faqs), article]} />
      <ThemedHero
        theme={theme}
        crumbs={crumbs}
        title={t.h1}
        intro={`Compare ${lc(t.name)} providers, plans and prices, plus how ${lc(t.short)} works and who it's best for.`}
        image={t.heroImage}
        imageAlt={`${t.name}: ${t.eyebrow.toLowerCase()}`}
        stats={t.keyFacts}
        primary={{ href: "#providers", label: `See ${t.short} providers` }}
        secondary={{ href: "#faqs", label: "Read FAQs" }}
      />

      <section className="container-x pt-10 sm:pt-14">
        <QuickAnswer text={t.quickAnswer} />
      </section>

      <HowItWorks t={t} theme={theme} />

      <section id="providers" className="scroll-mt-28 bg-acc-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading title={`Best ${lc(t.name)} providers`} text={`${list.length} providers offering ${lc(t.name)}, rated on speed, value, reliability and service.`} />
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

      <section className="container-x py-16 sm:py-24">
        <SectionHeading title={`Is ${lc(t.short)} internet worth it?`} />
        <div className="mt-10">
          <ProsCons pros={t.pros} cons={t.cons} subject={t.short} />
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-24">
        <SectionHeading title={`Who should choose ${lc(t.short)}?`} />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {t.bestFor.map((b) => (
            <StaggerItem key={b.title} className="card group p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-acc-soft text-acc-text transition-colors group-hover:bg-acc group-hover:text-on-acc">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-acc-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="relative mt-8 flex gap-4 overflow-hidden rounded-3xl p-6 text-white sm:p-8">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--acc), var(--acc-ink))" }} />
          <Lightbulb className="relative h-7 w-7 shrink-0 opacity-80" />
          <div className="relative">
            <h3 className="text-lg font-extrabold">Our verdict</h3>
            <p className="mt-2 leading-relaxed text-white/90">{t.verdict}</p>
          </div>
        </Reveal>
      </section>

      <section id="faqs" className="container-x scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title={`${t.name} FAQs`} />
          <FaqList faqs={t.faqs} />
        </div>
      </section>

      <section className="container-x pt-16 sm:pt-24">
        <SectionHeading title="Other internet types" />
        <div className="mt-10">
          <TypeGrid exclude={t.slug} />
        </div>
      </section>

      <CtaBand title={`Find ${lc(t.name)} deals near you`} />
    </div>
  );
}
