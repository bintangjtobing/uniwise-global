import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../components/useScrollAnimation'
import CTABanner from '../components/CTABanner'
import SEO, { localBusinessSchema, breadcrumbSchema } from '../components/SEO'

function FadeUp({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div className={`fade-up ${className}`} ref={ref}>{children}</div>
}

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      e.target.reset()
      setTimeout(() => setSent(false), 3000)
    }, 1000)
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema,
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact Us' },
      ]),
    ],
  }

  return (
    <>
      <SEO
        title="Contact Us | Uniwise Global Solutions - Customer Service Center Malaysia"
        description="Contact Uniwise Global Solutions Sdn. Bhd. for customer service center solutions, administrative support, and IT services in Malaysia. Free consultation available. Email: leebinglin2@gmail.com. Based in Kuala Lumpur."
        keywords="contact Uniwise Global Solutions, customer service consultation Malaysia, business support inquiry, call center solutions contact, BPO Malaysia contact, customer service outsourcing quote, free consultation business support, Kuala Lumpur business services"
        path="/contact"
        schema={contactSchema}
      />

      {/* HERO */}
      <section className="hero hero--page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" title="Home">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
          <h1>Let Us Talk About Your Business Needs</h1>
          <p>Whether you need a full customer service team or want to explore how our services can help, we are ready to discuss. No pressure, no obligations.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="contact-grid">
              {/* Form */}
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name" title="Your first name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name" title="Your last name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" required placeholder="name@company.com" title="Your business email address" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="+60 12-345 6789" title="Your phone number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Your company name" title="Your company or organization name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service You Are Interested In</label>
                    <select id="service" name="service" title="Select the service you are interested in">
                      <option value="">Select a service</option>
                      <option value="customer-service">Customer Service Center</option>
                      <option value="admin-support">Office Administrative Support</option>
                      <option value="it-support">IT Service &amp; Technical Support</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required placeholder="Tell us about your business needs. How many customers do you serve? What support channels do you need?" title="Describe your business needs and requirements"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    style={{ width: '100%', backgroundColor: sent ? '#059669' : undefined }}
                    disabled={sending}
                    title="Submit your inquiry to Uniwise Global Solutions"
                  >
                    {sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="contact-info">
                <div>
                  <h3 style={{ marginBottom: 'var(--space-6)' }}>Contact Information</h3>
                  <p className="text-light">You can reach us through the form on the left, or directly through the channels below.</p>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div className="contact-info__text">
                    <h4>Email</h4>
                    <p><a href="mailto:leebinglin2@gmail.com" title="Email Uniwise Global Solutions for business inquiries">leebinglin2@gmail.com</a></p>
                    <p>We reply to emails within 1 business day.</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="contact-info__text">
                    <h4>Office Address</h4>
                    <p>Kuala Lumpur, Malaysia</p>
                    <p>[Full address to be added]</p>
                  </div>
                </div>

                <div className="contact-hours">
                  <h4>Operating Hours</h4>
                  <table>
                    <tbody>
                      <tr><td>Monday to Friday</td><td>9:00 AM to 6:00 PM</td></tr>
                      <tr><td>Saturday</td><td>9:00 AM to 1:00 PM</td></tr>
                      <tr><td>Sunday &amp; Public Holidays</td><td>Closed</td></tr>
                      <tr><td>Customer Service Center</td><td>24/7 (for active clients)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MAP */}
      <section className="section section--sm section--bg">
        <div className="container">
          <FadeUp>
            <div className="map-placeholder">
              <span>Google Maps Embed Placeholder</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Fast Response for Every Inquiry"
        description="Our team will get back to you within 1 business day after receiving your message. We are ready to discuss your specific business needs."
        primaryText="Email Directly"
        primaryLink="/contact"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  )
}
