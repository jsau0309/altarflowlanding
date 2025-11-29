"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LegalLayoutProps {
  children: React.ReactNode
  currentPage: "terms" | "privacy"
}

export function LegalLayout({ children, currentPage }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#1c1c1c] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-48 flex-shrink-0">
            <nav className="space-y-2 lg:sticky lg:top-24">
              <Link
                href="/terms"
                className={cn(
                  "block text-base transition-colors",
                  currentPage === "terms" ? "text-white font-semibold" : "text-white/60 hover:text-white",
                )}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className={cn(
                  "block text-base transition-colors",
                  currentPage === "privacy" ? "text-white font-semibold" : "text-white/60 hover:text-white",
                )}
              >
                Privacy Policy
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">{children}</main>
        </div>
      </div>
    </div>
  )
}
