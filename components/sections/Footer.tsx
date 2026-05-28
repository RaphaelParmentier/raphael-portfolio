// components/sections/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
                RP SYSTEMS
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              Scientific reasoning × AI systems × operational thinking.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-600">
            <span>© 2026 Raphaël Parmentier</span>

            <div className="flex gap-5">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
