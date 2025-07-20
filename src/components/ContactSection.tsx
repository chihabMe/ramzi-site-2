"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Envoyez-nous un email",
    contact: "support@iptvpro.fr",
    href: "mailto:support@iptvpro.fr",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "Appelez-nous directement",
    contact: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MessageCircle,
    title: "Chat en direct",
    description: "Support instantané",
    contact: "Disponible 24h/7j",
    href: "#chat",
  },
  {
    icon: Clock,
    title: "Horaires",
    description: "Support client",
    contact: "Lun-Dim: 8h-22h",
    href: null,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un problème ? Notre équipe est là pour vous aider
            24h/24 et 7j/7
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Informations de contact
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nous sommes disponibles pour répondre à toutes vos questions
                  concernant nos services IPTV Pro.
                </p>
              </div>

              <div className="grid gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 shadow-card hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {info.description}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary font-medium hover:underline"
                          >
                            {info.contact}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">
                            {info.contact}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* FAQ Quick Links */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h4 className="font-bold text-lg mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Questions fréquentes
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Consultez notre FAQ pour des réponses immédiates aux questions
                  les plus courantes.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Voir la FAQ
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-card">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Envoyez-nous un message
                  </h3>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-dessous et nous vous répondrons
                    dans les plus brefs délais.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-green-600 mb-2">
                      Message envoyé !
                    </h4>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Nous vous répondrons sous 24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          required
                          className="border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          required
                          className="border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Objet de votre message"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre demande en détail..."
                        required
                        rows={6}
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d&apos;aide immédiate ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe de support technique est disponible 24h/24 pour vous
              assister avec votre service IPTV Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Appeler maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat en direct
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
