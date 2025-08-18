import { useState } from "react";
import TaeseongLogo from "../assets/images/taeseong.jpeg";
import TodaysquareLogo from "../assets/images/todaysquare.png";
import PnuLogo from "../assets/images/pnu.png";

export default function CareerPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <svg
                className="text-amber-400"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              경력 및 경험
            </h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm">활동 중</span>
          </div>
        </header>

        {/* TIMELINE SECTION */}
        <section className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700/50">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl md:text-2xl font-semibold">
              연혁 (Timeline)
            </h2>
          </div>

          {/* DESKTOP TIMELINE */}
          <div className="hidden lg:block relative">
            {/* Gradient Center Line */}
            <div className="absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-transparent via-sky-500/70 to-transparent"></div>

            {/* Timeline Items */}
            <div className="flex justify-between items-start py-8">
              {timeline.map((item) => (
                <div
                  key={item.id}
                  className="relative w-[30%] flex flex-col items-center"
                >
                  {/* Date Marker */}
                  <div className="mb-6 relative z-10">
                    <div
                      className={`text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                        activeCard === item.id
                          ? "bg-white text-gray-900 scale-105 shadow-lg"
                          : `bg-${item.color}-900/30 text-${item.color}-200`
                      }`}
                    >
                      {item.period}
                    </div>
                  </div>

                  {/* Timeline Marker */}
                  <div className="relative mb-8">
                    <div
                      className={`w-8 h-8 rounded-full border-4 border-white bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center ${
                        activeCard === item.id ? "scale-125" : ""
                      } transition-transform duration-300`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-${item.color}-400`}
                      />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full ${
                        activeCard === item.id
                          ? `animate-ping bg-${item.color}-400/40`
                          : ""
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`w-full rounded-xl p-5 transition-all duration-300 transform ${
                      activeCard === item.id
                        ? "scale-105 bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl"
                        : "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg"
                    } hover:scale-105 hover:bg-gray-800/70 cursor-pointer`}
                    onMouseEnter={() => setActiveCard(item.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className={`w-12 h-12 rounded-full object-cover border-2 ${
                          activeCard === item.id
                            ? `border-${item.color}-400`
                            : "border-gray-600"
                        } transition-all`}
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            activeCard === item.id
                              ? `text-${item.color}-300`
                              : "text-gray-400"
                          }`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <ul className="text-sm space-y-2 pl-1">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start">
                          <span
                            className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 bg-${item.color}-400`}
                          ></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-4 pt-3 border-t border-gray-700/50 text-xs text-${item.color}-300`}
                    >
                      {item.color === "blue"
                        ? "Flutter"
                        : item.color === "green"
                        ? "React Native"
                        : "Computer Science"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE TIMELINE */}
          <div className="lg:hidden">
            <div className="border-l-2 border-gray-700 pl-6 py-4 space-y-10">
              {timeline.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-7 top-3 w-12 flex items-center justify-center">
                    <div
                      className={`w-6 h-6 rounded-full border-3 border-white bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-${item.color}-400`}
                      />
                    </div>
                  </div>

                  <div
                    className={`mb-3 text-sm font-semibold px-3 py-1.5 rounded-full inline-block bg-${item.color}-900/30 text-${item.color}-200`}
                  >
                    {item.period}
                  </div>

                  <div className="mt-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                    <ul className="text-sm space-y-2 pl-1">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start">
                          <span
                            className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 bg-${item.color}-400`}
                          ></span>
                          {b}
                        </li>
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
