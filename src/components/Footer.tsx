import { Button } from "@/components/ui/button";
import { Tv, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Accueil", href: "#" },
  { name: "Tarifs", href: "#tarifs" },
  { name: "Chaînes", href: "#chaines" },
  { name: "Support", href: "#support" },
];

const legalLinks = [
  { name: "Mentions légales", href: "#" },
  { name: "Politique de confidentialité", href: "#" },
  { name: "Conditions d'utilisation", href: "#" },
  { name: "CGV", href: "#" },
];

const paymentMethods = ["💳", "🏦", "💰", "📱"];
const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Tv className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">IPTV Pro</span>
            </div>
            <p className="text-background/70 mb-6">
              Votre solution complète pour le divertissement en streaming avec plus de 13 000 chaînes.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>contact@iptvpro.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informations légales</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Restez connecté</h3>
            <p className="text-background/70 mb-4">
              Abonnez-vous à notre newsletter pour les dernières nouveautés.
            </p>
            <div className="flex space-x-2 mb-6">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded text-background placeholder:text-background/50"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                OK
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="font-semibold mb-2">Moyens de paiement</h4>
              <div className="flex space-x-2">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="text-2xl">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm mb-4 md:mb-0">
              © 2024 IPTV Pro. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-sm text-background/70">
              <span>🇫🇷 Français</span>
              <span>|</span>
              <span>Service client 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}