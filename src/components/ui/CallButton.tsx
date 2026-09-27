import { Phone } from "lucide-react";
import { phone } from "@/lib/site";

type Variant = "primary" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  primary: "btn-primary",
  light: "bg-white text-acc-ink shadow-lift hover:-translate-y-0.5 hover:bg-white/90",
  "outline-light": "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15",
};

/** Tap-to-call "Call Now" button. The number comes from `phone` in site.ts (NEXT_PUBLIC_PHONE). */
export function CallButton({
  variant = "primary",
  showNumber = true,
  label = "Call Now",
  className = "",
}: {
  variant?: Variant;
  showNumber?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <a href={`tel:${phone.tel}`} className={`btn group ${styles[variant]} ${className}`} aria-label={`${label}: ${phone.display}`}>
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-25" />
        <Phone className="relative h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
      </span>
      <span>{label}</span>
      {showNumber && <span className="font-extrabold tabular-nums opacity-90">{phone.display}</span>}
    </a>
  );
}
