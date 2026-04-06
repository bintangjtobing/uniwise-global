import { Link } from 'react-router-dom'
import useScrollAnimation from './useScrollAnimation'

export default function CTABanner({ title, description, primaryText, primaryLink, secondaryText, secondaryLink }) {
  const ref = useScrollAnimation()
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner fade-up" ref={ref}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="btn-group">
            <Link to={primaryLink} className="btn btn--white btn--lg" title={primaryText}>{primaryText}</Link>
            {secondaryText && (
              secondaryLink.startsWith('mailto:') || secondaryLink.startsWith('tel:')
                ? <a href={secondaryLink} className="btn btn--outline-white btn--lg" title={secondaryText}>{secondaryText}</a>
                : <Link to={secondaryLink} className="btn btn--outline-white btn--lg" title={secondaryText}>{secondaryText}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
