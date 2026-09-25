import { internetTypes } from "@/data/internetTypes";
import { img } from "@/lib/site";
import { AccordionGallery } from "./AccordionGallery";

/** Internet types as an accordion gallery (hover to expand on desktop, tap on phones). */
export function TypeGrid({ exclude }: { exclude?: string }) {
  const items = internetTypes
    .filter((t) => t.slug !== exclude)
    .map((t) => ({
      image: img(t.heroImage, 1200),
      label: t.name.replace(" Internet Plans", "").replace(" Internet", ""),
      title: t.name,
      sub: t.eyebrow,
      caption: `${t.keyFacts[0].label}: ${t.keyFacts[0].value}`,
      link: `/internet/${t.slug}`,
    }));
  return <AccordionGallery items={items} defaultIndex={2} expandRatio={0.52} trigger="hover" />;
}
