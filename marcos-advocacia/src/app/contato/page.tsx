import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { getSiteUrl, site, unitList } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { getContactConfig } from "@/lib/contact-config";
import { telUrl, whatsappUnitUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Contato · Unidades São Paulo e Votuporanga",
  description:
    "Fale com o escritório MDSilva Advocacia: WhatsApp e telefone das unidades de São Paulo e Votuporanga, e-mail, redes sociais, endereços e formulário de contato.",
  path: "/contato",
});

export default function ContatoPage() {
  const { enabled } = getContactConfig();
  const base = getSiteUrl();

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com o escritório"
        lead="Escolha a unidade e o canal de sua preferência. Para o primeiro contato, basta uma breve descrição do assunto."
        crumbs={[{ label: "Contato", href: "/contato" }]}
      />

      <section id="unidades" className="bg-ivory-depth scroll-mt-24 py-16 sm:py-24">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {unitList.map((unit) => (
            <article key={unit.id} id={unit.id} className="card scroll-mt-28 overflow-hidden" data-reveal>
              <div className="p-7 sm:p-9">
                <p className="eyebrow">{unit.name}</p>
                <h2 className="display mt-4 text-4xl text-navy-900">{unit.city}</h2>
                <address className="mt-4 text-[0.95rem] not-italic leading-relaxed text-slate">
                  {unit.street}, {unit.number}
                  <br />
                  {unit.district}, {unit.city} - {unit.state}
                </address>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappUnitUrl(unit.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-channel={`whatsapp-${unit.id}`}
                    className="btn btn-navy"
                  >
                    <WhatsAppIcon className="size-[1.1rem] text-gold-300" />
                    WhatsApp
                  </a>
                  <a href={telUrl(unit.phoneE164)} data-channel={`telefone-${unit.id}`} className="btn btn-outline">
                    <Phone aria-hidden="true" className="size-4" />
                    {unit.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="px-3 pb-3">
                <MapEmbed unit={unit} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="formulario" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Formulário</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">Envie uma mensagem</h2>
            <p className="mt-5 leading-relaxed text-slate">
              Preencha os campos ao lado. A mensagem é encaminhada diretamente ao e-mail do escritório e não fica
              armazenada no site.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-700">E-mail</p>
                <a
                  href={`mailto:${site.email}`}
                  data-channel="email"
                  className="mt-2 inline-flex items-center gap-2 break-all font-medium text-navy-900 link-underline"
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-gold-600" />
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-700">Redes sociais</p>
                <div className="mt-3 flex flex-col gap-3">
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-navy-900 hover:text-navy-600"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-line text-gold-700">
                      <InstagramIcon className="size-[1.1rem]" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">Instagram</span>
                      <span className="block text-xs text-slate">{site.instagram.handle}</span>
                    </span>
                  </a>
                  <a
                    href={site.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-navy-900 hover:text-navy-600"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-line text-gold-700">
                      <FacebookIcon className="size-[1.1rem]" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">Facebook</span>
                      <span className="block text-xs text-slate">{site.facebook.name}</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-ivory p-5 text-xs leading-relaxed text-slate">
                Os canais de contato servem para a comunicação inicial com o escritório. A orientação jurídica depende da
                análise individual de cada situação pelo advogado.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6 shadow-[0_30px_70px_-45px_rgba(11,23,48,0.45)] sm:p-9">
              <ContactForm enabled={enabled} />
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contato | ${site.brand}`,
          url: `${base}/contato`,
          inLanguage: "pt-BR",
          about: { "@id": `${base}/#escritorio` },
        }}
      />
    </>
  );
}
