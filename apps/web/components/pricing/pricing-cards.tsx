import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for small churches getting started",
    features: [
      "Up to 100 members",
      "Basic donation tracking",
      "Monthly financial reports",
      "Email support",
      "1 user account",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    description: "For growing ministries ready to scale",
    features: [
      "Up to 500 members",
      "Advanced donation tracking",
      "Real-time financial reports",
      "Expense management",
      "Bilingual support (EN/ES)",
      "Priority email support",
      "Up to 5 user accounts",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For established churches with complex needs",
    features: [
      "Unlimited members",
      "Everything in Growth, plus:",
      "Custom financial reports",
      "Multi-fund management",
      "API access",
      "Dedicated account manager",
      "Phone & chat support",
      "Unlimited user accounts",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations and multi-site churches",
    features: [
      "Everything in Pro, plus:",
      "Custom integrations",
      "White-label options",
      "Advanced security features",
      "Custom training & onboarding",
      "24/7 priority support",
      "Service level agreement (SLA)",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingCards() {
  return (
    <section className="w-full pb-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all flex flex-col ${
                plan.highlighted ? "shadow-xl" : "hover:shadow-lg"
              }`}
            >
              <div className="absolute inset-0">
                <Image src="/images/pricing/vineyard-painting.png" alt="" fill className="object-cover" />
              </div>

              <div className="relative bg-[#F2F1ED] m-3 rounded-xl p-6 flex-1 flex flex-col">
                {plan.badge && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="bg-[#5B9BD5] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-black">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 text-base">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#5B9BD5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full font-semibold text-sm ${
                    plan.highlighted
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
