import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  readingTime: number;
};

export type Post = PostMeta & {
  html: string;
};

function readingTimeFor(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function formatDate(raw: unknown) {
  if (!raw) return "";
  const value = raw instanceof Date ? raw : new Date(String(raw));
  if (Number.isNaN(value.getTime())) return String(raw);
  return value.toISOString().slice(0, 10);
}

function postFiles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

function parse(file: string) {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
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
      readingTime: readingTimeFor(content),
    } satisfies PostMeta,
  };
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map(parse)
    .filter((post) => !post.draft)
    .map((post) => post.meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = postFiles().find((name) => name.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;

  const post = parse(file);
  if (post.draft) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(post.content);

  return { ...post.meta, html: String(processed) };
}
