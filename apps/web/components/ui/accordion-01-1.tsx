import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export const faqItems = [
  {
    id: "01",
    title: "What is Altarflow?",
    content:
      "Altarflow is an all-in-one church management software designed specifically for small and mid-sized bilingual churches. It combines donation tracking, expense management, financial reporting, member management, and bilingual communications into a single platform—eliminating the need for spreadsheets, QuickBooks, and multiple disconnected tools. Built for Hispanic and bilingual congregations, Altarflow works fully in English and Spanish.",
  },
  {
    id: "02",
    title: "How much does Altarflow cost?",
    content:
      "Altarflow costs $149 per month (or $1,488 per year with annual billing—saving you $300). This includes unlimited donations, unlimited users, all features, and bilingual support. There are no setup fees, no per-member charges, and no feature tiers. The only additional cost is standard credit card processing (2.9% + $0.30 per transaction), which goes directly to Stripe, not Altarflow. A 30-day free trial is available with no credit card required.",
  },
  {
    id: "03",
    title: "Is Altarflow good for small churches?",
    content:
      "Yes. Altarflow was built specifically for small churches with 50-300 members. Unlike enterprise platforms that cost $5,000-15,000 per year and require dedicated staff, Altarflow is designed for solo pastors and small teams. The platform is simple enough to set up in under 5 hours, yet powerful enough to scale as your church grows—all at the same $149/month price whether you have 50 or 500 members.",
  },
  {
    id: "04",
    title: "Does Altarflow work in Spanish?",
    content:
      "Yes. Altarflow is fully bilingual with native English and Spanish support throughout the entire platform. This includes donation pages, email campaigns, text messages, member portals, financial reports, and the admin interface. Unlike other church software that treats Spanish as an afterthought, Altarflow was built from the ground up for bilingual Hispanic churches. Every feature works seamlessly in both languages.",
  },
  {
    id: "05",
    title: "What features does Altarflow include?",
    content:
      "Altarflow includes everything churches need to manage operations: Donations (online giving, cash tracking, recurring gifts, instant receipts, year-end statements), Expenses (receipt scanning with AI categorization, budget tracking, fund management), Reports (financial summaries, giving trends, fund balances, exportable to PDF/Excel), Members (visitor tracking, attendance, engagement insights, automated follow-ups), and Communications (bilingual email and SMS campaigns, event reminders, donor thank-yous). All features are included at one price—no add-ons or feature tiers.",
  },
  {
    id: "06",
    title: "How long does it take to set up Altarflow?",
    content:
      "Most churches are fully operational in under 5 hours of setup time, spread over 1-2 weeks. This includes a personal onboarding call, importing your member list, migrating historical donation data, and customizing email templates. You'll see value within 48 hours of starting. Altarflow also offers free data migration from spreadsheets, QuickBooks, Tithe.ly, and other tools—our team handles the technical work for you.",
  },
  {
    id: "07",
    title: "Can I cancel Altarflow anytime?",
    content:
      "Yes. Altarflow has no contracts and no cancellation fees. You can cancel anytime directly from your account settings—no phone calls required. We also offer a 60-day money-back guarantee: if you're not satisfied, you'll receive a full refund, no questions asked. Your data is always exportable in standard formats (CSV, PDF, Excel), so you're never locked in.",
  },
  {
    id: "08",
    title: "How is Altarflow different from other church management software?",
    content:
      "Altarflow differs from competitors in three key ways: Built for bilingual churches (native Spanish and English throughout—not a translation add-on), All-in-one at small church pricing (replaces QuickBooks, Tithe.ly, Mailchimp, and spreadsheets for $149/month vs. $5,000+ for comparable platforms like Planning Center), and Designed for small teams (simple enough for solo pastors to manage, with AI-powered automation that handles donations, receipts, expense categorization, and follow-ups automatically). Altarflow gives small churches enterprise capabilities without enterprise complexity or cost.",
  },
]

export function Accordion01() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="01" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="text-left hover:pl-3 hover:[&_div.bg-primary]:bg-secondary duration-1000 hover:no-underline cursor-pointer [&>svg]:hidden hover:[&_svg]:rotate-45">
              <div className="flex flex-1 items-start justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <span className="text-sm text-gray-400 font-mono">{item.id}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="bg-primary duration-500 rounded-sm flex items-center p-2">
                  <Plus className={cn("text-primary-foreground size-4 shrink-0 transition-transform duration-1000")} />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-gray-300 pb-6 pl-12 pr-20">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
