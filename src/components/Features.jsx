import './Features.css';

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Premium Quality',
    desc: 'Sourced from the finest producers worldwide',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Reliable Delivery',
    desc: 'Fast and secure delivery across Australia',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M8 2.5C5 4 3 7 3 10"/>
        <path d="M16 2.5c3 1.5 5 4.5 5 7.5"/>
      </svg>
    ),
    title: 'Fresh & Natural',
    desc: 'No artificial additives or preservatives',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trusted Partner',
    desc: 'Serving restaurants and retailers since establishment',
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__grid">
          {features.map((f, i) => (
            <div key={i} className="features__card reveal" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="features__icon">{f.icon}</div>
              <h3 className="features__title">{f.title}</h3>
              <p className="features__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
