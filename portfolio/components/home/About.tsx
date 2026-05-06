import Image from "next/image";

/* Tool placeholders — swap src for real SVGs once assets are available */
const tools = [
  { name: "Figma",      bg: "#1E1E1E", label: "Fg" },
  { name: "Principle",  bg: "#272727", label: "Pr" },
  { name: "Adobe XD",   bg: "#FF61F6", label: "Xd" },
];

const skills = [
  ["End-to-end product design", "User research"],
  ["Visual design",             "Attention to detail"],
  ["Information architecture",  "User experience design"],
  ["Product strategy",          "Interaction design"],
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">

        {/* Photo */}
        <div className="flex justify-center md:justify-start">
          {/* arch = rounded-t-[50%] so top is a perfect half-circle */}
          <div className="relative w-[220px] h-[260px] md:w-[240px] md:h-[280px] rounded-t-[110px] overflow-hidden bg-gray-100 shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Aashif Ali"
              fill
              className="object-cover grayscale"
              sizes="240px"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-7">
          <h2 className="text-4xl md:text-5xl font-black">About me</h2>

          <div>
            <p className="text-sm font-semibold mb-1">Hey! I&apos;m Aashif</p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              I come from Erode, a love-excited to the river Kaveri river. I love to
              explore new places and soak in the beauty of the world around me.
            </p>
          </div>

          {/* Tools */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Tools I use
            </p>
            <div className="flex items-center gap-2.5">
              {tools.map((t) => (
                <span
                  key={t.name}
                  style={{ backgroundColor: t.bg }}
                  className="w-9 h-9 rounded-md flex items-center justify-center text-white text-xs font-bold"
                  title={t.name}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Things I have done 1000 times
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              {skills.map(([left, right]) => (
                <>
                  <span key={left} className="text-sm text-gray-700">{left}</span>
                  <span key={right} className="text-sm text-gray-700">{right}</span>
                </>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black text-sm font-semibold px-5 py-2.5 hover:bg-black hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/aashif-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-800 transition-colors"
            >
              Linkedin profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
