"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ProviderBadge } from "@/components/ui/ProviderBadge";
import { internetNav, legalNav, resourceNav } from "@/lib/site";
import { providers } from "@/data/providers";

const listV = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } };
const itemV = { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } } };

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <motion.div
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <Logo />
              <button
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav className="flex-1 overflow-y-auto px-4 py-4" variants={listV} initial="hidden" animate="show">
              <motion.div variants={itemV}>
                <Link
                  href="/"
                  className={`flex min-h-12 items-center rounded-xl px-3 text-base font-bold ${isActive("/") ? "bg-brand-50 text-brand-800" : "text-navy"}`}
                >
                  Home
                </Link>
              </motion.div>

              <Accordion id="internet" label="Internet Types" section={section} setSection={setSection}>
                {internetNav.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`flex min-h-11 items-center justify-between rounded-lg px-3 text-[15px] font-medium ${
                      isActive(l.href) ? "bg-brand-50 text-brand-800" : "text-slate-600"
                    }`}
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </Link>
                ))}
              </Accordion>

              <Accordion id="providers" label="Providers" section={section} setSection={setSection}>
                <div className="grid grid-cols-2 gap-2 pb-1">
                  {providers.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/providers/${p.slug}`}
                      className={`flex items-center gap-2.5 rounded-xl p-2.5 ring-1 ${
                        isActive(`/providers/${p.slug}`) ? "bg-brand-50 ring-brand-200" : "ring-slate-100"
                      }`}
                    >
                      <ProviderBadge p={p} size="sm" />
                      <span className="text-sm font-semibold text-navy">{p.name}</span>
                    </Link>
                  ))}
                </div>
              </Accordion>

              <Accordion id="company" label="Company" section={section} setSection={setSection}>
                {[...resourceNav, ...legalNav].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium ${
                      isActive(l.href) ? "bg-brand-50 text-brand-800" : "text-slate-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </Accordion>
            </motion.nav>

            <motion.div
              className="border-t border-slate-100 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/internet-providers#compare" className="btn btn-primary w-full">
                Compare Plans <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

function Accordion({
  id,
  label,
  section,
  setSection,
  children,
}: {
  id: string;
  label: string;
  section: string | null;
  setSection: (s: string | null) => void;
  children: React.ReactNode;
}) {
  const open = section === id;
  return (
    <motion.div variants={itemV} className="border-b border-slate-100 py-1">
      <button
        className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-base font-bold text-navy"
        onClick={() => setSection(open ? null : id)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-5 w-5 text-brand-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-0.5 pb-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
