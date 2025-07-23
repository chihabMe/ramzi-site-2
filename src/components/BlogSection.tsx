"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { getImageUrl, getRecentPosts, type PostPreview } from "@/sanity";

// Type for fallback articles
interface FallbackArticle {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

// Type for mixed articles (Sanity posts or fallback)
type ArticleType = PostPreview | FallbackArticle;

// Fallback articles for when Sanity is not configured or fails
const fallbackArticles = [
  {
    title: "Guide complet pour configurer votre IPTV",
    excerpt:
      "Découvrez comment installer et configurer facilement votre service IPTV sur tous vos appareils.",
    date: "15 Jan 2024",
    author: "Équipe IPTV Pro",
    image: "📖",
    category: "Guide",
    slug: "guide-configuration-iptv",
  },
  {
    title: "Les meilleures chaînes sportives en 2024",
    excerpt:
      "Tour d'horizon des chaînes sportives les plus populaires disponibles avec IPTV Pro.",
    date: "12 Jan 2024",
    author: "Expert Sport",
    image: "⚽",
    category: "Sport",
    slug: "meilleures-chaines-sportives-2024",
  },
  {
    title: "Optimiser la qualité de streaming",
    excerpt:
      "Conseils et astuces pour profiter de la meilleure qualité d'image possible.",
    date: "10 Jan 2024",
    author: "Tech Expert",
    image: "⚙️",
    category: "Technique",
    slug: "optimiser-qualite-streaming",
  },
];

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<PostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setLoading(true);
        const posts = await getRecentPosts(4);
        setBlogPosts(posts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts");
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  // Use fallback articles if no Sanity posts are available
  const articlesToShow: ArticleType[] =
    blogPosts.length > 0 ? blogPosts : fallbackArticles;

  // Type guard to check if article is a Sanity post
  const isSanityPost = (article: ArticleType): article is PostPreview => {
    return "_id" in article && "publishedAt" in article;
  };

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Helper function to calculate reading time
  // const getReadingTime = (content: any): number => {
  //   // Simple reading time calculation - can be improved
  //   if (!content) return 5;
  //   const words = JSON.stringify(content).split(/\s+/).length;
  //   return Math.ceil(words / 200); // Average reading speed
  // };
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Blog</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Actualités, guides et conseils pour tirer le meilleur parti de votre
            expérience IPTV
          </p>
        </motion.div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-slate-200 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-slate-200 rounded animate-pulse" />
                  <div className="h-6 bg-slate-200 rounded animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded animate-pulse" />
                    <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-600 mb-4">
              Impossible de charger les articles pour le moment.
            </p>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Réessayer
            </Button>
          </motion.div>
        )}

        {!loading && !error && (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {articlesToShow.map((article, index) => {
              // Handle both Sanity posts and fallback articles with type safety
              const isFromSanity = isSanityPost(article);

              const articleSlug = isFromSanity
                ? article.slug.current
                : article.slug;

              const imageUrl =
                isFromSanity && article.mainImage
                  ? getImageUrl(article.mainImage, 400, 225)
                  : null;

              const authorName =
                isFromSanity && article.author
                  ? article.author.name
                  : (article as FallbackArticle).author;

              const categoryName =
                isFromSanity && article.categories && article.categories[0]
                  ? article.categories[0].title
                  : (article as FallbackArticle).category;

              const publishDate = isFromSanity
                ? formatDate(article.publishedAt)
                : (article as FallbackArticle).date;

              const readingTime = isFromSanity
                ? 5 // Default reading time for PostPreview since it doesn't have body content
                : 5;

              return (
                <motion.div
                  key={
                    isFromSanity
                      ? article._id
                      : (article as FallbackArticle).slug
                  }
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-200">
                    <div className="aspect-video relative overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={article.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl">
                          {(article as FallbackArticle).image || "📝"}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {categoryName}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {publishDate}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {readingTime} min
                        </div>
                      </div>

                      <h3 className="font-bold text-xl mb-3 line-clamp-2 text-slate-900 hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-500">
                          <User className="h-4 w-4 mr-2" />
                          <span className="font-medium">{authorName}</span>
                        </div>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="group"
                        >
                          <Link
                            href={`${process.env.NEXT_PUBLIC_BLOG_SITE}/posts/${articleSlug}`}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                          >
                            Lire l&apos;article
                            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_BLOG_SITE}`}
              className="flex items-center"
            >
              Voir tous les articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
