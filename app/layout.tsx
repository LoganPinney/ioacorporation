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
  title: "Integrated Operations Advisory Inc. | IOA",
  description:
    "Integrated Operations Advisory designs integrated operational systems, data architecture, workflows, internal tools, and governance frameworks for complex enterprise operations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Integrated Operations Advisory",
    title: "Integrated systems for complex operations | IOA",
    description:
      "Integrated operational systems for complex enterprise operations.",
    images: [{ url: "/og-ioa.svg", width: 1200, height: 630, alt: "IOA — Integrated Operations Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrated operations advisory | IOA",
    description:
      "Integrated operational systems for complex enterprise operations.",
    images: ["/og-ioa.svg"],
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
