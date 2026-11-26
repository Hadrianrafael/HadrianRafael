import Link from "next/link";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

/** Logotipo tipográfico MDSilva Advocacia. */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`relative grid size-10 place-items-center rounded-[10px] border transition-colors duration-500 ${
          isLight
            ? "border-gold-400/40 bg-white/[0.03] group-hover:border-gold-400/80"
            : "border-gold-500/40 bg-navy-900 group-hover:border-gold-500"
        }`}
      >
        <span className="font-serif text-[1.05rem] font-semibold leading-none tracking-tight text-gold-300">
          MD
        </span>
        <span className="absolute inset-x-2 bottom-1.5 h-px bg-gold-400/50" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.45rem] font-semibold tracking-tight ${
            isLight ? "text-white" : "text-navy-900"
          }`}
        >
          MD<span className={isLight ? "text-gold-300" : "text-gold-700"}>Silva</span>
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em] ${
            isLight ? "text-white/60" : "text-slate"
          }`}
        >
          {" "}Advocacia
        </span>
        <span className="sr-only">, página inicial</span>
      </span>
    </Link>
  );
}
