import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div
      data-reveal
      className={`${align === "center" ? "mx-auto text-center items-center" : "items-start"} flex max-w-3xl flex-col ${className}`}
    >
      {eyebrow ? <span className={`eyebrow ${isLight ? "eyebrow-light" : ""}`}>{eyebrow}</span> : null}
      <Tag
        className={`display mt-5 text-[2.35rem] sm:text-5xl lg:text-[3.4rem] ${
          isLight ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${isLight ? "text-white/70" : "text-slate"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
