import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";

type Props = {
  works: Work[];
};

export default function OtherWorks({ works }: Props) {
  if (works.length === 0) return null;

  return (
    <div className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-black mb-8">Other works</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.slug}
              className="group relative aspect-video bg-gray-100 overflow-hidden rounded-sm"
            >
              <Image
                src={work.coverImage}
                alt={work.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-white/70">{work.platform}</p>
                  <p className="text-sm font-bold text-white leading-tight mt-0.5">
                    {work.title}
                  </p>
                </div>
                {!work.inProgress && (
                  <Link
                    href={`/works/${work.slug}`}
                    className="shrink-0 bg-black text-white text-xs font-semibold px-3 py-1.5 hover:bg-gray-800 transition-colors"
                  >
                    View case study ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
