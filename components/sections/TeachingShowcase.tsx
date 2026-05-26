"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const brainNodes = [
  { label: "Statistics", x: "18%", y: "34%" },
  { label: "Data", x: "66%", y: "24%" },
  { label: "ML", x: "74%", y: "62%" },
  { label: "AI", x: "34%", y: "72%" },
  { label: "Decision", x: "48%", y: "47%" },
];

const teachingMilestones = [
  {
    period: "2024 — 2025",
    title: "Guest lectures and applied interventions",
    details: ["Big Data in healthcare", "Databases", "Statistics", "Introduction to Machine Learning"],
  },
  {
    period: "2026",
    title: "Strategic Data Analytics",
    details: ["Pilot course in the Marketing Digital major", "Decision-oriented analytics", "Strong feedback", "Integrated into the official curriculum"],
  },
];

export default function TeachingShowcase() {
  return (
    <section id="teaching" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="Teaching & Knowledge Design"
        title="Teaching beyond slides."
        description="Teaching is not a side activity in this portfolio. It is where statistical rigor, AI systems and product thinking become understandable learning experiences."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-orange-500/10 sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,121,45,0.13),transparent_42%)]" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                  Featured System
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Teaching Brain Lab
                </h3>
              </div>

              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                Live
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              An interactive learning interface built to show how concepts connect:
              statistics, data analysis, machine learning, AI systems and decision-making.
            </p>

            <div className="relative mt-8 aspect-[1.12/1] overflow-hidden rounded-[1.5rem] border border-slate-800 bg-[#090C12] p-4 sm:p-6">
              <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 500 420" aria-hidden="true">
                <path d="M110 190 C120 95 210 50 285 88 C360 40 444 112 418 210 C472 292 388 382 295 340 C210 396 98 336 126 238 C94 226 90 204 110 190Z" fill="none" stroke="rgba(148,163,184,0.22)" strokeWidth="2" />
                <path d="M160 145 C225 180 285 160 350 120" stroke="rgba(233,121,45,0.45)" strokeWidth="2" fill="none" />
                <path d="M170 265 C230 220 305 245 365 300" stroke="rgba(233,121,45,0.32)" strokeWidth="2" fill="none" />
                <path d="M238 102 C265 185 248 250 220 320" stroke="rgba(56,189,248,0.22)" strokeWidth="2" fill="none" />
                <path d="M320 118 C285 195 315 258 270 340" stroke="rgba(56,189,248,0.18)" strokeWidth="2" fill="none" />
              </svg>

              {brainNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-orange-500/25 bg-slate-950/90 px-3 py-2 text-xs font-medium text-orange-100 shadow-[0_0_28px_rgba(233,121,45,0.18)]"
                  style={{ left: node.x, top: node.y }}
                  animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.03, 1] }}
                  transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.25 }}
                >
                  {node.label}
                </motion.div>
              ))}

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-800 bg-black/40 p-4 backdrop-blur">
                <p className="text-sm font-medium text-white">Mission-based learning</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Concepts are presented as pathways, not isolated chapters.
                </p>
              </div>
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

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/65 p-5 shadow-2xl shadow-orange-500/5 sm:p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
            Teaching Journey
          </p>

          <div className="mt-6 space-y-5">
            {teachingMilestones.map((milestone) => (
              <div key={milestone.period} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5">
                <p className="text-sm font-medium text-orange-300">{milestone.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{milestone.title}</h3>
                <div className="mt-4 grid gap-2">
                  {milestone.details.map((detail) => (
                    <div key={detail} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5">
            <p className="text-sm leading-7 text-orange-100">
              The goal is not to make teaching look decorative. It is to show a
              concrete ability to translate complex technical material into tools,
              missions and decisions learners can actually use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
