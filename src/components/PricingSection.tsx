"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
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
    duration: string
  ) => {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    const message = `Bonjour! Je suis intéressé(e) par l&apos;abonnement IPTV ${planName} à ${price}€ pour ${duration}. Pouvez-vous m&apos;aider à finaliser mon abonnement? Merci!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirection vers WhatsApp",
      description: `Vous allez être redirigé vers WhatsApp pour finaliser votre abonnement ${planName}.`,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative p-6 ${
                plan.popular
                  ? "border-primary shadow-glow ring-2 ring-primary"
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

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {plan.price}€
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
                className={`w-full py-3 px-6 font-semibold text-base cursor-pointer transition-all duration-300 transform ${
                  plan.popular
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl  hover:-translate-y-1 ring-2 ring-gray-600/50"
                    : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white shadow-lg hover:shadow-xl  hover:-translate-y-1"
                } active:scale-95`}
                onClick={() =>
                  handleSubscribe(plan.name, plan.price, plan.duration)
                }
              >
                <span className="flex items-center justify-center">
                  S&apos;abonner
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
          <p className="text-sm text-muted-foreground">
            Tous nos plans incluent une garantie satisfait ou remboursé de 7
            jours
          </p>
        </div>
      </div>
    </section>
  );
}
