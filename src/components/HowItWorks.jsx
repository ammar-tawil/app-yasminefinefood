import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'We take the time to understand your product needs, business goals, and target market — whether you\'re launching a new brand or expanding your product range.',
  },
  {
    number: '02',
    title: 'Sourcing & Verification',
    desc: 'We connect you with certified international manufacturers, conducting thorough audits and quality checks to ensure they meet our rigorous standards.',
  },
  {
    number: '03',
    title: 'Compliance & Specs',
    desc: 'Every product is verified against Australian Food Standards (FSANZ), with complete documentation, labelling compliance, and retail-ready specifications.',
  },
  {
    number: '04',
    title: 'Supply & Partnership',
    desc: 'Reliable logistics, ongoing quality assurance, and dedicated support — building long-term partnerships that grow your business.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <span className="section-script">Our Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A transparent, step-by-step approach to sourcing and supplying
            premium food products for your business.
          </p>
        </div>

        <div className="how-it-works__timeline">
          {steps.map((step, i) => (
            <div key={i} className="how-it-works__step">
              <div className="how-it-works__number-wrap">
                <span className="how-it-works__number">{step.number}</span>
                {i < steps.length - 1 && <div className="how-it-works__line"></div>}
              </div>
              <div className="how-it-works__content">
                <h3 className="how-it-works__title">{step.title}</h3>
                <p className="how-it-works__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
