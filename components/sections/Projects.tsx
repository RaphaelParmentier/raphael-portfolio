import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
          Selected Work
        </p>

        <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white">
          Production-oriented AI systems and analytical applications.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A focused selection of deployed projects combining AI systems,
          automation workflows, data quality and full-stack engineering.
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