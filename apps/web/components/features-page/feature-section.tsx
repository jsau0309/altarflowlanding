import Image from "next/image"

interface SmallCard {
  title: string
  description: string
  backgroundColor: string
  screenshotImage: string
}

interface FeatureSectionProps {
  section: {
    id: string
    title: string
    subtitle: string
    description: string
    paintingImage: string
    screenshotImage: string
    smallCards: SmallCard[]
  }
}

export function FeatureSection({ section }: FeatureSectionProps) {
  return (
    <div className="space-y-6">
      {/* Large Card - Following landing page structure */}
      <div className="relative h-auto w-full overflow-hidden shadow-2xl lg:h-[600px]">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Left side - Content (100% on mobile, 42% on desktop) */}
          <div className="flex w-full flex-col justify-center bg-[#F2F1ED] p-6 lg:w-[42%] lg:p-12">
            <div className="space-y-3 lg:space-y-6">
              <h2 className="text-2xl font-bold text-black lg:text-5xl">{section.title}</h2>
              <p className="hidden text-balance text-lg text-black/70 lg:block lg:text-xl">{section.subtitle}</p>
            </div>
          </div>

          {/* Right side - Painting background with screenshot overlay (100% on mobile, 58% on desktop) */}
          <div className="relative h-[320px] w-full lg:h-full lg:w-[58%]">
            {/* Painting background */}
            <Image src={section.paintingImage || "/placeholder.svg"} alt="" fill className="object-cover" />

            {/* Dashboard screenshot overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
              <div className="relative h-full w-full">
                <Image
                  src={section.screenshotImage || "/placeholder.svg"}
                  alt={`${section.title} dashboard`}
                  fill
                  className="rounded-lg object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Small Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {section.smallCards.map((card, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg">
            <div className="flex flex-col">
              {/* Text content area - cream background with fixed height */}
              <div className="h-[140px] bg-[#F2F1ED] p-6">
                <h3 className="mb-2 text-xl font-semibold text-black">{card.title}</h3>
                <p className="text-sm text-black/70">{card.description}</p>
              </div>

              {/* Screenshot area - dark green background with fixed height and consistent padding */}
              <div className="relative h-[300px] bg-[#53695C] p-6">
                <div className="relative h-full w-full">
                  <Image
                    src={card.screenshotImage || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
