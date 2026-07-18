import { BlocksIcon, ComponentIcon, SparklesIcon } from "lucide-react"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const experiments = [
  {
    title: "Component experiments",
    detail: "Small reusable interactions",
    icon: ComponentIcon,
  },
  {
    title: "Block sketches",
    detail: "One-off page compositions",
    icon: BlocksIcon,
  },
  {
    title: "Ideas in motion",
    detail: "Prototypes before products",
    icon: SparklesIcon,
  },
]

export function PortfolioLab() {
  return (
    <Panel id="lab">
      <PanelHeader>
        <PanelTitle>Lab</PanelTitle>
      </PanelHeader>
      <PanelContent className="grid gap-px p-0 sm:grid-cols-3">
        {experiments.map(({ title, detail, icon: Icon }) => (
          <div
            key={title}
            className="flex gap-3 border-b border-line p-4 last:border-b-0 sm:border-r sm:last:border-r-0 sm:last:border-b"
          >
            <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="text-sm font-medium">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  )
}
