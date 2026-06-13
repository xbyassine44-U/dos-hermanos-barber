"use client";

import { motion } from "framer-motion";
import { siteData, whatsappUrl, instagramUrl } from "@/data/siteData";

export default function Location() {
  return (
    <section id="location" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-wood/8 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold/50">— Contact —</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-5 mb-4">
            <span className="gold-gradient">Nous Trouver</span>
          </h2>
          <div className="divider-gold w-24 mx-auto my-6" />
          <p className="text-frost/50 max-w-xl mx-auto font-light text-lg">
            22 Av. Seville, Tétouan 93000 — Venez nous rendre visite
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Adresse
              </h3>
              <p className="text-lg text-frost/90 mb-1 font-heading">{siteData.location.address}</p>
              <p className="text-sm text-frost/40 font-light">{siteData.location.city}, {siteData.location.country}</p>
            </div>

            <div className="glass p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horaires
              </h3>
              <div className="space-y-3">
                {siteData.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-sm text-frost/60 font-body">{h.day}</span>
                    <span className="text-sm text-frost/90 font-mono tracking-wide">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </h3>
              <div className="space-y-3">
                <a href={`tel:${siteData.contact.phoneRaw}`} className="flex items-center gap-2 text-sm text-frost/70 hover:text-gold transition-colors">
                  <span className="text-gold/50 w-16 shrink-0">Réception:</span>
                  {siteData.contact.phone}
                </a>
                <a href={`https://wa.me/${siteData.contact.phoneAyoubRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-frost/70 hover:text-gold transition-colors">
                  <span className="text-gold/50 w-16 shrink-0">Ayoub:</span>
                  {siteData.contact.phoneAyoub}
                </a>
                <a href={`https://wa.me/${siteData.contact.phoneAbdeliRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-frost/70 hover:text-gold transition-colors">
                  <span className="text-gold/50 w-16 shrink-0">Abdeli:</span>
                  {siteData.contact.phoneAbdeli}
                </a>
                <div className="flex items-center gap-2 text-sm text-frost/70">
                  <span className="text-gold/50 w-16 shrink-0">Instagram:</span>
                  <div className="flex gap-3">
                    <a href={instagramUrl("ayoub_rais")} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@ayoub_rais</a>
                    <a href={instagramUrl("abdeli_lah1")} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@abdeli_lah1</a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 text-center font-mono text-xs tracking-widest uppercase text-obsidian bg-gold hover:bg-gold-light transition-all duration-300"
            >
              Réserver par WhatsApp →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 min-h-[400px] lg:min-h-[500px] glass overflow-hidden"
          >
            <iframe
              title="Dos Hermanos - 22 Av. Seville, Tétouan"
              width="100%"
              height="100%"
              className="map-dark min-h-[400px] lg:min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.394!2d-5.368!3d35.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b8f8f8f8f8f8f%3A0x0!2s22+Av.+Seville%2C+T%C3%A9touan+93000!5e0!3m2!1sfr!2sma!4v1"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
