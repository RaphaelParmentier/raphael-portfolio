const navigationLinks = [
  { label: "Journey Map", href: "#journey" },
  { label: "Teaching", href: "#teaching" },
  { label: "What I Build", href: "#work" },
  { label: "Currently Building", href: "#building" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  {
    label: "GitHub",
    href: "https://github.com/RaphaelParmentier",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raphaelparmentier/",
  },
  {
    label: "CV PDF",
    href: "/Raphael_Parmentier_CV_EN.pdf",
  },
];

const systemPillars = [
  "Scientific reasoning",
  "Automation systems",
  "AI engineering",
  "Knowledge transfer",
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/40 px-5 py-12 sm:px-6 lg:py-16 2xl:px-10">
      <div className="mx-auto max-w-[112rem]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr] 2xl:gap-16">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 text-2xl font-semibold uppercase tracking-[0.28em] text-orange-400 2xl:text-3xl"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.85)]" />
              RP Systems
            </a>

            <div className="mt-7 grid gap-3">
              {systemPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex gap-3 text-base text-slate-400 2xl:text-lg"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  {pillar}
                </div>
              ))}
            </div>

            <p className="mt-7 max-w-md text-base leading-8 text-slate-500 2xl:text-lg">
              Turning complexity into clarity.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
              Navigation
            </p>

            <div className="mt-5 grid gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-slate-400 transition hover:text-orange-300 2xl:text-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
              Resources
            </p>

            <div className="mt-5 grid gap-3">
              {resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target={resource.href.startsWith("http") ? "_blank" : undefined}
                  rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-base text-slate-400 transition hover:text-orange-300 2xl:text-lg"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
              Let&apos;s connect
            </p>

            <p className="mt-5 max-w-sm text-base leading-8 text-slate-400 2xl:text-lg">
              Open to projects, roles and collaborations around AI, data,
              automation and applied education.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:pro.raphael.parmentier@gmail.com"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/raphaelparmentier/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/RaphaelParmentier"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between 2xl:text-base">
          <p>© 2026 Raphaël Parmentier. All rights reserved.</p>
          <p>Built with Next.js, TypeScript and TailwindCSS · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}