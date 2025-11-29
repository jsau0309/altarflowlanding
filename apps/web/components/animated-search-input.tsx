"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, Loader2 } from "lucide-react"

const questions = [
  "Generate our financial report for October",
  "Create year-end giving statements",
  "Create a form for our upcoming baptism",
  "Create a donation campaign for our vision fund",
  "Add all expenses from January",
]

export function AnimatedSearchInput() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentText = questions[currentQuestion]
    let charIndex = 0
    setDisplayedText("")
    setIsTyping(true)
    setIsLoading(false)

    // Typewriter effect - 50ms per character
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // After typing completes, immediately start loading for 5 seconds
        setTimeout(() => {
          setIsLoading(true)

          // After 5 seconds of loading, move to next question
          setTimeout(() => {
            setIsLoading(false)
            setCurrentQuestion((prev) => (prev + 1) % questions.length)
          }, 5000)
        }, 100)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentQuestion])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glassmorphic container */}
      <div className="relative flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.12] px-7 py-2 backdrop-blur-xl">
        <div className="relative flex min-h-[1.575rem] flex-1 items-center overflow-hidden">
          <div className="pointer-events-none">
            <div className="text-[1.05rem] leading-6 text-white/60">
              {displayedText}
              <span
                className={`ml-0.5 inline-block h-5 w-0.5 bg-white/60 transition-opacity duration-100 ${
                  isTyping && showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        <motion.button
          type="button"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Submit question"
          animate={isLoading ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.6, repeat: isLoading ? Number.POSITIVE_INFINITY : 0 }}
        >
          {isLoading ? (
            <Loader2 className="h-[18px] w-[18px] animate-spin text-white" />
          ) : (
            <ArrowUp className="h-[18px] w-[18px] text-white" />
          )}
        </motion.button>
      </div>
    </div>
  )
}
