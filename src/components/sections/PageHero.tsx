import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { img, site } from "@/lib/site";

export function PageHero({
  crumbs,
  title,
  text,
  image,
  imageAlt,
  children,
  aside,
  showReviewed = true,
}: {
  crumbs: { name: string; path: string }[];
  title: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  showReviewed?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft to-white pb-14 pt-28 sm:pb-20 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-3xl" />
      <div className={`container-x relative grid items-center gap-10 ${image || aside ? "lg:grid-cols-[1.15fr_1fr]" : ""}`}>
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">{title}</h1>
          {text && <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{text}</p>}
          {showReviewed && (
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <CalendarCheck className="h-4 w-4 text-brand-600" /> Last reviewed {site.lastReviewed}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </Reveal>
        {aside ??
          (image && (
            <Reveal delay={0.15} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-slate-200/60">
                <Image src={img(image, 1200)} alt={imageAlt ?? title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[2rem] bg-brand-100" />
            </Reveal>
          ))}
      </div>
    </section>
  );
}
