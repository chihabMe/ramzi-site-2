"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"; // IGNORE
import { Film, Tv, Trophy, Star, Play, Clock, Globe } from "lucide-react";

const contentCategories = [
  {
    icon: Film,
    title: "Films & Cinéma",
    count: "15,000+",
    description: "Dernières sorties, classiques et films du monde entier",
    features: [
      "Nouveautés 2025",
      "Films classiques",
      "Cinéma mondial",
      "Documentaires",
    ],
    gradient: "from-red-500 to-pink-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    icon: Tv,
    title: "Séries TV",
    count: "8,500+",
    description: "Séries populaires, épisodes complets et saisons entières",
    features: [
      "Séries Netflix",
      "HBO Originals",
      "Séries françaises",
      "Animes",
    ],
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Trophy,
    title: "Sport en Direct",
    count: "500+",
    description: "Événements sportifs en direct et replays",
    features: ["Football", "Basketball", "Tennis", "Formule 1"],
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
];

const popularContent = [
  {
    category: "Films Populaires",
    items: [
      { name: "Action & Aventure", count: "2,500+" },
      { name: "Comédie", count: "1,800+" },
      { name: "Drame", count: "2,200+" },
      { name: "Science-Fiction", count: "1,200+" },
      { name: "Horreur", count: "900+" },
      { name: "Romance", count: "1,100+" },
    ],
  },
  {
    category: "Séries Tendances",
    items: [
      { name: "Séries US", count: "3,200+" },
      { name: "Séries françaises", count: "800+" },
      { name: "K-Drama", count: "600+" },
      { name: "Animes", count: "1,500+" },
      { name: "Documentaires", count: "700+" },
      { name: "Émissions TV", count: "950+" },
    ],
  },
  {
    category: "Sports Live",
    items: [
      { name: "Ligue 1", count: "38 matchs" },
      { name: "Champions League", count: "125 matchs" },
      { name: "NBA", count: "1,230 matchs" },
      { name: "Tennis Grand Slam", count: "4 tournois" },
      { name: "Formule 1", count: "23 courses" },
      { name: "Boxe/MMA", count: "200+ combats" },
    ],
  },
];

const liveEvents = [
  {
    name: "UEFA Champions League",
    time: "20:00",
    date: "Aujourd'hui",
    live: true,
  },
  { name: "NBA Finals", time: "02:30", date: "Demain", live: false },
  { name: "Roland Garros", time: "14:00", date: "En cours", live: true },
  { name: "Formule 1 GP Monaco", time: "15:00", date: "Dimanche", live: false },
];

export function ContentLibrarySection() {
  return (
    <section className="py-8 md:py-14 bg-background">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Contenu Illimité
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Plus de 25,000 contenus à votre disposition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre vaste bibliothèque de films, séries TV et événements
            sportifs en direct. Du divertissement sans fin, disponible 24h/24 et
            7j/7.
          </p>
        </motion.div>

        {/* Main Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contentCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`p-6 h-full ${category.bgColor} border-l-4 border-l-primary hover:shadow-glow transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${category.gradient} text-white mr-4`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-2xl font-bold text-primary">
                      {category.count}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="space-y-2">
                  {category.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Content Breakdown */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {popularContent.map((section) => (
            <Card key={section.category} className="p-6">
              <h4 className="font-bold text-lg mb-4 text-primary">
                {section.category}
              </h4>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm">{item.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Call to Action */}
      </div>
    </section>
  );
}
