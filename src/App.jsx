import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

            {/* Legacy WordPress URL Redirects */}
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="contact-us" element={<Navigate to="/contact" replace />} />
            <Route path="catalogue" element={<Navigate to="/products" replace />} />
            <Route path="shop" element={<Navigate to="/products" replace />} />
            <Route path="shop/*" element={<Navigate to="/products" replace />} />
            <Route path="blog" element={<Navigate to="/about" replace />} />
            <Route path="blog/*" element={<Navigate to="/about" replace />} />
            <Route path="recipes" element={<Navigate to="/about" replace />} />
            <Route path="recipes/*" element={<Navigate to="/about" replace />} />
            <Route path="home/form/sample-request" element={<Navigate to="/contact" replace />} />
            <Route path="home/form/new-account-form" element={<Navigate to="/contact" replace />} />
            <Route path="home/form/*" element={<Navigate to="/contact" replace />} />
            <Route path="products/pickles" element={<Navigate to="/products" replace />} />
            <Route path="products/olive-oil" element={<Navigate to="/products" replace />} />
            <Route path="products/dried-fruit" element={<Navigate to="/products" replace />} />

            {/* Catch-all: send unknown paths to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
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
