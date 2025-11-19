import type React from "react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  tagline?: string
  ctaButton?: {
    text: string
    href: string
  }
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  linkSections: Array<{
    title: string
    links: Array<{
      href: string
      label: string
    }>
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({ logo, brandName, tagline, ctaButton, socialLinks, linkSections, copyright }: FooterProps) {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-x-2 mb-4">
              {logo}
              
            </div>
            {tagline && <p className="text-muted-foreground mb-6 max-w-sm">{tagline}</p>}
            {ctaButton && (
              <Button asChild className="mb-8">
                <a href={ctaButton.href}>{ctaButton.text}</a>
              </Button>
            )}
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {linkSections.map((section, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <div>{copyright.text}</div>
            {copyright.license && <div className="mt-1">{copyright.license}</div>}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
