import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { ProviderLogo } from "@/components/ui/ProviderBadge";

export function ProviderCard({ p }: { p: Provider }) {
  return (
    <Link
      href={`/providers/${p.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200"
      style={{ "--acc": p.accent } as React.CSSProperties}
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white px-8">
        <div
          className="pointer-events-none absolute inset-x-10 bottom-0 h-16 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
          style={{ background: "var(--acc)" }}
        />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <span className="relative flex max-w-[70%] justify-center transition-transform duration-500 group-hover:scale-105">
          <ProviderLogo p={p} className="h-12 max-w-full" />
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-6 py-5">
        <div className="min-w-0">
          <h3 className="text-lg font-extrabold text-navy">{p.name}</h3>
          <p className="mt-0.5 truncate text-sm text-slate-500">{p.blurb}</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-700 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <span
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: "var(--acc)" }}
      />
    </Link>
  );
}
