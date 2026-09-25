"use client";

import { Children, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export function Step({ children }: { children: React.ReactNode }) {
  return <div className="px-1">{children}</div>;
}

/**
 * Multi-step card: numbered indicators joined by filling connectors, sliding content with animated height,
 * and Back / Next controls. `canProceed(step)` can hold the Next button until the step is answered.
 */
export function Stepper({
  children,
  initialStep = 1,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = "Back",
  nextButtonText = "Continue",
  finalButtonText = "Complete",
  canProceed,
}: {
  children: React.ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  finalButtonText?: string;
  canProceed?: (step: number) => boolean;
}) {
  const steps = Children.toArray(children);
  const total = steps.length;
  const [step, setStep] = useState(Math.min(Math.max(1, initialStep), total));
  const [dir, setDir] = useState(1);
  const isLast = step === total;
  const allowed = canProceed ? canProceed(step) : true;

  const go = (n: number) => {
    setDir(n > step ? 1 : -1);
    setStep(n);
    onStepChange?.(n);
  };

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-slate-200/70">
      {/* indicators */}
      <div className="flex items-center px-5 pt-6 sm:px-8 sm:pt-8">
        {steps.map((_, i) => {
          const n = i + 1;
          const done = n < step;
          const current = n === step;
          return (
            <div key={n} className={`flex items-center ${n < total ? "flex-1" : ""}`}>
              <button
                type="button"
                onClick={() => (n < step || (n === step + 1 && allowed) ? go(n) : undefined)}
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-10 sm:w-10"
                aria-label={`Step ${n}`}
                aria-current={current ? "step" : undefined}
              >
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ backgroundColor: done || current ? "#1d43d8" : "#eef2f7", scale: current ? 1.08 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                {current && <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/25" />}
                <span className={`relative ${done || current ? "text-white" : "text-slate-400"}`}>
                  {done ? <Check className="h-4 w-4" strokeWidth={3} /> : n}
                </span>
              </button>
              {n < total && (
                <div className="mx-2 h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <motion.div className="h-full rounded-full bg-brand-600" animate={{ width: done ? "100%" : "0%" }} transition={{ duration: 0.45 }} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* content */}
      <SlideHeight>
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            initial={{ x: dir * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir * -60, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="px-5 py-7 sm:px-8"
          >
            {steps[step - 1]}
          </motion.div>
        </AnimatePresence>
      </SlideHeight>

      {/* footer */}
      <div className={`flex items-center gap-3 border-t border-slate-100 px-5 py-4 sm:px-8 ${step > 1 ? "justify-between" : "justify-end"}`}>
        {step > 1 && (
          <button type="button" onClick={() => go(step - 1)} className="btn btn-ghost !px-4">
            <ArrowLeft className="h-4 w-4" /> {backButtonText}
          </button>
        )}
        <button
          type="button"
          disabled={!allowed}
          onClick={() => (isLast ? onFinalStepCompleted?.() : go(step + 1))}
          className="btn btn-primary !px-5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          {isLast ? finalButtonText : nextButtonText} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/** Smoothly animates its own height to fit changing content. */
function SlideHeight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState<number | "auto">("auto");
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <motion.div animate={{ height: h }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}
