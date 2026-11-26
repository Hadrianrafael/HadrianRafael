import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site, unitList } from "@/config/site";
import { telUrl, whatsappUnitUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

interface UnitsSectionProps {
  topic?: string;
  id?: string;
  title?: string;
  description?: string;
  headingAs?: "h1" | "h2";
}

export function UnitsSection({
  topic,
  id = "unidades",
  title = "Duas unidades, um mesmo compromisso",
  description = "Atendimento em São Paulo e em Votuporanga. Cada unidade possui o próprio canal de contato.",
  headingAs = "h2",
}: UnitsSectionProps) {
  return (
    <section id={id} className="bg-ivory-depth scroll-mt-24 py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Unidades" title={title} description={description} as={headingAs} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {unitList.map((unit, index) => (
            <article
              key={unit.id}
              id={unit.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
              className="card card-hover relative scroll-mt-28 overflow-hidden p-7 sm:p-9"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
              <p className="eyebrow">{unit.state}</p>
              <h3 className="display mt-4 text-4xl text-navy-900">{unit.city}</h3>
              <address className="mt-6 space-y-4 not-italic">
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 text-[0.95rem] leading-relaxed text-slate hover:text-navy-900"
                >
                  <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold-600" />
                  <span>
                    {unit.street}, {unit.number}
                    <br />
                    {unit.district}, {unit.city} - {unit.state}
                    <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-navy-700">
                      Ver no mapa <ArrowUpRight aria-hidden="true" className="size-3" />
                    </span>
                  </span>
                </a>
                <a href={telUrl(unit.phoneE164)} data-channel={`telefone-${unit.id}`} className="flex items-center gap-3 text-[0.95rem] text-slate hover:text-navy-900">
                  <Phone aria-hidden="true" className="size-4 shrink-0 text-gold-600" />
                  {unit.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-[0.95rem] text-slate hover:text-navy-900">
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-gold-600" />
                  {site.email}
                </a>
              </address>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUnitUrl(unit.id, topic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-channel={`whatsapp-${unit.id}`}
                  className="btn btn-navy flex-1"
                >
                  <WhatsAppIcon className="size-[1.1rem] text-gold-300" />
                  WhatsApp {unit.city}
                </a>
                <a href={telUrl(unit.phoneE164)} data-channel={`telefone-${unit.id}`} className="btn btn-outline flex-1 sm:flex-none">
                  <Phone aria-hidden="true" className="size-4" />
                  Ligar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
