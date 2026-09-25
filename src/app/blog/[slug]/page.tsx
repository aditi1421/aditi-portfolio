import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogNav from "@/components/BlogNav";
import FilmStrip from "@/components/FilmStrip";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found — Aditi Kumar" };

  const description = post.summary || undefined;

  return {
    title: `${post.title} — Aditi Kumar`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const hasStrip = post.strip.length > 0;

  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 pt-10 md:pt-14 pb-8 md:pb-12">
        <BlogNav />
      </div>

      {hasStrip ? <FilmStrip images={post.strip} /> : null}

      <main className="mx-auto w-full max-w-6xl px-6 md:px-12 pb-10 md:pb-14">
        <article className={hasStrip ? "mt-12 md:mt-16" : "mt-4 md:mt-10"}>
          <header className="pb-8 border-b border-black/15">
            <h1
              className="text-[28px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
            >
              {post.title}
            </h1>
            {post.date ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/45 mt-5">
                {post.date}
              </p>
            ) : null}
          </header>

          <div
            className="prose-bw mt-10 max-w-3xl"
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
    </>
  );
}
