export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Left: text content */}
        <div className="flex flex-col gap-4 max-w-2xl">
          {/* Experience tag */}
          <span className="inline-flex items-center border border-black text-sm px-3 py-1 rounded-full w-fit">
            4 years of exp
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white px-4 py-2 rounded-sm">
                <span className="text-5xl md:text-7xl font-black leading-none tracking-tight">
                  Senior Product
                </span>
              </div>
            </div>
            <span className="text-5xl md:text-7xl font-black leading-none tracking-tight text-black">
              Designer
            </span>
          </div>
        </div>

        {/* Right: vertical name */}
        <div
          className="hidden lg:flex items-center justify-center select-none"
          aria-hidden="true"
        >
          <span
            className="writing-vertical text-[7rem] font-black text-gray-100 tracking-widest leading-none"
          >
            AASHIF ALI
          </span>
        </div>
      </div>
    </section>
  );
}
