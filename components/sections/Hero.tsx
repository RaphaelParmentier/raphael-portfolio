export default function Hero() {
  const skills = [
    "GenAI",
    "Data Science",
    "Automation",
    "LLM Apps",
    "Bioinformatics",
    "MLOps",
  ];

  const metrics = [
    {
      value: "3+",
      label: "years in pharma statistics",
    },
    {
      value: "AI",
      label: "automation & LLM systems",
    },
    {
      value: "Teaching",
      label: "university-level pedagogy",
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-orange-300">
            AI Consultant · Data Scientist · Lecturer
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Building intelligent systems with scientific rigor.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Former pharmaceutical statistician specialized in AI systems,
            automation, applied machine learning and data-driven products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              View projects
            </a>

            <a
              href="/cv.pdf"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-2xl shadow-orange-500/10 backdrop-blur">
          <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-sm text-slate-400">AI systems profile</span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Available
            </span>
          </div>

          <div className="space-y-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <div className="text-2xl font-semibold text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
            <p className="text-sm leading-6 text-orange-100">
              Positioning: scientific rigor, production-grade AI workflows,
              data products, and practical automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}