import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularChannels } from "@/components/PopularChannels";
import { QualitySection } from "@/components/QualitySection";
import { ContentLibrarySection } from "@/components/ContentLibrarySection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PricingSection } from "@/components/PricingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DeviceCompatibility } from "@/components/DeviceCompatibility";
import { IPTVPlayersSection } from "@/components/IPTVPlayersSection";
import { BlogSection } from "@/components/BlogSection";
// import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import {
  getSiteSettings,
  getPricingPlans,
  // getFAQ,
  getRecentPosts,
} from "@/sanity";

// Force dynamic rendering to ensure fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0; // Disable caching for real-time updates

export default async function Home() {
  // Fetch dynamic data
  const [siteSettings, pricingPlans, recentPosts] = await Promise.all([
    getSiteSettings(),
    getPricingPlans(),
    getRecentPosts(4),
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="accueil" className="scroll-mt-16">
          <HeroSection />
        </section>
        <section id="chaines" className="scroll-mt-16">
          <PopularChannels />
        </section>
        <section id="tarifs" className="scroll-mt-16">
          <PricingSection pricingPlans={pricingPlans} />
        </section>
        <section id="qualite" className="scroll-mt-16">
          <QualitySection />
        </section>
        <section id="bibliotheque" className="scroll-mt-16">
          <ContentLibrarySection />
        </section>
        <section id="avantages" className="scroll-mt-16">
          <WhyChooseUs />
        </section>
        <section id="comment-ca-marche" className="scroll-mt-16">
          <HowItWorks />
        </section>
        <section id="compatibilite" className="scroll-mt-16">
          <DeviceCompatibility />
        </section>
        <section id="lecteurs" className="scroll-mt-16">
          <IPTVPlayersSection />
        </section>
        {/* <section id="faq" className="scroll-mt-16">
          <FAQSection faqs={faqs} />
        </section> */}
        {/* <section id="blog" className="scroll-mt-16">
          <BlogSection posts={recentPosts} />
        </section> */}
        {/* <section id="contact" className="scroll-mt-16">
          <ContactSection />
        </section> */}
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  );
}
