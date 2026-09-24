import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { generalFaqs } from "@/data/faqs";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/schema";
import { images } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faqs" },
];

export const metadata: Metadata = pageMeta({
  title: "Internet & Cable TV FAQs — Speeds, Providers, Bundles",
  description:
    "Answers to the most common questions about internet providers, internet speeds, fiber vs cable, 5G home internet, TV bundles and how Internet Cable TV Offers works.",
  path: "/faqs",
});

export default function FaqsPage() {
  const all = generalFaqs.flatMap((g) => g.items);
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(all)]} />
      <PageHero
        crumbs={crumbs}
        title="Frequently Asked Questions"
        text="Straight answers about internet providers, speeds, connection types and TV bundles."
        image={images.phoneApps}
        imageAlt="Smartphone with streaming and internet apps"
        showReviewed={false}
      />
      <section className="container-x">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav aria-label="FAQ categories" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1">
              {generalFaqs.map((g) => (
                <li key={g.group}>
                  <a href={`#${g.group.toLowerCase().replace(/\W+/g, "-")}`} className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700">
                    {g.group}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-14">
            {generalFaqs.map((g) => (
              <section key={g.group} id={g.group.toLowerCase().replace(/\W+/g, "-")} className="scroll-mt-28">
                <Reveal>
                  <h2 className="mb-5 text-2xl font-extrabold text-navy">{g.group}</h2>
                </Reveal>
                <Reveal delay={0.05}>
                  <FaqList faqs={g.items} defaultOpen={null} />
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
