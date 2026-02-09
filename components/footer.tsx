import { MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl tracking-wider text-primary mb-1">
              Chef Vinicius
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Personal Chef
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Experiencias gastronomicas exclusivas que transformam momentos em
              memorias inesqueciveis.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start md:items-center">
            <p className="text-xs uppercase tracking-widest text-foreground mb-4 font-medium">
              Navegacao
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#sobre", label: "Sobre" },
                { href: "#servicos", label: "Servicos" },
                { href: "#galeria", label: "Galeria" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-xs uppercase tracking-widest text-foreground mb-4 font-medium">
              Redes Sociais
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5541992908695"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/chefvinimartiin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            {`\u00A9 ${new Date().getFullYear()} Chef Vinicius Pontes Martin. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
