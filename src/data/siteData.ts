export const siteData = {
  name: "Dos Hermanos",
  tagline: "L'Art du Grooming — Tétouan",
  description:
    "Barber shop d'exception à Tétouan. Tailored cuts, précision artisanale, et une expérience masculine intemporelle depuis 2019.",
  location: {
    address: "Avenue Moulay Ismail, Tétouan 93000",
    landmark: "Près du jardin Moulay Rachid",
    city: "Tétouan",
    region: "Tanger-Tétouan-Al Hoceïma",
    country: "Maroc",
    coordinates: { lat: 35.5697, lng: -5.368 },
    googleMapsUrl: "https://maps.google.com/?q=T%C3%A9touan+Maroc",
  },
  contact: {
    phone: "+212 600-000000",
    phoneRaw: "+212600000000",
    email: "contact@doshermanos.ma",
    instagram: "doshermanosbarber",
    instagramUrl: "https://www.instagram.com/doshermanosbarber",
  },
  hours: [
    { day: "Lun — Ven", hours: "09:00 — 21:00" },
    { day: "Samedi", hours: "08:00 — 22:00" },
    { day: "Dimanche", hours: "10:00 — 20:00" },
  ],
  services: [
    { id: 1, name: "Coupe Signature", price: "60 DH", duration: "30 min", badge: "Populaire" },
    { id: 2, name: "Taille de Barbe", price: "30 DH", duration: "20 min", badge: "" },
    { id: 3, name: "Coupe + Barbe", price: "80 DH", duration: "45 min", badge: "Meilleur Rapport" },
    { id: 4, name: "Rasage Traditionnel", price: "50 DH", duration: "30 min", badge: "Nouveau" },
    { id: 5, name: "Soin Capillaire", price: "40 DH", duration: "25 min", badge: "" },
    { id: 6, name: "Coupe Enfant", price: "40 DH", duration: "20 min", badge: "" },
    { id: 7, name: "Coloration Barbe", price: "70 DH", duration: "30 min", badge: "" },
    { id: 8, name: "Pack Prestige", price: "150 DH", duration: "75 min", badge: "Premium" },
  ],
  gallery: [
    { id: 1, src: "/images/gallery/placeholder-1.jpg", alt: "Coupe signature Dos Hermanos" },
    { id: 2, src: "/images/gallery/placeholder-2.jpg", alt: "Taille de barbe premium" },
    { id: 3, src: "/images/gallery/placeholder-3.jpg", alt: "Ambiance du salon" },
    { id: 4, src: "/images/gallery/placeholder-4.jpg", alt: "Rasage traditionnel au straight razor" },
    { id: 5, src: "/images/gallery/placeholder-5.jpg", alt: "Coloration barbe" },
    { id: 6, src: "/images/gallery/placeholder-6.jpg", alt: "Équipe Dos Hermanos" },
  ],
};

export const whatsappUrl = (message?: string): string => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || siteData.contact.phoneRaw;
  const msg = message || "Bonjour%20Dos%20Hermanos%2C%20je%20souhaite%20prendre%20un%20rendez-vous";
  return `https://wa.me/${phone}?text=${msg}`;
};
