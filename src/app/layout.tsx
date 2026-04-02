import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BK Pilates Raleigh | Mind-Body Pilates Studio",
  description:
    "BK Pilates Raleigh brings mind-body connection to the Raleigh community. Group reformer classes, private sessions, and a welcoming space for all levels. Located at The Row on S. Saunders Street.",
  keywords:
    "pilates, raleigh, pilates studio, reformer pilates, group classes, private sessions, wellness, mindfulness, BK Pilates, raleigh pilates",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "BK Pilates Raleigh | Mind-Body Pilates Studio",
    description:
      "Bringing mind-body connection to Raleigh through wellness, mindfulness, and stress relief. Group reformer classes, private sessions, and more.",
    type: "website",
    locale: "en_US",
    siteName: "BK Pilates Raleigh",
  },
  twitter: {
    card: "summary_large_image",
    title: "BK Pilates Raleigh | Mind-Body Pilates Studio",
    description:
      "Bringing mind-body connection to Raleigh through wellness, mindfulness, and stress relief.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "BK Pilates Raleigh",
  description:
    "BK Pilates Raleigh brings mind-body connection to the Raleigh community through group reformer classes, private sessions, and a welcoming space for all levels.",
  url: "https://bkpilatesrdu.com",
  telephone: "+19192139806",
  email: "info@bkpilatesrdu.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1019 S. Saunders Street",
    addressLocality: "Raleigh",
    addressRegion: "NC",
    postalCode: "27603",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.77,
    longitude: -78.64,
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
  },
  sameAs: ["https://www.instagram.com/bkpilatesrdu/"],
  founder: [
    { "@type": "Person", name: "Marina Kaydanova" },
    { "@type": "Person", name: "Julia Davis" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-28">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
