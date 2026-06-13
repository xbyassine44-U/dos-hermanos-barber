import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://doshermanos.ma"),
  title: "Dos Hermanos | Meilleur Barber Shop Premium à Tétouan — Coupe & Barbe",
  description:
    "Barber shop d'exception à Tétouan – 22 Av. Seville. Coupe homme, taille de barbe, rasage traditionnel et soins capillaires. Meilleur barbier à Tétouan. Réservez en ligne.",
  keywords: [
    "meilleur barber tetouan",
    "best barber tetouan",
    "mejor barbero tetouan",
    "barber shop tetouan",
    "coiffeur homme tetouan",
    "dos hermanos tetouan",
    "coupe homme tetouan",
    "taille barbe tetouan",
    "rasage traditionnel tetouan",
    "salon coiffure homme tetouan",
    "22 av seville tetouan",
    "barber tetouan 93000",
    "barbier tetouan",
    "fade tetouan",
    "barber shop maroc",
    "premium barber tetouan",
  ],
  openGraph: {
    title: "Dos Hermanos | Meilleur Barber Shop à Tétouan — L'Art du Grooming",
    description:
      "Barber shop d'exception à Tétouan. Coupe signature, barbe, rasage traditionnel. 22 Av. Seville. Le meilleur barbier de Tétouan.",
    locale: "fr_FR",
    type: "website",
    siteName: "Dos Hermanos Barber",
    images: [{ url: "/images/logo-dos-hermanos.jpg", width: 1179, height: 1243 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dos Hermanos | Meilleur Barber Shop à Tétouan",
    description:
      "Barber shop d'exception à Tétouan. Coupe signature, barbe, rasage traditionnel.",
    images: ["/images/logo-dos-hermanos.jpg"],
  },
  icons: {
    icon: "/images/logo-dos-hermanos.jpg",
    apple: "/images/logo-dos-hermanos.jpg",
  },
  robots: "index, follow",
  other: {
    "geo.region": "MA-TET",
    "geo.placename": "Tétouan",
    "geo.position": "35.5697;-5.368",
    ICBM: "35.5697, -5.368",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Dos Hermanos",
  description:
    "Barber shop d'exception à Tétouan. Coupes sur mesure, précision artisanale, et une expérience masculine intemporelle.",
  url: "https://doshermanos.ma",
  telephone: "+212539724371",
  email: "contact@doshermanos.ma",
  image: "https://doshermanos.ma/images/logo-dos-hermanos.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "22 Av. Seville",
    addressLocality: "Tétouan",
    addressRegion: "Tanger-Tétouan-Al Hoceïma",
    postalCode: "93000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.5697,
    longitude: -5.368,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "MAD, EUR",
  paymentAccepted: "Cash, Card, PayPal",
  sameAs: [
    "https://www.instagram.com/doshermanosbarber",
    "https://www.facebook.com/doshermanos",
    "https://www.tiktok.com/@doshermanos",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://doshermanos.ma" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className="antialiased noise-overlay">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
