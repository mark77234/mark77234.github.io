import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import SectionHeading from "@/components/SectionHeading";
import { Metrics, ProjectCover, ProjectHeader } from "@/components/CaseStudy";
import { caseStudies, caseStudySummary } from "@/data/caseStudies";
import { sideProjects } from "@/data/sideProjects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `${profile.nameEn}의 포트폴리오 — DailyOPIc, KillingPart, DIVE 2026의 문제 정의와 기술적 해결 과정.`,
};

/**
 * 화면에서는 "View Case Study →", 인쇄에서는 실제 주소를 읽을 수 있게 노출한다.
 * PDF만 받아본 사람도 상세 페이지 URL을 그대로 입력할 수 있어야 한다.
 */
function CaseStudyLink({ slug }: { slug: string }) {
  return (
    <p className="mt-6">
      <Link
        href={`/portfolio/${slug}/`}
        className="inline-block text-[14px] font-medium text-accent underline-offset-4 hover:underline print:text-[9.5pt]"
      >
        <span className="print:hidden">View Case Study →</span>
        <span className="hidden print:inline">
          Case Study · mark77234.github.io/portfolio/{slug}/
        </span>
      </Link>
    </p>
  );
}

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

                <CaseStudyLink slug={study.slug} />
              </article>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------- selected projects */}
      <section className="print-break-before mt-20 print:mt-0">
        <SectionHeading>Selected Projects</SectionHeading>
        <div className="space-y-12 print:space-y-8">
          {sideProjects.map((project) => (
            <article key={project.name} className="print-keep border-t border-rule pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[19px] font-semibold tracking-tight">{project.name}</h3>
                {project.period && (
                  <span className="text-[13px] text-faint">{project.period}</span>
                )}
              </div>
              <p className="mt-1 text-[15px] text-muted">{project.subtitle}</p>
              <p className="mt-2 text-[13px] text-faint">{project.role}</p>

              {/* 대표 이미지를 먼저, 다만 메인 프로젝트보다는 작게 두어 위계를 유지한다. */}
              <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-[minmax(0,300px)_1fr]">
                <figure className="print-shot-wide">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={project.cover.width}
                    height={project.cover.height}
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="h-auto w-full border border-rule object-contain"
                  />
                </figure>

                <div>
                  <p className="text-[14.5px] leading-[1.75] print:text-[10pt]">
                    {project.description}
                  </p>

                  {project.results && (
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] font-medium text-accent">
                      {project.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-4 text-[14px] leading-[1.75] text-muted before:absolute before:left-0 before:text-faint before:content-['–'] print:text-[9.5pt]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[12.5px] leading-[1.7] text-faint">
                {project.stack.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
