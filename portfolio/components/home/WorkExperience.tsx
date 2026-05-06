import { experiences } from "@/data/experience";

/* Brand-color initials for logo placeholder */
const logoColors: Record<string, string> = {
  "Sketchbrahma Technologies": "#111",
  "Acho":                       "#0057FF",
  "Squash Apps":                "#E84545",
  "Freelancer":                 "#29B2FE",
};

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-10">Work experience</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white p-6 flex flex-col gap-5"
            >
              {/* Logo dot */}
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-black shrink-0"
                style={{ backgroundColor: logoColors[exp.company] ?? "#111" }}
              >
                {exp.company[0]}
              </span>

              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] text-gray-400 font-medium tracking-wide">
                  {exp.period}
                </p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  {exp.company}
                </p>
                <p className="text-sm font-bold text-black mt-0.5">{exp.role}</p>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
