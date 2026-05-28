import Image from "next/image";
import TeachingMobile from "./TeachingMobile";

const teachingPrinciples = [
  {
    id: "01",
    title: "Learning by doing",
    text: "Students learn concepts by building concrete analytical outputs.",
  },
  {
    id: "02",
    title: "Real projects",
    text: "Learning paths are structured around realistic data and AI missions.",
  },
  {
    id: "03",
    title: "Mission-based progression",
    text: "Each activity connects methods, decisions and deliverables.",
  },
  {
    id: "04",
    title: "Professional deliverables",
    text: "Students build systems, reports and analytical workflows inspired by real operational contexts.",
  },
];

const teachingJourney = [
  {
    period: "2024 — 2025",
    title: "Guest lectures and applied interventions",
    items: [
      "Big Data in healthcare",
      "Databases and data workflows",
      "Statistics and analytical reasoning",
      "Introduction to Machine Learning",
    ],
  },
  {
    period: "2026",
    title: "Strategic Data Analytics",
    items: [
      "Pilot course in the Marketing Digital major",
      "Decision-oriented analytics and applied deliverables",
      "Very positive student and program feedback",
      "Integrated into the official curriculum",
    ],
  },
];

export default function TeachingShowcase() {
  return (
    <section
      id="teaching"
      className="relative z-10 mx-auto max-w-448 px-5 py-20 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <TeachingMobile />

      <div className="hidden lg:block">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
            Teaching & Knowledge Design
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl 2xl:text-[6.4rem] 2xl:leading-[0.9]">
            Teaching beyond slides.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-slate-400 xl:text-xl xl:leading-10 2xl:text-[1.35rem] 2xl:leading-10">
            Teaching is not a side activity in this portfolio. It is where statistical rigor, AI
            systems and product thinking become understandable learning experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.1fr_0.75fr] xl:items-stretch 2xl:mt-16 2xl:gap-12">
          <article className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-6 shadow-2xl shadow-orange-500/10 2xl:p-10">
            <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                    Featured teaching system
                  </p>

                  <h3 className="mt-4 text-5xl font-semibold tracking-[-0.045em] text-white 2xl:text-[4.5rem] 2xl:leading-[0.95]">
                    Teaching Brain Lab
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  Live
                </span>
              </div>

              <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-400 2xl:text-xl 2xl:leading-10">
                An interactive learning interface built to show how concepts connect: data strategy,
                statistical reasoning, machine learning, AI workflows and professional
                communication.
              </p>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-black">
                <div className="relative w-full">
                  <Image
                    src="/images/teaching-brain-lab-current.png"
                    alt="Teaching Brain Lab"
                    width={1600}
                    height={900}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {teachingPrinciples.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6"
                  >
                    <p className="text-xs font-semibold text-orange-300">{item.id}</p>

                    <h4 className="mt-3 text-lg font-semibold text-white 2xl:text-xl">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400 2xl:text-base 2xl:leading-8">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://teaching.raphaelparmentier.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400 hover:shadow-[0_0_42px_rgba(249,115,22,0.35)] 2xl:px-8 2xl:py-4 2xl:text-base"
                >
                  Explore Teaching Brain Lab
                </a>

                <a
                  href="https://github.com/RaphaelParmentier/teaching-brain-lab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-slate-700 bg-slate-950/60 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 2xl:px-8 2xl:py-4 2xl:text-base"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </article>

          <aside className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/75 p-6 shadow-2xl shadow-orange-500/5 2xl:p-8">
            <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                Teaching Journey
              </p>

              <div className="mt-7 grid gap-5">
                {teachingJourney.map((step) => (
                  <div
                    key={step.period}
                    className="rounded-3xl border border-slate-800 bg-slate-900/45 p-6 2xl:p-7"
                  >
                    <p className="text-sm font-semibold text-orange-300">{step.period}</p>

                    <h4 className="mt-3 text-2xl font-semibold leading-tight text-white 2xl:text-3xl">
                      {step.title}
                    </h4>

                    <ul className="mt-5 grid gap-3">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-slate-400 2xl:text-base"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-orange-500/20 bg-orange-500/[0.07] p-6">
                <p className="text-sm leading-8 text-orange-100/85 2xl:text-base">
                  Teaching Brain Lab represents the evolution of my teaching approach: connecting
                  statistics, machine learning and AI workflows into an interactive learning system.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
