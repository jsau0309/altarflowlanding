import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/landing/logo-white.png"
              alt="StreamLine"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex text-xl">
            <Link href="/features" className="text-white/90 transition-colors hover:text-white text-lg">
              Features
            </Link>
            <Link href="/pricing" className="text-white/90 transition-colors hover:text-white text-lg">
              Pricing
            </Link>
            <Link href="/blog" className="text-white/90 transition-colors hover:text-white text-lg">
              Blog
            </Link>
            <Link href="/contact" className="text-white/90 transition-colors hover:text-white text-lg">
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden text-white hover:bg-white/10 md:inline-flex text-lg">
              Sign in
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-black/20 backdrop-blur-xl text-white">
                <div className="flex flex-col gap-8 mt-12 pl-6">
                  <nav className="flex flex-col gap-4">
                    <Link href="/features" className="text-lg font-medium text-white/90 hover:text-white">
                      Features
                    </Link>
                    <Link href="/pricing" className="text-lg font-medium text-white/90 hover:text-white">
                      Pricing
                    </Link>
                    <Link href="/blog" className="text-lg font-medium text-white/90 hover:text-white">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-lg font-medium text-white/90 hover:text-white">
                      Contact Us
                    </Link>
                  </nav>
                  <div className="flex flex-col gap-4 items-start">
                    <Button variant="ghost" className="justify-start text-white hover:bg-white/10 text-lg px-0">
                      Sign in
                    </Button>
                    <Button size="sm" className="bg-white text-black hover:bg-white/90 w-auto px-6">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
