import Image from "next/image";

/** 아키텍처 이미지는 모두 같은 캔버스에서 뽑아 비율이 동일하다. */
const RATIO = { width: 1672, height: 941 };

/**
 * 시스템 아키텍처 다이어그램 한 장.
 * 경로는 /images/<slug>/system_architecture.png 규칙을 따르므로 slug만 넘기면 된다.
 */
export default function SystemArchitectureSection({
  slug,
  alt,
}: {
  slug: string;
  alt: string;
}) {
  return (
    <section className="print-keep">
      <h2 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">
        System Architecture
      </h2>
      <figure className="print-architecture overflow-hidden rounded-sm border border-rule bg-white">
        <Image
          src={`/images/${slug}/system_architecture.png`}
          alt={alt}
          width={RATIO.width}
          height={RATIO.height}
          sizes="(max-width: 860px) 100vw, 860px"
          className="h-auto w-full object-contain"
        />
      </figure>
    </section>
  );
}
