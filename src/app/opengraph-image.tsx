import fs from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aditi Kumar — AI/ML Engineer";

function font(file: string) {
  return fs.readFile(path.join(process.cwd(), "src", "fonts", file));
}

export default async function Image() {
  const [serif, mono, portrait] = await Promise.all([
    font("InstrumentSerif-Regular.ttf"),
    font("GeistMono-Regular.ttf"),
    fs.readFile(path.join(process.cwd(), "public", "aditi.jpg")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          borderTop: "14px solid #111111",
          borderBottom: "14px solid #111111",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: 3,
              color: "#111111",
            }}
          >
            ADITI KUMAR
          </div>
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 52,
              color: "#111111",
              lineHeight: 1.2,
              marginTop: 28,
            }}
          >
            AI and machine learning applied to domains that matter.
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 19,
              letterSpacing: 2,
              color: "#8a8a8a",
              marginTop: 30,
            }}
          >
            ADITIKUMAR.VERCEL.APP
          </div>
        </div>

        <img
          src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
          width={420}
          height={602}
          style={{ objectFit: "cover", filter: "grayscale(1)" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
