import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { WhatsAppPicker } from "@/components/ui/WhatsAppPicker";

interface ContactBandProps {
  topic?: string;
  title?: string;
  text?: string;
}

/** Chamada para contato: informativa, sem promessas ou apelos comerciais. */
export function ContactBand({
  topic,
  title = "Precisa de orientação jurídica?",
  text = "Entre em contato com o escritório para expor a sua situação. Cada caso é analisado individualmente, com responsabilidade e sigilo profissional.",
}: ContactBandProps) {
  return (
    <section className="bg-navy-depth relative overflow-hidden py-20 text-white sm:py-28">
      <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
      <div className="container-site relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6" data-reveal>
          <span className="eyebrow eyebrow-light">Contato</span>
          <h2 className="display mt-5 text-[2.35rem] sm:text-5xl lg:text-[3.4rem]">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contato#formulario" className="btn btn-ghost-light">
              Enviar mensagem pelo formulário
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a href={`mailto:${site.email}`} data-channel="email" className="btn btn-ghost-light">
              <Mail aria-hidden="true" className="size-4" />
              E-mail
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <WhatsAppPicker defaultTopic={topic} />
        </div>
      </div>
    </section>
  );
}
