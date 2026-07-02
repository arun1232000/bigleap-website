import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Operations Manager',
    company: 'BrightCare Clinic',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80',
    text: "BigLeap transformed our IT setup completely. They migrated us to Google Workspace, set up our new website, and have handled every IT issue remotely within hours. Our team hasn't had a major tech problem in over a year.",
    tag: 'Google Workspace + Website',
  },
  {
    id: 2,
    name: 'James Okonkwo',
    role: 'Managing Director',
    company: 'Okonkwo & Partners Law',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80',
    text: "We needed proper security without slowing our team down. BigLeap audited everything, fixed our email vulnerabilities, and set up MFA across the firm. Our IT is now completely in order. Highly professional team.",
    tag: 'Security in a Bundle',
  },
  {
    id: 3,
    name: 'Linda Tran',
    role: 'CEO',
    company: 'StyleNest Retail',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80',
    text: "The SmartFlow automation they built saved us 15+ hours per week. Orders, inventory, and CRM now all talk to each other automatically. BigLeap genuinely understands small business operations.",
    tag: 'SmartFlow Automation',
  },
  {
    id: 4,
    name: 'Mark Davidson',
    role: 'Owner',
    company: 'Davidson Building Group',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64&q=80',
    text: "Moving from our old phone system to VoIP was seamless. BigLeap handled everything—kept our number, set up call routing, and trained the team in a day. Missed calls are down massively.",
    tag: 'Call-Ready Business Voice',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Head of Sales',
    company: 'NextStep Consulting',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=64&h=64&q=80',
    text: "Our HubSpot setup was a mess before BigLeap stepped in. They rebuilt the whole pipeline, automated follow-ups, and our conversion rate went up 60% in three months. Best IT investment we've made.",
    tag: 'CRM Deployment',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg" />
      <div className="testimonials-banner-img" />
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Testimonials</div>
          <h2 className="section-title">
            What Our Clients<br /><span>Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Real feedback from real businesses that trust BigLeap to keep their technology running.
          </p>
        </motion.div>

        <div className="testimonials-gif-row">
          <div className="tgr-item">
            <img src="https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif" alt="" loading="lazy" className="tgr-gif" />
            <span>Enterprise Security</span>
          </div>
          <div className="tgr-divider">Trusted by growing businesses worldwide</div>
          <div className="tgr-item">
            <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="" loading="lazy" className="tgr-gif" />
            <span>24/7 Monitoring</span>
          </div>
        </div>

        <div className="testimonials-carousel">
          <AnimatePresence mode="popLayout">
            <div className="testimonials-grid">
              {visible.map((t, i) => (
                <motion.div
                  key={`${t.id}-${i}`}
                  className={`testimonial-card ${i === 1 ? 'featured' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="testimonial-top">
                    <Quote size={24} className="quote-icon" />
                    <div className="stars">
                      {[...Array(t.rating)].map((_, si) => (
                        <Star key={si} size={14} className="star" />
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-tag">{t.tag}</div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={t.avatar} alt={t.name} loading="lazy" />
                    </div>
                    <div>
                      <div className="author-name">{t.name}</div>
                      <div className="author-role">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev}>
              <ChevronLeft size={20} />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
