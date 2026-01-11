"use client"

import { Card } from "@/components/ui/card"
import { DollarSign } from "lucide-react"
import content from "../_content/picklebolt.json"
import { PlaceholderImage } from "@/components/placeholder-image"

export default function MoneyDistributionPage() {
  const maxAmount = Math.max(...content.moneyDistribution.breakdown.map((item) => item.amount))

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="font-display text-5xl md:text-7xl gradient-text mb-4">WHY IT MATTERS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every dollar raised goes directly to supporting Central High School Tennis. Here's exactly where your
            contribution makes an impact.
          </p>
        </div>

        {/* Tennis Team Photo */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          {content.moneyDistribution.teamImage.startsWith("[DROP") ? (
            <PlaceholderImage token="CHS_TENNIS_TEAM" aspectRatio="16/9" />
          ) : (
            <img
              src={content.moneyDistribution.teamImage || "/placeholder.svg"}
              alt="CHS Tennis Team"
              className="w-full rounded-2xl aspect-video object-cover"
            />
          )}
        </div>

        {/* Total Raised */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <Card className="p-8 bg-gradient-to-br from-pb-red/20 to-pb-pink/20 border-pb-pink/30 inline-block">
            <DollarSign className="text-pb-pink mx-auto mb-2" size={48} />
            <p className="text-muted-foreground mb-2">Total Raised</p>
            <p className="font-display text-6xl gradient-text">
              ${content.moneyDistribution.totalRaised.toLocaleString()}
            </p>
          </Card>
        </div>

        {/* Breakdown */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <h2 className="font-display text-4xl mb-8 text-center gradient-text">MONEY DISTRIBUTION</h2>

          <div className="space-y-6">
            {content.moneyDistribution.breakdown.map((item, index) => (
              <Card key={index} className="p-6 bg-card border-white/10 hover:border-pb-pink/50 transition-colors">
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-2xl">{item.category}</h3>
                    <p className="text-2xl font-bold text-pb-pink">${item.amount.toLocaleString()}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>

                {/* Bar Graph */}
                <div className="relative h-12 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-pb-red to-pb-pink flex items-center justify-end pr-4 transition-all duration-1000"
                    style={{
                      width: `${(item.amount / maxAmount) * 100}%`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <span className="text-white font-display text-lg">{item.percentage}%</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
          <Card className="p-8 bg-card border-white/10">
            <h3 className="font-display text-3xl mb-4">EVERY CONTRIBUTION MATTERS</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your participation in Picklebolt directly supports the future of Central High School Tennis. Together,
              we're building a program that gives student athletes the equipment, opportunities, and experiences they
              deserve.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
