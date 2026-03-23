import './PopularProducts.css';

const products = [
  {
    name: 'Premium Tahini',
    category: 'Tahini',
    desc: 'Stone-ground sesame paste, perfect for hummus and dressings.',
    packSize: '500g, 1kg, 5kg, 18kg Pails',
    idealFor: 'Foodservice, Manufacturers, Retailers',
    moq: '1 Pallet / Mixed Orders',
    image: '/images/tahini.webp',
  },
  {
    name: 'Mixed Pickles',
    category: 'Pickles',
    desc: 'Assorted pickled vegetables in traditional brine.',
    packSize: '1kg, 2.5kg, 10kg Tins',
    idealFor: 'Restaurants, Delis, Retailers',
    moq: '50 Cartons',
    image: '/images/pickles.webp',
  },
  {
    name: "Za'atar Blend",
    category: 'Herbs & Spices',
    desc: 'Traditional herb and spice blend with sumac and sesame.',
    packSize: '250g, 500g, 10kg Bulk Bags',
    idealFor: 'Bakeries, Foodservice, Brands',
    moq: '100kg',
    image: '/images/herbs.webp',
  },
  {
    name: 'Premium Dried Apricots',
    category: 'Dried Fruit',
    desc: 'Sun-dried Turkish apricots, naturally sweet.',
    packSize: '250g, 5kg, 12.5kg Cartons',
    idealFor: 'Snack Packers, Wholefood Stores',
    moq: '1 Pallet',
    image: '/images/dried-fruit.webp',
  },
  {
    name: 'Roasted Almonds',
    category: 'Nuts',
    desc: 'Lightly salted and perfectly roasted premium almonds.',
    packSize: '200g, 1kg, 11.34kg Cartons',
    idealFor: 'Retailers, Nut Roasters',
    moq: '1 Pallet',
    image: '/images/nuts.webp',
  },
  {
    name: 'Pure Mountain Honey',
    category: 'Honey',
    desc: 'Raw, unfiltered honey from highland apiaries.',
    packSize: '500g, 1kg, 3kg, 30kg Pails',
    idealFor: 'Retailers, Health Stores',
    moq: '1 Pallet',
    image: '/images/honey.webp',
  },
];

const PopularProducts = () => {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular__header">
          <span className="section-script reveal">Featured</span>
          <h2 className="section-title reveal gradient-text" style={{ animationDelay: '0.2s' }}>Popular Products</h2>
        </div>

        <div className="popular__grid">
          {products.map((p, i) => (
            <div key={i} className="popular__card reveal" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <div className="popular__card-img-wrap">
                <img src={p.image} alt={p.name} className="popular__card-img" />
                <span className="popular__card-badge">{p.category}</span>
              </div>
              <div className="popular__card-body">
                <h3 className="popular__card-name">{p.name}</h3>
                <p className="popular__card-desc">{p.desc}</p>
                <div className="popular__card-specs">
                  <p><strong>Pack Sizes:</strong> {p.packSize}</p>
                  <p><strong>Ideal For:</strong> {p.idealFor}</p>
                  <p><strong>MOQ:</strong> {p.moq}</p>
                </div>
                <div className="popular__card-action">
                  <a href="/contact" className="btn btn-outline" style={{width: '100%', justifyContent: 'center', borderColor: 'var(--color-green)', color: 'var(--color-green)'}}>Enquire for Wholesale</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
