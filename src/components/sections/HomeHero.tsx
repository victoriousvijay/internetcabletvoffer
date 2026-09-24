"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, Gauge, ShieldCheck, Sparkles, Star, Tv, Wifi } from "lucide-react";
import { ZipSearch } from "@/components/ui/ZipSearch";
import { img, images, site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft via-white to-white pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-10 h-[30rem] w-[30rem] rounded-full bg-brand-300/30 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" /> Deals updated {site.lastReviewed}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-5 text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-[4.1rem]"
          >
            The best internet &amp; cable TV offers,{" "}
            <span className="relative bg-gradient-to-r sm:whitespace-nowrap from-brand-600 to-brand-800 bg-clip-text text-transparent">
              compared clearly.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden="true">
                <motion.path
                  d="M2 9C60 3 140 1 298 7"
                  stroke="#6096fa"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.7, ease }}
                />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Compare plans, prices and speeds from AT&amp;T, Spectrum, Verizon, Frontier, Optimum and more — then pick the
            deal that fits your home.
          </motion.p>
          <motion.div
            id="check"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-8 max-w-xl scroll-mt-32"
          >
            <ZipSearch />
          </motion.div>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } } }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600"
          >
            {[
              { icon: BadgeCheck, t: "Free to compare" },
              { icon: ShieldCheck, t: "Independent ratings" },
              { icon: Gauge, t: "Speeds up to 8 Gbps" },
            ].map(({ icon: Icon, t }) => (
              <motion.li key={t} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-brand-600" /> {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-[2.2rem] shadow-lift ring-1 ring-slate-200/60 sm:aspect-[4/3.9]">
            <Image
              src={img(images.friendsLaptops, 1400)}
              alt="Friends streaming and browsing together on fast home Wi-Fi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          </div>

          <div className="absolute left-2 top-6 animate-float sm:-left-10">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-lift ring-1 ring-slate-200/70 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Wifi className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-medium text-slate-500">Fiber 1 Gig from</p>
                <p className="text-lg font-extrabold text-navy">
                  $65<span className="text-xs font-semibold text-slate-500">/mo</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-2 top-1/2 animate-float [animation-delay:1.5s] sm:-right-8">
            <div className="rounded-2xl bg-white/95 p-4 shadow-lift ring-1 ring-slate-200/70 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Download</p>
              <p className="text-2xl font-extrabold text-navy">
                940<span className="ml-1 text-xs font-semibold text-slate-500">Mbps</span>
              </p>
              <div className="mt-2 flex h-8 items-end gap-1">
                {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-2 rounded-full bg-gradient-to-t from-brand-400 to-brand-700"
                    initial={{ height: 4 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.08, ease }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-6 animate-float [animation-delay:3s] sm:left-12">
            <div className="flex items-center gap-3 rounded-2xl bg-navy p-3 pr-5 text-white shadow-lift">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Tv className="h-5 w-5 text-brand-200" />
              </span>
              <div>
                <p className="text-[11px] text-brand-200">Internet + TV bundles</p>
                <p className="flex items-center gap-1 text-sm font-bold">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 9 top providers rated
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
