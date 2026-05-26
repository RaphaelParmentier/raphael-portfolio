"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const teachingMilestones = [
  {
    period: "2024 — 2025",
    title: "Guest lectures and applied interventions",
    details: [
      "Big Data in healthcare",
      "Databases and data workflows",
      "Statistics and analytical reasoning",
      "Introduction to Machine Learning",
    ],
  },
  {
    period: "2026",
    title: "Strategic Data Analytics",
    details: [
      "Pilot course in the Marketing Digital major",
      "Decision-oriented analytics and applied deliverables",
      "Very positive student and program feedback",
      "Integrated into the official curriculum",
    ],
  },
];

const teachingPillars = [
  {
    title: "Learning by doing",
    text: "Students learn concepts by building concrete analytical outputs.",
  },
  {
    title: "Real projects",
    text: "Learning paths are structured around realistic data and AI missions.",
  },
  {
    title: "Mission-based progression",
    text: "Each activity connects methods, decisions and deliverables.",
  },
  {
    title: "Professional deliverables",
    text: "Outputs are designed to look like work students could reuse.",
  },
];

export default function TeachingShowcase() {
  return (
    <section
      id="teaching"
      className="relative z-10 mx-auto max-w-[112rem] px-5 py-24 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <SectionHeader
        eyebrow="Teaching & Knowledge Design"
        title="Teaching beyond slides."
        description="Teaching is not a side activity in this portfolio. It is where statistical rigor, AI systems and product thinking become understandable learning experiences."
      />

      <div className="mt-12 grid gap-8 xl:grid-cols-[1.45fr_0.55fr] xl:items-stretch 2xl:mt-16 2xl:gap-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-orange-500/10 sm:p-7 lg:p-9 2xl:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(233,121,45,0.16),transparent_48%)]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                  Featured Teaching System
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl 2xl:text-[4.5rem] 2xl:leading-[0.95]">
                  Teaching Brain Lab
                </h3>
              </div>

              <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 2xl:text-sm">
                Live
              </span>
            </div>

            <p className="mt-6 max-w-5xl text-lg leading-9 text-slate-400 xl:text-xl xl:leading-10 2xl:text-2xl 2xl:leading-[1.6]">
              An interactive learning interface built to show how concepts
              connect: data strategy, statistical reasoning, machine learning,
              AI workflows and professional communication.
            </p>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-black/40 shadow-2xl shadow-black/40 2xl:mt-10">
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 truncate text-xs text-slate-500 2xl:text-sm">
                  teaching.raphaelparmentier.dev
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#050608]">
                <Image
                  src="/images/teaching-brain-lab-current.png"
                  alt="Teaching Brain Lab interactive learning interface"
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
                  className="object-contain object-center"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 2xl:mt-9">
              {teachingPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6"
                >
                  <span className="mb-3 block text-xs font-semibold text-orange-300 2xl:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4 className="text-base font-semibold text-white 2xl:text-xl">
                    {pillar.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400 2xl:text-base 2xl:leading-7">
                    {pillar.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap 2xl:mt-10">
              <a
                href="https://teaching.raphaelparmentier.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400 hover:shadow-[0_0_42px_rgba(249,115,22,0.35)] 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                Explore Teaching Brain Lab
              </a>

              <a
                href="https://github.com/RaphaelParmentier/teaching-brain-lab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-slate-700 bg-slate-950/60 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 2xl:px-8 2xl:py-4 2xl:text-base"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/5 sm:p-7 lg:p-8 2xl:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
            Teaching Journey
          </p>

          <div className="mt-7 space-y-6 2xl:mt-9">
            {teachingMilestones.map((milestone, index) => (
              <div
                key={milestone.period}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-7"
              >
                <div className="absolute left-5 top-6 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.6)]" />

                {index < teachingMilestones.length - 1 && (
                  <div className="absolute left-[1.36rem] top-10 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-orange-500/50 to-slate-800" />
                )}

                <div className="pl-7">
                  <p className="text-sm font-medium text-orange-300 2xl:text-base">
                    {milestone.period}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white 2xl:text-3xl">
                    {milestone.title}
                  </h3>

                  <div className="mt-5 grid gap-3">
                    {milestone.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-slate-400 2xl:text-base 2xl:leading-7"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5 2xl:p-7">
            <p className="text-sm leading-7 text-orange-100 2xl:text-base 2xl:leading-8">
              Teaching Brain Lab represents the evolution of my teaching
              approach: connecting statistics, machine learning and AI workflows
              into an interactive learning system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}