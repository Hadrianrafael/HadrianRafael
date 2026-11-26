import Image from "next/image";
import Link from "next/link";
import monograma from "@/assets/marca/monograma-dourado.png";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

/** Monograma oficial (MD com a balança) + nome tipográfico MDSilva Advocacia. */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const isLight = tone === "light";
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <Image
        src={monograma}
        alt=""
        loading="eager"
        sizes="64px"
        className="h-10 w-auto transition-opacity duration-500 group-hover:opacity-85"
      />
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
