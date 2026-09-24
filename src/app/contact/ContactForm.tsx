"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[${data.get("topic")}] Message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-xl bg-slate-50 px-4 py-3 text-navy ring-1 ring-slate-200 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-400";

  return (
    <div className="card relative overflow-hidden p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
            <h2 className="mt-4 text-2xl font-extrabold text-navy">Your email app is opening</h2>
            <p className="mt-2 text-slate-600">
              If nothing happened, email us directly at{" "}
              <a className="font-semibold text-brand-700" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <button className="btn btn-ghost mt-6" onClick={() => setSent(false)}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Name
                <input name="name" required autoComplete="name" className={`${field} mt-1.5`} />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Email
                <input name="email" type="email" required autoComplete="email" className={`${field} mt-1.5`} />
              </label>
            </div>
            <label className="block text-sm font-semibold text-slate-700">
              Topic
              <select name="topic" className={`${field} mt-1.5`} defaultValue="General question">
                <option>General question</option>
                <option>Pricing correction</option>
                <option>Partnership</option>
                <option>Privacy request</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Message
              <textarea name="message" required rows={5} className={`${field} mt-1.5 resize-none`} />
            </label>
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Send message <Send className="h-4 w-4" />
            </button>
            <p className="text-xs text-slate-500">We never sell your information. See our Privacy Policy.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
