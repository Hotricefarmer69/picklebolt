"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import content from "../_content/picklebolt.json"
import { PlaceholderImage } from "@/components/placeholder-image"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="font-display text-5xl md:text-7xl gradient-text mb-4">OUR SPONSORS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thank you to our amazing sponsors who make Picklebolt possible and help support CHS Tennis.
          </p>
        </div>

        {/* Premier Sponsors */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-8">PREMIER PARTNERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.sponsors.premier.map((sponsor, index) => (
              <div
                key={index}
                className="animate-in fade-in zoom-in-95 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-8 bg-card border-white/10 hover:border-pb-pink/50 transition-all hover:shadow-[0_0_30px_rgba(255,60,126,0.3)] group h-full flex flex-col">
                  <div className="aspect-video mb-6 flex items-center justify-center bg-white/5 rounded-lg">
                    {sponsor.logo.startsWith("[DROP") ? (
                      <PlaceholderImage
                        token={sponsor.logo.match(/\[DROP LOGO: (.*?)\]/)?.[1] || "SPONSOR_LOGO"}
                        aspectRatio="16/9"
                      />
                    ) : (
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain p-4 group-hover:scale-110 transition-transform"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-center mb-2">{sponsor.name}</h3>
                  <p className="text-muted-foreground text-center mb-4 flex-1">{sponsor.tagline}</p>
                  {!sponsor.website.startsWith("[DROP") && (
                    <div className="text-center">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-pb-pink text-pb-pink hover:bg-pb-pink/10 bg-transparent"
                      >
                        <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink size={14} className="ml-2" />
                        </a>
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Elite Donors */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-8 gradient-text">
            Special thank you to our elite donors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {content.sponsors.eliteDonors.map((donor, index) => (
              <div
                key={index}
                className="animate-in fade-in zoom-in-95 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="p-6 bg-card border-white/10 hover:border-pb-pink/50 transition-all hover:shadow-[0_0_20px_rgba(255,60,126,0.2)] text-center">
                  <p className="font-display text-lg">{donor}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="p-8 bg-gradient-to-br from-pb-red/20 to-pb-pink/20 border-pb-pink/30 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">BECOME A SPONSOR</h2>
            <div className="min-h-[300px] flex items-center justify-center">
              <PlaceholderImage token="SPONSORSHIP_CANVA_GRAPHIC" aspectRatio="16/9" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
