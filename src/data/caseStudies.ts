export type Block =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "flow"; steps: string[] }
  | { kind: "stack"; groups: { label: string; items: string[] }[] }
  | { kind: "metrics"; items: { value: string; label: string }[] }
  | { kind: "cards"; items: { title: string; text: string }[] }
  | { kind: "screens"; layout: ScreenLayout; items: Screenshot[] }
  | { kind: "diagram"; caption?: string; stages: DiagramStage[] };

/** phone = 세로 앱 스크린샷, wide = 16:9 발표/웹 화면 */
export type ScreenLayout = "phone" | "wide";

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  caption?: string;
};

export type DiagramStage = {
  title: string;
  note?: string;
  items?: string[];
  /** 조건 분기가 있는 단계 (예: 앱 설치 여부) */
  branches?: { label: string; title: string; items?: string[] }[];
};

export type CaseSection = {
  heading: string;
  blocks: Block[];
};

/** 프로젝트에 연결할 링크. 없는 필드는 생략한다. */
export type ProjectLinks = {
  caseStudy?: string;
  appStore?: string;
  playStore?: string;
  live?: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  subtitle: string;
  period?: string;
  role: string;
  context: string;
  stack: string[];
  /** 서비스 공식 대표 이미지. Intro 바로 다음에 가장 먼저 노출한다. */
  cover?: Screenshot;
  links?: ProjectLinks;
  sections: CaseSection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dailyopic",
    index: "01",
    name: "DailyOPIc",
    subtitle: "AI 기반 OPIc 학습 iOS 서비스",
    period: "2025.11 – Present",
    role: "기획 · iOS · Backend · Infra 단독",
    context: "개인 프로덕트 · 운영 중",
    stack: [
      "Swift",
      "SwiftUI",
      "Python",
      "FastAPI",
      "OpenAI API",
      "Firestore",
      "Cloud Run",
      "Docker",
      "GitHub Actions",
      "StoreKit 2",
      "RevenueCat",
    ],
    cover: {
      src: "/images/dailyopic/title.png",
      alt: "DailyOPIc 대표 이미지 — 매일 말하며 준비하는 OPIc",
      width: 1672,
      height: 941,
      title: "DailyOPIc",
    },
    links: {
      caseStudy: "/portfolio/dailyopic/",
      appStore: "https://apps.apple.com/us/app/daily-opic/id6756842982",
    },
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "AI가 OPIc 문제를 생성하고, 사용자의 음성 답변을 분석해 예상 등급과 개선점을 돌려주는 iOS 학습 서비스입니다. 2025년 11월에 기획해 12월에 첫 버전을 출시했고, iOS 앱부터 Backend·Infra·배포·운영까지 전 구간을 직접 구축해 현재도 운영하고 있습니다.",
          },
        ],
      },
      {
        heading: "Problem",
        blocks: [
          {
            kind: "text",
            text: "직접 OPIc을 준비하면서, 혼자 공부하는 과정이 여러 도구로 분절되어 있다는 점이 가장 큰 불편이었습니다. 매 문항마다 앱을 오가며 복사·붙여넣기를 반복해야 했고, 기록이 남지 않아 학습 흐름이 이어지지 않았습니다.",
          },
          {
            kind: "flow",
            steps: [
              "GPT로 문제 생성",
              "별도 녹음 앱",
              "STT",
              "Transcript 재입력",
              "예상 등급 · 분석 요청",
            ],
          },
          {
            kind: "text",
            text: "이 과정을 질문 · 녹음 · 분석 · 기록이 이어지는 하나의 학습 Flow로 통합하는 것이 서비스의 출발점이었습니다.",
          },
        ],
      },
      {
        heading: "Product",
        blocks: [
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/dailyopic/home.png",
                alt: "DailyOPIc 홈 화면 — 오늘의 질문과 녹음 버튼",
                width: 1179,
                height: 2556,
                title: "Daily",
                caption: "오늘의 질문 확인 후 바로 답변 시작",
              },
              {
                src: "/images/dailyopic/recording.png",
                alt: "DailyOPIc 녹음 화면 — 남은 시간 177초 표시",
                width: 1179,
                height: 2556,
                title: "Recording",
                caption: "앱 안에서 직접 음성 답변 · 180초 제한",
              },
              {
                src: "/images/dailyopic/analysis.png",
                alt: "DailyOPIc 답변 확인 화면 — 분석하기와 다시 녹음 선택",
                width: 1179,
                height: 2556,
                title: "Transcript",
                caption: "STT 결과를 확인하고 제출 또는 재녹음",
              },
              {
                src: "/images/dailyopic/result.png",
                alt: "DailyOPIc 결과 화면 — 예상 등급과 잘한 점, 개선할 점",
                width: 1179,
                height: 2556,
                title: "Result",
                caption: "예상 등급 · 강점 · 개선점 · 항목별 피드백",
              },
            ],
          },
        ],
      },
      {
        heading: "Architecture",
        blocks: [
          {
            kind: "diagram",
            stages: [
              {
                title: "iOS App",
                note: "Swift · SwiftUI",
                items: [
                  "Recording",
                  "STT",
                  "TTS",
                  "RevenueCat",
                  "AdMob",
                  "Firebase App Check",
                ],
              },
              {
                title: "FastAPI Backend",
                note: "Python",
                items: [
                  "Question Generation",
                  "Answer Evaluation",
                  "Rubric Validation",
                  "RevenueCat Webhook",
                  "AdMob SSV",
                ],
              },
              { title: "AI · Data", items: ["OpenAI API", "Firestore"] },
            ],
          },
          {
            kind: "text",
            text: "AI 호출과 채점 규칙을 클라이언트가 아닌 서버에 두어, 앱 심사·배포 주기와 무관하게 평가 로직을 교정할 수 있도록 했습니다.",
          },
          {
            kind: "diagram",
            caption: "Infrastructure",
            stages: [
              { title: "GitHub Actions" },
              { title: "Docker" },
              { title: "Artifact Registry" },
              { title: "Google Cloud Run" },
            ],
          },
        ],
      },
      {
        heading: "AI Evaluation",
        blocks: [
          {
            kind: "text",
            text: "LLM이 생성한 예상 등급을 그대로 노출하지 않고, Rubric 결과와 서버 규칙을 이용해 다시 검증합니다.",
          },
          {
            kind: "diagram",
            stages: [
              { title: "Voice Answer" },
              { title: "STT Transcript" },
              { title: "LLM Evaluation" },
              {
                title: "5 Rubric Domains",
                items: [
                  "Task Completion",
                  "Grammar",
                  "Vocabulary",
                  "Discourse",
                  "Fluency",
                ],
              },
              {
                title: "Band Classification",
                items: [
                  "Foundation",
                  "Developing",
                  "Functional",
                  "Strong",
                  "Advanced",
                ],
              },
              { title: "Server Validation" },
              {
                title: "Final Result",
                items: [
                  "Estimated Grade",
                  "Strengths",
                  "Improvements",
                  "Sample Answer",
                ],
              },
            ],
          },
          {
            kind: "text",
            text: "AI가 임의의 연속 점수를 만들어내면 같은 수준의 답변에도 매번 다른 숫자가 나옵니다. 그래서 AI에게는 영역별 band 판정만 맡기고, 예상 등급은 서버가 규칙으로 다시 계산합니다.",
          },
          {
            kind: "list",
            items: [
              "모든 영역 Foundation → 최대 IL",
              "Strong 영역 없음 → 최대 IM3",
              "Task 또는 Discourse가 Functional 미만 → 최대 IM3",
              "AL → 모든 영역 Strong 이상 + 최소 하나 Advanced",
            ],
          },
          {
            kind: "text",
            text: "공식 라벨을 기준으로 한 정확도 실험은 하지 않았기 때문에 채점 정확도가 올랐다고는 말할 수 없습니다. 이 구조로 확보한 것은 평가 결과의 일관성, 검증 가능성, 그리고 장애 상황에서의 복구 가능성입니다.",
          },
        ],
      },
      {
        heading: "Reliability & Production",
        blocks: [
          {
            kind: "cards",
            items: [
              {
                title: "Retry",
                text: "문제 생성이 실패해도 전체 세트를 버리지 않고 실패한 문항만 최대 3회 재생성",
              },
              {
                title: "Structured Output",
                text: "JSON Schema로 응답 형식을 검증하고, 형식이 어긋난 응답은 재요청",
              },
              {
                title: "Fallback",
                text: "AI 장애 시 미리 검증해 둔 문제 Catalog로 대체해 학습 흐름 유지",
              },
              {
                title: "Production Security",
                text: "App Check · App Attest · RevenueCat Webhook · AdMob SSV로 서버에서 검증",
              },
            ],
          },
          {
            kind: "text",
            text: "초기에는 시험 구성과 문제 내용을 모두 AI가 생성했습니다. 문항 수나 유형이 흔들리면 시험 자체가 성립하지 않아, 서버가 시험 구조를 고정하고 AI는 질문 내용만 생성하도록 역할을 나눴습니다.",
          },
        ],
      },
      {
        heading: "Cost Optimization",
        blocks: [
          {
            kind: "list",
            items: [
              "작업 성격에 맞춰 lightweight model 사용",
              "15개 문제를 개별 호출하지 않고 batch로 한 번에 생성",
              "모의고사 15개 답변 분석도 가능한 범위에서 묶어서 처리",
            ],
          },
        ],
      },
      {
        heading: "Real User Issue",
        blocks: [
          {
            kind: "list",
            items: [
              "말하다 잠깐 멈추면 녹음이 자동 종료되던 문제 — silence auto-stop을 제거하고 직접 종료하거나 180초 제한에 도달할 때만 끝나도록 변경",
              "녹음 파일 용량 문제 — AAC/M4A 48kbps로 인코딩해 180초 기준 약 5.4MB에서 약 1.1MB로 감소",
            ],
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            kind: "metrics",
            items: [
              { value: "2,200+", label: "App Store Downloads" },
              { value: "250+", label: "Real / Active Users" },
              { value: "Subscription", label: "구독 매출 발생" },
              { value: "Ads", label: "광고 매출 발생" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "killingpart",
    index: "02",
    name: "KillingPart",
    subtitle: "음악 취향을 구간으로 기록하고 공유하는 소셜 플랫폼",
    period: "2026.01 – Present",
    role: "iOS 단독 개발",
    context:
      "팀 프로젝트 (기획 1 · 디자인 1 · Backend 2 · Android 2 · iOS 1) · 운영 중",
    stack: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "Kakao / Apple / Google OAuth",
      "iTunes API",
      "Spotify API",
      "YouTube",
      "Universal Links",
    ],
    cover: {
      src: "/images/killingpart/title.png",
      alt: "KillingPart 대표 이미지 — 짧게 들어도, 길게 남는 순간",
      width: 6000,
      height: 3000,
      title: "KillingPart",
    },
    links: {
      caseStudy: "/portfolio/killingpart/",
      appStore:
        "https://apps.apple.com/us/app/%ED%82%AC%EB%A7%81%ED%8C%8C%ED%8A%B8-killingpart/id6758883638",
    },
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "한 곡에서 가장 좋았던 구간을 잘라내 그날의 감정과 함께 기록하고, 다른 사람과 공유하는 서비스입니다. 6인 팀에서 iOS를 단독으로 맡아 앱 기초 설계부터 TestFlight QA, App Store 출시와 운영까지 담당했습니다.",
          },
        ],
      },
      {
        heading: "Product",
        blocks: [
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/killingpart/killingpart.PNG",
                alt: "KillingPart 구간 편집 화면 — 파형에서 킬링파트 자르기",
                width: 1179,
                height: 2556,
                title: "Trim",
                caption: "파형에서 곡의 킬링파트 구간을 직접 지정",
              },
              {
                src: "/images/killingpart/music.PNG",
                alt: "KillingPart 기록 상세 화면 — 구간과 감정, 메모",
                width: 1179,
                height: 2556,
                title: "Record",
                caption: "선택한 구간에 감정과 메모를 남겨 저장",
              },
              {
                src: "/images/killingpart/diary.PNG",
                alt: "KillingPart 내 컬렉션 화면 — 저장한 킬링파트 목록",
                width: 1179,
                height: 2556,
                title: "Collection",
                caption: "쌓인 킬링파트를 컬렉션으로 모아보기",
              },
              {
                src: "/images/killingpart/home.PNG",
                alt: "KillingPart 재생 화면 — 지정한 구간 재생",
                width: 1179,
                height: 2556,
                title: "Play",
                caption: "YouTube player로 지정한 구간만 재생",
              },
            ],
          },
        ],
      },
      {
        heading: "Universal Links · Diary Share",
        blocks: [
          {
            kind: "text",
            text: "기록한 킬링파트를 앱 밖으로 공유하는 기능을 직접 제안하고 iOS 측 구현을 맡았습니다. 별도의 웹 서비스가 없는 상태에서, 공유 링크 하나가 앱 설치 여부에 따라 다른 목적지로 이어지도록 흐름 전체를 설계해야 했습니다.",
          },
          {
            kind: "diagram",
            stages: [
              { title: "Diary", note: "공유하기" },
              { title: "killingpart.com/{diaryId}" },
              { title: "Link Open" },
              {
                title: "App Installed?",
                branches: [
                  {
                    label: "Yes",
                    title: "앱 내 해당 Diary",
                    items: ["Universal Links"],
                  },
                  {
                    label: "No",
                    title: "Landing",
                    items: ["App Store", "Play Store"],
                  },
                ],
              },
            ],
          },
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/killingpart/share.PNG",
                alt: "메신저에 공유된 KillingPart 링크 미리보기 카드",
                width: 1179,
                height: 2556,
                title: "Share",
                caption: "메신저에 곡·구간 정보가 담긴 링크 카드로 전달",
              },
              {
                src: "/images/killingpart/deeplink.PNG",
                alt: "인앱 브라우저에서 앱으로 이동하는 fallback 안내",
                width: 1179,
                height: 2556,
                title: "Fallback",
                caption: "자동 이동이 막히면 직접 열 수 있는 진입점 제공",
              },
            ],
          },
          {
            kind: "text",
            text: "링크는 대부분 메신저 안에서 열립니다. 카카오톡·Instagram 인앱 브라우저에서는 자동 redirect가 제한되는 경우가 있어, 사용자가 빈 화면에서 멈추지 않도록 앱이나 스토어로 직접 이동하는 버튼을 포함한 fallback UX를 함께 설계했습니다.",
          },
        ],
      },
      {
        heading: "Engineering Highlights",
        blocks: [
          {
            kind: "cards",
            items: [
              {
                title: "Universal Links",
                text: "Diary ID 기반 공유 링크와 앱 · 스토어 Routing, 인앱 브라우저 fallback",
              },
              {
                title: "Apple Sign In",
                text: "최초 인증에서만 내려오는 name/email 처리와 Hide My Email relay 주소 대응",
              },
              {
                title: "App Store Review",
                text: "YouTube 관련 5.2.1 / 5.2.3 이슈를 custom control 제거와 기능 재설계로 해결",
              },
            ],
          },
          {
            kind: "text",
            text: "Apple은 이름과 이메일을 최초 인증 시점에만 전달하고, Hide My Email을 사용하면 실제 주소 대신 relay email이 내려옵니다. 재로그인 시 사용자 정보를 다시 받을 수 있다는 Kakao·Google 기준의 전제를 걷어내고, 정보를 저장하는 시점과 프로필 구성 흐름을 다시 설계했습니다.",
          },
          {
            kind: "text",
            text: "App Store 심사에서는 YouTube 콘텐츠 사용과 관련해 리젝을 받았습니다. 기능을 빼는 대신 정책을 다시 확인하고, 직접 만든 custom video control을 제거해 YouTube native player의 재생 방식을 그대로 유지하는 구조로 재설계한 뒤 재심사를 통과했습니다.",
          },
        ],
      },
      {
        heading: "Delivery",
        blocks: [
          {
            kind: "flow",
            steps: [
              "feature",
              "PR",
              "dev",
              "TestFlight QA",
              "main",
              "App Store",
            ],
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            kind: "metrics",
            items: [
              { value: "iOS", label: "단독 개발" },
              { value: "141위", label: "App Store 라이프스타일" },
              { value: "Live", label: "App Store 출시 및 운영" },
            ],
          },
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/killingpart/ranked_1.PNG",
                alt: "App Store의 KillingPart 제품 페이지 — 라이프스타일 차트 141위",
                width: 1179,
                height: 2556,
                title: "App Store",
                caption: "라이프스타일 차트 No.141 · 평점 5.0",
              },
              {
                src: "/images/killingpart/ranked_2.PNG",
                alt: "App Store 라이프스타일 Top Downloaded 목록에 노출된 KillingPart",
                width: 1179,
                height: 2556,
                title: "Top Downloaded",
                caption: "라이프스타일 무료 앱 다운로드 순위 141위",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dive",
    index: "03",
    name: "DIVE 2026 · 부가가치",
    subtitle: "부산 공공임대주택 맞춤 추천 서비스",
    period: "2026.07.25 – 2026.07.26",
    role: "서비스 개발 단독 담당 (데이터 분석 3 · 개발 1)",
    context: "부산도시공사 발제 해커톤 · 발제사 3위",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Kakao Maps",
      "Upstage Solar Pro 2",
      "Vercel",
    ],
    cover: {
      src: "/images/dive/title.png",
      alt: "부가가치 대표 이미지 — 내 자격과 취향에 맞는 부산 공공임대주택 추천 서비스",
      width: 2003,
      height: 1137,
      title: "부가가치",
    },
    links: {
      caseStudy: "/portfolio/dive/",
      live: "https://bugagachi.vercel.app/",
    },
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "부산도시공사 발제로 진행한 무박 2일 해커톤 결과물입니다. 내 자격으로 신청할 수 있는 공공임대주택을, 내 생활 취향에 맞춰 지도 위에서 찾아주는 서비스로, 데이터 분석 3명이 정리한 공공데이터를 받아 서비스 개발 전체를 단독으로 담당했습니다.",
          },
        ],
      },
      {
        heading: "Problem",
        blocks: [
          {
            kind: "text",
            text: "공공임대주택 정보는 공급자 중심의 모집 공고로 제공됩니다. 신청자는 자신이 어떤 유형에 해당하는지 판단하기 어렵고, 자격을 확인한 뒤에도 주변 생활 인프라는 주택마다 따로 검색해야 했습니다. 자격 판별과 생활권 탐색을 한 화면에서 끝내는 것이 목표였습니다.",
          },
        ],
      },
      {
        heading: "Product",
        blocks: [
          {
            kind: "screens",
            layout: "wide",
            items: [
              {
                src: "/images/dive/feat_1.png",
                alt: "공공임대 자격 확인 단계 화면",
                width: 1920,
                height: 1080,
                title: "자격 요건 필터링",
                caption:
                  "주택 소유 · 가구 · 소득/자산 · 지역을 단계별로 입력해 신청 가능한 유형만 남김",
              },
              {
                src: "/images/dive/feat_3.png",
                alt: "생활 취향 설정과 추천 결과 지도 화면",
                width: 1920,
                height: 1080,
                title: "취향 기반 추천",
                caption:
                  "생활 취향 문항 응답을 반영해 필수·교육·취향 인프라 기준으로 주택을 추천",
              },
              {
                src: "/images/dive/feat_2.png",
                alt: "지도에서 주변 생활 인프라를 확인하는 화면",
                width: 1920,
                height: 1080,
                title: "생활 인프라 확인",
                caption:
                  "주택별로 따로 검색하지 않고 지도에서 주변 상권·편의시설을 한눈에 확인",
              },
              {
                src: "/images/dive/feat_4.png",
                alt: "AI 챗봇과 대화하며 주택을 탐색하는 화면",
                width: 1920,
                height: 1080,
                title: "AI 주거 상담",
                caption:
                  "대화로 세부 조건을 좁히면 실제 주택 카드와 지도 마커로 연결",
              },
            ],
          },
        ],
      },
      {
        heading: "Recommendation",
        blocks: [
          {
            kind: "text",
            text: "주택 추천은 생성형 AI가 아닌 Rule Engine + Hard Filter + Weighted Scoring으로 처리합니다. 공공임대는 자격 요건이 명확한 도메인이라, 추천 결과를 규칙으로 설명할 수 있어야 한다고 판단했습니다.",
          },
          {
            kind: "diagram",
            stages: [
              {
                title: "User Input",
                items: [
                  "Eligibility",
                  "Budget",
                  "Preferred Area",
                  "Lifestyle Preference",
                ],
              },
              { title: "Eligibility Rule Engine", note: "신청 가능 유형 판별" },
              { title: "Hard Filter", items: ["Budget", "Area"] },
              {
                title: "Weighted Scoring",
                items: [
                  "Frequent Place Distance 30%",
                  "Living Infrastructure 25%",
                  "Childcare / School 20%",
                  "Preference Stores 15%",
                  "Quiet / Lively 10%",
                ],
              },
              { title: "Recommendation List" },
              { title: "Map Visualization" },
            ],
          },
          {
            kind: "text",
            text: "사용자가 응답하지 않은 항목은 가중치에서 제외하고 남은 항목을 100%로 재정규화합니다. 문항을 건너뛰어도 추천이 특정 축으로 치우치지 않게 하기 위한 처리입니다.",
          },
        ],
      },
      {
        heading: "AI Chat",
        blocks: [
          {
            kind: "text",
            text: "LLM은 추천 엔진이 아니라 대화형 탐색 UX에 사용했습니다. 응답에서 실제 주택 ID만 파싱해 서비스가 가진 주택 카드와 지도 마커에 연결하기 때문에, 존재하지 않는 주택이 답변에 등장하지 않습니다.",
          },
          {
            kind: "diagram",
            stages: [
              { title: "Browser" },
              { title: "Next.js /api/chat" },
              { title: "Solar Pro 2" },
              { title: "Housing ID" },
              { title: "Housing Card · Map Marker" },
            ],
          },
          {
            kind: "text",
            text: "Vector DB, Embedding Search, RAG, Web Search는 사용하지 않았습니다. 355개 주택의 핵심 정보를 압축해 context로 전달하는 방식입니다.",
          },
        ],
      },
      {
        heading: "Data",
        blocks: [
          {
            kind: "screens",
            layout: "wide",
            items: [
              {
                src: "/images/dive/data_util_1.png",
                alt: "주택 데이터 정합 과정을 정리한 자료",
                width: 1920,
                height: 1080,
                title: "주택 데이터",
                caption:
                  "팀이 정합한 마스터시트를 자격 필터링과 상세 페이지 DB로 사용",
              },
              {
                src: "/images/dive/data_util_2.png",
                alt: "상권 및 생활 인프라 데이터 구성을 정리한 자료",
                width: 1920,
                height: 1080,
                title: "인프라 데이터",
                caption: "상권·생활·교육 인프라 데이터를 추천 점수 산출에 활용",
              },
            ],
          },
          {
            kind: "cards",
            items: [
              {
                title: "Data Structure",
                text: "84,002행 원본에서 정합된 355 buildings · 9,022 units · 930 price conditions를 서비스 데이터로 사용",
              },
              {
                title: "Coordinate System",
                text: "lon/lat처럼 보이던 값이 실제로는 EPSG:5181 평면좌표임을 확인하고 변환 후 거리 계산에 사용",
              },
              {
                title: "Distance",
                text: "공원은 중심점이 아니라 경계까지의 거리를 기준으로 계산해 실제 접근성에 맞춤",
              },
            ],
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            kind: "metrics",
            items: [
              { value: "3위", label: "부산도시공사 발제사" },
              { value: "Solo", label: "서비스 개발 단독" },
              { value: "Vercel", label: "Production 배포" },
              { value: "Pilot", label: "시범 운영 제안" },
            ],
          },
          {
            kind: "text",
            text: "수상 이후 부산도시공사로부터 청약센터 게시 및 시민 설문 기반 시범 운영을 제안받았습니다.",
          },
        ],
      },
    ],
  },
  {
    slug: "pnusa",
    index: "04",
    name: "PNUSA",
    subtitle: "부산대 도서관 좌석 알리미",
    period: "2026.04 · 약 1개월 운영",
    role: "1인 개발 · Web · iOS",
    context: "개인 프로덕트 · 운영 종료",
    stack: ["React", "TypeScript", "SwiftUI", "Node.js", "Vercel"],
    cover: {
      src: "/images/pnusa/title.png",
      alt: "PNUSA 대표 이미지 — 부산대 도서관 좌석 알리미",
      width: 1672,
      height: 941,
      title: "PNUSA",
    },
    links: {
      caseStudy: "/portfolio/pnusa/",
    },
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "부산대학교 도서관 서비스가 리뉴얼된 뒤, 빈자리가 있는지 확인하려면 열람실을 하나씩 열어봤다 나오기를 반복해야 했습니다. PNUSA는 여러 열람실의 좌석 현황을 한 화면에 모아 보여주고, 빈 좌석이 생기면 좌석 위치와 함께 알려주는 개인 서비스입니다. Web으로 시작해 iOS 앱까지 확장했고, 운영 중 도서관 측 요청을 받아들여 약 한 달 만에 서비스를 종료했습니다.",
          },
        ],
      },
      {
        heading: "Product",
        blocks: [
          {
            kind: "screens",
            layout: "wide",
            items: [
              {
                src: "/images/pnusa/rooms.PNG",
                alt: "PNUSA 웹 화면 — 열람실별 빈자리 수와 좌석 배치도, 실시간 로그",
                width: 2474,
                height: 1518,
                title: "Web · 열람실 현황",
                caption:
                  "열람실별 빈자리 수 · 좌석 배치도 · 예약 가능한 좌석 번호를 한 화면에 모으고, 빈자리 발견 로그를 함께 표시",
              },
            ],
          },
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/pnusa/web_feat_1.jpeg",
                alt: "PNUSA 웹 자리 찾기 화면 — 감시 대상 열람실 선택",
                width: 1179,
                height: 2264,
                title: "Web · 자리 찾기",
                caption: "확인할 열람실을 직접 고르고 조회 간격을 설정",
              },
              {
                src: "/images/pnusa/web_reservation_dialog.jpeg",
                alt: "PNUSA 웹 좌석 예약 확인 다이얼로그 — 052 좌석을 예약할까요",
                width: 1179,
                height: 1581,
                title: "Web · 예약 확인",
                caption: "좌석 번호와 상세 배치도를 보여주고 예약 여부는 사용자가 결정",
              },
              {
                src: "/images/pnusa/ios_home.png",
                alt: "PNUSA iOS 좌석 찾기 화면 — 열람실 선택 토글과 지금 자리 확인",
                width: 1260,
                height: 2736,
                title: "iOS · 좌석 찾기",
                caption: "열람실별 토글 · 지금 자리 확인 · 자동 자리 찾기",
              },
              {
                src: "/images/pnusa/ios_dialog.jpeg",
                alt: "PNUSA iOS 빈 좌석 발견 알림과 좌석 배치도 다이얼로그",
                width: 1179,
                height: 2033,
                title: "iOS · 빈 좌석 알림",
                caption: "빈 좌석이 감지되면 열람실 · 좌석 번호와 배치도를 함께 안내",
              },
            ],
          },
        ],
      },
      {
        heading: "Problem",
        blocks: [
          {
            kind: "text",
            text: "시험기간에는 열람실 페이지를 하나씩 들어갔다 나오기를 반복하며 자리가 나기를 기다리는 사용자가 많았습니다. 직접 같은 방식으로 자리를 찾다가, 좌석 현황이 열람실 단위로 흩어져 있어 한 번에 비교할 수 없다는 점이 문제라고 봤습니다.",
          },
        ],
      },
      {
        heading: "Solution",
        blocks: [
          {
            kind: "flow",
            steps: [
              "열람실 현황 확인",
              "빈 좌석 감지",
              "열람실 · 좌석 안내",
              "사용자 확인",
              "직접 예약",
            ],
          },
          {
            kind: "text",
            text: "좌석을 대신 잡아주는 매크로가 아니라, 빈자리를 먼저 찾아 알려주고 예약은 사용자가 확인한 뒤 직접 진행하는 흐름으로 설계했습니다.",
          },
        ],
      },
      {
        heading: "Engineering · Vacancy Detection",
        blocks: [
          {
            kind: "diagram",
            stages: [
              { title: "User" },
              { title: "PNUSA Web / iOS" },
              { title: "Polling", note: "5~30초 간격" },
              { title: "Proxy" },
              { title: "PNU Library API" },
              { title: "Vacancy Detection" },
              { title: "Seat Alert" },
              { title: "User Confirmation" },
            ],
          },
          {
            kind: "list",
            items: [
              "조회 간격을 5~30초 범위에서 설정하도록 두어, 필요 이상으로 잦은 요청이 발생하지 않게 구성",
              "감시 대상 열람실을 사용자가 직접 선택하게 해, 사용자가 늘어도 요청 수가 무제한으로 늘지 않도록 요청 빈도와 대상 범위를 함께 제어",
              "빈자리가 감지되면 열람실 · 좌석 번호와 배치도를 함께 안내",
            ],
          },
        ],
      },
      {
        heading: "Engineering · Authentication",
        blocks: [
          {
            kind: "cards",
            items: [
              {
                title: "Web",
                text: "도서관에 로그인한 뒤 발급된 인증 토큰을 사용자가 직접 입력하고, 로컬 프록시가 이를 그대로 중계",
              },
              {
                title: "iOS",
                text: "토큰을 보관하는 별도 서버를 두지 않고, 인증 토큰을 사용자 기기에만 저장",
              },
            ],
          },
          {
            kind: "text",
            text: "계정 ID · 비밀번호를 서비스 서버가 직접 수집하거나 보관하지 않는 방향으로 인증 구조를 설계했습니다.",
          },
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/pnusa/ios_login.png",
                alt: "PNUSA iOS 로그인 화면 — 부산대학교 도서관 공식 페이지",
                width: 1260,
                height: 2736,
                title: "iOS · 로그인",
                caption: "앱이 자체 로그인 폼을 두지 않고 부산대 공식 페이지에서 직접 로그인",
              },
            ],
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            kind: "metrics",
            items: [
              { value: "6,700+", label: "Views" },
              { value: "3,400+", label: "Visitors" },
              { value: "146위", label: "App Store 교육 카테고리" },
              { value: "Web → iOS", label: "서비스 확장" },
            ],
          },
          {
            kind: "text",
            text: "개인 SNS에 공유한 뒤 짧은 기간에 사용자가 늘었고, Web 서비스에서 iOS 앱까지 확장했습니다. 운영 중 부산대학교 도서관으로부터 공식 앱 서비스 활용에 대한 협조 요청과 함께 서비스 중지 요청을 받아, 이를 받아들여 운영을 종료했습니다.",
          },
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/pnusa/ranked_1.png",
                alt: "PNUSA App Store 페이지 — Education 차트 No.147",
                width: 1179,
                height: 2556,
                title: "App Store",
                caption: "Education 차트 진입 · 캡처 시점 No.147",
              },
              {
                src: "/images/pnusa/ranked_2.png",
                alt: "App Store Top Downloaded Education 목록의 PNUSA 147위",
                width: 1179,
                height: 2556,
                title: "Top Downloaded",
                caption: "Education 무료 앱 다운로드 순위",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "kagong",
    index: "05",
    name: "카공어디?",
    subtitle: "가격 먼저 보는 카공 지도",
    role: "1인 개발 · iOS",
    context: "개인 프로덕트 · 운영 중",
    stack: ["Swift", "SwiftUI", "Firestore", "Node.js"],
    cover: {
      src: "/images/kagong/title.png",
      alt: "카공어디? 대표 이미지 — 가격 먼저 보는 카공 지도",
      width: 1672,
      height: 941,
      title: "카공어디?",
    },
    links: {
      caseStudy: "/portfolio/kagong/",
      appStore:
        "https://apps.apple.com/us/app/%EC%B9%B4%EA%B3%B5%EC%96%B4%EB%94%94/id6763051416",
    },
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "지도 앱은 카페 위치는 알려주지만, 공부하기 좋은 곳인지 가격은 얼마인지는 직접 가보기 전까지 알기 어려웠습니다. 카공어디?는 카페를 검색하는 서비스가 아니라 어디로 갈지 결정하는 것을 돕는 iOS 서비스입니다. 지도 마커에서 대표 음료 최저가를 바로 비교할 수 있게 하고, 콘센트 · 소음 같은 카공 편의 요소를 함께 정리했습니다.",
          },
        ],
      },
      {
        heading: "Product",
        blocks: [
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/kagong/map.PNG",
                alt: "카공어디? 지도 화면 — 가격이 표시된 카페 마커와 지역별 클러스터",
                width: 1179,
                height: 2556,
                title: "Map",
                caption: "지도 마커에 대표 음료 최저가를 그대로 노출 · 지역 단위 클러스터",
              },
              {
                src: "/images/kagong/zoomed_in_map.PNG",
                alt: "카공어디? 확대한 지도 화면 — 카페별 가격 마커 비교",
                width: 1179,
                height: 2556,
                title: "Map · Zoom",
                caption: "지역을 좁히면 카페별 가격이 나란히 보여 이동 전에 비교 가능",
              },
              {
                src: "/images/kagong/detail.PNG",
                alt: "카공어디? 카페 상세 화면 — 대표 음료 가격, 리뷰, 카공 편의 요소",
                width: 1179,
                height: 2556,
                title: "Detail",
                caption:
                  "대표 음료 최저가 · 리뷰 · 조용함 · 콘센트 · 와이파이 · 오래앉기, 길찾기는 네이버지도 · 카카오맵으로 연결",
              },
            ],
          },
        ],
      },
      {
        heading: "Problem",
        blocks: [
          {
            kind: "text",
            text: "카페를 고를 때 실제로 필요한 정보는 위치가 아니라 그 카페가 공부할 만한 곳인지, 가격이 얼마인지였습니다. 이 정보는 지도 · 블로그 · 리뷰에 흩어져 있어서, 결정을 내리기 전에 여러 서비스를 오가야 했습니다.",
          },
          {
            kind: "list",
            items: [
              "대표 음료 가격",
              "콘센트 유무",
              "소음 정도",
              "영업시간",
              "실제 사용자 리뷰",
            ],
          },
        ],
      },
      {
        heading: "Solution",
        blocks: [
          {
            kind: "flow",
            steps: [
              "지도에서 가격 비교",
              "상세 정보 확인",
              "카페 선택",
              "네이버지도 · 카카오맵",
            ],
          },
          {
            kind: "text",
            text: "길찾기는 직접 구현하지 않고, 카페를 고른 뒤 장소명을 네이버지도 · 카카오맵으로 넘기는 구조로 두었습니다. 이미 잘 만들어진 기능을 다시 만들기보다 카페를 결정하는 구간에 집중했습니다.",
          },
        ],
      },
      {
        heading: "Data",
        blocks: [
          {
            kind: "text",
            text: "카페 데이터베이스는 외부 상용 지도 데이터를 복제하지 않고 직접 구축했습니다. 설문조사와 지인의 도움, 직접 조사한 내용을 모아 공부하기 좋은 카페 정보를 정리했고, 앱 안에서 사용자가 정보 수정을 제안할 수 있게 했습니다.",
          },
        ],
      },
      {
        heading: "Engineering · Firestore Read",
        blocks: [
          {
            kind: "diagram",
            caption: "Before",
            stages: [
              { title: "Map Move / Zoom" },
              { title: "Firestore Query" },
              { title: "Repeated Reads" },
              { title: "Free Plan Read Limit Exceeded" },
            ],
          },
          {
            kind: "diagram",
            caption: "After",
            stages: [
              { title: "App Launch / Data Refresh" },
              { title: "Fetch Cafe Dataset" },
              { title: "Local Map Rendering" },
              { title: "Pan / Zoom", note: "카메라가 움직여도 다시 조회하지 않음" },
            ],
          },
          {
            kind: "text",
            text: "초기 구조는 지도를 움직이거나 확대할 때마다 Firestore를 조회했습니다. 실제 운영 중 무료 플랜의 읽기 한도를 넘겨 서비스가 멈췄고, 유료 플랜으로 전환하는 동시에 Query 구조를 함께 고쳤습니다. 마커 데이터를 한 번 받아 지도에서 재사용하고, 앱에 다시 들어왔을 때 데이터가 바뀐 경우에만 새로 조회합니다.",
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            kind: "metrics",
            items: [
              { value: "113위", label: "App Store 음식 및 음료" },
              { value: "7위", label: "iPad 음식 및 음료" },
              { value: "Solo", label: "개발 · 데이터 직접 구축" },
            ],
          },
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/kagong/ranked_1.jpeg",
                alt: "카공어디? App Store 페이지 — Food & Drink 차트 No.113, 평점 5.0",
                width: 1179,
                height: 2480,
                title: "App Store",
                caption: "Food & Drink 차트 No.113 · 평점 5.0",
              },
            ],
          },
          {
            kind: "screens",
            layout: "wide",
            items: [
              {
                src: "/images/kagong/ipad_ranked.png",
                alt: "카공어디? iPad App Store 페이지 — 음식 및 음료 차트 7위",
                width: 1898,
                height: 822,
                title: "iPad App Store",
                caption: "음식 및 음료 차트 7위",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "festival",
    index: "06",
    name: "축제어디?",
    subtitle: "전국 축제를 지도에서 한눈에",
    period: "2026 · 공모전 심사 중",
    role: "1인 개발 · iOS · watchOS",
    context: "개인 프로덕트 · 출시",
    stack: ["Swift", "SwiftUI", "watchOS", "TourAPI"],
    cover: {
      src: "/images/festival/title.png",
      alt: "축제어디? 대표 이미지 — 전국 축제를 지도에서 한눈에",
      width: 1672,
      height: 941,
      title: "축제어디?",
    },
    links: {
      caseStudy: "/portfolio/festival/",
      appStore:
        "https://apps.apple.com/us/app/%EC%B6%95%EC%A0%9C%EC%96%B4%EB%94%94/id6762603640",
    },
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "축제어디?는 전국 축제를 지도에서 발견하고, 지금 갈 수 있는 축제를 빠르게 확인할 수 있게 만든 iOS 서비스입니다. 축제 이름을 미리 알고 검색하는 대신 지도에서 축제를 발견하는 흐름을 중심에 두었고, 2026 관광데이터 활용 공모전을 준비하며 iPhone과 Apple Watch 앱을 함께 만들었습니다.",
          },
        ],
      },
      {
        heading: "Product",
        blocks: [
          {
            kind: "screens",
            layout: "phone",
            items: [
              {
                src: "/images/festival/map.png",
                alt: "축제어디? 지도 화면 — 가로로 긴 축제 포스터 마커와 오늘 필터",
                width: 941,
                height: 2048,
                title: "Map",
                caption: "축제 포스터를 그대로 담은 가로형 마커 · 오늘 46개처럼 조건별 개수 표시",
              },
              {
                src: "/images/festival/bottom_sheet.png",
                alt: "축제어디? 축제 선택 후 하단 시트 — 포스터, 거리, 기간, 장소",
                width: 941,
                height: 2048,
                title: "Bottom Sheet",
                caption: "마커를 고르면 포스터 · 내 위치에서의 거리 · 기간 · 장소를 먼저 요약",
              },
              {
                src: "/images/festival/detail.png",
                alt: "축제어디? 축제 상세 화면 — 지금 볼 이유와 날짜, 행사장, 행사 시간",
                width: 941,
                height: 2048,
                title: "Detail",
                caption: "현재 위치에서의 직선거리를 지금 볼 이유로 먼저 보여주고 일정 · 장소 · 시간 정리",
              },
            ],
          },
        ],
      },
      {
        heading: "Problem",
        blocks: [
          {
            kind: "text",
            text: "축제 정보는 기관별로 흩어져 있고, 대부분의 서비스는 축제 이름을 이미 알고 있어야 검색할 수 있습니다. 가고 싶은 마음이 먼저인 사용자는 무엇이 열리는지부터 찾아야 하는데, 그 시작점이 마땅치 않았습니다.",
          },
        ],
      },
      {
        heading: "Discovery",
        blocks: [
          {
            kind: "flow",
            steps: ["Map", "Festival Discovery", "Bottom Sheet", "Detail"],
          },
          {
            kind: "list",
            items: [
              "둘러보기 — 지도에 올라온 축제를 그대로 탐색",
              "오늘 · 이번 주말 — 지금 갈 수 있는 축제부터 노출",
              "종료 임박 — 곧 끝나는 축제를 따로 확인",
              "내 주변 — 현재 위치를 기준으로 가까운 축제 탐색",
            ],
          },
        ],
      },
      {
        heading: "Festival Marker",
        blocks: [
          {
            kind: "text",
            text: "지도 UI에서 가장 크게 바꾼 부분은 마커입니다. 일반적인 원형 핀 대신 가로로 긴 마커를 써서 축제 포스터를 그대로 노출했고, 사용자가 지도를 훑는 것만으로 어떤 축제인지 읽을 수 있게 했습니다.",
          },
        ],
      },
      {
        heading: "Engineering · Data Pipeline",
        blocks: [
          {
            kind: "diagram",
            stages: [
              { title: "TourAPI", note: "한국관광공사 공공데이터" },
              { title: "Festival Fetch" },
              { title: "Pagination" },
              { title: "Content ID Deduplication" },
              { title: "Festival Snapshot" },
              { title: "Discovery Context" },
              { title: "Search / Map" },
            ],
          },
          {
            kind: "list",
            items: [
              "pagination을 따라가며 축제 목록 전체를 불러온 뒤 하나의 Snapshot으로 정리",
              "content ID 기준으로 중복 축제를 제거",
              "오늘 · 이번 주말 · 종료 임박 · 내 주변 결과를 모두 같은 Snapshot에서 파생",
            ],
          },
        ],
      },
      {
        heading: "Engineering · Map State",
        blocks: [
          {
            kind: "diagram",
            stages: [
              { title: "Festival Source" },
              { title: "Discovery Context" },
              { title: "Search" },
              { title: "Displayed Festivals" },
              { title: "Map Marker / Bottom Sheet / Detail" },
            ],
          },
          {
            kind: "text",
            text: "필터 결과, 검색 결과, 지도에 찍히는 축제가 서로 다른 상태를 보면 화면마다 다른 목록이 나옵니다. 표시할 축제를 하나의 흐름으로 계산하고, 지도 마커와 하단 시트, 상세 화면이 모두 같은 결과를 사용하도록 했습니다.",
          },
        ],
      },
      {
        heading: "Apple Watch",
        blocks: [
          {
            kind: "flow",
            steps: ["iPhone", "Selected Festival", "Watch Sync", "Festival Location on Watch"],
          },
          {
            kind: "text",
            text: "iPhone에서 고른 축제를 Apple Watch로 넘겨, 손목에서 축제 위치를 이어서 확인할 수 있습니다.",
          },
        ],
      },
      {
        heading: "Results",
        blocks: [
          {
            kind: "metrics",
            items: [
              { value: "iPhone + Watch", label: "앱 출시" },
              { value: "심사 중", label: "2026 관광데이터 활용 공모전" },
              { value: "TourAPI", label: "공공데이터 기반" },
            ],
          },
        ],
      },
    ],
  },
];

/**
 * 메인 Portfolio Overview 카드용 요약.
 * 별도 필드로 중복 관리하지 않고 상세 본문의 Overview / Results를 그대로 재사용한다.
 */
export function caseStudySummary(study: CaseStudy) {
  const overview = study.sections
    .find((section) => section.heading === "Overview")
    ?.blocks.find((block) => block.kind === "text");
  const results = study.sections
    .find((section) => section.heading === "Results")
    ?.blocks.find((block) => block.kind === "metrics");

  return {
    overview: overview?.kind === "text" ? overview.text : "",
    results: results?.kind === "metrics" ? results.items.slice(0, 3) : [],
  };
}

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
