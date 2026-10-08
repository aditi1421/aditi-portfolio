import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes — Aditi Kumar",
  description: "Rough notes, not yet drafted into posts.",
};

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="blog-view min-h-screen bg-white text-black">{children}</div>;
}
