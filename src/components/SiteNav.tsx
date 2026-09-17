import Link from "next/link";

export type NavSection = "about" | "blog" | "library";

const LINKS: { key: NavSection; label: string; href: string }[] = [
  { key: "about", label: "About", href: "/" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "library", label: "Library", href: "/library" },
];

/**
 * The one nav for the whole site. Both the home hero and the reading views
 * render this, so a new tab is added in exactly one place.
 *
 * `contactHref` exists because the home page can scroll straight to the
 * contact section, while every other page has to navigate there first.
 */
export default function SiteNav({
  active,
  contactHref = "/#contact",
}: {
  active?: NavSection;
  contactHref?: string;
}) {
  return (
    <nav className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-1">
      <Link
        href="/"
        className="font-mono text-[16px] md:text-[18px] tracking-[0.1em] uppercase font-medium hover:opacity-60 transition-opacity"
      >
        Aditi Kumar
      </Link>

      {LINKS.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          aria-current={active === link.key ? "page" : undefined}
          className={`font-mono text-[16px] md:text-[18px] hover:opacity-60 transition-opacity${
            active === link.key ? " underline underline-offset-4" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}

      <a
        href={contactHref}
        className="font-mono text-[16px] md:text-[18px] hover:opacity-60 transition-opacity"
      >
        Contact
      </a>
    </nav>
  );
}
