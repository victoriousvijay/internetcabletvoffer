"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export type StatArt = "providers" | "types" | "speed" | "price";

/* Flat spot illustrations on a pastel panel (blue / amber / green / violet). Decorative. */
const C = { blue: "#1d4ed8", blue2: "#3b74f6", sky: "#93bbfd", navy: "#0b1b3f", amber: "#f5c26b", amber2: "#e0a83a", green: "#22c55e" };

const arts: Record<StatArt, { bg: string; svg: React.ReactNode }> = {
  providers: {
    bg: "#e8f0ff",
    svg: (
      <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden="true">
        {/* signal tower */}
        <path d="M80 30 L62 92 H70 L80 56 L90 92 H98 Z" fill={C.navy} />
        <path d="M68 74 H92" stroke={C.navy} strokeWidth="4" />
        <circle cx="80" cy="28" r="7" fill={C.blue} />
        <path d="M64 16 a22 22 0 0 0 0 26 M96 16 a22 22 0 0 1 0 26" stroke={C.blue2} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M54 8 a36 36 0 0 0 0 42 M106 8 a36 36 0 0 1 0 42" stroke={C.sky} strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* star badge */}
        <circle cx="122" cy="72" r="15" fill={C.amber} />
        <path d="M122 63 l2.8 5.8 6.3.9 -4.6 4.4 1.1 6.3 -5.6-3 -5.6 3 1.1-6.3 -4.6-4.4 6.3-.9z" fill={C.navy} />
        <circle cx="34" cy="70" r="4" fill={C.sky} />
        <circle cx="42" cy="84" r="2.5" fill={C.sky} />
      </svg>
    ),
  },
  types: {
    bg: "#fff3dc",
    svg: (
      <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden="true">
        {/* satellite dish */}
        <path d="M46 30 a34 34 0 0 0 40 50 z" fill={C.amber} />
        <path d="M46 30 a34 34 0 0 0 40 50" fill="none" stroke={C.amber2} strokeWidth="4" />
        <path d="M60 60 L78 42" stroke={C.navy} strokeWidth="4" strokeLinecap="round" />
        <circle cx="80" cy="40" r="5" fill={C.navy} />
        <path d="M58 70 L50 92 H78 L70 72" fill={C.amber2} />
        {/* wifi */}
        <path d="M98 34 a20 20 0 0 1 26 0" stroke={C.sky} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M104 42 a11 11 0 0 1 14 0" stroke={C.blue2} strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="111" cy="50" r="3.5" fill={C.blue} />
        {/* cable plug */}
        <rect x="104" y="66" width="22" height="18" rx="4" fill={C.navy} />
        <rect x="109" y="84" width="12" height="6" rx="1.5" fill={C.blue} />
        <path d="M115 66 V56" stroke={C.navy} strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  speed: {
    bg: "#efeaff",
    svg: (
      <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden="true">
        {/* gauge */}
        <path d="M34 82 a46 46 0 0 1 92 0" fill="none" stroke="#d9d0ff" strokeWidth="12" strokeLinecap="round" />
        <path d="M34 82 a46 46 0 0 1 80 -30" fill="none" stroke={C.blue} strokeWidth="12" strokeLinecap="round" />
        <path d="M80 82 L108 52" stroke={C.navy} strokeWidth="5" strokeLinecap="round" />
        <circle cx="80" cy="82" r="8" fill={C.navy} />
        {/* bolt badge */}
        <circle cx="130" cy="30" r="15" fill={C.amber} />
        <path d="M132 18 L122 33 H130 L127 43 L138 27 H130 Z" fill={C.navy} />
        <circle cx="26" cy="36" r="4" fill="#c4b5fd" />
      </svg>
    ),
  },
  price: {
    bg: "#e6f6ec",
    svg: (
      <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden="true">
        {/* coin stack */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <ellipse cx="66" cy={86 - i * 12} rx="26" ry="8" fill={C.amber2} />
            <rect x="40" y={78 - i * 12} width="52" height="8" fill={C.amber2} />
            <ellipse cx="66" cy={78 - i * 12} rx="26" ry="8" fill={C.amber} />
          </g>
        ))}
        <text x="66" y="46" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.navy} fontFamily="sans-serif">
          $
        </text>
        {/* receipt */}
        <path d="M100 22 H132 V78 l-4 -4 -4 4 -4 -4 -4 4 -4 -4 -4 4 -4 -4 -4 4 Z" fill="#fff" stroke="#c9d6f5" strokeWidth="2" />
        <rect x="106" y="32" width="18" height="4" rx="2" fill={C.navy} />
        <rect x="106" y="42" width="20" height="3" rx="1.5" fill={C.sky} />
        <rect x="106" y="50" width="14" height="3" rx="1.5" fill={C.sky} />
        <rect x="106" y="60" width="20" height="4" rx="2" fill={C.blue} />
        {/* check */}
        <circle cx="132" cy="76" r="12" fill={C.green} />
        <path d="M126 76 l4.5 4.5 8 -8" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

/** Mac-window stat tiles: traffic-light dots, a flat illustration panel, big number; lights up blue on hover. */
export function StatCards({ stats }: { stats: { value: string; label: string; art: StatArt }[] }) {
  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {stats.map((s) => (
        <StaggerItem key={s.label}>
          <div className="group flex h-full select-none flex-col rounded-[26px] border border-transparent bg-[#0f1b3d] p-3 text-[#eef3ff] transition-all duration-300 ease-in-out hover:scale-[1.05] hover:border-brand-400 hover:bg-[#0b1430] sm:p-4">
            <div className="flex items-center gap-2 px-1 pb-3" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c941] sm:h-3 sm:w-3" />
            </div>
            <div
              className="flex h-24 items-center justify-center rounded-2xl p-2 transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-32 sm:p-3"
              style={{ background: arts[s.art].bg }}
            >
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">{arts[s.art].svg}</div>
            </div>
            <div className="px-1 pt-4">
              <span className="block text-3xl font-black leading-none tracking-tight transition-colors duration-300 group-hover:text-brand-400 sm:text-5xl">
                {s.value}
              </span>
              <p className="mt-2 text-xs text-white/70 transition-colors duration-300 group-hover:text-brand-200 sm:text-[13px]">{s.label}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
