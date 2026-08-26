import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "@/components/PrintButton";
import ProjectLinks from "@/components/ProjectLinks";
import SectionHeading from "@/components/SectionHeading";
import { Metrics, ProjectCover, ProjectHeader } from "@/components/CaseStudy";
import { caseStudies, caseStudySummary } from "@/data/caseStudies";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `${profile.nameEn}의 포트폴리오 — DailyOPIc, KillingPart, DIVE 2026, PNUSA, 카공어디?, 축제어디?의 문제 정의와 기술적 해결 과정.`,
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <div className="no-print mb-8 flex justify-end">
        <PrintButton />
      </div>

      <header className="print-keep border-b-2 border-ink pb-8">
        <h1 className="text-[32px] font-semibold tracking-tight sm:text-[40px]">Selected Work</h1>
        <p className="mt-5 max-w-xl whitespace-pre-line text-[16px] leading-[1.75] text-muted sm:text-[17px]">
          {"제품의 문제를 발견하고,\n기술적인 해결책을 설계하고,\n출시 이후까지 운영한 경험을 기록합니다."}
        </p>
      </header>

      {/* ----------------------------------------------------- project index */}
      <section className="mt-14">
        <SectionHeading>Featured Case Studies</SectionHeading>
        <div className="space-y-16 print:space-y-10">
          {caseStudies
            .filter((study) => study.tier === "featured")
            .map((study) => {
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

      {/* ----------------------------------------------- selected projects */}
      <section className="print-break-before mt-20 print:mt-0">
        <SectionHeading>Selected Projects</SectionHeading>
        <div className="space-y-12 print:space-y-8">
          {caseStudies
            .filter((study) => study.tier === "selected")
            .map((study) => {
              const { overview, results } = caseStudySummary(study);

              return (
                <article key={study.slug} className="print-keep border-t border-rule pt-6">
                  <ProjectHeader study={study} />

                  {/* 대표 이미지를 먼저, 다만 메인 프로젝트보다는 작게 두어 위계를 유지한다. */}
                  <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-[minmax(0,300px)_1fr]">
                    {study.cover && (
                      <figure className="print-shot-wide">
                        <Image
                          src={study.cover.src}
                          alt={study.cover.alt}
                          width={study.cover.width}
                          height={study.cover.height}
                          sizes="(max-width: 640px) 100vw, 300px"
                          className="h-auto w-full border border-rule object-contain"
                        />
                      </figure>
                    )}

                    <div>
                      <p className="text-[14.5px] leading-[1.75] print:text-[10pt]">{overview}</p>

                      {results.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] font-medium text-accent">
                          {results.map((result) => (
                            <li key={result.label}>
                              {result.value} · {result.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {study.links && (
                    <div className="mt-5">
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
