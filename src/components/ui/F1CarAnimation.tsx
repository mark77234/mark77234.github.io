export default function F1CarAnimation() {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="relative animate-bounce-slow">
        <svg
          width="140"
          height="70"
          viewBox="0 0 140 70"
          className="drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse
            cx="70"
            cy="65"
            rx="50"
            ry="3"
            fill="#000000"
            opacity="0.2"
          />

          {/* Main Car Body */}
          <path
            d="M20 38 L30 28 L110 28 L120 38 L115 45 L25 45 Z"
            fill="#DC2626"
            stroke="#B91C1C"
            strokeWidth="1"
          />

          {/* Car Body Highlights */}
          <path
            d="M25 30 L105 30 L110 35 L30 35 Z"
            fill="#EF4444"
            opacity="0.8"
          />

          {/* Front Wing - Left */}
          <path d="M10 35 L25 33 L25 40 L15 42 Z" fill="#1F2937" />
          <path d="M8 36 L20 35 L20 39 L12 40 Z" fill="#374151" />

          {/* Front Wing - Right */}
          <path d="M115 33 L130 35 L125 42 L115 40 Z" fill="#1F2937" />
          <path d="M120 35 L132 36 L128 40 L120 39 Z" fill="#374151" />

          {/* Cockpit */}
          <ellipse cx="70" cy="32" rx="18" ry="10" fill="#1F2937" />
          <ellipse cx="70" cy="32" rx="15" ry="8" fill="#374151" />

          {/* Driver Helmet */}
          <circle cx="70" cy="32" r="6" fill="#FCD34D" />
          <circle cx="70" cy="32" r="4" fill="#374151" opacity="0.8" />

          {/* Front Nose Cone */}
          <path d="M8 36 L25 32 L25 41 L8 41 Z" fill="#EF4444" />
          <path d="M5 37 L15 36 L15 40 L5 40 Z" fill="#DC2626" />

          {/* Rear Wing */}
          <rect x="105" y="25" width="8" height="2" fill="#1F2937" />
          <rect x="103" y="22" width="12" height="1" fill="#374151" />

          {/* Wheels - Enhanced */}
          <circle
            cx="35"
            cy="47"
            r="10"
            fill="#1F2937"
            className="animate-spin"
          />
          <circle cx="35" cy="47" r="7" fill="#374151" />
          <circle cx="35" cy="47" r="4" fill="#6B7280" />
          <circle cx="35" cy="47" r="2" fill="#9CA3AF" />

          <circle
            cx="105"
            cy="47"
            r="10"
            fill="#1F2937"
            className="animate-spin"
          />
          <circle cx="105" cy="47" r="7" fill="#374151" />
          <circle cx="105" cy="47" r="4" fill="#6B7280" />
          <circle cx="105" cy="47" r="2" fill="#9CA3AF" />

          {/* Tire Treads */}
          <g stroke="#1F2937" strokeWidth="1" opacity="0.5">
            <circle cx="35" cy="47" r="8" fill="none" />
            <circle cx="105" cy="47" r="8" fill="none" />
          </g>

          {/* Speed Lines - Multi-layered */}
          <g className="animate-pulse" opacity="0.8">
            <line
              x1="125"
              y1="30"
              x2="140"
              y2="30"
              stroke="#EF4444"
              strokeWidth="3"
            />
            <line
              x1="128"
              y1="34"
              x2="140"
              y2="34"
              stroke="#F87171"
              strokeWidth="2"
            />
            <line
              x1="130"
              y1="38"
              x2="140"
              y2="38"
              stroke="#FCA5A5"
              strokeWidth="1"
            />
          </g>

          {/* Exhaust Effects */}
          <ellipse
            cx="118"
            cy="42"
            rx="4"
            ry="3"
            fill="#FCD34D"
            opacity="0.7"
            className="animate-ping"
          />
          <ellipse
            cx="120"
            cy="42"
            rx="3"
            ry="2"
            fill="#F59E0B"
            opacity="0.9"
            className="animate-ping"
          />
          <ellipse
            cx="122"
            cy="42"
            rx="2"
            ry="1"
            fill="#D97706"
            className="animate-pulse"
          />

          {/* Side Details */}
          <rect x="40" y="36" width="60" height="2" fill="#B91C1C" />
          <rect x="45" y="39" width="50" height="1" fill="#7F1D1D" />

          {/* Front Lights */}
          <circle
            cx="12"
            cy="38"
            r="2"
            fill="#FBBF24"
            className="animate-pulse"
          />
          <circle cx="12" cy="38" r="1" fill="#FCD34D" />
        </svg>
      </div>
    </div>
  );
}
