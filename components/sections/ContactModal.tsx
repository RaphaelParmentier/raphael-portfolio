type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl shadow-orange-500/20">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Let’s discuss AI, data systems and automation.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Open to AI engineering, data science, automation and consulting
              opportunities.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400 transition hover:border-orange-400 hover:text-orange-300"
          >
            ✕
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pro.raphael.parmentier@gmail.com&su=AI%20%2F%20Data%20Opportunity"
            target="_blank"
            rel="noreferrer"
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
            CV
          </a>
        </div>
      </div>
    </div>
  );
}