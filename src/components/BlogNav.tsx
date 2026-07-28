import Link from "next/link";

export default function BlogNav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-1">
      <Link
        href="/"
        className="font-mono text-[16px] md:text-[18px] tracking-[0.1em] uppercase font-medium hover:opacity-60 transition-opacity"
      >
        Aditi Kumar
      </Link>
      <Link
        href="/"
        className="font-mono text-[16px] md:text-[18px] hover:opacity-60 transition-opacity"
      >
        About
      </Link>
      <Link
        href="/blog"
        aria-current="page"
        className="font-mono text-[16px] md:text-[18px] underline underline-offset-4 hover:opacity-60 transition-opacity"
      >
        Blog
      </Link>
      <Link
        href="/#contact"
        className="font-mono text-[16px] md:text-[18px] hover:opacity-60 transition-opacity"
      >
        Contact
      </Link>
    </nav>
  );
}
