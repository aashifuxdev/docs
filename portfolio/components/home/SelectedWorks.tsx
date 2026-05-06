import Image from "next/image";
import Link from "next/link";
import { works, type Work } from "@/data/works";

function WorkCard({
  work,
  className = "",
}: {
  work: Work;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-900 group ${className}`}
    >
      {/* Cover image */}
      <Image
        src={work.coverImage}
        alt={work.title}
        fill
        className="object-cover object-top opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Platform tag */}
      <span className="absolute top-4 left-5 text-[11px] text-white/60 font-medium tracking-wide">
        {work.platform}
      </span>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between gap-4">
        <p className="text-white text-[13px] font-semibold leading-snug max-w-[75%]">
          {work.title} {work.subtitle}
        </p>

        {work.inProgress ? (
          <span className="shrink-0 text-[11px] text-white/50 italic pb-0.5">
            Work in progress
          </span>
        ) : (
          <Link
            href={`/works/${work.slug}`}
            className="shrink-0 bg-black text-white text-[11px] font-semibold px-4 py-2 hover:bg-white hover:text-black transition-colors flex items-center gap-1"
          >
            View case study ↗
          </Link>
        )}
      </div>
    </div>
  );
}

export default function SelectedWorks() {
  /* Fixed layout from Figma: full / full / [half + half] / full */
  const ackodrive   = works.find((w) => w.slug === "ackodrive")!;
  const finbox      = works.find((w) => w.slug === "finbox")!;
  const quickrecruit = works.find((w) => w.slug === "quickrecruit")!;
  const yugaport    = works.find((w) => w.slug === "yugaport")!;
  const influenca2  = works.find((w) => w.slug === "influenca2")!;

  return (
    <section id="works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-10">Selected Works</h2>

        <div className="flex flex-col gap-3">
          {/* Row 1 – AckoDrive full width */}
          <WorkCard work={ackodrive} className="w-full aspect-[16/7]" />

          {/* Row 2 – Finbox full width */}
          <WorkCard work={finbox} className="w-full aspect-[16/7]" />

          {/* Row 3 – QuickRecruit + Yugaport side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <WorkCard work={quickrecruit} className="aspect-[4/3]" />
            <WorkCard work={yugaport} className="aspect-[4/3]" />
          </div>

          {/* Row 4 – Influenca2 full width */}
          <WorkCard work={influenca2} className="w-full aspect-[16/7]" />
        </div>
      </div>
    </section>
  );
}
