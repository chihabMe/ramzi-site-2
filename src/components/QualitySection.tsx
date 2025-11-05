import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Qualité HD/4K",
    description: "Streaming en haute définition jusqu'à 4K",
  },
  {
    icon: Zap,
    title: "Zéro buffering",
    description: "Connexion ultra-rapide et stable",
  },
  {
    icon: Shield,
    title: "Sécurisé",
    description: "Protection de vos données personnelles",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Accès permanent à vos contenus",
  },
];

export function QualitySection() {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Fournir un abonnement IPTV de qualité en direct
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              IPTV Pro vous offre une expérience de streaming exceptionnelle
              avec plus de 13 000 chaînes en direct et une bibliothèque complète
              de films et séries. Notre technologie avancée garantit une qualité
              d&apos;image parfaite et une diffusion sans interruption.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <feature.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#tarifs">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90"
              >
                Découvrir nos forfaits
              </Button>
            </a>
          </div>

          <div className="relative">
            <Card className="p-8 bg-card shadow-glow">
              <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">📺</div>
                  <h3 className="text-2xl font-bold">Live TV</h3>
                  <p className="text-white/80">13 000+ chaînes</p>
                </div>
              </div>
            </Card>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-glow animate-pulse">
              <div className="text-center">
                <div className="text-xl font-bold">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
