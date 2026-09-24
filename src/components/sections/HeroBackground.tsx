/** Layered deep-blue hero backdrop: gradient mesh, drifting aurora, grid, signal rings and fiber light streaks. */
const streaks = [
  "M-50 520 C 300 420, 520 620, 900 470 S 1400 380, 1600 460",
  "M-50 600 C 260 540, 560 700, 920 560 S 1380 470, 1600 540",
  "M-50 440 C 340 330, 600 520, 960 380 S 1420 300, 1600 360",
  "M-50 680 C 320 640, 620 760, 980 650 S 1400 580, 1600 630",
];

const dots = [
  [8, 18], [16, 62], [24, 34], [33, 80], [41, 14], [52, 70], [58, 26], [66, 88], [74, 12], [82, 54], [90, 30], [95, 76],
];

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_10%,#2556eb_0%,transparent_60%),radial-gradient(ellipse_60%_50%_at_0%_100%,#1e38af_0%,transparent_65%),linear-gradient(180deg,#0b1b3f_0%,#0f2553_55%,#12307a_100%)]" />

      {/* Aurora blobs */}
      <div className="hero-aurora absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-brand-500/35 blur-[110px]" />
      <div className="hero-aurora absolute right-[-10rem] top-[-8rem] h-[38rem] w-[38rem] rounded-full bg-sky-400/25 blur-[120px] [animation-delay:-6s]" />
      <div className="hero-aurora absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo-500/30 blur-[110px] [animation-delay:-12s]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent_85%)]" />

      {/* Signal rings behind the visual */}
      <div className="absolute right-[4%] top-1/2 hidden -translate-y-1/2 lg:block">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="hero-ring absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/25"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>

      {/* Fiber light streaks */}
      <svg className="absolute inset-0 hidden h-full w-full [mask-image:linear-gradient(to_right,transparent_0%,transparent_46%,black_62%)] lg:block" viewBox="0 0 1500 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="streak" x1="0" x2="1">
            <stop offset="0" stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="0.5" stopColor="#bfdbfe" stopOpacity="0.9" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        {streaks.map((d, i) => (
          <g key={i}>
            <path d={d} fill="none" stroke="rgb(147 197 253 / 0.06)" strokeWidth="1" />
            <path
              d={d}
              fill="none"
              stroke="url(#streak)"
              strokeWidth={i % 2 ? 1.5 : 2}
              strokeLinecap="round"
              className="hero-streak"
              style={{ animationDelay: `${i * 1.3}s`, animationDuration: `${6 + i}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Twinkles */}
      {dots.map(([x, y], i) => (
        <span
          key={i}
          className="hero-twinkle absolute h-1 w-1 rounded-full bg-white"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 5) * 0.8}s` }}
        />
      ))}

      {/* Soft curve into the page */}
      <svg className="absolute -bottom-px left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 80V40C240 72 480 80 720 64S1200 8 1440 24V80Z" fill="currentColor" />
      </svg>
    </div>
  );
}
