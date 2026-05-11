"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  status: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  status,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[#1F232B]
        bg-[#111318]
        p-6
      "
    >
      {/* Glow hover */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top,rgba(233,121,45,0.12),transparent_70%)]
        "
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#F3F1EA]">
            {title}
          </h3>

          <span
            className="
              rounded-full
              border
              border-[#E9792D]/30
              bg-[#E9792D]/10
              px-3
              py-1
              text-xs
              uppercase
              tracking-wider
              text-[#FFB45C]
            "
          >
            {status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#8E8A84]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-[#2A2F3A]
                bg-[#0D0F13]
                px-3
                py-1
                text-xs
                text-[#C6C1B8]
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}