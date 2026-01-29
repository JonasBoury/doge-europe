import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Persona MVP — Flemish Education Personnel Management",
  description:
    "Modern prototype for managing education personnel assignments, service interruptions, and salary calculation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ConvexClientProvider>
          <div className="flex min-h-screen">
            <Navigation />
            <main className="flex-1 p-8">{children}</main>
          </div>
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
