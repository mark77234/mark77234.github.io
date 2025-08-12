export default function F1CarAnimation() {
  return (
    <div className="flex items-center justify-center mb-6 relative">
      {/* 배경 트랙 라인 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent top-1/2 transform -translate-y-1/2"></div>
      </div>

      {/* 메인 F1 카 */}
      <div className="relative animate-bounce-slow hover:animate-pulse transition-all duration-300 hover:scale-110 cursor-pointer">
        <svg
          width="200"
          height="100"
          viewBox="0 0 140 70"
          className="drop-shadow-2xl w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32 lg:w-72 lg:h-36 filter hover:brightness-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic Shadow */}
          <ellipse
            cx="70"
            cy="65"
            rx="50"
            ry="3"
            fill="#000000"
            opacity="0.3"
            className="animate-pulse"
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="carGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
            <linearGradient
              id="carbonFiber"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <radialGradient id="wheelGradient">
              <stop offset="0%" stopColor="#9CA3AF" />
              <stop offset="50%" stopColor="#6B7280" />
              <stop offset="100%" stopColor="#1F2937" />
            </radialGradient>
          </defs>

          {/* Main Car Body */}
          <path
            d="M20 38 L30 28 L110 28 L120 38 L115 45 L25 45 Z"
            fill="url(#carGradient)"
            stroke="#B91C1C"
            strokeWidth="1"
            className="drop-shadow-lg"
          />

          {/* Car Body Highlights with animation */}
          <path
            d="M25 30 L105 30 L110 35 L30 35 Z"
            fill="#EF4444"
            opacity="0.9"
            className="animate-pulse"
          />

          {/* Racing Stripes */}
          <rect
            x="30"
            y="31"
            width="80"
            height="1"
            fill="#FFFFFF"
            opacity="0.8"
          />
          <rect
            x="35"
            y="33"
            width="70"
            height="0.5"
            fill="#FFFFFF"
            opacity="0.6"
          />

          {/* Front Wing - Enhanced */}
          <path d="M10 35 L25 33 L25 40 L15 42 Z" fill="url(#carbonFiber)" />
          <path d="M8 36 L20 35 L20 39 L12 40 Z" fill="#374151" />
          <path
            d="M115 33 L130 35 L125 42 L115 40 Z"
            fill="url(#carbonFiber)"
          />
          <path d="M120 35 L132 36 L128 40 L120 39 Z" fill="#374151" />

          {/* Enhanced Cockpit */}
          <ellipse cx="70" cy="32" rx="18" ry="10" fill="url(#carbonFiber)" />
          <ellipse cx="70" cy="32" rx="15" ry="8" fill="#374151" />
          <ellipse
            cx="70"
            cy="32"
            rx="12"
            ry="6"
            fill="#1F2937"
            opacity="0.8"
          />

          {/* Driver Helmet - More detailed */}
          <circle
            cx="70"
            cy="32"
            r="6"
            fill="#FCD34D"
            className="animate-pulse"
          />
          <circle cx="70" cy="32" r="4" fill="#374151" opacity="0.8" />
          <circle cx="68" cy="30" r="1" fill="#FFFFFF" opacity="0.9" />

          {/* Front Nose Cone */}
          <path d="M8 36 L25 32 L25 41 L8 41 Z" fill="url(#carGradient)" />
          <path d="M5 37 L15 36 L15 40 L5 40 Z" fill="#DC2626" />

          {/* Enhanced Rear Wing */}
          <rect x="105" y="25" width="8" height="2" fill="url(#carbonFiber)" />
          <rect x="103" y="22" width="12" height="1" fill="#374151" />
          <rect
            x="106"
            y="23"
            width="6"
            height="0.5"
            fill="#FFFFFF"
            opacity="0.5"
          />

          {/* Enhanced Wheels with more details */}
          <circle
            cx="35"
            cy="47"
            r="10"
            fill="url(#wheelGradient)"
            className="animate-spin"
          />
          <circle cx="35" cy="47" r="7" fill="#374151" />
          <circle cx="35" cy="47" r="4" fill="#6B7280" />
          <circle cx="35" cy="47" r="2" fill="#9CA3AF" />

          {/* Wheel spokes */}
          <g
            stroke="#9CA3AF"
            strokeWidth="1"
            opacity="0.7"
            className="animate-spin"
          >
            <line x1="35" y1="39" x2="35" y2="55" />
            <line x1="27" y1="47" x2="43" y2="47" />
            <line x1="29.5" y1="41.5" x2="40.5" y2="52.5" />
            <line x1="40.5" y1="41.5" x2="29.5" y2="52.5" />
          </g>

          <circle
            cx="105"
            cy="47"
            r="10"
            fill="url(#wheelGradient)"
            className="animate-spin"
          />
          <circle cx="105" cy="47" r="7" fill="#374151" />
          <circle cx="105" cy="47" r="4" fill="#6B7280" />
          <circle cx="105" cy="47" r="2" fill="#9CA3AF" />

          {/* Wheel spokes */}
          <g
            stroke="#9CA3AF"
            strokeWidth="1"
            opacity="0.7"
            className="animate-spin"
          >
            <line x1="105" y1="39" x2="105" y2="55" />
            <line x1="97" y1="47" x2="113" y2="47" />
            <line x1="99.5" y1="41.5" x2="110.5" y2="52.5" />
            <line x1="110.5" y1="41.5" x2="99.5" y2="52.5" />
          </g>

          {/* Enhanced Speed Lines */}
          <g className="animate-pulse" opacity="0.9">
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
              x2="142"
              y2="34"
              stroke="#F87171"
              strokeWidth="2"
            />
            <line
              x1="130"
              y1="38"
              x2="144"
              y2="38"
              stroke="#FCA5A5"
              strokeWidth="1"
            />
            <line
              x1="132"
              y1="42"
              x2="146"
              y2="42"
              stroke="#FECACA"
              strokeWidth="1"
            />
          </g>

          {/* Enhanced Exhaust Effects */}
          <ellipse
            cx="118"
            cy="42"
            rx="5"
            ry="4"
            fill="#FCD34D"
            opacity="0.8"
            className="animate-ping"
          />
          <ellipse
            cx="120"
            cy="42"
            rx="4"
            ry="3"
            fill="#F59E0B"
            opacity="0.9"
            className="animate-ping"
          />
          <ellipse
            cx="122"
            cy="42"
            rx="3"
            ry="2"
            fill="#D97706"
            className="animate-pulse"
          />
          <ellipse
            cx="124"
            cy="42"
            rx="2"
            ry="1"
            fill="#B45309"
            className="animate-pulse"
          />

          {/* Side Details Enhanced */}
          <rect x="40" y="36" width="60" height="2" fill="#B91C1C" />
          <rect x="45" y="39" width="50" height="1" fill="#7F1D1D" />
          <rect
            x="42"
            y="37"
            width="56"
            height="0.5"
            fill="#FFFFFF"
            opacity="0.3"
          />

          {/* Enhanced Front Lights */}
          <circle
            cx="12"
            cy="38"
            r="2.5"
            fill="#FBBF24"
            className="animate-pulse"
          />
          <circle cx="12" cy="38" r="1.5" fill="#FCD34D" />
          <circle cx="11" cy="37" r="0.5" fill="#FFFFFF" opacity="0.9" />

          {/* Additional Details */}
          {/* Brake discs */}
          <circle
            cx="35"
            cy="47"
            r="6"
            stroke="#DC2626"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <circle
            cx="105"
            cy="47"
            r="6"
            stroke="#DC2626"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />

          {/* Air intakes */}
          <rect x="50" y="29" width="8" height="2" fill="#1F2937" />
          <rect x="82" y="29" width="8" height="2" fill="#1F2937" />
        </svg>

        {/* 추가 시각 효과 */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
      </div>

      {/* 배경 파티클 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-60"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
      </div>
    </div>
  );
}
