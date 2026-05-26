export const productSystems = [
  {
    title: "AI Data Quality Auditor",
    status: "Live",
    category: "AI · Data Quality Platform",
    problem: "Validating raw datasets is often slow, manual and inconsistent.",
    solution:
      "A deployed full-stack application that turns CSV and Excel files into quality diagnostics, scoring and AI-assisted analytical reports.",
    workflow: ["Upload", "Checks", "Scoring", "AI Report", "Decision Support"],
    stack: ["Next.js", "FastAPI", "Python", "Pandas", "Gemini", "Vercel", "Render"],
    links: [
      { label: "Live Demo", href: "https://audit.raphaelparmentier.dev", primary: true },
      { label: "GitHub", href: "https://github.com/RaphaelParmentier/ai-data-report-generator" },
      { label: "API Docs", href: "https://ai-data-report-generator-zn71.onrender.com/docs" },
    ],
  },
];
