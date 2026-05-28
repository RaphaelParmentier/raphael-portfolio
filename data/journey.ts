export type JourneyStep = {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  period: string;
  badge: string;
  eyebrow: string;
  narrative: string;
  realization: string;
  proof: string[];
  tools: string[];
};

export const journeySteps: JourneyStep[] = [
  {
    id: "scientist",
    title: "Scientist",
    shortTitle: "Science",
    subtitle: "Observation, biology and experimental systems",
    period: "Biology & early research",
    badge: "2015 — 2020",
    eyebrow: "Where the questions started",
    narrative:
      "I first wanted to understand living systems: behaviour, adaptation and experimental biology. Field and lab experiences showed me that collecting observations is only the beginning.",
    realization:
      "Observation creates data. Scientific reasoning turns it into questions worth testing.",
    proof: [
      "Health Biology background",
      "Early interest in ethology and animal behaviour",
      "Field-oriented scientific work with operational constraints",
      "Experimental research on honeybee learning and behavioural data",
    ],
    tools: ["Biology", "Experimental design", "Observation", "Behavioural data"],
  },
  {
    id: "statistician",
    title: "Statistician",
    shortTitle: "Statistics",
    subtitle: "Evidence, modeling and biological data",
    period: "Bioinformatics, Biostatistics & Pharma R&D",
    badge: "2019 — 2024",
    eyebrow: "From observation to inference",
    narrative:
      "From CRISPR prediction research to sperm whale behavioural analysis and pharmaceutical R&D at GSK and Sanofi, I learned how difficult it is to extract reliable conclusions from noisy biological data. These experiences introduced statistical modelling, uncertainty management and early machine learning workflows applied to experimental biological data.",
    realization:
      "Statistics and machine learning became the bridge between experimental complexity and actionable evidence.",
    proof: [
      "CRISPRdb statistical validation and supervised learning exposure",
      "Unsupervised learning on sperm whale sonar exposure",
      "Biostatistics in regulated pharmaceutical R&D environments",
      "Experimental uncertainty and scientific decision support",
    ],
    tools: [
      "Statistics",
      "Bioinformatics",
      "Machine learning",
      "Biological modelling",
      "R&D workflows",
    ],
  },
  {
    id: "builder",
    title: "Builder",
    shortTitle: "Builder",
    subtitle: "Operational systems and automation",
    period: "Serebis · 2024 — 2026",
    badge: "2024 — 2026",
    eyebrow: "The automation pivot",
    narrative:
      "At Serebis, the focus shifted from research environments to operational constraints: inventory, maintenance, reporting and workflow automation. Building internal tools revealed the gap between analysis and usable systems.",
    realization: "An analysis only matters if people can actually use it inside a workflow.",
    proof: [
      "Operational analytics",
      "Reporting automation",
      "Internal decision-support tools",
      "Process structuring",
    ],
    tools: ["Automation", "Workflow design", "Business operations", "R Shiny", "Internal tooling"],
  },
  {
    id: "engineer",
    title: "AI Engineer",
    shortTitle: "AI",
    subtitle: "Production-oriented AI systems",
    period: "Current transition",
    badge: "2026 — Present",
    eyebrow: "From tools to products",
    narrative:
      "The next step was not only analysing information, but designing complete AI-powered systems: data ingestion, scoring, reporting and decision-support pipelines.",
    realization: "AI became a systems problem: architecture, workflows, interfaces and deployment.",
    proof: [
      "AI Data Quality Auditor",
      "Deployed analytical APIs",
      "LLM-assisted reporting workflows",
      "Career Intelligence Assistant",
    ],
    tools: ["FastAPI", "Next.js", "LangChain", "Cloud deployment", "AI workflows"],
  },
  {
    id: "teacher",
    title: "Teacher",
    shortTitle: "Teaching",
    subtitle: "Making complex systems understandable",
    period: "Télécom SudParis · 2024 — Present",
    badge: "2024 — Present",
    eyebrow: "Clarity as a discipline",
    narrative:
      "Teaching became a natural extension of the work: turning statistical reasoning, AI systems and analytical workflows into practical learning experiences.",
    realization:
      "Understanding is not enough. Students need systems they can explore and build with.",
    proof: [
      "Strategic Data Analytics course",
      "Big Data & healthcare interventions",
      "Interactive teaching systems",
      "Teaching Brain Lab",
    ],
    tools: ["Pedagogy", "Knowledge transfer", "Learning systems", "Communication"],
  },
];

export const journeyPreview = [
  {
    id: "scientist",
    label: "Scientific Foundations",
    description: "Biology, observation and experimental data",
  },
  {
    id: "statistician",
    label: "Statistical Reasoning",
    description: "Evidence, modeling and biological data",
  },
  {
    id: "builder",
    label: "Operational Automation",
    description: "Serebis, processes and business workflows",
  },
  {
    id: "engineer",
    label: "AI Engineering",
    description: "AI products, automation and deployment",
  },
  {
    id: "teacher",
    label: "Knowledge Transfer",
    description: "Teaching, clarity and learning systems",
  },
];
