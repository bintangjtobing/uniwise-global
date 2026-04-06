export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}
