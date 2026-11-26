import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { navigation } from "@/config/site";

export default function NotFound() {
  return (
    <section className="bg-navy-depth relative flex min-h-[80dvh] items-center overflow-hidden pb-20 pt-36 text-white">
      <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
      <div className="container-site relative max-w-3xl">
        <span className="eyebrow eyebrow-light">Erro 404</span>
        <h1 className="display mt-5 text-5xl sm:text-6xl">Página não encontrada</h1>
        <p className="mt-5 max-w-xl text-white/70">
          O endereço acessado não existe ou foi alterado. Você pode voltar à página inicial ou acessar uma das áreas de
          atuação.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-gold">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Página inicial
          </Link>
          <Link href="/contato" className="btn btn-ghost-light">
            Contato
          </Link>
        </div>
        <ul className="mt-12 grid gap-2 sm:grid-cols-2">
          {navigation.areas.map((a) => (
            <li key={a.href}>
              <Link href={a.href} className="glass block rounded-2xl px-5 py-4 text-sm text-white/85 hover:text-white">
                {a.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
