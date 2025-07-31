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
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import {
  getSiteSettings,
  getPricingPlans,
  getFAQ,
  getFeaturedTestimonials,
  getRecentPosts,
} from "@/sanity";

// Force dynamic rendering to ensure fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0; // Disable caching for real-time updates

export default async function Home() {
  // Fetch dynamic data
  const [siteSettings, pricingPlans, faqs, testimonials, recentPosts] =
    await Promise.all([
      getSiteSettings(),
      getPricingPlans(),
      getFAQ(),
      getFeaturedTestimonials(),
      getRecentPosts(4),
    ]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <PopularChannels />
        <QualitySection />
        <ContentLibrarySection />
        <WhyChooseUs />
        <PricingSection pricingPlans={pricingPlans} />
        <HowItWorks />
        <DeviceCompatibility />
        <IPTVPlayersSection />
        <Testimonials testimonials={testimonials} />
        <FAQSection faqs={faqs} />
        <BlogSection posts={recentPosts} />
        {/* <ContactSection /> */}
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  );
}
