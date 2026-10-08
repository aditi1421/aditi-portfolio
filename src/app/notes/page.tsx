import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import { getAllNotes } from "@/lib/posts";

export default function NotesIndex() {
  const notes = getAllNotes();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 md:px-12 py-10 md:py-14">
      <SiteNav active="notes" />

      <header className="mt-16 md:mt-24">
        <h1
          className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.1]"
        >
          Notes
        </h1>
      </header>

      {notes.length === 0 ? (
        <p className="mt-12 font-mono text-[13px] text-black/50">
          Nothing published yet.
        </p>
      ) : (
        <ul className="mt-2">
          {notes.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/notes/${post.slug}`}
                className="block py-8 group hover:opacity-100"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/45 md:w-28 shrink-0">
                    {post.date}
                  </span>
                  <div className="mt-2 md:mt-0">
                    <h2
                      className="text-[18px] md:text-[20px] font-medium leading-[1.3] underline decoration-transparent group-hover:decoration-black underline-offset-[6px] transition-colors"
                    >
                      {post.title}
                    </h2>
                    {post.summary ? (
                      <p className="font-mono text-[12.5px] leading-[1.8] text-black/60 mt-2 max-w-3xl">
                        {post.summary}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-20">
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
