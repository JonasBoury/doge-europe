import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOGE Belgium - Exposing Government Inefficiency",
  description: "Belgian Department of Government Efficiency - Investigating systemic failures in Belgian governance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
