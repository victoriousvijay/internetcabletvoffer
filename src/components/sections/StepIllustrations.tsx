/** Flat brand-colored illustrations for the "three simple steps" timeline. Decorative. */

const B = { deep: "#1e38af", mid: "#2556eb", light: "#93bbfd", pale: "#dbe8fe", navy: "#0b1b3f", sky: "#eff5ff" };

export function IllustrationNeeds() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      <ellipse cx="200" cy="270" rx="150" ry="16" fill={B.pale} />
      {/* house */}
      <path d="M70 170 L140 110 L210 170 Z" fill={B.mid} />
      <rect x="85" y="165" width="110" height="95" rx="6" fill="#fff" stroke={B.pale} strokeWidth="3" />
      <rect x="125" y="205" width="30" height="55" rx="4" fill={B.light} />
      <rect x="97" y="182" width="22" height="20" rx="3" fill={B.sky} stroke={B.light} strokeWidth="2" />
      <rect x="161" y="182" width="22" height="20" rx="3" fill={B.sky} stroke={B.light} strokeWidth="2" />
      {/* phone with zip field */}
      <rect x="230" y="60" width="110" height="200" rx="18" fill={B.navy} />
      <rect x="238" y="72" width="94" height="176" rx="12" fill="#fff" />
      <rect x="250" y="92" width="70" height="8" rx="4" fill={B.pale} />
      <rect x="250" y="108" width="50" height="6" rx="3" fill={B.pale} />
      <rect x="248" y="130" width="74" height="26" rx="8" fill={B.sky} stroke={B.mid} strokeWidth="2" />
      <text x="258" y="148" fontSize="12" fontWeight="700" fill={B.deep} fontFamily="sans-serif">
        90210
      </text>
      <rect x="248" y="166" width="74" height="24" rx="12" fill={B.mid} />
      <rect x="268" y="175" width="34" height="6" rx="3" fill="#fff" />
      <rect x="250" y="204" width="70" height="6" rx="3" fill={B.pale} />
      <rect x="250" y="218" width="54" height="6" rx="3" fill={B.pale} />
      {/* location pin */}
      <path d="M140 38 C120 38 108 53 108 69 C108 92 140 118 140 118 C140 118 172 92 172 69 C172 53 160 38 140 38 Z" fill={B.deep} />
      <circle cx="140" cy="68" r="12" fill="#fff" />
      {/* sparkles */}
      <path d="M205 40 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5z" fill={B.light} />
      <circle cx="360" cy="90" r="6" fill={B.light} />
      <circle cx="60" cy="120" r="5" fill={B.light} />
    </svg>
  );
}

export function IllustrationCompare() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      <ellipse cx="200" cy="272" rx="160" ry="16" fill={B.pale} />
      {[
        { x: 40, h: 150, hi: false },
        { x: 145, h: 190, hi: true },
        { x: 250, h: 150, hi: false },
      ].map((c) => (
        <g key={c.x}>
          <rect x={c.x} y={260 - c.h} width="110" height={c.h} rx="14" fill={c.hi ? B.mid : "#fff"} stroke={c.hi ? B.mid : B.pale} strokeWidth="3" />
          <rect x={c.x + 18} y={260 - c.h + 20} width="50" height="8" rx="4" fill={c.hi ? "#fff" : B.pale} opacity={c.hi ? 0.9 : 1} />
          <text x={c.x + 18} y={260 - c.h + 58} fontSize="24" fontWeight="800" fill={c.hi ? "#fff" : B.navy} fontFamily="sans-serif">
            {c.hi ? "$65" : c.x < 100 ? "$55" : "$80"}
          </text>
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <circle cx={c.x + 24} cy={260 - c.h + 84 + r * 22} r="6" fill={c.hi ? "#fff" : B.light} />
              <rect x={c.x + 36} y={260 - c.h + 80 + r * 22} width="52" height="7" rx="3.5" fill={c.hi ? "#fff" : B.pale} opacity={c.hi ? 0.7 : 1} />
            </g>
          ))}
        </g>
      ))}
      {/* check badge on the winner */}
      <circle cx="245" cy="75" r="22" fill="#10b981" />
      <path d="M234 75 l8 8 15 -16" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* magnifier */}
      <circle cx="340" cy="70" r="26" fill="none" stroke={B.deep} strokeWidth="8" />
      <path d="M358 90 l22 22" stroke={B.deep} strokeWidth="10" strokeLinecap="round" />
      <circle cx="60" cy="60" r="7" fill={B.light} />
    </svg>
  );
}

export function IllustrationConnect() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      <ellipse cx="200" cy="272" rx="160" ry="16" fill={B.pale} />
      {/* wifi waves */}
      {[90, 65, 40].map((r, i) => (
        <path key={r} d={`M${200 - r} ${150 - r * 0.2} A${r} ${r} 0 0 1 ${200 + r} ${150 - r * 0.2}`} fill="none" stroke={i === 0 ? B.pale : i === 1 ? B.light : B.mid} strokeWidth="10" strokeLinecap="round" />
      ))}
      {/* router */}
      <rect x="130" y="180" width="140" height="60" rx="14" fill={B.navy} />
      <rect x="150" y="150" width="8" height="34" rx="4" fill={B.navy} />
      <rect x="242" y="150" width="8" height="34" rx="4" fill={B.navy} />
      {[160, 180, 200, 220].map((x, i) => (
        <circle key={x} cx={x} cy="210" r="5" fill={i === 3 ? "#10b981" : B.light} />
      ))}
      {/* laptop */}
      <rect x="20" y="170" width="90" height="60" rx="8" fill="#fff" stroke={B.pale} strokeWidth="3" />
      <rect x="30" y="180" width="70" height="40" rx="4" fill={B.sky} />
      <path d="M10 234 h110 l-8 10 h-94 z" fill={B.light} />
      {/* tv */}
      <rect x="290" y="150" width="100" height="70" rx="8" fill={B.navy} />
      <rect x="298" y="158" width="84" height="54" rx="4" fill={B.mid} />
      <path d="M332 185 l16 -10 v20 z" fill="#fff" />
      <rect x="330" y="220" width="20" height="18" fill={B.navy} />
      <rect x="315" y="236" width="50" height="6" rx="3" fill={B.navy} />
      {/* success badge */}
      <circle cx="200" cy="60" r="26" fill="#10b981" />
      <path d="M187 60 l9 9 18 -19" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
