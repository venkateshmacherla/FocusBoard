export default function StatCard({ title, value, caption, icon: Icon, tone }) {
  return (
    <article className={`statcard statcard--${tone}`}>
      <div className="statcard__head">
        <span className="statcard__icon" aria-hidden="true">
          <Icon size={18} />
        </span>
        <h3>{title}</h3>
      </div>
      <p className="statcard__row">
        <span className="statcard__value">{value}</span>
        <span className="statcard__caption">{caption}</span>
      </p>
    </article>
  );
}
