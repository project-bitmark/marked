export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: 'currentcolor'
      }}
      className={className}
    >
      <text
        x="10"
        y="60"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="64"
        fontWeight="700"
        letterSpacing="-2"
      >
        Marked
      </text>
    </svg>
  )
}
