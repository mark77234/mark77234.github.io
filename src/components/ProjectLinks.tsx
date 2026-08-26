import Link from "next/link";
import type { ProjectLinks as Links } from "@/data/caseStudies";

/**
 * 실제 서비스 링크가 먼저, 내부 상세 페이지가 나중.
 * 외부 서비스는 Primary External Action, 상세는 Secondary Navigation으로 구분한다.
 */
const cta: { key: keyof Links; label: string; compactLabel?: string }[] = [
  { key: "appStore", label: "App Store ↗" },
  { key: "playStore", label: "Google Play ↗" },
  { key: "live", label: "Live Demo ↗" },
  { key: "caseStudy", label: "View Details →", compactLabel: "Details →" },
];

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
        compact ? "text-[12.5px]" : "text-[14px]"
      }`}
    >
      {items.map((item) => {
        const href = links[item.key] as string;
        const isDetails = item.key === "caseStudy";
        // 화살표는 인쇄본에서도 유지한다. PDF에서 클릭 가능한 링크임을 알리는 신호다.
        const label = compact ? (item.compactLabel ?? item.label) : item.label;
        const className = isDetails
          ? "text-muted underline-offset-4 hover:text-ink hover:underline"
          : "font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent";

        return (
          <li key={item.key}>
            {isDetails ? (
              <Link href={href} className={className}>
                {label}
              </Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
