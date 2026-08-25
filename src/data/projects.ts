export type ResumeProject = {
  name: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  bullets: string[];
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
      "Firestore",
      "GCP Cloud Run",
      "Docker",
      "GitHub Actions",
      "OpenAI API",
    ],
    bullets: [
      "문제 생성부터 녹음·STT·답변 분석까지 분절돼 있던 OPIc 학습 과정을 하나의 흐름으로 통합한 서비스를 직접 기획하고, iOS 앱·Backend·Infra·배포·운영 전 구간을 단독으로 구축했습니다.",
      "OpenAI API 기반 문제 생성·답변 분석 Agent를 만들고, 서버측 rubric validation과 실패 문항 단위 retry·문제 catalog fallback을 적용해 AI 응답의 일관성과 복구 가능성을 확보했습니다.",
      "Firebase App Check, RevenueCat, AdMob SSV로 결제·광고 검증 체계를 구성해 실제 운영 중이며, App Store 다운로드 2,200+ / 실사용자 250+ 규모에서 구독·광고 매출이 발생하고 있습니다.",
    ],
  },
  {
    name: "KillingPart",
    role: "iOS Developer",
    period: "2026.01 – Present",
    summary: "음악과 일기를 함께 공유하는 SNS형 서비스",
    stack: ["Swift", "SwiftUI", "MVVM", "OAuth", "Universal Links"],
    bullets: [
      "6인 팀(기획·디자인·Backend·Android) 중 iOS를 단독으로 맡아 앱 기초 설계부터 TestFlight QA, App Store 출시와 운영까지 담당했습니다.",
      "Kakao·Apple·Google OAuth와 iTunes·Spotify·YouTube 연동을 구현했고, Apple 최초 인증·Hide My Email 등 인증 edge case와 YouTube 관련 App Store 심사 이슈를 기능 재설계로 해결했습니다.",
      "다이어리 외부 공유 기능을 직접 제안해 Universal Links 기반 딥링크와 앱 미설치·인앱 브라우저 fallback UX를 설계했으며, 라이프스타일 카테고리 141위를 기록했습니다.",
    ],
  },
];
