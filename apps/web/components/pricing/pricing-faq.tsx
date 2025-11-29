"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const pricingFaqs = [
  {
    question: "How much does Altarflow cost?",
    answer:
      "Altarflow costs $149 per month (or $1,488 per year with annual billing—saving you $300). This includes unlimited donations, unlimited users, all features, and bilingual support. There are no setup fees, no per-member charges, and no feature tiers. The only additional cost is standard credit card processing (2.9% + $0.30 per transaction), which goes directly to Stripe, not Altarflow. A 30-day free trial is available with no credit card required.",
  },
  {
    question: "What are my payment options?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and ACH bank transfers for annual plans. All payments are processed securely through Stripe. You can choose between monthly billing at $149/month or annual billing at $1,488/year (saving $300).",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 30-day free trial with no credit card required. You'll have full access to all features during the trial period. This gives you enough time to import your data, set up your donation pages, and see the value before committing.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Altarflow has no contracts and no cancellation fees. You can cancel anytime directly from your account settings—no phone calls required. We also offer a 60-day money-back guarantee: if you're not satisfied, you'll receive a full refund, no questions asked. Your data is always exportable in standard formats (CSV, PDF, Excel), so you're never locked in.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Everything. Altarflow includes unlimited donations, unlimited users, donation tracking, expense management, financial reports, member management, bilingual email and SMS campaigns, AI-powered receipt scanning, and dedicated support—all at one flat price. There are no add-ons, no feature tiers, and no per-member charges.",
  },
  {
    question: "How does Altarflow compare to other church software?",
    answer:
      "Altarflow replaces multiple tools (QuickBooks, Tithe.ly, Mailchimp, spreadsheets) for $149/month. Comparable all-in-one platforms like Planning Center cost $5,000-15,000+ per year. Unlike enterprise solutions, Altarflow is designed for small churches with 50-500 members and includes native Spanish support throughout.",
  },
]

// Generate JSON-LD structured data for FAQ schema
const pricingFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full py-20 lg:py-32 border-t border-white/20">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqStructuredData) }}
      />

      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {pricingFaqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20 pb-4 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left py-4 hover:opacity-70 transition-opacity"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-white flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-4 pr-8">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
