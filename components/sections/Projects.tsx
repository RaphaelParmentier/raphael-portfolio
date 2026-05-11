import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Dashboard Trafic Cycliste",
    description:
      "Analyse et visualisation de données de mobilité urbaine avec séries temporelles et dashboards interactifs.",
    stack: ["Python", "Pandas", "Plotly", "Streamlit"],
    status: "Completed",
  },
  {
    title: "Discord AI Bot",
    description:
      "Bot Discord intelligent avec mémoire contextuelle, commandes slash et intégration LLM.",
    stack: ["Python", "Discord.py", "OpenAI", "RAG"],
    status: "In Progress",
  },
  {
    title: "Teaching Analytics",
    description:
      "Outils pédagogiques et visualisations interactives pour l'enseignement data science et statistiques.",
    stack: ["R", "Shiny", "Python", "DataViz"],
    status: "Research",
  },
];

export default function Projects() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#E9792D]">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#F3F1EA]">
            Selected Projects
          </h2>

          <p className="mt-6 max-w-2xl text-[#8E8A84]">
            Une sélection de projets mêlant IA, data science,
            automatisation et ingénierie logicielle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              status={project.status}
            />
          ))}
        </div>

      </div>
    </section>
  );
}