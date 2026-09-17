import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — Aditi Kumar",
  description: "Books on the shelf.",
};

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="blog-view min-h-screen bg-white text-black">{children}</div>;
}
