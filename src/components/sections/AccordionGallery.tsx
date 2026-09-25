"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export type GalleryItem = { image: string; label: string; title?: string; sub?: string; caption?: string; link: string };

/**
 * Accordion gallery: a row of photo panels where the active one expands to `expandRatio` of the width
 * and the rest share what's left. Desktop opens on hover (or click); phones get a vertical stack that opens on tap.
 */
export function AccordionGallery({
  items,
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
}: {
  items: GalleryItem[];
  defaultIndex?: number;
  expandRatio?: number;
  trigger?: "hover" | "click";
}) {
  const [active, setActive] = useState(Math.min(defaultIndex, items.length - 1));
  const rest = (1 - expandRatio) / Math.max(1, items.length - 1);

  return (
    <>
      {/* Desktop / tablet: horizontal accordion */}
      <div className="hidden h-[30rem] gap-3 md:flex" onMouseLeave={() => trigger === "hover" && setActive(Math.min(defaultIndex, items.length - 1))}>
        {items.map((it, i) => {
          const on = i === active;
          return (
            <motion.div
              key={it.label}
              className="relative overflow-hidden rounded-3xl bg-navy"
              animate={{ flexGrow: on ? expandRatio * 100 : rest * 100 }}
              style={{ flexBasis: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 24 }}
              onMouseEnter={() => trigger === "hover" && setActive(i)}
              onClick={() => trigger === "click" && setActive(i)}
            >
              <Link href={it.link} className="group absolute inset-0 block" aria-label={it.label} onFocus={() => setActive(i)}>
                <Image
                  src={it.image}
                  alt={it.label}
                  fill
                  sizes="(max-width: 1200px) 60vw, 700px"
                  className={`object-cover transition-transform duration-700 ${on ? "scale-100" : "scale-110"}`}
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${on ? "bg-gradient-to-t from-navy via-navy/30 to-transparent" : "bg-navy/55"}`} />

                {/* collapsed: vertical label */}
                <motion.div animate={{ opacity: on ? 0 : 1 }} className="absolute inset-x-0 bottom-6 flex justify-center">
                  <span className="rotate-180 whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-white [writing-mode:vertical-rl]">
                    {it.label}
                  </span>
                </motion.div>

                {/* expanded: full caption */}
                <motion.div
                  initial={false}
                  animate={{ opacity: on ? 1 : 0, y: on ? 0 : 16 }}
                  transition={{ duration: 0.35, delay: on ? 0.15 : 0 }}
                  className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white"
                >
                  <div className="min-w-0">
                    {it.sub && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">{it.sub}</p>}
                    <h3 className="mt-1 text-3xl font-extrabold">{it.title ?? it.label}</h3>
                    {it.caption && <p className="mt-1 text-sm text-white/80">{it.caption}</p>}
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-800 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Phones: vertical accordion, tap to open, tap again to visit */}
      <div className="flex flex-col gap-2.5 md:hidden">
        {items.map((it, i) => {
          const on = i === active;
          return (
            <motion.div
              key={it.label}
              className="relative overflow-hidden rounded-2xl bg-navy"
              animate={{ height: on ? 240 : 64 }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
            >
              <Image src={it.image} alt={it.label} fill sizes="100vw" className="object-cover" />
              <div className={`absolute inset-0 ${on ? "bg-gradient-to-t from-navy via-navy/40 to-transparent" : "bg-navy/60"}`} />
              {on ? (
                <Link href={it.link} className="absolute inset-0 flex items-end justify-between gap-3 p-5 text-white">
                  <div className="min-w-0">
                    {it.sub && <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-200">{it.sub}</p>}
                    <h3 className="mt-0.5 text-2xl font-extrabold">{it.title ?? it.label}</h3>
                    {it.caption && <p className="mt-0.5 text-sm text-white/80">{it.caption}</p>}
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-800">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="absolute inset-0 flex items-center justify-between px-5 text-left text-white"
                  aria-expanded={false}
                >
                  <span className="text-base font-bold">{it.label}</span>
                  <span className="text-xs text-white/70">{it.caption}</span>
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
