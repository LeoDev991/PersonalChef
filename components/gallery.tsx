"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Prato gourmet de carne premium" },
  { src: "/images/gallery-2.jpg", alt: "Sobremesa sofisticada" },
  { src: "/images/gallery-3.jpg", alt: "Frutos do mar elegantes" },
  { src: "/images/gallery-4.jpg", alt: "Jantar privado com velas" },
  { src: "/images/gallery-5.jpg", alt: "Chef preparando prato gourmet" },
  { src: "/images/gallery-6.jpg", alt: "Evento gastronomico exclusivo" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4 font-medium">
            Galeria
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Arte em cada detalhe
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma selecao de momentos que refletem a paixao, a tecnica e o
            cuidado dedicados a cada experiencia gastronomica.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              aria-label={`Ver ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs uppercase tracking-widest text-foreground font-medium">
                  Ver Mais
                </span>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setSelectedImage(
                  selectedImage > 0 ? selectedImage - 1 : images.length - 1
                )
              }
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Anterior
            </button>
            <span className="text-xs text-muted-foreground">
              {selectedImage + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() =>
                setSelectedImage(
                  selectedImage < images.length - 1 ? selectedImage + 1 : 0
                )
              }
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Proximo
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
