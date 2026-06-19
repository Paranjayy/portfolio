"use client"

import { useHotkeys } from "react-hotkeys-hook"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/base/ui/dialog"
// Note: base-ui Dialog.Root accepts open + onOpenChange for controlled state
import { Kbd, KbdGroup } from "@/components/ui/kbd"

type ShortcutGroup = {
  title: string
  shortcuts: { keys: string[]; description: string }[]
}

const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    title: "Navigation",
    shortcuts: [
      { keys: ["G", "H"], description: "Go to Home" },
      { keys: ["G", "B"], description: "Go to Blocks" },
      { keys: ["G", "C"], description: "Go to Components" },
      { keys: ["G", "L"], description: "Go to Blog" },
      { keys: ["G", "S"], description: "Go to Sponsors" },
      { keys: ["G", "T"], description: "Go to Testimonials" },
      { keys: ["G", "G"], description: "Go to Gallery" },
      { keys: ["G", "O"], description: "Go to Socials" },
    ],
  },
  {
    title: "General",
    shortcuts: [
      { keys: ["⌘", "K"], description: "Open command menu" },
      { keys: ["?"], description: "Show keyboard shortcuts" },
    ],
  },
]

export function KeyboardShortcutsHelp() {
  const [open, setOpen] = useState(false)

  useHotkeys("?", () => setOpen((prev) => !prev), {
    // Only trigger when not focused in an input/textarea
    enableOnFormTags: false,
    preventDefault: true,
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base">
            Keyboard Shortcuts
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-1">
          {SHORTCUT_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.shortcuts.map(({ keys, description }) => (
                  <div
                    key={keys.join("-")}
                    className="flex items-center justify-between gap-4 rounded-sm px-2 py-1.5 hover:bg-accent"
                  >
                    <span className="text-sm text-muted-foreground">
                      {description}
                    </span>
                    <KbdGroup>
                      {keys.map((key) => (
                        <Kbd key={key}>{key}</Kbd>
                      ))}
                    </KbdGroup>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 border-t border-line pt-3 text-center text-xs text-muted-foreground/50">
          Press{" "}
          <kbd className="inline-flex h-4 items-center rounded border border-line bg-muted px-1 font-mono text-[10px]">
            Esc
          </kbd>{" "}
          to close
        </div>
      </DialogContent>
    </Dialog>
  )
}
