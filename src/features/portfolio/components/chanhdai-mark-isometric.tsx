"use client"

import { useId } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type Props = { className?: string }

/**
 * The profile cover keeps the upstream wireframe composition, but the mark is
 * Paranjay's KP rather than the original CD artwork.
 */
export function ChanhDaiMarkIsometric({ className }: Props) {
  const id = useId()
  const patternId = `kp-hatch-${id}`

  return (
    <motion.svg
      viewBox="0 0 556 354"
      className={cn(
        "h-auto w-full touch-manipulation overflow-visible",
        "[--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))]",
        "[--stroke:color-mix(in_oklab,var(--foreground)_24%,var(--background))]",
        className
      )}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <pattern
          id={patternId}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path d="M-1 1l2-2M0 10l10-10M9 11l2-2" stroke="var(--pattern)" />
        </pattern>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477 756 1255-243M977 789-755-211M1144 693-588-307" />
      </g>

      <g stroke="var(--stroke)" strokeWidth="1">
        <path d="m64 211 111-64 111 64-111 64zM175 275v32l111-64v-32M64 211v32l111 64" />
        <path d="m286 115 111-64 111 64-111 64zM397 179v32l111-64v-32M286 115v32l111 64" />
      </g>

      <motion.g
        whileTap={{ y: 12 }}
        transition={{ type: "spring", stiffness: 240, damping: 20 }}
        transform="translate(139 85) skewY(-10)"
      >
        <g fill="url(#kp-hatch)" stroke="var(--stroke)" strokeWidth="1">
          <path d="M0 0h32v48h16V32h16V16h16V0h32v32H96v16H80v16h16v16h16v32H80v-16H64V96H48V80H32v48H0z" />
          <path
            d="M128 0h96v16h16v16h16v48h-16v16h-80v32h-32zM160 32v32h64V32z"
            fillRule="evenodd"
          />
        </g>
        <g fill="var(--background)" opacity="0.86">
          <path d="M160 32v32h64V32z" />
        </g>
      </motion.g>
    </motion.svg>
  )
}
