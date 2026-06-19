declare global {
  type PageProps<T extends string = string> = {
    params: Promise<Record<string, string>>
    searchParams?: Promise<Record<string, string | string[] | undefined>>
  }
}

export {}
