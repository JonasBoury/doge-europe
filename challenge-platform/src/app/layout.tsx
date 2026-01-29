import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GovChallenge | A Better Way to Build Government Tech",
  description:
    "Challenge-based procurement for digital services. Working software, not endless proposals.",
  openGraph: {
    title: "GovChallenge | A Better Way to Build Government Tech",
    description:
      "Challenge-based procurement for digital services. Working software, not endless proposals.",
    url: "https://govchallenge.eu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
