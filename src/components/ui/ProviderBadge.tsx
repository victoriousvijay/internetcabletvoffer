import type { Provider } from "@/data/providers";

export function ProviderBadge({ p, size = "md" }: { p: Pick<Provider, "monogram" | "accent" | "name">; size?: "sm" | "md" | "lg" }) {
  const dims = size === "lg" ? "h-16 w-16 text-lg rounded-2xl" : size === "sm" ? "h-9 w-9 text-[11px] rounded-xl" : "h-12 w-12 text-sm rounded-2xl";
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center bg-white font-extrabold tracking-tight text-navy ring-1 ring-slate-200 ${dims}`}
      aria-hidden="true"
    >
      <span className="absolute inset-x-2 bottom-1.5 h-[3px] rounded-full" style={{ background: p.accent }} />
      {p.monogram}
    </span>
  );
}
