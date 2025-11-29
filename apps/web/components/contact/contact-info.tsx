import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      detail: "support@altarflow.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "(555) 123-4567",
      description: "Monday - Friday, 9am - 5pm EST",
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "123 Church Street, Suite 100",
      description: "Atlanta, GA 30303",
    },
    {
      icon: Clock,
      title: "Support Hours",
      detail: "9:00 AM - 5:00 PM EST",
      description: "Monday through Friday",
    },
  ]

  return (
    <section className="w-full py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Other Ways to Reach Us</h2>
          <p className="text-xl text-gray-300">Choose the method that works best for you</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-[#5B9BD5]/20">
                    <Icon className="h-6 w-6 text-[#5B9BD5]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-lg text-white/90 font-medium mb-2">{item.detail}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
