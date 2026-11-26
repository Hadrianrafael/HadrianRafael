import { getAllArticles, getArticle } from "@/content/articles";
import { areaInfo } from "@/content/types";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Conteúdo jurídico · MDSilva Advocacia";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return renderOgImage({
    eyebrow: article ? areaInfo[article.category].label : "Conteúdos jurídicos",
    title: article?.title ?? "Conteúdos jurídicos",
  });
}
