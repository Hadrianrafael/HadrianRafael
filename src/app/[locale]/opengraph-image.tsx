import { ImageResponse } from "next/og";
import { getDictionary, isLocale, locales, profile } from "@/content";

export const alt = "Hadrian Rafael";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const d = getDictionary(isLocale(locale) ? locale : "pt");

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
          background: "radial-gradient(circle at 88% 0%, rgba(255,107,26,0.35), rgba(11,10,15,0) 55%), #0b0a0f",
          color: "#f5f3ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "#16141c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            HR
          </div>
          <div style={{ fontSize: 24, color: "#b9b6c0", letterSpacing: 4, textTransform: "uppercase" }}>
            {profile.websiteLabel}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 28, fontSize: 36, color: "#ff8c42", maxWidth: 950, lineHeight: 1.25 }}>{d.meta.jobTitle}</div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Next.js", "React", "TypeScript", "AI", "B2B"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 22,
                color: "#b9b6c0",
              }}
            >
              {t}
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ width: 120, height: 6, borderRadius: 3, background: "linear-gradient(90deg,#ff6b1a,#e8383d)", alignSelf: "center" }} />
        </div>
      </div>
    ),
    size,
  );
}
