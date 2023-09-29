import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohi Bagherani",
  description: "Mohammad Bagherani's personal website",
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
