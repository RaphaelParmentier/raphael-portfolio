const pipeline = [
  "Sources",
  "Collection",
  "Scoring",
  "LLM Analysis",
  "Email Reports",
];

const sources = ["LinkedIn", "APEC", "France Travail", "Welcome To The Jungle"];

const stack = ["LangChain", "FastAPI", "PostgreSQL", "Next.js", "Docker"];

const capabilities = [
  {
    title: "Opportunity collection",
    text: "Centralize fragmented job opportunities from multiple platforms.",
  },
  {
    title: "Relevance scoring",
    text: "Rank opportunities using profile fit, constraints and strategic value.",
  },
  {
    title: "AI reporting",
    text: "Generate summaries, comparisons and follow-up recommendations.",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section
      id="building"
      className="relative z-10 mx-auto max-w-448 px-5 py-24 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr] xl:items-center 2xl:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
            Currently Building
          </p>

          <h2 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl 2xl:text-[6.4rem] 2xl:leading-[0.9]">
            Career Intelligence Assistant
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-slate-400 xl:text-xl xl:leading-10 2xl:text-[1.35rem] 2xl:leading-10">
            A future project designed around the same principle as this
            portfolio: collect fragmented information, structure it, score it
            and turn it into decisions.
          </p>

          <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.07] p-5 text-orange-100 shadow-[0_0_34px_rgba(249,115,22,0.08)] 2xl:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Product positioning
            </p>
            <p className="mt-3 text-base leading-8 2xl:text-lg 2xl:leading-9">
              Not a chatbot: a decision-support workflow for career search,
              prioritization and follow-up.
            </p>
          </div>
        </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-orange-500/10 sm:p-7 lg:p-10 2xl:p-12">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-7 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="w-fit rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
                  In development
                </span>

                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl 2xl:text-[4.5rem] 2xl:leading-[0.95]">
                  Opportunity intelligence system
                </h3>
              </div>

              <span className="w-fit whitespace-nowrap rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300 2xl:text-sm">
                Next product
              </span>
            </div>

            <p className="mt-7 max-w-5xl text-lg leading-9 text-slate-400 xl:text-xl xl:leading-10 2xl:text-2xl 2xl:leading-[1.6]">
              The assistant will aggregate opportunities, score relevance,
              produce AI summaries and generate actionable reports for job
              search decisions.
            </p>

            <div className="mt-8 rounded-4xl border border-slate-800 bg-black/25 p-5 2xl:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                Pipeline
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-5 sm:items-start 2xl:gap-4">
                {pipeline.map((step, index) => (
                  <div key={step} className="relative">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4 text-center 2xl:p-5">
                      <p className="text-[0.65rem] font-semibold text-orange-300 2xl:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-2 text-xs font-semibold leading-5 text-slate-200 2xl:text-sm 2xl:leading-6">
                        {step}
                      </p>
                    </div>

                    {index < pipeline.length - 1 && (
                      <div className="hidden sm:block absolute left-[calc(100%+0.15rem)] top-1/2 h-px w-[calc(100%-0.3rem)] -translate-y-1/2 bg-linear-to-r from-orange-500/45 to-slate-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 xl:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6"
                >
                  <h4 className="text-base font-semibold text-white 2xl:text-xl">
                    {capability.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400 2xl:text-base 2xl:leading-7">
                    {capability.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-5 xl:grid-cols-2 2xl:mt-9">
              <div className="rounded-4xl border border-slate-800 bg-slate-900/35 p-5 2xl:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                  Sources
                </p>

                <div className="mt-4 flex flex-wrap gap-2 2xl:gap-3">
                  {sources.map((source) => (
                    <span
                      key={source}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 2xl:px-4 2xl:text-sm"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-slate-800 bg-slate-900/35 p-5 2xl:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                  Planned stack
                </p>

                <div className="mt-4 flex flex-wrap gap-2 2xl:gap-3">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 2xl:px-4 2xl:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap 2xl:mt-10">
              <a
                href="#contact"
                className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400 hover:shadow-[0_0_42px_rgba(249,115,22,0.35)] 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                Discuss this project
              </a>

              <a
                href="#work"
                className="inline-flex justify-center rounded-full border border-slate-700 bg-slate-950/60 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                View deployed work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}