"use client";

import { motion } from "framer-motion";

export default function ShopVideo() {
  return (
    <section id="video" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-wood/10 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold/50">— Immersion —</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-5 mb-4">
            <span className="gold-gradient">Découvrez le Salon</span>
          </h2>
          <div className="divider-gold w-24 mx-auto my-6" />
          <p className="text-frost/50 max-w-xl mx-auto font-light text-lg">
            Plongez dans l&apos;atmosphère de Dos Hermanos. Un espace où le luxe discret rencontre la tradition du barbering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto aspect-video glass overflow-hidden group"
        >
          <div className="absolute inset-0 shimmer" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            poster="/images/pagina-principal.jpg"
          >
            <source src="/videos/shop-tour.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/20 z-10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian/80 to-transparent z-20">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-mono text-[11px] text-frost/40 tracking-wider">Vidéo promotionnelle — Dos Hermanos</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-4 font-mono text-xs text-frost-dark/30 tracking-wider">
            <span>Vidéo réelle du salon</span>
            <span className="text-frost-dark/10">·</span>
            <span>Format cinématographique</span>
            <span className="text-frost-dark/10">·</span>
            <span>Dos Hermanos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
