import './PopularProducts.css';

const products = [
  {
    name: 'Premium Tahini 500g',
    category: 'Tahini',
    desc: 'Stone-ground sesame paste, perfect for hummus and dressings',
    image: '/images/tahini.png',
  },
  {
    name: 'Mixed Pickles Jar',
    category: 'Pickles',
    desc: 'Assorted pickled vegetables in traditional brine',
    image: '/images/pickles.png',
  },
  {
    name: "Za'atar Blend",
    category: 'Herbs & Spices',
    desc: 'Traditional herb and spice blend with sumac and sesame',
    image: '/images/herbs.png',
  },
  {
    name: 'Premium Dried Apricots',
    category: 'Dried Fruit',
    desc: 'Sun-dried Turkish apricots, naturally sweet',
    image: '/images/dried-fruit.png',
  },
  {
    name: 'Roasted Almonds',
    category: 'Nuts',
    desc: 'Lightly salted and perfectly roasted premium almonds',
    image: '/images/nuts.png',
  },
  {
    name: 'Pure Mountain Honey',
    category: 'Honey',
    desc: 'Raw, unfiltered honey from highland apiaries',
    image: '/images/honey.png',
  },
];

const PopularProducts = () => {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular__header">
          <span className="section-script">Featured</span>
          <h2 className="section-title">Popular Products</h2>
        </div>

        <div className="popular__grid">
          {products.map((p, i) => (
            <div key={i} className="popular__card">
              <div className="popular__card-img-wrap">
                <img src={p.image} alt={p.name} className="popular__card-img" />
                <span className="popular__card-badge">{p.category}</span>
              </div>
              <div className="popular__card-body">
                <h3 className="popular__card-name">{p.name}</h3>
                <p className="popular__card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
