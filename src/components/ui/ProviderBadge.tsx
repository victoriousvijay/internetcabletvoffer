import Image from "next/image";
import type { Provider } from "@/data/providers";

type Size = "sm" | "md" | "lg";

const dims: Record<Size, { box: string; w: number; h: number }> = {
  sm: { box: "h-9 w-[4.5rem] rounded-xl px-2", w: 72, h: 36 },
  md: { box: "h-12 w-24 rounded-2xl px-2.5", w: 96, h: 48 },
  lg: { box: "h-16 w-36 rounded-2xl px-4", w: 144, h: 64 },
};

/** Provider logo on a white tile. Logos are trademarks of their owners, shown for identification only. */
export function ProviderBadge({ p, size = "md" }: { p: Pick<Provider, "logo" | "name" | "logoTall">; size?: Size }) {
  const d = dims[size];
  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center bg-white ring-1 ring-slate-200 ${d.box}`}>
      <Image src={p.logo} alt={`${p.name} logo`} width={d.w} height={d.h} className={`w-full object-contain ${p.logoTall ? "h-[90%]" : "h-[62%]"}`} />
    </span>
  );
}

export function ProviderLogo({ p, className = "h-10" }: { p: Pick<Provider, "logo" | "name" | "logoTall">; className?: string }) {
  return (
    <Image
      src={p.logo}
      alt={`${p.name} logo`}
      width={240}
      height={80}
      className={`w-auto object-contain ${className} ${p.logoTall ? "origin-center scale-[1.6]" : ""}`}
    />
  );
}
