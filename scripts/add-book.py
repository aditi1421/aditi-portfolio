#!/usr/bin/env python3
"""Add a book to content/library/books.json.

Looks the book up on Open Library, saves its cover into
public/library/covers/, samples a spine colour from that cover, and appends
the entry. Notes stay empty on purpose: those are Aditi's to write.

    python3 scripts/add-book.py "Superintelligence" --author "Nick Bostrom"

Pass --dry-run to see what it would add without touching anything.
"""

import argparse
import colorsys
import json
import pathlib
import re
import sys
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
BOOKS = ROOT / "content" / "library" / "books.json"
COVERS = ROOT / "public" / "library" / "covers"
UA = {"User-Agent": "aditikumar.vercel.app library builder"}


def slugify(title):
    return re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")


def search(title, author):
    query = {"title": title, "limit": "5",
             "fields": "title,author_name,first_publish_year,number_of_pages_median,cover_i"}
    if author:
        query["author"] = author
    url = "https://openlibrary.org/search.json?" + urllib.parse.urlencode(query)
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        docs = json.load(r).get("docs", [])
    for doc in docs:
        if doc.get("cover_i"):
            return doc
    return docs[0] if docs else None


def spine_colour(path):
    from PIL import Image

    image = Image.open(path).convert("RGB").resize((120, 180))
    quantized = image.quantize(colors=8, method=Image.Quantize.MEDIANCUT).convert("RGB")
    for _, rgb in sorted(quantized.getcolors(20000), key=lambda c: -c[0]):
        h, l, s = colorsys.rgb_to_hls(*[v / 255 for v in rgb])
        if 0.12 < l < 0.78 and s > 0.12:
            break
    else:
        h, l, s = colorsys.rgb_to_hls(*[v / 255 for v in sorted(
            quantized.getcolors(20000), key=lambda c: -c[0])[0][1]])
    # Deepen it so white spine lettering stays legible.
    r, g, b = colorsys.hls_to_rgb(h, min(l, 0.42), min(1.0, s * 1.12))
    return "#{:02X}{:02X}{:02X}".format(*[round(v * 255) for v in (r, g, b)])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("title")
    parser.add_argument("--author", default="")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    doc = search(args.title, args.author)
    if not doc:
        sys.exit(f"No Open Library match for {args.title!r}")

    title = doc.get("title") or args.title
    slug = slugify(title)
    books = json.loads(BOOKS.read_text())
    if any(b["slug"] == slug for b in books):
        sys.exit(f"{title!r} is already in the library")

    cover_path = COVERS / f"{slug}.jpg"
    colour = "#444444"
    if doc.get("cover_i") and not args.dry_run:
        COVERS.mkdir(parents=True, exist_ok=True)
        url = f"https://covers.openlibrary.org/b/id/{doc['cover_i']}-L.jpg"
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
            cover_path.write_bytes(r.read())
        colour = spine_colour(cover_path)

    entry = {
        "slug": slug,
        "title": title,
        "author": args.author or (doc.get("author_name") or [""])[0],
        "year": doc.get("first_publish_year"),
        "pages": doc.get("number_of_pages_median") or 250,
        "cover": f"/library/covers/{slug}.jpg" if doc.get("cover_i") else "",
        "color": colour,
        "note": "",
    }

    print(json.dumps(entry, indent=2))
    if args.dry_run:
        return

    books.append(entry)
    BOOKS.write_text(json.dumps(books, indent=2) + "\n")
    print(f"\nAdded to {BOOKS.relative_to(ROOT)}. Write a note for it when you like.")


if __name__ == "__main__":
    main()
