import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Globe, AtSign, Share2 } from 'lucide-react';
import './Footer.css';

const links = {
  Services: [
    { label: 'Smart Remote IT Support', to: '/services' },
    { label: 'Digital Front Door', to: '/services' },
    { label: 'Brand & Work in a Box', to: '/services' },
    { label: 'Security in a Bundle', to: '/services' },
    { label: 'Call-Ready Business Voice', to: '/services' },
    { label: 'SmartFlow Automation', to: '/services' },
    { label: 'CRM Deployment', to: '/services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Work', to: '/portfolio' },
    { label: 'Industries', to: '/industries' },
    { label: 'Technologies', to: '/technologies' },
    { label: 'Contact', to: '/contact' },
  ],
  Support: [
    { label: 'IT Help Desk', to: '#' },
    { label: 'Documentation', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand-banner">
        <span className="footer-big-text">Orbinexa <span>Technologies</span></span>
      </div>

      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon"><Zap size={18} /></div>
              <span>Orbinexa <span className="footer-logo-accent">Technologies</span></span>
            </Link>
            <p className="footer-tagline">
              End-to-end IT solutions for growing businesses. We keep your technology
              running so you can focus on what matters.
            </p>
            <div className="footer-contact-list">
              <a href="mailto:hello@orbinexatechnologies.com" className="footer-contact-item">
                <Mail size={14} /> hello@orbinexatechnologies.com
              </a>
              <a href="tel:+61212345678" className="footer-contact-item">
                <Phone size={14} /> +61 2 1234 5678
              </a>
              <div className="footer-contact-item">
                <MapPin size={14} /> 4th Floor, Markaz Complex, Mavoor Rd, Opposite Moffusil Bus Stand, Arayidathupalam, Kozhikode, Kerala, India, 673004
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} /> 32 Halden Place, Haverhill, Suffolk, CB9 7WD, UK
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
                  <li key={item.label}>
                    <Link to={item.to} className="footer-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 Orbinexa Technologies IT Solutions. All rights reserved.</p>
          <p>Built with care for businesses that want to grow.</p>
        </div>
      </div>
    </footer>
  );
}
