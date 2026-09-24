import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Provider } from "@/data/providers";
import { typeLabels } from "@/data/internetTypes";
import { ProviderBadge } from "@/components/ui/ProviderBadge";
import { Stars } from "@/components/ui/Stars";

export function ProviderCard({ p }: { p: Provider }) {
  return (
    <Link
      href={`/providers/${p.slug}`}
      className="group relative flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <ProviderBadge p={p} />
          <div>
            <h3 className="text-lg font-extrabold text-navy">{p.name}</h3>
            <div className="mt-0.5 flex items-center gap-1.5">
              <Stars value={p.rating} />
              <span className="text-xs font-semibold text-slate-500">{p.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-700 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.types.map((t) => (
          <span key={t} className="rounded-full bg-sky-soft px-2.5 py-1 text-[11px] font-semibold text-brand-800 ring-1 ring-brand-100">
            {typeLabels[t]}
          </span>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-medium text-slate-500">Starting at</p>
          <p className="text-lg font-extrabold text-navy">
            ${p.startingPrice}
            <span className="text-xs font-semibold text-slate-500">/mo*</span>
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-medium text-slate-500">Max speed</p>
          <p className="text-lg font-extrabold text-navy">{p.maxSpeed}</p>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <Check className="h-3.5 w-3.5 text-emerald-500" /> {p.dataCap}
      </p>
    </Link>
  );
}
