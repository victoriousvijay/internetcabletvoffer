"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function SubNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[5.25rem] z-30 mt-10 px-4">
      <nav
        aria-label="On this page"
        className="no-scrollbar mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-white/85 p-1.5 shadow-card ring-1 ring-slate-200/70 backdrop-blur-xl"
      >
        {items.map((it) => {
          const on = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${on ? "text-on-acc" : "text-slate-600 hover:text-acc-ink"}`}
            >
              {on && <motion.span layoutId="subnav-pill" className="absolute inset-0 rounded-full bg-acc" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="relative">{it.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
