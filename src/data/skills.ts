export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Mobile",
    items: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "Expo",
      "Flutter",
      "Dart",
    ],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Node.js", "TypeScript", "Firebase", "Firestore"],
  },
  {
    category: "Cloud / DevOps",
    items: ["Google Cloud Run", "Docker", "GitHub Actions", "Artifact Registry", "Vercel"],
  },
  {
    category: "AI / Product",
    items: ["OpenAI API", "LLM Application", "AI Agent", "STT", "TTS"],
  },
];
