import { CheckCircle2, XCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ProsCons({ pros, cons, subject }: { pros: string[]; cons: string[]; subject: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Reveal className="card p-6 sm:p-8">
        <h3 className="flex items-center gap-3 text-lg font-extrabold text-acc-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          {subject} pros
        </h3>
        <ul className="mt-5 space-y-3">
          {pros.map((p) => (
            <li key={p} className="flex gap-3 text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="card p-6 sm:p-8">
        <h3 className="flex items-center gap-3 text-lg font-extrabold text-acc-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
            <XCircle className="h-5 w-5" />
          </span>
          {subject} cons
        </h3>
        <ul className="mt-5 space-y-3">
          {cons.map((c) => (
            <li key={c} className="flex gap-3 text-slate-700">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
