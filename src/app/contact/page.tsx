import type { Metadata } from "next";
import Link from "next/link";
import { Clock, HelpCircle, Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMeta } from "@/lib/schema";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description: `Get in touch with the ${site.name} team for questions, pricing corrections, partnerships or privacy requests.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        title="Contact Internet Cable TV Offers"
        text="Questions about a plan, spotted an outdated price, or want to partner with us? Send us a note."
        showReviewed={false}
      />
      <section className="container-x pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="space-y-4">
            {[
              { icon: Mail, t: "Email", d: <a href={`mailto:${site.email}`} className="font-semibold text-brand-700">{site.email}</a> },
              { icon: Clock, t: "Response time", d: "We typically reply within 1–2 business days." },
              { icon: HelpCircle, t: "Quick answers", d: <Link href="/faqs" className="font-semibold text-brand-700">Browse our FAQs →</Link> },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-navy">{t}</p>
                  <div className="mt-0.5 text-sm text-slate-600">{d}</div>
                </div>
              </div>
            ))}
            <p className="rounded-2xl bg-sky-soft p-5 text-sm leading-relaxed text-slate-600 ring-1 ring-brand-100">
              Please note: we&apos;re a comparison site, not an internet provider. For billing, outages or account changes, contact your
              provider directly.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
