import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "10 GB storage", "Basic analytics", "Email support", "Core features"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams with advanced needs",
    features: [
      "Up to 25 team members",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "All features included",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with specific requirements",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom development",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white container mx-auto px-4 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-5xl text-black">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-black/70">
          Choose the perfect plan for your team. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border p-8 ${
              plan.popular ? "border-black bg-white shadow-lg" : "border-gray-200 bg-white"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">Most Popular</span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black">{plan.name}</h3>
              <p className="mt-2 text-sm text-black/70">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-black">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-black/70">/month</span>}
            </div>

            <Button className="mb-6 w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.cta}
            </Button>

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-black/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
