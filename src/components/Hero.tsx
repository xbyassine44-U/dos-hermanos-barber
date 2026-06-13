"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData, whatsappUrl } from "@/data/siteData";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian/80 via-obsidian/40 to-wood/70 z-10" />
        <div className="absolute inset-0 z-[3] opacity-[0.15] pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(ellipse at 25% 50%, rgba(201,168,76,0.25) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 30%, rgba(201,168,76,0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 85%, rgba(61,35,23,0.4) 0%, transparent 50%)
          `,
        }} />
        <div className="absolute inset-0 z-[4] opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(201,168,76,0.08) 49px, rgba(201,168,76,0.08) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(201,168,76,0.08) 49px, rgba(201,168,76,0.08) 50px)`,
        }} />
        <div className="absolute inset-0 z-[2] opacity-30" style={{
          background: `radial-gradient(circle at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)`,
        }} />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/pagina-principal.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-[5]" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-obsidian to-transparent z-[5]" />
      </motion.div>

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-gold/60 px-4 py-2 border border-gold/15 glass">
            Tétouan — Maroc
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold tracking-tight mb-4"
        >
          <span className="gold-gradient text-glow-strong">{siteData.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl lg:text-2xl font-light text-frost/60 max-w-xl mb-2 tracking-wide"
        >
          {siteData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-xs text-frost/40 tracking-wider">Ouvert aujourd'hui</span>
          <span className="text-frost/20">|</span>
          <span className="font-mono text-xs text-gold/50">★ 5.0</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 overflow-hidden"
          >
            <span className="absolute inset-0 gold-gradient-solid transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
            <span className="relative z-10 font-body font-semibold text-sm tracking-[0.15em] uppercase text-obsidian">
              Prendre Rendez-vous
            </span>
          </a>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-10 py-4 border border-gold/20 hover:border-gold/50 transition-all duration-500"
          >
            <span className="font-body text-sm tracking-[0.15em] uppercase text-frost/50 group-hover:text-gold transition-colors duration-500">
              Nos Services
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-frost/20">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
