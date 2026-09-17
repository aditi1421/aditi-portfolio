export type Social = {
  label: string;
  href: string;
  /** mailto links should not open a tab or carry a rel. */
  external: boolean;
};

export const SOCIALS: Social[] = [
  { label: "Email", href: "mailto:aditi12kumar@gmail.com", external: false },
  { label: "X", href: "https://x.com/aditistfu", external: true },
  { label: "Substack", href: "https://substack.com/@dittiwrites", external: true },
  { label: "GitHub", href: "https://github.com/aditi1421", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditi-kumar-/",
    external: true,
  },
];
