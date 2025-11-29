"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSearchInput } from "./animated-search-input"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
      },
    },
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/landing/hero-clouds.png)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/25" />

      {/* Content */}
      <div className="container relative mx-auto flex min-h-screen items-center px-4 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-7xl mt-32 md:mt-28"
          >
            God Called <span className="font-serif font-medium italic">You to</span>
            <br />
            Feed <span className="font-serif font-medium italic">Sheep</span>. Not Fight
            <br />
            <span className="font-serif font-medium italic">Spreadsheets</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-pretty mx-auto mt-6 max-w-2xl font-light leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-xl text-center"
          >
            One platform. An army of automation. Donations, expenses, members, reports, all handled while you focus on
            what actually matters.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 md:mt-10">
            <AnimatedSearchInput />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button className="w-full sm:w-auto gap-2 rounded-xl px-7 py-6 text-lg">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/30 bg-background rounded-xl px-7 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
            >
              Book a Demo
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 md:mt-12 text-center text-sm font-normal uppercase tracking-wider text-foreground mb-7"
          >
            Trusted by Churches Worldwide
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1c1c1c] pointer-events-none z-10" />
    </section>
  )
}
