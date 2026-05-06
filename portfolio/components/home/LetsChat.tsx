const links = [
  { label: "Linkedin profile ↗", href: "https://www.linkedin.com/in/aashif-ali/" },
  { label: "Email ↗",            href: "mailto:hello@aashifali.com" },
  { label: "Instagram ↗",        href: "https://instagram.com/" },
];

export default function LetsChat() {
  return (
    <section className="py-24 md:py-36 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.95] tracking-tight mb-3">
          Let&apos;s chat
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium">
          about Design, Product, Mentorship
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-gray-300 text-sm font-medium px-5 py-2.5 rounded-full text-gray-700 hover:border-black hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
