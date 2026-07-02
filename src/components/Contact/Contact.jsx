import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import './Contact.css';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email Us', value: 'arunabr2000@gmail.com', href: 'mailto:arunabr2000@gmail.com' },
  { icon: <Phone size={20} />, label: 'Call Us', value: '+61 2 1234 5678', href: 'tel:+61212345678' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Sydney, Australia', href: '#' },
];

const services = [
  'Smart Remote IT Support',
  'Digital Front Door (Website)',
  'Brand & Work in a Box',
  'Security in a Bundle',
  'Call-Ready Business Voice',
  'SmartFlow Automation',
  'CRM Deployment',
  'Not sure yet',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:  ACCESS_KEY,
          subject:     `New BigLeap Enquiry from ${form.name}`,
          name:        form.name,
          email:       form.email,
          company:     form.company || 'Not provided',
          service:     form.service || 'Not specified',
          message:     form.message,
          replyto:     form.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message);
      }
    } catch {
      setError('Could not send your message. Please email us directly at arunabr2000@gmail.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg" />
      <div className="contact-banner-img" />
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">
            Ready to Make the<br /><span>Leap Forward?</span>
          </h2>
          <p className="section-subtitle">
            Tell us about your business and we'll put together a tailored IT solution. Free consultation, no commitment.
          </p>
        </motion.div>

        <div className="contact-gif-strip">
          <div className="contact-gif-item">
            <img src="https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif" alt="" aria-hidden="true" />
            <span>Fast Support</span>
          </div>
          <div className="contact-gif-sep">Get in Touch →</div>
          <div className="contact-gif-item">
            <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="" aria-hidden="true" />
            <span>Expert Solutions</span>
          </div>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-info-cards">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="contact-info-card">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-promise">
              <h3>What Happens Next?</h3>
              {[
                'We review your enquiry within 2 business hours',
                'A specialist calls you for a free 30-min consultation',
                'We send a tailored proposal at no charge',
                'You decide—no pressure, no long-term lock-in',
              ].map((step, i) => (
                <div key={i} className="promise-step">
                  <div className="promise-num">{i + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={56} className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll be in touch within 2 business hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Pty Ltd"
                  />
                </div>
                <div className="form-group">
                  <label>Service of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Needs *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your current IT challenges or what you're looking to achieve..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary form-submit contact-submit" disabled={sending}>
                  {sending
                    ? <><Loader2 size={16} className="spin-icon" /> Sending…</>
                    : <><Send size={16} /> Send Message</>
                  }
                </button>
                {error && <p className="form-error">{error}</p>}
                <p className="form-privacy">
                  We respect your privacy. Your information is never shared with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
