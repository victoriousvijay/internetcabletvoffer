"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Briefcase, Film, Gamepad2, Globe, Home, Upload, User, Users, UsersRound } from "lucide-react";
import { Step, Stepper } from "@/components/ui/Stepper";

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
      ? { range: "100–200 Mbps", type: "5G Home, Cable or DSL", href: "/internet/5g-home-internet", pct: 18 }
      : score <= 500
        ? { range: "300–500 Mbps", type: "Cable or Fiber", href: "/internet/cable", pct: 42 }
        : score <= 1000
          ? { range: "500 Mbps – 1 Gbps", type: "Fiber or Cable", href: "/internet/fiber", pct: 68 }
          : { range: "1–2+ Gbps", type: "Multi-gig Fiber", href: "/internet/fiber", pct: 95 };
  return upload && r.pct > 18 ? { ...r, type: "Fiber (fast uploads)", href: "/internet/fiber" } : r;
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
  const rec = recommend(score, chosen.some((a) => a.upload));

  return (
    <Stepper
      initialStep={1}
      backButtonText="Previous"
      nextButtonText="Next"
      finalButtonText="See matching plans"
      canProceed={(s) => (s === 1 ? who !== null : s === 2 ? acts.length > 0 : s === 3 ? dev !== null : true)}
      onFinalStepCompleted={() => router.push(rec.href)}
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
        <div className="mt-6 rounded-2xl bg-sky-soft p-4 ring-1 ring-brand-100">
          <p className="text-xs text-slate-500">Best connection type</p>
          <p className="font-extrabold text-navy">{rec.type}</p>
        </div>
      </Step>
    </Stepper>
  );
}
