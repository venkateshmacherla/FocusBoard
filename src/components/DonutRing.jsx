/**
 * Small progress ring drawn with two SVG circles.
 * The coloured arc length comes from stroke-dasharray (percent of the circle).
 */
export default function DonutRing({ percent, color, size = 56, stroke = 7, label }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const filled = (Math.min(Math.max(percent, 0), 100) / 100) * c
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={label}
      className="ring"
    >
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e9e7f5" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${filled} ${c - filled}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="ring__arc"
      />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="ring__text" aria-hidden="true">
        {percent}%
      </text>
    </svg>
  )
}
