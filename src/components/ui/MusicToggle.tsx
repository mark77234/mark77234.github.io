interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
  userInteracted?: boolean;
  className?: string;
}

export default function MusicToggle({
  isPlaying,
  onToggle,
  userInteracted = true,
  className = "",
}: MusicToggleProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={onToggle}
        className={`p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 ${className}`}
        title={isPlaying ? "음악 끄기" : "음악 켜기"}
      >
        {isPlaying ? (
          // 음악 재생 중 아이콘 (스피커 + 소리 파형)
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
            <path
              d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            />
          </svg>
        ) : (
          // 음악 정지 아이콘 (스피커 + X)
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
            <path
              d="M23 9l-6 6M17 9l6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* 사용자 상호작용 안내 */}
      {!userInteracted && (
        <div className="absolute bottom-full mb-2 right-0 bg-black/80 text-white text-xs p-2 rounded-lg whitespace-nowrap">
          클릭하여 배경음악 활성화
        </div>
      )}
    </div>
  );
}
