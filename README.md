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
pnpm build && pnpm start          # terminal 1
pnpm resume:pdf                   # terminal 2 — gera public/documents/hadrian-rafael-curriculo-{pt,en,es}.pdf
```

O script usa o Playwright (instalação global: `npm i -g playwright && npx playwright install chromium`) e falha se
algum currículo passar de uma página. Faça commit dos PDFs gerados.

## Publicação (Vercel)

O repositório já está conectado ao projeto Vercel **`hadrianrafael-public`** (branch de produção `main`, domínio
`www.hadrianrafael.com.br`). **Todo merge na `main` publica em produção.**

> ⚠️ Em 27/11/2026 o projeto estava com **Root Directory = `public`** e **Framework Preset vazio**: a Vercel apenas
> copiava a pasta `public/` e **não executava o build do Next.js** (build de ~40 ms). Antes de publicar, ajuste:

1. Em Project → Settings → Build and Deployment: **Root Directory = vazio (raiz do repositório)** e
   **Framework Preset = Next.js**. Install/Build Command podem ficar no padrão (pnpm é detectado pelo lockfile).
2. Gere um novo deploy de pré-visualização (Redeploy do PR) e revise o site.
3. Recomendado: em Settings → Domains, adicione também `hadrianrafael.com.br` com redirecionamento para
   `www.hadrianrafael.com.br`, para que os dois endereços funcionem.
4. Variável opcional: `NEXT_PUBLIC_SITE_URL` (veja `.env.example`). O padrão já é `https://www.hadrianrafael.com.br`.
5. Faça o merge na `main` e, após o deploy, envie `https://www.hadrianrafael.com.br/sitemap.xml` no Google Search Console.

O projeto do site MDSilva (`marcos-advocacia/`) deve continuar em um projeto Vercel separado, com Root Directory
`marcos-advocacia`. Se ele for alterado no mesmo commit, os dois projetos podem gerar deploy.

## Segurança e desempenho

- Cabeçalhos de segurança em `next.config.ts` (CSP restrita a `'self'`, HSTS, `X-Frame-Options`, `Permissions-Policy`).
- Nenhum script de terceiros, rastreamento ou cookie.
- Animações em CSS com um único `IntersectionObserver`; tudo respeita `prefers-reduced-motion` e o conteúdo aparece
  mesmo sem JavaScript.
- Imagens via `next/image` (AVIF/WebP, tamanhos responsivos, lazy loading).

## Dados a confirmar antes de publicar

Veja a lista atualizada no pull request. Itens principais: situação contratual na Teleperformance, previsão de
conclusão do curso, cidade exibida, URL do LinkedIn, autorização para exibir o projeto MDSilva e a foto profissional.
