export type SideProject = {
  name: string;
  subtitle: string;
  period?: string;
  role: string;
  stack: string[];
  description: string;
  highlights: string[];
  results?: string[];
};

export const sideProjects: SideProject[] = [
  {
    name: "DIVE 2026",
    subtitle: "부산 공공임대주택 맞춤 추천 서비스",
    period: "2026.07.25 – 2026.07.26",
    role: "서비스 개발 단독 담당 (데이터 분석 3 · 개발 1)",
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
    description:
      "부산도시공사 발제로 진행한 무박 2일 해커톤에서, 공공임대주택 공공데이터를 사용자 조건에 맞춰 추천하는 서비스를 단독으로 개발했습니다.",
    highlights: [
      "공공임대 원본 84,002행을 서비스 단위로 정규화 — 355개 건물, 9,022개 물리 호실, 930개 가격 조건. 상가·생활업종 161,449건 등 생활 인프라 데이터를 함께 결합",
      "추천은 생성형 AI가 임의로 고르는 구조가 아니라 결정론적 알고리즘 — 자격 Rule Engine → 예산·지역 Hard Filter → 생활 인프라 weighted scoring → 순위 산출. 응답하지 않은 항목은 가중치에서 제외하고 나머지를 정규화",
      "일부 데이터의 좌표 컬럼이 WGS84가 아닌 EPSG:5181 평면좌표여서 그대로 쓰면 거리 계산이 어긋나는 문제를 확인하고, 좌표계를 변환한 뒤 거리 기준으로 사용. 공원은 중심점이 아니라 경계까지의 거리로 계산",
      "LLM은 추천 엔진이 아니라 별도 chat UX로 사용 — 355개 주택의 핵심 정보를 압축해 context로 전달하고, 응답에서 주택 ID만 파싱해 카드·지도 마커와 연결 (Vector DB·RAG·embedding 미사용)",
    ],
    results: [
      "부산도시공사 발제사 3위",
      "수상 후 청약센터 게시 및 시민 설문 기반 시범운영 제안",
    ],
  },
  {
    name: "PNUSA",
    subtitle: "부산대학교 도서관 빈자리 확인 서비스",
    role: "1인 개발",
    stack: ["React", "TypeScript", "SwiftUI", "Node.js", "Vercel"],
    description:
      "도서관 좌석 현황을 확인하려면 매번 기존 시스템을 거쳐야 했던 불편을, 웹과 iOS 앱에서 바로 확인할 수 있게 만든 서비스입니다.",
    highlights: ["웹과 iOS 앱, 데이터 수집 서버까지 혼자 구현하고 배포·운영"],
    results: ["6,700+ 조회 · 3,400+ 방문", "App Store 교육 카테고리 146위"],
  },
  {
    name: "카공어디?",
    subtitle: "카페 공부 장소 탐색 서비스",
    role: "1인 개발",
    stack: ["SwiftUI", "Firestore", "Node.js"],
    description: "공부하기 좋은 카페를 조건에 맞춰 찾아보는 iOS 서비스입니다.",
    highlights: [
      "운영 중 Firestore read 한도에 도달하는 문제를 겪고, 화면 단위로 문서를 반복 조회하던 query 구조를 정리해 읽기 요청량을 줄이고 운영 구조를 개선",
    ],
    results: ["App Store 음식 카테고리 113위"],
  },
  {
    name: "태성환경연구소",
    subtitle: "악취 분석 모바일 MVP",
    period: "2024.12 – 2025.02",
    role: "Flutter Developer · 현장실습",
    stack: ["Flutter", "Dart", "BLE", "Serial", "REST API"],
    description:
      "측정 장비에서 올라오는 악취 센서 데이터를 모바일에서 확인하는 MVP를 개발했습니다.",
    highlights: [
      "BLE·Serial로 센서와 연결해 측정값을 수신·처리하고 서버 API와 연동",
      "실제 하드웨어와 앱 사이의 통신 문제를 재현·분석해 해결",
    ],
  },
];
