"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Star, Tv } from "lucide-react";

const channels = [
  { name: "beIN SPORTS", logo: "🏆", category: "Sport", popular: true },
  { name: "CANAL+", logo: "📺", category: "Premium", popular: true },
  { name: "Disney+", logo: "🏰", category: "Enfants", popular: true },
  { name: "CNN", logo: "📰", category: "Actualités", popular: false },
  { name: "FOX", logo: "🦊", category: "International", popular: false },
  { name: "TF1", logo: "1️⃣", category: "Généraliste", popular: true },
  { name: "France 2", logo: "2️⃣", category: "Généraliste", popular: true },
  { name: "M6", logo: "6️⃣", category: "Généraliste", popular: true },
  { name: "Arte", logo: "🎨", category: "Culture", popular: false },
  {
    name: "National Geographic",
    logo: "🌍",
    category: "Documentaire",
    popular: true,
  },
];

export function PopularChannels() {
  return (
    <section
      id="chaines"
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
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
            <Tv className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Chaînes Populaires
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Nos meilleures chaînes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection des chaînes les plus populaires
            disponibles avec votre abonnement IPTV Pro
          </p>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 mb-12">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-background to-muted/20 rounded-xl p-4 shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-center border border-border/40 hover:border-primary/30 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {channel.logo}
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {channel.name}
                  </p>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    {channel.category}
                  </Badge>
                  {channel.popular && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                        <Star className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 rounded-2xl p-8 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Plus de 50,000 chaînes vous attendent
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Sport, cinéma, séries, documentaires, musique... Explorez notre
                catalogue complet de chaînes françaises et internationales en HD
                et 4K.
              </p>
              <Link href="/channels">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg font-semibold px-8 py-3 group"
                >
                  Voir toutes les chaînes
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
