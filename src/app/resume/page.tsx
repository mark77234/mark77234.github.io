import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import ProjectLinks from "@/components/ProjectLinks";
import SectionHeading from "@/components/SectionHeading";
import { ogBase, profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { resumeProjects } from "@/data/projects";
import { awards, education, languages } from "@/data/awards";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.nameEn}의 이력서 — 경력, 기술 스택, 대표 프로젝트와 수상 내역.`,
  alternates: { canonical: "/resume/" },
  openGraph: { ...ogBase, url: "/resume/" },
  twitter: { card: "summary" },
};

/** 이름/기간처럼 좌우로 갈라지는 한 줄. 좁은 화면에서는 자연스럽게 쌓인다. */
function ItemHead({ title, period }: { title: string; period: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 className="text-[17px] font-semibold tracking-tight">{title}</h3>
      <span className="text-[13px] text-faint">{period}</span>
    </div>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2 print:mt-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-4 text-[14px] leading-[1.75] before:absolute before:left-0 before:text-faint before:content-['–'] print:text-[10pt]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function StackLine({ items }: { items: readonly string[] }) {
  return <p className="mt-2.5 text-[12.5px] text-faint">{items.join(" · ")}</p>;
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
        <div className="space-y-9 print:space-y-6">
          {experiences.map((exp) => (
            <article key={exp.company} className="print-keep">
              <ItemHead title={exp.company} period={exp.period} />
              <p className="mt-1 text-[14px] text-muted">{exp.role}</p>
              {/* 한 경력 안의 계약 형태 변화는 한 줄로 이어 쓴다. */}
              {exp.terms && (
                <p className="mt-0.5 text-[12.5px] text-faint">
                  {exp.terms.map((term) => `${term.period} ${term.title}`).join(" · ")}
                </p>
              )}

              <p className="mt-3 text-[14.5px] leading-[1.7] print:text-[10pt]">{exp.summary}</p>
              <Bullets items={exp.bullets} />
              <StackLine items={exp.stack} />

              {exp.service && (
                <div className="mt-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-[12.5px] font-semibold">{exp.service.name}</span>
                  <ProjectLinks links={exp.service.links} compact />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- projects */}
      <section className="print-section mt-10 print:mt-7">
        <SectionHeading index="04">Selected Projects</SectionHeading>
        <div className="space-y-9 print:space-y-6">
          {resumeProjects.map((project) => (
            <article key={project.name} className="print-keep">
              <ItemHead title={project.name} period={project.period} />
              <p className="mt-1 text-[14px] text-muted">{project.role}</p>

              <p className="mt-3 text-[14.5px] leading-[1.7] print:text-[10pt]">
                {project.summary}
              </p>
              <Bullets items={project.bullets} />
              <StackLine items={project.stack} />

              {project.links && (
                <div className="mt-2.5">
                  <ProjectLinks links={project.links} compact />
                </div>
              )}
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
              <div className="mt-0.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {award.note && (
                  <p className="text-[13px] leading-[1.6] text-muted">{award.note}</p>
                )}
                {award.links && <ProjectLinks links={award.links} compact />}
              </div>
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
