import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dos Hermanos | Barber Shop d'Exception — Tétouan",
  description:
    "Barber shop premium à Tétouan. Coupe homme, taille de barbe, rasage traditionnel et soins capillaires. Réservez en ligne.",
  keywords: [
    "barber tetouan",
    "coiffeur tetouan",
    "dos hermanos",
    "coupe homme tetouan",
    "barber shop maroc",
    "rasage traditionnel tetouan",
    "salon coiffure homme tetouan",
  ],
  openGraph: {
    title: "Dos Hermanos | L'Art du Grooming — Tétouan",
    description:
      "Barber shop d'exception à Tétouan. Coupe signature, barbe, rasage traditionnel.",
    locale: "fr_FR",
    type: "website",
    siteName: "Dos Hermanos Barber",
    images: [{ url: "/images/logo-dos-hermanos.jpg", width: 1179, height: 1243 }],
  },
  icons: {
    icon: "/images/logo-dos-hermanos.jpg",
    apple: "/images/logo-dos-hermanos.jpg",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased noise-overlay">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
