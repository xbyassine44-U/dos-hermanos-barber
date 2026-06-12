"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData, whatsappUrl } from "@/data/siteData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-wood/5 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold/50">— Prestations —</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-5 mb-4">
            <span className="gold-gradient">Services & Tarifs</span>
          </h2>
          <p className="text-frost/50 max-w-xl mx-auto font-light text-lg">
            Chaque service est exécuté avec une précision chirurgicale et un souci du détail absolu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {siteData.services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              onMouseEnter={() => setExpanded(svc.id)}
              onMouseLeave={() => setExpanded(null)}
              className="relative group cursor-pointer frosted-metal p-7 transition-all duration-500 hover:border-gold/20"
            >
              {svc.badge && (
                <span className={`absolute -top-2.5 right-4 px-3 py-1 font-mono text-[10px] tracking-widest uppercase ${
                  svc.badge === "Premium"
                    ? "bg-gold text-obsidian"
                    : svc.badge === "Populaire"
                    ? "bg-wood-light/60 text-frost"
                    : "bg-obsidian-700 text-frost/60 border border-gold/15"
                }`}>
                  {svc.badge}
                </span>
              )}

              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading font-semibold text-frost/90">{svc.name}</h3>
                  <span className="font-heading text-xl font-bold gold-gradient">{svc.price}</span>
                </div>

                <AnimatePresence>
                  {expanded === svc.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="h-px bg-gold/10 my-3" />
                      <p className="text-sm text-frost/50 font-light leading-relaxed mb-4">
                        Service réalisé par nos maîtres barbiers avec des produits importés.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="font-mono text-[11px] text-frost-dark tracking-wider">{svc.duration}</span>
                  <a
                    href={whatsappUrl(`Bonjour%20Dos%20Hermanos%2C%20je%20souhaite%20r%C3%A9server%20%22${svc.name}%22`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[11px] tracking-widest uppercase text-gold/50 hover:text-gold transition-colors"
                  >
                    Réserver →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-frost-dark/40">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Prix TTC — Paiement espèces, carte ou QR code
          </div>
        </motion.div>
      </div>
    </section>
  );
}
