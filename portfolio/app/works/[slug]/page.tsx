import { notFound } from "next/navigation";
import Image from "next/image";
import { works, getWork, getOtherWorks } from "@/data/works";
import CaseStudyHero from "@/components/works/CaseStudyHero";
import GoalsGrid from "@/components/works/GoalsGrid";
import MetricsRow from "@/components/works/MetricsRow";
import ContentSection from "@/components/works/ContentSection";
import OtherWorks from "@/components/works/OtherWorks";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = getWork(params.slug);
  if (!work) return {};
  return {
    title: `${work.title} ${work.subtitle} — Aashif Ali`,
    description: work.overview,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const work = getWork(params.slug);
  if (!work) notFound();

  const otherWorksList = getOtherWorks(work.slug, work.otherWorks);
  const projectName = work.slug.charAt(0).toUpperCase() + work.slug.slice(1);

  return (
    <>
      <CaseStudyHero
        title={work.title}
        subtitle={work.subtitle}
        visitUrl={work.visitUrl}
        projectName={projectName}
      />

      {/* Cover image */}
      <div className="px-6 max-w-6xl mx-auto mb-12">
        <div className="relative w-full aspect-video bg-gray-100 rounded-sm overflow-hidden">
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
        </div>
      </div>

      {/* Overview */}
      {work.overview && (
        <div className="px-6 max-w-6xl mx-auto mb-8">
          <h2 className="text-xl font-black mb-4">Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">{work.overview}</p>
        </div>
      )}

      {/* Goals */}
      <GoalsGrid userGoals={work.userGoals} businessGoals={work.businessGoals} />

      {/* Metrics */}
      <MetricsRow metrics={work.metrics} />

      {/* Content sections */}
      {work.sections.map((section, i) => (
        <ContentSection key={i} section={section} />
      ))}

      {/* Other works */}
      <OtherWorks works={otherWorksList} />
    </>
  );
}
