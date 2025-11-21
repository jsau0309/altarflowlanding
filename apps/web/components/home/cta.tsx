"use client"

import { Button } from "@/components/ui/button"
import { EtheralShadow } from "@/components/ui/etheral-shadow"
import { Typewriter } from "@/components/ui/typewriter"

export function CTA() {
    return (
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
                                        className="px-7 py-4 text-base font-sans whitespace-nowrap border-none rounded-none bg-[hsl(220,13%,69%)] text-[hsl(210,40%,98%)] hover:bg-[hsl(220,13%,60%)] h-auto"
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
    )
}
