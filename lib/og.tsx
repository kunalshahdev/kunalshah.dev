import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${site.name} — ${site.role}`;

export function renderOgImage() {
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
          background: "#FAF8F5",
          color: "#1A1815",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8A847C",
            }}
          >
            Portfolio
          </span>
          <span style={{ width: 16, height: 16, borderRadius: 3, background: "#B34A23" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            Kunal Shah<span style={{ color: "#B34A23" }}>.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#514D48" }}>
            Web Developer &amp; Graphic Designer — Kathmandu, Nepal
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.2em",
              color: "#8A847C",
            }}
          >
            Clean · Functional · Made with care
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.2em",
              color: "#B34A23",
            }}
          >
            /{site.githubHandle}
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}
