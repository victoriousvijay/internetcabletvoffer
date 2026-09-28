import Image from "next/image";
import { MapPinned, Router, ShieldCheck, Sparkles, Tv, Users } from "lucide-react";
import type { Provider } from "@/data/providers";
import type { PageTheme } from "@/data/themes";
import { img, images, pricingDisclaimer } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallButton } from "@/components/ui/CallButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { RatingBars } from "@/components/sections/RatingBars";
import { ProsCons } from "@/components/sections/ProsCons";
import { PlanCard } from "@/components/sections/PlanCard";

const featureIcons = [Sparkles, Router, ShieldCheck, Users];

/* ---------------- Plans ---------------- */

export function Plans({ p }: { p: Provider; theme?: PageTheme }) {
  return (
    <section id="plans" className="scroll-mt-40 bg-gradient-to-b from-acc-soft to-white py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-acc-ink sm:text-5xl">{p.name} Internet Plans</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Explore <span className="font-semibold text-acc-text">{p.name}</span> plans for speed, reliability and value.
            Call now to lock in today&apos;s price at your address.
          </p>
        </div>
        {/* Phones: swipeable snap carousel. Desktop: grid. */}
        <Stagger className="snap-row no-scrollbar -mx-4 mt-12 flex gap-5 overflow-x-auto px-4 pb-4 pt-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {p.plans.map((pl) => (
            <StaggerItem key={pl.tier} className="w-[86%] shrink-0 sm:w-auto">
              <PlanCard plan={pl} />
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-xs leading-relaxed text-slate-500">*{pricingDisclaimer}</p>
      </div>
    </section>
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
            <CallButton className="mt-8" label="Call for TV + internet" />
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
