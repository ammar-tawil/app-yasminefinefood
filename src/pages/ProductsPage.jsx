import PageHero from '../components/PageHero';
import ProductCategories from '../components/ProductCategories';
import PopularProducts from '../components/PopularProducts';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const ProductsPage = () => {
  return (
    <>
      <SEO
        title="Premium Wholesale Food Products & Ingredients"
        description="Discover our wide range of premium quality wholesale products including tahini, olive oil, spices, and dried fruits, sourced from the finest producers worldwide."
        url="/products"
      />
      <PageHero
        title="Our Products"
        subtitle="Discover our wide range of premium quality products sourced from the finest producers worldwide."
        breadcrumb="Products"
      />
      <ProductCategories />
      <PopularProducts />
      <Newsletter />
    </>
  );
};

export default ProductsPage;
