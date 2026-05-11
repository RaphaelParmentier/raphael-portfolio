"use client";

import { motion } from "framer-motion";

const tags = [
  "AI Engineering",
  "Data Science",
  "Biostatistics",
  "Teaching",
  "Automation",
  "LLM Apps",
];

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl text-center"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#E9792D]">
          Industrial AI Lab
        </p>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Raphaël Parmentier
        </h1>

        <p className="mt-8 text-xl text-[#C6C1B8] md:text-2xl">
          Consultant IA & Data Scientist
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#8E8A84] md:text-lg">
          Ex-biostatisticien pharma, je conçois des systèmes data et IA fiables,
          explicables et orientés impact métier.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-xl bg-[#E9792D] px-6 py-3 font-medium text-black transition-all hover:scale-105 hover:bg-[#FFB45C]">
            Voir les projets
          </button>

          <button className="rounded-xl border border-[#2A2F3A] bg-[#111318] px-6 py-3 font-medium text-[#F3F1EA] transition-all hover:border-[#E9792D]">
            Télécharger le CV
          </button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.35 + index * 0.08,
                duration: 0.45,
              }}
              className="rounded-full border border-[#2A2F3A] bg-[#111318]/80 px-4 py-2 text-sm text-[#C6C1B8] backdrop-blur"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}