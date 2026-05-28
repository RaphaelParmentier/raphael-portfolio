export default function ProductsMobile() {
  return (
    <div className="lg:hidden">
      <div className="rounded-4xl border border-white/10 bg-[#050816] p-8">
        <div className="mb-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300">
          Live platform
        </div>

        <h3 className="text-4xl font-semibold leading-tight text-white">AI Data Quality Auditor</h3>

        <p className="mt-6 text-lg leading-9 text-slate-400">
          A deployed AI-assisted platform that turns raw datasets into quality diagnostics,
          structured checks and analytical reports.
        </p>

        <div className="mt-7 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
            Why it matters
          </p>

          <p className="mt-4 text-base leading-8 text-slate-300">
            It demonstrates the full product chain: data ingestion, quality logic, API design,
            frontend UX, AI reporting and deployment.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href="#"
            className="rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white"
          >
            Live Demo
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 px-6 py-4 text-center font-semibold text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
