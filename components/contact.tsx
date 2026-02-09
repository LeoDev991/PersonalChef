import { MessageCircle, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4 font-medium">
          Contato
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
          Vamos criar algo especial juntos
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Entre em contato para agendar sua experiencia gastronomica exclusiva.
          Estou pronto para transformar sua ocasiao em um momento inesquecivel.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/5541992908695"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
            Fale pelo WhatsApp
          </a>
          <a
            href="https://www.instagram.com/chefvinimartiin"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-widest font-medium hover:border-primary hover:text-primary transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
            Siga no Instagram
          </a>
        </div>

        {/* Decorative tagline */}
        <div className="mt-20">
          <div className="w-12 h-px bg-border mx-auto mb-8" />
          <p className="font-serif text-lg md:text-xl text-muted-foreground italic">
            {"\"A cozinha e o coracao de toda celebracao.\""}
          </p>
          <p className="text-xs uppercase tracking-widest text-primary mt-3">
            Chef Vinicius Pontes Martin
          </p>
        </div>
      </div>
    </section>
  );
}
