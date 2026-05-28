export default function TeachingMobile() {
  return (
    <div className="grid gap-5 lg:hidden">
      {[
        'Learning by doing',
        'Real projects',
        'Professional deliverables',
      ].map((item) => (
        <div
          key={item}
          className="rounded-3xl border border-white/10 bg-[#050816] p-6"
        >
          <h3 className="text-xl font-semibold text-white">
            {item}
          </h3>
        </div>
      ))}
    </div>
  );
}
