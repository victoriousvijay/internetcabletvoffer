"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Gamepad2, Home, Laptop, User, Users } from "lucide-react";

const profiles = [
  { key: "solo", icon: User, label: "Just me", devices: "1–3 devices", speed: 100, range: "100–200 Mbps", type: "5G Home, Cable or DSL", href: "/internet/5g-home-internet", text: "Browsing, HD streaming and occasional video calls run smoothly at this tier." },
  { key: "couple", icon: Users, label: "Couple / roommates", devices: "4–8 devices", speed: 300, range: "300–500 Mbps", type: "Cable or Fiber", href: "/internet/cable", text: "Enough headroom for two people streaming 4K and working from home at the same time." },
  { key: "family", icon: Home, label: "Family home", devices: "8–15 devices", speed: 500, range: "500 Mbps – 1 Gbps", type: "Fiber or Cable", href: "/internet/fiber", text: "Multiple 4K TVs, tablets, smart-home gear and school video calls — without the buffering." },
  { key: "wfh", icon: Laptop, label: "Remote worker", devices: "Heavy uploads", speed: 1000, range: "1 Gbps symmetrical", type: "Fiber", href: "/internet/fiber", text: "Fiber's matching upload speed keeps video calls sharp and large file uploads fast." },
  { key: "gamer", icon: Gamepad2, label: "Gamer / creator", devices: "Low latency", speed: 2000, range: "1–2+ Gbps fiber", type: "Multi-gig Fiber", href: "/internet/fiber", text: "Low ping, fast game downloads and live streaming to your audience at full quality." },
];

export function SpeedGuide() {
  const [active, setActive] = useState(2);
  const p = profiles[active];
  const pct = Math.min(100, (Math.log10(p.speed) - 1.5) / (Math.log10(2000) - 1.5) * 100);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:overflow-visible lg:px-0" role="tablist" aria-label="Household type">
        {profiles.map((pr, i) => {
          const Icon = pr.icon;
          const on = i === active;
          return (
            <button
              key={pr.key}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`relative flex min-w-[10.5rem] shrink-0 items-center gap-3 rounded-2xl p-4 text-left transition-colors lg:min-w-0 ${
                on ? "text-white" : "bg-white text-navy ring-1 ring-slate-200/70 hover:ring-brand-200"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="speed-tab"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-lift"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${on ? "bg-white/15" : "bg-brand-50 text-brand-700"}`}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="relative">
                <span className="block text-sm font-bold">{pr.label}</span>
                <span className={`block text-xs ${on ? "text-brand-100" : "text-slate-500"}`}>{pr.devices}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="card relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-100 blur-2xl" />
        <AnimatePresence mode="wait">
          <motion.div
            key={p.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Recommended speed</p>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">{p.range}</p>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700"
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(12, pct)}%` }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[11px] font-medium text-slate-400">
              <span>50 Mbps</span>
              <span>500 Mbps</span>
              <span>2 Gbps+</span>
            </div>
            <p className="mt-6 leading-relaxed text-slate-600">{p.text}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-sky-soft p-4 ring-1 ring-brand-100">
              <div>
                <p className="text-xs text-slate-500">Best connection type</p>
                <p className="font-extrabold text-navy">{p.type}</p>
              </div>
              <Link href={p.href} className="btn btn-primary !py-2.5">
                See plans <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
