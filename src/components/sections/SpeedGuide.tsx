"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Briefcase, Film, Gamepad2, Globe, Home, Upload, User, Users, UsersRound } from "lucide-react";
import { Step, Stepper } from "@/components/ui/Stepper";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { providers } from "@/data/providers";
import { money, planMbps, type Plan } from "@/data/providerPlans";
import { phone } from "@/lib/site";

const people = [
  { v: 100, label: "Just me", icon: User },
  { v: 300, label: "2 people", icon: Users },
  { v: 500, label: "3–4 people", icon: UsersRound },
  { v: 800, label: "5 or more", icon: Home },
];
const activities = [
  { k: "browse", add: 0, label: "Browsing & email", icon: Globe },
  { k: "stream", add: 100, label: "HD / 4K streaming", icon: Film },
  { k: "wfh", add: 200, label: "Work-from-home calls", icon: Briefcase, upload: true },
  { k: "game", add: 200, label: "Online gaming", icon: Gamepad2, upload: true },
  { k: "create", add: 300, label: "Uploading & creating", icon: Upload, upload: true },
];
const devices = [
  { add: 0, label: "1–5 devices" },
  { add: 100, label: "6–10 devices" },
  { add: 200, label: "11–20 devices" },
  { add: 400, label: "20+ devices" },
];

function recommend(score: number, upload: boolean) {
  const r =
    score <= 200
      ? { range: "100–200 Mbps", type: "5G Home, Cable or DSL", href: "/internet/5g-home-internet", pct: 18, min: 100, max: 300 }
      : score <= 500
        ? { range: "300–500 Mbps", type: "Cable or Fiber", href: "/internet/cable", pct: 42, min: 300, max: 500 }
        : score <= 1000
          ? { range: "500 Mbps – 1 Gbps", type: "Fiber or Cable", href: "/internet/fiber", pct: 68, min: 500, max: 1000 }
          : { range: "1–2+ Gbps", type: "Multi-gig Fiber", href: "/internet/fiber", pct: 95, min: 900, max: 2500 };
  return upload && r.pct > 18 ? { ...r, type: "Fiber (fast uploads)", href: "/internet/fiber" } : r;
}

/** Up to three real plans (one per provider, cheapest first) whose speed fits the recommendation. */
function matchPlans(min: number, max: number, needUpload: boolean) {
  const out: { p: (typeof providers)[number]; plan: Plan }[] = [];
  for (const p of providers) {
    const fits = p.plans
      .filter((pl) => pl.price !== undefined)
      .filter((pl) => {
        const d = planMbps(pl.download);
        return d >= min && d <= max && (!needUpload || planMbps(pl.upload) >= d * 0.5);
      })
      .sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (fits[0]) out.push({ p, plan: fits[0] });
  }
  return out.sort((a, b) => (a.plan.price ?? 0) - (b.plan.price ?? 0)).slice(0, 3);
}

function Choice({ on, onClick, icon: Icon, label }: { on: boolean; onClick: () => void; icon?: React.ElementType; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`flex min-h-14 items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
        on ? "bg-brand-700 text-white shadow-lift" : "bg-slate-50 text-navy ring-1 ring-slate-200 hover:ring-brand-300"
      }`}
    >
      {Icon && (
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${on ? "bg-white/15" : "bg-white text-brand-700"}`}>
          <Icon className="h-[18px] w-[18px]" />
        </span>
      )}
      {label}
    </button>
  );
}

export function SpeedGuide() {
  const router = useRouter();
  const [who, setWho] = useState<number | null>(null);
  const [acts, setActs] = useState<string[]>([]);
  const [dev, setDev] = useState<number | null>(null);

  const chosen = activities.filter((a) => acts.includes(a.k));
  const score = (who ?? 0) + chosen.reduce((s, a) => s + a.add, 0) + (dev !== null ? devices[dev].add : 0);
  const needUpload = chosen.some((a) => a.upload);
  const rec = recommend(score, needUpload);
  const matches = matchPlans(rec.min, rec.max, needUpload);

  return (
    <Stepper
      initialStep={1}
      backButtonText="Previous"
      nextButtonText="Next"
      finalButtonText={matches[0] ? `View ${matches[0].p.name} plans` : "See matching plans"}
      canProceed={(s) => (s === 1 ? who !== null : s === 2 ? acts.length > 0 : s === 3 ? dev !== null : true)}
      onFinalStepCompleted={() => router.push(matches[0] ? `/providers/${matches[0].p.slug}#plans` : rec.href)}
    >
      <Step>
        <h3 className="text-xl font-extrabold text-navy sm:text-2xl">Who uses the internet at home?</h3>
        <p className="mt-1 text-sm text-slate-500">Pick one.</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {people.map((p) => (
            <Choice key={p.label} on={who === p.v} onClick={() => setWho(p.v)} icon={p.icon} label={p.label} />
          ))}
        </div>
      </Step>
      <Step>
        <h3 className="text-xl font-extrabold text-navy sm:text-2xl">What do you do most online?</h3>
        <p className="mt-1 text-sm text-slate-500">Choose all that apply.</p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {activities.map((a) => (
            <Choice
              key={a.k}
              on={acts.includes(a.k)}
              onClick={() => setActs((s) => (s.includes(a.k) ? s.filter((x) => x !== a.k) : [...s, a.k]))}
              icon={a.icon}
              label={a.label}
            />
          ))}
        </div>
      </Step>
      <Step>
        <h3 className="text-xl font-extrabold text-navy sm:text-2xl">How many connected devices?</h3>
        <p className="mt-1 text-sm text-slate-500">Phones, TVs, laptops, consoles, smart-home gear.</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {devices.map((d, i) => (
            <Choice key={d.label} on={dev === i} onClick={() => setDev(i)} label={d.label} />
          ))}
        </div>
      </Step>
      <Step>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Your recommended speed</p>
        <p className="mt-2 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">{rec.range}</p>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700"
            initial={{ width: 0 }}
            animate={{ width: `${rec.pct}%` }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] font-medium text-slate-400">
          <span>50 Mbps</span>
          <span>500 Mbps</span>
          <span>2 Gbps+</span>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Best connection type: <strong className="text-navy">{rec.type}</strong>
        </p>
        {matches.length > 0 && (
          <div className="mt-5">
            <p className="text-sm font-bold text-navy">Plans that match your home</p>
            <ul className="mt-3 space-y-2.5">
              {matches.map(({ p, plan }) => (
                <li key={p.slug}>
                  <Link
                    href={`/providers/${p.slug}#plans`}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200 transition-colors hover:ring-brand-300"
                  >
                    <span className="flex h-10 w-20 shrink-0 items-center justify-center rounded-lg bg-white px-1.5 ring-1 ring-slate-100">
                      <Image src={p.logo} alt={`${p.name} logo`} width={80} height={32} className="h-7 w-full object-contain" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-navy">{plan.tier}</span>
                      <span className="block text-xs text-slate-500">{plan.download} download</span>
                    </span>
                    <span className="text-right">
                      <span className="block text-lg font-extrabold text-navy">{money(plan.price ?? 0)}</span>
                      <span className="block text-[10px] font-semibold uppercase text-slate-400">per month*</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a href={`tel:${phone.tel}`} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-sky-soft px-4 py-3 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
              <Phone className="h-4 w-4" /> Call {phone.display} to order any of these plans
            </a>
          </div>
        )}
      </Step>
    </Stepper>
  );
}
