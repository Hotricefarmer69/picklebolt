"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"
import { useState } from "react"
import content from "../_content/picklebolt.json"
import { PlaceholderImage } from "@/components/placeholder-image"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder action - organizer will wire this up
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="font-display text-5xl md:text-7xl gradient-text mb-4">GET IN TOUCH</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about Picklebolt? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="p-6 bg-card border-white/10 text-center h-full">
              <Mail className="text-pb-pink mx-auto mb-3" size={32} />
              <h3 className="font-display text-lg mb-2">EMAIL</h3>
              <a
                href={`mailto:${content.contact.email}`}
                className="text-sm text-muted-foreground hover:text-pb-pink transition-colors"
              >
                {content.contact.email}
              </a>
            </Card>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <Card className="p-6 bg-card border-white/10 text-center h-full">
              <Phone className="text-pb-pink mx-auto mb-3" size={32} />
              <h3 className="font-display text-lg mb-2">PHONE</h3>
              <a
                href={`tel:${content.contact.phone}`}
                className="text-sm text-muted-foreground hover:text-pb-pink transition-colors"
              >
                {content.contact.phone}
              </a>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 mb-16">
          <Card className="p-8 bg-card border-white/10">
            <h2 className="font-display text-3xl mb-6 text-center">SEND US A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted border-white/10 focus:border-pb-pink"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-white/10 focus:border-pb-pink"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-white/10 focus:border-pb-pink min-h-[150px]"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-pb-red to-pb-pink text-white font-display text-xl py-6 lightning-glow hover:scale-105 transition-transform"
              >
                SEND MESSAGE
              </Button>
            </form>
          </Card>
        </div>

        {/* Founder Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl gradient-text mb-2">MEET THE FOUNDER</h2>
            <p className="text-xl text-muted-foreground">{content.founder.name}</p>
          </div>

          <Card className="p-8 bg-card border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1 flex flex-col items-center">
                {content.founder.photo.startsWith("[DROP") ? (
                  <PlaceholderImage token="PETR_PHOTO" aspectRatio="3/4" />
                ) : (
                  <img
                    src={content.founder.photo || "/placeholder.svg"}
                    alt={content.founder.name}
                    className="w-full rounded-lg aspect-[3/4] object-cover mb-4"
                  />
                )}
                {content.founder.instagram.startsWith("[DROP") ? (
                  <PlaceholderImage token="PETR_INSTAGRAM" aspectRatio="16/9" />
                ) : (
                  <Link
                    href={content.founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pb-pink hover:text-pb-red transition-colors"
                  >
                    <Instagram size={24} />
                    <span className="font-medium">Follow on Instagram</span>
                  </Link>
                )}
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="font-display text-2xl mb-3 text-pb-pink">My Reason</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.founder.myReason}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl mb-3 text-pb-pink">Who am I?</h3>
                  <p className="text-muted-foreground leading-relaxed">{content.founder.whoAmI}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
