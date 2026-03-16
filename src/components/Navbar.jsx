import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No longer using useEffect for setMobileOpen(false) to avoid cascading renders.
  // We can handle closing specifically when links are clicked.
  const handleLinkClick = () => setMobileOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar glass ${scrolled ? ' navbar--scrolled' : ''}${location.pathname !== '/' ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#4f632d"/>
              <path d="M20 8C20 8 12 14 12 22C12 26 15.6 30 20 30C24.4 30 28 26 28 22C28 14 20 8 20 8Z" fill="#faf9f6" opacity="0.9"/>
              <path d="M20 12C20 12 16 16.5 16 21C16 24 17.8 26.5 20 26.5C22.2 26.5 24 24 24 21C24 16.5 20 12 20 12Z" fill="#4f632d" opacity="0.6"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Yasmine<span className="trademark">®</span></span>
            <span className="navbar__logo-sub">FINE FOOD</span>
          </div>
        </Link>

        <nav className={`navbar__nav${mobileOpen ? ' navbar__nav--open' : ''}`}>
          <Link to="/" onClick={handleLinkClick} className={`navbar__link${isActive('/') ? ' navbar__link--active' : ''}`}>Home</Link>
          <Link to="/services" onClick={handleLinkClick} className={`navbar__link${isActive('/services') ? ' navbar__link--active' : ''}`}>Services</Link>
          <Link to="/products" onClick={handleLinkClick} className={`navbar__link${isActive('/products') ? ' navbar__link--active' : ''}`}>Products</Link>
          <Link to="/about" onClick={handleLinkClick} className={`navbar__link${isActive('/about') ? ' navbar__link--active' : ''}`}>About Us</Link>
          <Link to="/contact" onClick={handleLinkClick} className={`navbar__link${isActive('/contact') ? ' navbar__link--active' : ''}`}>Contact</Link>
        </nav>

        <Link to="/contact" className="navbar__cta btn btn-primary">
          Get a Quote
        </Link>

        <button
          className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
