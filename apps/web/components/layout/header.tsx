"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/90 backdrop-blur-md"
                }`}
        >
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center">
                    <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Group%2020%281%29-DjH8B6FkcLxBMbhG8KmCxgXSYGq8yl.png"
                        alt="Altarflow"
                        width={160}
                        height={32}
                        className="h-8 w-auto"
                        priority
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
    )
}
