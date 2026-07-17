/**
 * KP pixel logo — uses currentColor so it inherits CSS color.
 * Dark mode: white on dark bg. Light mode: black on light bg.
 */
export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 128"
      fill="none"
      aria-hidden
      {...props}
    >
      <g fill="currentColor">
        {/* K */}
        <path d="M0 0H32V48H48V32H64V16H80V0H112V32H96V48H80V64H96V80H112V128H80V112H64V96H48V80H32V128H0V0Z" />
        {/* P */}
        <path
          d="M128 0H224V16H240V32H256V80H240V96H224V112H160V128H128V0ZM160 32V80H224V32H160Z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 128" fill="none"><g fill="currentColor"><path d="M0 0H32V48H48V32H64V16H80V0H112V32H96V48H80V64H96V80H112V128H80V112H64V96H48V80H32V128H0V0Z"/><path d="M128 0H224V16H240V32H256V80H240V96H224V112H160V128H128V0ZM160 32V80H224V32H160Z" fill-rule="evenodd"/></g></svg>`
}
