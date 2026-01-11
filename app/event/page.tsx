"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, MapPin, Trophy } from "lucide-react"
import content from "../_content/picklebolt.json"
import { PlaceholderImage } from "@/components/placeholder-image"
import { CountdownTimer } from "@/components/countdown-timer"

export default function EventPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="font-display text-5xl md:text-7xl gradient-text mb-4">EVENT INFO</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Everything you need to know about the tournament format, schedule, and fees.
          </p>
          <CountdownTimer targetDate={content.hero.countdownDate} className="mb-8" />
        </div>

        <div className="text-center mb-12">
          <Button
            size="lg"
            disabled={content.hero.registerDisabled}
            className="bg-gradient-to-r from-pb-red to-pb-pink text-white font-display text-xl px-8 py-6 opacity-50 cursor-not-allowed"
          >
            {content.hero.registerText}
          </Button>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
              <Card className="p-6 bg-card border-white/10">
                <div className="flex items-start gap-4">
                  <DollarSign className="text-pb-pink mt-1" size={32} />
                  <div className="flex-1">
                    <h2 className="font-display text-2xl mb-3">REGISTRATION FEES</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">{content.event.registrationFee}</p>
                    <p className="text-muted-foreground leading-relaxed">{content.event.divisionFee}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              <Card className="p-6 bg-card border-white/10">
                <div className="flex items-start gap-4">
                  <Users className="text-pb-pink mt-1" size={32} />
                  <div className="flex-1">
                    <h2 className="font-display text-2xl mb-3">FORMAT</h2>
                    <p className="text-muted-foreground leading-relaxed">{content.event.format}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* What You Get */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              <Card className="p-6 bg-card border-white/10">
                <div className="flex items-start gap-4">
                  <Trophy className="text-pb-pink mt-1" size={32} />
                  <div className="flex-1">
                    <h2 className="font-display text-2xl mb-3">WHAT YOU GET</h2>
                    <ul className="space-y-2 text-muted-foreground">
                      {content.event.whatYouGet.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-pb-pink" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <Card className="p-4 bg-card border-white/10">
                <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                  <MapPin className="text-pb-pink" size={24} />
                  VENUE
                </h3>
                {content.event.venueImage.startsWith("[DROP") ? (
                  <PlaceholderImage token="PICKLER_UNIVERSE_VENUE" aspectRatio="3/2" />
                ) : (
                  <img
                    src={content.event.venueImage || "/placeholder.svg"}
                    alt="Venue"
                    className="w-full rounded-lg aspect-[3/2] object-cover"
                  />
                )}
                <p className="text-sm text-muted-foreground mt-4">{content.hero.venueAddress}</p>
              </Card>
            </div>

            {/* Quick Info */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-100">
              <Card className="p-6 bg-gradient-to-br from-pb-red/20 to-pb-pink/20 border-pb-pink/30">
                <h3 className="font-display text-2xl mb-4">QUICK INFO</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Date</p>
                    <p className="font-semibold">{content.hero.tagline}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold">{content.hero.venueName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Prize Pool</p>
                    <p className="font-semibold">{content.hero.prizePool}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
