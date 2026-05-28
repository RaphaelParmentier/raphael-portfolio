import Image from "next/image";

export default function TeachingMobile() {
  return (
    <div className="lg:hidden">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
          Teaching & Knowledge Design
        </p>

        <h2 className="mt-4 text-[2.65rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
          Teaching beyond slides.
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-400">
          I design applied learning experiences where statistics, data and AI workflows become
          concrete systems students can explore.
        </p>
      </div>

      <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#050816]">
        <div className="relative w-full overflow-hidden border-b border-white/10 bg-black">
          <Image
            src="/images/teaching-brain-lab-current.png"
            alt="Teaching Brain Lab"
            width={1200}
            height={675}
            sizes="100vw"
            loading="eager"
            priority
            className="h-auto w-full"
          />
        </div>

        <div className="p-7">
          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs text-orange-300">
            Interactive teaching system
          </div>

          <h3 className="mt-6 text-4xl font-semibold leading-tight text-white">
            Teaching Brain Lab
          </h3>

          <p className="mt-5 text-lg leading-9 text-slate-400">
            An interactive learning interface designed to teach data, analytics and AI workflows
            through realistic projects.
          </p>

          <div className="mt-8 grid gap-3">
            {["Learning by doing", "Real analytical workflows", "Professional deliverables"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/2 px-5 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              )
            )}
          </div>

          <a
            href="https://teaching.raphaelparmentier.dev"
            target="_blank"
            rel="noreferrer"
            className="mt-8 block rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.25)]"
          >
            Explore Teaching Brain Lab
          </a>
        </div>
      </div>
    </div>
  );
}
