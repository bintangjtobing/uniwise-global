import { Link } from 'react-router-dom'
import useScrollAnimation from '../components/useScrollAnimation'
import CTABanner from '../components/CTABanner'
import SEO, { breadcrumbSchema } from '../components/SEO'

function FadeUp({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div className={`fade-up ${className}`} ref={ref}>{children}</div>
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Uniwise Global Solutions - Business Support Company Malaysia"
        description="Uniwise Global Solutions Sdn. Bhd. builds and manages dedicated customer service teams for businesses in Malaysia. Learn about our story, business scope (MSIC 82110, 8299, 6209), approach, and company values."
        keywords="about Uniwise Global Solutions, business support company Malaysia, customer service outsourcing company, BPO company Kuala Lumpur, call center company Malaysia, office administration services, MSIC 82110, MSIC 8299, MSIC 6209, dedicated customer service teams"
        path="/about"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About Us' },
        ])}
      />

      {/* HERO */}
      <section className="hero hero--page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" title="Home">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <h1>About Uniwise Global Solutions</h1>
          <p>We build and manage customer service teams for businesses that want better customer experience without the cost of building support infrastructure from scratch.</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="two-col">
              <div className="two-col__text">
                <span className="section-label">Our Story</span>
                <h2>How Uniwise Global Solutions Started</h2>
                <p>Uniwise Global Solutions Sdn. Bhd. was established in Malaysia with one clear purpose: help businesses deliver excellent customer service without overspending on internal support teams.</p>
                <p>We observed that many growing companies face the same challenge. As their customer base expands, support quality drops because they cannot hire and train agents fast enough. Outsourcing to traditional call centers often means losing control over quality and brand consistency.</p>
                <p>We built Uniwise to solve this problem. We recruit, train, and manage dedicated customer service teams that work exclusively for your business. Your customers never know they are talking to an external team because our agents represent your brand, not ours.</p>
              </div>
              <div className="two-col__image">
                <span>Company Story Photo (720 x 540)</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BUSINESS SCOPE */}
      <section className="section section--bg">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Business Scope</span>
            <h2>Our Registered Business Activities</h2>
            <p>Three service pillars officially registered under Uniwise Global Solutions Sdn. Bhd.</p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid--3">
              <article className="card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <h3>Customer Service Center Operations</h3>
                <p><strong>MSIC 82110</strong> - Combined Office Administrative Service Activities</p>
                <p>We run full-service customer support centers covering inbound calls, outbound calls, live chat, email handling, and social media support.</p>
              </article>
              <article className="card">
                <div className="card__icon card__icon--accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Business Support Services</h3>
                <p><strong>MSIC 8299</strong> - Other Business Support Service Activities</p>
                <p>We provide office administration, data management, document processing, and back-office operations that keep your business running smoothly.</p>
              </article>
              <article className="card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <h3>IT Service Activities</h3>
                <p><strong>MSIC 6209</strong> - Other Information Technology Service Activities</p>
                <p>We deliver help desk support, technical troubleshooting, system monitoring, and IT service management for businesses of all sizes.</p>
              </article>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2>How We Work with Your Business</h2>
            <p>A three-step process that ensures you get a support team that truly understands your business.</p>
          </FadeUp>
          <FadeUp>
            <div className="steps">
              <div className="step">
                <h3>We Assess Your Needs</h3>
                <p>We review your current customer service setup, identify gaps, and map out exactly what support you need. No assumptions. We work based on your actual data and business conditions.</p>
              </div>
              <div className="step">
                <h3>We Build Your Team</h3>
                <p>We recruit and train agents specifically for your business. They learn your products, your tone of voice, and your workflows. By the time they start serving your customers, they are fully prepared.</p>
              </div>
              <div className="step">
                <h3>We Manage and Optimize</h3>
                <p>We monitor performance daily, provide regular reports, and continuously improve response times and satisfaction scores. You receive consistent updates with clear data.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--bg">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Our Values</span>
            <h2>What Drives Uniwise Global Solutions</h2>
          </FadeUp>
          <FadeUp>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Accountability</h3>
                <p>We take full ownership of every customer interaction. When your customers have a problem, our team treats it as their own problem to solve.</p>
              </div>
              <div className="value-card">
                <div className="value-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3>Transparency</h3>
                <p>You get full visibility into our operations. Real-time dashboards, weekly reports, and direct access to your account manager. We do not hide any information from you.</p>
              </div>
              <div className="value-card">
                <div className="value-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <h3>Adaptability</h3>
                <p>Business needs change. We adjust your support team size based on your actual demand. No long-term lock-ins. You can scale up or scale down at any time.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Want to Learn More About Uniwise?"
        description="Contact us to discuss your business needs. We are ready to explain how our team can support your customer service operations."
        primaryText="Contact Us"
        primaryLink="/contact"
        secondaryText="View Services"
        secondaryLink="/services"
      />
    </>
  )
}
