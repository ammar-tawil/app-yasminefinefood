import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './Legal.css';

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy of Yasmine® Fine Food to understand how we securely collect, use, and protect your B2B commercial data."
        url="/privacy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your business and personal information."
        breadcrumb="Privacy Policy"
      />

      <section className="legal-content">
        <div className="container container--narrow">
          <div className="legal-content__body">
            <p className="legal-content__last-updated">Last Updated: March 2026</p>

            <h2>1. Introduction</h2>
            <p>
              Yasmine<span className="trademark">®</span> Fine Food ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (yasminefinefood.com) and utilize our B2B sourcing, consulting, and wholesale services. We adhere to the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal and business information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on our website, or otherwise when you contact us. The information we collect may include:
            </p>
            <ul>
              <li><strong>Contact Data:</strong> Name, business email address, phone number, and business address.</li>
              <li><strong>Business Data:</strong> Company name, ABN, industry, job title, and details regarding your product sourcing requirements, private label specifications, or supply chain needs.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and website usage data collected via cookies and similar tracking technologies.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive to:
            </p>
            <ul>
              <li>Facilitate the creation of commercial sourcing contracts and private label agreements.</li>
              <li>Communicate directly with international manufacturers on your behalf (only necessary business specifications, not your personal data unless required).</li>
              <li>Respond to your inquiries, provide consultations, and offer customer support.</li>
              <li>Send administrative information, such as updates to our terms, conditions, and policies.</li>
              <li>Send marketing and promotional communications (you may opt-out at any time).</li>
              <li>Improve our website functionality and optimize your user experience for SEO/AEO purposes.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. This includes sharing necessary product requirement data with verified international food manufacturers to facilitate the B2B sourcing process. We strictly require these third parties to maintain the confidentiality of any proprietary business information shared during the sourcing process.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal and business information. While we have taken reasonable steps to secure the information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>6. Your Privacy Rights</h2>
            <p>
              Under the Privacy Act 1988 (Cth), you have the right to access the personal information we hold about you and to ask for its correction if it is inaccurate, out of date, or incomplete. To exercise these rights, please contact us using the details below.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br/><br/>
              <strong>Yasmine® Fine Food</strong><br/>
              Sydney, NSW Australia<br/>
              Email: info@yasminefinefood.com<br/>
              Phone: 1300 395 320
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
