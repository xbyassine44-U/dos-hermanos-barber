"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData, whatsappUrl } from "@/data/siteData";

const links = [
  { id: "hero", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Galerie" },
  { id: "video", label: "Présentation" },
  { id: "booking", label: "Réservation" },
  { id: "location", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/85 backdrop-blur-2xl border-b border-gold/10 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollTo("hero")} className="group flex items-center gap-3">
            <img src="/images/logo-dos-hermanos.jpg" alt="Dos Hermanos" className="h-10 w-auto object-contain" />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="relative px-4 py-2 text-sm font-body text-frost/60 hover:text-gold transition-colors duration-300 group tracking-wide"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 text-sm font-semibold font-body text-obsidian bg-gold hover:bg-gold-light transition-all duration-300 tracking-wider uppercase"
            >
              Réserver
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-gold"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[1.5px] bg-gold"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1.5px] bg-gold"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gold/10 bg-obsidian/95 backdrop-blur-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="w-full text-left px-4 py-3 text-sm font-body text-frost/60 hover:text-gold hover:bg-gold/5 transition-all"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full text-center px-5 py-3 text-sm font-semibold text-obsidian bg-gold hover:bg-gold-light transition-all tracking-wider uppercase"
              >
                Réserver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
