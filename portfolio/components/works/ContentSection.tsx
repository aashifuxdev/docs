import Image from "next/image";
import type { ContentSection as ContentSectionType } from "@/data/works";

type Props = {
  section: ContentSectionType;
};

export default function ContentSection({ section }: Props) {
  const { heading, body, image, imageAlt, layout = "text-only" } = section;

  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-black mb-6">{heading}</h3>

      {layout === "image-right" ? (
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          {image && (
            <div className="relative w-full aspect-video bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={imageAlt ?? heading}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      ) : layout === "image-left" ? (
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {image && (
            <div className="relative w-full aspect-video bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={imageAlt ?? heading}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-8">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          {image && (
            <div className="relative w-full aspect-video bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={imageAlt ?? heading}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
