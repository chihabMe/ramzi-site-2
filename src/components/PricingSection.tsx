"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Essai Gratuit",
    price: "0",
    duration: "24 heures",
    popular: false,
    isFree: true,
    features: [
      "1000+ chaînes",
      "Qualité HD",
      "1 appareil",
      "Accès limité 24h",
      "Films et séries populaires",
      "Aucun engagement",
    ],
  },
  {
    name: "Basic",
    price: "19,99",
    duration: "1 mois",
    popular: false,
    features: [
      "5000+ chaînes",
      "Qualité HD",
      "1 appareil simultané",
      "Support par email",
      "Films et séries",
    ],
  },
  {
    name: "Premium",
    price: "49,99",
    duration: "3 mois",
    popular: true,
    features: [
      "10000+ chaînes",
      "Qualité HD/4K",
      "3 appareils simultanés",
      "Support prioritaire",
      "Films et séries",
      "Chaînes premium",
      "Enregistrement cloud",
    ],
  },
  {
    name: "VIP",
    price: "79,99",
    duration: "6 mois",
    popular: false,
    features: [
      "13000+ chaînes",
      "Qualité HD/4K/8K",
      "5 appareils simultanés",
      "Support VIP 24/7",
      "Films et séries illimités",
      "Toutes chaînes premium",
      "Enregistrement cloud illimité",
      "Accès anticipé nouveautés",
    ],
  },
];

export function PricingSection() {
  const { toast } = useToast();

  const handleSubscribe = (
    planName: string,
    price: string,
    duration: string,
    isFree?: boolean
  ) => {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    let message;

    if (isFree) {
      message = `Bonjour! Je souhaiterais bénéficier de l'essai gratuit IPTV de 24 heures. Pouvez-vous m'envoyer les détails de connexion? Merci!`;
    } else {
      message = `Bonjour! Je suis intéressé(e) par l'abonnement IPTV ${planName} à ${price}€ pour ${duration}. Pouvez-vous m'aider à finaliser mon abonnement? Merci!`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    toast({
      title: isFree ? "Demande d'essai gratuit" : "Redirection vers WhatsApp",
      description: isFree
        ? "Votre demande d'essai gratuit va être traitée via WhatsApp."
        : `Vous allez être redirigé vers WhatsApp pour finaliser votre abonnement ${planName}.`,
    });
  };

  return (
    <section id="tarifs" className="py-20 bg-gradient-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choisissez votre plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sélectionnez l&apos;abonnement qui correspond le mieux à vos besoins
            de divertissement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative p-6 ${
                plan.popular
                  ? "border-primary shadow-glow ring-2 ring-primary"
                  : plan.isFree
                  ? "border-green-500 shadow-glow ring-2 ring-green-500 bg-green-50 dark:bg-green-950/10"
                  : "shadow-card hover:shadow-glow"
              } transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Plus populaire
                  </div>
                </div>
              )}

              {plan.isFree && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z"
                      />
                    </svg>
                    Essai Gratuit
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div
                  className={`text-3xl font-bold mb-1 ${
                    plan.isFree ? "text-green-600" : "text-primary"
                  }`}
                >
                  {plan.isFree ? "GRATUIT" : `${plan.price}€`}
                </div>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full cursor-pointer ${
                  plan.isFree
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                } font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300 active:scale-95`}
                onClick={() =>
                  handleSubscribe(
                    plan.name,
                    plan.price,
                    plan.duration,
                    plan.isFree
                  )
                }
              >
                <span className="flex items-center justify-center">
                  {plan.isFree ? "Essayer Gratuitement" : "S'abonner"}
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-2">
            Tous nos plans incluent une garantie satisfait ou remboursé de 7
            jours
          </p>
          <p className="text-xs text-muted-foreground">
            🎁 <strong>Essai gratuit de 24 heures</strong> • Aucune carte
            bancaire requise • Accès instantané
          </p>
        </div>
      </div>
    </section>
  );
}
