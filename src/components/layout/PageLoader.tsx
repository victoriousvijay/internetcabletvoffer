"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { providers } from "@/data/providers";

const BRAND = { primary: "#1d43d8", light: "#3b74f6", label: "Internet Cable TV Offers" };
const MIN_INITIAL = 1500;
const MIN_NAV = 1100;

/** Loader colors: provider pages use the provider's brand color, everything else uses the site blue. */
function themeFor(path: string) {
  const m = path.match(/^\/providers\/([^/?#]+)/);
  const p = m && providers.find((x) => x.slug === m[1]);
  return p ? { primary: p.loader.primary, light: p.loader.light, label: p.name } : BRAND;
}

const hexToRgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

export function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState(() => themeFor(pathname));
  const shownAt = useRef(0);
  const firstRoute = useRef(true);

  // Initial page load.
  useEffect(() => {
    shownAt.current = Date.now();
    const t = setTimeout(() => setVisible(false), MIN_INITIAL);
    return () => clearTimeout(t);
  }, []);

  // Show immediately when an internal link to another page is clicked.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (/\.(xml|txt|png|svg)$/.test(url.pathname)) return;
      setTheme(themeFor(url.pathname));
      shownAt.current = Date.now();
      setVisible(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Hide once the new route has rendered, keeping the animation on screen for a minimum time.
  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    const wait = Math.max(0, MIN_NAV - (Date.now() - shownAt.current));
    const t = setTimeout(() => setVisible(false), wait);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          className="page-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-live="polite"
          aria-label={`Loading ${theme.label}`}
        >
          <div
            className="loader"
            style={
              {
                "--primary": theme.primary,
                "--primary-light": theme.light,
                "--primary-rgba": hexToRgba(theme.primary, 0),
              } as React.CSSProperties
            }
          >
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`box box${i}`}>
                <div />
              </div>
            ))}
            <div className="ground">
              <div />
            </div>
          </div>
          <p className="mt-24 text-xs font-bold uppercase tracking-[0.3em] sm:mt-28" style={{ color: theme.primary }}>
            {theme.label}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
