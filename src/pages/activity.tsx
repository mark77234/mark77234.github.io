export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            대외활동
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            다양한 대회, 수상 경력 및 동아리 활동을 통해 얻은 경험과 성과를
            소개합니다.
          </p>
        </header>

        {/* 수상 및 대회 섹션 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 w-3 h-10 rounded-full mr-3"></div>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
              수상 및 대회
            </h2>
          </div>

          <div className="space-y-6">
            {/* 대회 및 수상 카드 */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-blue-300">
                  대학생논문경진대회 데이터 분석
                </h3>
                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-sm font-medium">
                  2024.09 ~ 2024.12
                </span>
              </div>
              <p className="mt-2 text-gray-300">
                2024 한국정보기술학회 추계종합학술대회
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-yellow-300 font-medium">동상 수상</span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-blue-300">
                  동남권 창업아이디어 경진대회 안드로이드 개발
                </h3>
                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-sm font-medium">
                  2024.08
                </span>
              </div>
              <p className="mt-2 text-gray-300">
                2024 동남권 LINC 3.0 글로벌 창업노마드 경진대회
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-yellow-300 font-medium">우수상 수상</span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-blue-300">
                  Generative AI Application 안드로이드 개발
                </h3>
                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-sm font-medium">
                  2024.05
                </span>
              </div>
              <p className="mt-2 text-gray-300">
                PNU x Upstage Document AI Challenge
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-yellow-300 font-medium">우수상 수상</span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-blue-300">
                  미래에셋증권 AI 페스티벌 주식수치화 앱 서비스 데모판 배포
                </h3>
                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-sm font-medium">
                  2025.07
                </span>
              </div>
              <p className="mt-2 text-gray-300">
                주식 데이터를 수치화하여 분석하는 AI 기반 서비스 개발
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-blue-300 font-medium">
                  데모 서비스 배포
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 동아리 활동 섹션 */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-teal-400 w-3 h-10 rounded-full mr-3"></div>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              동아리 활동
            </h2>
          </div>

          {/* 타임라인 레이아웃 */}
          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

            <div className="space-y-8 pl-12">
              {/* 코딱지 동아리 */}
              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-green-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-green-300">
                      코딱지 동아리 안드로이드 스터디
                    </h3>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">
                      2023.03 ~ 2024.08
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">
                    부산대학교 IT응용공학과 과동아리
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      안드로이드
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      스터디
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      모바일 개발
                    </span>
                  </div>
                </div>
              </div>

              {/* BEE Maker 스터디그룹 */}
              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-green-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-green-300">
                      BEE Maker 스터디그룹 리더 및 iOS 개발
                    </h3>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">
                      2024.05 ~ 2024.12
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">
                    부산대학교 공학교육혁신센터
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      iOS 개발
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      스터디 리더
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      팀 관리
                    </span>
                  </div>
                </div>
              </div>

              {/* 학습 플러스 코칭 동아리 */}
              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-green-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-green-300">
                      학습 플러스 코칭 동아리 리더 및 iOS 개발
                    </h3>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">
                      2024.04 ~ 2024.07
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">
                    부산대학교 교수학습지원센터
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-yellow-300 font-medium">
                      우수상 수상
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      iOS 개발
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      리더십
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      교육 코칭
                    </span>
                  </div>
                </div>
              </div>

              {/* Apptive 동아리 */}
              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-green-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-green-300">
                      "Apptive" 앱 개발 동아리 안드로이드 개발 및 멘토
                    </h3>
                    <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">
                      2025.03 ~ 진행 중
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">
                    부산대학교 정보컴퓨터공학부 과동아리
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-blue-300 font-medium">
                      진행 중인 활동
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      안드로이드
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      멘토링
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      앱 개발
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 text-sm rounded">
                      팀 프로젝트
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
