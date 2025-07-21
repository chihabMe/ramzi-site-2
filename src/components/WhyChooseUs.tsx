import { Card } from "@/components/ui/card";
import {
  Tv,
  Headphones,
  Users,
  Smartphone,
  HelpCircle,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Télévision en direct",
    description: "Accès à plus de 13 000 chaînes en direct",
    position: "top-left",
  },
  {
    icon: Headphones,
    title: "Support 24h/24",
    description: "Assistance technique disponible à tout moment",
    position: "top-right",
  },
  {
    icon: Users,
    title: "+13 000 chaînes",
    description: "La plus grande sélection de chaînes",
    position: "middle-left",
  },
  {
    icon: Smartphone,
    title: "Lecture sur tous les appareils",
    description: "Compatible avec tous vos appareils",
    position: "middle-right",
  },
  {
    icon: HelpCircle,
    title: "Assistance gratuite",
    description: "Installation et configuration gratuites",
    position: "bottom-left",
  },
  {
    icon: Zap,
    title: "Serveurs rapides",
    description: "Performance optimale garantie",
    position: "bottom-right",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pourquoi choisir notre serveur
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les avantages qui font d&apos;IPTV Pro le meilleur choix
            pour votre divertissement
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central image/visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-primary rounded-full items-center justify-center shadow-glow hidden md:flex">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">👩‍💼</div>
                <h3 className="text-lg font-bold">IPTV Pro</h3>
                <p className="text-sm text-white/80">Votre solution</p>
              </div>
            </div>
          </div>

          {/* Feature cards positioned around the circle */}
          <div className="relative h-auto md:h-[500px]">
            {/* Mobile grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="w-full p-6 bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div className="mb-4">
                      <feature.icon className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Desktop positioned layout */}
            <div className="hidden md:block">
              {features.map((feature, index) => {
                const positions = {
                  "top-left": "top-0 left-0 md:top-8 md:left-8",
                  "top-right": "top-0 right-0 md:top-8 md:right-8",
                  "middle-left": "top-1/2 left-0 -translate-y-1/2 md:left-0",
                  "middle-right": "top-1/2 right-0 -translate-y-1/2 md:right-0",
                  "bottom-left": "bottom-0 left-0 md:bottom-8 md:left-8",
                  "bottom-right": "bottom-0 right-0 md:bottom-8 md:right-8",
                };

                return (
                  <Card
                    key={feature.title}
                    className={`absolute w-full max-w-xs p-6 bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                      positions[feature.position as keyof typeof positions]
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-center">
                      <div className="mb-4">
                        <feature.icon className="h-8 w-8 text-primary mx-auto" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
