export default function StatCard({ title, value, icon: Icon, tone = 'neutral', caption, children }) {
  return (
    <article className={`stat stat--${tone}`}>
      <div className="stat__top">
        <h3>{title}</h3>
        <span className="stat__icon" aria-hidden="true">
          <Icon size={18} />
        </span>
      </div>
      <p className="stat__value">{value}</p>
      {caption && <p className="stat__caption">{caption}</p>}
      {children}
    </article>
  )
}
