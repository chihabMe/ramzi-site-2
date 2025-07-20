import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Guide complet pour configurer votre IPTV",
    excerpt:
      "Découvrez comment installer et configurer facilement votre service IPTV sur tous vos appareils.",
    date: "15 Jan 2024",
    author: "Équipe IPTV Pro",
    image: "📖",
    category: "Guide",
  },
  {
    title: "Les meilleures chaînes sportives en 2024",
    excerpt:
      "Tour d'horizon des chaînes sportives les plus populaires disponibles avec IPTV Pro.",
    date: "12 Jan 2024",
    author: "Expert Sport",
    image: "⚽",
    category: "Sport",
  },
  {
    title: "Optimiser la qualité de streaming",
    excerpt:
      "Conseils et astuces pour profiter de la meilleure qualité d'image possible.",
    date: "10 Jan 2024",
    author: "Tech Expert",
    image: "⚙️",
    category: "Technique",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gradient-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Actualités, guides et conseils pour tirer le meilleur parti de votre
            expérience IPTV
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={article.title}
              className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                {article.image}
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mr-3">
                    {article.category}
                  </span>
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>

                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blogs/${index + 1}`}>
                      Lire l&apos;article
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blogs">Voir tous les articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
