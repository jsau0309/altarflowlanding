import Link from "next/link"

const features = [
  {
    title: "Track Every Gift Without Touching a Spreadsheet",
    // Mobile: 2 lines
    mobileTitle: ["Track Every Gift Without", "Touching a Spreadsheet"],
    // Desktop: 4 lines with italic last word
    titleLines: [
      { text: "Track Every", style: "normal" },
      { text: "Gift Without", style: "normal" },
      { text: "Touching a", style: "normal" },
      { text: "Spreadsheet", style: "italic" },
    ],
    description:
      "Digital donations, cash offerings, recurring gifts, all tracked and categorized automatically. Donor receipts sent instantly. Financial reports ready in seconds. The 20 hours you spend on this month? Gone.",
    linkText: "Explore Donations",
    linkHref: "/features",
    backgroundImage: "/images/landing/bordighera-painting.jpg",
    dashboardImage: "/images/landing/donations-dashboard.png",
  },
  {
    title: "Steward Every Dollar Without Chasing any Receipts",
    mobileTitle: ["Steward Every Dollar Without", "Chasing any Receipts"],
    titleLines: [
      { text: "Steward Every", style: "normal" },
      { text: "Dollar Without", style: "normal" },
      { text: "Chasing any", style: "normal" },
      { text: "Receipts", style: "italic" },
    ],
    description:
      "Track expenses by fund, category, or campaign, the way churches actually work. Scan receipts with AI categorization. Generate financial reports you understand. Church accounting, finally simplified.",
    linkText: "Explore Expenses",
    linkHref: "/features",
    backgroundImage: "/images/landing/garden-pond-painting.png",
    dashboardImage: "/images/landing/expenses-dashboard.png",
  },
  {
    title: "Lead With Clarity Without Chasing Numbers",
    mobileTitle: ["Lead With Clarity Without", "Chasing Numbers"],
    titleLines: [
      { text: "Lead With", style: "normal" },
      { text: "Clarity Without", style: "normal" },
      { text: "Chasing", style: "normal" },
      { text: "Numbers", style: "italic" },
    ],
    description:
      "Generate any report in seconds, giving trends, fund balances, expense summaries, donor insights. Ask questions, get answers instantly. Make wise decisions with real data. The guesswork and gut feelings? Finally over.",
    linkText: "Explore Reports",
    linkHref: "/features",
    backgroundImage: "/images/landing/calm-sea-painting.png",
    dashboardImage: "/images/landing/financial-analysis-dashboard.png",
  },
]

export function Features() {
  return (
    <section id="features" className="w-full py-20 lg:py-32 relative" style={{ backgroundColor: "#1c1c1c" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Feature Cards */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1

            return (
              <div key={feature.title}>
                <div
                  className="relative mx-auto h-auto w-full overflow-hidden shadow-2xl lg:h-[720px]"
                  style={{ backgroundColor: "#F2F1ED" }}
                >
                  <div className={`flex h-full flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    {/* Text content - 42% of the card on desktop, 100% on mobile */}
                    <div className="flex w-full flex-col justify-center p-6 lg:w-[42%] lg:p-10">
                      <div className={`space-y-3 lg:space-y-6 ${isReversed ? "lg:text-right" : "text-left"}`}>
                        {/* Mobile Title - 2 lines, simpler */}
                        <h2 className="lg:hidden">
                          {feature.mobileTitle?.map((line, i) => (
                            <span
                              key={i}
                              className="block text-2xl font-normal tracking-tight text-black"
                            >
                              {line}
                            </span>
                          ))}
                        </h2>

                        {/* Desktop Title - 4 lines with italic styling */}
                        <h2 className="hidden lg:block">
                          {feature.titleLines?.map((line, i) => (
                            <span
                              className={`block whitespace-nowrap ${isReversed ? "text-right" : "text-left"} tracking-tight font-normal ${line.style === "italic" ? "italic text-black/60 text-4xl xl:text-5xl" : "text-5xl xl:text-6xl text-black"}`}
                              key={i}
                            >
                              {line.text}
                            </span>
                          ))}
                        </h2>

                        {/* Link - closer to title on mobile */}
                        <div>
                          <Link
                            href={feature.linkHref}
                            className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-[#5B9BD5] lg:text-lg text-cyan-950"
                          >
                            {feature.linkText}
                            <span>→</span>
                          </Link>
                        </div>

                        {/* Description - hidden on mobile */}
                        <p className="hidden lg:block text-pretty text-base leading-relaxed text-black/70 font-light">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Image area - 58% of the card on desktop, 100% on mobile */}
                    <div className="relative h-[320px] w-full lg:h-full lg:w-[58%]">
                      {/* Background painting - covers full height */}
                      <img
                        src={feature.backgroundImage || "/placeholder.svg"}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* Dashboard image - centered in the painting area */}
                      <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                        <img
                          src={feature.dashboardImage || "/placeholder.svg"}
                          alt={`${feature.title} dashboard preview`}
                          className="max-h-[90%] max-w-[90%] rounded-lg object-contain shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
