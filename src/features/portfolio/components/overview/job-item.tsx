import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import { UTM_PARAMS } from "@/config/site"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type JobItemProps = {
  title: string
  company: string
  website: string
  educationId?: string
  logo?: string
}

export function JobItem({
  title,
  company,
  website,
  educationId,
  logo,
}: JobItemProps) {
  return (
    <IntroItem className="sm:col-span-2">
      <IntroItemIcon>
        {logo ? (
          <Image
            src={logo}
            alt=""
            width={24}
            height={24}
            className="size-4 object-contain"
            unoptimized
          />
        ) : (
          getJobIcon(title)
        )}
      </IntroItemIcon>

      <IntroItemContent>
        {title} <span aria-label="at">@</span>
        <IntroItemLink
          className="ml-0.5 font-medium"
          {...(educationId
            ? {
                href: `#education-${educationId}`,
                target: "_self",
                rel: "",
              }
            : {
                href: addQueryParams(website, UTM_PARAMS),
              })}
        >
          {company}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  )
}

function getJobIcon(title: string) {
  if (/student|bachelor|master|phd/i.test(title)) {
    return <GraduationCapIcon />
  }
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />
  }

  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />
  }

  return <BriefcaseBusinessIcon />
}
