"use client"

import { useEffect, useRef, useState } from "react"

type StatConfig = {
  label: string
  target: number
  finalValue: string
  format: (value: number) => string
}

const STATS: StatConfig[] = [
  {
    label: "Indian Companies",
    target: 500,
    finalValue: "500+",
    format: (value) => `${Math.max(0, Math.round(value)).toLocaleString("en-IN")}+`,
  },
  {
    label: "Employees Managed",
    target: 100000,
    finalValue: "1,00,000+",
    format: (value) => `${Math.max(0, Math.round(value)).toLocaleString("en-IN")}+`,
  },
  {
    label: "States PT Coverage",
    target: 19,
    finalValue: "19",
    format: (value) => `${Math.max(0, Math.round(value))}`,
  },
  {
    label: "Compliance Score",
    target: 98.7,
    finalValue: "98.7%",
    format: (value) => `${Math.max(0, value).toFixed(1)}%`,
  },
]

const TOTAL_ANIMATION_MS = 2300
const SHUFFLE_MS = 750

export default function StatsCounterBar() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [displayValues, setDisplayValues] = useState<string[]>(() =>
    STATS.map(() => "0")
  )

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted || hasFinished) return

    let frameId = 0
    const startAt = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startAt

      if (elapsed < SHUFFLE_MS) {
        // Quick random shuffle to grab attention before counting settles.
        setDisplayValues(
          STATS.map((stat) => {
            const shuffled = Math.random() * stat.target
            return stat.format(shuffled)
          })
        )
      } else {
        const progress = Math.min(
          (elapsed - SHUFFLE_MS) / (TOTAL_ANIMATION_MS - SHUFFLE_MS),
          1
        )
        const eased = 1 - Math.pow(1 - progress, 3)

        setDisplayValues(
          STATS.map((stat) => {
            const value = stat.target * eased
            return stat.format(value)
          })
        )
      }

      if (elapsed < TOTAL_ANIMATION_MS) {
        frameId = requestAnimationFrame(tick)
      } else {
        setDisplayValues(STATS.map((stat) => stat.finalValue))
        setHasFinished(true)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [hasFinished, hasStarted])

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "64px 0",
        background: "linear-gradient(135deg, #F0FDF4, #DCFCE7, #BBF7D0, #E0F2FE)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={stat.label}>
              <p
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 800,
                  color: hasStarted && !hasFinished ? "#0F172A" : "#1E293B",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  textShadow:
                    hasStarted && !hasFinished
                      ? "0 6px 18px rgba(30,41,59,0.08)"
                      : "none",
                  transition: "color 200ms ease, text-shadow 200ms ease",
                }}
              >
                {displayValues[index]}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748B",
                  marginTop: "8px",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


