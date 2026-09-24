"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";
import { providers, type TypeKey } from "@/data/providers";
import { typeLabels } from "@/data/internetTypes";
import { ProviderCard } from "./ProviderCard";

type Sort = "rating" | "price" | "speed";

export function ProviderExplorer() {
  const params = useSearchParams();
  const zip = params.get("zip");
  const [type, setType] = useState<TypeKey | "all">("all");
  const [sort, setSort] = useState<Sort>("rating");

  const list = useMemo(() => {
    const l = providers.filter((p) => type === "all" || p.types.includes(type));
    return [...l].sort((a, b) =>
      sort === "price" ? a.startingPrice - b.startingPrice : sort === "speed" ? b.maxSpeedMbps - a.maxSpeedMbps : b.rating - a.rating,
    );
  }, [type, sort]);

  const chips: (TypeKey | "all")[] = ["all", "fiber", "cable", "5g", "dsl", "fixed-wireless", "satellite"];

  return (
    <div>
      {zip && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-start gap-3 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900 ring-1 ring-brand-100"
          role="status"
        >
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
          <p>
            Showing major providers that may serve <strong>{zip}</strong>. Availability is address-specific — confirm on the
            provider&apos;s page before ordering.
          </p>
        </motion.div>
      )}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0" role="group" aria-label="Filter by internet type">
          {chips.map((c) => {
            const on = c === type;
            return (
              <button
                key={c}
                onClick={() => setType(c)}
                aria-pressed={on}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${on ? "text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-navy"}`}
              >
                {on && <motion.span layoutId="type-chip" className="absolute inset-0 rounded-full bg-brand-700" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                <span className="relative">{c === "all" ? "All types" : typeLabels[c]}</span>
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-600">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy ring-1 ring-slate-200 focus:outline-none focus:ring-brand-300"
          >
            <option value="rating">Top rated</option>
            <option value="price">Lowest price</option>
            <option value="speed">Fastest speed</option>
          </select>
        </label>
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProviderCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
