import { PageHero } from "./PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export function LegalPage({ title, path, intro, children }: { title: string; path: string; intro: string; children: React.ReactNode }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero crumbs={crumbs} title={title} text={intro} showReviewed={false} />
      <section className="container-x pb-24">
        <article className="prose-legal card mx-auto max-w-3xl p-6 sm:p-10">
          <p className="text-sm font-semibold text-brand-700">Effective date: {site.lastReviewed}</p>
          {children}
        </article>
      </section>
    </>
  );
}
