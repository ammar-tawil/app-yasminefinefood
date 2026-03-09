import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';

// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';

/**
 * Handles legacy WordPress URL redirects by normalizing paths
 */
function RedirectHandler() {
  const { pathname } = useLocation();
  const path = pathname.toLowerCase().replace(/\/$/, "");

  // About redirects
  if (path === "/about-us" || path.startsWith("/blog") || path.startsWith("/recipes")) {
    return <Navigate to="/about" replace />;
  }

  // Products redirects
  if (path === "/catalogue" || path === "/shop" || path.startsWith("/shop/") || path.startsWith("/products/")) {
    // Only redirect if it's not a valid new product path we might add later
    // For now, these old ones definitely go to /products
    return <Navigate to="/products" replace />;
  }

  // Contact redirects
  if (path === "/contact-us" || path.startsWith("/home/form")) {
    return <Navigate to="/contact" replace />;
  }

  // Default to home for unknown paths
  return <Navigate to="/" replace />;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="disclaimer" element={<DisclaimerPage />} />

            {/* Catch-all for legacy redirects that didn't match a route above */}
            <Route path="*" element={<RedirectHandler />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
