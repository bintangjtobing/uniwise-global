import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  function toggleMenu() {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden'
      const overlay = document.getElementById('mobileOverlay')
      if (overlay) overlay.classList.toggle('active', !prev)
      return !prev
    })
  }

  function toggleTheme() {
    const html = document.documentElement
    const current = html.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-theme', next)
    localStorage.setItem('uniwise-theme', next)
  }

  useEffect(() => {
    const stored = localStorage.getItem('uniwise-theme')
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored)
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container">
        <Link to="/" className="logo" title="Uniwise Global Solutions - Customer Service Center Malaysia">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/logo-light.png`}
            alt="Uniwise Global Solutions logo - customer service and business support company in Malaysia"
            title="Uniwise Global Solutions Sdn. Bhd."
            className="logo-light"
          />
          <img
            src={`${import.meta.env.BASE_URL}assets/images/logo-dark.png`}
            alt="Uniwise Global Solutions logo - customer service and business support company in Malaysia"
            title="Uniwise Global Solutions Sdn. Bhd."
            className="logo-dark"
          />
        </Link>

        <nav className={`nav${menuOpen ? ' open' : ''}`} role="navigation" aria-label="Main navigation">
          <Link to="/" className={isActive('/')} title="Uniwise Global Solutions Homepage">Home</Link>
          <Link to="/about" className={isActive('/about')} title="About Uniwise Global Solutions">About Us</Link>
          <Link to="/services" className={isActive('/services')} title="Customer Service, Admin Support & IT Services">Services</Link>
          <Link to="/contact" className={isActive('/contact')} title="Contact Uniwise Global Solutions">Contact Us</Link>
          <Link to="/contact" className="btn btn--primary btn--sm" title="Get started with Uniwise customer service solutions">Get Started</Link>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" title="Switch between light and dark mode">
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </button>
          <button className={`menu-toggle${menuOpen ? ' active' : ''}`} onClick={toggleMenu} aria-label="Toggle mobile menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
