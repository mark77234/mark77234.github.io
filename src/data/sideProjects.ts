import type { ProjectLinks, Screenshot } from "@/data/caseStudies";

/**
 * 메인 Case Study보다 짧게 소개하는 프로젝트.
 * 필드 구성을 CaseStudy와 맞춰 두어, 상세 페이지가 필요해지면 caseStudies로 옮기기만 하면 된다.
 */
export type SideProject = {
  name: string;
  subtitle: string;
  period?: string;
  role: string;
  stack: string[];
  cover: Screenshot;
  /** 공개된 링크가 있는 프로젝트만 채운다. */
  links?: ProjectLinks;
  description: string;
  highlights: string[];
  results?: string[];
};

export const sideProjects: SideProject[] = [
  {
    name: "PNUSA",
    subtitle: "부산대 도서관 좌석 알리미",
    period: "2026.04 · 약 1개월 운영",
    role: "1인 개발 · Web · iOS · 수집 서버",
    stack: ["React", "TypeScript", "SwiftUI", "Node.js", "Vercel"],
    cover: {
      src: "/images/pnusa/title.png",
      alt: "PNUSA 대표 이미지 — 부산대 도서관 좌석 알리미",
      width: 1672,
      height: 941,
      title: "PNUSA",
    },
    description:
      "도서관 서비스가 리뉴얼된 뒤, 빈자리가 있는지 확인하려면 열람실을 하나씩 열어봤다 나오기를 반복해야 했습니다. 여러 열람실 현황을 한 화면에서 보고 빈자리가 생기면 바로 알려주는 서비스로 만들었고, 도서관 측 요청에 따라 운영을 종료했습니다.",
    highlights: [
      "5~30초 간격 폴링으로 열람실 현황을 갱신하고, 빈자리가 생기면 열람실·좌석 위치와 함께 다이얼로그로 안내",
      "자동 예약 매크로 대신 사용자가 확인한 뒤 직접 예약하는 흐름으로 설계",
      "웹은 사용자가 직접 넣은 pyxis-auth-token을 로컬 프록시로 중계해, 서버가 계정·비밀번호를 수집하지 않도록 구성",
      "iOS 앱은 서버리스 구조로 두어 인증 토큰을 사용자 기기에만 저장",
    ],
    results: ["6,700+ 조회 · 3,400+ 방문", "App Store 교육 카테고리 146위"],
  },
  {
    name: "카공어디?",
    subtitle: "가격 먼저 보는 카공 지도",
    role: "1인 개발",
    stack: ["SwiftUI", "Firestore", "Node.js"],
    cover: {
      src: "/images/kagong/title.png",
      alt: "카공어디? 대표 이미지 — 가격 먼저 보는 카공 지도",
      width: 1672,
      height: 941,
      title: "카공어디?",
    },
    links: {
      appStore:
        "https://apps.apple.com/us/app/%EC%B9%B4%EA%B3%B5%EC%96%B4%EB%94%94/id6763051416",
    },
    description:
      "지도 앱은 카페 위치는 알려주지만 공부하기 좋은지, 가격은 얼마인지는 직접 가보기 전까지 알기 어려웠습니다. 카페를 찾는 서비스가 아니라 어디로 갈지 결정하는 것을 돕는 iOS 서비스로 만들었습니다.",
    highlights: [
      "설문과 직접 조사로 데이터를 모아 콘센트 유무·소음 정도·영업시간·실사용 리뷰를 함께 제공",
      "지도 마커에 대표 음료 최저가를 바로 노출해, 이동하기 전에 가격을 비교할 수 있게 구성",
      "길찾기는 직접 만들지 않고 네이버지도·카카오지도로 연결",
      "Firestore 무료 플랜 읽기 한도를 넘겨 서비스가 멈춘 뒤, 지도를 움직일 때마다 조회하던 구조를 마커 데이터 1회 조회 + 변경이 있을 때만 재조회로 개선",
    ],
    results: ["App Store 음식 카테고리 113위", "iPad 음식 부문 7위"],
  },
  {
    name: "축제어디?",
    subtitle: "전국 축제를 지도에서 한눈에",
    period: "2026 · 공모전 심사 중",
    role: "1인 개발 · iOS · watchOS",
    stack: ["SwiftUI", "watchOS", "관광 공공데이터"],
    cover: {
      src: "/images/festival/title.png",
      alt: "축제어디? 대표 이미지 — 전국 축제를 지도에서 한눈에",
      width: 1672,
      height: 941,
      title: "축제어디?",
    },
    links: {
      appStore:
        "https://apps.apple.com/us/app/%EC%B6%95%EC%A0%9C%EC%96%B4%EB%94%94/id6762603640",
    },
    description:
      "축제에 가고 싶을 때 가장 먼저 열어보는 앱을 목표로, 전국 축제를 지도 위에서 탐색하는 서비스입니다. 2026 관광데이터 활용 공모전을 준비하며 iPhone과 Apple Watch 앱을 출시했습니다.",
    highlights: [
      "오늘·이번 주말 필터와 내 주변 탐색으로, 지금 갈 수 있는 축제를 먼저 보여주는 구성",
      "동그란 마커 대신 가로로 긴 축제 마커 UI를 써서 지도에서 축제를 바로 읽을 수 있게 설계",
      "iPhone에서 고른 축제를 Apple Watch 지도에서도 이어서 확인",
    ],
    results: ["iPhone · Apple Watch 앱 출시", "2026 관광데이터 활용 공모전 심사 중"],
  },
];
