export const SITE_URL = "https://mark77234.github.io";
export const GITHUB_URL = "https://github.com/mark77234";
export const LINKEDIN_URL = "https://www.linkedin.com/in/byeongchanlee/";

export const profile = {
  name: "이병찬",
  nameEn: "Byeongchan Lee (Mark)",
  role: "Software Engineer",
  tagline: "모바일을 시작으로 Backend · Cloud · AI까지\n실제 서비스를 출시하고 운영합니다.",
  summary:
    "모바일을 시작점으로 Backend·Cloud·AI까지 확장하며 실제 서비스를 출시하고 운영하는 Software Engineer입니다.",
  contacts: [
    { label: "Email", text: "mark77234@naver.com", href: "mailto:mark77234@naver.com" },
    { label: "GitHub", text: "github.com/mark77234", href: GITHUB_URL },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/byeongchanlee",
      href: LINKEDIN_URL,
    },
    {
      label: "Portfolio",
      text: "mark77234.github.io/portfolio/",
      href: `${SITE_URL}/portfolio/`,
    },
  ],
  stats: [
    { value: "9", label: "Apps Shipped" },
    { value: "6", label: "Solo Products" },
    { value: "2,200+", label: "DailyOPIc Downloads" },
  ],
} as const;


/** 페이지가 openGraph를 지정하면 layout 값이 통째로 대체되므로 공통 필드는 여기서 재사용한다. */
export const ogBase = {
  type: "website",
  locale: "ko_KR",
  siteName: `${profile.name} | ${profile.role}`,
} as const;
