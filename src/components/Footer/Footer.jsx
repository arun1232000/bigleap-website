import { Zap, Mail, Phone, MapPin, Globe, AtSign, Share2 } from 'lucide-react';
import './Footer.css';

const links = {
  Services: [
    'Smart Remote IT Support',
    'Digital Front Door',
    'Brand & Work in a Box',
    'Security in a Bundle',
    'Call-Ready Business Voice',
    'SmartFlow Automation',
    'CRM Deployment',
  ],
  Company: ['About Us', 'Our Work', 'Industries', 'Technologies', 'Contact'],
  Support: ['IT Help Desk', 'Documentation', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand-banner">
        <span className="footer-big-text">Big<span>Leap</span></span>
      </div>

      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <div className="footer-logo-icon"><Zap size={18} /></div>
              <span>Big<span className="footer-logo-accent">Leap</span></span>
            </a>
            <p className="footer-tagline">
              End-to-end IT solutions for growing businesses. We keep your technology
              running so you can focus on what matters.
            </p>
            <div className="footer-contact-list">
              <a href="mailto:hello@bigleap.com.au" className="footer-contact-item">
                <Mail size={14} /> hello@bigleap.com.au
              </a>
              <a href="tel:+61212345678" className="footer-contact-item">
                <Phone size={14} /> +61 2 1234 5678
              </a>
              <div className="footer-contact-item">
                <MapPin size={14} /> Sydney, Australia
              </div>
            </div>
            <div className="footer-socials">
              <a href="#" className="social-btn"><Globe size={15} /></a>
              <a href="#" className="social-btn"><AtSign size={15} /></a>
              <a href="#" className="social-btn"><Share2 size={15} /></a>
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="footer-col">
              <h4 className="footer-col-title">{group}</h4>
              <ul className="footer-col-links">
                {items.map(item => (
                  <li key={item}><a href="#" className="footer-link">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 BigLeap IT Solutions. All rights reserved.</p>
          <p>Built with care for businesses that want to grow.</p>
        </div>
      </div>
    </footer>
  );
}
