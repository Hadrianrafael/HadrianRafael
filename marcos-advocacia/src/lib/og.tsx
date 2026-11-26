import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Monograma oficial embutido como data URL (lido no build).
const monograma = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "src/assets/marca/monograma-dourado.png"),
).toString("base64")}`;

export const ogSize = { width: 1200, height: 630 };

/** Imagem Open Graph na identidade visual (azul-marinho + dourado). */
export function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0f1e3b 0%, #070e1c 100%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            border: "1px solid rgba(205,176,122,0.22)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={monograma} alt="" width={92} height={64} style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
              MD<span style={{ color: "#e3cfa3" }}>Silva</span>
            </div>
            <div style={{ fontSize: 14, letterSpacing: 8, color: "rgba(255,255,255,0.55)" }}>ADVOCACIA</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#cdb07a", fontSize: 22, letterSpacing: 4 }}>
            <div style={{ width: 48, height: 2, background: "#cdb07a", display: "flex" }} />
            {eyebrow.toUpperCase()}
          </div>
          <div style={{ marginTop: 24, fontSize: title.length > 70 ? 52 : 62, lineHeight: 1.1, fontWeight: 700, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "rgba(255,255,255,0.6)" }}>
          <span>
            {site.lawyer.name} · {site.lawyer.oab}
          </span>
          <span>São Paulo · Votuporanga</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
