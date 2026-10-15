"use client";

import { useRef } from "react";
import { Info, X } from "lucide-react";
import { offerDisclaimers } from "@/data/offerDisclaimers";

/** "Click here for offer details" link that opens the provider's offer disclaimer in a pop-up. */
export function OfferDetails({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const items = offerDisclaimers[slug];
  if (!items) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className={`inline-flex items-center gap-1.5 text-xs font-semibold text-acc-text underline underline-offset-2 hover:opacity-80 ${className}`}
      >
        <Info className="h-3.5 w-3.5" /> Click here for {name} offer details
      </button>
      <dialog
        ref={ref}
        onClick={(e) => e.target === ref.current && ref.current?.close()}
        className="m-auto max-h-[85vh] w-[min(42rem,calc(100vw-2rem))] overflow-hidden rounded-3xl bg-white p-0 text-left shadow-lift backdrop:bg-navy/60"
        aria-label={`${name} offer details`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-extrabold text-navy">{name} offer details</h2>
          <button type="button" onClick={() => ref.current?.close()} aria-label="Close" className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[calc(85vh-4.5rem)] space-y-4 overflow-y-auto px-6 py-5 text-xs leading-relaxed text-slate-600">
          {items.map((d, i) => (
            <p key={i}>
              {d.heading && <strong className="font-bold uppercase text-navy">{d.heading}: </strong>}
              {d.text}
            </p>
          ))}
        </div>
      </dialog>
    </>
  );
}
