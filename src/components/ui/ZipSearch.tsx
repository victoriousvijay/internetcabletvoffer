"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, Search } from "lucide-react";

export function ZipSearch({ compact = false }: { compact?: boolean }) {
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setError("Please enter a valid 5-digit ZIP code.");
      return;
    }
    setError("");
    router.push(`/internet-providers?zip=${zip}#compare`);
  };

  return (
    <form onSubmit={submit} className="w-full" noValidate>
      <div
        className={`flex items-center gap-2 rounded-2xl bg-white p-2 ring-1 transition-shadow focus-within:shadow-lift ${
          error ? "ring-red-300" : "ring-slate-200 focus-within:ring-brand-300"
        } ${compact ? "" : "shadow-card"}`}
      >
        <MapPin className="ml-2 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
        <label htmlFor={compact ? "zip-c" : "zip"} className="sr-only">ZIP code</label>
        <input
          id={compact ? "zip-c" : "zip"}
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          placeholder="Enter your ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
          className="min-w-0 flex-1 bg-transparent py-2 text-base font-semibold text-navy placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
        />
        <button type="submit" className="btn btn-primary shrink-0 !px-4 sm:!px-6">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Find Deals</span>
          <span className="sm:hidden">Search</span>
        </button>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-2 pl-2 text-sm text-red-600" role="alert">
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
