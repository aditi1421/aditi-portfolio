import Link from "next/link";
import BlogNav from "@/components/BlogNav";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 md:px-8 py-10 md:py-14">
      <BlogNav />

      <header className="mt-16 md:mt-24 pb-8 border-b border-black/15">
        <h1
          className="text-[40px] md:text-[56px] leading-[1.1]"
          style={{ fontFamily: "var(--font-instrument), serif" }}
        >
          Blog
        </h1>
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-black/50 mt-4">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 font-mono text-[13px] text-black/50">
          Nothing published yet.
        </p>
      ) : (
        <ul className="mt-2">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-black/15">
              <Link
                href={`/blog/${post.slug}`}
                className="block py-8 group hover:opacity-100"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/45 md:w-28 shrink-0">
                    {post.date}
                  </span>
                  <div className="mt-2 md:mt-0">
                    <h2
                      className="text-[24px] md:text-[28px] leading-[1.25] underline decoration-transparent group-hover:decoration-black underline-offset-[6px] transition-colors"
                      style={{ fontFamily: "var(--font-instrument), serif" }}
                    >
                      {post.title}
                    </h2>
                    {post.summary ? (
                      <p className="font-mono text-[12.5px] leading-[1.8] text-black/60 mt-2 max-w-xl">
                        {post.summary}
                      </p>
                    ) : null}
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/40 mt-3">
                      {post.readingTime} min read
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-20 pt-6 border-t border-black/15">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/50 hover:text-black transition-colors"
        >
          &larr; Back to about
        </Link>
      </footer>
    </main>
  );
}
