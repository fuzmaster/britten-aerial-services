import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { media, services, site } from "@/lib/site-data";

const title = "Britten Aerial Services | Drone Photography & Real Estate Media in MA";
const description = "FAA-licensed drone photography, real estate media, roof inspection photos, property videos, floor plans, and marketing visuals based in Peabody, Massachusetts.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: "https://brittenaerialservices.com",
  logo: media.logoMark,
  image: media.socialCover,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peabody",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: "North Shore Massachusetts",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Media services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
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
    images: [media.socialCover],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [media.socialCover],
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
