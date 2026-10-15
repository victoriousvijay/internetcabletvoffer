"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { providers } from "@/data/providers";

const BRAND = { primary: "#1d43d8", light: "#3b74f6", label: "Internet Cable TV Offers" };
/** Brief first-load splash only; never hold a ready page back (it made the site feel slow). */
const MIN_INITIAL = 400;
/** Navigations show the loader only if the next page takes longer than this to appear. */
const NAV_DELAY = 300;

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
  const navTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRoute = useRef(true);

  // Initial page load.
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), MIN_INITIAL);
    return () => clearTimeout(t);
  }, []);

  // When an internal link to another page is clicked, show the loader only if the page is slow to arrive.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (/\.(xml|txt|png|svg)$/.test(url.pathname)) return;
      if (navTimer.current) clearTimeout(navTimer.current);
      navTimer.current = setTimeout(() => {
        setTheme(themeFor(url.pathname));
        setVisible(true);
      }, NAV_DELAY);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Hide as soon as the new route has rendered.
  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    if (navTimer.current) clearTimeout(navTimer.current);
    navTimer.current = null;
    setVisible(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          className="page-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
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
