import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#4f632d"/>
                  <path d="M20 8C20 8 12 14 12 22C12 26 15.6 30 20 30C24.4 30 28 26 28 22C28 14 20 8 20 8Z" fill="#faf9f6" opacity="0.9"/>
                  <path d="M20 12C20 12 16 16.5 16 21C16 24 17.8 26.5 20 26.5C22.2 26.5 24 24 24 21C24 16.5 20 12 20 12Z" fill="#4f632d" opacity="0.6"/>
                </svg>
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">Yasmine®</span>
                <span className="footer__logo-sub">FINE FOOD</span>
              </div>
            </Link>
            <p className="footer__brand-desc">
              Your trusted B2B partner for premium food sourcing,
              private labeling, and wholesale supply in Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              <li><Link to="/services">B2B Sourcing</Link></li>
              <li><Link to="/services">Private Labeling</Link></li>
              <li><Link to="/services">Wholesale Supply</Link></li>
              <li><Link to="/services">Retail Chain Ready</Link></li>
              <li><Link to="/services">Consultation</Link></li>
              <li><Link to="/services">Brand Training</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Sydney, NSW Australia
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:1300395320">1300 395 320</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@yasminefinefood.com">info@yasminefinefood.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Yasmine® Fine Food. All rights reserved. | ABN: 82 162 348 423</p>
          <div className="footer__legal">
            <Link to="/terms">Terms of Service</Link>
            <span>·</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
