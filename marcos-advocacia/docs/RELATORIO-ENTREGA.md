# Relatório de entrega — Site MDSilva Advocacia

Data: 26/11/2026

## 1. Auditoria inicial (Fase 1)

- O repositório disponível (`hadrianrafael/HadrianRafael`) já continha outro projeto em produção (portfólio pessoal
  em Next.js). Para **não sobrescrevê-lo**, o site do escritório foi criado como projeto independente na pasta
  `marcos-advocacia/`, com dependências próprias.
- A única alteração fora dessa pasta foi incluir `marcos-advocacia/**` nos `ignores` do ESLint da raiz.
- O ambiente de desenvolvimento não tinha permissão para criar um repositório novo `marcos-advocacia`. Se preferir
  um repositório separado, veja a seção 6.

## 2. Páginas entregues (17 URLs indexáveis)

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero, identificação OAB, seletor de unidade para WhatsApp, apresentação, áreas (bento), destaque da campanha, unidades, conteúdos, contato |
| `/sobre` | Advogado, formação (2005), OAB, apresentação institucional, compromissos, áreas |
| `/direito-do-trabalho` | Área + oito temas + destaque da campanha + FAQ |
| `/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio` | Página da campanha (requisitos, comparação, direitos, análise individual, contato, FAQ) |
| `/direito-civil`, `/direito-de-familia`, `/direito-empresarial` | Áreas com temas, FAQ e artigos relacionados |
| `/conteudos` + 6 artigos em `/conteudos/[slug]` | Listagem com filtro por área; artigo com capa, data, categoria, SEO e OG próprios e relacionados |
| `/contato` | Unidades, WhatsApp, telefones, mapas (carregados sob demanda), e-mail, Instagram, Facebook e formulário |
| `/politica-de-privacidade`, `/termos-de-uso` | Documentos legais (LGPD) |

Também foram gerados: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, ícones, imagens Open Graph e a página 404.

## 3. Relatório de testes (Fase 8)

| Verificação | Resultado |
| --- | --- |
| TypeScript (`next typegen && tsc --noEmit`, modo strict) | ✅ sem erros |
| ESLint (`eslint-config-next`) | ✅ sem erros ou avisos |
| Build de produção (`next build`) | ✅ 31 rotas, todas estáticas ou pré-renderizadas |
| Rotas do sitemap (17) | ✅ todas HTTP 200, exatamente um `h1` por página |
| Links internos (17 destinos únicos) | ✅ nenhum quebrado |
| Links de contato | ✅ `wa.me/5511980878572` (SP), `wa.me/5517991708236` (Votuporanga), `tel:` e `mailto:` corretos |
| Separação dos números | ✅ nenhum link de SP com o número de Votuporanga e vice-versa; o número de IA não aparece com a flag desligada |
| Termos vedados (garantias, “consulta grátis”, “100%” etc.) | ✅ nenhuma ocorrência |
| SEO por página (title, description, canonical, og:image, JSON-LD válido) | ✅ |
| Acessibilidade (axe-core, WCAG 2.1 AA + boas práticas) em todas as rotas | ✅ 0 violações |
| Lighthouse mobile (4G simulado): Performance / Acessibilidade / Boas práticas / SEO | ✅ 93–97 / 100 / 100 / 100 · CLS 0 |
| CSP | ✅ nenhuma violação |
| Rolagem horizontal (390 px e 1440 px) | ✅ nenhuma, em 7 páginas verificadas |
| Menu mobile (abre, trava a rolagem, fecha com Esc) | ✅ |
| Menu suspenso desktop (hover, clique, Esc) | ✅ |
| Seletor de unidade e botão flutuante (mensagens contextualizadas) | ✅ |
| Formulário sem credenciais | ✅ desativado, com aviso honesto e canais alternativos |
| Formulário com credenciais fictícias (teste local) | ✅ envio vazio → 6 erros de campo · envio imediato → bloqueado · honeypot → bloqueado · provedor indisponível → mensagem de falha (não simula sucesso) e campos preservados |

Correções feitas durante os testes: contraste do dourado em textos pequenos (WCAG AA), og:image ausente em
subpáginas, títulos e descrições longos, ordem de cabeçalhos, Zod removido do bundle do navegador (causava alerta de
CSP), animação de entrada que atrasava o LCP, nome acessível do logotipo, conflito entre hover e clique no menu,
capas de artigo com gradiente invisível e quebra de data nos cartões.

Limitação: os testes foram feitos com Chromium (desktop, emulação de iPhone 13 e Pixel 7). Recomenda-se uma
verificação manual final em um iPhone e um Android reais após o deploy.

## 4. Integrações que dependem de credenciais

| Integração | O que é necessário | Variáveis |
| --- | --- | --- |
| Envio do formulário | Conta no Resend + domínio verificado | `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` |
| Domínio oficial | Domínio registrado e apontado para a Vercel | `NEXT_PUBLIC_SITE_URL` |
| Google Analytics 4 / GTM | ID da propriedade | `NEXT_PUBLIC_GA_ID` ou `NEXT_PUBLIC_GTM_ID` |
| Google Search Console | Verificação do domínio | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (ou DNS) |
| Antirrobô (recomendado) | Widget Cloudflare Turnstile | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |
| Facebook | URL exata da página “MDSilva - Advocacia” | `NEXT_PUBLIC_FACEBOOK_URL` |
| Atendimento com IA | Integração ativa no número (11) 97871-0130 | `NEXT_PUBLIC_AI_ATTENDANCE_ENABLED=true` |

## 5. Revisão obrigatória pelo advogado antes de publicar

- [ ] Textos das quatro áreas (`src/content/areas.ts`) e respectivas FAQs.
- [ ] Página da campanha de vínculo empregatício.
- [ ] Os seis artigos iniciais (`src/content/articles/`), em especial as citações legais e a menção às normas do CNJ
      sobre divórcio e inventário extrajudiciais.
- [ ] Política de Privacidade e Termos de Uso (controlador, canal do titular, prazos de conservação).
- [ ] Confirmar que os números de São Paulo e Votuporanga usam WhatsApp.
- [ ] Confirmar o endereço da página do Facebook.
- [ ] Opcional: fornecer uma fotografia profissional e o domínio desejado.

Nenhuma informação além das fornecidas foi criada: não há biografia, especializações, clientes, depoimentos,
resultados, CNPJ, horários de atendimento ou avaliações.

## 6. Como colocar em produção

1. Revisar os conteúdos (seção 5) e aprovar a publicação.
2. Mesclar o pull request do branch `claude/marcos-advocacia-site-gbki03`. Se preferir um repositório exclusivo, crie
   `marcos-advocacia` no GitHub e copie o conteúdo da pasta `marcos-advocacia/` para a raiz do novo repositório.
3. Na Vercel: **Add New → Project**, importar o repositório, definir **Root Directory = `marcos-advocacia`** (apenas
   se o projeto continuar dentro deste repositório) e fazer o deploy.
4. Configurar o domínio e as variáveis da seção 4, depois fazer um novo deploy.
5. Testar em produção: formulário (mensagem real), WhatsApp das duas unidades, aviso de cookies (se houver
   GA/GTM).
6. Enviar o `sitemap.xml` no Search Console e atualizar o Google Business Profile das duas unidades.

> Nenhum deploy em produção foi feito sem autorização.
