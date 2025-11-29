"use client"

import { useEffect } from "react"

export function ConfettiEffect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).confetti) {
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration

        const interval = setInterval(() => {
          const timeLeft = animationEnd - Date.now()

          if (timeLeft <= 0) {
            clearInterval(interval)
            return
          }

          const particleCount = 50 * (timeLeft / duration)

          // Left side confetti
          ;(window as any).confetti({
            particleCount,
            startVelocity: 30,
            spread: 360,
            origin: { x: 0, y: 0 },
            colors: ["#5B9BD5", "#F2F1ED", "#1c1c1c", "#ffffff"],
          })

          // Right side confetti
          ;(window as any).confetti({
            particleCount,
            startVelocity: 30,
            spread: 360,
            origin: { x: 1, y: 0 },
            colors: ["#5B9BD5", "#F2F1ED", "#1c1c1c", "#ffffff"],
          })
        }, 250)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}
