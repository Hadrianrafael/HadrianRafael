import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/LegalDocument";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description: `Como o escritório ${site.brand} trata dados pessoais no site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).`,
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <LegalDocument title="Política de Privacidade" path="/politica-de-privacidade" updated="26 de novembro de 2026">
      <p>
        Esta Política de Privacidade explica como são tratados os dados pessoais de quem utiliza este site, em
        conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, “LGPD”) e com o dever de sigilo
        profissional previsto no Estatuto da Advocacia (Lei nº 8.906/1994).
      </p>

      <h2>1. Controlador e canal de contato</h2>
      <p>
        O controlador dos dados pessoais é o advogado <strong>{site.lawyer.name}</strong>, inscrito na{" "}
        {site.lawyer.oab}, responsável pelo escritório {site.brand}. Para qualquer assunto relacionado a esta política
        ou aos seus dados pessoais, inclusive o exercício de direitos, utilize o e-mail{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Quais dados são tratados</h2>
      <h3>2.1. Formulário de contato</h3>
      <p>
        Ao utilizar o formulário, você informa: nome, telefone, e-mail, assunto e mensagem. Esses dados são
        encaminhados por e-mail ao escritório e <strong>não são armazenados em banco de dados do site</strong>. Pedimos
        que não inclua documentos, dados de saúde, números de processos ou outras informações sensíveis na mensagem.
      </p>
      <h3>2.2. Contato por WhatsApp, telefone e e-mail</h3>
      <p>
        Ao clicar nos botões de WhatsApp, você é direcionado ao aplicativo ou site do WhatsApp, serviço da Meta
        Platforms, sujeito às políticas próprias desse serviço. A mensagem inicial sugerida pode ser editada antes do
        envio. Os dados trocados nesses canais são tratados apenas para a comunicação com você.
      </p>
      <h3>2.3. Dados de navegação</h3>
      <p>
        A infraestrutura de hospedagem pode registrar automaticamente dados técnicos, como endereço IP, data e hora de
        acesso e informações do navegador, para fins de segurança, prevenção de abusos e funcionamento do site.
      </p>
      <h3>2.4. Cookies e métricas</h3>
      <p>
        O site não utiliza cookies de publicidade. Ferramentas de métricas de audiência (como o Google Analytics), quando
        ativadas, somente são carregadas <strong>após o seu consentimento</strong> no aviso de cookies, e podem ser
        recusadas sem prejuízo da navegação. A sua escolha fica registrada no próprio navegador e pode ser alterada a
        qualquer momento em “Preferências de cookies”, no rodapé. Os mapas das unidades também só são carregados se você
        clicar em “Carregar mapa”.
      </p>

      <h2>3. Finalidades e bases legais</h2>
      <ul>
        <li>
          <strong>Responder ao seu contato</strong> e prestar as informações solicitadas: consentimento (art. 7º, I) e
          procedimentos preliminares relacionados a eventual contrato, a pedido do titular (art. 7º, V).
        </li>
        <li>
          <strong>Segurança do site e prevenção de fraudes e spam</strong>: legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong>Métricas de audiência</strong>, quando ativadas: consentimento (art. 7º, I).
        </li>
        <li>
          <strong>Cumprimento de obrigações legais e exercício regular de direitos</strong>: art. 7º, II e VI.
        </li>
      </ul>

      <h2>4. Compartilhamento</h2>
      <p>Os dados não são vendidos nem cedidos para fins comerciais. Podem ser tratados por prestadores de serviço necessários ao funcionamento do site, como:</p>
      <ul>
        <li>serviço de hospedagem do site;</li>
        <li>serviço de envio de e-mails transacionais, utilizado para encaminhar as mensagens do formulário;</li>
        <li>serviço de verificação antirrobô, quando ativado;</li>
        <li>Google, quando você aceita as métricas ou carrega um mapa.</li>
      </ul>
      <p>
        Alguns desses prestadores podem processar dados fora do Brasil, observadas as hipóteses de transferência
        internacional previstas no art. 33 da LGPD. Os dados também poderão ser compartilhados por determinação legal ou
        de autoridade competente.
      </p>

      <h2>5. Prazo de conservação</h2>
      <p>
        As mensagens recebidas são mantidas pelo tempo necessário para responder ao contato e, se for o caso, para o
        cumprimento de obrigações legais ou o exercício regular de direitos. Encerrada a finalidade, os dados são
        eliminados.
      </p>

      <h2>6. Seus direitos</h2>
      <p>Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:</p>
      <ul>
        <li>confirmação da existência de tratamento e acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
        <li>portabilidade, nos termos da regulamentação;</li>
        <li>eliminação dos dados tratados com base no consentimento e revogação do consentimento;</li>
        <li>informação sobre compartilhamentos.</li>
      </ul>
      <p>
        As solicitações podem ser feitas pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>. Você também
        pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>7. Segurança e sigilo</h2>
      <p>
        São adotadas medidas técnicas e organizacionais razoáveis para proteger os dados, como conexão criptografada
        (HTTPS), ausência de armazenamento das mensagens no site e restrição de acesso. As informações compartilhadas
        com o escritório estão, ainda, protegidas pelo sigilo profissional do advogado.
      </p>

      <h2>8. Atendimento automatizado</h2>
      <p>
        Caso seja disponibilizado um canal de atendimento inicial com assistente virtual, ele será identificado como tal
        e servirá apenas para facilitar a comunicação inicial. Esse canal não substitui a análise e a orientação do
        advogado. Evite compartilhar informações sensíveis em canais automatizados.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças legais ou no funcionamento do site. A data da última
        atualização está indicada no início desta página. Consulte também os <Link href="/termos-de-uso">Termos de Uso</Link>.
      </p>
    </LegalDocument>
  );
}
