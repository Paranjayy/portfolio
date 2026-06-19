import Link from "next/link"

import { cn } from "@/lib/utils"

interface InlineImageLinkProps {
  href: string
  src: string
  alt: string
  label: string
  className?: string
}

export function InlineImageLink({
  href,
  src,
  alt,
  label,
  className,
}: InlineImageLinkProps) {
  return (
    <Link
      href={href as never}
      className={cn(
        "group relative inline-flex items-center gap-1 font-medium text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground",
        className
      )}
    >
      <span className="relative flex size-5 overflow-hidden rounded-md border border-line align-middle">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </span>
      {label}
    </Link>
  )
}
