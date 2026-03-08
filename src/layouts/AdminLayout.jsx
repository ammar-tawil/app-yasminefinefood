import { useState, useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LogOut, Loader2 } from 'lucide-react';
import '../pages/admin/Admin.css';

const AdminLayout = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <Loader2 className="animate-spin" size={48} />
        <p>Loading Admin Portal...</p>
      </div>
    );
  }

  // If no session and not on the login page, redirect to login
  if (!session && window.location.pathname !== '/admin/login') {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="admin-layout">
      {session && (
        <aside className="admin-sidebar">
          <div className="admin-sidebar__brand">
            <span className="logo-text">Yasmine Admin</span>
          </div>
          <nav className="admin-nav">
            <button className="admin-nav__link active">Dashboard</button>
            {/* Future routes can go here */}
          </nav>
          <button className="admin-signout" onClick={handleSignOut}>
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </aside>
      )}

      <main className={`admin-main ${!session ? 'admin-main--full' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
