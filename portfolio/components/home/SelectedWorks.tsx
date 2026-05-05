import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export default function SelectedWorks() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12">Selected Works</h2>

        <div className="flex flex-col gap-6">
          {works.map((work) => (
            <div
              key={work.slug}
              className="relative w-full aspect-[16/7] bg-gray-100 overflow-hidden rounded-sm group"
            >
              {/* Cover image */}
              <Image
                src={work.coverImage}
                alt={work.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Platform tag */}
              <span className="absolute top-4 left-4 text-xs text-white/80 font-medium">
                {work.platform}
              </span>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {work.title}
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">{work.subtitle}</p>
                </div>

                {work.inProgress ? (
                  <span className="shrink-0 text-xs text-white/60 italic">
                    Work in progress
                  </span>
                ) : (
                  <Link
                    href={`/works/${work.slug}`}
                    className="shrink-0 bg-black text-white text-xs font-semibold px-4 py-2 hover:bg-gray-800 transition-colors flex items-center gap-1.5"
                  >
                    View case study ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
