import type { CSSProperties } from "react";

/**
 * Page themes. Every provider landing page (and internet-type page) gets its own palette and layout mix,
 * so no two pages look alike. Colors follow each provider's logo.
 */
export type HeroVariant = "split" | "centered" | "immersive" | "editorial";
export type PlansVariant = "cards" | "rows";
export type FeaturesVariant = "bento" | "list";
export type Motif = "rings" | "orbit" | "chevrons" | "swirl" | "dots" | "check" | "stripes" | "stars" | "grid";

export type PageTheme = {
  acc: string; // primary brand color
  acc2: string; // secondary / lighter brand color
  ink: string; // dark text + dark surfaces
  soft: string; // tinted light surface
  onAcc: string; // text color on top of acc
  accText?: string; // readable accent for text on white (defaults to acc)
  heroBg: string; // CSS background for the hero
  heroDark: boolean; // hero uses light text
  invertCta?: boolean; // hero background is the brand color itself, so the main button goes white
  hero: HeroVariant;
  plans: PlansVariant;
  features: FeaturesVariant;
  motif: Motif;
  /** Order of body sections after the hero. */
  order: ("overview" | "plans" | "features" | "ratings" | "tv" | "faqs")[];
};

const defaultOrder: PageTheme["order"] = ["overview", "plans", "features", "ratings", "tv", "faqs"];

export const providerThemes: Record<string, PageTheme> = {
  att: {
    acc: "#009fdb", acc2: "#3cc3f0", ink: "#0a1f33", soft: "#eaf7fd", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 70% 60% at 85% 0%, #c9efff 0%, transparent 60%), linear-gradient(180deg, #f3fbff 0%, #ffffff 100%)",
    heroDark: false, hero: "split", plans: "cards", features: "bento", motif: "rings", order: defaultOrder,
  },
  earthlink: {
    acc: "#f7941d", acc2: "#ffb45c", ink: "#2b2b2b", soft: "#fff5ea", onAcc: "#1f1f1f", accText: "#c56a00",
    heroBg: "radial-gradient(ellipse 60% 70% at 50% 0%, #ffe2bf 0%, transparent 65%), linear-gradient(180deg, #fffaf4 0%, #ffffff 100%)",
    heroDark: false, hero: "centered", plans: "rows", features: "list", motif: "orbit",
    order: ["overview", "features", "plans", "ratings", "faqs", "tv"],
  },
  spectrum: {
    acc: "#0099d8", acc2: "#4cc1ef", ink: "#002a5c", soft: "#e8f4fb", onAcc: "#ffffff",
    heroBg: "linear-gradient(120deg, #001c40 0%, #002a5c 55%, #00457f 100%)",
    heroDark: true, hero: "immersive", plans: "cards", features: "bento", motif: "chevrons",
    order: ["overview", "plans", "tv", "features", "ratings", "faqs"],
  },
  kinetic: {
    acc: "#8b1e7e", acc2: "#00b1e1", ink: "#0b0b2e", soft: "#f7eef6", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 50% 60% at 90% 10%, rgba(0,177,225,.35) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 70% 100%, rgba(139,30,126,.45) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 100% 60%, rgba(45,179,107,.30) 0%, transparent 60%), #0b0b2e",
    heroDark: true, hero: "editorial", plans: "rows", features: "bento", motif: "swirl",
    order: ["overview", "plans", "ratings", "features", "faqs", "tv"],
  },
  brightspeed: {
    acc: "#ffb400", acc2: "#ff7a00", ink: "#111111", soft: "#fff8e1", onAcc: "#111111", accText: "#a86200",
    heroBg: "radial-gradient(ellipse 60% 70% at 100% 0%, rgba(255,180,0,.28) 0%, transparent 60%), #111111",
    heroDark: true, hero: "immersive", plans: "cards", features: "list", motif: "dots",
    order: ["overview", "features", "plans", "ratings", "faqs", "tv"],
  },
  verizon: {
    acc: "#ee0000", acc2: "#ff4d4d", ink: "#000000", soft: "#f5f5f5", onAcc: "#ffffff",
    heroBg: "#ffffff",
    heroDark: false, hero: "editorial", plans: "rows", features: "bento", motif: "check",
    order: defaultOrder,
  },
  frontier: {
    acc: "#ff0037", acc2: "#ff5c7a", ink: "#1c0a10", soft: "#fff0f3", onAcc: "#ffffff",
    heroBg: "linear-gradient(135deg, #ff0037 0%, #d4002e 55%, #8f001f 100%)",
    heroDark: true, invertCta: true, hero: "centered", plans: "cards", features: "list", motif: "stripes",
    order: ["overview", "plans", "features", "faqs", "ratings", "tv"],
  },
  hughesnet: {
    acc: "#005bac", acc2: "#0a9bff", ink: "#021a3a", soft: "#eaf4ff", onAcc: "#ffffff",
    heroBg: "linear-gradient(180deg, #010b1f 0%, #021a3a 60%, #03306b 100%)",
    heroDark: true, hero: "immersive", plans: "cards", features: "bento", motif: "stars",
    order: ["overview", "plans", "features", "ratings", "faqs", "tv"],
  },
  optimum: {
    acc: "#111111", acc2: "#ff5a1f", ink: "#0a0a0a", soft: "#f4f4f5", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 50% 60% at 100% 100%, rgba(255,90,31,.25) 0%, transparent 60%), #0a0a0a",
    heroDark: true, invertCta: true, hero: "split", plans: "rows", features: "list", motif: "grid",
    order: ["overview", "plans", "tv", "features", "ratings", "faqs"],
  },
};

/** Internet-type pages stay in the site's blue family but each gets its own hue and layout. */
export const typeThemes: Record<string, PageTheme> = {
  fiber: {
    acc: "#4f46e5", acc2: "#818cf8", ink: "#1e1b4b", soft: "#eef2ff", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 70% 70% at 80% 20%, rgba(129,140,248,.45) 0%, transparent 60%), linear-gradient(135deg, #0f0c3d 0%, #1e1b4b 60%, #312e81 100%)",
    heroDark: true, hero: "immersive", plans: "cards", features: "bento", motif: "stripes", order: defaultOrder,
  },
  "5g-home-internet": {
    acc: "#0891b2", acc2: "#22d3ee", ink: "#083344", soft: "#ecfeff", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 60% 70% at 90% 0%, #a5f3fc 0%, transparent 60%), linear-gradient(180deg, #f0fdff 0%, #ffffff 100%)",
    heroDark: false, hero: "split", plans: "cards", features: "list", motif: "rings", order: defaultOrder,
  },
  cable: {
    acc: "#1d43d8", acc2: "#3b74f6", ink: "#0b1b3f", soft: "#f4f8ff", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 60% 70% at 50% 0%, #cfe0ff 0%, transparent 65%), linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%)",
    heroDark: false, hero: "centered", plans: "cards", features: "bento", motif: "grid", order: defaultOrder,
  },
  dsl: {
    acc: "#3b5bdb", acc2: "#748ffc", ink: "#1b2559", soft: "#f0f3ff", onAcc: "#ffffff",
    heroBg: "#ffffff",
    heroDark: false, hero: "editorial", plans: "cards", features: "list", motif: "dots", order: defaultOrder,
  },
  "fixed-wireless": {
    acc: "#0e7490", acc2: "#2dd4bf", ink: "#042f2e", soft: "#effcf9", onAcc: "#ffffff",
    heroBg: "linear-gradient(135deg, #042f2e 0%, #0e4f5c 60%, #0e7490 100%)",
    heroDark: true, hero: "immersive", plans: "cards", features: "bento", motif: "rings", order: defaultOrder,
  },
  satellite: {
    acc: "#2563eb", acc2: "#60a5fa", ink: "#020b24", soft: "#eff6ff", onAcc: "#ffffff",
    heroBg: "linear-gradient(180deg, #01040f 0%, #020b24 60%, #0b2a6b 100%)",
    heroDark: true, hero: "centered", plans: "cards", features: "list", motif: "stars", order: defaultOrder,
  },
  "no-contract": {
    acc: "#0284c7", acc2: "#38bdf8", ink: "#0c2a44", soft: "#f0f9ff", onAcc: "#ffffff",
    heroBg: "radial-gradient(ellipse 70% 60% at 0% 0%, #bae6fd 0%, transparent 60%), linear-gradient(180deg, #f5fbff 0%, #ffffff 100%)",
    heroDark: false, hero: "split", plans: "cards", features: "bento", motif: "check", order: defaultOrder,
  },
};

export const themeVars = (t: PageTheme) =>
  ({
    "--acc": t.acc,
    "--acc-2": t.acc2,
    "--acc-ink": t.ink,
    "--acc-soft": t.soft,
    "--on-acc": t.onAcc,
    "--acc-text": t.accText ?? t.acc,
  }) as CSSProperties;
