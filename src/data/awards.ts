import type { ProjectLinks } from "@/data/caseStudies";

export type Award = {
  title: string;
  prize: string;
  date?: string;
  note?: string;
  links?: ProjectLinks;
};

export const awards: Award[] = [
  {
    title: "DIVE 2026",
    prize: "부산도시공사 발제사 3위",
    date: "2026.07",
    note: "AI/데이터 기반 부산 공공임대주택 추천 서비스 · 서비스 개발 단독 담당",
    links: { caseStudy: "/portfolio/dive/" },
  },
  {
    title: "2026 PNUPC",
    prize: "은상",
    note: "개인 참가 / Python",
  },
  {
    title: "2024 한국정보기술학회 추계종합학술대회",
    prize: "대학생논문경진대회 동상",
    date: "2024.11",
    note: "「응급실 혼잡도 모니터링을 위한 비침습적 Random Forest 기반 실시간 점유도 추정 시스템 설계」",
  },
  {
    title: "2024 동남권 LINC 3.0 글로벌 창업 아이디어 경진대회",
    prize: "우수상",
  },
];

export const education = {
  school: "부산대학교",
  major: "IT응용공학과",
  period: "2021.03 – 2027.02 예정",
  note: "Bachelor's Degree Expected",
};

export const languages = [
  { name: "OPIc English", level: "Intermediate Mid 2", date: "2026.02" },
];
