/** @jsxImportSource theme-ui */

export default function Flex({children, direction, gap}) {
  return <div sx={{
    display: 'flex',
    flexDirection: direction,
    gap: gap
  }}>
    { children }
  </div>
}