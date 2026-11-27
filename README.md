# Hadrian Rafael — Portfólio profissional

Site pessoal de **Hadrian Rafael** ([hadrianrafael.com.br](https://www.hadrianrafael.com.br)): apresentação profissional
multilíngue (português, inglês e espanhol) com trajetória, competências, projetos, formação e currículo em PDF.

> A pasta `marcos-advocacia/` é um **projeto independente** (site MDSilva Advocacia), com `package.json`,
> `vercel.json` e projeto Vercel próprios. Ela não faz parte deste build.

## Tecnologias

| Item | Uso |
| --- | --- |
| Next.js 16 (App Router) | Rotas por idioma, geração estática (SSG), metadados, sitemap, imagens OG |
| React 19 + TypeScript (strict) | Componentes tipados |
| Tailwind CSS 4 | Design system com tokens em `src/app/globals.css` |
| Lucide | Ícones |
| next/font (Geist) | Fontes servidas pelo próprio domínio, sem requisições externas |

Não há banco de dados, API nem variáveis secretas. Todas as páginas são estáticas.

## Estrutura

```
src/
├── app/
│   ├── [locale]/                # /pt, /en, /es (layout raiz com <html lang>)
│   │   ├── page.tsx             # página principal
│   │   ├── curriculo/page.tsx   # currículo online (fonte dos PDFs)
│   │   └── opengraph-image.tsx  # imagem de compartilhamento por idioma
│   ├── global-not-found.tsx     # página 404
│   ├── sitemap.ts · robots.ts · manifest.ts · icon.svg · apple-icon.tsx
│   └── globals.css              # tokens, componentes e estilos de impressão
├── components/
│   ├── layout/                  # Header (menu, idioma), Footer
│   ├── sections/                # Hero, About, Experience, Skills, Projects, Education, Goals, Languages, Contact
│   └── ui/                      # TiltCard, RevealObserver, SectionHeading, ícones de marca…
├── content/
│   ├── profile.ts               # dados pessoais e links (compartilhados)
│   ├── pt.ts · en.ts · es.ts    # todo o texto do site, por idioma
│   └── types.ts                 # tipos do conteúdo
└── lib/seo.ts                   # metadados, hreflang e JSON-LD
public/
├── documents/                   # currículos em PDF (gerados)
└── images/                      # profile/ e projects/
scripts/generate-resume-pdf.mjs  # gera os PDFs a partir de /{locale}/curriculo
```

## Comandos

```bash
pnpm install
pnpm dev            # http://localhost:3000 (redireciona para /pt)
pnpm typecheck
pnpm lint
pnpm build && pnpm start
pnpm check          # typecheck + lint + build
```

## Como atualizar o conteúdo

Todo o texto está em `src/content/pt.ts`, `en.ts` e `es.ts` — **mantenha os três idiomas sincronizados**.
O TypeScript acusa erro se um idioma ficar com campos faltando.

- **Foto profissional:** coloque o arquivo em `public/images/profile/` (ex.: `hadrian-rafael.webp`, retrato 4:5,
  ~1200×1500 px) e preencha `photo: "/images/profile/hadrian-rafael.webp"` em `src/content/profile.ts`.
- **Novo projeto:** adicione um item em `projects.items` nos três idiomas. Campos opcionais: `image`
  (coloque a imagem em `public/images/projects/`, 16:10), `demoUrl` e `repoUrl`. Use `status: "in-progress"` para
  projetos em desenvolvimento. Sem `image`, um mockup é gerado automaticamente.
- **Cursos e certificações:** adicione itens em `education.complementary` (`title`, `issuer`, `year`).
- **Experiências:** `experience.items` (a ordem do array é a ordem exibida).

### Currículo em PDF

O PDF é gerado a partir da página `/{locale}/curriculo`, então site e currículo ficam sempre consistentes.
Depois de alterar o conteúdo:

```bash
NEXT_PUBLIC_SITE_URL=https://hadrianrafael-public.vercel.app pnpm build && pnpm start   # terminal 1
pnpm resume:pdf                   # terminal 2 — gera public/documents/hadrian-rafael-curriculo-{pt,en,es}.pdf
```

O script usa o Playwright (instalação global: `npm i -g playwright && npx playwright install chromium`) e falha se
algum currículo passar de uma página. Faça commit dos PDFs gerados.

## Publicação (Vercel)

Projeto Vercel **`hadrianrafael-public`**: Root Directory = raiz do repositório, Framework Preset = Next.js,
branch de produção `main`. **Todo merge na `main` publica em produção.**

- **URL pública atual:** https://hadrianrafael-public.vercel.app
- **Variável de ambiente (Production):** `NEXT_PUBLIC_SITE_URL=https://hadrianrafael-public.vercel.app`
  (usada em canonical, sitemap, Open Graph, JSON-LD e nos links dos PDFs; é lida no build).

### Quando o domínio próprio estiver pronto

1. No Registro.br (DNS → Editar zona): `CNAME www → d6bbd244367948ff.vercel-dns-017.com.` e, para o domínio sem
   `www`, registros `A` para `216.198.79.1` e `64.29.17.1` (valores indicados pela Vercel).
2. Na Vercel, `hadrianrafael.com.br` está hoje ligado ao projeto `hrtech-saas`; para usá-lo aqui, remova-o de lá e
   adicione-o ao `hadrianrafael-public` com redirecionamento para `www.hadrianrafael.com.br`.
3. Troque `NEXT_PUBLIC_SITE_URL` para `https://www.hadrianrafael.com.br`, regenere os PDFs (`pnpm resume:pdf` com
   a mesma variável no build local), faça commit e um novo deploy.
4. Envie `https://www.hadrianrafael.com.br/sitemap.xml` no Google Search Console.

O projeto do site MDSilva (`marcos-advocacia/`) deve continuar em um projeto Vercel separado, com Root Directory
`marcos-advocacia`. Se ele for alterado no mesmo commit, os dois projetos podem gerar deploy.

## Segurança e desempenho

- Cabeçalhos de segurança em `next.config.ts` (CSP restrita a `'self'`, HSTS, `X-Frame-Options`, `Permissions-Policy`,
  `Cross-Origin-Opener-Policy`).
- Nenhum script de terceiros, rastreamento ou cookie.
- Animações em CSS com um único `IntersectionObserver`; tudo respeita `prefers-reduced-motion` e o conteúdo aparece
  mesmo sem JavaScript.
- Imagens via `next/image` (AVIF/WebP, tamanhos responsivos, lazy loading).

## Dados a confirmar antes de publicar

- Cargo e situação atual na Teleperformance ("Expert", março de 2026 — atual).
- Previsão de conclusão de ADS (dezembro de 2026).
- Cidade exibida (São Paulo, SP) e URL do LinkedIn.
- Autorização para exibir o projeto MDSilva Advocacia e sua captura de tela.
- Foto profissional (`public/images/profile/` + `photo` em `src/content/profile.ts`).
- Cursos e certificações (`education.complementary`; a seção aparece automaticamente quando houver itens).
