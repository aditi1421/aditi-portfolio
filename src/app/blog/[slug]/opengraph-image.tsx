import fs from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aditi Kumar";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

const STRIP_HEIGHT = 330;
const FRAME_GAP = 4;

function font(file: string) {
  return fs.readFile(path.join(process.cwd(), "src", "fonts", file));
}

/** Reads a /public image off disk as a data URI, which satori can embed. */
async function dataUri(src: string) {
  const file = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  const bytes = await fs.readFile(file);
  return `data:image/jpeg;base64,${bytes.toString("base64")}`;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  const [serif, mono] = await Promise.all([
    font("InstrumentSerif-Regular.ttf"),
    font("GeistMono-Regular.ttf"),
  ]);

  // Enough frames to run past the right edge at this height.
  const frames = await Promise.all(
    (post?.strip ?? []).slice(0, 5).map(async (image) => ({
      uri: await dataUri(image.src),
      width: Math.round((image.width / image.height) * STRIP_HEIGHT),
    })),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
        }}
      >
        {frames.length > 0 ? (
          <div
            style={{
              display: "flex",
              height: STRIP_HEIGHT + 20,
              background: "#111111",
              padding: "10px 0",
              overflow: "hidden",
            }}
          >
            {frames.map((frame, index) => (
              <img
                key={index}
                src={frame.uri}
                width={frame.width}
                height={STRIP_HEIGHT}
                style={{
                  marginRight: FRAME_GAP,
                  objectFit: "cover",
                  filter: "grayscale(1)",
                }}
              />
            ))}
          </div>
        ) : null}

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
              fontFamily: "Instrument Serif",
              fontSize: 68,
              color: "#111111",
              lineHeight: 1.1,
            }}
          >
            {post?.title ?? "Aditi Kumar"}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 20,
              letterSpacing: 2,
              color: "#8a8a8a",
              marginTop: 22,
            }}
          >
            {`ADITI KUMAR  ·  ${post ? `${post.readingTime} MIN READ` : "BLOG"}`}
          </div>
        </div>
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
