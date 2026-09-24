import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { providerThemes } from "@/data/themes";
import { typeLabels } from "@/data/internetTypes";

/**
 * Profile-style card: a brand-colored band sits on top; on hover it floods the card, the logo circle grows
 * and slides to the corner, and the text lifts. Touch devices get the resting state.
 */
export function ProviderCard({ p }: { p: Provider }) {
  const t = providerThemes[p.slug];
  const band = `linear-gradient(to bottom left, ${t.soft} 0%, color-mix(in srgb, ${t.acc2} 55%, white) 45%, ${t.acc} 100%)`;
  return (
    <Link
      href={`/providers/${p.slug}`}
      className="group relative isolate flex h-80 w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-slate-50 text-center ring-1 ring-slate-200/70 shadow-card transition-shadow duration-500 hover:shadow-lift"
      style={{ "--acc": t.acc, "--on-acc": t.onAcc } as React.CSSProperties}
    >
      {/* band */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-24 rounded-t-2xl transition-all duration-500 group-hover:h-full group-hover:scale-95 group-hover:rounded-2xl"
        style={{ background: band }}
      />
      {/* logo circle */}
      <span className="z-10 mt-8 flex h-28 w-28 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-[0_8px_24px_-10px_rgb(0_0_0/0.35)] transition-all duration-500 group-hover:-translate-x-[7.5rem] group-hover:-translate-y-[5.5rem] group-hover:scale-150">
        <Image src={p.logo} alt={`${p.name} logo`} width={96} height={48} className={`w-[78%] object-contain ${p.logoTall ? "h-[70%]" : "h-[46%]"}`} />
      </span>
      {/* text */}
      <span className="z-10 px-6 transition-all duration-500 group-hover:-translate-y-8">
        <span className="block text-2xl font-extrabold text-navy">{p.name}</span>
        <span className="mt-0.5 block text-sm text-slate-600">{p.blurb}</span>
        <span className="mt-2 block text-xs font-semibold text-slate-500">
          {p.types.slice(0, 3).map((k) => typeLabels[k]).join(" · ")} · up to {p.maxSpeed}
        </span>
      </span>
      <span className="z-10 mt-1 inline-flex items-center gap-1.5 rounded-lg bg-acc px-4 py-1.5 text-sm font-semibold text-on-acc transition-all duration-500 group-hover:scale-110">
        View plans <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
