export default function Icon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: 'currentcolor'
      }}
      className={className}
    >
      {/* Stylized M with checkmark accent */}
      <path d="M15 80 L15 30 L35 55 L50 25 L65 55 L85 30 L85 80 L70 80 L70 55 L50 80 L30 55 L30 80 Z" />
      <path d="M40 15 L50 25 L75 0 L80 5 L50 35 L35 20 Z" opacity="0.7" />
    </svg>
  )
}
