import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg,#1c1b23,#0b0a0f)",
          color: "#f5f3ef",
          fontSize: 78,
          fontWeight: 800,
          letterSpacing: -4,
          position: "relative",
        }}
      >
        HR
        <div style={{ position: "absolute", top: 30, right: 30, width: 22, height: 22, borderRadius: 11, background: "#ff6b1a" }} />
      </div>
    ),
    size,
  );
}
