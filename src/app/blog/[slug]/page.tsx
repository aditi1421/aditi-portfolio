import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogNav from "@/components/BlogNav";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found — Aditi Kumar" };

  return {
    title: `${post.title} — Aditi Kumar`,
    description: post.summary || undefined,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl px-6 md:px-8 py-10 md:py-14">
      <BlogNav />

      <article className="mt-16 md:mt-24">
        <header className="pb-8 border-b border-black/15">
          <h1
            className="text-[34px] md:text-[46px] leading-[1.15]"
            style={{ fontFamily: "var(--font-instrument), serif" }}
          >
            {post.title}
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/45 mt-5">
            {post.date}
            {post.date ? " · " : ""}
            {post.readingTime} min read
          </p>
        </header>

        <div
          className="prose-bw mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <footer className="mt-20 pt-6 border-t border-black/15">
        <Link
          href="/blog"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/50 hover:text-black transition-colors"
        >
          &larr; All posts
        </Link>
      </footer>
    </main>
  );
}
