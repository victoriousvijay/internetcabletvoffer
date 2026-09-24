"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { providers } from "@/data/providers";
import { providerThemes, typeThemes, themeVars } from "@/data/themes";

/** Phone-only sticky action bar. Provider and internet-type pages get their own colors and actions. */
export function MobileCtaBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const provSlug = pathname.match(/^\/providers\/([^/]+)/)?.[1];
  const typeSlug = pathname.match(/^\/internet\/([^/]+)/)?.[1];
  const provider = provSlug ? providers.find((p) => p.slug === provSlug) : undefined;
  const theme = provider ? providerThemes[provider.slug] : typeSlug ? typeThemes[typeSlug] : undefined;

  const left = provider
    ? { href: "#availability", label: "Check ZIP", icon: MapPin }
    : typeSlug
      ? { href: "#faqs", label: "FAQs", icon: Search }
      : { href: "/#check", label: "Check ZIP", icon: Search };
  const right = provider
    ? { href: "#plans", label: `${provider.name} plans` }
    : typeSlug
      ? { href: "#providers", label: "See providers" }
      : { href: "/internet-providers#compare", label: "Compare Plans" };
  const LeftIcon = left.icon;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={theme ? themeVars(theme) : undefined}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/92 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex gap-2">
            <Link href={left.href} className="btn btn-ghost flex-1 !px-3">
              <LeftIcon className="h-4 w-4" /> {left.label}
            </Link>
            <Link href={right.href} className="btn btn-primary flex-[1.4] !px-3">
              {right.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
