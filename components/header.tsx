"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import content from "@/app/_content/picklebolt.json"
import { PlaceholderChip } from "./placeholder-chip"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/event", label: "Event" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-pb-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {content.branding.logo.startsWith("[DROP") ? (
              <PlaceholderChip token="LOGO" className="h-10" />
            ) : (
              <img src={content.branding.logo || "/placeholder.svg"} alt="Picklebolt" className="h-10" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-pb-pink ${
                  pathname === item.href ? "text-pb-pink" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-pb-red to-pb-pink text-white font-semibold lightning-glow hover:scale-105 transition-transform"
            >
              <a href={content.hero.registerUrl}>Register</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-pb-pink text-pb-pink hover:bg-pb-pink/10 bg-transparent"
            >
              <a href={content.hero.donateUrl}>Donate</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-pb-pink" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button asChild className="bg-gradient-to-r from-pb-red to-pb-pink text-white font-semibold">
                  <a href={content.hero.registerUrl}>Register</a>
                </Button>
                <Button asChild variant="outline" className="border-pb-pink text-pb-pink bg-transparent">
                  <a href={content.hero.donateUrl}>Donate</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
