import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CaseStudies } from "@/components/case-studies"
import { BlogSection } from "@/components/blog-section"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { QASection } from "@/components/qa-section"

// Revalidate content every 60 seconds to pick up Sanity CMS changes
export const revalidate = 60

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <BlogSection />
        <CTA />
        <QASection />
      </main>
      <Footer />
    </>
  )
}
