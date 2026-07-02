import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Shield, Zap, Phone, BarChart3, Building2 } from 'lucide-react';
import './Portfolio.css';

const filters = ['All', 'Web', 'Security', 'Cloud', 'Automation', 'VoIP'];

const projects = [
  {
    id: 1,
    icon: <Globe size={20} />,
    color: '#6366f1',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=70',
    title: 'MediCare Clinic Website',
    category: 'Web',
    tags: ['Web Development', 'SEO', 'Hosting'],
    desc: 'Built a fully responsive, SEO-optimised website for a multi-location healthcare clinic. Integrated appointment booking and patient portal.',
    result: '3× increase in online bookings within 60 days',
  },
  {
    id: 2,
    icon: <Shield size={20} />,
    color: '#f59e0b',
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=640&q=70',
    title: 'Law Firm Security Overhaul',
    category: 'Security',
    tags: ['Cybersecurity', 'DMARC', 'MFA', 'Compliance'],
    desc: 'Complete security audit and hardening for a 30-person legal firm. Deployed DMARC, MFA, device policies, and endpoint protection.',
    result: 'Zero incidents in 12 months post-deployment',
  },
  {
    id: 3,
    icon: <Building2 size={20} />,
    color: '#06b6d4',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=640&q=70',
    title: 'Retail Chain Google Workspace',
    category: 'Cloud',
    tags: ['Google Workspace', 'Email Migration', 'Training'],
    desc: 'Migrated 60 users from legacy email to Google Workspace across 5 store locations. Full DNS, Drive, and shared calendar setup.',
    result: '40% reduction in IT support tickets',
  },
  {
    id: 4,
    icon: <Zap size={20} />,
    color: '#ec4899',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=70',
    title: 'eCommerce Order Automation',
    category: 'Automation',
    tags: ['SmartFlow', 'Zapier', 'CRM', 'Shopify'],
    desc: 'Automated the entire order-to-fulfilment workflow for an online retailer—from order capture to warehouse notification and CRM update.',
    result: '85% reduction in manual processing time',
  },
  {
    id: 5,
    icon: <Phone size={20} />,
    color: '#22c55e',
    img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=640&q=70',
    title: 'Construction Company VoIP',
    category: 'VoIP',
    tags: ['VoIP', 'IVR', 'Call Routing', 'Mobile'],
    desc: 'Replaced legacy PBX with modern VoIP system for 25-person construction company. IVR menus, mobile apps, and site-to-office routing.',
    result: 'Missed calls down 70%, customer satisfaction up',
  },
  {
    id: 6,
    icon: <BarChart3 size={20} />,
    color: '#a855f7',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=70',
    title: 'Agency CRM Deployment',
    category: 'Automation',
    tags: ['HubSpot', 'CRM', 'Pipeline', 'Automation'],
    desc: 'Built a complete HubSpot CRM setup for a 15-person marketing agency. Sales pipeline, lead routing, automated follow-ups, and reporting.',
    result: '60% improvement in lead conversion rate',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-banner-img" />
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Our Work</div>
          <h2 className="section-title">
            Real Projects,<br /><span>Real Results</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects where BigLeap has transformed IT operations for businesses across industries.
          </p>
        </motion.div>

        <div className="portfolio-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div className="portfolio-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-card-banner">
                  <img src={proj.img} alt={proj.title} loading="lazy" className="portfolio-banner-img" />
                  <div className="project-banner-overlay" style={{ background: `linear-gradient(180deg, rgba(6,9,17,0) 0%, rgba(6,9,17,0.7) 100%), linear-gradient(135deg, ${proj.color}22 0%, transparent 60%)` }} />
                  <div className="project-banner-meta">
                    <div className="project-icon" style={{ background: `${proj.color}25`, color: proj.color, border: `1px solid ${proj.color}40` }}>
                      {proj.icon}
                    </div>
                    <div className="project-tags">
                      {proj.tags.slice(0, 2).map(t => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                    <ExternalLink size={16} className="project-link-icon" style={{ color: proj.color }} />
                  </div>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-result" style={{ borderColor: `${proj.color}30`, background: `${proj.color}08` }}>
                    <span className="result-dot" style={{ background: proj.color }} />
                    {proj.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
