"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GITHUB_URL, profile } from "@/data/profile";

const navItems = [
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/resume/", label: "Resume" },
];

export default function SiteHeader() {
  // trailingSlash: true 이므로 pathname은 "/resume/" 형태로 들어온다.
  const pathname = usePathname().replace(/\/?$/, "/");

  return (
    <header className="no-print border-b border-rule">
      <nav
        aria-label="주요 메뉴"
        className="mx-auto flex max-w-[1060px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight hover:text-accent"
        >
          Home
        </Link>

        <ul className="flex items-center gap-5 text-[14px] sm:gap-7">
          {navItems.map((item) => {
            // /portfolio/dailyopic/ 같은 하위 페이지에서도 Portfolio를 현재 위치로 표시한다.
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "font-semibold text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
                      : "text-muted hover:text-ink"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink"
            >
              GitHub
              <span className="sr-only"> (새 창에서 열림)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
