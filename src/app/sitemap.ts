import type { MetadataRoute } from "next"; import { siteUrl, locales } from "@/data/content";
export default function sitemap():MetadataRoute.Sitemap{return locales.flatMap(locale=>[{url:`${siteUrl}/${locale}`,lastModified:new Date()},{url:`${siteUrl}/${locale}/fotos`,lastModified:new Date()}]);}
