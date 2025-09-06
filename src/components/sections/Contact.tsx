import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Zap } from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511994080589";
    const message = "Olá! Tenho interesse e gostaria de agendar uma consultoria para o meu negócio, poderia me orientar sobre a disponibilidade?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-neon-purple/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-neon-pink/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 gradient-card border-border/20 card-shadow">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/20 border border-neon-purple/30 mb-6">
                <Zap className="w-5 h-5 text-neon-purple" />
                <span className="text-sm font-medium text-neon-purple">Consultoria Gratuita</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-hero">Fale com Nossos</span>
                <br />
                <span className="text-gradient-primary">Especialistas</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Agende uma conversa sem compromisso e descubra o 
                <span className="text-gradient-secondary font-semibold"> potencial de automação </span>
                da sua empresa!
              </p>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="text-lg px-12 py-6 h-auto group relative overflow-hidden"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 smooth-transition" />
                Agendar Consultoria Gratuita
                <Phone className="w-5 h-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Resposta em menos de 10 segundos • 100% Gratuito • Sem compromisso
              </p>
            </div>

            {/* Trust elements */}
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-gradient-primary mb-1">Gratuito</div>
                  <div className="text-sm text-muted-foreground">Consultoria inicial sem custo</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-gradient-primary mb-1">Personalizada</div>
                  <div className="text-sm text-muted-foreground">Análise específica do seu negócio</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-gradient-primary mb-1">Resultados</div>
                  <div className="text-sm text-muted-foreground">Estratégias comprovadas</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;