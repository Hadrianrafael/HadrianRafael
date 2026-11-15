import { Intro } from "@/components/Intro";
import { Header } from "@/components/Header";
import { Portfolio } from "@/components/Portfolio";
import { getCopy, locales, type Locale } from "@/data/content";
export default async function Page({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;const c=getCopy(locale);return <div id="top"><Intro/><Header locale={locale} nav={c.nav}/><Portfolio locale={locale}/></div>}
export function generateStaticParams(){return locales.map(locale=>({locale}));}
