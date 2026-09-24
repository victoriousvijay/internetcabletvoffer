import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { internetTypes } from "@/data/internetTypes";
import { img } from "@/lib/site";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function TypeGrid({ exclude }: { exclude?: string }) {
  const list = internetTypes.filter((t) => t.slug !== exclude);
  const feature = !exclude;
  return (
    <Stagger className={`grid gap-4 sm:grid-cols-2 ${feature ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {list.map((t, i) => (
        <StaggerItem key={t.slug} className={feature && i === 0 ? "sm:col-span-2" : ""}>
          <Link
            href={`/internet/${t.slug}`}
            className="group relative flex h-full min-h-56 flex-col justify-end overflow-hidden rounded-3xl bg-navy p-5 text-white"
          >
            <Image
              src={img(t.heroImage, 900)}
              alt={`${t.name} — ${t.eyebrow}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover opacity-75 transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
            <div className="relative">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">{t.eyebrow}</span>
              <div className="mt-1 flex items-end justify-between gap-3">
                <h3 className={`font-extrabold ${feature && i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>{t.name}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-brand-800">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-1 text-sm text-brand-100/85">
                {t.keyFacts[0].label}: {t.keyFacts[0].value}
              </p>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
