type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-6xl text-center"
          : "max-w-6xl"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-6xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl 2xl:text-[5.2rem] 2xl:leading-[0.92]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-5xl text-base leading-8 text-slate-400 sm:text-lg xl:text-xl xl:leading-9 2xl:text-[1.3rem] 2xl:leading-10">
          {description}
        </p>
      )}
    </div>
  );
}