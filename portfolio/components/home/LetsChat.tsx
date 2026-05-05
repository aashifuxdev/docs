const links = [
  { label: "Linkedin profile ↗", href: "https://www.linkedin.com/in/aashif-ali/" },
  { label: "Email ↗", href: "mailto:aashifali@example.com" },
  { label: "Instagram ↗", href: "https://instagram.com/" },
];

export default function LetsChat() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black leading-none mb-3">
          Let&apos;s chat
        </h2>
        <p className="text-gray-400 text-xl mb-12">
          about Design, Product, Mentorship
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-sm font-medium px-5 py-2.5 rounded-full hover:border-black hover:bg-black hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
