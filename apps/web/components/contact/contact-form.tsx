"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    churchName: "",
    members: "",
    organizationType: "",
    additionalDetails: "",
  })

  useEffect(() => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Create confetti from top
      const confetti = (window as any).confetti
      if (confetti) {
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: 0 },
          }),
        )
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: 0 },
          }),
        )
      }
    }, 250)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Centered Heading */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:pt-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {"Let's Build Something Better for Your Church"}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We start with a 30-minute discovery call to learn about your ministry, your goals, your struggles, and
                the tools that aren't working. Then we'll show you exactly how Altarflow can help.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">In your personalized demo, expect:</h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5B9BD5] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">
                    A walkthrough focused on what your church actually needs.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5B9BD5] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">Real examples from churches like yours.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5B9BD5] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">Honest answers and clear next steps.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="rounded-2xl p-8 lg:p-10" style={{ backgroundColor: "#F2F1ED" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-black mb-2">
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black"
                    placeholder="Pastor, Administrator, etc."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black"
                    placeholder="john@church.org"
                  />
                </div>

                <div>
                  <label htmlFor="churchName" className="block text-sm font-medium text-black mb-2">
                    Church Name *
                  </label>
                  <input
                    type="text"
                    id="churchName"
                    name="churchName"
                    required
                    value={formData.churchName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black"
                    placeholder="New Life Fellowship"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="members" className="block text-sm font-medium text-black mb-2">
                      Members *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("members", value)} required>
                      <SelectTrigger
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black hover:border-[#5B9BD5]"
                        style={{ backgroundColor: "#F2F1ED" }}
                      >
                        <SelectValue placeholder="Select member count" />
                      </SelectTrigger>
                      <SelectContent
                        style={{ backgroundColor: "#F2F1ED" }}
                        className="text-black [&_[data-slot=select-item]]:hover:bg-[#5B9BD5]/10 [&_[data-slot=select-item]]:focus:bg-[#5B9BD5]/20"
                      >
                        <SelectItem value="0-50" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          0-50
                        </SelectItem>
                        <SelectItem value="50-150" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          50-150
                        </SelectItem>
                        <SelectItem value="150-500" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          150-500
                        </SelectItem>
                        <SelectItem value="500+" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          500+
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-medium text-black mb-2">
                      Organization Type *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("organizationType", value)} required>
                      <SelectTrigger
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all text-black hover:border-[#5B9BD5]"
                        style={{ backgroundColor: "#F2F1ED" }}
                      >
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent
                        style={{ backgroundColor: "#F2F1ED" }}
                        className="text-black [&_[data-slot=select-item]]:hover:bg-[#5B9BD5]/10 [&_[data-slot=select-item]]:focus:bg-[#5B9BD5]/20"
                      >
                        <SelectItem value="non-profit" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          Non Profit
                        </SelectItem>
                        <SelectItem value="llc" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          LLC
                        </SelectItem>
                        <SelectItem value="corporation" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          Corporation
                        </SelectItem>
                        <SelectItem value="non-registered" className="hover:bg-[#5B9BD5]/10 focus:bg-[#5B9BD5]/20">
                          Non Registered
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalDetails" className="block text-sm font-medium text-black mb-2">
                    Additional details? (optional)
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    rows={5}
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all resize-none text-black"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-black/80 py-6 text-lg font-medium rounded-lg transition-all"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
