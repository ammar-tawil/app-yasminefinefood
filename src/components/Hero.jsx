import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content container">
        <span className="hero__welcome">Welcome to</span>
        <h1 className="hero__title">Yasmine Fine Food</h1>
        <p className="hero__tagline">
          Premium Mediterranean & Middle Eastern food imports for Australian
          retailers, wholesalers and foodservice.
        </p>
        <div className="hero__buttons">
          <Link to="/services" className="btn btn-primary">
            Our Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/products" className="btn btn-outline">
            Explore Products
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
