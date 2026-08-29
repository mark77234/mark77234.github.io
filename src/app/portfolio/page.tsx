import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import ProjectLinks from "@/components/ProjectLinks";
import { Metrics, ProjectCover, ProjectHeader } from "@/components/CaseStudy";
import { caseStudies, caseStudySummary } from "@/data/caseStudies";
import { ogBase, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Portfolio",
  alternates: { canonical: "/portfolio/" },
  openGraph: { ...ogBase, url: "/portfolio/" },
  twitter: { card: "summary" },
  description: `${profile.nameEn}의 포트폴리오 — DailyOPIc, KillingPart, Tomo, DIVE 2026, PNUSA, 카공어디?, 축제어디?의 문제 정의와 기술적 해결 과정.`,
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <div className="no-print mb-8 flex justify-end">
        <PrintButton />
      </div>

      <header className="print-keep">
        <h1 className="text-[32px] font-semibold tracking-tight sm:text-[40px]">Portfolio</h1>
        <p className="mt-5 max-w-xl whitespace-pre-line text-[16px] leading-[1.75] text-muted sm:text-[17px]">
          {"제품의 문제를 발견하고,\n기술적인 해결책을 설계하고,\n출시 이후까지 운영한 경험을 기록합니다."}
        </p>
      </header>

      {/* ---------------------------------------------------------- projects */}
      <section className="mt-12">
        <div className="space-y-16 print:space-y-10">
          {caseStudies.map((study) => {
            const { overview, results } = caseStudySummary(study);

            return (
              <article key={study.slug} className="print-keep border-t border-ink pt-8">
                <ProjectHeader study={study} />

                {study.cover && <ProjectCover cover={study.cover} />}

                <p className="mt-8 text-[15px] leading-[1.8] print:mt-5 print:text-[10pt]">
                  {overview}
                </p>

                {results.length > 0 && (
                  <div className="mt-6">
                    <Metrics items={results} />
                  </div>
                )}

                {study.links && (
                  <div className="mt-6">
                    <ProjectLinks links={study.links} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
