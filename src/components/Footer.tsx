"use client";

import { siteData, whatsappUrl, instagramUrl } from "@/data/siteData";

const footerLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Avis", href: "#reviews" },
  { label: "Réservation", href: "#booking" },
  { label: "Contact", href: "#location" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-t from-sepia/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/logo-dos-hermanos.jpg" alt="Dos Hermanos" className="h-12 w-auto object-contain brightness-110" />
              <span className="text-2xl font-heading font-bold gold-gradient tracking-wide">{siteData.name}</span>
            </div>
            <p className="text-sm text-frost/40 max-w-md leading-relaxed font-light">
              {siteData.description}
            </p>
            <div className="flex items-center gap-4 mt-5">
              <span className="font-mono text-xs text-frost-dark/30">★ 5.0 · Barber d&apos;exception</span>
              <span className="font-mono text-xs text-green-500/40 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Ouvert
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-frost/40 hover:text-gold transition-colors duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-frost/40">{siteData.contact.phone}</span></li>
              <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-sm text-frost/40 hover:text-gold transition-colors">WhatsApp: {siteData.contact.phoneAyoub}</a></li>
              <li><a href={instagramUrl("doshermanosbarber")} target="_blank" rel="noopener noreferrer" className="text-sm text-frost/40 hover:text-gold transition-colors">@doshermanosbarber</a></li>
              <li><span className="text-sm text-frost/40">22 Av. Seville, Tétouan</span></li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-frost-dark/20 tracking-wider">© {year} Dos Hermanos. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-frost-dark/20 tracking-widest uppercase">Crafted with precision</span>
            <span className="text-frost-dark/10">·</span>
            <span className="font-mono text-[10px] text-frost-dark/20">Tétouan, Maroc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
