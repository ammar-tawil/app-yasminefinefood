import PageHero from '../components/PageHero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Promise from '../components/Promise';
import ContactCTA from '../components/ContactCTA';
import SEO from '../components/SEO';

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="B2B Food Sourcing & Wholesale Services"
        description="Comprehensive B2B food sourcing, private labeling, and brand development solutions for Australian businesses. Partner with certified international manufacturers."
        url="/services"
      />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive B2B food sourcing and brand development solutions for Australian businesses."
        breadcrumb="Services"
      />
      <Services />
      <HowItWorks />
      <Promise />
      <ContactCTA />
    </>
  );
};

export default ServicesPage;
