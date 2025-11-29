const testimonials = [
  {
    quote:
      "StreamLine has completely transformed how our team works. We've reduced deployment time by 80% and our productivity has never been higher.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    company: "TechCorp",
  },
  {
    quote:
      "The collaboration features are game-changing. Our remote team feels more connected than ever, and we're shipping features at twice the speed.",
    author: "Michael Rodriguez",
    role: "Head of Engineering at DataFlow",
    company: "DataFlow",
  },
  {
    quote:
      "Security was our biggest concern when switching platforms. StreamLine exceeded our expectations with their enterprise-grade security features.",
    author: "Emily Thompson",
    role: "VP of Operations at SecureNet",
    company: "SecureNet",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-gray-200 bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-5xl text-black">
            Trusted by innovative teams
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-black/70">
            Join thousands of teams who have transformed their workflow with StreamLine.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="leading-relaxed text-black">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-6">
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-sm text-black/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
