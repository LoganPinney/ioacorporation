import type { Metadata, Viewport } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ioacorporation.com"),
  title: "Integrated Operations Architecture Inc. | IOA Corporation",
  description:
    "IOA Corporation designs integrated operational systems, data architecture, workflows, internal tools, and governance frameworks for complex enterprise operations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "IOA Corporation",
    title: "Integrated systems for complex operations | IOA Corporation",
    description:
      "Integrated operational systems for complex enterprise operations.",
    images: [{ url: "/og.png", width: 1735, height: 908, alt: "IOA Corporation — Architecture for complex operations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture for complex operations | IOA Corporation",
    description:
      "Integrated operational systems for complex enterprise operations.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f0e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${geistSans.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
