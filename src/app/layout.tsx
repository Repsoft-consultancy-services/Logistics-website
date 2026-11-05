import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kranthi Packing Industries | Wooden Pallets & Packaging | Hyderabad",
  description:
    "Quality wooden pallets, boxes, and crates in Hyderabad. Kranthi Packing Industries – manufacturing and supply in Bowrampet, Telangana.",
  keywords: "wooden pallets, packaging, Hyderabad, Bowrampet, Kranthi Packing Industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
