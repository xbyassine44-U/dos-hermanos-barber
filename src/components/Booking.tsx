"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

const services = siteData.services;

export default function Booking() {
  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState("");

  const handleBook = () => {
    const phone = siteData.contact.phoneRaw;
    let msg = "Bonjour%20Dos%20Hermanos%2C%20";
    if (name) msg += `je%20suis%20${encodeURIComponent(name)}%2C%20`;
    if (selected) {
      const svc = services.find((s) => s.id === selected);
      if (svc) msg += `je%20souhaite%20r%C3%A9server%20%22${encodeURIComponent(svc.name)}%22`;
    } else {
      msg += "je%20souhaite%20prendre%20un%20rendez-vous";
    }
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <section id="booking" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-wood/12 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold/50">— Réservation —</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-5 mb-4">
              <span className="gold-gradient">Prendre Rendez-vous</span>
            </h2>
            <p className="text-frost/50 max-w-xl mx-auto font-light text-lg">
              Réservez votre créneau en un clic. Réponse sous 15 minutes via WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-gold p-8 lg:p-12"
          >
            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-5">
                1. Choisissez un service
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelected(null)}
                  className={`px-4 py-2.5 text-xs font-mono tracking-wider transition-all duration-300 ${
                    selected === null
                      ? "bg-gold text-obsidian"
                      : "border border-gold/15 text-frost/50 hover:border-gold/40"
                  }`}
                >
                  Tous
                </button>
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setSelected(svc.id)}
                    className={`px-4 py-2.5 text-xs font-mono tracking-wider transition-all duration-300 ${
                      selected === svc.id
                        ? "bg-gold text-obsidian"
                        : "border border-gold/15 text-frost/50 hover:border-gold/40"
                    }`}
                  >
                    {svc.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4">
                2. Votre prénom
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre prénom..."
                className="w-full bg-transparent border border-gold/15 px-4 py-3 text-sm text-frost placeholder:text-frost-dark/30 focus:outline-none focus:border-gold/50 transition-colors font-mono"
              />
            </div>

            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold/50 mb-4">
                3. Récapitulatif
              </p>
              <div className="bg-obsidian/50 border border-gold/10 p-4">
                {selected ? (
                  (() => {
                    const svc = services.find((s) => s.id === selected);
                    return svc ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-frost/90">{svc.name}</p>
                          <p className="font-mono text-xs text-frost-dark/40">{svc.duration}</p>
                        </div>
                        <span className="font-heading text-xl gold-gradient">{svc.price}</span>
                      </div>
                    ) : null;
                  })()
                ) : (
                  <p className="text-sm text-frost-dark/40 font-light">Aucun service sélectionné — réservation générale</p>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleBook}
              className="w-full py-4 bg-gold hover:bg-gold-light text-obsidian font-body font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Réserver via WhatsApp
            </motion.button>

            <p className="mt-5 text-center font-mono text-[10px] text-frost-dark/30 tracking-wider">
              En cliquant, vous serez redirigé vers WhatsApp. Aucune donnée stockée.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
