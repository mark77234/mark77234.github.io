export type Experience = {
  company: string;
  role: string;
  period: string;
  /** 하나의 연속된 경력 안에서 계약 형태가 바뀐 구간 */
  terms?: { period: string; title: string }[];
  stack: string[];
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "(주)오늘의이야기",
    role: "Mobile Developer",
    period: "2025.06 – 2026.02",
    terms: [
      { period: "2025.06 – 2026.01", title: "모바일 앱 개발 현장실습" },
      { period: "2026.01 – 2026.02", title: "Mobile Developer Intern" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Google Maps", "TMAP", "GitHub Actions"],
    bullets: [
      "React Native·Expo 기반 여행 서비스 TRIT의 iOS·Android 앱을 초기 구축 단계부터 맡아 App Store·Play Store 출시까지 완료했고, 심사 반려 이슈를 기획·개발 Lead와 함께 해결했습니다.",
      "사용자 역할별 마이페이지, Google Maps 기반 250+ 장소 표시와 clustering·zoom level 처리, TMAP 도보·대중교통·자동차 길찾기 등 웹 서비스의 핵심 기능을 모바일 환경에 맞게 구현했습니다.",
      "출시 이후 실서비스를 운영하며, 검증 주기를 늦추던 수동 빌드·배포를 GitHub Actions 기반 iOS·Android CI/CD로 전환해 TestFlight·Android 내부 테스트 배포를 자동화했습니다.",
    ],
  },
  {
    company: "(주)태성환경연구소",
    role: "Flutter Developer · 현장실습",
    period: "2024.12 – 2025.02",
    stack: ["Flutter", "Dart", "BLE", "Serial", "REST API"],
    bullets: [
      "Flutter 기반 악취 분석 모바일 MVP를 개발하며 BLE·Serial 방식의 측정 센서를 연동하고 수신 데이터를 처리·시각화했습니다.",
      "센서 측정값을 서버 API와 연동해 저장·조회하는 흐름을 구성했고, 실제 하드웨어와 모바일 앱 사이의 통신 문제를 직접 재현·분석해 해결했습니다.",
    ],
  },
];
