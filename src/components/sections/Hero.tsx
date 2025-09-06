import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511994080589";
    const message = "Olá! Tenho interesse e gostaria de agendar uma consultoria para o meu negócio, poderia me orientar sobre a disponibilidade?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-pink/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 text-center z-10 max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
          <Zap className="w-5 h-5 text-neon-purple" />
          <span className="text-sm font-medium text-gradient-primary">Zynx.Ai - Inteligência Artificial para Negócios</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="text-gradient-hero">
            Transformamos sua empresa
          </span>
          <br />
          <span className="text-white">
            em uma máquina de
          </span>
          <br />
          <span className="text-gradient-primary">
            lucro e eficiência!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          "É como contratar um exército de especialistas — 
          <span className="text-gradient-secondary font-semibold"> sem precisar contratar ninguém."</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleWhatsAppContact}
            className="text-lg px-8 py-6 h-auto"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="neon" 
            size="lg"
            onClick={scrollToAbout}
            className="text-lg px-8 py-6 h-auto"
          >
            Conhecer Nossa Metodologia
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-gradient-primary mb-2">150+</div>
            <div className="text-muted-foreground">Empresas Atendidas</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-gradient-primary mb-2">R$ 10M+</div>
            <div className="text-muted-foreground">Gerados em Faturamento</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-gradient-primary mb-2">5+ Anos</div>
            <div className="text-muted-foreground">de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;