import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Chatbot from "@/components/Chatbot/Chatbot";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Cursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prod-by-repz.vercel.app"), // Replace with your production domain
  title: "REPZZ — Underground Beat Maker | Buy Beats & Join the Movement",
  description:
    "18-year-old underground producer REPZZ drops bangers. Buy premium beats, join the free community, and be part of the next wave of street music. Dark. Raw. Real.",
  keywords: [
    "beat maker",
    "underground producer",
    "buy beats",
    "street music",
    "hip hop beats",
    "trap beats",
    "REPZZ",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "REPZZ — Underground Beat Maker",
    description:
      "18-year-old underground producer. Buy beats. Join the movement. Free community.",
    type: "website",
    siteName: "Prod by REPZZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "REPZZ — Underground Beat Maker",
    description: "Buy beats. Join the movement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Suspense fallback={null}>
          <Cursor />
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
        </Suspense>
      </body>
    </html>
  );
}
