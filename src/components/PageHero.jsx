import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="page-hero">
      <div className="page-hero__overlay"></div>
      <div className="container page-hero__content">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="page-hero__separator">/</span>
          <span className="page-hero__current">{breadcrumb || title}</span>
        </nav>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
