import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ConfettiEffect } from "@/components/contact/confetti-effect"
import Script from "next/script"

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1c1c1c" }}>
      <Script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"
        strategy="afterInteractive"
      />
      <ConfettiEffect />
      <Header />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
