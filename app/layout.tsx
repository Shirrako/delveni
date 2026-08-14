import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://delveni.com"),
  title: "Delveni — Not Published. Decided.",
  description:
    "A private drop of unfiltered, hard-earned thinking — screened per piece, gone once it's read. Not a newsletter. Not for everyone.",
  openGraph: {
    title: "Delveni — Not Published. Decided.",
    description:
      "A private drop of unfiltered, hard-earned thinking — screened per piece, gone once it's read.",
    url: "https://delveni.com",
    siteName: "Delveni",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delveni — Not Published. Decided.",
    description:
      "A private drop of unfiltered, hard-earned thinking — screened per piece, gone once it's read.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Newsreader:ital,opsz,wght@0,6..72,300;1,6..72,300;1,6..72,400;1,6..72,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
