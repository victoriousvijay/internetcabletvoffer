import Image from "next/image";
import { Check, Flame, Home, Rocket, Satellite, ShieldCheck, Wifi, Zap } from "lucide-react";
import type { Plan } from "@/data/providerPlans";
import { money } from "@/data/providerPlans";
import { CallButton } from "@/components/ui/CallButton";

const icons = { shield: ShieldCheck, flame: Flame, bolt: Zap, rocket: Rocket, wifi: Wifi, satellite: Satellite, home: Home };

/**
 * Plan card: gradient top edge, icon + tier label, big speed headline, struck-through regular price,
 * big promo price, term, feature checklist and a Call Now button. Colors follow the page theme (--acc);
 * the popular plan gets a warm orange edge like an "online exclusive" offer.
 */
export function PlanCard({ plan, logo }: { plan: Plan; logo?: { src: string; alt: string } }) {
  const Icon = icons[plan.icon];
  const warm = plan.popular;
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <span
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: warm ? "linear-gradient(90deg,#f59e0b,#f97316)" : "linear-gradient(90deg,var(--acc-2),var(--acc))" }}
      />
      {plan.badge && (
        <span
          className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white"
          style={{ background: warm ? "linear-gradient(90deg,#f59e0b,#f97316)" : "linear-gradient(90deg,var(--acc-2),var(--acc))" }}
        >
          {plan.badge}
        </span>
      )}

      <div className="flex flex-1 flex-col p-6 pt-8 sm:p-7 sm:pt-9">
        {logo && (
          <Image src={logo.src} alt={logo.alt} width={120} height={40} className="mb-4 h-8 w-auto object-contain object-left" />
        )}
        <div className="flex items-center gap-2.5 pr-24">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ${warm ? "bg-orange-50 text-orange-500 ring-orange-100" : "bg-acc-soft text-acc-text ring-acc/10"}`}>
            <Icon className="h-[18px] w-[18px]" />
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{plan.tier}</span>
        </div>

        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-navy">{plan.headline}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{plan.desc}</p>

        <div className="mt-6">
          {plan.price !== undefined ? (
            <p className="flex items-end gap-2">
              {plan.wasPrice && <span className="mb-2 text-lg font-semibold text-rose-500 line-through">{money(plan.wasPrice)}</span>}
              <span className="text-5xl font-extrabold leading-none tracking-tight text-navy">{money(plan.price)}</span>
              <span className="mb-1 text-sm font-bold uppercase text-slate-500">/mo*</span>
            </p>
          ) : (
            <p className="text-3xl font-extrabold tracking-tight text-navy">Call for price</p>
          )}
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">{plan.term.replace(/^\/mo\.?,?\s*/i, "")}</p>
        </div>

        <div className="my-6 h-px bg-slate-100" />

        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-emerald-50 p-0.5 text-emerald-500" strokeWidth={3} />
            <span>
              <strong className="text-navy">{plan.download}</strong> download{plan.upload !== "Varies" && <>, {plan.upload} upload</>}
            </span>
          </li>
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-emerald-50 p-0.5 text-emerald-500" strokeWidth={3} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <CallButton showNumber={false} className="w-full" />
        </div>
      </div>
    </div>
  );
}
