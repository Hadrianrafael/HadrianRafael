interface SectionHeadingProps {
  id: string;
  index: string;
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "split";
}

export function SectionHeading({ id, index, kicker, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <header
      data-reveal
      className={
        align === "split"
          ? "mb-12 grid gap-6 md:mb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12"
          : "mb-12 max-w-3xl md:mb-16"
      }
    >
      <div>
        <p className="eyebrow">
          <span className="text-faint">{index}</span>
          {kicker}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-5 text-balance text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-paper sm:text-5xl md:text-[3.4rem]"
        >
          {title}
        </h2>
      </div>
      {intro ? (
        <p className={`text-pretty text-base leading-relaxed text-mist sm:text-lg ${align === "left" ? "mt-5 max-w-2xl" : ""}`}>
          {intro}
        </p>
      ) : null}
    </header>
  );
}
