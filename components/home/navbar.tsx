"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, whatsappUrl } from "@/components/home/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-nav fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "site-nav-scrolled" : ""}`}>
      <nav className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Space Tech, ir al inicio">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="font-space text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base">SpaceTech</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-cta hidden sm:inline-flex">
            Hablemos <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-cyan-200/10 bg-[#061426]/95 px-5 pb-6 pt-3 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto grid max-w-[90rem] gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-base text-slate-200 hover:bg-white/[0.05]">{item.label}</a>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black">
                Hablemos <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
