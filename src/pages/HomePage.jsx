import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import ProductCategories from '../components/ProductCategories';
import PopularProducts from '../components/PopularProducts';
import Promise from '../components/Promise';
import About from '../components/About';
import Trust from '../components/Trust';
import ContactCTA from '../components/ContactCTA';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Premium B2B Food Sourcing & Private Label in Australia"
        url="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Yasmine Fine Food',
          description: 'Your trusted B2B partner for premium food sourcing, private labeling, and wholesale supply in Australia.',
          url: 'https://yasminefinefood.com',
          telephone: '1300-395-320',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sydney',
            addressRegion: 'NSW',
            addressCountry: 'AU'
          },
          priceRange: '$$',
          areaServed: 'Australia',
          knowsAbout: ['Private Label Food', 'Food Sourcing', 'Wholesale Food Supply', 'FSANZ Compliance']
        }}
      />
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <ProductCategories />
      <PopularProducts />
      <Promise />
      <About />
      <Trust />
      <ContactCTA />
      <Newsletter />
    </>
  );
};

export default HomePage;
