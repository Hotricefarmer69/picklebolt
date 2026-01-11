"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Heart, Trophy, Users } from "lucide-react"
import content from "./_content/picklebolt.json"
import { PlaceholderImage } from "@/components/placeholder-image"
import { CountdownTimer } from "@/components/countdown-timer"
import { CounterAnimation } from "@/components/counter-animation"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pb-red/20 via-pb-black to-pb-pink/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,60,126,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Image Placeholder */}
            <div className="mb-8">
              {content.hero.heroImage.startsWith("[DROP") ? (
                <PlaceholderImage token="HERO_ACTION" aspectRatio="16/9" />
              ) : (
                <img
                  src={content.hero.heroImage || "/placeholder.svg"}
                  alt="Picklebolt Tournament"
                  className="w-full rounded-2xl aspect-video object-cover"
                />
              )}
            </div>

            <h1 className="font-display text-6xl md:text-8xl mb-4 gradient-text">{content.hero.title}</h1>

            <div className="mb-6">
              <p className="text-xl md:text-2xl text-pb-gray mb-6">🕒 {content.hero.tagline}</p>
              <CountdownTimer targetDate={content.hero.countdownDate} />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8 text-sm md:text-base">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-white/10">
                <Trophy className="text-pb-pink" size={20} />
                <span>{content.hero.prizePool}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-white/10">
                <MapPin className="text-pb-pink" size={20} />
                <span className="text-sm">
                  {content.hero.venueName} • {content.hero.venueAddress}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                disabled={content.hero.registerDisabled}
                className="bg-gradient-to-r from-pb-red to-pb-pink text-white font-display text-xl px-8 py-6 opacity-50 cursor-not-allowed"
              >
                {content.hero.registerText}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-pb-pink text-pb-pink hover:bg-pb-pink/10 font-display text-xl px-8 py-6 bg-transparent"
              >
                <Link href="#about">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-pb-gray text-pb-black">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">WHAT IS PICKLEBOLT?</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-4">{content.about.description}</p>
          <p className="text-center">
            <span className="text-lg">For further information on money distribution click </span>
            <Link
              href={content.about.learnMoreUrl}
              className="text-pb-red font-bold underline hover:text-pb-pink transition-colors"
            >
              HERE
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <Card className="p-6 bg-card border-white/10 hover:border-pb-pink/50 transition-colors h-full">
                <Users className="text-pb-pink mb-4" size={40} />
                <h3 className="font-display text-2xl mb-2">{content.pillars.inclusive.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{content.pillars.inclusive.description}</p>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <Card className="p-6 bg-card border-white/10 hover:border-pb-pink/50 transition-colors h-full">
                <Trophy className="text-pb-pink mb-4" size={40} />
                <h3 className="font-display text-2xl mb-2">{content.pillars.competitive.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{content.pillars.competitive.description}</p>
                {content.pillars.competitive.medalImage.startsWith("[DROP") ? (
                  <PlaceholderImage token="PICKLEBOLT_MEDAL" aspectRatio="16/9" />
                ) : (
                  <img
                    src={content.pillars.competitive.medalImage || "/placeholder.svg"}
                    alt="Picklebolt Medal"
                    className="w-full rounded-lg"
                  />
                )}
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <Card className="p-6 bg-card border-white/10 hover:border-pb-pink/50 transition-colors h-full">
                <Heart className="text-pb-pink mb-4" size={40} />
                <h3 className="font-display text-2xl mb-2">{content.pillars.cause.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{content.pillars.cause.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-pb-pink text-pb-pink hover:bg-pb-pink/10 bg-transparent"
                >
                  <Link href={content.pillars.cause.donateUrl}>Donate Here</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-display text-4xl md:text-5xl mb-2 gradient-text">PREMIER PARTNERS</h2>
            <p className="text-muted-foreground">Powered by the best in pickleball</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {content.sponsors.premier.map((sponsor, index) => (
              <div
                key={index}
                className="group animate-in fade-in zoom-in-95 duration-500 hover:-translate-y-2 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 bg-background border-white/10 hover:border-pb-pink/50 transition-all h-full flex flex-col items-center text-center">
                  <div className="w-full aspect-video mb-4 flex items-center justify-center bg-white/5 rounded-lg overflow-hidden">
                    {sponsor.logo.startsWith("[DROP") ? (
                      <PlaceholderImage
                        token={sponsor.logo.match(/\[DROP LOGO: (.*?)\]/)?.[1] || "SPONSOR_LOGO"}
                        aspectRatio="16/9"
                      />
                    ) : (
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-xl mb-2">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.tagline}</p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-3xl mb-6 gradient-text">Special thank you to our elite donors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {content.sponsors.eliteDonors.map((donor, index) => (
                <Card
                  key={index}
                  className="p-4 bg-background border-white/10 hover:border-pb-pink/50 transition-colors"
                >
                  <p className="font-display text-lg">{donor}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
            <div>
              <CounterAnimation
                end={content.stats.playersRegistered}
                suffix="+"
                className="font-display text-5xl gradient-text mb-2"
              />
              <p className="text-muted-foreground">Players Registered</p>
            </div>
            <div>
              <CounterAnimation
                end={content.stats.totalRaised}
                prefix="$"
                className="font-display text-5xl gradient-text mb-2"
              />
              <p className="text-muted-foreground">Total Raised</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
