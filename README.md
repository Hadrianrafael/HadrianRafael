# Hadrian Rafael Portfolio

Portfólio profissional trilíngue (PT-BR, EN, ES) para apresentação de Hadrian Rafael em Business Development & Technology. O projeto é uma aplicação Next.js App Router estática, sem banco de dados, sem formulário e sem segredos.

## Rodar localmente

Requer Node.js 20.9+.

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000/pt`. Validações: `pnpm lint`, `pnpm typecheck`, `pnpm build` e `pnpm audit`.

## Estrutura

- `src/app/[locale]`: rotas PT, EN e ES; a página `/fotos` é independente.
- `src/components`: header, abertura e composição das seções.
- `src/data/content.ts`: conteúdo profissional e traduções manuais.
- `src/data/media.ts`: configuração central das imagens.
- `public/images/profile`, `gallery`, `projects`: pastas reservadas para mídia futura.
- `public/documents`: currículos; os PDFs não são criados até existirem arquivos verdadeiros.

## Atualizações

Edite `src/data/content.ts` para textos e traduções. Para fotos, coloque arquivos otimizados em `public/images/...` e registre cada entrada em `src/data/media.ts`; não use fotos de terceiros para representar a identidade. Serviços são apresentados como oferta freelance e não como projetos entregues: só adicione projetos quando houver dados confirmados.

Os links de currículo são intencionalmente pendentes até os arquivos reais `curriculo-pt.pdf`, `resume-en.pdf` e `cv-es.pdf` serem adicionados em `public/documents/`.

## Segurança e publicação

Headers de segurança são configurados em `next.config.ts`; o site não recebe dados do usuário e não possui endpoints desnecessários. O CSP atual é compatível com os estilos locais e a fonte visual usada; ao trocar fontes ou adicionar analytics, revise-o. Deploy recomendado na Vercel após revisão de domínio e DNS.

Antes de publicar, rode lint, typecheck, build, auditoria de dependências e Lighthouse em PT/EN/ES e nos breakpoints mobile/desktop. Metas de Lighthouse são metas de medição, não resultados presumidos.
