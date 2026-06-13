"use client";

import { motion } from "framer-motion";
import { siteData, whatsappUrl } from "@/data/siteData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const badgeStyles: Record<string, string> = {
  "Populaire": "bg-gold/15 text-gold border-gold/30",
  "Meilleur Rapport": "bg-anthracite/30 text-frost border-anthracite-600/30",
  "Artisanal": "bg-frost/5 text-frost-muted border-frost/10",
  "VIP": "bg-gold text-obsidian border-gold",
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-sepia/15 to-obsidian" />

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
          <div className="divider-gold w-24 mx-auto my-6" />
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
              className="relative group glass-card p-7"
            >
              {svc.badge && (
                <span className={`absolute -top-2.5 right-4 px-3 py-1 font-mono text-[10px] tracking-widest uppercase border ${badgeStyles[svc.badge] || "bg-obsidian-700 text-frost/60 border-gold/15"}`}>
                  {svc.badge}
                </span>
              )}

              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading font-semibold text-frost/90">{svc.name}</h3>
                  <span className="font-heading text-xl font-bold gold-gradient">{svc.price}</span>
                </div>

                <p className="text-sm text-frost/40 font-light leading-relaxed">
                  Service réalisé par nos maîtres barbiers avec des produits importés.
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-frost-dark/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-mono text-[11px] text-frost-dark tracking-wider">{svc.duration}</span>
                  </div>
                  <a
                    href={whatsappUrl(`Bonjour%20Dos%20Hermanos%2C%20je%20souhaite%20r%C3%A9server%20%22${svc.name}%22`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[11px] tracking-widest uppercase text-gold/40 hover:text-gold transition-colors flex items-center gap-1.5"
                  >
                    Réserver
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
          <div className="inline-flex items-center gap-2 font-mono text-xs text-frost-dark/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Prix TTC — Paiement espèces, carte ou QR code
          </div>
        </motion.div>
      </div>
    </section>
  );
}
