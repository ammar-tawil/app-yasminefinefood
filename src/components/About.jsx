import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrap">
            <img src="/images/olive-oil.png" alt="Premium Mediterranean Products" className="about__image" />
            <div className="about__image-accent"></div>
          </div>
          <div className="about__content">
            <span className="section-script">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Your Sourcing<br/>Partner in Australia</h2>
            <p className="about__text">
              Yasmine Fine Food is a Sydney-based B2B food sourcing and distribution company
              specializing in connecting Australian businesses — importers, retailers, wholesalers,
              and brand owners — with certified international food manufacturers.
            </p>
            <p className="about__text">
              We offer comprehensive services including private label development, wholesale supply,
              manufacturer verification, and compliance consulting. Our deep relationships with
              trusted producers across the Mediterranean and Middle East ensure that every product
              meets Australian Food Standards and your exact specifications.
            </p>
            <p className="about__text">
              Whether you're building your own brand, sourcing for a retail chain, or expanding
              your product range, we can assist you with the expertise, connections, and support
              to grow your business with confidence.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">50+</span>
                <span className="about__stat-label">Verified Manufacturers</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">15+</span>
                <span className="about__stat-label">Countries</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">FSANZ Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
