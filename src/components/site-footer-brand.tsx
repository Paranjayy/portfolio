"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

const VIEWBOX_WIDTH = 3200
const DEFAULT_GRADIENT_X = 1600

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="group/footer-text container size-full"
            viewBox="0 0 3200 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="100%"
              textAnchor="middle"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="1"
              fill="url(#paint0_linear_1145_73)"
              className="font-black transition-all duration-700"
              filter="drop-shadow(0 0 1px currentColor)"
              style={{
                fontSize: "260px",
                letterSpacing: "-0.05em",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fillOpacity: 0,
              }}
            >
              Paranjay Khachar
            </text>
            <text
              x="50%"
              y="100%"
              textAnchor="middle"
              fill="url(#paint0_linear_1145_73)"
              className="pointer-events-none font-black opacity-0 transition-opacity duration-700 group-hover/footer-text:opacity-100"
              style={{
                fontSize: "260px",
                letterSpacing: "-0.05em",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
              }}
            >
              Paranjay Khachar
            </text>
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="1600"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stopColor="var(--foreground)"
                  stopOpacity="0.2"
                />
                <stop offset="0.5" stopColor="var(--foreground)" />
                <stop
                  offset="1"
                  stopColor="var(--foreground)"
                  stopOpacity="0.2"
                />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
