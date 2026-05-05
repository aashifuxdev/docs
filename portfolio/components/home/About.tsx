import Image from "next/image";

const tools = [
  { name: "Figma", icon: "/images/tools/figma.svg" },
  { name: "Principle", icon: "/images/tools/principle.svg" },
  { name: "Adobe XD", icon: "/images/tools/adobexd.svg" },
];

const skills = [
  "End-to-end product design",
  "User research",
  "Visual design",
  "Attention to detail",
  "Information architecture",
  "User experience design",
  "Product strategy",
  "Interaction design",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-72 md:w-72 md:h-80">
            {/* Arched frame effect */}
            <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-100">
              <Image
                src="/images/profile.jpg"
                alt="Aashif Ali"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-black">About me</h2>

          <div>
            <p className="font-semibold text-sm mb-1">Hey! I&apos;m Aashif</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              I come from Erode, a love-excited to the river Kaveri river. I love to explore new
              places and soak in the beauty of the world around me.
            </p>
          </div>

          {/* Tools */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Tools I use
            </p>
            <div className="flex items-center gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="w-8 h-8 relative"
                  title={tool.name}
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Things I have done 1000 times
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {skills.map((skill) => (
                <span key={skill} className="text-sm text-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-black px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition-colors rounded-sm"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/aashif-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors rounded-sm"
            >
              Linkedin profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
