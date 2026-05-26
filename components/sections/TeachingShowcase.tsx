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
  "Learning by doing",
  "Real projects",
  "Mission-based progression",
  "Professional deliverables",
];

export default function TeachingShowcase() {
  return (
    <section id="teaching" className="relative z-10 mx-auto max-w-[96rem] px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="Teaching & Knowledge Design"
        title="Teaching beyond slides."
        description="Teaching is not a side activity in this portfolio. It is where statistical rigor, AI systems and product thinking become understandable learning experiences."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.25fr_0.75fr] xl:items-stretch">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/10 sm:p-7 2xl:p-9">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(233,121,45,0.16),transparent_46%)]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                  Featured Teaching System
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl 2xl:text-5xl">
                  Teaching Brain Lab
                </h3>
              </div>

              <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                Live
              </span>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-400 sm:text-lg 2xl:text-xl 2xl:leading-9">
              An interactive learning interface built to show how concepts connect:
              data strategy, statistical reasoning, machine learning, AI workflows
              and professional communication.
            </p>

            <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-black/30 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 truncate text-xs text-slate-500">
                  teaching.raphaelparmentier.dev
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#050608]">
                <Image
                  src="/images/teaching-brain-lab-current.png"
                  alt="Teaching Brain Lab interactive learning interface"
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 980px"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {teachingPillars.map((pillar, index) => (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/45 p-4 text-sm font-medium text-slate-200"
                >
                  <span className="mb-2 block text-xs font-semibold text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {pillar}
                </motion.div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://teaching.raphaelparmentier.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Explore Teaching Brain Lab
              </a>
              <a
                href="https://github.com/RaphaelParmentier/teaching-brain-lab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/65 p-5 shadow-2xl shadow-orange-500/5 sm:p-7 2xl:p-9">
          <p className="text-xs uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
            Teaching Journey
          </p>

          <div className="mt-6 space-y-5">
            {teachingMilestones.map((milestone) => (
              <div key={milestone.period} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6">
                <p className="text-sm font-medium text-orange-300 2xl:text-base">{milestone.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white 2xl:text-2xl">{milestone.title}</h3>
                <div className="mt-4 grid gap-2">
                  {milestone.details.map((detail) => (
                    <div key={detail} className="flex gap-3 text-sm leading-6 text-slate-400 2xl:text-base 2xl:leading-7">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5 2xl:p-6">
            <p className="text-sm leading-7 text-orange-100 2xl:text-base 2xl:leading-8">
              Teaching Brain Lab is featured here rather than repeated as a standard
              project card because it represents a broader identity: turning data
              and AI concepts into interactive learning systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
