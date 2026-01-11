"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CounterAnimation({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible, mounted])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {prefix}0{suffix}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
