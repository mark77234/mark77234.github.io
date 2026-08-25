import Image from "next/image";
import type { Block, CaseStudy as CaseStudyType } from "@/data/caseStudies";

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
              <span className="rounded-sm bg-[#f5f5f5] px-2.5 py-1 print:bg-transparent print:px-0 print:underline">
                {step}
              </span>
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
      return (
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {block.items.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block text-[22px] font-semibold tracking-tight">
                  {item.value}
                </span>
                <span className="mt-0.5 block text-[13px] text-muted">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default function CaseStudy({ study }: { study: CaseStudyType }) {
  return (
    <article className="print-section border-t border-ink pt-8">
      <header className="print-keep">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-[24px] font-semibold tracking-tight sm:text-[28px]">
            <span className="mr-3 align-middle text-[14px] font-normal text-faint">
              {study.index}
            </span>
            {study.name}
          </h3>
          <span className="text-[13px] text-faint">{study.period}</span>
        </div>
        <p className="mt-1.5 text-[16px] text-muted">{study.subtitle}</p>
        <p className="mt-3 text-[13px] text-faint">
          {study.context} · {study.role}
        </p>
        <p className="mt-3 text-[12.5px] leading-[1.7] text-faint">{study.stack.join(" · ")}</p>
      </header>

      {study.images && study.images.length > 0 && (
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {study.images.map((image) => (
            <li key={image.src} className="print-keep relative aspect-[9/16] overflow-hidden rounded-sm bg-[#f5f5f5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 300px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 space-y-8 print:mt-6 print:space-y-6">
        {study.sections.map((section) => (
          <section key={section.heading} className="print-keep">
            <h4 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">
              {section.heading}
            </h4>
            <div className="space-y-4">
              {section.blocks.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
