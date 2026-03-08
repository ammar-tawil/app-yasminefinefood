import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './Legal.css';

const DisclaimerPage = () => {
  return (
    <>
      <SEO
        title="Legal Disclaimer"
        description="Important legal disclaimer regarding Yasmine Fine Food's B2B sourcing services, manufacturer compliance, and limitations of liability."
        url="/disclaimer"
      />
      <PageHero
        title="Legal Disclaimer"
        subtitle="Important information regarding our services, compliance guarantees, and site content."
        breadcrumb="Disclaimer"
      />

      <section className="legal-content">
        <div className="container container--narrow">
          <div className="legal-content__body">
            <p className="legal-content__last-updated">Last Updated: March 2026</p>

            <h2>1. General Information</h2>
            <p>
              The information provided by Yasmine Fine Food ("we," "us," or "our") on yasminefinefood.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h2>2. B2B Sourcing and Manufacturing Disclaimer</h2>
            <p>
              Yasmine Fine Food operates as a B2B sourcing partner, consultant, and facilitator between Australian businesses and international food manufacturers. <strong>We do not directly manufacture the physical products.</strong>
            </p>
            <p>
              While we conduct rigorous verification, auditing, and vetting of our manufacturing partners to ensure they hold recognized credentials (such as ISO, HACCP, or specific organic certifications), the ultimate responsibility for maintaining these certifications lies with the manufacturer. Yasmine Fine Food cannot be held liable for sudden changes in a manufacturer's certification status or unforeseen production errors at the source facility.
            </p>

            <h2>3. Regulatory Compliance & FSANZ Disclaimer</h2>
            <p>
              We provide guidance to assist clients in ensuring products meet the Food Standards Australia New Zealand (FSANZ) requirements, labeling laws, and specifications required by major Australian retail chains. However, this guidance does not constitute legal or formal regulatory advice.
            </p>
            <p>
              It is the sole responsibility of the importer of record, brand owner, or retailer to conduct final compliance checks, arrange independent laboratory testing if required, and ensure legal compliance before placing products on the Australian market. We strongly recommend clients seek independent legal and regulatory counsel regarding food safety and importing laws.
            </p>

            <h2>4. Retailer Relationships Disclaimer</h2>
            <p>
              Any mention of "major Australian retail chains," "supermarket specifications," or general readiness for retail distribution indicates our capability to source products that meet strict commercial requirements. It does not imply a formal endorsement by, partnership with, or guaranteed acceptance into specific retailers such as Woolworths, Coles, Aldi, or independent grocers, unless explicitly stated in a formalized, signed commercial contract.
            </p>

            <h2>5. External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;
