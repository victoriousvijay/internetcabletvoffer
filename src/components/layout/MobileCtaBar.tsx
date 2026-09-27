"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { providers } from "@/data/providers";
import { CallButton } from "@/components/ui/CallButton";
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

  // Left: the page's own "view plans" link. Right: Call Now (the client's main goal is phone calls).
  const left = provider
    ? { href: "#plans", label: `${provider.name} plans` }
    : typeSlug
      ? { href: "#providers", label: "Providers" }
      : { href: "/internet-providers#compare", label: "View plans" };

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
              {left.label}
            </Link>
            <CallButton showNumber={false} className="flex-[1.4] !px-3" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
