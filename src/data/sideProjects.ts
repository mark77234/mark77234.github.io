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
];
