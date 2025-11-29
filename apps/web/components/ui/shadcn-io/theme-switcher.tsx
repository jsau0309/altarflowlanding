"use client"

import { Moon, Sun, Monitor } from "lucide-react"

interface ThemeSwitcherProps {
  defaultValue?: "light" | "dark" | "system"
  value?: "light" | "dark" | "system"
  onChange?: (theme: "light" | "dark" | "system") => void
}

export function ThemeSwitcher({ defaultValue = "system", value, onChange }: ThemeSwitcherProps) {
  const currentTheme = value || defaultValue

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
      <button
        onClick={() => onChange?.("light")}
        className={`rounded-full p-2 transition-all ${
          currentTheme === "light" ? "bg-white/20 text-white" : "text-white/60 hover:text-white/90"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => onChange?.("system")}
        className={`rounded-full p-2 transition-all ${
          currentTheme === "system" ? "bg-white/20 text-white" : "text-white/60 hover:text-white/90"
        }`}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </button>
      <button
        onClick={() => onChange?.("dark")}
        className={`rounded-full p-2 transition-all ${
          currentTheme === "dark" ? "bg-white/20 text-white" : "text-white/60 hover:text-white/90"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  )
}
