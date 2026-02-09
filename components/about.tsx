import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
            <Image
              src="/images/chef.jpg"
              alt="Chef Vinicius Pontes Martins"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4 font-medium">
              Sobre o Chef
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
              Vinicius Pontes Martins
            </h2>
            <div className="w-12 h-px bg-primary mb-8" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Com anos de dedicacao a alta gastronomia, o Chef Vinicius
                construiu uma carreira marcada pela excelencia, criatividade e
                uma paixao inegavel pela culinaria. Sua formacao inclui
                passagens por cozinhas renomadas, onde aprimorou tecnicas
                classicas e desenvolveu um estilo autoral inconfundivel.
              </p>
              <p>
                Especialista em criar experiencias gastronomicas sob medida,
                cada prato e pensado como uma obra de arte que une sabor,
                estetica e emocao. Dos ingredientes selecionados a mao ate a
                apresentacao impecavel, cada detalhe e cuidadosamente planejado
                para surpreender e encantar.
              </p>
              <p>
                Seja em um jantar intimo ou em um grande evento, o Chef Vinicius
                transforma alimentos em memorias inesqueciveis, oferecendo uma
                jornada sensorial unica a cada convidado.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { number: "10+", label: "Anos de experiencia" },
                { number: "500+", label: "Eventos realizados" },
                { number: "100%", label: "Dedicacao" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl text-primary">
                    {stat.number}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
