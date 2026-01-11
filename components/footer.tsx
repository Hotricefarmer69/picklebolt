import Link from "next/link"
import { Zap } from "lucide-react"
import content from "@/app/_content/picklebolt.json"

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-pb-pink" size={24} />
              <span className="font-display text-2xl gradient-text">PICKLEBOLT</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every serve sparks a difference. Supporting CHS Tennis through competitive pickleball.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-pb-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-muted-foreground hover:text-pb-pink transition-colors">
                  Event Info
                </Link>
              </li>
              <li>
                <Link href="/cause" className="text-muted-foreground hover:text-pb-pink transition-colors">
                  The Cause
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-muted-foreground hover:text-pb-pink transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-pb-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={content.footer.privacyUrl}
                  className="text-muted-foreground hover:text-pb-pink transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={content.footer.termsUrl}
                  className="text-muted-foreground hover:text-pb-pink transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 Picklebolt. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <p className="text-xs">Designed and developed by Subha Karki</p>
          </div>
          <p>Benefiting Central High School Tennis</p>
        </div>
      </div>
    </footer>
  )
}
