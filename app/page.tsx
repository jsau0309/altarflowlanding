"use client"

import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/liquid-button"
import { EtheralShadow } from "@/components/ui/etheral-shadow"
import { Typewriter } from "@/components/ui/typewriter"
import { BorderTrail } from "@/components/ui/border-trail"
import { HandWrittenTitle } from "@/components/ui/hand-written-title"
import { useState, useEffect } from "react"
import { Footer } from "@/components/ui/footer"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedUseCase, setSelectedUseCase] = useState("crm-hygiene")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const useCases = {
    "crm-hygiene": {
      title: "CRM Hygiene",
      description:
        "Keep your database clean and actionable with real-time sync, deduplication, and automated field updates. Conversion helps you fix data at the source so your team can move faster.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
    },
    "lead-scoring": {
      title: "Lead Scoring",
      description:
        "Automatically score and prioritize leads based on engagement, demographics, and behavior patterns. Focus your sales team on the most promising opportunities.",
      icon: <span className="font-bold text-lg">#</span>,
    },
    newsletters: {
      title: "Newsletters",
      description:
        "Create and send targeted email campaigns with advanced segmentation and personalization. Track engagement and optimize your messaging for better results.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    enrichment: {
      title: "Enrichment",
      description:
        "Enhance your contact and company data with real-time information from multiple sources. Get complete profiles with social media, company details, and contact information.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-.181h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    transactional: {
      title: "Transactional",
      description:
        "Send automated transactional emails with high deliverability rates. Handle order confirmations, password resets, and notifications with reliable infrastructure.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Group%2020%281%29-DjH8B6FkcLxBMbhG8KmCxgXSYGq8yl.png"
              alt="Altarflow"
              className="h-8"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-black transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-black transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-gray-900 hover:text-black transition-colors font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-900 hover:text-black transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-gray-900 hover:text-black transition-colors font-medium">
              Case studies
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-900 hover:text-black transition-colors flex items-center font-sans font-medium"
            >
              Sign In
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <Button className="text-white hover:bg-gray-800 font-sans bg-[rgba(59,130,246,1)]">
              Get started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 pt-32 relative">
        {/* Frame container with border trails */}
        <div className="absolute top-20 bottom-[80px] left-[119px] right-[119px] pointer-events-none">
          {/* Static frame lines */}
          <div className="absolute top-0 left-1 right-1 h-px bg-blue-200"></div>
          <div className="absolute top-0 bottom-0 left-0 w-px bg-blue-200"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-blue-200"></div>
          <div className="absolute bottom-0 left-1 right-1 h-px bg-blue-200"></div>

          {/* Corner dots */}
          <div className="absolute -top-[1px] -left-[1px] w-2 h-2 bg-blue-500 rounded-full z-10"></div>
          <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-blue-500 rounded-full z-10"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 bg-blue-500 rounded-full z-10"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 bg-blue-500 rounded-full z-10"></div>

          {/* Border trail animations */}
          <BorderTrail
            className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-80"
            size={8}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <BorderTrail
            className="bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-60"
            size={6}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            delay={2}
          />
          <BorderTrail
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-70"
            size={10}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            delay={4}
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <LiquidButton variant="default" size="lg">
              📊 all-in-one productivity hub
            </LiquidButton>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight text-balance">
            Your productivity hub, perfectly built to work just the way you do.
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Plan your day, organise your ideas, and collaborate with ease—all in one place. Altarflow helps you stay
            focused and in control, no matter what you're working on.
          </p>

          <div className="flex justify-center mb-16 max-w-md mx-auto">
            <div className="flex w-full shadow-sm rounded-full overflow-hidden border border-gray-200">
              <input
                type="email"
                placeholder="What's your work email?"
                className="flex-1 px-5 py-4 text-base border-none focus:outline-none focus:ring-0 bg-white opacity-80"
              />
              <Button
                size="lg"
                className="px-7 py-4 text-base font-sans whitespace-nowrap border-none rounded-none"
                style={{
                  backgroundColor: "hsl(221.2, 83.2%, 53.3%)",
                  color: "hsl(210, 40%, 98%)",
                  border: "none",
                  height: "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(221.2, 83.2%, 45%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(221.2, 83.2%, 53.3%)"
                }}
              >
                Book a demo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Screenshot */}
        <div className="relative mt-16">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
            style={{
              aspectRatio: "16/10",
              height: "776px",
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_photograph_of_a_va_a3cce37e-27ff-48ad-a965-2ff06c0ab29a_3-24quycnbNQHskdSydxD0QVMyLunO7o.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for better content visibility */}
            <div className="absolute inset-0 bg-black/10 pl-[24] pr-[24]"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto p-8">
              <div className="w-[103%] mx-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/CleanShot%202025-09-15%20at%2022.01.04%402x%281%29-86uOvDOenwNr0EmKn6btsgYl7zbLQb.png"
                  alt="Altarflow Dashboard - Comprehensive church management platform"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-blue-700 font-medium text-sm">Our first in class features</span>
            </div>
          </div>

          {/* Container wrapper to match the features container width */}
          <div className="flex justify-center">
            <div style={{ width: "1089px" }} className="max-w-full">
              <div className="grid md:grid-cols-2 gap-12 items-start text-left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight text-balance">
                    Tools that keep you organised, on track, and ready to achieve more.
                  </h2>
                </div>
                <div className="md:pt-4 flex flex-col items-end text-right">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    From customisable workspaces to effortless team collaboration, Nestly is designed to simplify your
                    day and help you focus on what matters most.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Explore our features
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Container - similar to dashboard container */}
        <div className="relative mt-16 flex justify-center">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
            style={{
              aspectRatio: "16/10",
              height: "685px",
              width: "1089px",
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for better content visibility */}
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto p-8">
              <div className="w-[103%] mx-auto">
                {/* Placeholder for calendar interface - will be replaced with provided image */}
                <div className="w-full h-auto rounded-2xl shadow-2xl border border-white/20 bg-white p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Calendar</h3>
                    <div className="flex items-center space-x-4">
                      <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    {["14", "15", "16", "17", "18"].map((day) => (
                      <div key={day} className="p-4 border border-gray-100 rounded-lg">
                        <div className="font-semibold text-lg mb-2">{day}</div>
                        <div className="space-y-2">
                          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Weekly team sync</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="mt-24 flex justify-center">
          <div style={{ width: "1089px" }} className="max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Card 1 - Plan your week */}
              <div className="flex flex-col">
                <div
                  className="relative rounded-3xl overflow-hidden shadow-xl flex items-center justify-center mb-6"
                  style={{
                    aspectRatio: "4/3",
                    height: "300px",
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 w-full p-6">
                    <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="text-center p-2 border border-gray-100 rounded">
                          <div className="font-semibold">14</div>
                        </div>
                        <div className="text-center p-2 border border-gray-100 rounded">
                          <div className="font-semibold">15</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center">
                          Weekly team sync
                          <div className="flex ml-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full -mr-1"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded-full -mr-1"></div>
                          </div>
                        </div>
                        <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center">
                          Weekly team sync
                          <div className="flex ml-2">
                            <div className="w-4 h-4 bg-gray-300 rounded-full -mr-1"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Plan your week with clarity.</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Drag tasks into your calendar and block time for deep work — no bouncing between apps.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2 - Setup templates */}
              <div className="flex flex-col">
                <div
                  className="relative rounded-3xl overflow-hidden shadow-xl flex items-center justify-center mb-6"
                  style={{
                    aspectRatio: "4/3",
                    height: "300px",
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 w-full p-6">
                    <div className="bg-white rounded-2xl shadow-lg p-4 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Setup templates once, reuse forever.</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Start with clean, proven templates for meetings, projects, and weekly planning.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 3 - Collaborate */}
              <div className="flex flex-col">
                <div
                  className="relative rounded-3xl overflow-hidden shadow-xl flex items-center justify-center mb-6"
                  style={{
                    aspectRatio: "4/3",
                    height: "300px",
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u6271482932_a_breathtaking_high-resolution_scene_of_a_majesti_9e911a36-cf8e-4f64-86e6-9816694be54f_2-fOXRoy346eJZXmSuHTanEYyrWR0Tjv.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 w-full p-6">
                    <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
                      <div className="mb-3">
                        <div className="text-xs text-gray-500 mb-1">Work Team • product document</div>
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-blue-100 rounded mr-2 flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                          </div>
                          <span className="text-sm font-medium">Collaboration product design</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs inline-block">Complete</div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          We need to finalize the collaboration features and ensure they work seamlessly across all
                          devices and platforms.
                        </p>
                        <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs inline-block">
                          High Priority
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Collaborate without interruptions.</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Share updates, tag teammates, and move work forward — even when you're not online.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases and Statistics Section */}
      <section className="relative bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] py-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-blue-700 font-medium text-sm">Our first in class features</span>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight text-balance mb-8">
                Issue tracking optimized for speed
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                With Linear, we are creating an issue tracker with an unrivalled user experience. Linear is optimized
                for speed, efficiency and performance. Its realtime sync architecture makes it blazingly fast. Its
                minimalistic, purposeful design helps your team achieve more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-gray-800 border border-gray-700 p-8 text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Built for speed</h3>
                <p className="text-gray-400 leading-relaxed">No page loads. Instant search. Realtime sync.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800 border border-gray-700 p-8 text-center">
                <div className="mb-6">
                  <div className="w-12 h-12 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-
                        2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Use keyboard for everything</h3>
                <p className="text-gray-400 leading-relaxed">
                  Optimized for efficiency with extensive keyboard shortcuts.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800 border border-gray-700 p-8 text-center">
                <div className="mb-6">
                  <div className="w-12 h-12 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">List and Board</h3>
                <p className="text-gray-400 leading-relaxed">View it your way. Kanban boards and list issue views.</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-800 border border-gray-700 p-8 text-center">
                <div className="mb-6">
                  <div className="w-12 h-12 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 13h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Desktop app and offline support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Access and use Linear on the plane, in a cafe or anywhere.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-800 border border-gray-700 p-8 text-center">
                <div className="mb-6">
                  <div className="w-12 h-12 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multiple teams</h3>
                <p className="text-gray-400 leading-relaxed">Company growing? Manage issues for multiple teams.</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-800 border border-gray-700 p-8 text-center">
                <div className="mb-6">
                  <div className="w-12 h-12 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dark mode</h3>
                <p className="text-gray-400 leading-relaxed">Because progress happens all the time, day or night.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Use Cases Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-12 pt-14">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-shrink-0">
              <HandWrittenTitle title="Use cases" />
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex-shrink-0">
              Explore more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left side - Use cases list */}
            <div className="lg:col-span-1">
              <div className="space-y-0">
                {Object.entries(useCases).map(([key, useCase], index) => {
                  const isSelected = selectedUseCase === key
                  const isLast = index === Object.entries(useCases).length - 1

                  return (
                    <div
                      key={key}
                      className={`py-8 ${!isLast ? "border-b border-dotted border-gray-300" : ""} hover:bg-gray-50 cursor-pointer transition-colors px-2`}
                      onClick={() => setSelectedUseCase(key)}
                    >
                      <div className={`flex items-start ${isSelected ? "mb-4" : ""}`}>
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 mt-1 ${
                            isSelected ? "bg-blue-100 text-blue-600" : "bg-blue-50 text-blue-400"
                          }`}
                        >
                          {useCase.icon}
                        </div>
                        <div className="flex-1 pr-2">
                          <h3
                            className={`text-2xl font-bold font-sans ${isSelected ? "text-blue-600" : "text-blue-400"}`}
                          >
                            {useCase.title}
                          </h3>
                          {isSelected && (
                            <p className="text-gray-600 leading-relaxed mt-4 pr-4">{useCase.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right side - Art image */}
            <div className="lg:col-span-2 mt-8">
              <div
                className="rounded-2xl p-8 min-h-[600px] max-h-[600px] relative overflow-hidden"
                style={{
                  backgroundImage: `url('/images/classical-landscape.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative z-10 bg-white rounded-xl shadow-sm border border-gray-200 h-full p-6 overflow-auto">
                  {selectedUseCase === "crm-hygiene" && (
                    <>
                      {/* Mockup interface showing CRM data management */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex space-x-6 text-sm text-gray-600">
                            <span className="border-b-2 border-blue-500 text-blue-600 pb-1">Contact</span>
                            <span>Company</span>
                            <span>View</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Start searching..."
                          className="px-3 py-1 border border-gray-200 rounded text-sm w-48"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        {/* Left column - Navigation */}
                        <div className="space-y-3">
                          {["Emails", "Templates", "Workflows", "Snippets"].map((item) => (
                            <div key={item} className="flex items-center text-sm text-gray-600 py-2">
                              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>

                        {/* Right column - Data fields */}
                        <div className="space-y-3">
                          {[
                            { label: "First Name", value: "first_name" },
                            { label: "Job Title", value: "job_title" },
                            { label: "Last Name", value: "last_name" },
                            { label: "Annual Revenue", value: "annual_revenue" },
                            { label: "Company Name", value: "company_name" },
                            { label: "City", value: "city" },
                            { label: "Country", value: "country" },
                          ].map((field, index) => (
                            <div key={index} className="flex items-center justify-between text-xs py-1">
                              <div className="flex items-center">
                                <div className="w-3 h-3 border border-gray-300 rounded-sm mr-2"></div>
                                <span className="text-gray-700">{field.label}</span>
                              </div>
                              <span className="text-orange-800">{field.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {selectedUseCase === "lead-scoring" && (
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-blue-600">#</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Scoring Dashboard</h3>
                        <p className="text-gray-600">Prioritize your leads with intelligent scoring</p>
                      </div>
                      <div className="w-full max-w-md space-y-3">
                        {[
                          { name: "Sarah Johnson", score: 95, company: "TechCorp" },
                          { name: "Mike Chen", score: 87, company: "StartupXYZ" },
                          { name: "Lisa Rodriguez", score: 72, company: "BigCorp Inc" },
                        ].map((lead, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium text-gray-900">{lead.name}</div>
                              <div className="text-sm text-gray-600">{lead.company}</div>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                lead.score >= 90
                                  ? "bg-green-100 text-green-800"
                                  : lead.score >= 80
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {lead.score}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedUseCase === "newsletters" && (
                    <div className="h-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Newsletter Campaign</h3>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Send Campaign</button>
                      </div>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">Weekly Product Updates</span>
                            <span className="text-sm text-green-600">Sent</span>
                          </div>
                          <div className="text-sm text-gray-600">Sent to 2,847 subscribers</div>
                          <div className="flex space-x-4 text-xs text-gray-500">
                            <span>Open Rate: 24.3%</span>
                            <span>Click Rate: 5.7%</span>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">Feature Announcement</span>
                            <span className="text-sm text-blue-600">Draft</span>
                          </div>
                          <div className="text-sm text-gray-600">Ready to send to 3,124 subscribers</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedUseCase === "enrichment" && (
                    <div className="h-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Data Enrichment</h3>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Enrich Data</button>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Before Enrichment</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Name:</span>
                              <span>John Smith</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Email:</span>
                              <span>john@company.com</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Company:</span>
                              <span className="text-gray-400">Unknown</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Title:</span>
                              <span className="text-gray-400">Unknown</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">After Enrichment</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Name:</span>
                              <span>John Smith</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Email:</span>
                              <span>john@company.com</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Company:</span>
                              <span className="text-green-600">TechCorp Inc</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Title:</span>
                              <span className="text-green-600">VP of Engineering</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedUseCase === "transactional" && (
                    <div className="h-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Transactional Emails</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">99.9% Uptime</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {[
                          { type: "Welcome Email", status: "Delivered", time: "2 min ago" },
                          { type: "Password Reset", status: "Delivered", time: "5 min ago" },
                          { type: "Order Confirmation", status: "Delivered", time: "12 min ago" },
                          { type: "Account Verification", status: "Delivered", time: "18 min ago" },
                        ].map((email, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                          >
                            <div>
                              <div className="font-medium text-gray-900">{email.type}</div>
                              <div className="text-sm text-gray-600">{email.time}</div>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                              {email.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"></section>

      {/* Call to Action Section */}
      <section className="bg-white py-24 pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <EtheralShadow
              color="rgba(30, 58, 138, 1)"
              animation={{ scale: 50, speed: 75 }}
              noise={{ opacity: 0.2, scale: 1.1 }}
              sizing="fill"
              className="rounded-3xl min-h-[400px] flex items-center justify-center"
            >
              <div className="relative z-20 text-center px-8">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight whitespace-nowrap">
                  With Altarflow ☁️ you can
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight whitespace-nowrap mb-8">
                  <Typewriter
                    text={["Expand Globally", "Reach your Town", "Grow your Ministry", "Do Anything in Between"]}
                    speed={100}
                    waitTime={2000}
                    deleteSpeed={50}
                    cursorChar="_"
                    className="text-black"
                    cursorClassName="text-black/60"
                  />
                </div>
                <div className="flex justify-center max-w-md mx-auto">
                  <div className="flex w-full shadow-sm rounded-full overflow-hidden border border-gray-200">
                    <input
                      type="email"
                      placeholder="What's your work email?"
                      className="flex-1 px-5 py-4 text-base border-none focus:outline-none focus:ring-0 bg-white opacity-80"
                    />
                    <Button
                      size="lg"
                      className="px-7 py-4 text-base font-sans whitespace-nowrap border-none rounded-none"
                      style={{
                        backgroundColor: "hsl(220, 13%, 69%)",
                        color: "hsl(210, 40%, 98%)",
                        border: "none",
                        height: "auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "hsl(220, 13%, 60%)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "hsl(220, 13%, 69%)"
                      }}
                    >
                      Book a demo
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </EtheralShadow>
          </div>
        </div>
      </section>

      <Footer
        logo={
          <svg width="32" height="30" viewBox="0 0 541 508" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M290.968 0.973952C268.951 3.10295 244.184 13.251 227.954 26.793C216.213 36.59 204.945 49.8369 199.655 60.0639L197.761 63.724L192.986 62.2509C185.366 59.9019 171.379 59.4579 162.71 61.2909C145.191 64.9939 127.039 78.0809 117.883 93.6109C110.834 105.566 106.986 122.397 108.129 136.274C108.729 143.566 108.646 144.09 106.993 143.412C106.013 143.009 100.034 142.448 93.7088 142.165C80.8388 141.589 70.9488 143.445 57.6348 148.935C33.5818 158.854 11.9418 183.713 4.28277 210.223C-12.2772 267.541 20.6648 326.588 77.5908 341.627C86.6158 344.011 89.2788 344.212 120.71 344.882C139.135 345.275 221.035 345.301 302.71 344.939L451.21 344.28L460.916 341.661C491.406 333.432 517.116 312.521 529.665 285.742C547.817 247.007 542.329 205.322 514.822 172.982C507.859 164.796 496.646 156.395 485.348 150.897C464.227 140.621 445.252 139.407 424.346 146.994C410.428 152.045 398.995 159.979 390.088 170.768C381.772 180.84 377.104 190.249 374.393 202.404L373.054 208.404L359.395 208.682L345.735 208.96L346.326 202.682C347.788 187.16 352.566 173.895 361.676 160.065C374.641 140.381 392.23 127.08 414.125 120.402L422.991 117.697L422.391 110.051C421.052 92.966 413.571 72.0019 403.19 56.2429C395.514 44.5919 377.831 26.844 366.71 19.63C356.762 13.176 342.085 6.68494 331.074 3.86894C324.552 2.20094 303.633 -0.388066 300.21 0.048934C299.66 0.118934 295.501 0.534952 290.968 0.973952ZM246.348 484.995C226.033 487.491 210.443 491.83 209.086 495.366C208.253 497.538 210.469 499.9 215.384 502.079C233.352 510.046 309.966 509.426 326.51 501.179C342.447 493.236 317.402 485.114 274.71 484.381C263.435 484.188 250.672 484.464 246.348 484.995Z"
              fill="#3B82F6"
            />
          </svg>
        }
        brandName="Altarflow"
        ctaButton={{
          text: "Get Started",
          href: "#",
        }}
        socialLinks={[]}
        linkSections={[
          {
            title: "Platform",
            links: [
              { href: "#", label: "Features" },
              { href: "#", label: "Integrations" },
              { href: "#", label: "API" },
              { href: "#", label: "Security" },
            ],
          },
          {
            title: "Resources",
            links: [
              { href: "#", label: "Blog" },
              { href: "#", label: "Documentation" },
              { href: "#", label: "Support" },
              { href: "#", label: "Community" },
            ],
          },
          {
            title: "Company",
            links: [
              { href: "#", label: "Contact" },
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "Terms of Service" },
              { href: "#", label: "Cookie Policy" },
            ],
          },
        ]}
        copyright={{
          text: "© 2025 Altarflow. All rights reserved.",
          license: "Built with ❤️ for churches and ministries worldwide.",
        }}
      />
    </div>
  )
}
