"use client"

import { useState } from "react"
import { ActivityIcon, RotateCwIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"

const STATES = [
  { label: "Listening", detail: "Waiting for the next useful signal." },
  { label: "Making", detail: "A small idea is taking shape." },
  { label: "Shipping", detail: "The experiment has a public home." },
] as const

/** An original, tiny interactive preview used by the personal WIP library. */
export function LabSignalBlock() {
  const [index, setIndex] = useState(0)
  const state = STATES[index]

  return (
    <div className="overflow-hidden border border-line bg-background">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        <span>Signal switch / preview</span>
        <ActivityIcon className="size-4" aria-hidden="true" />
      </div>
      <div className="grid sm:grid-cols-[1fr_auto]">
        <div className="p-5">
          <p className="font-mono text-xs text-muted-foreground uppercase">
            State {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-3 text-3xl font-medium tracking-tight">
            {state.label}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{state.detail}</p>
          <div className="mt-6 flex h-1.5 gap-1" aria-hidden="true">
            {STATES.map((_, stateIndex) => (
              <span
                key={stateIndex}
                className={`flex-1 transition-colors ${stateIndex <= index ? "bg-foreground" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-end border-t border-line p-4 sm:border-t-0 sm:border-l">
          <Button
            variant="outline"
            className="gap-2 font-mono text-xs uppercase"
            onClick={() => setIndex((current) => (current + 1) % STATES.length)}
          >
            <RotateCwIcon className="size-3.5" />
            Cycle signal
          </Button>
        </div>
      </div>
    </div>
  )
}
