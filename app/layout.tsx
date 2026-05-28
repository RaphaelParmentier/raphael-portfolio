import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raphaelparmentier.dev"),
  title: "Raphaël Parmentier | AI Engineer & Data Scientist",
  description:
    "AI Engineer & Data Scientist building practical AI systems, automation workflows and teaching experiences that transform complex information into actionable decisions.",
  openGraph: {
    title: "Raphaël Parmentier | AI Engineer & Data Scientist",
    description:
      "From biological research and pharmaceutical R&D to operational automation, AI engineering and higher education.",
    url: "https://www.raphaelparmentier.dev",
    siteName: "Raphaël Parmentier",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Raphaël Parmentier Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaël Parmentier | AI Engineer & Data Scientist",
    description:
      "AI systems, automation workflows and teaching experiences for decision-oriented data work.",
    images: ["/images/og-portfolio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
