import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/liquid-button"
import { BorderTrail } from "@/components/ui/border-trail"

export function Hero() {
    return (
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
                    {"Plan your day, organise your ideas, and collaborate with ease—all in one place. Altarflow helps you stay focused and in control, no matter what you're working on."}
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
                            className="px-7 py-4 text-base font-sans whitespace-nowrap border-none rounded-none bg-[hsl(221.2,83.2%,53.3%)] text-[hsl(210,40%,98%)] hover:bg-[hsl(221.2,83.2%,45%)] h-auto"
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
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/CleanShot%202025-09-15%20at%2022.01.04%402x%281%29-86uOvDOenwNr0EmKn6btsgYl7zbLQb.png"
                                alt="Altarflow Dashboard - Comprehensive church management platform"
                                width={1920}
                                height={1080}
                                className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
