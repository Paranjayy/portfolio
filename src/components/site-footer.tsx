import { LICENSE, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { cn } from "@/lib/utils"
import { DmcaIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { getStargazerCount } from "@/components/nav-item-github"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export async function SiteFooter() {
  const xLink = SOCIAL.x
  const githubLink = SOCIAL.github
  const linkedinLink = SOCIAL.linkedin
  const upstreamStars = await getStargazerCount("ncdai/chanhdai.com")

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>

        <dl className="flex flex-col gap-4 py-8 font-mono [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:text-muted-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
          <Item>
            <dt>Crafted by</dt>
            <dd>
              <a
                className="link-underline"
                href={xLink.href}
                target="_blank"
                rel="noopener"
              >
                @{xLink.handle}
              </a>
            </dd>
          </Item>

          <Item>
            <dt>Forked from</dt>
            <dd>
              <a
                className="inline-flex items-center gap-1.5 link-underline"
                href="https://github.com/ncdai/chanhdai.com"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon className="size-3.5" />
                ncdai/chanhdai.com
                {upstreamStars > 0 && (
                  <span className="text-muted-foreground">
                    {new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      compactDisplay: "short",
                    })
                      .format(upstreamStars)
                      .toLowerCase()}
                  </span>
                )}
              </a>
            </dd>
          </Item>

          <Item>
            <dt>Inspired by</dt>
            <dd>
              <ul>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
                <li>Vercel</li>
                <li>Evil Charts</li>
                <li>Devouring Details</li>
                <li>Skiper UI</li>
                <li>Making Software</li>
              </ul>
            </dd>
          </Item>

          <Item>
            <dt>Deployed on</dt>
            <dd>Vercel</dd>
          </Item>

          <Item>
            <dt>Analytics</dt>
            <dd>
              <ul>
                <li>
                  <a
                    className="link-underline"
                    href="https://openpanel.dev?utm_source=paranjay.dev&utm_medium=referral&utm_campaign=footer"
                    target="_blank"
                    rel="noopener"
                  >
                    OpenPanel
                  </a>
                </li>
                <li>Google Analytics</li>
              </ul>
            </dd>
          </Item>

          <Item>
            <dt>Source code</dt>
            <dd>
              <a
                className="link-underline"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </dd>
          </Item>

          <Item>
            <dt>License</dt>
            <dd>
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </dd>
          </Item>
        </dl>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <FooterLink href={xLink.href} label="X Profile">
              <XIcon className="size-4" />
            </FooterLink>
            <Separator />
            <FooterLink href={githubLink.href} label="GitHub Profile">
              <GitHubIcon className="size-4" />
            </FooterLink>
            <Separator />
            <FooterLink href={linkedinLink.href} label="LinkedIn Profile">
              <LinkedInIcon className="size-4" />
            </FooterLink>
            <Separator />
            <FooterLink
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.dmca.com/ProtectionPro.aspx"
              }
              label="DMCA.com Protection Status"
            >
              <DmcaIcon className="h-4.5 w-auto" />
            </FooterLink>
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      className="flex text-muted-foreground transition-[color] hover:text-foreground"
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-2 gap-4", className)} {...props} />
}
