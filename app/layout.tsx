import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const title = "Britten Aerial Services | Drone Photography & Real Estate Media in MA";
const description = "FAA-licensed drone photography, real estate media, roof inspection photos, property videos, floor plans, and marketing visuals based in Peabody, Massachusetts.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Britten Aerial Services",
  url: "https://brittenaerialservices.com",
  telephone: "774-231-8523",
  email: "brittenaerialservices@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peabody",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: "North Shore Massachusetts",
  description: "FAA-licensed drone photography and real estate media company serving Massachusetts.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brittenaerialservices.com"),
  title,
  description,
  keywords: [
    "drone photography Massachusetts",
    "real estate photography Peabody MA",
    "aerial photography North Shore MA",
    "drone roof inspection Massachusetts",
    "real estate media Massachusetts",
    "property video Massachusetts",
    "Britten Aerial Services",
  ],
  openGraph: {
    title,
    description,
    url: "https://brittenaerialservices.com",
    siteName: "Britten Aerial Services",
    type: "website",
    locale: "en_US",
    images: ["/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Footer />
      </body>
    </html>
  );
}
