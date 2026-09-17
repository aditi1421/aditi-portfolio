import fs from "fs";
import path from "path";

const LIBRARY_DIR = path.join(process.cwd(), "content", "library");

export type Book = {
  slug: string;
  title: string;
  author: string;
  year: number | null;
  /** Page count, used to give each book a believable thickness in the stack. */
  pages: number;
  cover: string;
  /** Spine colour, sampled from the cover. */
  color: string;
  note: string;
};

export function getBooks(): Book[] {
  const file = path.join(LIBRARY_DIR, "books.json");
  if (!fs.existsSync(file)) return [];

  const raw: unknown = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const b = item as Record<string, unknown>;
    if (typeof b.slug !== "string" || typeof b.title !== "string") return [];

    return [
      {
        slug: b.slug,
        title: b.title,
        author: typeof b.author === "string" ? b.author : "",
        year: Number(b.year) || null,
        pages: Math.max(1, Number(b.pages) || 200),
        cover: typeof b.cover === "string" ? b.cover : "",
        color: typeof b.color === "string" ? b.color : "#444444",
        note: typeof b.note === "string" ? b.note : "",
      },
    ];
  });
}
