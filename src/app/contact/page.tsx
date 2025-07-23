import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
