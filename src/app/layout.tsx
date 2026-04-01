import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbox from "@/components/Chatbox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BK Pilates Raleigh | Mind-Body Pilates Studio",
  description:
    "BK Pilates Raleigh brings mind-body connection to the Raleigh community. Group classes, private sessions, and a welcoming space for all levels.",
  keywords:
    "pilates, raleigh, pilates studio, reformer pilates, group classes, private sessions, wellness, mindfulness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <Chatbox />
      </body>
    </html>
  );
}
