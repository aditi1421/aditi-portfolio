import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Aditi Kumar",
  description: "Notes on AI, machine learning, and the domains I build for.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="blog-view min-h-screen bg-white text-black">{children}</div>;
}
