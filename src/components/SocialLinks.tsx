import { SOCIALS } from "@/lib/socials";

/**
 * The same row of links in the hero and in the footer, so nobody has to
 * scroll to the bottom of the page to find where else Aditi is.
 */
export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {SOCIALS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          {...(social.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="font-mono text-[12px] underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          {social.label} &#x2197;
        </a>
      ))}
    </div>
  );
}
