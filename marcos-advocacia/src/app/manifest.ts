import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand,
    short_name: site.brandShort,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f1",
    theme_color: "#0b1730",
    lang: "pt-BR",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
