import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
          Selected Work
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          AI systems, automation and analytical products.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A selection of projects focused on applied AI, data workflows,
          automation systems and production-oriented analytical tooling.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}