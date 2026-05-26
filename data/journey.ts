export type JourneyStep = {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  period: string;
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
    subtitle: "Curiosity, observation and experimental data",
    period: "Biology & early research",
    eyebrow: "Where the questions started",
    narrative:
      "I first wanted to understand living systems: behaviour, adaptation and experimental biology. Field and lab experiences, from ONF work to honeybee learning research, showed me that collecting observations is only the beginning.",
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
    subtitle: "Turning complex biological data into evidence",
    period: "Bioinformatics & Biostatistics",
    eyebrow: "From observation to inference",
    narrative:
      "Bioinformatics and biostatistics became the bridge between scientific curiosity and reliable conclusions. CRISPR prediction, large-scale biological datasets and sperm whale behaviour analysis made the limits of intuition obvious.",
    realization:
      "Data becomes evidence only through rigorous analysis, reproducible workflows and honest uncertainty management.",
    proof: [
      "Master in Bioinformatics and Biostatistics",
      "CRISPR prediction and supervised learning exposure",
      "Big Data, SQL and statistical modelling foundations",
      "Behavioural analysis under uncertainty on ecological data",
    ],
    tools: ["R", "SQL", "Statistics", "Machine Learning", "Big Data"],
  },
  {
    id: "builder",
    title: "Builder",
    shortTitle: "Builder",
    subtitle: "Operational analytics and automation mindset",
    period: "Serebis · 2024 — 2026",
    eyebrow: "The automation pivot",
    narrative:
      "Serebis moved me closer to concrete business problems: fragmented information, repetitive reporting and operational decisions that needed faster feedback loops. I started building tools to reduce manual work and improve visibility.",
    realization:
      "Analysis creates insight. Systems create impact.",
    proof: [
      "Automated reporting workflows for recurring operational follow-up",
      "Excel export consolidation and reliability checks",
      "Inventory monitoring and anomaly-oriented analysis",
      "Maintenance tracking dashboards and decision-support indicators",
    ],
    tools: ["Process analysis", "Automation", "Dashboards", "Reporting", "Operations"],
  },
  {
    id: "engineer",
    title: "AI Engineer",
    shortTitle: "AI",
    subtitle: "Building deployed systems rather than isolated analyses",
    period: "Current transition",
    eyebrow: "From tools to products",
    narrative:
      "AI engineering became the natural extension of my previous work. Statistics taught me how to analyse. Operations taught me where friction lives. Software and AI now let me build systems that scale this reasoning.",
    realization:
      "AI scales analytical thinking when it is connected to workflows, interfaces and real decisions.",
    proof: [
      "Current AI Engineering training path",
      "Full-stack AI Data Quality Auditor deployed with frontend and backend",
      "LLM-assisted reporting and validation workflows",
      "Career Intelligence Assistant planned as an opportunity decision-support system",
    ],
    tools: ["Next.js", "FastAPI", "Python", "LLMs", "Deployment"],
  },
  {
    id: "teacher",
    title: "Teacher",
    shortTitle: "Teaching",
    subtitle: "Knowledge transfer through applied learning experiences",
    period: "Télécom SudParis · 2024 — Present",
    eyebrow: "Clarity as a discipline",
    narrative:
      "Teaching forced me to make complex ideas usable. After early interventions in Big Data for healthcare, databases, statistics and machine learning, I designed a Strategic Data Analytics course for a Marketing Digital major.",
    realization:
      "Teaching forces clarity: if people cannot use the concept, they have not really learned it.",
    proof: [
      "2024-2025 guest lectures in Big Data, databases, statistics and ML",
      "2026 Strategic Data Analytics pilot course",
      "Course integrated into the official curriculum after strong feedback",
      "Teaching Brain Lab built to move beyond static slides",
    ],
    tools: ["Statistics", "Big Data", "Data literacy", "AI education", "Learning design"],
  },
];

export const journeyPreview = [
  "Scientific Foundations",
  "Statistical Reasoning",
  "Operational Automation",
  "AI Engineering",
  "Knowledge Transfer",
];
