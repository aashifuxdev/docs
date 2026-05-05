import { experiences } from "@/data/experience";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12">Work experience</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-gray-50 rounded-sm p-6 flex flex-col gap-3"
            >
              {/* Logo placeholder */}
              <div className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center text-xs font-bold text-gray-500">
                {exp.company[0]}
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">{exp.period}</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {exp.company}
                </p>
                <p className="text-sm font-bold mt-0.5">{exp.role}</p>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
