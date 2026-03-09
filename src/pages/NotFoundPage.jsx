import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Yasmine Fine Food</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__text">
            The page you are looking for has been moved or no longer exists.
            We recently updated our website, so some older links may be outdated.
          </p>
          <Link to="/" className="not-found__button">
            <Home className="not-found__icon" />
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
