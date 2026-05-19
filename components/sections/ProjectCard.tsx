type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  live?: string;
  api?: string;
  status: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  stack,
  highlights,
  github,
  live,
  api,
  status,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-8 transition duration-300 hover:border-orange-500/40 hover:bg-slate-900/80">
      <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
            {category}
          </span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            {status}
          </span>
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-3">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3"
            >
              <div className="h-2 w-2 rounded-full bg-orange-400" />
              <span className="text-sm text-slate-300">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Live Demo
            </a>
          )}

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            GitHub
          </a>

          {api && (
            <a
              href={api}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
            >
              FastAPI Docs
            </a>
          )}
        </div>
      </div>
    </article>
  );
}