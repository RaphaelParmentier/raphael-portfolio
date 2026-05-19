const pillars = [
  {
    title: "Scientific rigor",
    text: "Background in biostatistics, regulated pharmaceutical R&D and analytical validation.",
  },
  {
    title: "AI engineering",
    text: "Production-oriented AI systems, LLM workflows and automation pipelines.",
  },
  {
    title: "Business workflows",
    text: "Practical tools designed to improve data review, reporting and operational decision-making.",
  },
];

export default function Positioning() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
        Positioning
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white">
        Scientific rigor, AI systems and practical automation.
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {pillar.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}