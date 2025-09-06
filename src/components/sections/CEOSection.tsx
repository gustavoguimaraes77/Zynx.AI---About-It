import { Card } from "@/components/ui/card";
import { Mail, User } from "lucide-react";
import matheusImage from "@/assets/matheus-ceo.png";
import gustavoImage from "@/assets/gustavo-ceo.jpeg";

const CEOSection = () => {
  const ceos = [
    {
      name: "Matheus Guimarães",
      email: "zynxcontato@gmail.com",
      position: "Fundador Zynx.AI",
      image: matheusImage,
      description: (
        <>
          Fundador e líder da Agência Zynx.AI. Sou especialista em <span className="text-gradient-hero">automação e gestão de tráfego</span>, com mais de cinco anos de experiência em posições de liderança. Anteriormente à Zynx.AI, gerenciei minha própria agência de tráfego, lidando com <span className="text-gradient-hero">grandes nomes</span> do <span className="text-gradient-hero">mercado digital</span>. Nossos clientes ultrapassam a marca de <span className="text-gradient-hero">R$ 10 milhões em faturamento</span>, demonstrando minha capacidade de gerar resultados expressivos. Minha missão é fazer com que os negócios de nossos clientes lucrem de forma exponencial, utilizando <span className="text-gradient-hero">estratégias inteligentes de tráfego e automação</span>.
        </>
      )
    },
    {
      name: "Gustavo Guimarães",
      email: "gustavocontatozynx@gmail.com",
      position: "Co-Fundador e Desenvolvedor Líder Full-stack",
      image: gustavoImage,
      description: (
        <>
          Na Agência Zynx.AI, eu, Gustavo Guimarães, lidero e desenvolvo soluções como <span className="text-gradient-hero">gestor e desenvolvedor Full-stack</span>. Minha paixão por tecnologia se traduz em mais de quatro anos de experiência dedicada à <span className="text-gradient-hero">programação e automação</span>. Minha jornada profissional inclui a implementação bem-sucedida de <span className="text-gradient-hero">softwares e automações</span> em ambientes complexos e variados. Atendi com sucesso nichos como cooperativas alimentícias, empresas metalúrgicas, automotivas e agrícolas, distribuidoras e laboratórios farmacêuticos, adaptando as soluções às necessidades específicas de cada negócio. Na <span className="text-gradient-hero">Zynx.AI</span>, combinamos <span className="text-gradient-hero">conhecimento técnico</span> com <span className="text-gradient-hero">visão estratégica</span> para entregar <span className="text-gradient-hero">automações inteligentes</span> que geram valor real.
        </>
      )
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-neon-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-neon-pink rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-hero">Conheça Nossos</span>
            <br />
            <span className="text-gradient-primary">Líderes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A expertise e visão que impulsionam os resultados extraordinários da Zynx.AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {ceos.map((ceo, index) => (
            <Card key={index} className="p-8 gradient-card border-border/20 card-shadow hover:border-neon-purple/30 smooth-transition group">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <img 
                    src={ceo.image} 
                    alt={`${ceo.name} - ${ceo.position}`}
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-neon-purple/30 group-hover:border-neon-purple/60 smooth-transition"
                  />
                  <div className="absolute -bottom-3 -right-3 p-3 rounded-full gradient-primary">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{ceo.name}</h3>
                <p className="text-base md:text-lg text-gradient-hero font-medium mb-6">{ceo.position}</p>
                <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{ceo.email}</span>
                </div>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {ceo.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/30 border border-border/20">
            <span className="text-gradient-hero font-semibold">
              Liderança técnica e estratégica para resultados excepcionais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;