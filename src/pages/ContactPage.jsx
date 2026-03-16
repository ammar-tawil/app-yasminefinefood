import { useState } from 'react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Insert into Supabase
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          service: formData.service || null,
          message: formData.message
        }
      ]);

    if (error) {
      console.error('Error submitting lead:', error);
      setStatus('error');
    } else {
      // Send email notification via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/tawilammar@gmail.com", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New B2B Website Lead: ${formData.company || formData.name}`,
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone || 'Not provided',
            Company: formData.company || 'Not provided',
            Service: formData.service || 'Not specified',
            Message: formData.message
          })
        });
      } catch (emailError) {
        console.error("Failed to send email copy:", emailError);
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Request a B2B Sourcing Quote"
        description="Get in touch with Yasmine® Fine Food for B2B product sourcing, private labeling quotes, and manufacturer verification consultations in Australia."
        url="/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for quotes, consultations, and partnership inquiries."
        breadcrumb="Contact"
      />

      <section className="contact-page">
        <div className="container">
          <div className="contact-page__grid">
            {/* Contact Form */}
            <div className="contact-page__form-wrap">
              <span className="section-script">Send us a Message</span>
              <h2 className="contact-page__form-title">Get a Free Quote</h2>
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="contact-page__row">
                  <div className="contact-page__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="04XX XXX XXX" />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
                  </div>
                </div>
                <div className="contact-page__field">
                  <label htmlFor="service">Service of Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="sourcing">B2B Product Sourcing</option>
                    <option value="private-label">Private Label & Own Brand</option>
                    <option value="wholesale">Wholesale Supply</option>
                    <option value="retail">Retail Chain Supply</option>
                    <option value="consultation">Consultation & Verification</option>
                    <option value="training">Brand Building Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="contact-page__field">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows="5" required></textarea>
                </div>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    {status !== 'submitting' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    )}
                  </button>
                  {status === 'success' && (
                    <p className="form-success-message" style={{ color: 'green', marginTop: '1rem', fontWeight: 'bold' }}>
                      Message sent successfully! We will be in touch shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="form-error-message" style={{ color: 'red', marginTop: '1rem', fontWeight: 'bold' }}>
                      There was an error sending your message. Please try again.
                    </p>
                  )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-page__info">
              <div className="contact-page__info-card">
                <span className="section-script">Get in Touch</span>
                <h3 className="contact-page__info-title">Contact Information</h3>
                <ul className="contact-page__info-list">
                  <li>
                    <div className="contact-page__info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A5D23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <strong>Address</strong>
                      <p>Sydney, NSW Australia</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-page__info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A5D23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <strong>Phone</strong>
                      <p><a href="tel:1300395320">1300 395 320</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-page__info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A5D23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <p><a href="mailto:info@yasminefinefood.com">info@yasminefinefood.com</a></p>
                    </div>
                  </li>
                </ul>

                <div className="contact-page__hours">
                  <h4>Business Hours</h4>
                  <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday: 9:00 AM – 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Newsletter />
    </>
  );
};

export default ContactPage;
