import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Goals } from "@/components/sections/Goals";
import { Hero } from "@/components/sections/Hero";
import { Languages } from "@/components/sections/Languages";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { JsonLd } from "@/components/ui/JsonLd";
import { getDictionary, isLocale } from "@/content";
import { personJsonLd } from "@/lib/seo";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <>
      <JsonLd data={personJsonLd(locale)} />
      <Hero d={d} locale={locale} />
      <About d={d} />
      <Experience d={d} />
      <Skills d={d} />
      <Projects d={d} />
      <Education d={d} />
      <Goals d={d} />
      <Languages d={d} />
      <Contact d={d} locale={locale} />
    </>
  );
}
