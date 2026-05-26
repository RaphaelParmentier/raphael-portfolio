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
    <div className={align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-5xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl 2xl:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-400 sm:text-lg 2xl:text-xl 2xl:leading-9">
          {description}
        </p>
      )}
    </div>
  );
}
