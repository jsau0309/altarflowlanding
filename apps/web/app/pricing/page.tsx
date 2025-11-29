import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingPartnership } from "@/components/pricing/pricing-partnership"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export default function PricingPage() {
  // Changed background from cream to dark charcoal to match landing page
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1c1c1c" }}>
      <Header />
      <main className="flex-1">
        <PricingHero />
        <PricingCards />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="border-t border-gray-700" />
        </div>
        <PricingPartnership />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}
