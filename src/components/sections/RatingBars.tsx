"use client";

import { motion } from "motion/react";

export function RatingBars({ scores }: { scores: { label: string; value: number }[] }) {
  return (
    <ul className="space-y-5">
      {scores.map((s, i) => (
        <li key={s.label}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-slate-700">{s.label}</span>
            <span className="font-extrabold text-navy">{s.value.toFixed(1)}</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700"
              initial={{ width: 0 }}
              whileInView={{ width: `${(s.value / 5) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
