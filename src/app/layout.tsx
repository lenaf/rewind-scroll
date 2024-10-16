import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../css/index.css'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/siteData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="custom" lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <main className="mb-auto">{children}</main>
      </body>
    </html>
  );
}
