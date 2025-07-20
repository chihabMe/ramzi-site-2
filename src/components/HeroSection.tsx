"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Play,
  Tv,
  Globe,
  MapPin,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react";
import { useState, useEffect } from "react";

const channelCategories = [
  {
    title: "National",
    icon: MapPin,
    channels: ["TF1", "France 2", "M6", "Canal+", "France 3", "Arte"],
  },
  {
    title: "Régional",
    icon: Tv,
    channels: [
      "France 3 Région",
      "TV7 Bordeaux",
      "8 Mont-Blanc",
      "LCM",
      "BFM TV",
      "CNEWS",
    ],
  },
  {
    title: "International",
    icon: Globe,
    channels: [
      "BBC One",
      "CNN",
      "Al Jazeera",
      "Eurosport",
      "Discovery",
      "National Geographic",
    ],
  },
];

export function HeroSection() {
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % channelCategories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" />
      <div className="container relative px-4 py-20 lg:py-32 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-slate-900">
              Illimité
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                divertissement
              </span>
            </h1>

            <p className="text-xl leading-8 text-slate-700 mb-8 max-w-2xl">
              Profitez de +13 000 chaînes et des films et séries en illimité sur
              tous vos appareils préférés
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-6 text-lg shadow-lg"
              >
                S'abonner maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Voir les chaînes
              </Button>
            </div>

            {/* Device Compatibility Icons */}
            <div className="flex items-center gap-6 mb-8">
              <span className="text-slate-600 text-sm font-medium">
                Compatible avec:
              </span>
              <div className="flex gap-4">
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Tv className="h-6 w-6 text-slate-700" />
                </div>
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Smartphone className="h-6 w-6 text-slate-700" />
                </div>
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Tablet className="h-6 w-6 text-slate-700" />
                </div>
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Monitor className="h-6 w-6 text-slate-700" />
                </div>
              </div>
            </div>
          </div>

          {/* IPTV Visual Section */}
          <div className="relative lg:block hidden overflow-hidden">
            <div className="relative">
              {/* Main TV Setup */}
              <div className="relative bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl relative overflow-hidden border-4 border-slate-700 shadow-lg">
                  {/* Simulated TV Screen */}
                  <div className="absolute inset-4 bg-black rounded-xl overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90 rounded-xl flex items-center justify-center relative">
                      {/* Content Grid Simulation */}
                      <div className="grid grid-cols-3 gap-2 p-4 w-full h-full">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white/20 backdrop-blur rounded border border-white/30 flex items-center justify-center"
                          >
                            <div className="w-8 h-8 bg-white/40 rounded"></div>
                          </div>
                        ))}
                      </div>
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 shadow-lg">
                          <Play className="h-8 w-8 text-slate-800 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TV Stand */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-700 rounded-b-lg"></div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-slate-600 rounded-full"></div>
                </div>

                {/* Floating Mobile Device */}
                <div className="absolute top-0 right-0 bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/30 shadow-xl transform rotate-12 translate-x-2 -translate-y-2">
                  <div className="w-16 h-28 bg-slate-800 rounded-xl border-2 border-slate-600 relative overflow-hidden">
                    <div className="absolute inset-1 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-slate-600 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-slate-600 rounded-full"></div>
                  </div>
                  <p className="text-xs text-white mt-2 text-center font-medium">
                    Mobile
                  </p>
                </div>

                {/* Floating Tablet Device */}
                <div className="absolute bottom-0 left-0 bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/30 shadow-xl transform -rotate-6 -translate-x-2 translate-y-2">
                  <div className="w-20 h-14 bg-slate-800 rounded-lg border-2 border-slate-600 relative overflow-hidden">
                    <div className="absolute inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-slate-600 rounded-full"></div>
                  </div>
                  <p className="text-xs text-white mt-2 text-center font-medium">
                    Tablette
                  </p>
                </div>

                {/* Live Stats Badge */}
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur rounded-xl p-4 border border-white/20 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-bold">LIVE</span>
                    </div>
                  </div>
                  <p className="text-yellow-400 text-lg font-bold mt-1">
                    13,000+
                  </p>
                  <p className="text-white/80 text-xs">chaînes disponibles</p>
                </div>

                {/* Quality Badge */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 border border-white/20 shadow-lg">
                  <p className="text-white text-sm font-bold">4K HDR</p>
                  <p className="text-white/90 text-xs">Qualité premium</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl animate-pulse opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse opacity-50"></div>
              <div className="absolute top-1/2 left-2 w-16 h-16 bg-purple-500/20 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Channel Carousel */}
        <div className="mt-16">
          <div className="flex flex-wrap gap-4 mb-6">
            {channelCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setCurrentCategory(index)}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  currentCategory === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.title}
              </button>
            ))}
          </div>

          <Card className="bg-white border border-slate-200 shadow-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {channelCategories[currentCategory].channels.map(
                (channel, index) => (
                  <div
                    key={channel}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center text-slate-800 font-medium animate-fade-in hover:bg-slate-100 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {channel}
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
