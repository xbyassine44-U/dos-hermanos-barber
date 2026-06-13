"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

const categories = ["Tout", "Coupe", "Barbe", "Salon", "Rasage", "Style", "Équipe"];

const bentoLayout = [
  { span: "bento-full", row: "row-span-2" },
  { span: "bento-span-2", row: "" },
  { span: "", row: "" },
  { span: "", row: "" },
  { span: "bento-span-2", row: "" },
  { span: "", row: "bento-row-2" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("Tout");

  const filtered = filter === "Tout"
    ? siteData.gallery
    : siteData.gallery.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-sepia/20 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold/50">— Portfolio —</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-5 mb-4">
            <span className="gold-gradient">Notre Travail</span>
          </h2>
          <div className="divider-gold w-24 mx-auto my-6" />
          <p className="text-frost/50 max-w-xl mx-auto font-light text-lg">
            Chaque coupe raconte une histoire. Découvrez notre savoir-faire à travers nos réalisations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`chip text-xs ${filter === cat ? "chip-active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="bento-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const layout = bentoLayout[i % bentoLayout.length];
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelected(p.id)}
                  className={`bento-item glass group cursor-pointer overflow-hidden ${layout.span} ${layout.row} transition-all duration-500 ${
                    selected === p.id ? "ring-2 ring-gold/40 scale-[1.02] z-10" : "hover:ring-1 hover:ring-gold/20"
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="px-4 py-2 border border-gold/40 text-gold font-mono text-xs tracking-widest uppercase">
                      {p.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] glass-strong overflow-hidden"
            >
              {(() => {
                const item = siteData.gallery.find((g) => g.id === selected);
                if (!item) return null;
                return (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain max-h-[75vh]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian/90 to-transparent">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-heading font-bold gold-gradient">{item.category}</h3>
                          <p className="text-sm text-frost/50 font-light mt-1">{item.alt}</p>
                        </div>
                        <button
                          onClick={() => setSelected(null)}
                          className="px-4 py-2 border border-gold/30 text-gold/70 font-mono text-xs tracking-widest uppercase hover:border-gold/60 hover:text-gold transition-all"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
