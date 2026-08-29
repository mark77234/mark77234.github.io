import { Fragment } from "react";
import Image from "next/image";
import ProjectLinks from "@/components/ProjectLinks";
import SystemArchitectureSection from "@/components/SystemArchitectureSection";
import type {
  Block,
  CaseStudy as CaseStudyType,
  DiagramStage,
  ScreenLayout,
  Screenshot,
} from "@/data/caseStudies";

/** 서비스 공식 대표 이미지. 원본 비율 그대로, crop·mockup 없이 크게 보여준다. */
export function ProjectCover({ cover }: { cover: Screenshot }) {
  return (
    <figure className="print-keep print-cover mt-8 print:mt-5">
      <Image
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        sizes="(max-width: 860px) 100vw, 860px"
        className="h-auto w-full border border-rule object-contain"
      />
    </figure>
  );
}

const phoneCols: Record<number, string> = {
  1: "grid-cols-1 sm:grid-cols-2",
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-5",
};

function ScreenshotGrid({
  layout,
  items,
}: {
  layout: ScreenLayout;
  items: Screenshot[];
}) {
  const isPhone = layout === "phone";
  const cols = isPhone
    ? (phoneCols[items.length] ?? "grid-cols-2 md:grid-cols-4")
    : items.length === 1
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <ul className={`grid gap-x-4 gap-y-6 ${cols}`}>
      {items.map((shot) => (
        <li
          key={shot.src}
          className={`print-keep ${isPhone ? "print-shot" : "print-shot-wide"}`}
        >
          <figure>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes={isPhone ? "(max-width: 768px) 45vw, 200px" : "(max-width: 640px) 100vw, 420px"}
              className="h-auto w-full rounded-sm border border-rule object-contain"
            />
            <figcaption className="mt-2">
              <span className="block text-[12.5px] font-semibold">{shot.title}</span>
              {shot.caption && (
                <span className="mt-0.5 block text-[12px] leading-[1.55] text-muted">
                  {shot.caption}
                </span>
              )}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="print-keep-color rounded-sm bg-[#f4f4f5] px-2 py-0.5 text-[11.5px] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function StageBox({ stage }: { stage: DiagramStage }) {
  return (
    <div className="rounded-sm border border-rule px-4 py-3">
      <p className="text-[13.5px] font-semibold">{stage.title}</p>
      {stage.note && <p className="mt-0.5 text-[12px] text-faint">{stage.note}</p>}
      {stage.items && <Chips items={stage.items} />}
    </div>
  );
}

function Arrow() {
  return (
    <div aria-hidden="true" className="py-1 text-center text-[13px] leading-none text-faint">
      ↓
    </div>
  );
}

/** 세로 방향 단계도. 모바일에서도 그대로 reflow되므로 축소가 필요 없다. */
function Diagram({ caption, stages }: { caption?: string; stages: DiagramStage[] }) {
  return (
    <figure className="print-keep">
      {caption && (
        <figcaption className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-faint">
          {caption}
        </figcaption>
      )}
      <ol>
        {stages.map((stage, i) => (
          <li key={stage.title}>
            {i > 0 && <Arrow />}
            {stage.branches ? (
              <div>
                <StageBox stage={{ title: stage.title, note: stage.note, items: stage.items }} />
                <Arrow />
                <div className="grid gap-3 sm:grid-cols-2">
                  {stage.branches.map((branch) => (
                    <div key={branch.label} className="rounded-sm border border-rule px-4 py-3">
                      <span className="print-keep-color rounded-sm bg-ink px-1.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-white">
                        {branch.label}
                      </span>
                      <p className="mt-2 text-[13.5px] font-semibold">{branch.title}</p>
                      {branch.items && <Chips items={branch.items} />}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <StageBox stage={stage} />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** 성과 지표. 상세 페이지와 Portfolio Overview 카드에서 함께 쓴다. */
export function Metrics({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="sr-only">{item.label}</dt>
          <dd>
            <span className="block text-[22px] font-semibold tracking-tight">{item.value}</span>
            <span className="mt-0.5 block text-[13px] text-muted">{item.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function EngineeringCards({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="print-keep border-t border-ink pt-3">
          <h3 className="text-[13.5px] font-semibold">{item.title}</h3>
          <p className="mt-1.5 text-[13.5px] leading-[1.65] text-muted print:text-[9.5pt]">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return (
        <p className="text-[15px] leading-[1.8] text-ink print:text-[10pt]">{block.text}</p>
      );

    case "list":
      return (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="relative pl-4 text-[15px] leading-[1.75] before:absolute before:left-0 before:text-faint before:content-['–'] print:text-[10pt]"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "flow":
      return (
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px]">
          {block.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-faint">
                  →
                </span>
              )}
              <span className="print-keep-color rounded-sm bg-[#f4f4f5] px-2.5 py-1">{step}</span>
            </li>
          ))}
        </ol>
      );

    case "stack":
      return (
        <dl className="space-y-2.5">
          {block.groups.map((group) => (
            <div key={group.label} className="grid grid-cols-1 gap-x-6 sm:grid-cols-[130px_1fr]">
              <dt className="text-[13px] font-semibold">{group.label}</dt>
              <dd className="text-[14px] leading-[1.7] text-muted print:text-[10pt]">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "metrics":
      return <Metrics items={block.items} />;

    case "cards":
      return <EngineeringCards items={block.items} />;

    case "screens":
      return <ScreenshotGrid layout={block.layout} items={block.items} />;

    case "diagram":
      return <Diagram caption={block.caption} stages={block.stages} />;
  }
}

/** 프로젝트 제목 · 기간 · Role · Stack. 상세 페이지와 Overview 카드가 공유한다. */
export function ProjectHeader({
  study,
  as: Heading = "h3",
}: {
  study: CaseStudyType;
  /** 상세 페이지에서는 h1, Overview 카드에서는 h3로 쓴다. */
  as?: "h1" | "h3";
}) {
  return (
    <header className="print-keep">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <Heading className="text-[24px] font-semibold tracking-tight sm:text-[28px]">
          <span className="mr-3 align-middle text-[14px] font-normal text-faint">
            {study.index}
          </span>
          {study.name}
        </Heading>
        {study.period && <span className="text-[13px] text-faint">{study.period}</span>}
      </div>
      <p className="mt-1.5 text-[16px] text-muted">{study.subtitle}</p>
      <p className="mt-3 text-[13px] text-faint">
        {study.context} · {study.role}
      </p>
      <p className="mt-3 text-[12.5px] leading-[1.7] text-faint">{study.stack.join(" · ")}</p>
    </header>
  );
}

export default function CaseStudy({ study }: { study: CaseStudyType }) {
  return (
    <article className="print-section border-t border-ink pt-8">
      <ProjectHeader study={study} as="h1" />

      {study.cover && <ProjectCover cover={study.cover} />}

      {/* 상세 페이지에서는 이미 상세 안이므로 실제 서비스 링크만 노출한다. */}
      {study.links && (
        <div className="mt-6">
          <ProjectLinks links={{ ...study.links, caseStudy: undefined }} />
        </div>
      )}

      <div className="mt-10 space-y-10 print:mt-6 print:space-y-6">
        {study.sections.map((section, index) => (
          <Fragment key={section.heading}>
            <section className="print-keep">
              <h2 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </div>
            </section>
            {/* 아키텍처 다이어그램은 Overview 바로 다음, 화면·엔지니어링 설명 앞에 둔다. */}
            {index === 0 && study.systemArchitectureAlt && (
              <SystemArchitectureSection
                slug={study.slug}
                alt={study.systemArchitectureAlt}
              />
            )}
          </Fragment>
        ))}
      </div>
    </article>
  );
}
