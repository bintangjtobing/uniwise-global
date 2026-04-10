import { Link } from 'react-router-dom'
import useScrollAnimation from '../components/useScrollAnimation'
import CTABanner from '../components/CTABanner'
import SEO, { organizationSchema } from '../components/SEO'

function FadeUp({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div className={`fade-up ${className}`} ref={ref}>{children}</div>
}

export default function Home() {
  return (
    <>
      <SEO
        title="Uniwise Global Solutions | Customer Service Center & Business Support Malaysia"
        description="Uniwise Global Solutions Sdn. Bhd. provides dedicated customer service center operations, office administrative support, and IT service solutions for businesses in Malaysia. Trained agents, scalable teams, full transparency."
        keywords="customer service center Malaysia, business support services, office administration outsourcing, IT service management, call center solutions Malaysia, customer support outsourcing, BPO Malaysia, help desk outsourcing, back office support, business process outsourcing Kuala Lumpur, customer experience management, Uniwise Global Solutions"
        path="/"
        schema={organizationSchema}
      />

      {/* HERO */}
      <section className="hero hero--home">
        <div className="container">
          <div className="hero__content fade-up visible">
            <div className="hero__badge">
              <span className="dot"></span>
              Customer Service Center in Malaysia
            </div>
            <h1>Customer Service That Keeps Your Customers Coming Back</h1>
            <p>Uniwise Global Solutions provides trained customer service teams that handle your customer interactions with care and precision. You focus on growing your business. We take care of your customers.</p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn--white btn--lg" title="Talk to Uniwise about customer service solutions">Talk to Our Team</Link>
              <Link to="/services" className="btn btn--outline-white btn--lg" title="View all Uniwise customer service and business support services">View Our Services</Link>
            </div>
          </div>
        </div>
        <div className="hero__wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="var(--color-white)" />
          </svg>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="two-col">
              <div className="two-col__text">
                <span className="section-label">About Us</span>
                <h2>Uniwise Global Solutions Sdn. Bhd.</h2>
                <p>We are a Malaysia-based business support company that specializes in customer service center operations. Our team manages customer calls, inquiries, complaints, and administrative tasks so your internal team can focus on what matters most: building your product and scaling your business.</p>
                <p>Whether you run an e-commerce store processing hundreds of daily orders or a technology company with a growing user base, we provide the support infrastructure you need without the overhead of building it yourself.</p>
                <Link to="/about" className="btn btn--secondary" title="Learn more about Uniwise Global Solutions company background">About Our Company</Link>
              </div>
              <div className="two-col__image">
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/company-photo.png`}
                  alt="Uniwise Global Solutions team collaborating"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--bg">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Our Services</span>
            <h2>What We Do for Your Business</h2>
            <p>Three core service areas designed to handle operational work so you can stay focused on business growth.</p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid--3">
              <article className="card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <h3>Customer Service Center</h3>
                <p>We operate dedicated customer service teams that handle inbound calls, live chat, email support, and complaint resolution for your business. Our agents train specifically on your products and brand guidelines.</p>
                <Link to="/services#customer-service" className="card__link" title="Learn more about customer service center operations">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </article>

              <article className="card">
                <div className="card__icon card__icon--accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Office Administrative Support</h3>
                <p>From data entry and document processing to scheduling and records management, we handle the administrative workload that slows your team down. You get organized operations without hiring additional back-office staff.</p>
                <Link to="/services#admin-support" className="card__link" title="Learn more about office administrative support services">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </article>

              <article className="card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <h3>IT Service &amp; Technical Support</h3>
                <p>We provide help desk support, technical troubleshooting, and IT service management for businesses that need reliable tech support without maintaining a full in-house IT department.</p>
                <Link to="/services#it-support" className="card__link" title="Learn more about IT service and technical support solutions">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </article>
            </div>
          </FadeUp>
          <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/services" className="btn btn--primary" title="View all customer service and business support services">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Our Advantages</span>
            <h2>Why Businesses Choose Uniwise</h2>
          </FadeUp>
          <FadeUp>
            <div className="grid grid--3">
              <article className="card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h3>Trained Customer Service Teams, Not Generic Scripts</h3>
                <p>Every agent we assign to your account goes through product-specific training. They learn your brand voice, your FAQ patterns, and your escalation procedures. This is not a generic call center service.</p>
              </article>

              <article className="card">
                <div className="card__icon card__icon--accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <h3>Scale Up or Down Without Fixed Costs</h3>
                <p>Need 5 agents during normal months and 20 during peak season? We adjust your team size based on your actual volume. You pay for what you use, not for idle seats.</p>
              </article>

              <article className="card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3>Full Operational Transparency</h3>
                <p>You get real-time dashboards showing call volumes, resolution rates, response times, and customer satisfaction scores. No black box operations. You see exactly how your customers are being served.</p>
              </article>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--bg">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Client Testimonials</span>
            <h2>What Our Clients Say About Uniwise</h2>
          </FadeUp>
          <FadeUp>
            <div className="testimonial-grid">
              {[
                { quote: '"Since partnering with Uniwise, our customer complaint resolution time dropped from 48 hours to under 6 hours. Their team handles our after-sales support as if they were our own employees."', name: 'Rizal M.', initials: 'RM', role: 'Operations Manager, E-commerce Company' },
                { quote: '"We needed a flexible support team that could scale during our product launches. Uniwise provided 15 trained agents within two weeks and scaled back after the campaign ended. No long-term contracts, no wasted budget."', name: 'Sarah A.', initials: 'SA', role: 'Head of Customer Experience, SaaS Platform' },
                { quote: '"The administrative support from Uniwise saved us from hiring three full-time back-office staff. They process our daily orders, manage our scheduling, and handle all the paperwork we used to struggle with."', name: 'David K.', initials: 'DK', role: 'Founder, Logistics Startup' },
              ].map((t, i) => (
                <div className="testimonial" key={i}>
                  <div className="testimonial__stars" aria-label="5 star rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p className="testimonial__quote">{t.quote}</p>
                  <div className="testimonial__author">
                    <div className="testimonial__avatar" aria-hidden="true">{t.initials}</div>
                    <div>
                      <div className="testimonial__name">{t.name}</div>
                      <div className="testimonial__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Upgrade Your Customer Service?"
        description="Talk to our team today. We will assess your current support needs and show you exactly how Uniwise can help your business."
        primaryText="Schedule a Consultation"
        primaryLink="/contact"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  )
}
