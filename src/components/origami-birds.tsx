import type { SVGProps } from "react";

/**
 * Udaan Origami Crane Vector Components
 * Representing "Udaan" (Flight / Soaring) - authentic craft paper folding aesthetic.
 */

export function OrigamiBirdHero({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 540 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="origami-wing-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#b45309" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="origami-body-facet" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#b45309" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Background Wing Facet */}
      <polygon
        points="270,180 460,40 380,210"
        fill="url(#origami-wing-top)"
        stroke="#b45309"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeOpacity="0.45"
      />

      {/* Tail Fold */}
      <polygon
        points="270,180 390,260 480,240 330,220"
        fill="url(#origami-body-facet)"
        stroke="#92400e"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeOpacity="0.4"
      />

      {/* Main Body Center Polygon */}
      <polygon
        points="270,180 330,220 220,290 190,220"
        fill="url(#origami-body-facet)"
        stroke="#b45309"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      />

      {/* Forward Main Soaring Wing */}
      <polygon
        points="270,180 80,60 190,220"
        fill="url(#origami-wing-top)"
        stroke="#d97706"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />

      {/* Wing Inner Fold Facet (Geometric Crease) */}
      <polygon
        points="190,220 80,60 150,170"
        fill="#f59e0b"
        fillOpacity="0.08"
        stroke="#d97706"
        strokeWidth="1"
        strokeDasharray="4 3"
        strokeOpacity="0.5"
      />

      {/* Neck Segment */}
      <polygon
        points="190,220 120,270 90,220"
        fill="url(#origami-body-facet)"
        stroke="#b45309"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      />

      {/* Head & Beak Fold */}
      <polygon
        points="90,220 40,230 75,250"
        fill="#b45309"
        fillOpacity="0.22"
        stroke="#92400e"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />

      {/* Keel / Chest Underbelly Fold */}
      <polygon
        points="190,220 220,290 140,285"
        fill="#78350f"
        fillOpacity="0.12"
        stroke="#b45309"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeOpacity="0.35"
      />

      {/* Fold Crease Dashed Guide Lines */}
      <line x1="80" y1="60" x2="220" y2="290" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.3" />
      <line x1="270" y1="180" x2="140" y2="285" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.25" />
      <line x1="460" y1="40" x2="270" y2="180" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.3" />

      {/* Flight Current / Air Stream Vector Contours */}
      <path
        d="M20 340 C 140 320, 260 360, 380 310 C 440 285, 500 300, 530 280"
        stroke="#d97706"
        strokeWidth="1"
        strokeDasharray="6 8"
        strokeOpacity="0.2"
      />
      <path
        d="M50 370 C 180 345, 300 390, 420 340 C 470 320, 510 330, 540 310"
        stroke="#b45309"
        strokeWidth="0.8"
        strokeDasharray="4 6"
        strokeOpacity="0.15"
      />
    </svg>
  );
}

export function OrigamiBirdSmall({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <polygon
        points="24,18 42,4 34,22"
        fill="#d97706"
        fillOpacity="0.25"
        stroke="#b45309"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polygon
        points="24,18 6,6 16,22"
        fill="#f59e0b"
        fillOpacity="0.35"
        stroke="#d97706"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polygon
        points="24,18 34,22 22,32 16,22"
        fill="#b45309"
        fillOpacity="0.2"
        stroke="#92400e"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polygon
        points="16,22 10,26 6,21"
        fill="#d97706"
        fillOpacity="0.4"
        stroke="#92400e"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <polygon
        points="24,18 36,28 44,26 34,22"
        fill="#78350f"
        fillOpacity="0.15"
        stroke="#92400e"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OrigamiBirdFlock({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g transform="translate(40, 20) scale(0.9)">
        <polygon points="30,22 52,6 42,27" fill="#d97706" fillOpacity="0.22" stroke="#b45309" strokeWidth="1" />
        <polygon points="30,22 8,8 20,27" fill="#f59e0b" fillOpacity="0.3" stroke="#d97706" strokeWidth="1" />
        <polygon points="30,22 42,27 27,39 20,27" fill="#b45309" fillOpacity="0.18" stroke="#92400e" strokeWidth="1" />
        <polygon points="20,27 12,32 8,26" fill="#b45309" fillOpacity="0.3" stroke="#92400e" strokeWidth="0.9" />
      </g>
      <g transform="translate(160, 45) scale(0.65)">
        <polygon points="30,22 52,6 42,27" fill="#d97706" fillOpacity="0.18" stroke="#b45309" strokeWidth="1" />
        <polygon points="30,22 8,8 20,27" fill="#f59e0b" fillOpacity="0.25" stroke="#d97706" strokeWidth="1" />
        <polygon points="30,22 42,27 27,39 20,27" fill="#b45309" fillOpacity="0.15" stroke="#92400e" strokeWidth="1" />
        <polygon points="20,27 12,32 8,26" fill="#b45309" fillOpacity="0.25" stroke="#92400e" strokeWidth="0.9" />
      </g>
      <g transform="translate(260, 15) scale(0.75)">
        <polygon points="30,22 52,6 42,27" fill="#d97706" fillOpacity="0.2" stroke="#b45309" strokeWidth="1" />
        <polygon points="30,22 8,8 20,27" fill="#f59e0b" fillOpacity="0.28" stroke="#d97706" strokeWidth="1" />
        <polygon points="30,22 42,27 27,39 20,27" fill="#b45309" fillOpacity="0.16" stroke="#92400e" strokeWidth="1" />
        <polygon points="20,27 12,32 8,26" fill="#b45309" fillOpacity="0.28" stroke="#92400e" strokeWidth="0.9" />
      </g>
      <g transform="translate(340, 50) scale(0.48)">
        <polygon points="30,22 52,6 42,27" fill="#d97706" fillOpacity="0.15" stroke="#b45309" strokeWidth="1" />
        <polygon points="30,22 8,8 20,27" fill="#f59e0b" fillOpacity="0.2" stroke="#d97706" strokeWidth="1" />
        <polygon points="30,22 42,27 27,39 20,27" fill="#b45309" fillOpacity="0.12" stroke="#92400e" strokeWidth="1" />
      </g>
      <path d="M10 60 Q 150 40, 390 45" stroke="#d97706" strokeWidth="0.75" strokeDasharray="3 5" strokeOpacity="0.18" />
    </svg>
  );
}

export function OrigamiBirdSeal({ className = "size-14", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="40" cy="40" r="37" stroke="#d97706" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.45" />
      <circle cx="40" cy="40" r="33" stroke="#b45309" strokeWidth="0.8" strokeOpacity="0.3" />
      <g transform="translate(18, 18) scale(0.9)">
        <polygon points="24,18 42,4 34,22" fill="#d97706" fillOpacity="0.3" stroke="#b45309" strokeWidth="1.1" strokeLinejoin="round" />
        <polygon points="24,18 6,6 16,22" fill="#f59e0b" fillOpacity="0.4" stroke="#d97706" strokeWidth="1.1" strokeLinejoin="round" />
        <polygon points="24,18 34,22 22,32 16,22" fill="#b45309" fillOpacity="0.25" stroke="#92400e" strokeWidth="1.1" strokeLinejoin="round" />
        <polygon points="16,22 10,26 6,21" fill="#d97706" fillOpacity="0.5" stroke="#92400e" strokeWidth="0.9" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function OrigamiFoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center py-4 ${className}`}>
      <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-amber-900/20 to-transparent" />
      <div className="absolute flex items-center gap-2 rounded-full border border-amber-900/15 bg-[#faf6ee] px-3 py-1 shadow-xs">
        <OrigamiBirdSmall className="size-4 text-amber-700" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-amber-900/60 font-semibold">
          Udaan Paper Craft
        </span>
      </div>
    </div>
  );
}
