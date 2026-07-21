import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ExternalLink, Globe, Shield, Zap, Phone, BarChart3, Building2 } from 'lucide-react';
import SplitText from '../SplitText/SplitText';
import GraphicPanel from '../GraphicPanel/GraphicPanel';
import { useParallax } from '../../hooks/useParallax';
import './Portfolio.css';

const filters = ['All', 'Web', 'Security', 'Cloud', 'Automation', 'VoIP'];

const projects = [
  {
    id: 1,
    Icon: Globe,
    color: '#D6FF3F',
    title: 'MediCare Clinic Website',
    category: 'Web',
    tags: ['Web Development', 'SEO', 'Hosting'],
    desc: 'Built a fully responsive, SEO-optimised website for a multi-location healthcare clinic. Integrated appointment booking and patient portal.',
    result: '3× increase in online bookings within 60 days',
  },
  {
    id: 2,
    Icon: Shield,
    color: '#FFB020',
    title: 'Law Firm Security Overhaul',
    category: 'Security',
    tags: ['Cybersecurity', 'DMARC', 'MFA', 'Compliance'],
    desc: 'Complete security audit and hardening for a 30-person legal firm. Deployed DMARC, MFA, device policies, and endpoint protection.',
    result: 'Zero incidents in 12 months post-deployment',
  },
  {
    id: 3,
    Icon: Building2,
    color: '#8B7CFF',
    title: 'Retail Chain Google Workspace',
    category: 'Cloud',
    tags: ['Google Workspace', 'Email Migration', 'Training'],
    desc: 'Migrated 60 users from legacy email to Google Workspace across 5 store locations. Full DNS, Drive, and shared calendar setup.',
    result: '40% reduction in IT support tickets',
  },
  {
    id: 4,
    Icon: Zap,
    color: '#5EEAD4',
    title: 'eCommerce Order Automation',
    category: 'Automation',
    tags: ['SmartFlow', 'Zapier', 'CRM', 'Shopify'],
    desc: 'Automated the entire order-to-fulfilment workflow for an online retailer—from order capture to warehouse notification and CRM update.',
    result: '85% reduction in manual processing time',
  },
  {
    id: 5,
    Icon: Phone,
    color: '#FF6B5E',
    title: 'Construction Company VoIP',
    category: 'VoIP',
    tags: ['VoIP', 'IVR', 'Call Routing', 'Mobile'],
    desc: 'Replaced legacy PBX with modern VoIP system for 25-person construction company. IVR menus, mobile apps, and site-to-office routing.',
    result: 'Missed calls down 70%, customer satisfaction up',
  },
  {
    id: 6,
    Icon: BarChart3,
    color: '#F472B6',
    title: 'Agency CRM Deployment',
    category: 'Automation',
    tags: ['HubSpot', 'CRM', 'Pipeline', 'Automation'],
    desc: 'Built a complete HubSpot CRM setup for a 15-person marketing agency. Sales pipeline, lead routing, automated follow-ups, and reporting.',
    result: '60% improvement in lead conversion rate',
  },
];

const TILT_MAX = 8;

function ProjectCard({ proj }) {
  const cardRef = useRef(null);
  const reduced = useReducedMotion();
  const rawRX = useMotionValue(0);
  const rawRY = useMotionValue(0);
  const rotateX = useSpring(rawRX, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(rawRY, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e) => {
    if (reduced) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRY.set(px * TILT_MAX * 2);
    rawRX.set(-py * TILT_MAX * 2);
  };

  const handleMouseLeave = () => {
    rawRX.set(0);
    rawRY.set(0);
  };

  return (
    <motion.div
      key={proj.id}
      ref={cardRef}
      className="project-card glass"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      data-cursor-text="View Project"
    >
      <div className="project-card-banner arch-image">
        <GraphicPanel icon={proj.Icon} color={proj.color} variant="grid" />
        <div className="project-banner-overlay" style={{ background: `linear-gradient(180deg, rgba(10,10,13,0) 0%, rgba(10,10,13,0.72) 100%), linear-gradient(135deg, ${proj.color}22 0%, transparent 60%)` }} />
        <div className="project-banner-meta">
          <div className="project-icon" style={{ background: `${proj.color}25`, color: proj.color, border: `1px solid ${proj.color}40` }}>
            <proj.Icon size={20} />
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
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const bannerParallax = useParallax(35);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <motion.div className="portfolio-section-banner-grid" ref={bannerParallax.ref} style={{ y: bannerParallax.y }} />
      <div className="portfolio-ambient-blob portfolio-ambient-blob-1" />
      <div className="portfolio-ambient-blob portfolio-ambient-blob-2" />
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Our Work</div>
          <SplitText as="h2" className="section-title">
            Real Projects,<br /><span className="accent-italic">Real Results</span>
          </SplitText>
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
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="filter-pill-bg"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="filter-btn-label">{f}</span>
            </button>
          ))}
        </div>

        <motion.div className="portfolio-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => <ProjectCard key={proj.id} proj={proj} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
