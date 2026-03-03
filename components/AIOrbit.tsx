type AIOrbitProps = {
  className?: string;
};

export default function AIOrbit({ className = '' }: AIOrbitProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-navy-900/80 via-navy-900/40 to-navy-900/10 p-4 ${className}`}
    >
      <svg
        viewBox="0 0 160 120"
        className="h-full w-full text-cyan-400/70"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#orbitGradient)" strokeWidth="0.9">
          <ellipse cx="80" cy="60" rx="60" ry="32" opacity="0.5" />
          <ellipse cx="80" cy="60" rx="44" ry="22" opacity="0.7" />
          <ellipse cx="80" cy="60" rx="28" ry="13" opacity="0.9" />
        </g>
        <g fill="url(#orbitGradient)">
          <circle cx="40" cy="52" r="3" />
          <circle cx="62" cy="38" r="2.5" />
          <circle cx="98" cy="34" r="3" />
          <circle cx="120" cy="60" r="2.5" />
          <circle cx="96" cy="84" r="2.5" />
          <circle cx="58" cy="82" r="2.5" />
        </g>
        <g stroke="url(#orbitGradient)" strokeWidth="0.7" opacity="0.7">
          <line x1="40" y1="52" x2="62" y2="38" />
          <line x1="62" y1="38" x2="98" y2="34" />
          <line x1="98" y1="34" x2="120" y2="60" />
          <line x1="120" y1="60" x2="96" y2="84" />
          <line x1="96" y1="84" x2="58" y2="82" />
          <line x1="58" y1="82" x2="40" y2="52" />
        </g>
        <circle
          cx="80"
          cy="60"
          r="8"
          fill="#020617"
          stroke="url(#orbitGradient)"
          strokeWidth="1.2"
        />
        <circle cx="80" cy="60" r="3.2" fill="url(#orbitGradient)" />
      </svg>
    </div>
  );
}


