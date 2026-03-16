import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './Legal.css';

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Yasmine® Fine Food. Review our B2B commercial terms, intellectual property, and limitations of liability."
        url="/terms"
      />
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website and services."
        breadcrumb="Terms of Service"
      />

      <section className="legal-content">
        <div className="container container--narrow">
          <div className="legal-content__body">
            <p className="legal-content__last-updated">Last Updated: March 2026</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to Yasmine® Fine Food. These Terms of Service ("Terms") govern your access to and use of the Yasmine® Fine Food website, services, and applications (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.
            </p>

            <h2>2. Business Services (B2B)</h2>
            <p>
              Yasmine® Fine Food primarily operates as a Business-to-Business (B2B) service provider, specializing in the sourcing, distribution, and consultation of food products. Our services are intellectual properties and business facilitation services. We do not manufacture products directly but instead act as a sourcing partner and consultant connecting businesses with certified manufacturers.
            </p>

            <h2>3. Product Information & Compliance</h2>
            <p>
              While we strive to ensure that all manufacturers we connect you with comply with Food Standards Australia New Zealand (FSANZ) and international food safety standards (such as HACCP), the ultimate responsibility for product compliance, labeling accuracy, and regulatory adherence within the Australian market rests with the importing business or brand owner.
            </p>
            <p>
              Any compliance advice or auditing provided by Yasmine® Fine Food is for informational and facilitation purposes and does not constitute formal legal or regulatory certification.
            </p>

            <h2>4. Private Label & Sourcing Agreements</h2>
            <p>
              Specific engagements involving private labeling, wholesale supply, or retail chain preparation will be subject to distinct, formalized commercial contracts detailing specifications, minimum order quantities (MOQs), delivery terms, and liability. These website Terms of Service act as a general framework and are superseded by any direct commercial agreements signed between Yasmine® Fine Food and the client.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Yasmine® Fine Food and its licensors. The Service is protected by copyright, trademark, and other laws of Australia and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Yasmine® Fine Food.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Yasmine® Fine Food, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party (including manufacturers) on the Service; (iii) any products obtained through our sourcing services; and (iv) unauthorized access, use or alteration of your transmissions or content.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions.
            </p>

            <h2>8. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at info@yasminefinefood.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
