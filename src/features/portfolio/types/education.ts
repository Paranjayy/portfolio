export type Education = {
  id: string
  school: string
  degree?: string
  fieldOfStudy?: string
  period: {
    start: string
    end?: string
  }
  description?: string
  /** School mark shown beside the institution. */
  logo?: string
  skills?: string[]
  isExpanded?: boolean
}
