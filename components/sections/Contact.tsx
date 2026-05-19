export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-2xl shadow-orange-500/10">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Let’s discuss AI, data systems and automation.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Open to AI engineering, data science, automation and consulting
          opportunities involving analytical systems, operational workflows and
          production-oriented data applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:pro.raphael.parmentier@gmail.com"
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Email me
          </a>

          <a
            href="https://www.linkedin.com/in/raphaelparmentier/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/RaphaelParmentier"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            GitHub
          </a>

            <a
                href="/Raphael_Parmentier_CV_EN.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
                >
                Download CV
            </a>
        </div>
      </div>
    </section>
  );
}