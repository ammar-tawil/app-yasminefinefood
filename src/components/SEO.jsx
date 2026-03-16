import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, type = 'website', schema }) => {
  const siteName = 'Yasmine® Fine Food';
  const fullTitle = title ? `${title} | ${siteName}` : 'Yasmine® Fine Food — Premium Mediterranean & Middle Eastern Imports';
  const defaultDesc = 'Your trusted B2B partner for premium food sourcing, private labeling, and wholesale supply in Australia.';
  const currentUrl = `https://yasminefinefood.com${url || '/'}`;

  // Base Schema for the Organization
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: 'https://yasminefinefood.com',
    logo: 'https://yasminefinefood.com/logo.png', // Add a real absolute path when ready
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '1300-395-320',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: 'English'
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:site_name" content={siteName} />
      {/* <meta property="og:image" content="https://yasminefinefood.com/og-image.jpg" /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      {/* <meta name="twitter:image" content="https://yasminefinefood.com/og-image.jpg" /> */}

      {/* Structured Data (JSON-LD) for AEO/AIO */}
      {schema ? (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(baseSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
