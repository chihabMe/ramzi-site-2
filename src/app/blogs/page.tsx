"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const featuredArticles = [
  {
    id: 1,
    title: "Guide complet pour configurer votre IPTV en 2024",
    excerpt:
      "Découvrez étape par étape comment installer et configurer facilement votre service IPTV sur tous vos appareils préférés.",
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
    date: "12 Jan 2024",
    author: "Expert Sport",
    image: "⚽",
    category: "Sport",
    readTime: "6 min",
    featured: true,
  },
];

const allArticles = [
  ...featuredArticles,
  {
    id: 3,
    title: "Optimiser la qualité de streaming",
    excerpt:
      "Conseils et astuces pour profiter de la meilleure qualité d'image possible avec votre connexion.",
    date: "10 Jan 2024",
    author: "Tech Expert",
    image: "⚙️",
    category: "Technique",
    readTime: "5 min",
  },
  {
    id: 4,
    title: "IPTV vs Télévision traditionnelle",
    excerpt:
      "Comparaison détaillée entre l'IPTV et la télévision traditionnelle pour vous aider à faire le bon choix.",
    date: "8 Jan 2024",
    author: "Analyste TV",
    image: "📺",
    category: "Comparatif",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Sécurité et confidentialité IPTV",
    excerpt:
      "Tout ce que vous devez savoir sur la sécurité et la protection de vos données avec l'IPTV.",
    date: "5 Jan 2024",
    author: "Expert Sécurité",
    image: "🔒",
    category: "Sécurité",
    readTime: "10 min",
  },
  {
    id: 6,
    title: "Applications IPTV recommandées",
    excerpt:
      "Les meilleures applications pour regarder l'IPTV sur différents appareils et plateformes.",
    date: "3 Jan 2024",
    author: "Tech Team",
    image: "📱",
    category: "Applications",
    readTime: "6 min",
  },
  {
    id: 7,
    title: "Résoudre les problèmes de buffering",
    excerpt:
      "Solutions efficaces pour éliminer les problèmes de mise en mémoire tampon et profiter d'un streaming fluide.",
    date: "1 Jan 2024",
    author: "Support Tech",
    image: "🔧",
    category: "Dépannage",
    readTime: "8 min",
  },
  {
    id: 8,
    title: "Tendances IPTV 2024",
    excerpt:
      "Découvrez les dernières tendances et innovations dans le monde de l'IPTV pour cette année.",
    date: "28 Déc 2023",
    author: "Futuriste TV",
    image: "🚀",
    category: "Tendances",
    readTime: "9 min",
  },
];

const categories = [
  "Tous",
  "Guide",
  "Sport",
  "Technique",
  "Comparatif",
  "Sécurité",
  "Applications",
  "Dépannage",
  "Tendances",
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter articles based on search and category
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tous" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // Reset to first page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog IPTV Pro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Guides, conseils et actualités pour profiter au maximum de votre
              expérience IPTV
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Articles à la Une
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {article.image}
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                      <Calendar className="h-4 w-4 ml-3 mr-1" />
                      {article.date}
                    </div>
                    <Button asChild>
                      <Link href={`/blogs/${article.id}`}>
                        Lire l&apos;article
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tous les Articles
          </h2>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-4xl">
                  {article.image}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                      <Calendar className="h-3 w-3 ml-2 mr-1" />
                      {article.date}
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blogs/${article.id}`}>Lire</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={
                        currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          setCurrentPage(currentPage + 1);
                      }}
                      className={
                        currentPage >= totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
