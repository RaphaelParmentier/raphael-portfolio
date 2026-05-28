export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-900 bg-black">
      <div className="mx-auto max-w-448 px-6 py-10 sm:px-8 lg:py-16 2xl:px-10">
        {/* MOBILE FOOTER */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.9)]" />

                <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white">
                  RP Systems
                </span>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                Scientific reasoning × AI systems × operational thinking.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/RaphaelParmentier"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-800 px-5 py-2.5 text-sm text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/raphaelparmentier/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-800 px-5 py-2.5 text-sm text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
              >
                LinkedIn
              </a>

              <a
                href="/Raphael_Parmentier_CV_EN.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-800 px-5 py-2.5 text-sm text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
              >
                CV
              </a>
            </div>

            <div className="border-t border-slate-900 pt-6">
              <p className="text-xs leading-6 text-slate-600">
                © 2026 Raphaël Parmentier — Built with Next.js, TypeScript and TailwindCSS.
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP FOOTER */}
        <div className="hidden lg:block">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />

                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white 2xl:text-base">
                  RP Systems
                </span>
              </div>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-500 2xl:text-lg 2xl:leading-9">
                Turning complexity into clarity through scientific reasoning, AI systems, automation
                and applied teaching.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">
                Navigation
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-400 2xl:text-base">
                <a href="#journey" className="transition hover:text-orange-300">
                  Journey
                </a>
                <a href="#teaching" className="transition hover:text-orange-300">
                  Teaching
                </a>
                <a href="#work" className="transition hover:text-orange-300">
                  Work
                </a>
                <a href="#building" className="transition hover:text-orange-300">
                  Building
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">
                Resources
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-400 2xl:text-base">
                <a
                  href="https://github.com/RaphaelParmentier"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-orange-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/raphaelparmentier/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-orange-300"
                >
                  LinkedIn
                </a>
                <a
                  href="/Raphael_Parmentier_CV_EN.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-orange-300"
                >
                  CV PDF
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">
                Contact
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-500 2xl:text-base 2xl:leading-8">
                Open to AI engineering, automation, analytics and teaching collaborations.
              </p>

              <a
                href="mailto:pro.raphael.parmentier@gmail.com"
                className="mt-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-200 transition hover:border-orange-400 hover:bg-orange-500/20"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-slate-900 pt-8 text-xs text-slate-600 2xl:text-sm">
            <span>© 2026 Raphaël Parmentier</span>
            <span>Built with Next.js, TypeScript and TailwindCSS · Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
