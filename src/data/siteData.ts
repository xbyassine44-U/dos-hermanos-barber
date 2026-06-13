export const siteData = {
  name: "Dos Hermanos",
  tagline: "L'Art du Grooming — Tétouan",
  description:
    "Barber shop d'exception à Tétouan. Coupes sur mesure, précision artisanale, et une expérience masculine intemporelle.",
  location: {
    address: "22 Av. Seville, Tétouan 93000",
    landmark: "Près du centre-ville",
    city: "Tétouan",
    region: "Tanger-Tétouan-Al Hoceïma",
    country: "Maroc",
    coordinates: { lat: 35.5697, lng: -5.368 },
    googleMapsUrl: "https://maps.google.com/?q=22+Av.+Seville,+T%C3%A9touan+93000+Maroc",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.394!2d-5.368!3d35.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b8f8f8f8f8f8f%3A0x0!2s22+Av.+Seville%2C+T%C3%A9touan+93000!5e0!3m2!1sfr!2sma!4v1",
  },
  contact: {
    phone: "0539 72 43 71",
    phoneRaw: "+212539724371",
    phoneAyoub: "06 12 78 65 26",
    phoneAyoubRaw: "+212612786526",
    phoneAbdeli: "06 32 72 64 13",
    phoneAbdeliRaw: "+212632726413",
    email: "contact@doshermanos.ma",
    instagram: "doshermanosbarber",
    instagramUrl: "https://www.instagram.com/doshermanosbarber",
  },
  barbers: [
    { name: "Ayoub Rais", handle: "@ayoub_rais", phone: "06 12 78 65 26", phoneRaw: "+212612786526" },
    { name: "Abdeli Lah", handle: "@abdeli_lah1", phone: "06 32 72 64 13", phoneRaw: "+212632726413" },
  ],
  hours: [
    { day: "Lun — Ven", hours: "09:00 — 21:00" },
    { day: "Samedi", hours: "08:00 — 22:00" },
    { day: "Dimanche", hours: "10:00 — 20:00" },
  ],
  services: [
    { id: 1, name: "Coupe Signature", price: "60 DH", duration: "30 min", badge: "Populaire" },
    { id: 2, name: "Taille de Barbe", price: "30 DH", duration: "20 min", badge: "" },
    { id: 3, name: "Coupe + Barbe", price: "80 DH", duration: "45 min", badge: "Meilleur Rapport" },
    { id: 4, name: "Rasage Traditionnel", price: "50 DH", duration: "30 min", badge: "Artisanal" },
    { id: 5, name: "Soin Capillaire", price: "40 DH", duration: "25 min", badge: "" },
    { id: 6, name: "Coupe Enfant", price: "40 DH", duration: "20 min", badge: "" },
    { id: 7, name: "Coloration Barbe", price: "70 DH", duration: "30 min", badge: "" },
    { id: 8, name: "Pack Prestige", price: "150 DH", duration: "75 min", badge: "VIP" },
  ],
  gallery: [
    { id: 1, src: "/images/pagina-principal.jpg", alt: "Coupe signature Dos Hermanos", category: "Coupe" },
    { id: 2, src: "/images/whatsapp-ref.jpg", alt: "Taille de barbe premium", category: "Barbe" },
    { id: 3, src: "/images/pagina-principal.jpg", alt: "Ambiance du salon", category: "Salon" },
    { id: 4, src: "/images/whatsapp-ref.jpg", alt: "Rasage traditionnel", category: "Rasage" },
    { id: 5, src: "/images/pagina-principal.jpg", alt: "Style & élégance", category: "Style" },
    { id: 6, src: "/images/whatsapp-ref.jpg", alt: "L'équipe Dos Hermanos", category: "Équipe" },
  ],
  reviews: [
    {
      id: 1,
      name: "Mohamed EL AJOURI",
      rating: 5,
      text: "Salon de coiffure de grande qualité. Service professionnel, hygiène irréprochable et excellent sens du détail. Le coiffeur fait preuve d'un grand savoir-faire, d'écoute et de précision. Une expérience que je recommande vivement.",
    },
    {
      id: 2,
      name: "Btisam Moutreib",
      rating: 5,
      text: "De passage à Tétouan avec mon mari, il s'est fait couper les cheveux ici et le résultat était vraiment très bien. Le barber est professionnel, rapide et agréable. Nous recommandons sans hésiter.",
    },
    {
      id: 3,
      name: "Ahmed Amine",
      rating: 5,
      text: "J'ai été accueilli chaleureusement même sans rendez-vous. Omar a pris le temps de comprendre exactement mes attentes et le résultat était parfait. Un service professionnel avec un excellent rapport qualité-prix. Je reviendrai sans hésitation.",
    },
    {
      id: 4,
      name: "Abd Rahime Rchouk",
      rating: 5,
      text: "Chez Dos Hermanos Barber, on ne vient pas seulement pour une coupe, mais pour une véritable expérience. Professionnalisme, précision et attention aux détails font de ce salon une référence à Tétouan.",
    },
  ],
};

export const whatsappUrl = (message?: string): string => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || siteData.contact.phoneRaw;
  const msg = message || "Bonjour%20Dos%20Hermanos%2C%20je%20souhaite%20prendre%20un%20rendez-vous";
  return `https://wa.me/${phone}?text=${msg}`;
};

export const instagramUrl = (handle: string): string => {
  return `https://www.instagram.com/${handle.replace("@", "")}`;
};
