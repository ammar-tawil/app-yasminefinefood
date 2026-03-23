import { Link } from 'react-router-dom';
import './ProductCategories.css';

const categories = [
  { name: 'Tahini', desc: 'Premium quality tahini paste made from the finest sesame seeds', image: '/images/tahini.webp' },
  { name: 'Pickles', desc: 'Traditional Mediterranean pickled vegetables', image: '/images/pickles.webp' },
  { name: 'Herbs & Spices', desc: 'Authentic blends from around the world', image: '/images/herbs.webp' },
  { name: 'Dried Fruit', desc: 'Sun-dried fruits preserving natural sweetness', image: '/images/dried-fruit.webp' },
  { name: 'Nuts', desc: 'Premium roasted and raw nuts, freshly packed', image: '/images/nuts.webp' },
  { name: 'Honey', desc: 'Pure natural honey from mountain apiaries', image: '/images/honey.webp' },
  { name: 'Olive Oil', desc: 'Cold-pressed extra virgin from Mediterranean groves', image: '/images/olive-oil.webp' },
  { name: 'Dried Beans', desc: 'Quality legumes and pulses', image: '/images/beans.webp' },
];

const ProductCategories = () => {
  return (
    <section id="products" className="categories">
      <div className="container">
        <div className="categories__header">
          <span className="section-script reveal">Our Selection</span>
          <h2 className="section-title reveal gradient-text" style={{ animationDelay: '0.2s' }}>Product Categories</h2>
          <p className="section-subtitle reveal" style={{ animationDelay: '0.4s' }}>
            Discover our wide range of premium quality products sourced from the finest producers.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <div key={i} className={`categories__card categories__card--${i < 2 ? 'large' : 'small'} reveal`} style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
              <div className="categories__card-img" style={{ backgroundImage: `url(${cat.image})` }}></div>
              <div className="categories__card-overlay"></div>
              <div className="categories__card-content">
                <h3 className="categories__card-name">{cat.name}</h3>
                <p className="categories__card-desc">{cat.desc}</p>
                <Link to="/products" className="categories__card-link">
                  View Products
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="categories__cta">
          <Link to="/products" className="btn btn-primary">
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
