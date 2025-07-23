"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  MessageCircle,
  ChevronDown,
  Tv,
  Wifi,
  Shield,
  Clock,
  CreditCard,
  Smartphone,
} from "lucide-react";

const faqData = [
  {
    id: "1",
    question: "Qu'est-ce que l'IPTV et comment ça fonctionne ?",
    answer:
      "L'IPTV (Internet Protocol Television) est une technologie qui permet de diffuser des chaînes de télévision via Internet. Contrairement à la télévision traditionnelle, l'IPTV utilise votre connexion Internet pour vous offrir des milliers de chaînes en haute qualité, accessible sur tous vos appareils.",
    icon: Tv,
    category: "Général",
  },
  {
    id: "2",
    question: "Quelle vitesse Internet est nécessaire pour l'IPTV ?",
    answer:
      "Pour une expérience optimale, nous recommandons une connexion Internet d'au moins 10 Mbps pour la HD et 25 Mbps pour la 4K. Une connexion stable est plus importante que la vitesse pure. La plupart des connexions ADSL, fibre ou 4G conviennent parfaitement.",
    icon: Wifi,
    category: "Technique",
  },
  {
    id: "3",
    question: "Sur quels appareils puis-je regarder IPTV Pro ?",
    answer:
      "IPTV Pro est compatible avec tous les appareils modernes : Smart TV (Samsung, LG, Android TV), box Android, iPhone, iPad, smartphones Android, PC, Mac, tablettes, Amazon Fire Stick, Roku, et bien d'autres. Une seule souscription pour tous vos appareils.",
    icon: Smartphone,
    category: "Compatibilité",
  },
  {
    id: "4",
    question: "L'IPTV est-il légal et sécurisé ?",
    answer:
      "Oui, notre service IPTV Pro est 100% légal et sécurisé. Nous respectons tous les droits de diffusion et utilisons des serveurs sécurisés avec chiffrement SSL. Vos données personnelles sont protégées et nous ne conservons aucun historique de visionnage.",
    icon: Shield,
    category: "Sécurité",
  },
  {
    id: "5",
    question: "Combien de temps faut-il pour l'activation ?",
    answer:
      "L'activation est instantanée ! Dès réception de votre paiement, vous recevez immédiatement vos identifiants par email. L'installation prend seulement 2-3 minutes et notre équipe technique est disponible 24h/7j pour vous accompagner.",
    icon: Clock,
    category: "Activation",
  },
  {
    id: "6",
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons tous les moyens de paiement sécurisés : Cartes bancaires (Visa, Mastercard), PayPal, virements bancaires, et cryptomonnaies. Tous les paiements sont sécurisés par SSL et nous ne stockons aucune donnée bancaire.",
    icon: CreditCard,
    category: "Paiement",
  },
  {
    id: "7",
    question: "Puis-je tester le service avant de m'abonner ?",
    answer:
      "Absolument ! Nous proposons un essai gratuit de 24h pour que vous puissiez tester la qualité de nos chaînes et la stabilité du service. De plus, nous offrons une garantie satisfait ou remboursé de 7 jours sur tous nos abonnements.",
    icon: HelpCircle,
    category: "Essai",
  },
  {
    id: "8",
    question: "Que faire si j'ai des problèmes techniques ?",
    answer:
      "Notre équipe support technique est disponible 24h/7j via chat en direct, email ou téléphone. Nous résolvons 95% des problèmes en moins de 30 minutes. Nous proposons aussi des guides détaillés et tutoriels vidéo pour l'installation et la configuration.",
    icon: MessageCircle,
    category: "Support",
  },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("");

  const handleWhatsAppClick = () => {
    const phoneNumber =
      process.env.NEXT_PUBLIC_WHATSUP_NUMBER || "212600000000";
    const message =
      "Bonjour, j'ai une question concernant vos services IPTV Pro.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Questions Fréquentes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            FAQ - Vos Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement des réponses à toutes vos questions sur notre
            service IPTV Pro
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 shadow-2xl bg-gradient-to-br from-background via-background to-muted/10 border-border/50 relative overflow-hidden">
              {/* Card decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

              <div className="relative z-10">
                <Accordion
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                  className="space-y-4"
                >
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <AccordionItem
                        value={faq.id}
                        className="border border-border/40 rounded-lg bg-gradient-to-r from-background to-muted/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline group [&[data-state=open]>div>svg]:rotate-180">
                          <div className="flex items-center gap-4 text-left">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                openItem === faq.id
                                  ? "bg-gradient-primary text-white shadow-lg scale-110"
                                  : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                              }`}
                            >
                              <faq.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                  {faq.question}
                                </h3>
                                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4" />
                              </div>
                              <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full mt-1 inline-block">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: openItem === faq.id ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-14"
                          >
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Vous avez d'autres questions ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                  Notre équipe support est disponible 24h/7j pour répondre à
                  toutes vos questions et vous accompagner dans votre expérience
                  IPTV Pro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg font-semibold px-8 py-3"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat en direct
                  </Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg font-semibold px-8 py-3 w-full"
                    >
                      Nous contacter
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
