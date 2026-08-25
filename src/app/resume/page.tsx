import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { resumeProjects } from "@/data/projects";
import { awards, education, languages } from "@/data/awards";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.nameEn}의 이력서 — 경력, 기술 스택, 대표 프로젝트와 수상 내역.`,
};

function StackLine({ items }: { items: readonly string[] }) {
  return (
    <p className="mt-1.5 text-[12.5px] text-faint">{items.join(" · ")}</p>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <div className="no-print mb-8 flex justify-end">
        <PrintButton />
      </div>

      {/* ---------------------------------------------------------- header */}
      <header className="print-keep border-b-2 border-ink pb-6">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <div>
            <h1 className="text-[30px] font-semibold tracking-tight print:text-[22pt]">
              {profile.name}
            </h1>
            <p className="mt-1 text-[15px] text-muted">
              {profile.nameEn} · {profile.role}
            </p>
          </div>
          <ul className="text-[13px] leading-[1.7] text-muted sm:text-right">
            {profile.contacts.map((contact) => (
              <li key={contact.label}>
                <span className="mr-2 text-faint">{contact.label}</span>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="hover:text-ink hover:underline"
                >
                  {contact.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* --------------------------------------------------------- profile */}
      <section className="print-section mt-10 print:mt-7">
        <SectionHeading index="01">Profile</SectionHeading>
        <p className="text-[15px] leading-[1.75] print:text-[10.5pt]">{profile.summary}</p>
        <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="print-keep">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="text-[20px] font-semibold tracking-tight">{stat.value}</span>
                <span className="ml-2 text-[13px] text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------------------------------------------------------- skills */}
      <section className="print-section mt-10 print:mt-7">
        <SectionHeading index="02">Skills</SectionHeading>
        <dl className="space-y-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="print-keep grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[150px_1fr]"
            >
              <dt className="text-[13px] font-semibold">{group.category}</dt>
              <dd className="text-[14px] leading-[1.7] text-muted print:text-[10pt]">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------ experience */}
      <section className="print-section mt-10 print:mt-7">
        <SectionHeading index="03">Experience</SectionHeading>
        <div className="space-y-8 print:space-y-6">
          {experiences.map((exp) => (
            <article key={exp.company} className="print-keep">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[17px] font-semibold">{exp.company}</h3>
                <span className="text-[13px] text-faint">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-[14px] text-muted">{exp.role}</p>

              {exp.terms && (
                <ul className="mt-2 space-y-0.5 text-[12.5px] text-faint">
                  {exp.terms.map((term) => (
                    <li key={term.period}>
                      {term.period} · {term.title}
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-3 space-y-1.5">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-[14px] leading-[1.7] before:absolute before:left-0 before:text-faint before:content-['–'] print:text-[10pt]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <StackLine items={exp.stack} />
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- projects */}
      <section className="print-section mt-10 print:mt-7">
        <SectionHeading index="04">Selected Projects</SectionHeading>
        <div className="space-y-8 print:space-y-6">
          {resumeProjects.map((project) => (
            <article key={project.name} className="print-keep">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[17px] font-semibold">
                  {project.name}
                  <span className="ml-2 text-[13px] font-normal text-muted">
                    {project.summary}
                  </span>
                </h3>
                <span className="text-[13px] text-faint">{project.period}</span>
              </div>
              <p className="mt-0.5 text-[14px] text-muted">{project.role}</p>

              <ul className="mt-3 space-y-1.5">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-[14px] leading-[1.7] before:absolute before:left-0 before:text-faint before:content-['–'] print:text-[10pt]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <StackLine items={project.stack} />
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- awards */}
      <section className="print-section mt-10 print:mt-7">
        <SectionHeading index="05">Awards</SectionHeading>
        <ul className="space-y-4">
          {awards.map((award) => (
            <li key={award.title} className="print-keep">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[14.5px] font-semibold">
                  {award.title}
                  <span className="ml-2 font-normal text-accent">{award.prize}</span>
                </h3>
                {award.date && <span className="text-[13px] text-faint">{award.date}</span>}
              </div>
              {award.note && (
                <p className="mt-0.5 text-[13px] leading-[1.6] text-muted">{award.note}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------- education */}
      <section className="print-section print-keep mt-10 print:mt-7">
        <SectionHeading index="06">Education</SectionHeading>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-[14.5px] font-semibold">
            {education.school}
            <span className="ml-2 font-normal text-muted">{education.major}</span>
          </h3>
          <span className="text-[13px] text-faint">{education.period}</span>
        </div>
        <p className="mt-0.5 text-[13px] text-muted">{education.note}</p>
      </section>

      {/* -------------------------------------------------------- language */}
      <section className="print-section print-keep mt-10 print:mt-7">
        <SectionHeading index="07">Language</SectionHeading>
        <ul>
          {languages.map((lang) => (
            <li key={lang.name} className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-[14.5px]">
                <span className="font-semibold">{lang.name}</span>
                <span className="ml-2 text-muted">{lang.level}</span>
              </span>
              <span className="text-[13px] text-faint">{lang.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
