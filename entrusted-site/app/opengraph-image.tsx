import { ImageResponse } from "next/og";

export const alt = "Entrusted School Psychology Services, LLC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #051224 0%, #0a1a32 45%, #122a45 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>
          School Psychology Services
        </div>
        <div style={{ marginTop: 16, fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Entrusted
        </div>
        <div style={{ marginTop: 20, fontSize: 26, lineHeight: 1.4, maxWidth: 800, opacity: 0.92 }}>
          Bilingual evaluations for Massachusetts & Rhode Island districts
        </div>
        <div style={{ marginTop: 36, fontSize: 18, color: "#d4b96a", fontWeight: 600 }}>
          Bilingual · Trauma-informed · Data-driven
        </div>
        <div style={{ marginTop: 16, fontSize: 20, opacity: 0.9 }}>Cliff Pereira</div>
      </div>
    ),
    { ...size },
  );
}
