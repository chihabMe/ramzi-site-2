"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Tv } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Accueil", href: "/", isRoute: true },
  { name: "Tarifs", href: "#tarifs", isRoute: false },
  { name: "Chaînes", href: "#chaines", isRoute: false },
  { name: "Avis clients", href: "#avis", isRoute: false },
  { name: "Fonctionnement", href: "#fonctionnement", isRoute: false },
  { name: "FAQ", href: "#faq", isRoute: false },
  { name: "Blog", href: "/blogs", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto">
        <nav
          className="flex items-center justify-between p-3 md:p-4 lg:px-8"
          aria-label="Global"
        >
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <Tv className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                IPTV Pro
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu principal"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 2xl:gap-x-12">
            {navigation.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-sm xl:text-base px-4 xl:px-6">
              S&apos;abonner
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile menu panel - Full screen */}
          <div className="fixed inset-0 h-[100vh] z-50 overflow-y-auto bg-background/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-out">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between mb-8 px-4 pt-6">
              <Link
                href="/"
                className="-m-1.5 p-1.5 flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Tv className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                <span className="text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  IPTV Pro
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="flex flex-col justify-center h-[100vh] -m-6 px-6">
              <div className="space-y-2 max-w-md mx-auto w-full">
                {/* Navigation Links */}
                {navigation.map((item, index) => {
                  const Component = item.isRoute ? Link : "a";
                  return (
                    <Component
                      key={item.name}
                      href={item.href}
                      className={`
                        block rounded-lg px-6 py-4 text-lg font-semibold text-foreground text-center
                        hover:bg-muted/80 hover:text-primary transition-all duration-200 
                        border-b border-border/30 last:border-b-0
                        ${
                          mobileMenuOpen
                            ? "animate-in slide-in-from-bottom-4 duration-300"
                            : ""
                        }
                      `}
                      style={{
                        animationDelay: `${index * 75}ms`,
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Component>
                  );
                })}

                {/* Mobile CTA Button */}
                <div className="pt-8 mt-8 border-t border-border">
                  <Button
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-200 h-14 text-lg font-semibold  hover:bg-blue-100  transform hover:scale-[1.02]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    S&apos;abonner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
