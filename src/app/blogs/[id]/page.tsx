import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const allArticles = [
  {
    id: 1,
    title: "Guide complet pour configurer votre IPTV en 2024",
    excerpt:
      "Découvrez étape par étape comment installer et configurer facilement votre service IPTV sur tous vos appareils préférés.",
    content: `
      <h2>Introduction</h2>
      <p>L'IPTV (Internet Protocol Television) révolutionne la façon dont nous consommons le contenu télévisuel. Dans ce guide complet, nous vous accompagnons pas à pas pour configurer votre service IPTV Pro sur tous vos appareils.</p>
      
      <h2>Prérequis techniques</h2>
      <p>Avant de commencer, assurez-vous de disposer des éléments suivants :</p>
      <ul>
        <li>Une connexion internet stable d'au moins 10 Mbps</li>
        <li>Un appareil compatible (Smart TV, smartphone, tablette, PC)</li>
        <li>Vos identifiants IPTV Pro</li>
      </ul>
      
      <h2>Configuration sur Smart TV</h2>
      <p>La configuration sur Smart TV est simple et rapide :</p>
      <ol>
        <li>Téléchargez l'application IPTV Pro depuis votre store</li>
        <li>Lancez l'application et sélectionnez "Nouvel abonnement"</li>
        <li>Entrez vos identifiants fournis par email</li>
        <li>Profitez de vos chaînes préférées !</li>
      </ol>
      
      <h2>Configuration sur appareils mobiles</h2>
      <p>Pour Android et iOS, suivez ces étapes :</p>
      <ol>
        <li>Téléchargez l'app IPTV Pro depuis Play Store ou App Store</li>
        <li>Créez votre profil utilisateur</li>
        <li>Ajoutez votre abonnement avec les identifiants reçus</li>
        <li>Personnalisez vos chaînes favorites</li>
      </ol>
      
      <h2>Optimisation des performances</h2>
      <p>Pour une expérience optimale :</p>
      <ul>
        <li>Utilisez une connexion Ethernet quand c'est possible</li>
        <li>Fermez les autres applications consommatrices de bande passante</li>
        <li>Redémarrez votre box internet régulièrement</li>
      </ul>
      
      <h2>Dépannage des problèmes courants</h2>
      <p>Si vous rencontrez des difficultés :</p>
      <ul>
        <li>Vérifiez vos identifiants</li>
        <li>Testez votre connexion internet</li>
        <li>Contactez notre support technique 24h/24</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Avec ce guide, vous devriez maintenant être capable de profiter pleinement de votre abonnement IPTV Pro. N'hésitez pas à explorer toutes les fonctionnalités disponibles et à personnaliser votre expérience selon vos préférences.</p>
    `,
    date: "15 Jan 2024",
    author: "Équipe IPTV Pro",
    image: "📖",
    category: "Guide",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Les meilleures chaînes sportives disponibles",
    excerpt:
      "Tour d'horizon complet des chaînes sportives les plus populaires et comment en profiter avec IPTV Pro.",
    content: `
      <h2>Introduction au sport en IPTV</h2>
      <p>Le sport représente une part importante du divertissement télévisuel. Avec IPTV Pro, accédez aux meilleures chaînes sportives en haute définition.</p>
      
      <h2>Chaînes de football</h2>
      <p>Découvrez notre sélection premium :</p>
      <ul>
        <li>beIN Sports 1, 2, 3 - Toute la Ligue 1 et plus</li>
        <li>Canal+ Sport - Les meilleurs matchs européens</li>
        <li>Eurosport 1 & 2 - Diversité sportive</li>
      </ul>
      
      <h2>Sports mécaniques</h2>
      <p>Pour les passionnés de vitesse :</p>
      <ul>
        <li>Canal+ F1 - Formule 1 en direct</li>
        <li>Eurosport Motors - Rallye, MotoGP</li>
      </ul>
      
      <h2>Comment accéder aux chaînes sport</h2>
      <p>Simple et rapide :</p>
      <ol>
        <li>Ouvrez votre application IPTV Pro</li>
        <li>Naviguez vers la section "Sport"</li>
        <li>Sélectionnez votre chaîne préférée</li>
        <li>Profitez du spectacle !</li>
      </ol>
    `,
    date: "12 Jan 2024",
    author: "Expert Sport",
    image: "⚽",
    category: "Sport",
    readTime: "6 min",
    featured: true,
  },
  {
    id: 3,
    title: "Optimiser la qualité de streaming",
    excerpt:
      "Conseils et astuces pour profiter de la meilleure qualité d'image possible avec votre connexion.",
    content: `
      <h2>Comprendre les enjeux de qualité</h2>
      <p>La qualité de votre streaming IPTV dépend de plusieurs facteurs techniques que nous allons explorer.</p>
      
      <h2>Débit internet requis</h2>
      <p>Voici les débits recommandés :</p>
      <ul>
        <li>SD (480p) : 3-4 Mbps</li>
        <li>HD (720p) : 5-8 Mbps</li>
        <li>Full HD (1080p) : 8-12 Mbps</li>
        <li>4K : 25+ Mbps</li>
      </ul>
      
      <h2>Optimisation réseau</h2>
      <p>Améliorez votre expérience :</p>
      <ol>
        <li>Utilisez un câble Ethernet plutôt que le WiFi</li>
        <li>Placez votre routeur dans un endroit central</li>
        <li>Évitez les interférences (micro-ondes, etc.)</li>
        <li>Mettez à jour le firmware de votre routeur</li>
      </ol>
    `,
    date: "10 Jan 2024",
    author: "Tech Expert",
    image: "⚙️",
    category: "Technique",
    readTime: "5 min",
  },
];

// Add more articles for demonstration
for (let i = 4; i <= 8; i++) {
  allArticles.push({
    id: i,
    title: `Article ${i} - Titre d'exemple`,
    excerpt: `Description de l'article ${i} pour les tests et démonstrations.`,
    content: `<h2>Contenu de l'article ${i}</h2><p>Ceci est le contenu complet de l'article ${i}.</p>`,
    date: `${i} Jan 2024`,
    author: "Auteur Test",
    image: "📝",
    category: "Test",
    readTime: "5 min",
  });
}

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const article = allArticles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/blogs">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux articles
              </Link>
            </Button>
          </div>

          {/* Article header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-4xl">
                {article.image}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
            </div>
          </header>

          {/* Article content */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Article actions */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              J&apos;aime
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-center mb-8">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card
                    key={relatedArticle.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-primary flex items-center justify-center text-3xl">
                      {relatedArticle.image}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary text-xs"
                        >
                          {relatedArticle.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {relatedArticle.readTime}
                        </div>
                      </div>

                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Link href={`/blogs/${relatedArticle.id}`}>
                          Lire l&apos;article
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}

// Generate static params for all articles (optional - for static generation)
export async function generateStaticParams() {
  return allArticles.map((article) => ({
    id: article.id.toString(),
  }));
}
