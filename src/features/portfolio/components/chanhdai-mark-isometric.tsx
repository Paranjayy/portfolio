"use client"

import { ChanhDaiMark } from "@/components/chanhdai-mark"

/**
 * KP pixel logo with subtle isometric transform.
 * Simplified from ncdai's original — keeps the same export name for compatibility.
 */
export function ChanhDaiMarkIsometric() {
  return (
    <div className="flex items-center justify-center" id="js-cover-mark">
      <ChanhDaiMark
        className="h-24 w-auto text-foreground sm:h-32"
        style={{ transform: "perspective(800px) rotateY(-8deg) rotateX(4deg)" }}
      />
    </div>
  )
}
