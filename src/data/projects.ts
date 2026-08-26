import type { ProjectLinks } from "@/data/caseStudies";

export type ResumeProject = {
  name: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  bullets: string[];
  links?: ProjectLinks;
};

/** Resume에는 대표 프로젝트 2개만 노출한다. 상세 서술은 /portfolio 담당. */
export const resumeProjects: ResumeProject[] = [
  {
    name: "DailyOPIc",
    role: "Service Planning & Full-stack Development",
    period: "2025.11 – Present",
    summary: "AI 기반 OPIc 학습 iOS 서비스",
    stack: [
      "SwiftUI",
      "Python",
      "FastAPI",
      "Firestore",
      "GCP Cloud Run",
      "Docker",
      "GitHub Actions",
      "OpenAI API",
    ],
    bullets: [
      "문제 생성·녹음·STT·답변 분석으로 분절돼 있던 OPIc 학습 과정을 하나의 흐름으로 통합한 서비스를 기획하고, iOS·Backend·Infra·배포·운영 전 구간을 단독으로 맡았습니다.",
      "OpenAI API 기반 문제 생성·답변 분석 Agent를 만들고, LLM 평가 결과를 서버측 rubric과 규칙으로 다시 검증하는 구조를 설계했습니다.",
      "구독·광고 수익 모델을 붙여 실제 서비스를 운영 중이며, App Store 다운로드 2,200+ · 실사용자 250+ 규모입니다.",
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
    summary: "음악과 일기를 함께 공유하는 SNS형 서비스",
    stack: ["Swift", "SwiftUI", "MVVM", "OAuth", "Universal Links"],
    bullets: [
      "6인 팀(기획·디자인·Backend·Android) 중 iOS를 단독으로 맡아 앱 기초 설계부터 TestFlight QA, App Store 출시와 운영까지 담당했습니다.",
      "Kakao·Apple·Google OAuth와 iTunes·Spotify·YouTube 연동을 구현하고, 인증 edge case와 YouTube 관련 App Store 심사 이슈를 기능 재설계로 해결했습니다.",
      "다이어리 외부 공유 기능을 직접 제안해 Universal Links 기반 딥링크와 fallback UX를 설계했으며, 라이프스타일 카테고리 141위를 기록했습니다.",
    ],
    links: {
      appStore:
        "https://apps.apple.com/us/app/%ED%82%AC%EB%A7%81%ED%8C%8C%ED%8A%B8-killingpart/id6758883638",
      caseStudy: "/portfolio/killingpart/",
    },
  },
];
