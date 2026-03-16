import './Trust.css';

const badges = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'FSANZ Compliant',
    desc: 'Products meet Food Standards Australia New Zealand requirements',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'HACCP Awareness',
    desc: 'Understanding of Hazard Analysis & Critical Control Point principles',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Certified Manufacturers',
    desc: 'We work only with verified and quality-certified production facilities',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trusted by Businesses',
    desc: 'Serving importers, retailers, and wholesalers across Australia',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f632d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Registered Australian Business',
    desc: 'ABN: 82 162 348 423 — Australia Smart Trading Pty Ltd',
  },
];

const Trust = () => {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust__header">
          <span className="section-script">Why Choose Us</span>
          <h2 className="section-title">Trust & Compliance</h2>
          <p className="section-subtitle">
            Your confidence in our services is backed by adherence to
            Australian food safety standards and rigorous quality processes.
          </p>
        </div>

        <div className="trust__grid">
          {badges.map((b, i) => (
            <div key={i} className="trust__badge">
              <div className="trust__badge-icon">{b.icon}</div>
              <h3 className="trust__badge-title">{b.title}</h3>
              <p className="trust__badge-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="trust__note">
          <p>
            <strong>Disclaimer:</strong> Yasmine® Fine Food assists businesses with sourcing and compliance guidance.
            All products and manufacturing processes are subject to independent verification. We recommend consulting
            with qualified food safety professionals for specific regulatory requirements. Specific certifications
            may vary by manufacturer and product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
