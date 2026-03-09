import PageHero from '../components/PageHero';
import About from '../components/About';
import Trust from '../components/Trust';
import Promise from '../components/Promise';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Trusted B2B Sourcing Partner"
        description="Learn about our commitment to quality, honesty, and reliable food sourcing. Connecting Australian businesses with 50+ trusted international manufacturers."
        url="/about"
      />
      <PageHero
        title="About Us"
        subtitle="Your trusted B2B food sourcing partner, connecting Australian businesses with the world's finest certified manufacturers."
        breadcrumb="About Us"
      />
      <About />
      <Trust />
      <Promise />
      <FAQ />
      <Newsletter />
    </>
  );
};

export default AboutPage;
