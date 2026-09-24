import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { typeLabels } from "@/data/internetTypes";
import { ProviderBadge } from "@/components/ui/ProviderBadge";
import { Stars } from "@/components/ui/Stars";
import { pricingDisclaimer } from "@/lib/site";

export function CompareTable({ list, caption }: { list: Provider[]; caption?: string }) {
  return (
    <div>
      <div className="hidden overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-card md:block">
        <table className="w-full text-left text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead className="bg-sky-soft text-xs font-bold uppercase tracking-wider text-slate-500">
            <tr>
              <th scope="col" className="px-6 py-4">Provider</th>
              <th scope="col" className="px-4 py-4">Type</th>
              <th scope="col" className="px-4 py-4">Starting price*</th>
              <th scope="col" className="px-4 py-4">Max speed</th>
              <th scope="col" className="hidden px-4 py-4 lg:table-cell">Contract</th>
              <th scope="col" className="px-4 py-4">Rating</th>
              <th scope="col" className="px-6 py-4">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {list.map((p) => (
              <tr key={p.slug} className="group transition-colors hover:bg-brand-50/50">
                <th scope="row" className="px-6 py-4">
                  <Link href={`/providers/${p.slug}`} className="flex items-center gap-3">
                    <ProviderBadge p={p} size="sm" />
                    <span className="font-extrabold text-navy group-hover:text-brand-700">{p.name}</span>
                  </Link>
                </th>
                <td className="px-4 py-4 text-slate-600">{p.types.map((t) => typeLabels[t]).join(", ")}</td>
                <td className="px-4 py-4 font-bold text-navy">${p.startingPrice}/mo</td>
                <td className="px-4 py-4 font-semibold text-slate-700">{p.maxSpeed}</td>
                <td className="hidden px-4 py-4 text-slate-600 lg:table-cell">{p.contract}</td>
                <td className="px-4 py-4">
                  <span className="flex items-center gap-1.5">
                    <Stars value={p.rating} />
                    <span className="text-xs font-bold text-slate-600">{p.rating.toFixed(1)}</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/providers/${p.slug}`}
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-brand-700 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-brand-800 group-hover:gap-2"
                  >
                    View plans <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {list.map((p) => (
          <Link key={p.slug} href={`/providers/${p.slug}`} className="card flex flex-col gap-4 p-4 active:scale-[0.99]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ProviderBadge p={p} size="sm" />
                <div>
                  <p className="font-extrabold text-navy">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.types.map((t) => typeLabels[t]).join(" · ")}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-brand-600" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-sky-soft p-2">
                <p className="text-[10px] text-slate-500">From</p>
                <p className="text-sm font-extrabold text-navy">${p.startingPrice}/mo</p>
              </div>
              <div className="rounded-xl bg-sky-soft p-2">
                <p className="text-[10px] text-slate-500">Up to</p>
                <p className="text-sm font-extrabold text-navy">{p.maxSpeed}</p>
              </div>
              <div className="rounded-xl bg-sky-soft p-2">
                <p className="text-[10px] text-slate-500">Rating</p>
                <p className="text-sm font-extrabold text-navy">{p.rating.toFixed(1)} / 5</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">*{pricingDisclaimer}</p>
    </div>
  );
}
