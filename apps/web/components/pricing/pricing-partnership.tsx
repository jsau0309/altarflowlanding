import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PricingPartnership() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-[#F2F1ED] p-12 lg:p-20">
          <div className="relative space-y-10">
            {/* Main content */}
            <div className="max-w-3xl">
              <h2 className="text-4xl text-[#1c1c1c] mb-8 lg:text-6xl font-medium">
                Planting a Church? We've Got Your Back.
              </h2>

              <p className="text-lg lg:text-xl text-[#1c1c1c]/70 leading-relaxed">
                Starting a ministry from scratch is hard enough without wrestling spreadsheets and scattered tools. We
                believe new churches deserve real infrastructure from day one. Connect with us to receive{" "}
                <span className="font-semibold text-[#1c1c1c]">up to 6 months of free Altarflow</span> to help you build
                a strong foundation while you focus on what matters.
              </p>
            </div>

            {/* Divider */}

            {/* Qualification criteria */}
            <div className="max-w-3xl">
              <p className="text-base lg:text-lg text-[#1c1c1c]/70 leading-relaxed italic font-light underline">
                This program is for first-time church planters stepping out in faith, not satellite campuses or launches
                backed by larger organizations. To qualify, your church must be under one year old with fewer than 100
                members.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://tally.so/r/EkqJvr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#5B9BD5] hover:bg-[#4A8AC4] text-white font-medium px-8">
                  Apply for Partnership
                </Button>
              </Link>

              <Link href="/features"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
