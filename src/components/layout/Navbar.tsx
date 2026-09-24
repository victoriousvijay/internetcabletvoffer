"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, Zap, Wifi, Cable, Phone, RadioTower, Satellite, CalendarCheck, LayoutGrid } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ProviderBadge } from "@/components/ui/ProviderBadge";
import { internetNav, resourceNav } from "@/lib/site";
import { providers } from "@/data/providers";
import { MobileMenu } from "./MobileMenu";

const typeIcons = [LayoutGrid, Zap, Wifi, Cable, Phone, RadioTower, Satellite, CalendarCheck];

type MenuKey = "internet" | "providers" | "resources" | null;

const items: { key: string; label: string; href: string; menu?: MenuKey }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "internet", label: "Internet", href: "/internet-providers", menu: "internet" },
  { key: "providers", label: "Providers", href: "/internet-providers", menu: "providers" },
  { key: "faqs", label: "FAQs", href: "/faqs" },
  { key: "resources", label: "Company", href: "/about", menu: "resources" },
];

function activeKey(path: string) {
  if (path === "/") return "home";
  if (path.startsWith("/internet")) return "internet";
  if (path.startsWith("/providers")) return "providers";
  if (path.startsWith("/faqs")) return "faqs";
  if (["/about", "/contact"].some((p) => path.startsWith(p))) return "resources";
  return "";
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = activeKey(pathname);

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

  const open = (m: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setMenu(null);
      setHovered(null);
    }, 140);
  };

  const pill = hovered ?? active;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled || menu
              ? "bg-white/85 shadow-[0_10px_40px_-12px_rgb(15_37_83/0.25)] ring-1 ring-slate-200/70 backdrop-blur-xl"
              : "bg-white/60 ring-1 ring-white/60 backdrop-blur-md"
          }`}
          aria-label="Main navigation"
          onMouseLeave={scheduleClose}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
            {items.map((it) => {
              const isActive = active === it.key;
              const isPill = pill === it.key;
              return (
                <li key={it.key} className="relative" onMouseEnter={() => { setHovered(it.key); open(it.menu ?? null); }}>
                  <Link
                    href={it.href}
                    className={`relative z-10 flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                      isPill ? "text-brand-800" : "text-slate-600 hover:text-navy"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={it.menu ? "true" : undefined}
                    aria-expanded={it.menu ? menu === it.menu : undefined}
                  >
                    {it.label}
                    {it.menu && (
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${menu === it.menu ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                  {isPill && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-50 ring-1 ring-brand-100"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-600"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/internet-providers#compare" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
              Compare Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {menu && (
              <motion.div
                key="mega"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-full hidden pt-3 lg:block"
                onMouseEnter={() => open(menu)}
                onMouseLeave={scheduleClose}
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgb(15_37_83/0.35)] ring-1 ring-slate-200/70">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={menu}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menu === "internet" && <InternetMenu />}
                      {menu === "providers" && <ProvidersMenu />}
                      {menu === "resources" && <ResourcesMenu />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function InternetMenu() {
  return (
    <div className="grid grid-cols-[1fr_280px]">
      <div className="grid grid-cols-2 gap-1 p-4">
        {internetNav.map((l, i) => {
          const Icon = typeIcons[i];
          return (
            <Link key={l.href} href={l.href} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all group-hover:bg-brand-700 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-navy">{l.label}</span>
                <span className="block text-xs text-slate-500">{l.description}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className="relative flex flex-col justify-end overflow-hidden bg-gradient-to-br from-brand-700 to-navy p-6 text-white">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <p className="relative text-xs font-semibold uppercase tracking-widest text-brand-200">Not sure where to start?</p>
        <p className="relative mt-2 text-lg font-bold leading-snug">Fiber is usually the best value — if it&apos;s at your address.</p>
        <Link href="/internet/fiber" className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
          Explore fiber <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ProvidersMenu() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-1">
        {providers.map((p) => (
          <Link key={p.slug} href={`/providers/${p.slug}`} className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50">
            <ProviderBadge p={p} size="sm" />
            <span className="min-w-0">
              <span className="block text-sm font-bold text-navy">{p.name}</span>
              <span className="block truncate text-xs text-slate-500">From ${p.startingPrice}/mo · up to {p.maxSpeed}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/internet-providers"
        className="mt-2 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-100"
      >
        Compare all providers side by side <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="grid grid-cols-3 gap-1 p-4">
      {[...resourceNav, { label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms & Conditions", href: "/terms-and-conditions" }, { label: "Disclaimer", href: "/disclaimer" }].map((l) => (
        <Link key={l.href} href={l.href} className="rounded-xl p-3 text-sm font-semibold text-navy transition-colors hover:bg-brand-50 hover:text-brand-700">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
