import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo" title="Uniwise Global Solutions - Homepage">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/logo-dark.png`}
                alt="Uniwise Global Solutions logo - customer service center Malaysia"
                title="Uniwise Global Solutions Sdn. Bhd."
                className="logo-footer"
              />
            </Link>
            <p>Uniwise Global Solutions Sdn. Bhd. is a business support company in Malaysia providing customer service center operations, administrative support, and IT service solutions for businesses across industries.</p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" title="Uniwise Global Solutions Homepage">Home</Link></li>
              <li><Link to="/about" title="About Uniwise Global Solutions">About Us</Link></li>
              <li><Link to="/services" title="Our business support services">Services</Link></li>
              <li><Link to="/contact" title="Contact our team">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#customer-service" title="Customer service center operations">Customer Service Center</Link></li>
              <li><Link to="/services#admin-support" title="Office administrative support services">Administrative Support</Link></li>
              <li><Link to="/services#it-support" title="IT service and technical support">IT Service &amp; Support</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:leebinglin2@gmail.com" title="Email Uniwise Global Solutions">leebinglin2@gmail.com</a></li>
              <li><span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Kuala Lumpur, Malaysia</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>&copy; 2026 Uniwise Global Solutions Sdn. Bhd. All rights reserved.</span>
          <span>SSM Registration No: [Your Registration Number]</span>
        </div>
      </div>
    </footer>
  )
}
