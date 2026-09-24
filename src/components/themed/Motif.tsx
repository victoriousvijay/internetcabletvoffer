import type { Motif as MotifKind } from "@/data/themes";

/** Decorative hero pattern, one per brand theme. Purely visual. */
export function Motif({ kind, dark, className = "" }: { kind: MotifKind; dark: boolean; className?: string }) {
  const stroke = dark ? "rgba(255,255,255,0.14)" : "color-mix(in srgb, var(--acc) 22%, transparent)";
  const fill = dark ? "rgba(255,255,255,0.18)" : "color-mix(in srgb, var(--acc) 25%, transparent)";
  const base = `pointer-events-none absolute ${className}`;
  // Big line-art motifs would sit on top of text on phones; show them from lg up only.
  const bigOnly = "hidden lg:block";

  switch (kind) {
    case "rings":
      return (
        <svg aria-hidden="true" className={`${base} ${bigOnly} -right-40 -top-40 h-[46rem] w-[46rem]`} viewBox="0 0 400 400">
          {[60, 100, 140, 180].map((r, i) => (
            <circle key={r} cx="200" cy="200" r={r} fill="none" stroke={stroke} strokeWidth="1.2" className="motif-pulse" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
          {[-50, -20, 10, 40].map((y) => (
            <ellipse key={y} cx="200" cy={200 + y} rx="180" ry="22" fill="none" stroke={stroke} strokeWidth="1" />
          ))}
        </svg>
      );
    case "orbit":
      return (
        <svg aria-hidden="true" className={`${base} ${bigOnly} left-1/2 top-0 h-[40rem] w-[70rem] -translate-x-1/2`} viewBox="0 0 700 400">
          <ellipse cx="350" cy="170" rx="320" ry="110" fill="none" stroke={stroke} strokeWidth="1.5" transform="rotate(-12 350 170)" />
          <ellipse cx="350" cy="170" rx="250" ry="80" fill="none" stroke={stroke} strokeWidth="1" transform="rotate(-12 350 170)" />
          <circle r="7" fill="var(--acc)" className="motif-orbit" style={{ offsetPath: "path('M30 238 A320 110 -12 1 1 670 102 A320 110 -12 1 1 30 238')" }} />
        </svg>
      );
    case "chevrons":
      return (
        <div aria-hidden="true" className={`${base} inset-y-0 right-0 hidden w-1/2 items-center justify-end gap-6 pr-10 opacity-60 lg:flex`}>
          {[0, 1, 2].map((i) => (
            <svg key={i} viewBox="0 0 40 60" className="motif-chevron h-40 w-24" style={{ animationDelay: `${i * 0.25}s` }}>
              <path d="M4 4 L36 30 L4 56 Z" fill={i === 2 ? "var(--acc)" : stroke} />
            </svg>
          ))}
        </div>
      );
    case "swirl":
      return (
        <svg aria-hidden="true" className={`${base} ${bigOnly} -right-24 top-10 h-[34rem] w-[34rem] motif-spin`} viewBox="0 0 200 200">
          {["#2db36b", "#f2e813", "#00b1e1", "#8b1e7e"].map((c, i) => (
            <path key={c} d="M100 100 C 70 60, 70 25, 100 12 C 110 40, 112 70, 100 100 Z" fill={c} opacity="0.55" transform={`rotate(${i * 90} 100 100)`} />
          ))}
        </svg>
      );
    case "dots":
      return (
        <div
          aria-hidden="true"
          className={`${base} inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_85%_30%,black,transparent_75%)]`}
          style={{ backgroundImage: `radial-gradient(${fill} 1.6px, transparent 1.6px)`, backgroundSize: "22px 22px" }}
        />
      );
    case "check":
      return (
        <svg aria-hidden="true" className={`${base} ${bigOnly} -right-24 top-44 h-[34rem] w-[40rem]`} viewBox="0 0 400 300">
          <path d="M20 120 L150 250 L390 20" fill="none" stroke="var(--acc)" strokeWidth="10" strokeLinecap="square" className="motif-draw" opacity="0.9" />
        </svg>
      );
    case "stripes":
      return (
        <div aria-hidden="true" className={`${base} inset-y-0 right-0 hidden w-2/3 flex-col justify-center gap-4 opacity-40 lg:flex`}>
          {[70, 90, 60, 100, 80].map((w, i) => (
            <span key={i} className="motif-stripe ml-auto h-3 rounded-l-full" style={{ width: `${w}%`, background: stroke, animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      );
    case "stars":
      return (
        <div aria-hidden="true" className={`${base} inset-0`}>
          {Array.from({ length: 40 }, (_, i) => (
            <span
              key={i}
              className="hero-twinkle absolute h-[3px] w-[3px] rounded-full bg-white"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animationDelay: `${(i % 7) * 0.5}s` }}
            />
          ))}
          <svg className="absolute -right-20 top-0 h-full w-2/3" viewBox="0 0 400 400" preserveAspectRatio="none">
            <path d="M0 380 Q 200 -40 400 120" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 8" />
          </svg>
        </div>
      );
    case "grid":
    default:
      return (
        <div
          aria-hidden="true"
          className={`${base} inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black,transparent_80%)]`}
          style={{
            backgroundImage: `linear-gradient(to right, ${stroke} 1px, transparent 1px), linear-gradient(to bottom, ${stroke} 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      );
  }
}
