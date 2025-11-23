import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Jacob Darling - Fractional CMO & Marketing Technologist",
  description: "16+ years of experience blending creative strategy, marketing automation, and systems thinking to drive scalable growth. Explore full-funnel campaigns, CRM architecture, and performance marketing.",
  keywords: ["marketing strategy", "fractional CMO", "marketing automation", "CRM architecture", "content marketing", "SEO", "brand development", "digital marketing"],
  openGraph: {
    title: "Jacob Darling - Fractional CMO & Marketing Technologist",
    description: "16+ years of experience in marketing strategy, automation, and systems architecture.",
    url: "https://jacobdarling.com",
    siteName: "Jacob Darling Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showPhone = process.env.NEXT_PUBLIC_SHOW_PHONE === 'true';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jacob Darling",
    "jobTitle": "Fractional CMO & Marketing Technologist",
    "email": "hoosierdarling@gmail.com",
    ...(showPhone && { "telephone": "+1-317-443-8091" }),
    "url": "https://jacobdarling.com",
    "sameAs": [
      "https://linkedin.com/in/jacobdarling",
      "https://github.com/yesmannow"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
