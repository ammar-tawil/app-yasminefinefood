import { useState } from 'react';
import { supabase } from '../lib/supabase';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    // Attempt insert into Supabase if configured
    let error = null;
    if (supabase) {
      try {
        const result = await supabase
          .from('subscribers')
          .insert([{ email }]);
        error = result.error;
      } catch (e) {
        error = e;
      }
    }

    if (error) {
      if (error.code === '23505') {
        alert('This email is already subscribed!');
      } else {
        alert('There was an error subscribing. Please try again later.');
      }
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
            _subject: `New Newsletter Subscriber: ${email}`,
            Email: email,
            Message: "A new user has subscribed to the Yasmine Fine Food newsletter."
          })
        });
      } catch (emailError) {
        console.error("Failed to send email copy:", emailError);
      }

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter__bg"></div>
      <div className="newsletter__overlay"></div>
      <div className="container newsletter__content">
        <span className="newsletter__script reveal">Stay Updated</span>
        <h2 className="newsletter__title reveal" style={{ animationDelay: '0.2s' }}>Subscribe to Our Newsletter</h2>
        <p className="newsletter__desc reveal" style={{ animationDelay: '0.4s' }}>
          Get the latest updates on new products, special offers, and industry news.
        </p>
        <div className="reveal" style={{ animationDelay: '0.6s' }}>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter__input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            required
          />
          <button type="submit" className="btn btn--primary newsletter__btn" disabled={status === 'submitting' || status === 'success'}>
            {status === 'submitting' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            {status !== 'submitting' && status !== 'success' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            )}
          </button>
        </form>
        </div>
        {status === 'success' && (
          <p style={{ color: 'var(--color-white)', marginTop: '1rem', fontWeight: '500' }}>
            Thanks for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
