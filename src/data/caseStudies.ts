export type Block =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "flow"; steps: string[] }
  | { kind: "stack"; groups: { label: string; items: string[] }[] }
  | { kind: "metrics"; items: { value: string; label: string }[] };

export type CaseSection = {
  heading: string;
  blocks: Block[];
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
  /** public/images/<slug>/ 아래 파일을 추가하면 자동으로 렌더링된다. */
  images?: { src: string; alt: string }[];
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
      "OpenAI API",
      "Firestore",
      "Cloud Run",
      "Docker",
      "GitHub Actions",
      "StoreKit 2",
      "RevenueCat",
    ],
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "AI가 OPIc 문제를 생성하고, 사용자의 답변을 분석해 예상 등급과 개선점을 돌려주는 iOS 학습 서비스입니다. 2025년 11월에 기획해 12월에 첫 버전을 출시했고, iOS 앱부터 Backend·Infra·배포·운영까지 전 구간을 직접 구축해 현재도 운영하고 있습니다.",
          },
        ],
      },
      {
        heading: "Problem",
        blocks: [
          {
            kind: "text",
            text: "직접 OPIc을 준비하면서, 혼자 공부하는 과정이 여러 도구로 분절되어 있다는 점이 가장 큰 불편이었습니다.",
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
            text: "매 문항마다 앱을 오가며 복사·붙여넣기를 반복해야 했고, 기록이 남지 않아 학습 흐름이 이어지지 않았습니다. 이 과정을 하나의 학습 Flow로 통합하는 것이 서비스의 출발점이었습니다.",
          },
        ],
      },
      {
        heading: "Architecture",
        blocks: [
          {
            kind: "stack",
            groups: [
              {
                label: "Client",
                items: [
                  "Swift",
                  "SwiftUI",
                  "Apple Speech STT",
                  "TTS",
                  "StoreKit 2",
                  "RevenueCat",
                  "Firebase",
                  "App Check",
                ],
              },
              {
                label: "Backend",
                items: ["Python", "OpenAI API", "Firebase Admin", "Firestore"],
              },
              {
                label: "Infrastructure",
                items: ["Google Cloud Run", "Docker", "Artifact Registry", "GitHub Actions"],
              },
            ],
          },
          {
            kind: "text",
            text: "AI 호출과 채점 규칙을 클라이언트가 아닌 서버에 두어, 앱 심사·배포 주기와 무관하게 평가 로직을 교정할 수 있도록 했습니다.",
          },
        ],
      },
      {
        heading: "AI Evaluation",
        blocks: [
          {
            kind: "text",
            text: "답변은 과제수행 · 문법 · 어휘 · 담화 구성 · 유창성 5개 영역으로 평가합니다. 각 영역은 Foundation / Developing / Functional / Strong / Advanced band 중 하나로 판정합니다.",
          },
          {
            kind: "text",
            text: "AI가 임의의 연속 점수를 만들어내면 같은 수준의 답변에도 매번 다른 숫자가 나옵니다. 그래서 AI에게는 band 판정만 맡기고, 예상 등급은 서버가 규칙으로 다시 계산·검증하도록 분리했습니다.",
          },
          {
            kind: "list",
            items: [
              "5개 영역이 모두 Foundation이면 최대 IL",
              "어느 영역도 Strong이 아니면 최대 IM3",
              "과제수행 또는 담화 구성이 Functional 미만이면 최대 IM3",
              "AL은 모든 영역이 Strong 이상이면서 최소 하나가 Advanced인 경우에만",
            ],
          },
          {
            kind: "text",
            text: "AI가 제시한 예상 등급과 세부 rubric 결과가 충돌하면 서버가 등급을 낮춥니다. 결과적으로 사용자에게 나가는 등급은 항상 근거가 되는 band 조합으로 설명할 수 있습니다.",
          },
        ],
      },
      {
        heading: "Reliability",
        blocks: [
          {
            kind: "text",
            text: "초기에는 시험 구성과 문제 내용을 모두 AI가 생성했습니다. 이 경우 문항 수나 유형이 흔들리면 시험 자체가 성립하지 않아, 서버가 시험 구조를 고정하고 AI는 질문 내용만 생성하도록 역할을 나눴습니다.",
          },
          {
            kind: "list",
            items: [
              "JSON Schema validation으로 응답 형식을 검증하고, 형식이 어긋난 결과는 재요청",
              "문제 생성이 실패하면 전체 세트를 버리지 않고 실패한 문항만 최대 3회 재생성",
              "AI 장애 시에는 미리 검증해 둔 문제 catalog로 fallback",
              "retry · fallback · 등급 보정 이력을 로깅해 이후 원인을 추적",
            ],
          },
          {
            kind: "text",
            text: "공식 라벨을 기준으로 한 정확도 실험은 하지 않았기 때문에 채점 정확도가 올랐다고는 말할 수 없습니다. 이 작업으로 개선한 것은 평가 결과의 일관성, 검증 가능성, 그리고 장애 상황에서의 복구 가능성입니다.",
          },
        ],
      },
      {
        heading: "Cost Optimization",
        blocks: [
          {
            kind: "list",
            items: [
              "작업 성격에 맞춰 lightweight model을 사용",
              "15개 문제를 개별 호출하지 않고 batch로 한 번에 생성",
              "모의고사 15개 답변 분석도 가능한 범위에서 묶어서 처리",
            ],
          },
        ],
      },
      {
        heading: "Production Engineering",
        blocks: [
          {
            kind: "list",
            items: [
              "Firebase App Check / App Attest로 비정상 클라이언트의 API 호출 차단",
              "RevenueCat webhook으로 구독 상태를 서버에서 확인",
              "AdMob SSV로 리워드 지급을 서버에서 검증",
              "Docker 이미지를 Artifact Registry에 올리고 Cloud Run으로 배포, GitHub Actions로 CI/CD 구성",
            ],
          },
        ],
      },
      {
        heading: "Real User Issue",
        blocks: [
          {
            kind: "text",
            text: "실사용자 피드백에서 나온 두 가지 문제를 수정했습니다.",
          },
          {
            kind: "list",
            items: [
              "말하다 잠깐 멈추면 녹음이 자동 종료되는 문제 — silence auto-stop을 제거하고, 직접 종료하거나 180초 제한에 도달할 때만 끝나도록 변경",
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
    subtitle: "음악과 일기를 함께 공유하는 SNS 서비스",
    period: "2026.01 – Present",
    role: "iOS 단독 개발",
    context: "팀 프로젝트 · 운영 중",
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
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "그날의 감정을 곡과 함께 기록하고 공유하는 SNS형 서비스입니다. 기획 1명, 디자인 1명, Backend 2명, Android 2명, iOS 1명으로 구성된 팀에서 iOS를 단독으로 맡아 앱 기초 설계부터 TestFlight, App Store 출시와 운영까지 담당했습니다.",
          },
          {
            kind: "text",
            text: "SwiftUI와 MVVM으로 화면·상태를 구성하고, iTunes·Spotify API로 곡을 검색하며 YouTube로 재생하는 구조입니다. 출시 후 라이프스타일 카테고리 141위를 기록했습니다.",
          },
        ],
      },
      {
        heading: "Universal Links · Diary Share",
        blocks: [
          {
            kind: "text",
            text: "작성한 다이어리를 앱 밖으로 공유하는 기능을 직접 제안하고 iOS 측 구현을 맡았습니다. 공유 링크는 앱 설치 여부에 따라 목적지가 달라져야 합니다.",
          },
          {
            kind: "flow",
            steps: [
              "Diary Share",
              "killingpart.com/{diaryId}",
              "앱 설치 여부 확인",
              "설치됨 → 해당 Diary / 미설치 → App Store · Play Store",
            ],
          },
          {
            kind: "text",
            text: "문제는 링크가 대부분 메신저 안에서 열린다는 점이었습니다. 카카오톡·Instagram 인앱 브라우저에서는 자동 redirect가 제한되는 경우가 있어, 사용자가 아무 화면에서도 멈추지 않도록 스토어로 이동하는 명시적인 버튼을 포함한 fallback UX를 함께 설계했습니다.",
          },
        ],
      },
      {
        heading: "Apple Sign In",
        blocks: [
          {
            kind: "text",
            text: "Kakao·Google과 동일한 가정으로 Apple 로그인을 다룰 수 없었습니다. Apple은 이름과 이메일을 최초 인증 시점에만 전달하고, Hide My Email을 사용하면 실제 주소 대신 relay email이 내려옵니다.",
          },
          {
            kind: "text",
            text: "재로그인 시 사용자 정보를 다시 받을 수 있다는 전제를 걷어내고, 최초 인증에서 받은 정보를 저장하는 시점과 프로필을 구성하는 흐름을 다시 설계했습니다.",
          },
        ],
      },
      {
        heading: "App Store Review",
        blocks: [
          {
            kind: "text",
            text: "YouTube 콘텐츠 사용과 관련해 App Store 심사에서 리젝을 받았습니다. 기능을 빼는 대신 정책 문서를 다시 확인하고, 직접 만든 custom video control을 제거해 YouTube native player의 재생 방식을 그대로 유지하는 구조로 재설계한 뒤 재심사를 통과했습니다.",
          },
        ],
      },
      {
        heading: "Collaboration",
        blocks: [
          {
            kind: "flow",
            steps: [
              "feature issue",
              "feature branch",
              "PR · squash merge (dev)",
              "TestFlight QA",
              "main",
              "App Store",
            ],
          },
          {
            kind: "text",
            text: "main/dev 브랜치 전략을 기준으로 이슈 단위로 작업하고, 기획·디자인·Backend·Android와 주 단위로 일정과 스펙을 맞추며 진행했습니다.",
          },
        ],
      },
    ],
  },
  {
    slug: "trit",
    index: "03",
    name: "TRIT",
    subtitle: "React Native · Expo 기반 iOS / Android 여행 서비스",
    period: "2025.06 – 2026.02",
    role: "Mobile Developer",
    context: "(주)오늘의이야기",
    stack: ["React Native", "Expo", "TypeScript", "Google Maps", "TMAP", "GitHub Actions"],
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            kind: "text",
            text: "이미 운영 중이던 웹 서비스의 모바일 앱을 담당했습니다. 합류 시점의 모바일 코드베이스에는 routing, session, 폴더 구조 같은 기본 환경만 잡혀 있었고, 실제 서비스 기능은 이후 모바일 환경에 맞게 구현해 나갔습니다.",
          },
        ],
      },
      {
        heading: "Implementation",
        blocks: [
          {
            kind: "list",
            items: [
              "사용자 역할에 따라 다르게 동작하는 마이페이지 분기 구현",
              "Google Maps에 250+ 장소를 표시하고 marker interaction, clustering, zoom level별 표시 정책 처리",
              "TMAP 기반 도보 · 대중교통 · 자동차 길찾기 연동",
            ],
          },
          {
            kind: "text",
            text: "지도는 장소 수가 늘어날수록 마커가 겹쳐 판단이 어려워지는 화면이라, zoom level에 따라 무엇을 묶고 무엇을 개별로 보여줄지를 기준으로 clustering 동작을 맞췄습니다.",
          },
        ],
      },
      {
        heading: "Release",
        blocks: [
          {
            kind: "text",
            text: "App Store와 Google Play 출시를 진행했고, 심사 과정에서 발생한 반려 이슈는 기획·개발 Lead와 함께 원인을 정리해 대응했습니다.",
          },
        ],
      },
      {
        heading: "CI/CD",
        blocks: [
          {
            kind: "text",
            text: "출시 이후 주간 단위로 기획 변경과 피드백이 반영되면서, 웹과 달리 모바일은 build → store/test → 배포 과정 때문에 변경사항 검증이 늦어진다는 점이 병목으로 드러났습니다.",
          },
          {
            kind: "flow",
            steps: ["GitHub Actions", "Expo build", "Android 내부 테스트", "TestFlight"],
          },
          {
            kind: "text",
            text: "GitHub Actions 기반으로 iOS·Android 빌드와 배포를 자동화해, 반복적으로 수행하던 배포 절차를 단순화하고 테스트 빌드 전달까지의 시간을 줄였습니다.",
          },
        ],
      },
    ],
  },
];
