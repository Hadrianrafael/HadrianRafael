import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/LegalDocument";

export const metadata: Metadata = pageMetadata({
  title: "Termos de Uso",
  description: `Condições de uso do site do escritório ${site.brand}.`,
  path: "/termos-de-uso",
});

export default function TermsPage() {
  return (
    <LegalDocument title="Termos de Uso" path="/termos-de-uso" updated="26 de novembro de 2026">
      <p>
        Ao acessar este site, você concorda com os termos abaixo. Caso não concorde, recomendamos não utilizar o site.
      </p>

      <h2>1. Finalidade do site</h2>
      <p>
        Este site tem caráter <strong>exclusivamente informativo e institucional</strong>, em observância ao Estatuto
        da Advocacia (Lei nº 8.906/1994), ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho
        Federal da OAB. Seu objetivo é apresentar o escritório {site.brand}, o advogado {site.lawyer.name} (
        {site.lawyer.oab}), as áreas de atuação e conteúdos jurídicos educativos.
      </p>

      <h2>2. Conteúdo informativo</h2>
      <p>
        Os textos publicados têm natureza geral e educativa, refletem a legislação e o entendimento na data de sua
        publicação e podem ficar desatualizados. Eles <strong>não constituem consultoria ou parecer jurídico</strong>{" "}
        e não substituem a análise individual de cada situação por advogado.
      </p>
      <p>
        Nenhuma informação do site representa promessa ou garantia de resultado. Cada caso depende de seus fatos,
        provas e particularidades.
      </p>

      <h2>3. Contato e relação profissional</h2>
      <p>
        O envio de mensagens pelo formulário, por WhatsApp, telefone ou e-mail tem a finalidade de comunicação inicial
        e <strong>não estabelece, por si só, relação entre advogado e cliente</strong>. Eventual contratação de serviços
        jurídicos dependerá de análise do caso e de ajuste próprio entre as partes.
      </p>
      <p>
        Recomenda-se não enviar, no primeiro contato, documentos ou informações sensíveis. Canais de atendimento
        automatizado, quando existentes, servem apenas para facilitar a comunicação inicial e não substituem a atuação
        do advogado.
      </p>

      <h2>4. Uso adequado</h2>
      <p>É vedado utilizar o site para:</p>
      <ul>
        <li>enviar conteúdo ilícito, ofensivo, falso ou que viole direitos de terceiros;</li>
        <li>enviar mensagens automatizadas, em massa ou com finalidade publicitária;</li>
        <li>tentar acessar áreas restritas, comprometer a segurança ou o funcionamento do site.</li>
      </ul>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Os textos, a identidade visual e os demais elementos do site pertencem ao escritório {site.brand}, salvo
        indicação em contrário. É permitido compartilhar links para os conteúdos. A reprodução integral ou parcial dos
        textos depende de autorização prévia e da indicação da fonte.
      </p>

      <h2>6. Links externos</h2>
      <p>
        O site contém links para serviços de terceiros, como WhatsApp, Instagram, Facebook e Google Maps. Esses serviços
        possuem termos e políticas próprios, pelos quais o escritório não se responsabiliza.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais é descrito na <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>

      <h2>8. Alterações e legislação aplicável</h2>
      <p>
        Estes termos podem ser atualizados a qualquer momento, com indicação da data da última atualização. Aplica-se a
        legislação brasileira. Dúvidas podem ser enviadas para <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalDocument>
  );
}
