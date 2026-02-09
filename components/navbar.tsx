"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex flex-col">
            <span className="font-serif text-xl tracking-wider text-primary">
              Chef Vinicius
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Personal Chef
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/5541992908695"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            Agende Agora
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5541992908695"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Agende Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
