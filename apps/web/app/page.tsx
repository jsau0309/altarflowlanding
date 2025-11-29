import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CaseStudies } from "@/components/case-studies"
import { BlogSection } from "@/components/blog-section"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { QASection } from "@/components/qa-section"

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
