import { Link } from 'react-router-dom'
import useScrollAnimation from '../components/useScrollAnimation'
import FeatureCard from '../components/FeatureCard'
import CTABanner from '../components/CTABanner'
import SEO, { serviceSchema, breadcrumbSchema } from '../components/SEO'

function FadeUp({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div className={`fade-up ${className}`} ref={ref}>{children}</div>
}

/* SVG Icon components for 3D feature cards */
const icons = {
  phoneIn: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  phoneOut: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/><polyline points="15 3 21 3 21 9"/><line x1="14" y1="10" x2="21" y2="3"/></svg>,
  chat: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  mail: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  box: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  database: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  file: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  calendar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  archive: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>,
  barChart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  headphones: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
  wrench: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  monitor: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  settings: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  user: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  laptop: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
}

export default function Services() {
  const servicesSchemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema('Customer Service Center Operations', 'Dedicated customer service teams handling inbound calls, live chat, email support, complaint resolution, and after-sales support for businesses in Malaysia.'),
      serviceSchema('Office Administrative Support', 'Data entry, document management, scheduling, records filing, report preparation, and general office coordination services.'),
      serviceSchema('IT Service and Technical Support', 'Help desk support, technical troubleshooting, system monitoring, software configuration, user account management, and IT asset tracking.'),
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services' },
      ]),
    ],
  }

  return (
    <>
      <SEO
        title="Services | Uniwise Global Solutions - Customer Service, Admin & IT Support Malaysia"
        description="Uniwise Global Solutions offers customer service center operations, office administrative support, and IT service management. Inbound calls, live chat, email support, help desk, data entry, and more. Customizable to your industry and budget."
        keywords="customer service center operations Malaysia, office administrative support, IT service management, help desk outsourcing, call center services Malaysia, live chat support, email ticket management, complaint resolution, after-sales support, data entry services, document management, technical troubleshooting, system monitoring, BPO services Kuala Lumpur"
        path="/services"
        schema={servicesSchemaData}
      />

      {/* HERO */}
      <section className="hero hero--page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" title="Home">Home</Link>
            <span>/</span>
            <span>Services</span>
          </nav>
          <h1>Services Built Around Your Business Needs</h1>
          <p>Three core service areas designed to handle the operational work that takes your focus away from growth. Every service we offer is customizable to fit your industry, team size, and budget.</p>
        </div>
      </section>

      {/* SERVICE 1: CUSTOMER SERVICE CENTER */}
      <section className="section" id="customer-service">
        <div className="container">
          <FadeUp>
            <div className="service-detail">
              <div className="service-detail__header">
                <span className="section-label">Core Service</span>
                <h2>Customer Service Center Operations</h2>
                <p>This is our core offering. We build and manage dedicated customer service teams that represent your brand to your customers across all communication channels.</p>
              </div>

              <div className="feature-grid">
                <FeatureCard icon={icons.phoneIn} title="Inbound Call Handling" description="Your customers call, our agents answer with your brand greeting and resolve their issues directly." />
                <FeatureCard icon={icons.phoneOut} title="Outbound Call Campaigns" description="Follow-up calls, satisfaction surveys, appointment confirmations, and proactive customer outreach." />
                <FeatureCard icon={icons.chat} title="Live Chat Support" description="Real-time chat support on your website and apps. Our agents handle multiple conversations simultaneously." />
                <FeatureCard icon={icons.mail} title="Email & Ticket Management" description="We process and respond to customer emails and support tickets within your defined SLA timelines." />
                <FeatureCard icon={icons.shield} title="Complaint Resolution" description="Our agents follow your escalation procedures to resolve complaints quickly and maintain customer satisfaction." />
                <FeatureCard icon={icons.box} title="After-Sales Support" description="Order tracking, return processing, warranty claims, and post-purchase follow-up for your customers." />
              </div>

              <div className="service-example">
                <div className="service-example__label">Real Example</div>
                <p>We manage the full customer support operation for an e-commerce client processing over 500 orders daily. Our 12-person team handles all inbound calls, live chat, and return processing, maintaining a 94% customer satisfaction score.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICE 2: ADMIN SUPPORT */}
      <section className="section section--bg" id="admin-support">
        <div className="container">
          <FadeUp>
            <div className="service-detail">
              <div className="service-detail__header">
                <span className="section-label">Administrative Services</span>
                <h2>Office Administrative Support</h2>
                <p>Administrative tasks consume hours every week. We take that work off your team so they can focus on strategic priorities that drive revenue.</p>
              </div>

              <div className="feature-grid">
                <FeatureCard icon={icons.database} title="Data Entry & Processing" description="Accurate and fast data input for your databases, CRM systems, and internal platforms." />
                <FeatureCard icon={icons.file} title="Document Management" description="Organization, filing, and management of business documents in both digital and physical formats." />
                <FeatureCard icon={icons.calendar} title="Scheduling & Calendar Management" description="Meeting coordination, appointment scheduling, and team calendar management." />
                <FeatureCard icon={icons.archive} title="Records & Filing" description="Structured and easily accessible business record maintenance for compliance and operations." />
                <FeatureCard icon={icons.barChart} title="Report Preparation" description="Regular report compilation, data presentation, and operational summaries for your leadership team." />
                <FeatureCard icon={icons.users} title="General Office Coordination" description="Daily office activity coordination including vendor management and procurement support." />
              </div>

              <div className="service-example">
                <div className="service-example__label">Real Example</div>
                <p>A logistics startup uses our admin services to process an average of 200 orders per day, manage delivery scheduling, and handle all operational documentation. As a result, they avoided hiring three full-time back-office staff and saved approximately 40% of their admin operational costs.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICE 3: IT SUPPORT */}
      <section className="section" id="it-support">
        <div className="container">
          <FadeUp>
            <div className="service-detail">
              <div className="service-detail__header">
                <span className="section-label">IT Services</span>
                <h2>IT Service &amp; Technical Support</h2>
                <p>Businesses that rely on technology need responsive tech support. We provide help desk and IT service management without the cost of building a full in-house IT department.</p>
              </div>

              <div className="feature-grid">
                <FeatureCard icon={icons.headphones} title="Help Desk Support (Tier 1 & Tier 2)" description="Our team handles technical inquiries, password resets, and basic to intermediate troubleshooting." />
                <FeatureCard icon={icons.wrench} title="Technical Troubleshooting" description="Diagnosis and resolution of technical issues across software, hardware, and network systems." />
                <FeatureCard icon={icons.monitor} title="System Monitoring & Alerts" description="24/7 system monitoring with real-time notifications when anomalies or downtime occur." />
                <FeatureCard icon={icons.settings} title="Software Installation & Configuration" description="Setup and configuration of business applications, productivity tools, and specialized software." />
                <FeatureCard icon={icons.user} title="User Account Management" description="User account management, access rights, new employee IT onboarding, and offboarding." />
                <FeatureCard icon={icons.laptop} title="IT Asset Tracking" description="Company IT asset tracking and recording including laptops, servers, software licenses, and other devices." />
              </div>

              <div className="service-example">
                <div className="service-example__label">Real Example</div>
                <p>A SaaS company with 150 employees uses our help desk services to handle an average of 45 internal support tickets per day. Our team resolves 90% of Tier 1 tickets within 30 minutes, allowing their in-house IT team to focus on infrastructure development and strategic projects.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="section section--bg">
        <div className="container">
          <FadeUp className="section-header text-center">
            <span className="section-label">Our Process</span>
            <h2>How We Deliver Your Services</h2>
          </FadeUp>
          <FadeUp>
            <div className="steps">
              <div className="step">
                <h3>Consultation &amp; Assessment</h3>
                <p>We review your needs, customer volume, tools in use, and your target SLAs. From here, we create a proposal tailored specifically to your business.</p>
              </div>
              <div className="step">
                <h3>Recruitment &amp; Training</h3>
                <p>We recruit agents that match your business profile and train them intensively on your products, brand voice, and procedures. Average onboarding time is 2 weeks.</p>
              </div>
              <div className="step">
                <h3>Operations &amp; Optimization</h3>
                <p>The team starts operating with daily monitoring. We deliver weekly performance reports and make ongoing adjustments to continuously improve service quality.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Need a Service Tailored to Your Business?"
        description="Every business has different needs. Contact us to discuss the right solution for your scale and industry."
        primaryText="Free Consultation"
        primaryLink="/contact"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  )
}
