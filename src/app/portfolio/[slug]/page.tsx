import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import PrintButton from "@/components/PrintButton";
import ProjectLinks from "@/components/ProjectLinks";
import { caseStudies, findCaseStudy } from "@/data/caseStudies";
import { ogBase } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

// 프로젝트를 추가할 때 caseStudies 데이터만 늘리면 route가 함께 생성된다.
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) return {};

  const path = `/portfolio/${study.slug}/`;

  return {
    title: `${study.name} Case Study`,
    description: study.subtitle,
    alternates: { canonical: path },
    openGraph: { ...ogBase, url: path },
    twitter: { card: "summary" },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <div className="no-print mb-8 flex items-center justify-between gap-4">
        <Link
          href="/portfolio/"
          className="text-[13px] text-muted underline-offset-4 hover:text-ink hover:underline"
        >
          ← All Projects
        </Link>
        <PrintButton />
      </div>

      <CaseStudy study={study} />

      <div className="mt-16 border-t border-rule pt-6">
        {study.links && <ProjectLinks links={{ ...study.links, caseStudy: undefined }} />}
        <p className="no-print mt-3">
          <Link
            href="/portfolio/"
            className="text-[14px] text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            ← Back to Portfolio
          </Link>
        </p>
      </div>
    </div>
  );
}
