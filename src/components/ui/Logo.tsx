import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b74f6" />
          <stop offset="1" stopColor="#1e38af" />
        </linearGradient>
      </defs>
      <rect x="1" y="4" width="38" height="28" rx="8" fill="url(#lg-a)" />
      <path d="M13 36h14" stroke="#1e38af" strokeWidth="3" strokeLinecap="round" />
      <path d="M11.5 17.5a12 12 0 0 1 17 0" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M15.5 21.3a6.4 6.4 0 0 1 9 0" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="25" r="2" fill="#fff" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Internet Cable TV Offers — home">
      <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105" />
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          Internet Cable TV
        </span>
        <span className={`block text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-brand-300" : "text-brand-600"}`}>
          Offers
        </span>
      </span>
    </Link>
  );
}
