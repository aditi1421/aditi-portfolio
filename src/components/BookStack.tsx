"use client";

import Image from "next/image";
import { useState } from "react";
import type { Book } from "@/lib/library";

/** Page count is mapped to a slab height so a doorstop reads as a doorstop. */
const MIN_HEIGHT = 30;
const MAX_HEIGHT = 110;
const PX_PER_PAGE = 0.04;

/** A stable per-book jitter, so the stack looks hand piled rather than milled.
 *  Derived from the slug so server and client render identically. */
function jitter(slug: string, spread: number, offset = 0) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 997;
  }
  return offset + (hash % spread);
}

export default function BookStack({ books }: { books: Book[] }) {
  const [selectedSlug, setSelectedSlug] = useState(books[0]?.slug ?? "");

  if (books.length === 0) return null;

  const thinnest = Math.min(...books.map((book) => book.pages));
  const selected = books.find((b) => b.slug === selectedSlug) ?? books[0];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
      {/* The stack */}
      <div className="lg:flex-1 w-full min-w-0">
        <div
          className="book-stack"
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedSlug("");
          }}
        >
          {books.map((book) => {
            const height = Math.min(
              MAX_HEIGHT,
              Math.max(
                MIN_HEIGHT,
                Math.round(MIN_HEIGHT + (book.pages - thinnest) * PX_PER_PAGE),
              ),
            );

            return (
              <button
                key={book.slug}
                type="button"
                className="book-slab"
                aria-pressed={book.slug === selected.slug}
                aria-controls="book-detail"
                onClick={() => setSelectedSlug(book.slug)}
                style={
                  {
                    "--slab-color": book.color,
                    "--slab-height": `${height}px`,
                    "--slab-width": `${jitter(book.slug, 8, 92)}%`,
                    "--slab-offset": `${jitter(book.slug, 10)}px`,
                  } as React.CSSProperties
                }
              >
                <span className="book-slab__title">{book.title}</span>
                <span className="book-slab__author">{book.author}</span>
                <span className="book-slab__pages" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <p className="font-mono text-[11px] text-black/40 mt-5">
          Pick a book to open it. Thickness is its real page count.
        </p>
      </div>

      {/* The book you pulled out */}
      <div
        id="book-detail"
        aria-live="polite"
        className="lg:w-[280px] shrink-0 flex gap-6 lg:block"
      >
        <div className="w-[104px] lg:w-[168px] shrink-0">
          {selected.cover ? (
            <Image
              src={selected.cover}
              alt={`Cover of ${selected.title}`}
              width={331}
              height={500}
              sizes="168px"
              priority
              className="w-full h-auto shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
            />
          ) : null}
        </div>

        <div className="lg:mt-6">
          <h3
            className="text-[22px] md:text-[26px] leading-[1.2]"
          >
            {selected.title}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/50 mt-2">
            {selected.author}
          </p>
          <p className="font-mono text-[11px] text-black/40 mt-1">
            {[selected.year, `${selected.pages} pages`]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {selected.note ? (
            <p className="font-mono text-[12.5px] leading-[1.8] text-black/70 mt-4">
              {selected.note}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
