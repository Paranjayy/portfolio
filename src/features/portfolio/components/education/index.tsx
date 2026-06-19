import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import { InfinityIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education } from "@/features/portfolio/types/education"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATION.map((item) => (
          <EducationItem key={item.id} education={item} />
        ))}
      </div>
    </Panel>
  )
}

function EducationItem({ education }: { education: Education }) {
  const isOngoing = education.endYear === "Present"

  return (
    <div
      id={`education-${education.id}`}
      className="group/education screen-line-bottom scroll-mt-14 space-y-4 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-5">
          {education.schoolLogo ? (
            <Image
              src={education.schoolLogo}
              alt={`${education.schoolName} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full grayscale transition-[filter] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover/education:grayscale-0"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-semibold">
          {education.schoolWebsite ? (
            <a
              className="link"
              href={addQueryParams(education.schoolWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              {education.schoolName}
            </a>
          ) : (
            education.schoolName
          )}
        </h3>

        {education.isCurrent && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Student</span>
          </span>
        )}
      </div>

      <dl className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
        <div>
          <dt className="sr-only">Degree</dt>
          <dd>{education.degree}</dd>
        </div>

        <span className="font-mono">|</span>

        <div>
          <dt className="sr-only">Field of Study</dt>
          <dd>{education.fieldOfStudy}</dd>
        </div>

        <span className="font-mono">|</span>

        <div>
          <dt className="sr-only">Period</dt>
          <dd className="flex items-center gap-0.5 tabular-nums">
            <span>{education.startYear}</span>
            <span className="font-mono">—</span>
            {isOngoing ? (
              <InfinityIcon
                className="size-4.5 translate-y-[0.5px]"
                aria-label="Present"
              />
            ) : (
              <span>{education.endYear}</span>
            )}
          </dd>
        </div>
      </dl>

      {education.description && (
        <Prose className="pt-2 pl-9 text-sm text-muted-foreground">
          {education.description}
        </Prose>
      )}

      {Array.isArray(education.skills) && education.skills.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
          {education.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
