import Image from "next/image";

export default function TeachingMobile() {
  return (
    <div className="lg:hidden">
      <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#050816]">
        <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
          <Image
            src="/images/teaching-brain-lab-current.png"
            alt="Teaching Brain Lab"
            fill
            sizes="100vw"
            className="object-cover object-top"
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
            className="mt-8 block rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white"
          >
            Explore Teaching Brain Lab
          </a>
        </div>
      </div>
    </div>
  );
}
