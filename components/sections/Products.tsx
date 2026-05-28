// components/sections/Products.tsx

import SectionHeader from "@/components/ui/SectionHeader";
import { productSystems } from "@/data/products";

export default function Products() {
  return (
    <section
      id="work"
      className="relative z-10 mx-auto max-w-448 px-5 py-20 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <SectionHeader
        eyebrow="What I Build"
        title="Production systems, not isolated demos."
        description="This section focuses on deployed technical products: AI-powered workflows, analytical applications and decision-support systems built to solve concrete problems."
      />

      {/* MOBILE VERSION — no workflow, no technical stack */}
      <div className="mt-10 grid gap-6 lg:hidden">
        {productSystems.map((product) => (
          <article
            key={product.title}
            className="relative overflow-hidden rounded-4xl border border-slate-800 bg-slate-950/75 p-7 shadow-2xl shadow-orange-500/5"
          >
            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-wrap gap-3">
                <span className="w-fit rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
                  {product.category}
                </span>

                <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  {product.status}
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white">
                {product.title}
              </h3>

              <p className="mt-5 text-lg leading-9 text-slate-400">
                A deployed AI-assisted platform that turns raw datasets into quality diagnostics,
                structured checks and analytical reports.
              </p>

              <div className="mt-7 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
                  Why it matters
                </p>

                <p className="mt-4 text-base leading-8 text-orange-100/85">
                  It demonstrates the full product chain: data ingestion, quality logic, API design,
                  frontend UX, AI-assisted reporting and deployment.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {product.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      link.primary
                        ? "rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                        : "rounded-full border border-slate-700 bg-slate-950/60 px-6 py-4 text-center font-semibold text-slate-200"
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="mt-12 hidden gap-8 lg:grid 2xl:mt-16">
        {productSystems.map((product) => (
          <article
            key={product.title}
            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-orange-500/5 transition duration-300 hover:border-orange-500/35 hover:bg-slate-900/80 sm:p-7 lg:p-10 2xl:p-12"
          >
            <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/15" />
            <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-sky-500/5 blur-3xl" />

            <div className="relative z-10 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start 2xl:gap-14">
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between xl:flex-col xl:items-start">
                  <span className="w-fit rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300 2xl:text-sm">
                    {product.category}
                  </span>

                  <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 2xl:text-sm">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl 2xl:text-[4.5rem] 2xl:leading-[0.95]">
                  {product.title}
                </h3>

                <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-400 xl:text-xl xl:leading-10 2xl:text-2xl 2xl:leading-[1.6]">
                  A deployed full-stack system designed to turn raw files into structured
                  diagnostics, quality scores and AI-assisted analytical reports.
                </p>

                <div className="mt-8 grid gap-4 2xl:mt-10 2xl:gap-5">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                      Problem
                    </p>

                    <p className="mt-3 text-base leading-8 text-slate-300 2xl:text-lg 2xl:leading-9">
                      {product.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                      Solution
                    </p>

                    <p className="mt-3 text-base leading-8 text-slate-300 2xl:text-lg 2xl:leading-9">
                      {product.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-4xl border border-slate-800 bg-black/25 p-5 2xl:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                    Workflow
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-5 sm:items-start 2xl:gap-4">
                    {product.workflow.map((step, index) => (
                      <div key={step} className="relative">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4 text-center transition group-hover:border-orange-500/25 2xl:p-5">
                          <p className="text-[0.65rem] font-semibold text-orange-300 2xl:text-xs">
                            {String(index + 1).padStart(2, "0")}
                          </p>

                          <p className="mt-2 text-xs font-semibold leading-5 text-slate-200 2xl:text-sm 2xl:leading-6">
                            {step}
                          </p>
                        </div>

                        {index < product.workflow.length - 1 && (
                          <div className="absolute left-[calc(100%+0.15rem)] top-1/2 hidden h-px w-[calc(100%-0.3rem)] -translate-y-1/2 bg-linear-to-r from-orange-500/45 to-slate-800 sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-4xl border border-slate-800 bg-slate-900/35 p-5 2xl:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                    Technical stack
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 2xl:gap-3">
                    {product.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 2xl:px-4 2xl:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-4xl border border-orange-500/20 bg-orange-500/7 p-5 2xl:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 2xl:text-sm">
                    Why it matters
                  </p>

                  <p className="mt-3 text-sm leading-7 text-orange-100/85 2xl:text-base 2xl:leading-8">
                    The product demonstrates the full chain: data ingestion, quality logic, API
                    design, frontend UX, AI-assisted reporting and cloud deployment.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap 2xl:mt-10">
                  {product.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        link.primary
                          ? "inline-flex justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400 hover:shadow-[0_0_42px_rgba(249,115,22,0.35)] 2xl:px-8 2xl:py-4 2xl:text-base"
                          : "inline-flex justify-center rounded-full border border-slate-700 bg-slate-950/60 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 2xl:px-8 2xl:py-4 2xl:text-base"
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
