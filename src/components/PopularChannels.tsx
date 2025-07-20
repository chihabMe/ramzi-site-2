const channels = [
  { name: "beIN SPORTS", logo: "🏆" },
  { name: "CANAL+", logo: "📺" },
  { name: "Disney+", logo: "🏰" },
  { name: "CNN", logo: "📰" },
  { name: "FOX", logo: "🦊" },
  { name: "TF1", logo: "1️⃣" },
  { name: "France 2", logo: "2️⃣" },
  { name: "M6", logo: "6️⃣" },
  { name: "Arte", logo: "🎨" },
  { name: "National Geographic", logo: "🌍" },
];

export function PopularChannels() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nos meilleures chaînes</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez notre sélection des chaînes les plus populaires disponibles avec votre abonnement IPTV Pro
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
          {channels.map((channel, index) => (
            <div
              key={channel.name}
              className="bg-card rounded-lg p-4 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-2">{channel.logo}</div>
              <p className="text-sm font-medium text-card-foreground">{channel.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}