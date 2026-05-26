import { productSystems } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Products() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="What I Build"
        title="Products and systems, not isolated demos."
        description="Each project is designed as a practical system: a problem, a workflow, an interface and a decision-support outcome."
      />

      <div className="mt-10 grid gap-6">
        {productSystems.map((product) => (
          <article
            key={product.title}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/5 transition duration-300 hover:border-orange-500/35 hover:bg-slate-900/80 sm:p-7 lg:p-8"
          >
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/15" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                  <span className="w-fit rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
                    {product.category}
                  </span>

                  <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {product.title}
                </h3>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/45 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {product.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/45 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Solution
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {product.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-3xl border border-slate-800 bg-black/20 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Workflow
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-5 sm:items-center">
                    {product.workflow.map((step, index) => (
                      <div key={step} className="flex items-center gap-3 sm:block">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-center">
                          <p className="text-[0.65rem] font-semibold text-orange-300">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-xs font-medium text-slate-200">{step}</p>
                        </div>
                        {index < product.workflow.length - 1 && (
                          <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-slate-800 sm:mt-3 sm:h-px sm:w-full" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {product.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        link.primary
                          ? "inline-flex justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                          : "inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
                      }
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
