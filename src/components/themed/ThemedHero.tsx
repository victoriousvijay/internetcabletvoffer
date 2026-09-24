import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import type { PageTheme } from "@/data/themes";
import { img, site } from "@/lib/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Motif } from "./Motif";

export type HeroProps = {
  theme: PageTheme;
  crumbs: { name: string; path: string }[];
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  logo?: { src: string; alt: string; tall?: boolean };
  chips?: string[];
  stats: { label: string; value: string }[];
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  topline?: React.ReactNode;
};

/** One hero, four very different layouts. The theme decides which one a page gets. */
export function ThemedHero(props: HeroProps) {
  const { theme } = props;
  const dark = theme.heroDark;
  return (
    <section
      className={`relative overflow-hidden ${dark ? "text-white" : "text-acc-ink"} ${theme.hero === "immersive" ? "" : "pb-14 sm:pb-20"}`}
      style={{ background: theme.heroBg }}
    >
      {theme.hero !== "immersive" && <Motif kind={theme.motif} dark={dark} />}
      {theme.hero === "split" && <Split {...props} />}
      {theme.hero === "centered" && <Centered {...props} />}
      {theme.hero === "immersive" && <Immersive {...props} />}
      {theme.hero === "editorial" && <Editorial {...props} />}
    </section>
  );
}

/* ---------- shared bits ---------- */

function LogoTile({ logo, size = "md" }: { logo?: HeroProps["logo"]; size?: "md" | "lg" }) {
  if (!logo) return null;
  const box = size === "lg" ? "h-20 w-52 sm:h-24 sm:w-64" : "h-14 w-36 sm:h-16 sm:w-44";
  return (
    <span className={`inline-flex items-center justify-center rounded-2xl bg-white px-5 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] ring-1 ring-black/5 ${box}`}>
      <Image src={logo.src} alt={logo.alt} width={240} height={96} priority className={`w-full object-contain ${logo.tall ? "h-[92%]" : "h-[58%]"}`} />
    </span>
  );
}

function Chips({ chips, dark }: { chips?: string[]; dark: boolean }) {
  if (!chips?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {chips.map((c) => (
        <span
          key={c}
          className={`rounded-full px-3 py-1 text-xs font-semibold ${dark ? "bg-white/10 text-white/90 ring-1 ring-white/15" : "bg-white text-acc-ink ring-1 ring-black/5"}`}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function Ctas({ primary, secondary, dark, center, invert }: { primary: HeroProps["primary"]; secondary?: HeroProps["secondary"]; dark: boolean; center?: boolean; invert?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${center ? "sm:justify-center" : ""}`}>
      <Link href={primary.href} className={`btn w-full sm:w-auto ${invert ? "bg-white text-acc-ink shadow-lift hover:-translate-y-0.5 hover:bg-white/90" : "btn-primary"}`}>
        {primary.label} <ArrowRight className="h-4 w-4" />
      </Link>
      {secondary && (
        <Link
          href={secondary.href}
          className={`btn w-full sm:w-auto ${dark ? "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15" : "btn-ghost"}`}
        >
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

function Reviewed({ dark, center }: { dark: boolean; center?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-medium ${center ? "justify-center" : ""} ${dark ? "text-white/60" : "text-slate-500"}`}>
      <CalendarCheck className="h-4 w-4" /> Last reviewed {site.lastReviewed}
    </p>
  );
}

function Stats({ stats, dark, variant }: { stats: HeroProps["stats"]; dark: boolean; variant: "glass" | "card" | "strip" }) {
  if (variant === "strip") {
    return (
      <dl className={`grid grid-cols-2 border-t sm:grid-cols-4 ${dark ? "border-white/15" : "border-black/10"}`}>
        {stats.map((s, i) => (
          <div key={s.label} className={`py-5 pr-4 ${i % 2 === 1 ? "pl-4 sm:pl-6" : "sm:pl-6"} ${i > 0 ? `sm:border-l ${dark ? "border-white/15" : "border-black/10"}` : "sm:pl-0"}`}>
            <dt className={`text-xs font-medium uppercase tracking-wider ${dark ? "text-white/55" : "text-slate-500"}`}>{s.label}</dt>
            <dd className="mt-1 text-xl font-extrabold sm:text-2xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className={
            variant === "glass"
              ? "rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-md"
              : "rounded-2xl bg-white p-4 text-acc-ink shadow-card ring-1 ring-black/5"
          }
        >
          <dt className={`text-[11px] font-medium ${variant === "glass" ? "text-white/60" : "text-slate-500"}`}>{s.label}</dt>
          <dd className="mt-0.5 text-base font-extrabold sm:text-lg">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- layouts ---------- */

function Split(p: HeroProps) {
  const dark = p.theme.heroDark;
  return (
    <div className="container-x relative grid items-center gap-10 pt-28 sm:pt-36 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
      <Reveal className="space-y-6">
        <Breadcrumbs items={p.crumbs} light={dark} />
        <div className="flex flex-wrap items-center gap-4">
          <LogoTile logo={p.logo} />
          {p.topline}
        </div>
        <h1 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">{p.title}</h1>
        <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-slate-600"}`}>{p.intro}</p>
        <Chips chips={p.chips} dark={dark} />
        <Ctas primary={p.primary} secondary={p.secondary} dark={dark} invert={p.theme.invertCta} />
        <Reviewed dark={dark} />
      </Reveal>
      <Reveal delay={0.15} className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-black/5 lg:aspect-[4/4.2]">
          <Image src={img(p.image, 1200)} alt={p.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--acc-ink) 70%, transparent), transparent 55%)" }} />
          <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
            <Stats stats={p.stats} dark variant="glass" />
          </div>
        </div>
        <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[2rem] bg-acc opacity-20 sm:-right-4 sm:-top-4" />
      </Reveal>
    </div>
  );
}

function Centered(p: HeroProps) {
  const dark = p.theme.heroDark;
  return (
    <div className="relative pt-28 sm:pt-36">
      <Reveal className="container-x flex flex-col items-center space-y-6 text-center">
        <Breadcrumbs items={p.crumbs} light={dark} />
        <LogoTile logo={p.logo} size="lg" />
        {p.topline}
        <h1 className="mx-auto max-w-4xl text-[2.2rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl">{p.title}</h1>
        <p className={`mx-auto max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/80" : "text-slate-600"}`}>{p.intro}</p>
        <div className="flex justify-center">
          <Chips chips={p.chips} dark={dark} />
        </div>
        <div className="w-full sm:w-auto">
          <Ctas primary={p.primary} secondary={p.secondary} dark={dark} invert={p.theme.invertCta} center />
        </div>
        <Reviewed dark={dark} center />
      </Reveal>
      <Reveal delay={0.15} className="container-x relative mt-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-black/5 sm:aspect-[21/8]">
          <Image src={img(p.image, 1800)} alt={p.imageAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="relative -mt-12 px-3 sm:-mt-14 sm:px-10">
          <Stats stats={p.stats} dark={false} variant="card" />
        </div>
      </Reveal>
    </div>
  );
}

function Immersive(p: HeroProps) {
  return (
    <div className="relative min-h-[40rem] sm:min-h-[44rem]">
      <Image src={img(p.image, 2000)} alt={p.imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 opacity-[0.88]" style={{ background: p.theme.heroBg }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <Motif kind={p.theme.motif} dark />
      <div className="container-x relative flex min-h-[40rem] flex-col justify-end pb-10 pt-28 sm:min-h-[44rem] sm:pb-14 sm:pt-36">
        <Reveal className="max-w-2xl space-y-6">
          <Breadcrumbs items={p.crumbs} light />
          <div className="flex flex-wrap items-center gap-4">
            <LogoTile logo={p.logo} />
            {p.topline}
          </div>
          <h1 className="text-[2.2rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl">{p.title}</h1>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">{p.intro}</p>
          <Chips chips={p.chips} dark />
          <Ctas primary={p.primary} secondary={p.secondary} dark invert={p.theme.invertCta} />
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <Stats stats={p.stats} dark variant="glass" />
        </Reveal>
      </div>
    </div>
  );
}

function Editorial(p: HeroProps) {
  const dark = p.theme.heroDark;
  return (
    <div className="container-x relative pt-28 sm:pt-36">
      <Reveal className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumbs items={p.crumbs} light={dark} />
        <Reviewed dark={dark} />
      </Reveal>
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Reveal className="space-y-7">
          <div className="flex flex-wrap items-center gap-4">
            <LogoTile logo={p.logo} />
            {p.topline}
          </div>
          <h1 className="text-[2.4rem] font-black leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[5.2rem]">{p.title}</h1>
          <div className="h-1.5 w-24 rounded-full bg-acc" />
          <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-slate-600"}`}>{p.intro}</p>
          <Chips chips={p.chips} dark={dark} />
          <Ctas primary={p.primary} secondary={p.secondary} dark={dark} invert={p.theme.invertCta} />
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:aspect-[3/4]">
            <Image src={img(p.image, 1200)} alt={p.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover grayscale-[35%]" />
            <div className="absolute inset-0 mix-blend-multiply" style={{ background: "color-mix(in srgb, var(--acc) 22%, transparent)" }} />
          </div>
          <span className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl bg-acc sm:h-28 sm:w-28" />
        </Reveal>
      </div>
      <Reveal delay={0.1} className="mt-12">
        <Stats stats={p.stats} dark={dark} variant="strip" />
      </Reveal>
    </div>
  );
}
