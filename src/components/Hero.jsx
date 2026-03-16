import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content container">
        <span className="hero__welcome reveal">Welcome to</span>
        <h1 className="hero__title reveal" style={{ animationDelay: '0.2s' }}>Yasmine<span className="trademark">®</span> Fine Food</h1>
        <p className="hero__tagline reveal" style={{ animationDelay: '0.4s' }}>
          Premium Mediterranean & Middle Eastern food imports for Australian
          wholesalers, retailers and foodservice buyers.
        </p>
        <p className="hero__subtext reveal" style={{ animationDelay: '0.6s' }}>
          Wholesale supply, sourcing support, and private-label opportunities with dependable service from a Sydney-based distributor.
        </p>

        <div className="hero__pathways">
          <Link to="/products" className="hero__pathway-card reveal" style={{ animationDelay: '0.8s' }}>
            <div className="hero__pathway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>Retailers</h3>
            <p>Shelf-ready Mediterranean brands & products</p>
            <span className="hero__pathway-link">View Catalogue &rarr;</span>
          </Link>

          <Link to="/contact" className="hero__pathway-card reveal" style={{ animationDelay: '1.0s' }}>
            <div className="hero__pathway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3>Distributors</h3>
            <p>Bulk foodservice, ingredients & reliable wholesale</p>
            <span className="hero__pathway-link">Request Pricing &rarr;</span>
          </Link>

          <Link to="/services" className="hero__pathway-card reveal" style={{ animationDelay: '1.2s' }}>
            <div className="hero__pathway-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            </div>
            <h3>Private Label</h3>
            <p>End-to-end custom sourcing & brand development</p>
            <span className="hero__pathway-link">Learn More &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
