"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeSwitcher } from "@/components/ui/shadcn-io/theme-switcher"
import { useState } from "react"

export function Footer() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark")

  return (
    <footer className="bg-[#1c1c1c] py-8 lg:py-12">
      <div className="mx-auto max-w-[92%] lg:max-w-[85%]">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <Image src="/images/landing/footer-bg.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

          {/* Footer content on top of the painting */}
          <div className="relative z-10 px-6 py-12 lg:px-12 lg:py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {/* Brand */}
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center" scroll={true}>
                  <Image
                    src="/images/landing/logo-white.png"
                    alt="Altarflow"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <p className="mt-4 max-w-xs leading-relaxed text-white/80">
                  {"AI power all in one platform that convert generosity into structure growth and global impact."}
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="mb-4 font-semibold text-white">Product</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/features" className="text-white/70 transition-colors hover:text-white" scroll={true}>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-white/70 transition-colors hover:text-white" scroll={true}>
                      Pricing
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link
                      href="/art-gallery"
                      className="text-white/70 transition-colors hover:text-white"
                      scroll={true}
                    >
                      Art Gallery
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-4 font-semibold text-white">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li></li>
                  <li>
                    <Link href="/blog" className="text-white/70 transition-colors hover:text-white" scroll={true}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 transition-colors hover:text-white">
                      Knowledge Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white/70 transition-colors hover:text-white" scroll={true}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="mb-4 font-semibold text-white">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/privacy" className="text-white/70 transition-colors hover:text-white" scroll={true}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-white/70 transition-colors hover:text-white" scroll={true}>
                      Terms of Service
                    </Link>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>

            {/* Copyright inside the card */}
            <div className="mt-12 border-t border-white/20 pt-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex flex-col items-center gap-3 sm:items-start">
                  <p className="text-center text-sm text-white/60 sm:text-left">
                    &copy; {new Date().getFullYear()} Altarflow. All rights reserved.
                  </p>
                  <ThemeSwitcher defaultValue="dark" onChange={setTheme} value={theme} />
                </div>
                <iframe
                  src="https://status.altarflow.com/badge?theme=dark"
                  width="250"
                  height="30"
                  className="border-0"
                  scrolling="no"
                  title="Altarflow Status"
                  style={{ colorScheme: "normal" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
