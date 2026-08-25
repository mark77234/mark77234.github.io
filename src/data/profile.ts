export const SITE_URL = "https://mark77234.github.io";

export const profile = {
  name: "이병찬",
  nameEn: "Byeongchan Lee",
  role: "Software Engineer",
  tagline: "모바일을 시작으로 Backend · Cloud · AI까지\n실제 서비스를 출시하고 운영합니다.",
  summary:
    "모바일을 시작점으로 Backend·Cloud·AI까지 확장하며 실제 서비스를 출시하고 운영하는 Software Engineer입니다.",
  contacts: [
    { label: "Email", text: "mark77234@naver.com", href: "mailto:mark77234@naver.com" },
    { label: "GitHub", text: "github.com/mark77234", href: "https://github.com/mark77234" },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/byeongchanlee",
      href: "https://linkedin.com/in/byeongchanlee",
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

export const GITHUB_URL = "https://github.com/mark77234";
