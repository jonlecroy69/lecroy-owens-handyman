import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Handyman, Decks, Siding & Remodeling in Spartanburg SC`,
    template: `%s | ${BUSINESS.shortName} — Spartanburg, SC`,
  },
  description: BUSINESS.description + " Serving Spartanburg, Greer, Greenville, Boiling Springs, and the Upstate of South Carolina. Licensed & insured.",
  keywords: [
    "handyman near me",
    "handyman Spartanburg SC",
    "deck builder near me",
    "deck builder Spartanburg",
    "siding repair near me",
    "siding installation Spartanburg",
    "carpenter near me",
    "carpenter Spartanburg SC",
    "bathroom remodel near me",
    "bathroom remodeling Spartanburg",
    "electrical repair near me",
    "electrical repair Spartanburg",
    "home remodeling Spartanburg SC",
    "flooring installation Spartanburg",
    "porch builder Spartanburg",
    "handyman Upstate SC",
  ],
  authors: [{ name: BUSINESS.name }],
  icons: {
    icon: "/images/logo-nav.png",
    apple: "/images/logo-nav.png",
  },
  openGraph: {
    title: `${BUSINESS.name} | Handyman, Decks & Remodeling Experts Spartanburg SC`,
    description: "Decks, porches, siding, bathroom remodels, electrical, and full home improvements. Licensed & insured. Serving Spartanburg and the Upstate of South Carolina.",
    images: [{ url: "/images/work/image-d7352d30-f24f-4702-9307-99f41702a9af.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
