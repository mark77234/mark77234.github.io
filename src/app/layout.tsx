import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ogBase, SITE_URL, profile } from "@/data/profile";

const description =
  "모바일을 시작으로 Backend, Cloud, AI 서비스를 개발하고 출시·운영하는 Software Engineer 이병찬의 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `${profile.name} | %s`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    ...ogBase,
    url: "/",
    title: `${profile.name} | ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
