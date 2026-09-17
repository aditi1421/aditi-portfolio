import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import BookStack from "@/components/BookStack";
import { getBooks } from "@/lib/library";

export default function LibraryPage() {
  const books = getBooks();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 md:px-8 py-10 md:py-14">
      <SiteNav active="library" />

      <header className="mt-16 md:mt-24 pb-8 border-b border-black/15">
        <h1
          className="text-[40px] md:text-[56px] leading-[1.1]"
          style={{ fontFamily: "var(--font-instrument), serif" }}
        >
          Library
        </h1>
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-black/50 mt-4">
          {books.length} {books.length === 1 ? "book" : "books"}
        </p>
      </header>

      <section className="mt-14 md:mt-16">
        <BookStack books={books} />
      </section>

      <footer className="mt-24 pt-6 border-t border-black/15">
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
