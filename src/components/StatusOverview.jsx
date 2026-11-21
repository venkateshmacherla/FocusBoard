import DonutRing from './DonutRing.jsx'

const ROWS = [
  { key: 'todo', label: 'To Do', color: '#5b3fe0' },
  { key: 'inProgress', label: 'In Progress', color: '#b04fd8' },
  { key: 'completed', label: 'Completed', color: '#e0661a' },
]

export default function StatusOverview({ stats }) {
  const pct = (n) => (stats.total === 0 ? 0 : Math.round((n / stats.total) * 100))
  return (
    <section className="panel" aria-labelledby="status-title">
      <h2 id="status-title" className="panel__title">
        Status overview
      </h2>
      <ul className="status-list">
        {ROWS.map(({ key, label, color }) => (
          <li key={key} className="status-row">
            <span className="status-row__swatch" style={{ background: color }} aria-hidden="true" />
            <div className="status-row__text">
              <strong>{label}</strong>
              <span>{stats[key]} {stats[key] === 1 ? 'task' : 'tasks'}</span>
            </div>
            <DonutRing percent={pct(stats[key])} color={color} label={`${label}: ${pct(stats[key])} percent`} />
          </li>
        ))}
      </ul>
    </section>
  )
}
