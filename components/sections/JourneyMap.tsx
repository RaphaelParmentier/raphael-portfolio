"use client";

import { journeySteps } from "@/data/journey";
import { motion } from "framer-motion";
import { useState } from "react";

const principles = ["Scientist", "Statistician", "Builder", "AI Engineer", "Teacher"];

export default function JourneyMap() {
  const [activeStep, setActiveStep] = useState(journeySteps[0]);

  const activeIndex = journeySteps.findIndex((step) => step.id === activeStep.id);

  return (
    <section
      id="journey"
      className="relative z-10 mx-auto max-w-[112rem] px-5 py-24 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <div className="max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
          Journey Map
        </p>

        <h2 className="mt-4 max-w-6xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl 2xl:text-[5.2rem] 2xl:leading-[0.92]">
          From biological research to AI systems and operational decision support.
        </h2>

        <p className="mt-6 max-w-5xl text-base leading-8 text-slate-400 sm:text-lg xl:text-xl xl:leading-9 2xl:text-[1.3rem] 2xl:leading-10">
          The progression started with experimental biology and statistical reasoning, evolved into
          operational automation and now focuses on AI-powered systems, deployed workflows and
          knowledge transfer.
        </p>
      </div>

      <div className="mt-12 grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch 2xl:mt-16 2xl:gap-12">
        <div className="rounded-[2.5rem] border border-slate-800 bg-slate-950/70 p-4 shadow-2xl shadow-orange-500/5 backdrop-blur sm:p-5 2xl:p-7">
          <div className="flex gap-3 overflow-x-auto pb-2 xl:grid xl:gap-4 xl:overflow-visible xl:pb-0">
            {journeySteps.map((step, index) => {
              const isActive = step.id === activeStep.id;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setActiveStep(step)}
                  className={`group min-w-[250px] rounded-2xl border p-4 text-left transition xl:min-w-0 xl:p-5 2xl:p-6 ${
                    isActive
                      ? "border-orange-500/50 bg-orange-500/10 shadow-[0_0_34px_rgba(233,121,45,0.16)]"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-semibold 2xl:h-12 2xl:w-12 2xl:text-sm ${
                        isActive
                          ? "border-orange-400/50 bg-orange-500/15 text-orange-200"
                          : "border-slate-700 bg-slate-950 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      <span className="block text-base font-semibold text-white 2xl:text-xl">
                        {step.title}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-500 2xl:text-base 2xl:leading-7">
                        {step.subtitle}
                      </span>
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[2rem] border border-orange-500/20 bg-orange-500/[0.07] p-5 2xl:mt-8 2xl:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
              Current Thread
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 2xl:text-base">
              {principles.map((principle, index) => (
                <span key={principle} className="flex items-center gap-2">
                  <span className={index <= activeIndex ? "text-orange-200" : "text-slate-600"}>
                    {principle}
                  </span>

                  {index < principles.length - 1 && <span className="text-orange-500/70">→</span>}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-orange-100/80 2xl:text-base 2xl:leading-8">
              Each step adds one layer to the same operating logic: turning complex information into
              decisions people can use.
            </p>
          </div>
        </div>

        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10 2xl:p-12"
        >
          <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-7 sm:flex-row sm:items-start sm:justify-between 2xl:pb-9">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                  {activeStep.eyebrow}
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl 2xl:text-[4.5rem] 2xl:leading-[0.95]">
                  {activeStep.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500 2xl:text-lg">{activeStep.period}</p>
              </div>

              <span className="w-fit whitespace-nowrap rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 2xl:text-sm">
                {activeStep.badge}
              </span>
            </div>

            <p className="mt-7 max-w-5xl text-lg leading-9 text-slate-300 xl:text-xl xl:leading-10 2xl:text-2xl 2xl:leading-[1.65]">
              {activeStep.narrative}
            </p>

            <blockquote className="mt-7 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5 text-base leading-8 text-orange-100 2xl:p-7 2xl:text-xl 2xl:leading-9">
              “{activeStep.realization}”
            </blockquote>

            <div className="mt-8 grid gap-6 xl:grid-cols-2 2xl:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                  Evidence
                </p>

                <div className="mt-4 grid gap-3 2xl:gap-4">
                  {activeStep.proof.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/45 px-4 py-3 2xl:px-5 2xl:py-4"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

                      <span className="text-sm leading-6 text-slate-300 2xl:text-base 2xl:leading-7">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 2xl:text-sm">
                  Capabilities
                </p>

                <div className="mt-4 flex flex-wrap gap-2 2xl:gap-3">
                  {activeStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 2xl:px-4 2xl:text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-black/20 p-5 2xl:p-6">
                  <p className="text-sm leading-7 text-slate-400 2xl:text-base 2xl:leading-8">
                    This step explains the next one. The portfolio is designed as a path, not a
                    chronology: each identity adds a practical layer to the way I build data and AI
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
