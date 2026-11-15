import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy, locales, profile, siteUrl, type Locale } from "@/data/content";
import "../globals.css";
export const dynamicParams=false;
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:raw}=await params;if(!locales.includes(raw as Locale))return {};const c=getCopy(raw as Locale);return {title:`${profile.shortName} — ${c.heroLabel}`,description:c.heroText,metadataBase:new URL(siteUrl),alternates:{canonical:`/${raw}`,languages:{"pt-BR":"/pt","en":"/en","es":"/es"}},openGraph:{title:`${profile.shortName} — ${c.heroLabel}`,description:c.heroText,url:`/${raw}`,siteName:profile.shortName,type:"website"},twitter:{card:"summary_large_image",title:profile.shortName,description:c.heroText},robots:{index:true,follow:true}}}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale:raw}=await params;if(!locales.includes(raw as Locale))notFound();const locale=raw as Locale;return <html lang={getCopy(locale).lang}><body>{children}</body></html>}
