import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section id="contact" className="contact-cta">
      <div className="contact-cta__overlay"></div>
      <div className="container contact-cta__content">
        <span className="contact-cta__script">Let's Work Together</span>
        <h2 className="contact-cta__title">Ready to Source with Confidence?</h2>
        <p className="contact-cta__desc">
          Whether you need wholesale supply, private label development, or help meeting
          retail chain specifications — our team is ready to support your business goals.
        </p>
        <div className="contact-cta__buttons">
          <a href="mailto:info@yasminefinefood.com" className="btn btn-primary">
            Request a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="mailto:info@yasminefinefood.com?subject=Consultation%20Request" className="btn btn-outline-dark">
            Book a Consultation
          </a>
          <a href="tel:1300395320" className="btn btn-outline-dark">
            Call 1300 395 320
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
