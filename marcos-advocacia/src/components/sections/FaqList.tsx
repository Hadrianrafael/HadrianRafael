import { Plus } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-1" data-reveal>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-xl font-semibold leading-snug text-navy-900 sm:text-[1.4rem]">{item.q}</span>
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-line text-gold-600 transition-transform duration-300 group-open:rotate-45">
                <Plus aria-hidden="true" className="size-4" />
              </span>
            </summary>
            <p className="max-w-3xl pb-6 pr-12 text-[0.98rem] leading-relaxed text-slate">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
    </>
  );
}
