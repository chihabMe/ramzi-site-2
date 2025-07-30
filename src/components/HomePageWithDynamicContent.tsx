// Example of how to integrate dynamic content in your main page
// This shows how to fetch and use the dynamic data

import { Suspense } from "react";
import { getSiteSettings, getPricingPlans } from "@/sanity";
import { FooterDynamic } from "@/components/FooterDynamic";
import { PricingSectionDynamic } from "@/components/PricingSectionDynamic";

// You can also create a loading component for better UX
function PricingLoading() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-8 bg-muted/30 rounded w-80 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-muted/30 rounded w-96 mx-auto animate-pulse" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-96 bg-muted/30 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterLoading() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-muted/30 rounded w-32 animate-pulse" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-4 bg-muted/30 rounded w-24 animate-pulse"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Example: This could be your updated page.tsx or a dedicated component
export default async function HomePageWithDynamicContent() {
  // Fetch data at build time or request time
  const [siteSettings, pricingPlans] = await Promise.all([
    getSiteSettings(),
    getPricingPlans(),
  ]);

  return (
    <div>
      {/* Your existing components */}

      {/* Dynamic Pricing Section */}
      <Suspense fallback={<PricingLoading />}>
        <PricingSectionDynamic pricingPlans={pricingPlans} />
      </Suspense>

      {/* Your other sections */}

      {/* Dynamic Footer */}
      <Suspense fallback={<FooterLoading />}>
        <FooterDynamic siteSettings={siteSettings} />
      </Suspense>
    </div>
  );
}

// Alternative: If you want to use client-side fetching
// You can create hooks for this:

/*
// hooks/useSiteSettings.ts
import { useEffect, useState } from 'react';
import { getSiteSettings, type SiteSettings } from '@/sanity';

export function useSiteSettings() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const settings = await getSiteSettings();
        setSiteSettings(settings);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch settings');
      } finally {
        setLoading(false);
      }
    }

    fetchSettings();
  }, []);

  return { siteSettings, loading, error };
}

// hooks/usePricingPlans.ts
import { useEffect, useState } from 'react';
import { getPricingPlans, type PricingPlan } from '@/sanity';

export function usePricingPlans() {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const plans = await getPricingPlans();
        setPricingPlans(plans);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch pricing plans');
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

  return { pricingPlans, loading, error };
}
*/
