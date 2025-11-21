import { Header } from "@/components/layout/header"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { UseCases } from "@/components/home/use-cases"
import { CTA } from "@/components/home/cta"
import { SiteFooter } from "@/components/layout/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <CTA />
      <SiteFooter />
    </div>
  )
}
