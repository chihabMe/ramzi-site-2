"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";
import { type PricingPlan } from "@/sanity";

interface PricingSectionProps {
  pricingPlans?: PricingPlan[];
}

export function PricingSection({ pricingPlans = [] }: PricingSectionProps) {
  const { toast } = useToast();

  const formatPrice = (plan: PricingPlan) => {
    const { amount, currency, period } = plan.price;

    const currencySymbol =
      {
        EUR: "€",
        USD: "$",
        MAD: "DH",
        GBP: "£",
      }[currency] || currency;

    const periodText =
      {
        monthly: "mois",
        quarterly: "3 mois",
        yearly: "an",
        lifetime: "à vie",
      }[period] || period;

    return { amount, symbol: currencySymbol, period: periodText };
  };

  const handleSubscribe = (plan: PricingPlan) => {
    if (plan.ctaUrl) {
      window.open(plan.ctaUrl, "_blank");
    } else {
      toast({
        title: "Abonnement sélectionné",
        description: `Vous avez choisi le plan ${plan.name}`,
      });
    }
  };

  // Fallback static plans if no dynamic data
  const fallbackPlans = [
    {
      _id: "fallback-1",
      _type: "pricing" as const,
      name: "Essai Gratuit",
      description: "Testez notre service gratuitement",
      price: {
        amount: 0,
        currency: "EUR" as const,
        period: "monthly" as const,
      },
      isPopular: false,
      isActive: true,
      order: 1,
      ctaText: "Essayer gratuitement",
      features: [
        { feature: "1000+ chaînes", included: true },
        { feature: "Qualité HD", included: true },
        { feature: "1 appareil", included: true },
        { feature: "Accès limité 24h", included: true },
        { feature: "Films et séries populaires", included: true },
        { feature: "Aucun engagement", included: true },
      ],
      specifications: {
        channels: "1000+",
        quality: "HD" as const,
        devices: "1",
        support: "email" as const,
      },
    },
    {
      _id: "fallback-2",
      _type: "pricing" as const,
      name: "Basic",
      description: "Plan idéal pour débuter",
      price: {
        amount: 45,
        currency: "EUR" as const,
        period: "yearly" as const,
      },
      isPopular: false,
      isActive: true,
      order: 2,
      ctaText: "S'abonner",
      features: [
        { feature: "5000+ chaînes", included: true },
        { feature: "Qualité HD", included: true },
        { feature: "1 appareil simultané", included: true },
        { feature: "Support par email", included: true },
        { feature: "Films et séries", included: true },
      ],
      specifications: {
        channels: "5000+",
        quality: "HD" as const,
        devices: "1",
        support: "email" as const,
      },
    },
    {
      _id: "fallback-3",
      _type: "pricing" as const,
      name: "Premium",
      description: "Le plus populaire",
      price: {
        amount: 55,
        currency: "EUR" as const,
        period: "yearly" as const,
      },
      isPopular: true,
      isActive: true,
      order: 3,
      ctaText: "S'abonner",
      features: [
        { feature: "10000+ chaînes", included: true },
        { feature: "Qualité HD/4K", included: true },
        { feature: "3 appareils simultanés", included: true },
        { feature: "Support prioritaire", included: true },
        { feature: "Films et séries", included: true },
        { feature: "Chaînes premium", included: true },
        { feature: "Enregistrement cloud", included: true },
      ],
      specifications: {
        channels: "10000+",
        quality: "4K" as const,
        devices: "3",
        support: "24_7" as const,
      },
    },
    {
      _id: "fallback-4",
      _type: "pricing" as const,
      name: "VIP",
      description: "L'expérience ultime",
      price: {
        amount: 75,
        currency: "EUR" as const,
        period: "yearly" as const,
      },
      isPopular: false,
      isActive: true,
      order: 4,
      ctaText: "S'abonner",
      features: [
        { feature: "13000+ chaînes", included: true },
        { feature: "Qualité HD/4K/8K", included: true },
        { feature: "5 appareils simultanés", included: true },
        { feature: "Support VIP 24/7", included: true },
        { feature: "Films et séries premium", included: true },
        { feature: "Chaînes adultes", included: true },
        { feature: "PPV événements sportifs", included: true },
        { feature: "Enregistrement illimité", included: true },
      ],
      specifications: {
        channels: "13000+",
        quality: "4K" as const,
        devices: "5",
        support: "24_7" as const,
      },
    },
  ];

  // Use dynamic plans if available, otherwise use fallback
  const plansToShow = pricingPlans.length > 0 ? pricingPlans : fallbackPlans;

  return (
    <section id="tarifs" className="py-24 bg-background">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choisissez votre plan IPTV
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à tous vos besoins de divertissement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plansToShow.map((plan, index) => {
            const priceInfo = formatPrice(plan);

            return (
              <motion.div
                key={plan._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={`p-8 h-full flex flex-col relative transition-all duration-300 hover:shadow-lg ${
                    plan.isPopular
                      ? "border-2 border-primary shadow-xl scale-105"
                      : "border"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Populaire</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    {plan.description && (
                      <p className="text-muted-foreground text-sm mb-4">
                        {plan.description}
                      </p>
                    )}
                    <div className="mb-4">
                      <span className="text-4xl font-bold">
                        {priceInfo.amount === 0 ? "Gratuit" : priceInfo.amount}
                      </span>
                      {priceInfo.amount > 0 && (
                        <>
                          <span className="text-xl">{priceInfo.symbol}</span>
                          <span className="text-muted-foreground">
                            /{priceInfo.period}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Technical Specifications */}
                    {plan.specifications && (
                      <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-3 text-sm">
                          Spécifications:
                        </h4>
                        <div className="space-y-2 text-sm">
                          {plan.specifications.channels && (
                            <div className="flex justify-between">
                              <span>Chaînes:</span>
                              <span className="font-medium">
                                {plan.specifications.channels}
                              </span>
                            </div>
                          )}
                          {plan.specifications.quality && (
                            <div className="flex justify-between">
                              <span>Qualité:</span>
                              <span className="font-medium">
                                {plan.specifications.quality}
                              </span>
                            </div>
                          )}
                          {plan.specifications.devices && (
                            <div className="flex justify-between">
                              <span>Appareils:</span>
                              <span className="font-medium">
                                {plan.specifications.devices}
                              </span>
                            </div>
                          )}
                          {plan.specifications.support && (
                            <div className="flex justify-between">
                              <span>Support:</span>
                              <span className="font-medium">
                                {plan.specifications.support === "24_7"
                                  ? "24/7"
                                  : plan.specifications.support === "business"
                                  ? "Heures ouvrables"
                                  : "Email uniquement"}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    {plan.features && plan.features.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            )}
                            <span
                              className={`text-sm ${
                                feature.included
                                  ? "text-foreground"
                                  : "text-muted-foreground line-through"
                              }`}
                            >
                              {feature.feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Button
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full mt-auto ${
                      plan.isPopular
                        ? "bg-gradient-primary hover:opacity-90"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                    size="lg"
                  >
                    {plan.ctaText || "S'abonner"}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Besoin d&apos;aide pour choisir ? Contactez notre équipe
          </p>
          <Button variant="outline" size="lg">
            Contacter le support
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
