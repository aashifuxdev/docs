export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-14 flex items-center overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-between gap-8">

        {/* Left: content */}
        <div className="flex flex-col gap-5 z-10">
          {/* Tag */}
          <span className="inline-flex items-center border border-gray-800 text-xs font-medium px-3.5 py-1.5 rounded-full w-fit tracking-wide text-gray-800">
            4 years of exp
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            {/* "Senior Product" on black band */}
            <div className="inline-flex">
              <span className="bg-black text-white text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-tight px-3 py-1">
                Senior Product
              </span>
            </div>
            {/* "Designer" plain */}
            <span className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-tight text-black">
              Designer
            </span>
          </div>
        </div>

        {/* Right: vertical name — hidden on mobile */}
        <div
          className="hidden lg:block shrink-0 select-none self-stretch"
          aria-hidden="true"
        >
          <p
            className="writing-vertical text-[clamp(4rem,9vw,7.5rem)] font-black text-gray-100 tracking-[0.15em] leading-none h-full flex items-center"
          >
            AASHIF ALI
          </p>
        </div>
      </div>
    </section>
  );
}
