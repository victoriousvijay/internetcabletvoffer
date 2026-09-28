"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Flame, ShieldCheck } from "lucide-react";
import { phone } from "@/lib/site";

type Plan = {
  id: string;
  name: string;
  speed: string;
  subtitle: string;
  tag?: string;
  originalPrice?: number;
  price: number;
  period: string;
  features: string[];
  badgeColor?: string;
  accentColor: string;
  icon: ReactNode;
};

/** Home-page plans section, matching the client's CoreConnect (CCN) plans block. */
const plans: Plan[] = [
  {
    id: "advantage",
    name: "Internet Advantage",
    speed: "100 Mbps Internet",
    subtitle: "Reliable speeds for a smooth online experience.",
    price: 30,
    period: "for 1 year",
    icon: <ShieldCheck className="h-5 w-5 text-sky-400" />,
    accentColor: "from-sky-500 to-blue-600",
    features: ["Fiber-Powered Internet", "Unlimited Mobile® included for 1 year", "Add Advanced WiFi for $10/mo", "No contracts"],
  },
  {
    id: "premier",
    name: "Internet Premier",
    speed: "500 Mbps Internet",
    subtitle: "Powers seamless work and entertainment across multiple devices.",
    tag: "Online exclusive price",
    originalPrice: 50,
    price: 40,
    period: "for 1 year",
    icon: <Flame className="h-5 w-5 animate-pulse text-amber-500" />,
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    accentColor: "from-amber-400 to-orange-500",
    features: ["Fiber-Powered Internet", "Unlimited Mobile included for 1 year", "Add Advanced WiFi for $10/mo", "No contracts"],
  },
  {
    id: "gig",
    name: "Internet Gig",
    speed: "1 Gig Internet",
    subtitle: "Fuels serious gaming, streaming and working from home for the whole household.",
    tag: "Online exclusive price",
    originalPrice: 70,
    price: 60,
    period: "for 1 year",
    icon: <Zap className="h-5 w-5 text-blue-500" />,
    badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
    accentColor: "from-blue-500 to-indigo-600",
    features: ["Fiber-Powered Internet", "Unlimited Mobile included for 1 year", "Advanced WiFi included", "No contracts"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export function FeaturedPlans() {
  return (
    <section id="fiber-plans-home" className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/5 blur-3xl" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400"
          >
            <Zap className="h-3.5 w-3.5 animate-pulse text-sky-400" />
            <span>High-Speed Broadband Specials</span>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Fiber-Powered Internet Plans
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-slate-500">
            Explore <span className="font-semibold text-sky-400">Fiber-Powered Internet</span> plans designed for speed, reliability and security.
          </motion.p>
        </div>

        <div className="relative">
          <div className="-mx-4 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-4 pb-10 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-x-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative flex w-[85%] flex-shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:w-[70%] md:w-auto"
                style={{ boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${plan.accentColor}`} />

                <div className="p-8 pb-4">
                  {plan.tag ? (
                    <div className="absolute right-4 top-4">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${plan.badgeColor}`}>{plan.tag}</span>
                    </div>
                  ) : (
                    <div className="h-6" />
                  )}

                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-lg border border-blue-500/15 bg-blue-500/10 p-1.5">{plan.icon}</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{plan.name}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{plan.speed}</h3>
                  <p className="mt-2 min-h-[40px] text-xs leading-relaxed text-slate-500">{plan.subtitle}</p>

                  <div className="mt-8 flex items-baseline gap-1.5">
                    {plan.originalPrice && (
                      <span className="mr-1 text-sm font-semibold text-rose-500/80 line-through">${plan.originalPrice}</span>
                    )}
                    <span className="text-5xl font-extrabold tracking-tight text-slate-900">${plan.price}</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">/mo</span>
                  </div>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500/70">{plan.period}</span>

                  <div className="my-6 h-px bg-slate-200" />

                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs">
                        <span className="mt-0.5 flex-shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/15 p-0.5 text-emerald-400">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="font-medium leading-normal text-slate-500/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href={`tel:${phone.tel}`}
                    aria-label={`Call ${phone.display} for the ${plan.speed} plan`}
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${plan.accentColor} px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:opacity-95 active:scale-95`}
                  >
                    <span>Select Advisor Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Swipe for more plans</span>
            <div className="flex gap-1">
              <span className="h-1 w-4 animate-pulse rounded-full bg-brand-600" />
              <span className="h-1 w-1.5 rounded-full bg-slate-200" />
              <span className="h-1 w-1.5 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
