import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ioacorporation.com"),
  title: "Integrated Operations Advisory Inc. | IOA",
  description:
    "Integrated Operations Advisory designs digital orchestration systems, data architecture, connected workflows, internal tools and governance for complex operations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Integrated Operations Advisory",
    title: "Integrated systems for complex operations | IOA",
    description:
      "Integrated operational systems for complex enterprise operations.",
    images: [
      {
        url: "/og-ioa.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "IOA — Integrated Operations Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrated operations advisory | IOA",
    description:
      "Integrated operational systems for complex enterprise operations.",
    images: ["/og-ioa.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#112731",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={geistSans.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
