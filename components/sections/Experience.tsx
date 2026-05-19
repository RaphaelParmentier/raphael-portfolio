"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "Apr 2026 — Present",
    title: "Machine Learning Engineer",
    company: "DataScientest / Mines Paris",
    description:
      "Building production-oriented AI systems, ML workflows and deployed analytical applications.",
  },
  {
    period: "Dec 2024 — Present",
    title: "Lecturer",
    company: "Télécom SudParis",
    description:
      "Delivering workshops and applied courses in statistics, Big Data and analytical workflows.",
  },
  {
    period: "Feb 2024 — Feb 2026",
    title: "Optimization Analyst",
    company: "Serebis",
    description:
      "Designed internal automation and AI-assisted operational tools to streamline inventory, maintenance and reporting workflows.",
  },
  {
    period: "Sep 2023 — Jan 2024",
    title: "Preclinical Statistics Consultant",
    company: "Sanofi",
    description:
      "Delivered statistical validation and analytical review supporting decision-making in regulated pharmaceutical R&D programs.",
  },
  {
    period: "Jul 2021 — Aug 2023",
    title: "Preclinical Statistics Consultant",
    company: "GSK",
    description:
      "Contributed to statistical analysis and interpretation for vaccine research programs in cross-functional scientific teams.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#E9792D]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#F3F1EA]">
            From pharmaceutical statistics to AI engineering.
          </h2>

          <p className="mt-6 max-w-2xl text-[#8E8A84]">
            A trajectory combining regulated R&D environments, statistical
            modeling, automation workflows and production-oriented AI systems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-[#2A2F3A]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative pl-16"
              >
                <div className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-[#E9792D] shadow-[0_0_20px_rgba(233,121,45,0.8)]" />

                <p className="text-sm text-[#E9792D]">{exp.period}</p>

                <h3 className="mt-2 text-2xl font-semibold text-[#F3F1EA]">
                  {exp.title}
                </h3>

                <p className="mt-1 text-[#C6C1B8]">{exp.company}</p>

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