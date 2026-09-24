"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarCheck,
  Cable,
  ChevronDown,
  FileText,
  HelpCircle,
  LayoutGrid,
  Mail,
  Menu,
  Phone,
  RadioTower,
  Satellite,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ProviderLogo } from "@/components/ui/ProviderBadge";
import { internetNav } from "@/lib/site";
import { providers } from "@/data/providers";
import { MobileMenu } from "./MobileMenu";

const typeIcons = [LayoutGrid, Zap, Wifi, Cable, Phone, RadioTower, Satellite, CalendarCheck];

type MenuKey = "internet" | "providers" | "company";

const items: { key: string; label: string; href: string; menu?: MenuKey }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "internet", label: "Internet", href: "/internet-providers", menu: "internet" },
  { key: "providers", label: "Providers", href: "/internet-providers", menu: "providers" },
  { key: "faqs", label: "FAQs", href: "/faqs" },
  { key: "company", label: "Company", href: "/about", menu: "company" },
];

function activeKey(path: string) {
  if (path === "/") return "home";
  if (path.startsWith("/internet")) return "internet";
  if (path.startsWith("/providers")) return "providers";
  if (path.startsWith("/faqs")) return "faqs";
  if (["/about", "/contact", "/privacy", "/terms", "/disclaimer"].some((p) => path.startsWith(p))) return "company";
  return "";
}

const panelV = {
  hidden: { opacity: 0, y: 10, scale: 0.97, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.03 } },
  exit: { opacity: 0, y: 6, scale: 0.98, filter: "blur(2px)", transition: { duration: 0.16 } },
};
const itemV = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = activeKey(pathname);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes (adjust state during render instead of in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  const enter = (key: string, m?: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered(key);
    setMenu(m ?? null);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => {
      setMenu(null);
      setHovered(null);
    }, 160);
  };

  const pill = hovered ?? active;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.35rem] py-2 pl-3 pr-2 transition-all duration-500 sm:pl-4 ${
            scrolled
              ? "bg-white/90 shadow-[0_18px_50px_-18px_rgb(11_27_63/0.35)] ring-1 ring-slate-200/80 backdrop-blur-xl"
              : "bg-white/95 shadow-[0_10px_40px_-20px_rgb(11_27_63/0.5)] ring-1 ring-white/70 backdrop-blur-xl"
          }`}
          aria-label="Main navigation"
        >
          <Logo />

          {/* Center rail with sliding pill */}
          <ul
            className="relative hidden items-center gap-0.5 rounded-full bg-slate-100/80 p-1 ring-1 ring-slate-200/70 lg:flex"
            onMouseLeave={leave}
          >
            {items.map((it) => {
              const isActive = active === it.key;
              const isPill = pill === it.key;
              const open = menu !== null && menu === it.menu;
              return (
                <li key={it.key} className="relative" onMouseEnter={() => enter(it.key, it.menu)}>
                  <Link
                    href={it.href}
                    onFocus={() => enter(it.key, it.menu)}
                    className={`relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors duration-300 ${
                      isPill ? "text-navy" : "text-slate-500 hover:text-navy"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={it.menu ? "true" : undefined}
                    aria-expanded={it.menu ? open : undefined}
                  >
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-400 to-brand-700" />}
                    {it.label}
                    {it.menu && <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />}
                  </Link>
                  {isPill && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_-2px_rgb(11_27_63/0.18)] ring-1 ring-slate-200/80"
                      transition={{ type: "spring", stiffness: 480, damping: 36 }}
                    />
                  )}

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        key={it.menu}
                        variants={panelV}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className={`absolute top-full z-20 pt-4 ${it.menu === "providers" ? "left-1/2" : "left-0"}`}
                        style={it.menu === "providers" ? { x: "-50%" } : undefined}
                      >
                        {it.menu === "internet" && <InternetMenu />}
                        {it.menu === "providers" && <ProvidersMenu />}
                        {it.menu === "company" && <CompanyMenu />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/internet-providers#compare"
              className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgb(29_67_216/0.8)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex sm:items-center sm:gap-2"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              Compare Plans
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Scroll progress */}
          <motion.span
            className="absolute inset-x-5 bottom-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800"
            style={{ scaleX: progress }}
          />
        </motion.nav>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white p-2 shadow-[0_30px_70px_-20px_rgb(11_27_63/0.35)] ring-1 ring-slate-200/80 ${className}`}>
      {children}
    </div>
  );
}

function MenuRow({ href, icon: Icon, title, desc }: { href: string; icon: React.ElementType; title: string; desc?: string }) {
  return (
    <motion.div variants={itemV}>
      <Link href={href} className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-navy transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-bold text-navy">{title}</span>
          {desc && <span className="block truncate text-xs text-slate-500">{desc}</span>}
        </span>
      </Link>
    </motion.div>
  );
}

function InternetMenu() {
  return (
    <Panel className="w-[34rem]">
      <div className="grid grid-cols-2 gap-0.5">
        {internetNav.map((l, i) => (
          <MenuRow key={l.href} href={l.href} icon={typeIcons[i]} title={l.label} desc={l.description} />
        ))}
      </div>
      <motion.div variants={itemV}>
        <Link
          href="/internet/fiber"
          className="mt-1.5 flex items-center justify-between rounded-xl bg-gradient-to-r from-brand-700 to-navy px-4 py-3 text-sm text-white"
        >
          <span>
            <span className="font-bold">Not sure?</span> <span className="text-brand-100/80">Fiber is usually the best value.</span>
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </Panel>
  );
}

function ProvidersMenu() {
  return (
    <Panel className="w-[40rem]">
      <div className="grid grid-cols-3 gap-1.5 p-1">
        {providers.map((p) => (
          <motion.div key={p.slug} variants={itemV}>
            <Link
              href={`/providers/${p.slug}`}
              className="group flex h-full flex-col items-center justify-center gap-2 rounded-xl p-3 text-center ring-1 ring-slate-100 transition-all duration-300 hover:bg-slate-50 hover:ring-brand-200"
            >
              <span className="flex h-9 items-center transition-transform duration-300 group-hover:scale-105">
                <ProviderLogo p={p} className="h-7 max-w-[7.5rem]" />
              </span>
              <span className="text-[11px] font-medium text-slate-500">{p.blurb}</span>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div variants={itemV}>
        <Link
          href="/internet-providers"
          className="mx-1 mb-1 mt-1.5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-brand-50 hover:text-brand-800"
        >
          Compare all providers side by side <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </Panel>
  );
}

function CompanyMenu() {
  return (
    <Panel className="w-72">
      <MenuRow href="/about" icon={Building2} title="About Us" desc="Who we are & how we rate" />
      <MenuRow href="/contact" icon={Mail} title="Contact" desc="Questions & corrections" />
      <MenuRow href="/faqs" icon={HelpCircle} title="FAQs" desc="Straight answers" />
      <div className="my-1 h-px bg-slate-100" />
      <MenuRow href="/privacy-policy" icon={ShieldCheck} title="Privacy Policy" />
      <MenuRow href="/terms-and-conditions" icon={FileText} title="Terms & Conditions" />
    </Panel>
  );
}
