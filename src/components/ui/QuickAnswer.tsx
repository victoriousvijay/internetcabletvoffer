import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function QuickAnswer({ text, facts }: { text: string; facts?: { label: string; value: string }[] }) {
  return (
    <Reveal className="card relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-500 to-brand-800" />
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
        <Sparkles className="h-4 w-4" /> Quick answer
      </p>
      <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">{text}</p>
      {facts && (
        <dl className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="rounded-2xl bg-sky-soft p-4 ring-1 ring-brand-100/70">
              <dt className="text-xs font-medium text-slate-500">{f.label}</dt>
              <dd className="mt-1 text-sm font-extrabold text-navy sm:text-base">{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </Reveal>
  );
}
