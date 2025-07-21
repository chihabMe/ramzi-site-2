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
import { motion } from "motion/react";

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
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
            >
              Illimité
              <br />
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
              >
                divertissement
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl leading-8 text-slate-700 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.9, ease: "easeOut" }}
            >
              Profitez de +13 000 chaînes et des films et séries en illimité sur
              tous vos appareils préférés
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-6 text-lg shadow-lg"
                >
                  S&apos;abonner maintenant
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 px-8 py-6 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Voir les chaînes
                </Button>
              </motion.div>
            </motion.div>

            {/* Device Compatibility Icons */}
            <motion.div
              className="flex items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
            >
              <span className="text-slate-600 text-sm font-medium">
                Compatible avec:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xs">
                {[Tv, Smartphone, Tablet, Monitor].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-100 p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.8 + index * 0.15,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 150,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      },
                    }}
                  >
                    <Icon className="h-6 w-6 text-slate-700" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* IPTV Visual Section */}
          <motion.div
            className="relative lg:block hidden overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main TV Setup */}
              <motion.div
                className="relative bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                whileHover={{
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 200, damping: 30 },
                }}
              >
                <motion.div
                  className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl relative overflow-hidden border-4 border-slate-700 shadow-lg"
                  initial={{ rotateY: -10 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                >
                  {/* Simulated TV Screen */}
                  <div className="absolute inset-4 bg-black rounded-xl overflow-hidden">
                    <motion.div
                      className="h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90 rounded-xl flex items-center justify-center relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      transition={{ duration: 1.0, delay: 1.5 }}
                    >
                      {/* Content Grid Simulation */}
                      <div className="grid grid-cols-3 gap-2 p-4 w-full h-full">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/20 backdrop-blur rounded border border-white/30 flex items-center justify-center"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: 1.8 + i * 0.15,
                              type: "spring",
                              stiffness: 150,
                            }}
                            whileHover={{ scale: 1.03 }}
                          >
                            <motion.div
                              className="w-8 h-8 bg-white/40 rounded"
                              animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.4, 0.6, 0.4],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                      {/* Play button overlay */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 2.5,
                          type: "spring",
                          stiffness: 150,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="bg-white/90 rounded-full p-4 shadow-lg"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(255,255,255,0.3)",
                              "0 0 40px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.3)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Play className="h-8 w-8 text-slate-800 fill-current" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* TV Stand */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-700 rounded-b-lg"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                  />
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-slate-600 rounded-full"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                  />
                </motion.div>

                {/* Floating Mobile Device */}
                <motion.div
                  className="absolute top-0 right-0 bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/30 shadow-xl transform rotate-12 translate-x-2 -translate-y-2"
                  initial={{ x: 30, y: -30, opacity: 0, rotate: 0 }}
                  animate={{
                    x: 8,
                    y: [-8, -12, -8],
                    opacity: 1,
                    rotate: 12,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 2.5,
                    ease: "easeOut",
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotate: 8,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  <div className="w-16 h-28 bg-slate-800 rounded-xl border-2 border-slate-600 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-1 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-slate-600 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-slate-600 rounded-full"></div>
                  </div>
                  <p className="text-xs text-white mt-2 text-center font-medium">
                    Mobile
                  </p>
                </motion.div>

                {/* Floating Tablet Device */}
                <motion.div
                  className="absolute bottom-0 left-0 bg-white/20 backdrop-blur rounded-2xl p-4 border border-white/30 shadow-xl transform -rotate-6 -translate-x-2 translate-y-2"
                  initial={{ x: -30, y: 30, opacity: 0, rotate: 0 }}
                  animate={{
                    x: [-8, -12, -8],
                    y: 8,
                    opacity: 1,
                    rotate: -6,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 2.8,
                    ease: "easeOut",
                    x: {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotate: -2,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  <div className="w-20 h-14 bg-slate-800 rounded-lg border-2 border-slate-600 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md"
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-slate-600 rounded-full"></div>
                  </div>
                  <p className="text-xs text-white mt-2 text-center font-medium">
                    Tablette
                  </p>
                </motion.div>

                {/* Live Stats Badge */}
                <motion.div
                  className="absolute top-6 left-6 bg-black/70 backdrop-blur rounded-xl p-4 border border-white/20 shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 3.0,
                    type: "spring",
                    stiffness: 150,
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-3 h-3 bg-red-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-white text-sm font-bold">LIVE</span>
                    </div>
                  </div>
                  <motion.p
                    className="text-yellow-400 text-lg font-bold mt-1"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    13,000+
                  </motion.p>
                  <p className="text-white/80 text-xs">chaînes disponibles</p>
                </motion.div>

                {/* Quality Badge */}
                <motion.div
                  className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3 border border-white/20 shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                      "0 0 30px rgba(34, 197, 94, 0.5)",
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 3.2,
                    type: "spring",
                    stiffness: 150,
                    boxShadow: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-white text-sm font-bold">4K HDR</p>
                  <p className="text-white/90 text-xs">Qualité premium</p>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-2 w-16 h-16 bg-purple-500/20 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Channel Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
          >
            {channelCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setCurrentCategory(index)}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  currentCategory === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.2 + index * 0.15,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={
                    currentCategory === index ? { rotate: [0, 10, 0] } : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                </motion.div>
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          >
            <Card className="bg-white border border-slate-200 shadow-lg p-6">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                key={currentCategory} // Force re-render when category changes
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {channelCategories[currentCategory].channels.map(
                  (channel, index) => (
                    <motion.div
                      key={`${currentCategory}-${channel}`}
                      className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center text-slate-800 font-medium hover:bg-slate-100 transition-colors cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 150,
                      }}
                      whileHover={{
                        scale: 1.03,
                        y: -2,
                        backgroundColor: "#f1f5f9",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08 + 0.3,
                        }}
                      >
                        {channel}
                      </motion.span>
                    </motion.div>
                  )
                )}
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
