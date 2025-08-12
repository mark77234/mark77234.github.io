export default function F1CarAnimation() {
  return (
    <div className="flex items-center justify-center mb-6 relative overflow-hidden">
      {/* 배경 트랙 라인 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-track-lines"></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent top-1/2 transform -translate-y-1/2 animate-track-lines-fast"></div>
      </div>

      {/* 움직이는 도로 효과 */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-road-stripes animate-road-moving"></div>
      </div>

      {/* 메인 F1 카 */}
      <div
        className="relative hover:scale-110 transition-all duration-300 cursor-pointer"
        style={{
          animation:
            "carVibration 0.1s infinite, carFloating 2s ease-in-out infinite alternate",
        }}
      >
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

          <circle cx="35" cy="47" r="7" fill="#374151" />
          <circle cx="35" cy="47" r="4" fill="#6B7280" />
          <circle cx="35" cy="47" r="2" fill="#9CA3AF" />

          <circle cx="105" cy="47" r="7" fill="#374151" />
          <circle cx="105" cy="47" r="4" fill="#6B7280" />
          <circle cx="105" cy="47" r="2" fill="#9CA3AF" />
        </svg>
      </div>

      {/* 속도감을 위한 배경 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 지면 스피드 라인들 */}
        <div className="absolute bottom-0 w-full h-8">
          <div className="speed-lines"></div>
        </div>
      </div>
    </div>
  );
}
