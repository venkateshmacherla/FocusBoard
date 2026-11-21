import { Flag } from 'lucide-react'

const ROWS = [
  { level: 'High', color: '#d92d20' },
  { level: 'Medium', color: '#f5a524' },
  { level: 'Low', color: '#3b82f6' },
]

export default function PriorityBreakdown({ tasks }) {
  const counts = ROWS.map((r) => ({ ...r, count: tasks.filter((t) => t.priority === r.level).length }))
  const total = tasks.length
  const pct = (n) => (total === 0 ? 0 : Math.round((n / total) * 100))

  return (
    <section className="panel" aria-labelledby="priority-title">
      <h2 id="priority-title" className="panel__title">
        Priority breakdown
      </h2>

      <ul className="prio-summary">
        {counts.map(({ level, color, count }) => (
          <li key={level}>
            <Flag size={16} style={{ color }} aria-hidden="true" />
            <strong>{count}</strong>
            <span>{level} priority</span>
          </li>
        ))}
      </ul>

      {/* One stacked bar showing the split */}
      <div className="stack" role="img" aria-label={counts.map((c) => `${c.level} ${pct(c.count)} percent`).join(', ')}>
        {counts.map(({ level, color, count }) =>
          count > 0 ? <span key={level} style={{ width: `${pct(count)}%`, background: color }} /> : null,
        )}
      </div>

      {/* Separate progress bars per level */}
      <ul className="bars">
        {counts.map(({ level, color, count }) => (
          <li key={level} className="bar-row">
            <span className="bar-row__label">{level}</span>
            <div
              className="bar"
              role="progressbar"
              aria-label={`${level} priority share`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct(count)}
            >
              <span style={{ width: `${pct(count)}%`, background: color }} />
            </div>
            <span className="bar-row__value">{pct(count)}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
