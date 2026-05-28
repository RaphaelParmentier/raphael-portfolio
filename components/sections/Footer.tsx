// components/sections/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-black">
      <div className="mx-auto max-w-448 px-6 py-10 sm:px-8 2xl:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
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
        </div>

        <div className="mt-8 border-t border-slate-900 pt-6">
          <p className="text-xs leading-6 text-slate-600">
            © 2026 Raphaël Parmentier — Built with Next.js, TypeScript and TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
