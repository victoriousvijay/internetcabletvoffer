import Image from "next/image";
import Link from "next/link";
import { Check, Flame, Gauge, MapPinned, Router, ShieldCheck, Sparkles, Tv, Users } from "lucide-react";
import type { Provider } from "@/data/providers";
import type { PageTheme } from "@/data/themes";
import { img, images, pricingDisclaimer } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { RatingBars } from "@/components/sections/RatingBars";
import { ProsCons } from "@/components/sections/ProsCons";

const featureIcons = [Sparkles, Router, ShieldCheck, Users];

/* ---------------- Plans ---------------- */

export function Plans({ p, theme }: { p: Provider; theme: PageTheme }) {
  return (
    <section id="plans" className="container-x scroll-mt-40 py-16 sm:py-24">
      <SectionHeading title={`${p.name} internet plans & pricing`} text={`Every ${p.name} plan by speed and monthly price.`} />
      {theme.plans === "cards" ? <PlanCards p={p} /> : <PlanRows p={p} />}
      <p className="mt-6 text-xs leading-relaxed text-slate-500">*{pricingDisclaimer}</p>
    </section>
  );
}

function PlanCards({ p }: { p: Provider }) {
  return (
    // Phones: swipeable snap carousel. Desktop: grid.
    <Stagger className="snap-row no-scrollbar -mx-4 mt-10 flex gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
      {p.plans.map((pl) => (
        <StaggerItem key={pl.name} className="w-[82%] shrink-0 sm:w-auto">
          <div
            className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 ${
              pl.popular ? "bg-acc text-on-acc shadow-lift" : "bg-white text-acc-ink ring-1 ring-slate-200/70 shadow-card hover:shadow-lift"
            }`}
          >
            {pl.popular && (
              <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-black/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
                <Flame className="h-3.5 w-3.5" /> Popular
              </span>
            )}
            <h3 className="pr-20 text-lg font-extrabold">{pl.name}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">${pl.price}</span>
              <span className="text-sm opacity-70">/mo*</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-sm opacity-90">
              <li className="flex items-center gap-2"><Gauge className="h-4 w-4" /> Download: <strong>{pl.download}</strong></li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Upload: {pl.upload}</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> {p.dataCap}</li>
              {pl.note && <li className="flex items-center gap-2"><Check className="h-4 w-4" /> {pl.note}</li>}
            </ul>
            <div className="mt-auto pt-6">
              <Link
                href="#availability"
                className={`btn w-full ${pl.popular ? "bg-white text-black hover:bg-white/90" : "btn-primary"}`}
              >
                Check availability
              </Link>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function PlanRows({ p }: { p: Provider }) {
  return (
    <Stagger className="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-card">
      {p.plans.map((pl, i) => (
        <StaggerItem key={pl.name}>
          <div
            className={`group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-5 py-5 transition-colors hover:bg-acc-soft sm:grid-cols-[1.4fr_1fr_1fr_auto_auto] sm:px-8 ${
              i > 0 ? "border-t border-slate-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-1.5 rounded-full bg-acc opacity-30 transition-opacity group-hover:opacity-100" />
              <div>
                <p className="font-extrabold text-acc-ink">{pl.name}</p>
                {pl.popular && <p className="text-xs font-bold uppercase tracking-wider text-acc-text">Most popular</p>}
                {pl.note && <p className="text-xs text-slate-500">{pl.note}</p>}
              </div>
            </div>
            <p className="order-3 col-span-2 flex gap-4 text-sm text-slate-600 sm:order-none sm:col-span-1 sm:block">
              <span className="sm:block"><span className="text-slate-400">Download </span><strong className="text-acc-ink">{pl.download}</strong></span>
            </p>
            <p className="hidden text-sm text-slate-600 sm:block"><span className="text-slate-400">Upload </span>{pl.upload}</p>
            <p className="text-right text-2xl font-extrabold text-acc-ink sm:text-left">
              ${pl.price}<span className="text-xs font-semibold text-slate-400">/mo*</span>
            </p>
            <Link href="#availability" className="btn btn-primary order-4 col-span-2 !py-2.5 sm:order-none sm:col-span-1">
              Check
            </Link>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* ---------------- Features ---------------- */

export function Features({ p, theme }: { p: Provider; theme: PageTheme }) {
  if (theme.features === "bento") {
    return (
      <section id="features" className="scroll-mt-40 bg-acc-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading title={`Why choose ${p.name}?`} />
          <div className="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2">
            <Reveal className="relative min-h-72 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
              <Image src={img(p.sideImage, 1200)} alt={`${p.name} internet at home`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--acc-ink) 85%, transparent), transparent 60%)" }} />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Best for</p>
                <p className="mt-1 text-xl font-extrabold leading-snug sm:text-2xl">{p.bestFor}</p>
              </div>
            </Reveal>
            {p.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <Reveal key={f.title} delay={i * 0.06} className={`group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 ${i === 0 ? "bg-acc text-on-acc" : "bg-white text-acc-ink ring-1 ring-black/5"}`}>
                  <Icon className={`h-6 w-6 ${i === 0 ? "" : "text-acc-text"}`} />
                  <h3 className="mt-4 font-extrabold">{f.title}</h3>
                  <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "opacity-85" : "text-slate-600"}`}>{f.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="features" className="container-x scroll-mt-40 py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/5]">
            <Image src={img(p.sideImage, 1100)} alt={`${p.name} internet at home`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-acc p-5 text-on-acc shadow-lift sm:left-10 sm:right-10">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-75">Best for</p>
            <p className="mt-1 font-extrabold leading-snug">{p.bestFor}</p>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading title={`${p.name} features & perks`} />
          <ol className="mt-8 space-y-6">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} className="flex gap-5">
                <span className="text-3xl font-black tabular-nums text-acc-text opacity-80">0{i + 1}</span>
                <div className="border-l-2 border-slate-100 pl-5">
                  <h3 className="text-lg font-extrabold text-acc-ink">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ratings ---------------- */

export function Ratings({ p }: { p: Provider }) {
  return (
    <section id="ratings" className="container-x scroll-mt-40 py-16 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="card p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-acc-ink">{p.name} ratings</h2>
            <div className="text-right">
              <p className="text-4xl font-extrabold text-acc-text">{p.rating.toFixed(1)}</p>
              <Stars value={p.rating} />
            </div>
          </div>
          <div className="mt-8">
            <RatingBars scores={p.scores} />
          </div>
          <p className="mt-6 text-xs text-slate-500">Editorial scores based on published plan details, speed tiers, pricing and industry satisfaction data.</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <div className="card p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-acc-ink">
              <MapPinned className="h-6 w-6 text-acc-text" /> Where {p.name} is available
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">{p.coverage}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-acc-soft p-4"><dt className="text-slate-500">Contract</dt><dd className="mt-1 font-bold text-acc-ink">{p.contract}</dd></div>
              <div className="rounded-2xl bg-acc-soft p-4"><dt className="text-slate-500">Data</dt><dd className="mt-1 font-bold text-acc-ink">{p.dataCap}</dd></div>
            </dl>
          </div>
          <div className="card flex-1 p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-acc-ink">Equipment</h2>
            <p className="mt-2 text-slate-600">{p.equipment}</p>
          </div>
        </Reveal>
      </div>
      <div className="mt-12">
        <ProsCons pros={p.pros} cons={p.cons} subject={p.name} />
      </div>
    </section>
  );
}

/* ---------------- TV ---------------- */

export function TvBlock({ p }: { p: Provider }) {
  return (
    <section id="tv" className="container-x scroll-mt-40 py-8 sm:py-12">
      <Reveal className="relative overflow-hidden rounded-[2rem] text-white" >
        <div className="absolute inset-0" style={{ background: "var(--acc-ink)" }} />
        <div className="relative grid lg:grid-cols-2">
          <div className="p-7 sm:p-12">
            <Tv className="h-8 w-8" style={{ color: "var(--acc-2)" }} />
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">{p.tv.title}</h2>
            <p className="mt-4 leading-relaxed text-white/80">{p.tv.text}</p>
            <Link href="#availability" className="btn btn-primary mt-8">
              Check TV &amp; internet options
            </Link>
          </div>
          <div className="relative min-h-64">
            <Image src={img(p.slug === "optimum" ? images.cozyRoom : images.livingRoom, 1000)} alt={`${p.name} internet and TV entertainment setup`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 lg:bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, var(--acc-ink), transparent 60%)" }} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
