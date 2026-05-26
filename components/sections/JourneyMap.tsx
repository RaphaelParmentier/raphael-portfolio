"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { journeySteps } from "@/data/journey";
import SectionHeader from "@/components/ui/SectionHeader";

export default function JourneyMap() {
  const [activeId, setActiveId] = useState(journeySteps[0].id);
  const activeStep = journeySteps.find((step) => step.id === activeId) ?? journeySteps[0];

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="Journey Map"
        title="A trajectory built around evidence, systems and clarity."
        description="The profile is not a straight line from statistics to AI. It is a progression from observing complex systems, to analysing them, to building tools that help people act on them."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/65 p-3 shadow-2xl shadow-orange-500/5 backdrop-blur sm:p-4">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:gap-3 lg:overflow-visible lg:pb-0">
            {journeySteps.map((step, index) => {
              const isActive = step.id === activeId;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={`group min-w-[230px] rounded-2xl border p-4 text-left transition lg:min-w-0 ${
                    isActive
                      ? "border-orange-500/50 bg-orange-500/10 shadow-[0_0_32px_rgba(233,121,45,0.14)]"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                        isActive
                          ? "border-orange-400/50 bg-orange-500/15 text-orange-200"
                          : "border-slate-700 bg-slate-950 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      <span className="block text-base font-semibold text-white">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {step.subtitle}
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/10 sm:p-7 lg:p-8">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                    {activeStep.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {activeStep.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{activeStep.period}</p>
                </div>

                <span className="w-fit rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                  {activeStep.shortTitle}
                </span>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                {activeStep.narrative}
              </p>

              <blockquote className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5 text-sm leading-7 text-orange-100 sm:text-base">
                “{activeStep.realization}”
              </blockquote>

              <div className="mt-7 grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Evidence
                  </p>
                  <div className="mt-3 grid gap-3">
                    {activeStep.proof.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/45 px-4 py-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        <span className="text-sm leading-6 text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Capabilities
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeStep.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-800 bg-black/20 p-4">
                    <p className="text-sm leading-6 text-slate-400">
                      This step explains the next one. The portfolio is designed
                      as a path, not a chronology: each identity adds a practical
                      layer to the way I build data and AI systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
