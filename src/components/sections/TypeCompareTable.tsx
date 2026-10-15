import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Compares connection technologies rather than providers (client feedback, Oct 2026: a provider chart doesn't
 * help visitors who can't get every provider). Figures match the key facts on each internet-type page.
 */
const rows = [
  { name: "Fiber", href: "/internet/fiber", how: "Light through glass fiber to the home", speed: "300 Mbps – 8 Gbps", upload: "Symmetrical", latency: "1–10 ms", bestFor: "Remote work, gaming, busy homes" },
  { name: "Cable & Fiber-Powered", href: "/internet/cable", how: "Fiber network, coaxial line for the last stretch", speed: "300 Mbps – 2 Gbps", upload: "10 – 100 Mbps", latency: "10–30 ms", bestFor: "Streaming families, TV bundles" },
  { name: "5G Home", href: "/internet/5g-home-internet", how: "Cellular signal to an indoor receiver", speed: "50 – 300 Mbps", upload: "10 – 50 Mbps", latency: "20–40 ms", bestFor: "Easy self-install, renters" },
  { name: "Fixed Wireless", href: "/internet/fixed-wireless", how: "Radio link from a nearby tower to your roof", speed: "25 – 300 Mbps", upload: "5 – 50 Mbps", latency: "20–50 ms", bestFor: "Rural homes without wired service" },
  { name: "DSL", href: "/internet/dsl", how: "Copper telephone lines", speed: "10 – 140 Mbps", upload: "1 – 20 Mbps", latency: "15–45 ms", bestFor: "Light use on a budget" },
  { name: "Satellite", href: "/internet/satellite", how: "Dish to a satellite in orbit", speed: "50 – 100+ Mbps", upload: "3 – 10 Mbps", latency: "30 – 600+ ms", bestFor: "Remote areas with no other option" },
];

export function TypeCompareTable() {
  return (
    <div>
      <div className="hidden overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/70 md:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Internet connection types compared</caption>
          <thead className="bg-sky-soft text-xs font-bold uppercase tracking-wider text-slate-500">
            <tr>
              <th scope="col" className="px-6 py-4">Connection</th>
              <th scope="col" className="hidden px-4 py-4 lg:table-cell">How it works</th>
              <th scope="col" className="px-4 py-4">Typical speeds</th>
              <th scope="col" className="px-4 py-4">Upload</th>
              <th scope="col" className="px-4 py-4">Latency</th>
              <th scope="col" className="px-4 py-4">Best for</th>
              <th scope="col" className="px-6 py-4">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.name} className="group transition-colors hover:bg-brand-50/50">
                <th scope="row" className="px-6 py-4 font-extrabold text-navy">{r.name}</th>
                <td className="hidden px-4 py-4 text-slate-600 lg:table-cell">{r.how}</td>
                <td className="px-4 py-4 font-bold text-navy">{r.speed}</td>
                <td className="px-4 py-4 text-slate-700">{r.upload}</td>
                <td className="px-4 py-4 text-slate-700">{r.latency}</td>
                <td className="px-4 py-4 text-slate-600">{r.bestFor}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-brand-700 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-brand-800 group-hover:gap-2"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {rows.map((r) => (
          <Link key={r.name} href={r.href} className="card flex flex-col gap-3 p-4 active:scale-[0.99]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-extrabold text-navy">{r.name}</p>
                <p className="text-xs text-slate-500">{r.bestFor}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-brand-600" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-sky-soft p-2">
                <p className="text-[10px] text-slate-500">Speeds</p>
                <p className="text-xs font-extrabold text-navy">{r.speed}</p>
              </div>
              <div className="rounded-xl bg-sky-soft p-2">
                <p className="text-[10px] text-slate-500">Upload</p>
                <p className="text-xs font-extrabold text-navy">{r.upload}</p>
              </div>
              <div className="rounded-xl bg-sky-soft p-2">
                <p className="text-[10px] text-slate-500">Latency</p>
                <p className="text-xs font-extrabold text-navy">{r.latency}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Typical ranges reviewed in 2026. Which connection types you can get depends on your address — call to check availability.
      </p>
    </div>
  );
}
