import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Jacob Darling - Marketing Strategist & Portfolio",
  description: "Marketing strategist specializing in data-driven campaigns, content marketing, and brand development. View my portfolio and case studies.",
  keywords: ["marketing strategy", "content marketing", "SEO", "brand development", "digital marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
