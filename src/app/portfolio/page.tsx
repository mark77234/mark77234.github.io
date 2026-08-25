import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import SectionHeading from "@/components/SectionHeading";
import CaseStudy from "@/components/CaseStudy";
import { caseStudies } from "@/data/caseStudies";
import { sideProjects } from "@/data/sideProjects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `${profile.nameEn}의 포트폴리오 — DailyOPIc, KillingPart, TRIT의 문제 정의와 기술적 해결 과정.`,
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

      {/* ------------------------------------------- featured case studies */}
      <section className="mt-14">
        <SectionHeading>Featured Case Studies</SectionHeading>
        <div className="space-y-16 print:space-y-10">
          {caseStudies.map((study) => (
            <CaseStudy key={study.slug} study={study} />
          ))}
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

              <p className="mt-4 text-[15px] leading-[1.8] print:text-[10pt]">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-4 text-[14.5px] leading-[1.75] before:absolute before:left-0 before:text-faint before:content-['–'] print:text-[10pt]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {project.results && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[13px] font-medium text-accent">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              )}

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
