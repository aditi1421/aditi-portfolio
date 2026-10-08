import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const NOTES_DIR = path.join(process.cwd(), "content", "notes");

export type StripImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  strip: StripImage[];
};

export type Post = PostMeta & {
  html: string;
};

function formatDate(raw: unknown) {
  if (!raw) return "";
  const value = raw instanceof Date ? raw : new Date(String(raw));
  if (Number.isNaN(value.getTime())) return String(raw);
  return value.toISOString().slice(0, 10);
}

function parseStrip(raw: unknown): StripImage[] {
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const { src, width, height, alt } = item as Record<string, unknown>;
    if (typeof src !== "string" || !Number(width) || !Number(height)) return [];

    return [
      {
        src,
        width: Number(width),
        height: Number(height),
        alt: typeof alt === "string" ? alt : "",
      },
    ];
  });
}

function postFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

function parse(dir: string, file: string) {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    draft: data.draft === true,
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: formatDate(data.date),
      summary: String(data.summary ?? ""),
      strip: parseStrip(data.strip),
    } satisfies PostMeta,
  };
}

function listFrom(dir: string): PostMeta[] {
  return postFiles(dir)
    .map((file) => parse(dir, file))
    .filter((post) => !post.draft)
    .map((post) => post.meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

async function readFrom(dir: string, slug: string): Promise<Post | null> {
  const file = postFiles(dir).find((name) => name.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;

  const post = parse(dir, file);
  if (post.draft) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(post.content);

  return { ...post.meta, html: String(processed) };
}

export function getAllPosts(): PostMeta[] {
  return listFrom(POSTS_DIR);
}

export function getPost(slug: string): Promise<Post | null> {
  return readFrom(POSTS_DIR, slug);
}

export function getAllNotes(): PostMeta[] {
  return listFrom(NOTES_DIR);
}

export function getNote(slug: string): Promise<Post | null> {
  return readFrom(NOTES_DIR, slug);
}
