"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

/**
 * KP pixel mark with isometric 3D block styling.
 * Inspired by ncdai's original ChanhDaiMarkIsometric but using the KP logo.
 */
export function ChanhDaiMarkIsometric({ className }: Props) {
  return (
    <div
      id="js-cover-mark"
      className={cn(
        "relative flex items-center justify-center",
        "h-48 w-full overflow-hidden",
        className
      )}
    >
      <motion.svg
        viewBox="0 0 256 128"
        className="h-32 w-auto text-foreground"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          transform: "perspective(800px) rotateY(-12deg) rotateX(8deg)",
          transformStyle: "preserve-3d",
        }}
        aria-hidden
      >
        {/* Bottom layer (shadow/3D depth) */}
        <g
          fill="currentColor"
          opacity="0.15"
          style={{ transform: "translate(4px, 4px)" }}
        >
          <path d="M0 0H32V48H48V32H64V16H80V0H112V32H96V48H80V64H96V80H112V128H80V112H64V96H48V80H32V128H0V0Z" />
          <path d="M128 0H224V16H240V32H256V80H240V96H224V112H160V128H128V0ZM160 32V80H224V32H160Z" />
        </g>
        {/* Top layer (foreground) */}
        <g fill="currentColor">
          <path d="M0 0H32V48H48V32H64V16H80V0H112V32H96V48H80V64H96V80H112V128H80V112H64V96H48V80H32V128H0V0Z" />
          <path d="M128 0H224V16H240V32H256V80H240V96H224V112H160V128H128V0ZM160 32V80H224V32H160Z" fillRule="evenodd" />
        </g>
      </motion.svg>
    </div>
  )
}
