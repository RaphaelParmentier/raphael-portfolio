"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — Aujourd'hui",
    title: "Machine Learning Engineering",
    company: "DataScientest / Mines Paris",
    description:
      "Spécialisation en IA appliquée, engineering ML, automatisation et systèmes LLM.",
  },
  {
    period: "2024 — Aujourd'hui",
    title: "Enseignant Universitaire",
    company: "Télécom SudParis",
    description:
      "Cours et TP autour des statistiques, de la data science et du Big Data.",
  },
  {
    period: "2021 — 2024",
    title: "Biostatisticien Préclinique",
    company: "Sanofi / GSK",
    description:
      "Analyses statistiques avancées dans des environnements R&D pharmaceutiques exigeants.",
  },
  {
    period: "2019 — 2021",
    title: "Master Bioinformatique & Biostatistique",
    company: "Université Paris-Saclay",
    description:
      "Formation en statistiques, modélisation, bioinformatique et analyse de données.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-5xl">

        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#E9792D]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#F3F1EA]">
            From Biostatistics to AI Engineering
          </h2>

          <p className="mt-6 max-w-2xl text-[#8E8A84]">
            Une trajectoire construite entre sciences du vivant,
            statistiques avancées, ingénierie data et IA moderne.
          </p>
        </div>

        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[#2A2F3A]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div
                  className="
                    absolute
                    left-[9px]
                    top-2
                    h-3
                    w-3
                    rounded-full
                    bg-[#E9792D]
                    shadow-[0_0_20px_rgba(233,121,45,0.8)]
                  "
                />

                <p className="text-sm text-[#E9792D]">
                  {exp.period}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#F3F1EA]">
                  {exp.title}
                </h3>

                <p className="mt-1 text-[#C6C1B8]">
                  {exp.company}
                </p>

                <p className="mt-4 leading-relaxed text-[#8E8A84]">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}