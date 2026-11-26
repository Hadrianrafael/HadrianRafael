import type { Metadata } from "next";
import { areas } from "@/content/areas";
import { pageMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/sections/AreaPage";

const area = areas.civil;

export const metadata: Metadata = pageMetadata({
  title: area.metaTitle,
  description: area.metaDescription,
  path: area.path,
  keywords: area.keywords,
});

export default function Page() {
  return <AreaPage area={area} />;
}
