"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

const coords = siteData.location.coordinates;

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
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="frosted-metal p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4">Adresse</h3>
              <p className="text-lg text-frost/90 mb-1 font-heading">{siteData.location.address}</p>
              <p className="text-sm text-frost/40 font-light">{siteData.location.landmark}</p>
            </div>

            <div className="frosted-metal p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4">Horaires</h3>
              <div className="space-y-3">
                {siteData.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-sm text-frost/60 font-body">{h.day}</span>
                    <span className="text-sm text-frost/90 font-mono">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="frosted-metal p-7">
              <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="text-frost/70"><span className="text-gold/50">Tél :</span> {siteData.contact.phone}</p>
                <p className="text-frost/70"><span className="text-gold/50">Email :</span> {siteData.contact.email}</p>
                <p className="text-frost/70"><span className="text-gold/50">Instagram :</span> @{siteData.contact.instagram}</p>
              </div>
            </div>

            <a
              href={siteData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 text-center font-mono text-xs tracking-widest uppercase text-obsidian bg-gold hover:bg-gold-light transition-all duration-300"
            >
              Ouvrir dans Google Maps →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 h-[400px] lg:h-[500px] frosted-metal overflow-hidden"
          >
            <iframe
              title="Dos Hermanos Tétouan"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.85) hue-rotate(180deg) saturate(0.4)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteData.location.address)}&output=embed&z=15&hl=fr`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
