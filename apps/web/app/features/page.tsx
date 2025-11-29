import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeatureSection } from "@/components/features-page/feature-section"

export default function FeaturesPage() {
  const featureSections = [
    {
      id: "donations",
      title: "Donations",
      subtitle: "Track every gift without touching a spreadsheet",
      description:
        "Digital donations, cash offerings, recurring gifts—all tracked and categorized automatically. Donor receipts sent instantly. Financial reports ready in seconds.",
      paintingImage: "/images/features/water-lily-pond-1.png",
      screenshotImage: "/placeholder.svg?height=600&width=800",
      smallCards: [
        {
          title: "Automatic categorization",
          description: "AI-powered categorization of all donations by fund, campaign, or custom categories.",
          backgroundColor: "#E8E6DF",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Instant receipts",
          description: "Automated tax receipts sent to donors immediately after each gift.",
          backgroundColor: "#D4E4F1",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Donor insights",
          description: "Track giving patterns, identify trends, and understand your donor base.",
          backgroundColor: "#F5E6D3",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "expenses",
      title: "Expenses",
      subtitle: "Steward every dollar without chasing receipts",
      description:
        "Track expenses by fund, category, or campaign. Scan receipts with AI categorization. Generate financial reports you understand. Church accounting, simplified.",
      paintingImage: "/images/features/riverside-scene.png",
      screenshotImage: "/placeholder.svg?height=600&width=800",
      smallCards: [
        {
          title: "Receipt scanning",
          description: "Snap a photo and let AI extract all the details automatically.",
          backgroundColor: "#F5E6D3",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Budget tracking",
          description: "Set budgets by fund or category and track spending in real-time.",
          backgroundColor: "#E8E6DF",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Approval workflows",
          description: "Custom approval processes for expenses that require oversight.",
          backgroundColor: "#D4E4F1",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "reports",
      title: "Reports",
      subtitle: "Lead with clarity without chasing numbers",
      description:
        "Generate any report in seconds. Giving trends, fund balances, expense summaries, donor insights. Ask questions, get answers instantly. Make wise decisions with real data.",
      paintingImage: "/images/features/garden-archway.png",
      screenshotImage: "/placeholder.svg?height=600&width=800",
      smallCards: [
        {
          title: "Custom reports",
          description: "Build any report you need with our intuitive report builder.",
          backgroundColor: "#D4E4F1",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Real-time insights",
          description: "Ask questions in plain language and get instant answers with AI.",
          backgroundColor: "#F5E6D3",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Export anywhere",
          description: "Export to PDF, Excel, or share directly with your board.",
          backgroundColor: "#E8E6DF",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "members",
      title: "Members",
      subtitle: "Know your people without endless spreadsheets",
      description:
        "Manage member information, track attendance, organize groups, and understand engagement. All your people data in one place, finally organized.",
      paintingImage: "/images/features/water-lily-pond-2.png",
      screenshotImage: "/placeholder.svg?height=600&width=800",
      smallCards: [
        {
          title: "Member profiles",
          description: "Complete profiles with contact info, giving history, and engagement.",
          backgroundColor: "#E8E6DF",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Group management",
          description: "Organize small groups, teams, and ministries with ease.",
          backgroundColor: "#D4E4F1",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Attendance tracking",
          description: "Track service and event attendance to understand engagement.",
          backgroundColor: "#F5E6D3",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "forms",
      title: "Forms",
      subtitle: "Collect information without the chaos",
      description:
        "Create custom forms for events, sign-ups, surveys, and applications. Responses automatically organized and connected to member profiles.",
      paintingImage: "/images/features/vineyard-mountains.png",
      screenshotImage: "/placeholder.svg?height=600&width=800",
      smallCards: [
        {
          title: "Custom form builder",
          description: "Drag and drop to create any form you need in minutes.",
          backgroundColor: "#F5E6D3",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Conditional logic",
          description: "Show or hide questions based on previous answers.",
          backgroundColor: "#E8E6DF",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Automatic integration",
          description: "Form responses automatically update member profiles and trigger workflows.",
          backgroundColor: "#D4E4F1",
          screenshotImage: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1c1c1c" }}>
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white lg:text-6xl">Features</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">The best way to manage your church.</p>
          </div>

          <div className="space-y-32">
            {featureSections.map((section) => (
              <FeatureSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
