import { Card } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Target,
      title: "Ter clareza sobre onde investir e o que cortar",
      description: "Decisões baseadas em dados reais"
    },
    {
      icon: TrendingUp,
      title: "Vender mais com menos desperdício de recursos",
      description: "Otimização inteligente de campanhas"
    },
    {
      icon: CheckCircle,
      title: "Construir uma marca forte e competitiva",
      description: "Posicionamento estratégico no mercado"
    },
    {
      icon: Zap,
      title: "Automatizar processos e ganhar escala",
      description: "Tecnologia trabalhando para você"
    }
  ];

  return (
    <section id="about-section" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-pink rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Problem statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient-primary">Todo empresário sabe</span>
            <br />
            <span className="text-white">como é frustrante investir em</span>
            <br />
            <span className="text-gradient-secondary">marketing sem clareza</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Campanhas que não convertem, tempo perdido testando estratégias, 
            concorrentes avançando enquanto o faturamento estagna.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 gradient-card border-border/20 card-shadow">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-hero">A Zynx nasceu para resolver</span>
                <br />
                <span className="text-white">exatamente essas dores.</span>
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unimos estratégia digital de alta performance com o poder da Inteligência Artificial 
                para transformar dados em decisões inteligentes e campanhas em resultados reais.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card/30 border border-border/20 hover:border-neon-purple/30 smooth-transition">
                  <div className="p-2 rounded-lg gradient-primary">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Company description */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Nos últimos anos, já apoiamos mais de <span className="text-gradient-primary font-semibold">150 empresas</span> no Brasil e no mundo, 
            sempre com um objetivo claro: tirar o peso do marketing das costas do empresário e 
            transformar esforço em <span className="text-gradient-secondary font-semibold">lucro previsível</span>.
          </p>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/30 border border-border/20">
            <Zap className="w-5 h-5 text-neon-purple" />
            <span className="font-semibold text-gradient-hero">
              Zynx – onde inteligência e estratégia se encontram para fazer sua empresa crescer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;