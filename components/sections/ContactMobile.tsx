// components/sections/ContactMobile.tsx

export default function ContactMobile() {
  return (
    <section className="px-5 py-20 lg:hidden">
      <div className="rounded-[36px] border border-white/10 bg-[#050816] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">Contact</p>

        <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tighter text-white">
          Let&apos;s build something useful.
        </h2>

        <p className="mt-6 text-lg leading-9 text-slate-400">
          Open to AI engineering, automation, analytics and teaching collaborations.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <button className="rounded-full bg-orange-500 px-6 py-4 font-semibold text-white">
            Copy email
          </button>

          <a
            href="#"
            className="rounded-full border border-white/10 px-6 py-4 text-center font-semibold text-white"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 px-6 py-4 text-center font-semibold text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
