"use client"

import { useState } from "react"

export function PricingHero() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white">Pricing</h1>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-1 border border-white/10 bg-white/5 backdrop-blur-md rounded-full p-1">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              billingPeriod === "monthly" ? "bg-white/20 text-white shadow-sm" : "text-white/70 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              billingPeriod === "yearly" ? "bg-white/20 text-white shadow-sm" : "text-white/70 hover:text-white"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
    </section>
  )
}
