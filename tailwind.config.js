/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: [
          "Pretendard",
          "Apple SD Gothic Neo",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        bg: "#111827",
        dark: "#1f2937",
        subtext: "#a1a1aa",
      },
      spacing: {
        30: "7.5rem", // w-30을 위한 사용자 정의 spacing
      },
    },
  },
  plugins: [],
};
