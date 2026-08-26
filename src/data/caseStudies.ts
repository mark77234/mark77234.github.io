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
  period: string;
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
