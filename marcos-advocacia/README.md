# MDSilva Advocacia — site institucional

Site institucional do escritório de advocacia de **Marcos Danilo da Silva (OAB/SP 309.058)**, com unidades em
**São Paulo** e **Votuporanga**. Caráter exclusivamente informativo, em conformidade com o Estatuto da Advocacia, o
Código de Ética e Disciplina da OAB e o Provimento nº 205/2021.

> Relatório de testes e pendências: [`docs/RELATORIO-ENTREGA.md`](docs/RELATORIO-ENTREGA.md) ·
> Auditoria visual com capturas: [`docs/auditoria-visual/RELATORIO-AUDITORIA.md`](docs/auditoria-visual/RELATORIO-AUDITORIA.md)

## Tecnologias

| Item | Versão |
| --- | --- |
| Next.js (App Router, Turbopack) | 16.4 |
| React | 19 |
| TypeScript | 6 (modo `strict`) |
| Tailwind CSS | 4 (configuração CSS-first em `src/app/globals.css`) |
| Lucide Icons | 1.x |
| Zod | 4 (validação do formulário, somente no servidor) |
| Hospedagem | Vercel |

Todas as páginas são geradas estaticamente (SSG). O único código de servidor em tempo de execução é a *server action*
do formulário de contato.

## Estrutura

```
marcos-advocacia/
├── public/images/conteudos/     # capas dos artigos (SVG gerado ou fotos)
├── scripts/generate-cover.mjs   # gera a capa de um novo artigo
├── src/
│   ├── app/                     # rotas (App Router)
│   │   ├── page.tsx             # página inicial
│   │   ├── sobre/
│   │   ├── direito-do-trabalho/
│   │   │   └── reconhecimento-de-vinculo-empregaticio/   # página da campanha
│   │   ├── direito-civil/  direito-de-familia/  direito-empresarial/
│   │   ├── conteudos/  conteudos/[slug]/                  # artigos
│   │   ├── contato/  (page.tsx + actions.ts)              # formulário
│   │   ├── politica-de-privacidade/  termos-de-uso/
│   │   ├── sitemap.ts  robots.ts  manifest.ts  opengraph-image.tsx  icon.svg
│   ├── components/  (layout/, sections/, forms/, ui/)
│   ├── config/site.ts           # FONTE ÚNICA dos dados do escritório
│   ├── content/                 # áreas de atuação e artigos
│   └── lib/                     # SEO, WhatsApp, consentimento, formulário
├── .env.example
└── next.config.ts               # cabeçalhos de segurança e CSP
```

## Instalação e execução local

Requisitos: **Node.js 20.9 ou superior** (recomendado 22, ver `.nvmrc`) e npm.

```bash
cd marcos-advocacia
npm install
cp .env.example .env.local   # opcional: preencha apenas o que tiver
npm run dev                  # http://localhost:3000
```

Comandos de verificação:

```bash
npm run typecheck   # gera os tipos de rota e roda o TypeScript
npm run lint        # ESLint
npm run build       # build de produção
npm start           # serve o build de produção
```

## Variáveis de ambiente

Todas são **opcionais**: sem elas o site funciona e cada integração fica desativada de forma transparente. Nenhum
ID fictício foi inserido. A lista comentada está em [`.env.example`](.env.example).

| Variável | Para quê | Sem ela |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Domínio oficial (canonical, sitemap, OG, JSON-LD) | usa o domínio de produção da Vercel |
| `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` | Envio real do formulário | formulário exibido como “ainda não ativo” |
| `CONTACT_TO_EMAIL` | Destinatário das mensagens | `mdireitosilva@yahoo.com.br` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Verificação antirrobô Cloudflare | só honeypot, tempo mínimo e limite por IP |
| `NEXT_PUBLIC_GA_ID` ou `NEXT_PUBLIC_GTM_ID` | Google Analytics 4 / Tag Manager | sem métricas e sem aviso de cookies |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Verificação no Search Console | — |
| `NEXT_PUBLIC_FACEBOOK_URL` | Link exato da página do Facebook | link para a busca por “MDSilva - Advocacia” |
| `NEXT_PUBLIC_AI_ATTENDANCE_ENABLED` | Exibe o canal de atendimento com IA | canal oculto |

> As variáveis são lidas **no build**. Depois de criar ou alterar qualquer uma na Vercel, faça um novo deploy
> (Deployments → ⋯ → Redeploy).

## Publicação na Vercel

O site é publicado por um **projeto Vercel próprio, chamado `marcos-advocacia`**, com Root Directory
`marcos-advocacia`. O projeto `hadrianrafael-public`, que já existe na mesma conta, publica o portfólio da raiz deste
repositório e **não deve ser alterado**. O deploy de pré-visualização que ele gera nos pull requests é do portfólio,
não deste site.

### Trava de produção (`vercel.json`)

O arquivo [`vercel.json`](vercel.json) desta pasta (lido somente pelo projeto `marcos-advocacia`) contém:

```json
"git": { "deploymentEnabled": { "main": false } }
```

Com isso, commits e merges na branch `main` **não publicam em produção**. Branches e pull requests continuam
gerando deploys de pré-visualização, que não são indexados (`robots.txt` bloqueia previews). Para autorizar a
publicação, troque `false` por `true` e faça commit em `main`: esse commit dispara o deploy de produção.

### Passo a passo

1. **Mesclar o PR** que adiciona esta pasta à `main`. Isso é seguro: a trava acima impede a publicação deste site,
   e o portfólio não muda (seu código fica fora de `marcos-advocacia/`). O `hadrianrafael-public` fará o
   redeploy habitual do portfólio, com o mesmo conteúdo.
2. Em [vercel.com/new](https://vercel.com/new), no mesmo time da Vercel, clique em **Import** no repositório
   `Hadrianrafael/HadrianRafael`.
3. Na tela **Configure Project**:
   - **Project Name:** `marcos-advocacia`
   - **Framework Preset:** Next.js (detectado)
   - **Root Directory:** clique em **Edit** e selecione `marcos-advocacia`
   - **Build/Install Commands:** manter o padrão (o `vercel.json` define `npm ci` e `npm run build`)
   - **Environment Variables:** cadastrar as disponíveis (ver tabela acima)
4. Clique em **Deploy**. Por causa da trava, a Vercel pode criar o projeto sem publicar nada, ou fazer um único
   deploy inicial no endereço `marcos-advocacia.vercel.app` (ou variação). Se houver esse deploy inicial e você
   ainda não quiser o site no ar, use **Settings → Deployment Protection → Vercel Authentication** para restringir
   o acesso, ou exclua o deploy em **Deployments**.
5. Confira a pré-visualização em um pull request ou branch qualquer.
6. **Publicar (somente com autorização):** altere `"main": false` para `"main": true` no `vercel.json` e faça
   commit em `main`.
7. **Domínio:** em Project → Settings → Domains, adicione o domínio do escritório e siga as instruções de DNS. Depois
   cadastre `NEXT_PUBLIC_SITE_URL` e faça um novo deploy.

> As variáveis de ambiente são lidas no build: após criar ou alterar uma variável, é preciso novo deploy
> (Deployments → ⋯ → Redeploy).

## Integrações

### Formulário de contato (Resend)

1. Crie uma conta em [resend.com](https://resend.com) e verifique o domínio do escritório (registros DNS indicados
   pelo Resend).
2. Gere uma API key com permissão de envio.
3. Cadastre `RESEND_API_KEY` e `CONTACT_FROM_EMAIL` (ex.: `Site MDSilva <contato@dominio.com.br>`) na Vercel e
   faça um novo deploy.
4. Teste enviando uma mensagem pelo site.

O formulário **nunca simula envio**: só informa sucesso quando o provedor confirma o envio. As mensagens não são
armazenadas no site: existem apenas no e-mail recebido. O log do servidor registra somente códigos de erro, nunca o
conteúdo.

Proteções antispam: campo honeypot, tempo mínimo de preenchimento, limite de 5 envios a cada 10 minutos por IP (em
memória, melhor esforço em ambiente serverless) e, opcionalmente, Cloudflare Turnstile.

### Cloudflare Turnstile (opcional, recomendado)

Crie um widget em Cloudflare → Turnstile, informe o domínio e cadastre `NEXT_PUBLIC_TURNSTILE_SITE_KEY` e
`TURNSTILE_SECRET_KEY`. A CSP libera `challenges.cloudflare.com` automaticamente quando a chave existe.

### Google Analytics 4 / Tag Manager

Cadastre `NEXT_PUBLIC_GA_ID` (G-XXXXXXXXXX) **ou** `NEXT_PUBLIC_GTM_ID` (GTM-XXXXXXX). Com um deles configurado, o site
passa a exibir o aviso de cookies; os scripts só carregam após o aceite do visitante (LGPD). Cliques em WhatsApp,
telefone e e-mail geram os eventos `contato_whatsapp`, `contato_telefone` e `contato_email`, com o parâmetro
`canal` (ex.: `whatsapp-sao-paulo`). Nenhum dado pessoal é enviado.

### Google Search Console

1. Adicione a propriedade do domínio no Search Console.
2. Método “Tag HTML”: copie apenas o valor de `content` e cadastre em `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   (ou use a verificação por DNS, que dispensa a variável).
3. Após o deploy, verifique e envie o sitemap: `https://SEU-DOMINIO/sitemap.xml`.
4. Recomenda-se também criar/atualizar os perfis do **Google Business Profile** das duas unidades, com os mesmos
   endereços e telefones do site (SEO local).

### WhatsApp e atendimento com IA

- Unidade São Paulo: (11) 98087-8572 · Unidade Votuporanga: (17) 99170-8236. Cada botão usa exclusivamente o número da
  unidade escolhida, com mensagem inicial neutra (`src/lib/whatsapp.ts`).
- O número **(11) 97871-0130** está reservado ao atendimento com IA (`aiAttendance` em `src/config/site.ts`) e não é
  exibido enquanto `NEXT_PUBLIC_AI_ATTENDANCE_ENABLED` não for `true`. Quando ativado, aparece apenas na página da
  campanha, identificado como atendimento automatizado que não substitui o advogado.

## Como atualizar o conteúdo

### Dados do escritório

Edite **somente** `src/config/site.ts` (nome, OAB, e-mail, telefones, endereços, redes). Todas as páginas, o rodapé, o
WhatsApp e os dados estruturados leem dali.

### Publicar um novo artigo

1. Copie um arquivo de `src/content/articles/` (ex.: `verbas-rescisorias.ts`) com um novo nome.
2. Ajuste `slug` (apenas letras minúsculas, números e hífens), `title`, `excerpt` (até ~160 caracteres, usado como
   descrição no Google), `category` (`trabalho`, `civil`, `familia` ou `empresarial`), `date` (AAAA-MM-DD),
   `keywords` e os blocos de conteúdo.
   - Blocos disponíveis: `p`, `h2`, `h3`, `ul`, `ol`, `quote`, `callout`.
   - Marcação no texto: `**negrito**` e `[texto do link](/caminho)`.
3. Gere a capa: `node scripts/generate-cover.mjs <slug> <categoria>`, ou coloque uma foto própria (JPG/WebP,
   1200×750) em `public/images/conteudos/` e aponte `cover.src` para ela, com um `alt` descritivo.
4. Registre o artigo na lista de `src/content/articles/index.ts`.
5. Rode `npm run build` e faça commit. O artigo entra automaticamente na listagem, no sitemap, nos relacionados e
   ganha imagem Open Graph própria.
6. Ao revisar um artigo, preencha `updated` com a data da revisão.

### Áreas de atuação

Textos, temas e perguntas frequentes estão em `src/content/areas.ts`.

### Foto do advogado

O site não usa fotos (nenhuma foi fornecida). Para incluir uma, salve-a em `public/images/` e substitua o cartão de
identificação em `src/app/sobre/page.tsx` por `next/image`.

## Diretrizes de ética (obrigatórias ao editar)

Conteúdo informativo e institucional. **Não** publicar: promessas ou garantias de resultado, valores de indenização,
resultados de processos, depoimentos de clientes, comparações com outros advogados, valores de honorários,
linguagem sensacionalista ou chamadas de captação (“consulta grátis”, “ganhe sua causa”). Não inventar biografia,
especializações, clientes ou dados não confirmados pelo advogado.

## Segurança e privacidade

- CSP restritiva gerada em `next.config.ts`, liberando domínios de terceiros apenas para integrações configuradas;
  HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- Nenhum dado de formulário é armazenado; validação no servidor com Zod.
- Mapas do Google e métricas só carregam com ação/consentimento do visitante.
- `.env*` está no `.gitignore`; nunca versione credenciais.
