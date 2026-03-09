import fs from 'fs';
import path from 'path';
import process from 'process';

// All the public routes of the React app
const routes = [
  '/',
  '/services',
  '/products',
  '/about',
  '/contact',
  '/terms',
  '/privacy',
  '/disclaimer'
];

// Base URL of the live site
const DOMAIN = 'https://yasminefinefood.com';

const generateSitemap = () => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${DOMAIN}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  try {
    fs.writeFileSync(outputPath, sitemapContent);
    console.log(`✅ Sitemap successfully generated at: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

generateSitemap();
