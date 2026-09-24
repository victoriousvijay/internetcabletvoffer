import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items, light = false }: { items: { name: string; path: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1 text-xs font-medium ${light ? "text-brand-100/70" : "text-slate-500"}`}>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            {i === items.length - 1 ? (
              <span className={light ? "text-white" : "text-acc-ink"} aria-current="page">{it.name}</span>
            ) : (
              <Link href={it.path} className={light ? "hover:text-white" : "hover:text-acc-text"}>{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
