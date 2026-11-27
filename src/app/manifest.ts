import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hadrian Rafael — Portfólio",
    short_name: "Hadrian Rafael",
    description: "Portfólio profissional de Hadrian Rafael.",
    start_url: "/pt",
    display: "standalone",
    background_color: "#0b0a0f",
    theme_color: "#0b0a0f",
    lang: "pt-BR",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
