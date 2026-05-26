"use client";

import { motion } from "framer-motion";
import { journeyPreview } from "@/data/journey";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[92vh] items-center overflow-hidden px-5 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto grid w-full max-w-[96rem] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-xs">
            AI Engineer & Data Scientist
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl 2xl:text-8xl">
            Turning complex information into actionable decisions.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg 2xl:text-xl 2xl:leading-9">
            From biological research and pharmaceutical R&D to operational
            automation, AI engineering and higher education, I design systems
            that help people understand, decide and act.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#08090B]"
            >
              Explore my work
            </a>

            <a
              href="/Raphael_Parmentier_CV_EN.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#08090B]"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 max-w-3xl rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm leading-6 text-slate-400 sm:p-5 2xl:text-base 2xl:leading-7">
            <span className="font-medium text-slate-200">Core thread:</span>{" "}
            scientific reasoning, operational pragmatism and teaching clarity
            applied to AI-powered data products.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-5 2xl:p-7 shadow-2xl shadow-orange-500/10 backdrop-blur sm:p-7">
            <div className="mb-6 flex flex-col gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
                  Career Journey
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  The logic behind the profile
                </p>
              </div>

              <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                Open to roles & missions
              </span>
            </div>

            <div className="space-y-3">
              {journeyPreview.map((item, index) => (
                <a
                  key={item}
                  href="#journey"
                  className="group grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-slate-800 bg-slate-900/45 p-4 transition hover:border-orange-500/40 hover:bg-slate-900/80"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-semibold text-orange-200 shadow-[0_0_24px_rgba(233,121,45,0.18)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {index < journeyPreview.length - 1 && (
                      <div className="mt-2 h-8 w-px bg-gradient-to-b from-orange-500/50 to-slate-800" />
                    )}
                  </div>

                  <div className="pt-1">
                    <p className="text-sm font-medium text-slate-100 2xl:text-base transition group-hover:text-orange-100">
                      {item}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 2xl:text-sm 2xl:leading-6">
                      {index === 0 && "Biology, observation and experimental data"}
                      {index === 1 && "Statistics, bioinformatics and uncertainty"}
                      {index === 2 && "Serebis, processes and business workflows"}
                      {index === 3 && "AI products, automation and deployment"}
                      {index === 4 && "Teaching, clarity and learning systems"}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
