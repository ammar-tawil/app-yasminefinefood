import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import SEO from '../../components/SEO';
import { Users, Mail, RefreshCw, Briefcase } from 'lucide-react';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    // Fetch Leads
    const { data: leadsData } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    // Fetch Subscribers
    const { data: subsData } = await supabase
      .from('subscribers')
      .select('*')
      .order('created_at', { ascending: false });

    if (leadsData) setLeads(leadsData);
    if (subsData) setSubscribers(subsData);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateLeadStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from('leads')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      // Update local state
      setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    } else {
      alert('Failed to update status.');
    }
  };

  const newLeadsCount = leads.filter(l => l.status === 'new').length;

  return (
    <>
      <SEO title="Admin Dashboard" url="/admin" />
      <div className="admin-dashboard">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back! Here's what's happening today.</p>
          </div>
          <button className="admin-btn-secondary" onClick={fetchData} disabled={loading}>
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </header>

        <div className="dashboard-metrics">
          <div className="metric-card">
            <div className="metric-icon metric-icon--blue">
              <Users size={24} />
            </div>
            <div className="metric-info">
              <h3>Total Leads</h3>
              <p className="metric-value">{leads.length}</p>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon metric-icon--green">
              <Briefcase size={24} />
            </div>
            <div className="metric-info">
              <h3>New Inquiries</h3>
              <p className="metric-value">{newLeadsCount}</p>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon metric-icon--purple">
              <Mail size={24} />
            </div>
            <div className="metric-info">
              <h3>Subscribers</h3>
              <p className="metric-value">{subscribers.length}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-tables-grid">
          {/* Leads Table */}
          <section className="dashboard-section leads-section">
            <div className="section-header">
              <h2>Recent Contact Inquiries</h2>
            </div>
            <div className="table-container">
              {loading ? (
                <div className="table-loading">Loading leads...</div>
              ) : leads.length === 0 ? (
                <div className="table-empty">No leads found.</div>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Name / Company</th>
                      <th>Service Needed</th>
                      <th>Message</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map(lead => (
                      <tr key={lead.id} className={lead.status === 'new' ? 'row-new' : ''}>
                        <td className="whitespace-nowrap">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                        <td>
                          <strong>{lead.name}</strong><br/>
                          <span className="text-sm text-gray">{lead.email}</span>
                          {lead.company && <div className="text-sm font-medium">{lead.company}</div>}
                        </td>
                        <td>
                          <span className="badge badge--gray">{lead.service || 'General'}</span>
                        </td>
                        <td className="td-message">
                          <div className="message-truncate" title={lead.message}>
                            {lead.message}
                          </div>
                        </td>
                        <td>
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                            className={`status-select status-${lead.status}`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="closed">Closed / Won</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>

          {/* Subscribers Table */}
          <section className="dashboard-section subs-section">
            <div className="section-header">
              <h2>Newsletter Subscribers</h2>
            </div>
            <div className="table-container">
              {loading ? (
                <div className="table-loading">Loading subscribers...</div>
              ) : subscribers.length === 0 ? (
                <div className="table-empty">No subscribers yet.</div>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Email Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map(sub => (
                      <tr key={sub.id}>
                        <td>{new Date(sub.created_at).toLocaleDateString()}</td>
                        <td className="font-medium">{sub.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
