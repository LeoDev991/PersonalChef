import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Gastronomia premium pelo Chef Vinicius"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6 font-medium">
          Personal Chef
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-6 text-balance">
          A arte da gastronomia em sua mesa
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mb-6" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Experiencias gastronomicas exclusivas e personalizadas, criadas com
          ingredientes selecionados e tecnica refinada para transformar cada
          momento em uma celebracao de sabores.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5541992908695"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            Agende sua Experiencia
          </a>
          <a
            href="#sobre"
            className="border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-widest font-medium hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Conheca o Chef
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-primary/50 animate-pulse" />
      </div>
    </section>
  );
}
