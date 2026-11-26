import { site } from "@/config/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.brand}: ${site.lawyer.name}, ${site.lawyer.oab}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Escritório de advocacia", title: site.tagline });
}
