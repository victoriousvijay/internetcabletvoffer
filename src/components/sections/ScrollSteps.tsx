"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { IllustrationCompare, IllustrationConnect, IllustrationNeeds } from "./StepIllustrations";

const steps = [
  {
    title: "Tell us what you need",
    text: "Enter your ZIP or pick your household type to see the speed you actually need.",
    tags: ["Your address", "Your household", "Your speed"],
    Art: IllustrationNeeds,
  },
  {
    title: "Compare real plans",
    text: "See prices, speeds, contracts and data caps side by side, with no fine-print surprises.",
    tags: ["Prices", "Speeds", "Contracts"],
    Art: IllustrationCompare,
  },
  {
    title: "Connect with confidence",
    text: "Choose your plan and order directly from the provider. Our service is always free.",
    tags: ["Choose", "Order", "Get online"],
    Art: IllustrationConnect,
  },
];

/**
 * Scroll-driven timeline: a center line fills as you scroll and each step reveals in turn, alternating sides.
 * Phones: line on the left, illustration + headline only.
 */
export function ScrollSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative mt-14">
      {/* track + progress */}
      <div className="absolute bottom-0 left-5 top-0 w-[3px] rounded-full bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        className="absolute bottom-0 left-5 top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-brand-400 via-brand-600 to-brand-800 md:left-1/2 md:-translate-x-1/2"
        style={{ scaleY: fill }}
      />

      <ol className="space-y-16 md:space-y-28">
        {steps.map((s, i) => {
          const flip = i % 2 === 1;
          const Art = s.Art;
          return (
            <li key={s.title} className="relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-[1fr_80px_1fr] md:gap-0">
              {/* node */}
              <div className="relative col-start-1 row-start-1 flex justify-center md:col-start-2">
                <motion.span
                  className="sticky top-1/2 z-10 mt-6 flex h-10 w-10 items-center justify-center rounded-full border-[3px] text-sm font-extrabold md:mt-24 md:h-12 md:w-12"
                  initial={{ backgroundColor: "#ffffff", borderColor: "#cbd5e1", color: "#94a3b8", scale: 0.85 }}
                  whileInView={{ backgroundColor: "#1d43d8", borderColor: "#bfd6fe", color: "#ffffff", scale: 1 }}
                  viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                  transition={{ duration: 0.35 }}
                >
                  0{i + 1}
                </motion.span>
              </div>

              {/* main: illustration + heading (+ line on desktop) */}
              <motion.div
                className={`col-start-2 row-start-1 ${flip ? "md:col-start-3" : "md:col-start-1 md:pr-8"} ${flip ? "md:pl-8" : ""}`}
                initial={{ opacity: 0, x: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/3] max-w-md rounded-[2rem] bg-gradient-to-b from-sky-soft to-white p-4 ring-1 ring-brand-100/70 md:p-6">
                  <div className="absolute inset-8 rounded-full bg-brand-100/60 blur-3xl" />
                  <div className="relative h-full w-full">
                    <Art />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy md:text-2xl">{s.title}</h3>
                <p className="mt-2 hidden max-w-md text-sm leading-relaxed text-slate-600 md:block">{s.text}</p>
              </motion.div>

              {/* opposite side: keywords (desktop only) */}
              <motion.div
                className={`hidden md:row-start-1 md:flex md:flex-col md:justify-start md:pt-24 ${flip ? "md:col-start-1 md:items-end md:pr-8 md:text-right" : "md:col-start-3 md:pl-8"}`}
                initial={{ opacity: 0, x: flip ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {s.tags.map((t) => (
                  <span key={t} className="text-xs font-bold uppercase leading-6 tracking-[0.22em] text-brand-700">
                    {t}
                  </span>
                ))}
                <span className="mt-2 h-0.5 w-10 bg-brand-700" />
                <span className="mt-6 text-5xl font-black text-brand-100">0{i + 1}</span>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
