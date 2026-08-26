import type { ProjectLinks } from "@/data/caseStudies";

export type ResumeProject = {
  name: string;
  role: string;
  period: string;
  /** 무엇을 만들었는지 한 줄로. 세부는 /portfolio 담당. */
  summary: string;
  stack: string[];
  bullets: string[];
  links?: ProjectLinks;
};

/** Resume에는 대표 프로젝트 2개만 노출한다. 상세 서술은 /portfolio 담당. */
export const resumeProjects: ResumeProject[] = [
  {
    name: "DailyOPIc",
    role: "Solo Product · iOS · Backend · Infra",
    period: "2025.11 – Present",
    summary: "AI 기반 OPIc Speaking 학습 서비스를 기획부터 운영까지 단독으로 개발했습니다.",
    stack: ["SwiftUI", "FastAPI", "OpenAI API", "Firestore", "Cloud Run", "GitHub Actions"],
    bullets: [
      "LLM 평가 결과를 서버측 rubric과 규칙으로 다시 검증하는 평가 구조를 설계했습니다.",
      "iOS 앱·Backend·Cloud 인프라를 직접 구축하고 구독·광고 수익 모델을 붙여 운영 중입니다.",
      "App Store 다운로드 2,200+ · 실사용자 250+",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/daily-opic/id6756842982",
      caseStudy: "/portfolio/dailyopic/",
    },
  },
  {
    name: "KillingPart",
    role: "iOS Developer",
    period: "2026.01 – Present",
    summary:
      "음악과 일기를 함께 기록·공유하는 서비스에서 6인 팀 중 iOS를 단독으로 맡고 있습니다.",
    stack: ["Swift", "SwiftUI", "MVVM", "OAuth", "Universal Links"],
    bullets: [
      "Kakao·Apple·Google OAuth와 음악·YouTube 연동, Universal Links 기반 공유를 구현했습니다.",
      "앱 기초 설계부터 TestFlight QA, App Store 출시와 운영까지 iOS 전 구간을 담당했습니다.",
      "App Store 라이프스타일 카테고리 141위",
    ],
    links: {
      appStore:
        "https://apps.apple.com/us/app/%ED%82%AC%EB%A7%81%ED%8C%8C%ED%8A%B8-killingpart/id6758883638",
      caseStudy: "/portfolio/killingpart/",
    },
  },
];
