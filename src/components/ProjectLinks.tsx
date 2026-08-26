import Link from "next/link";
import { SITE_URL } from "@/data/profile";
import type { ProjectLinks as Links } from "@/data/caseStudies";

/**
 * 실제 서비스 링크가 먼저, 내부 Case Study가 나중.
 * 외부 서비스는 Primary External Action, Case Study는 Secondary Navigation으로 구분한다.
 */
const cta: { key: keyof Links; label: string; printLabel: string }[] = [
  { key: "appStore", label: "App Store ↗", printLabel: "App Store" },
  { key: "playStore", label: "Google Play ↗", printLabel: "Google Play" },
  { key: "live", label: "Live Demo ↗", printLabel: "Live Demo" },
  { key: "caseStudy", label: "View Case Study →", printLabel: "Case Study" },
];

/** 인쇄본에서 읽을 수 있도록 href를 그대로 풀어 쓴다. percent-encoding만 되돌린다. */
function readableUrl(href: string) {
  const absolute = href.startsWith("http") ? href : `${SITE_URL}${href}`;
  return decodeURI(absolute).replace(/^https?:\/\//, "");
}

export default function ProjectLinks({
  links,
  compact = false,
}: {
  links: Links;
  /** Resume처럼 본문 글자가 작은 곳에서 사용 */
  compact?: boolean;
}) {
  const items = cta.filter((item) => links[item.key]);
  if (items.length === 0) return null;

  return (
    <ul
      className={`flex flex-wrap items-baseline gap-x-6 gap-y-2 ${
        compact ? "text-[12.5px]" : "text-[14px] print:block"
      }`}
    >
      {items.map((item) => {
        const href = links[item.key] as string;
        const isCaseStudy = item.key === "caseStudy";
        const className = isCaseStudy
          ? "text-muted underline-offset-4 hover:text-ink hover:underline"
          : "font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent";

        const content = (
          <>
            <span className="print:hidden">{item.label}</span>
            {/* compact은 지면이 좁아 URL을 펼치지 않고 hyperlink만 유지한다. */}
            <span className="hidden print:inline">
              {compact ? item.printLabel : `${item.printLabel} · ${readableUrl(href)}`}
            </span>
          </>
        );

        return (
          <li key={item.key} className="print:mt-0.5">
            {isCaseStudy ? (
              <Link href={href} className={className}>
                {content}
              </Link>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
