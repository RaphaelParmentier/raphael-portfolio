import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "AI Engineer & Data Scientist specializing in AI systems, automation and data applications.",

  openGraph: {
    title: "Raphaël Parmentier",
    description:
      "AI Engineer & Data Scientist specializing in AI systems, automation and data applications.",

    url: "https://www.raphaelparmentier.dev",
    siteName: "Raphaël Parmentier",

    images: [
      {
        url: "/images/og-portfolio.png",
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
    title: "Raphaël Parmentier",
    description:
      "AI Engineer & Data Scientist specializing in AI systems, automation and data applications.",
    images: ["/images/og-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}