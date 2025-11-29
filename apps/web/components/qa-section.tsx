import { Accordion01, faqItems } from "@/components/ui/accordion-01-1"

// Generate JSON-LD structured data for FAQ schema
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.content,
    },
  })),
}

export function QASection() {
  return (
    <section className="relative w-full py-20 lg:py-32" style={{ backgroundColor: "#1c1c1c" }}>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold md:text-5xl text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300">Everything you need to know about Altarflow</p>
        </div>

        {/* Accordion */}
        <Accordion01 />
      </div>
    </section>
  )
}
