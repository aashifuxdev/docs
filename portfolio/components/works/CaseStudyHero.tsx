import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  visitUrl: string;
  projectName: string;
};

export default function CaseStudyHero({ title, subtitle, visitUrl, projectName }: Props) {
  return (
    <div className="pt-14 pb-10 px-6 max-w-6xl mx-auto">
      {/* Back */}
      <Link
        href="/#works"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black mb-8 transition-colors"
      >
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Title */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            <span className="text-black">{title}</span>{" "}
            <span className="text-gray-400">{subtitle}</span>
          </h1>
        </div>

        {/* Visit button */}
        {visitUrl !== "#" && (
          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-black px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition-colors flex items-center gap-2"
          >
            Visit {projectName} ↗
          </a>
        )}
      </div>
    </div>
  );
}
