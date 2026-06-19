declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type PageProps<_T extends string = string> = {
    params: Promise<Record<string, string>>
    searchParams?: Promise<Record<string, string | string[] | undefined>>
  }
}

export {}
