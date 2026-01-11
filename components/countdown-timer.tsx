"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-06-19T00:00:00-06:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center">
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HRS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEC" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-[#8B1A1A] text-white text-3xl md:text-5xl font-bold rounded-lg px-4 md:px-6 py-3 md:py-4 min-w-[80px] md:min-w-[100px] text-center border border-[#D4AF37]">
            {item.value}
          </div>
          <span className="text-gray-400 text-sm mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
