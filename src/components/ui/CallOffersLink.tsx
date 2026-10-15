"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { phone } from "@/lib/site";

const EVENT = "call-offers";

/**
 * Link for call-only providers (Verizon). Phones dial straight away; on desktop a `tel:` click usually does
 * nothing visible, so it opens the site-wide call pop-up (<CallOffersDialog />, mounted once in the layout).
 */
export function CallOffersLink({
  name,
  className = "",
  children,
  ...rest
}: { name: string; className?: string; children: React.ReactNode } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch devices: let tel: dial
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(EVENT, { detail: name }));
  };
  return (
    <a href={`tel:${phone.tel}`} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}

/** The one pop-up opened by every <CallOffersLink />. Lives in the root layout so closing menus can't unmount it. */
export function CallOffersDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const open = (e: Event) => {
      setName((e as CustomEvent<string>).detail);
      ref.current?.showModal();
    };
    window.addEventListener(EVENT, open);
    return () => window.removeEventListener(EVENT, open);
  }, []);

  return (
    <dialog
      ref={ref}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto w-[min(26rem,calc(100vw-2rem))] rounded-3xl bg-white p-0 text-center shadow-lift backdrop:bg-navy/60"
      aria-label={`Call for current ${name} offers`}
    >
      <div className="relative px-6 pb-7 pt-8">
        <button type="button" onClick={() => ref.current?.close()} aria-label="Close" className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <X className="h-5 w-5" />
        </button>
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <Phone className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-xl font-extrabold text-navy">Call for current {name} offers</h2>
        <p className="mt-2 text-sm text-slate-600">Talk to a specialist about {name} plans and pricing available at your address.</p>
        <p className="mt-4 text-3xl font-extrabold tabular-nums text-navy">{phone.display}</p>
        <a href={`tel:${phone.tel}`} className="btn btn-primary mt-5 w-full">
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </dialog>
  );
}

/** Link to a provider: its plans page, or the call pop-up for call-only providers. */
export function ProviderLink({
  slug,
  name,
  callOnly,
  className = "",
  children,
  ...rest
}: { slug: string; name: string; callOnly?: boolean; className?: string; children: React.ReactNode } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
>) {
  if (callOnly)
    return (
      <CallOffersLink name={name} className={className} {...rest}>
        {children}
      </CallOffersLink>
    );
  return (
    <Link href={`/providers/${slug}`} className={className} {...rest}>
      {children}
    </Link>
  );
}
