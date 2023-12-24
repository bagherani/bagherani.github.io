import "./globals.css";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import { GoogleAnalytics } from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Mohammad Bagherani's personal website",
  title: "Mohi Bagherani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
