import { currentlyBuilding } from "@/data/currentlyBuilding";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="relative z-10 mx-auto max-w-[96rem] px-5 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Currently Building"
          title="Career Intelligence Assistant"
          description="A future project designed around the same principle as the portfolio: collect fragmented information, structure it, score it and turn it into decisions."
        />

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/10 sm:p-7">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
                  {currentlyBuilding.status}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white 2xl:text-5xl">
                  {currentlyBuilding.title}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-300">
              {currentlyBuilding.description}
            </p>

            <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm leading-7 text-orange-100">
              {currentlyBuilding.positioning}
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Pipeline
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {currentlyBuilding.pipeline.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-4 text-center">
                    <p className="text-[0.65rem] font-semibold text-orange-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-5 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Sources
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentlyBuilding.sources.map((source) => (
                    <span key={source} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300">
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Planned Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentlyBuilding.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
