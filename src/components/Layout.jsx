import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="mobile-overlay" id="mobileOverlay"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
