import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Benoît",
    rating: 5,
    comment: "Excellent service ! La qualité d'image est parfaite et le support client très réactif. Je recommande vivement IPTV Pro.",
    avatar: "👩"
  },
  {
    name: "David Durant", 
    rating: 5,
    comment: "Plus de 13 000 chaînes, c'est incroyable ! Je trouve tout ce que je veux regarder. L'installation a été très simple.",
    avatar: "👨"
  },
  {
    name: "Sami Aouad",
    rating: 5,
    comment: "Le meilleur service IPTV que j'ai testé. Aucun problème de buffering et les chaînes sont toujours disponibles.",
    avatar: "👨‍🦱"
  }
];

export function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les avis de nos utilisateurs satisfaits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}