import Link from "next/link";
import { GITHUB_URL, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1060px] px-5 py-20 sm:px-8 sm:py-28">
      <section className="max-w-2xl">
        <h1 className="text-[34px] font-semibold leading-tight tracking-tight sm:text-[44px]">
          {profile.name}
        </h1>
        <p className="mt-2 text-[17px] text-muted sm:text-[19px]">
          {profile.nameEn} · {profile.role}
        </p>

        <p className="mt-8 whitespace-pre-line text-[19px] leading-[1.65] sm:text-[22px]">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/portfolio/"
            className="rounded-sm bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Portfolio
          </Link>
          <Link
            href="/resume/"
            className="rounded-sm border border-ink px-5 py-2.5 text-[14px] font-medium transition-colors hover:bg-ink hover:text-white"
          >
            Resume
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-rule px-5 py-2.5 text-[14px] font-medium text-muted transition-colors hover:border-ink hover:text-ink"
          >
            GitHub
            <span className="sr-only"> (새 창에서 열림)</span>
          </a>
        </div>
      </section>

      <section aria-label="주요 지표" className="mt-20 border-t border-rule pt-10">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[30px] font-semibold tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[14px] text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 max-w-2xl">
        <p className="text-[15px] leading-[1.8] text-muted">
          iOS·Android 앱을 만들면서 시작해, 서비스가 실제로 돌아가는 데 필요한 Backend와
          Cloud, 그리고 AI 기능까지 직접 구축해 왔습니다. 개인 프로덕트와 회사 서비스 모두
          출시로 끝내지 않고 운영하면서 생기는 문제를 해결하는 데 관심이 있습니다.
        </p>
      </section>
    </div>
  );
}
