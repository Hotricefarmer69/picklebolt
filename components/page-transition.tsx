"use client"

import type React from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="animate-in fade-in slide-in-from-right-4 duration-300">{children}</div>
}
