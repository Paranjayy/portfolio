import { describe, expect, it } from "vitest"

import { getFieldNote, getFieldNoteTags } from "./field-notes"

describe("Field Notes data", () => {
  it("gets the demo note by slug", () => {
    expect(getFieldNote("field-notes-demo")).toMatchObject({
      status: "evolving",
      isDemo: true,
    })
  })

  it("returns sorted, unique tags", () => {
    expect(getFieldNoteTags()).toEqual(["portfolio", "publishing", "systems"])
  })
})
