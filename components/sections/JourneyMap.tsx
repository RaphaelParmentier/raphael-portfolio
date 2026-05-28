"use client";

import JourneyMobile from "./JourneyMobile";

import { motion } from "framer-motion";
import { useMemo } from "react";

import { journeySteps } from "@/data/journey";

const principles = ["Scientist", "Statistician", "Builder", "AI Engineer", "Teacher"];

type JourneyMapProps = {
  activeJourneyId: string;
  onJourneyChange: (id: string) => void;
};

export default function JourneyMap({ activeJourneyId, onJourneyChange }: JourneyMapProps) {
  const activeStep = useMemo(
    () => journeySteps.find((step) => step.id === activeJourneyId) ?? journeySteps[0],
    [activeJourneyId]
  );

  const activeIndex = journeySteps.findIndex((step) => step.id === activeStep.id);

  return (
    <section
      id="journey"
      className="relative z-10 mx-auto max-w-448 px-5 py-20 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <div className="max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
          Journey Map
        </p>

        <h2 className="mt-4 max-w-6xl text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl 2xl:text-[5.2rem] 2xl:leading-[0.92]">
          From biological research to AI systems and operational decision support.
        </h2>

        <p className="mt-6 max-w-5xl text-base leading-8 text-slate-400 sm:text-lg xl:text-xl xl:leading-9 2xl:text-[1.3rem] 2xl:leading-10">
          The progression started with experimental biology and statistical reasoning, evolved into
          operational automation and now focuses on AI-powered systems, deployed workflows and
          knowledge transfer.
        </p>
      </div>

      {/* ========================================= */}
      {/* MOBILE VERSION */}
      {/* ========================================= */}

      <JourneyMobile />

      {/* ========================================= */}
      {/* DESKTOP VERSION */}
      {/* ========================================= */}

      <div className="mt-10 hidden gap-6 lg:grid xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch 2xl:mt-16 2xl:gap-12">
        {/* LEFT PANEL */}

        <div className="rounded-4xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/5 backdrop-blur lg:rounded-[2.5rem] 2xl:p-7">
          <div className="grid gap-3 xl:gap-4">
            {journeySteps.map((step, index) => {
              const isActive = step.id === activeStep.id;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => onJourneyChange(step.id)}
                  className={`group w-full rounded-2xl border p-5 text-left transition xl:p-6 2xl:p-7 ${
                    isActive
                      ? "border-orange-500/50 bg-orange-500/10 shadow-[0_0_34px_rgba(233,121,45,0.16)]"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                        isActive
                          ? "border-orange-400/50 bg-orange-500/15 text-orange-200"
                          : "border-slate-700 bg-slate-950 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      <span className="block text-lg font-semibold text-white 2xl:text-xl">
                        {step.title}
                      </span>

                      <span className="mt-1 block text-sm leading-6 text-slate-500 2xl:text-base 2xl:leading-7">
                        {step.subtitle}
                      </span>
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* CURRENT THREAD */}

          <div className="mt-6 rounded-4xl border border-orange-500/20 bg-orange-500/[0.07] p-5 2xl:mt-8 2xl:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
              Current Thread
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-sm 2xl:text-base">
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

        {/* RIGHT PANEL */}

        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-10 shadow-2xl shadow-orange-500/10"
        >
          <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">
            {/* HEADER */}

            <div className="flex items-start justify-between border-b border-slate-800 pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                  {activeStep.eyebrow}
                </p>

                <h3 className="mt-4 text-6xl font-semibold leading-[0.92] tracking-tighter text-white">
                  {activeStep.title}
                </h3>

                <p className="mt-4 text-sm text-slate-500">{activeStep.period}</p>
              </div>

              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs text-slate-300">
                {activeStep.badge}
              </span>
            </div>

            {/* NARRATIVE */}

            <p className="mt-8 text-xl leading-10 text-slate-300">{activeStep.narrative}</p>

            {/* REALIZATION */}

            <blockquote className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6 text-base leading-8 text-orange-100">
              “{activeStep.realization}”
            </blockquote>

            {/* DETAILS */}

            <div className="mt-10 grid gap-8 xl:grid-cols-2">
              {/* EVIDENCE */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Evidence
                </p>

                <div className="mt-4 grid gap-3">
                  {activeStep.proof.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/45 px-4 py-4"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

                      <span className="text-sm leading-7 text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CAPABILITIES */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Capabilities
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-black/20 p-6">
                  <p className="text-sm leading-8 text-slate-400">
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
