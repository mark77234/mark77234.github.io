import type { ProjectLinks } from "@/data/caseStudies";

export type Experience = {
  company: string;
  role: string;
  period: string;
  /** 하나의 연속된 경력 안에서 계약 형태가 바뀐 구간 */
  terms?: { period: string; title: string }[];
  /** 무엇을 했는지 한 줄로. 세부는 bullets가 맡는다. */
  summary: string;
  stack: string[];
  bullets: string[];
  /** 재직 중 출시한 서비스의 공개 스토어 링크 */
  service?: { name: string; links: ProjectLinks };
};

export const experiences: Experience[] = [
  {
    company: "(주)오늘의이야기",
    role: "Mobile Developer",
    period: "2025.06 – 2026.02",
    terms: [
      { period: "2025.06 – 2026.01", title: "현장실습" },
      { period: "2026.01 – 2026.02", title: "인턴" },
    ],
    summary:
      "React Native·Expo 기반 여행 서비스 TRIT의 모바일 핵심 기능과 배포 환경을 개발해 App Store·Play Store 출시까지 완료했습니다.",
    stack: ["React Native", "Expo", "TypeScript", "Google Maps", "TMAP", "GitHub Actions"],
    bullets: [
      "Google Maps 기반 250+ 장소의 Marker·Clustering과 TMAP 도보·대중교통·자동차 길찾기를 구현했습니다.",
      "역할별 마이페이지 등 웹 서비스의 핵심 기능을 iOS·Android 환경으로 확장했습니다.",
      "수동 빌드·배포를 GitHub Actions로 옮겨 TestFlight·Android 내부 테스트 배포를 자동화했습니다.",
    ],
    service: {
      name: "TRIT",
      links: {
        appStore: "https://apps.apple.com/kr/app/trit-korea-travel-platform/id6754618596",
        playStore:
          "https://play.google.com/store/apps/details?id=com.todaysquare.trit&hl=ko",
      },
    },
  },
  {
    company: "(주)태성환경연구소",
    role: "Flutter Developer · 현장실습",
    period: "2024.12 – 2025.02",
    summary: "Flutter 기반 악취 분석 모바일 MVP를 개발했습니다.",
    stack: ["Flutter", "Dart", "BLE", "Serial", "REST API"],
    bullets: [
      "BLE·Serial 기반 측정 센서와 모바일 앱 사이의 통신을 구현했습니다.",
      "센서 측정값을 처리·시각화하고 서버 API와 연동해 저장·조회 흐름을 구성했습니다.",
      "실제 하드웨어와 앱 사이의 통신 문제를 직접 재현·분석해 해결했습니다.",
    ],
  },
];
