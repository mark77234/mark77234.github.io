import TaeseongLogo from "../assets/images/taeseong.jpeg";
import TodaysquareLogo from "../assets/images/todaysquare.png";
import PnuLogo from "../assets/images/pnu.png";

export default function CareerPage() {
  const timeline = [
    {
      id: 1,
      title: "태성환경연구소",
      role: "개발팀 · 앱 개발 (Flutter)",
      period: "2024.12.26 — 2025.02.28",
      bullets: [
        "악취 분석 서비스 앱 클라이언트 개발 담당",
        "기획·UI/UX(2024.12.26~2025.1.14), 기능 개발(2025.1.14~2.13)",
        "악취·음주 측정, 기록·통계, 드롭다운·카드·바차트 UI",
      ],
      logo: TaeseongLogo,
      color: "blue",
    },
    {
      id: 2,
      title: "오늘의이야기",
      role: "개발팀 · 앱 개발 (React Native)",
      period: "2025.06 — 2025.12",
      bullets: [
        "플랫폼 웹 서비스를 앱으로 전환하는 작업 참여",
        "지도 기반 탐색, 예약·구매, 파트너·SNS 연동 구현",
        "마이페이지, 로그인, 지도 파트 담당",
      ],
      logo: TodaysquareLogo,
      color: "green",
    },
    {
      id: 3,
      title: "부산대학교",
      role: "IT응용공학과 · 학업",
      period: "2021 — 2027 (졸업예정)",
      bullets: ["전공: IT응용공학과"],
      logo: PnuLogo,
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path
              fill="#fbbf24"
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            />
          </svg>
          경력
        </h1>

        {/* HORIZONTAL TIMELINE (desktop) + VERTICAL fallback (mobile) */}
        <section className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="#38bdf8"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              />
            </svg>
            연혁 (Timeline)
          </h2>

          {/* Line for desktop: absolute center horizontal line */}
          <div className="hidden lg:block relative">
            <div className="absolute left-0 right-0 top-24 h-0.5 bg-gray-700/70"></div>

            <div className="flex items-start gap-8 overflow-x-auto py-8 px-4">
              {timeline.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-80 flex flex-col items-center"
                >
                  {/* date chip */}
                  <div className="mb-3">
                    <div className="text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                      {item.period}
                    </div>
                  </div>

                  {/* marker */}
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full border-4 border-white/90 bg-gradient-to-br from-gray-300 to-gray-500"></div>
                    <div
                      className={`w-2 h-2 rounded-full absolute left-1 top-1 bg-${item.color}-400/90`}
                    />
                  </div>

                  {/* card */}
                  <div className="mt-6 w-full bg-white/6 rounded-xl p-4 text-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300">{item.role}</p>
                      </div>
                    </div>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical timeline for mobile */}
          <div className="lg:hidden">
            <div className="border-l-2 border-gray-700 pl-6 py-4 space-y-8">
              {timeline.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-6 top-2 w-12 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-4 border-white/90 bg-gradient-to-br from-gray-300 to-gray-500"></div>
                  </div>

                  <div className="mb-1">
                    <div className="text-sm font-semibold bg-black/40 px-2 py-1 rounded-full inline-block">
                      {item.period}
                    </div>
                  </div>

                  <div className="mt-2 bg-white/6 rounded-xl p-4 text-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300">{item.role}</p>
                      </div>
                    </div>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
