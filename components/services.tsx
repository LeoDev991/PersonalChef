import { UtensilsCrossed, Wine, Sparkles } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Jantares Privados",
    description:
      "Uma experiencia gastronomica exclusiva no conforto da sua casa. Menus personalizados, ingredientes premium e servico completo para transformar sua noite em algo verdadeiramente memoravel.",
  },
  {
    icon: Wine,
    title: "Eventos Gastronomicos",
    description:
      "Do planejamento a execucao impecavel. Festas, celebracoes corporativas e eventos sociais com cardapios elaborados sob medida para impressionar seus convidados.",
  },
  {
    icon: Sparkles,
    title: "Experiencias Personalizadas",
    description:
      "Aulas de culinaria, degustacoes tematicas e jornadas gastronomicas criadas especialmente para voce. Cada experiencia e unica, projetada para surpreender e inspirar.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4 font-medium">
            Nossos Servicos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Experiencias sob medida
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada servico e cuidadosamente planejado para oferecer uma
            experiencia gastronomica unica, personalizada de acordo com suas
            preferencias e ocasiao.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-secondary p-8 lg:p-10 border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="mb-6">
                <service.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/5541992908695"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            Solicite um Orcamento
          </a>
        </div>
      </div>
    </section>
  );
}
