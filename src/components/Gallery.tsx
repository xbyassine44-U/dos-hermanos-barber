"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

const galleryImages = [
  { src: "/images/pagina-principal.jpg", label: "Coupe Signature", icon: "✂️" },
  { src: "/images/whatsapp-ref.jpg", label: "Style & Élégance", icon: "🪒" },
  { src: "/images/logo-dos-hermanos.jpg", label: "Notre Marque", icon: "💈" },
  { src: "/images/pagina-principal.jpg", label: "Rasage Traditionnel", icon: "🗡️" },
  { src: "/images/whatsapp-ref.jpg", label: "Ambiance Salon", icon: "🎨" },
  { src: "/images/pagina-principal.jpg", label: "L'Équipe", icon: "🤝" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-wood/8 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold/50">— Portfolio —</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-5 mb-4">
            <span className="gold-gradient">Notre Travail</span>
          </h2>
          <p className="text-frost/50 max-w-xl mx-auto font-light text-lg">
            Chaque coupe raconte une histoire. Découvrez notre savoir-faire à travers nos réalisations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {galleryImages.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`relative group cursor-pointer overflow-hidden aspect-[4/5] frosted-metal transition-all duration-500 ${
                selected === i ? "ring-2 ring-gold/40 scale-[1.02]" : "hover:ring-1 hover:ring-gold/20"
              }`}
            >
              <img
                src={p.src}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{p.icon}</span>
                  <span className="font-heading text-lg text-frost/90">{p.label}</span>
                </div>
                <span className="font-mono text-[10px] text-frost-dark/40 tracking-widest uppercase">Portfolio</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-obsidian/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[85vh] frosted-metal overflow-hidden"
            >
              <img
                src={galleryImages[selected].src}
                alt={galleryImages[selected].label}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{galleryImages[selected].icon}</span>
                    <h3 className="text-xl font-heading font-bold gold-gradient">{galleryImages[selected].label}</h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 border border-gold/30 text-gold/70 font-mono text-xs tracking-widest uppercase hover:border-gold/60 hover:text-gold transition-all"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
