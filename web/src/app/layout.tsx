import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOGE Europe - Exposing Government Inefficiency",
  description: "European Department of Government Efficiency - Investigating systemic failures in European governance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
