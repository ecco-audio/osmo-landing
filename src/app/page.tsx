import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import FeatureHighlights from '@/components/FeatureHighlights'
import FeatureDetails from '@/components/FeatureDetails'
import BenefitsSection from '@/components/BenefitsSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureHighlights />
      <FeaturesSection />
      <FeatureDetails />
      <BenefitsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
