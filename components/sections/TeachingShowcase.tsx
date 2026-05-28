import TeachingMobile from "./TeachingMobile";

export default function TeachingShowcase() {
  return (
    <section id="teaching" className="relative mx-auto max-w-400 px-6 py-32 md:px-10">
      {/* VERSION DESKTOP */}
      <div className="hidden lg:block">{/* TON CODE DESKTOP ACTUEL */}</div>

      {/* VERSION MOBILE */}
      <TeachingMobile />
    </section>
  );
}
