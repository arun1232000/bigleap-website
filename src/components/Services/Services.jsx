import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Globe, Briefcase, Shield, Phone, Zap, BarChart2, ArrowUpRight } from 'lucide-react';
import IsometricIcon from '../About/IsometricIcon';
import SplitText from '../SplitText/SplitText';
import { useParallax } from '../../hooks/useParallax';
import './Services.css';

const services = [
  {
    num: '01', icon: Monitor, color: '#D6FF3F',
    title: 'Remote IT Support',
    desc: 'Fast, expert IT help without on-site visits. We resolve most issues within 2 hours—remotely, proactively.',
    highlights: ['24/7 monitoring', 'Sub-2hr response', 'Proactive fixes'],
    featured: true,
  },
  {
    num: '02', icon: Globe, color: '#FFB020',
    title: 'Digital Front Door',
    desc: 'A fast, modern website that becomes the front door to your business. SEO-ready from day one.',
    highlights: ['Mobile-first design', 'SEO optimised', 'Fast load times'],
  },
  {
    num: '03', icon: Briefcase, color: '#5EEAD4',
    title: 'Cloud Workspace',
    desc: 'Google Workspace & Microsoft 365 setup, security, and management for your whole team.',
    highlights: ['Google Workspace', 'Microsoft 365', 'Email security'],
  },
  {
    num: '04', icon: Shield, color: '#8B7CFF',
    title: 'Cybersecurity',
    desc: 'Practical everyday cybersecurity for email, devices, data, and websites. No jargon, just protection.',
    highlights: ['MFA setup', 'Email hardening', 'Device security'],
  },
  {
    num: '05', icon: Phone, color: '#FF6B5E',
    title: 'Business Voice',
    desc: 'Modern VoIP phone systems with smart call flows and professional presence—no hardware costs.',
    highlights: ['VoIP systems', 'IVR & call flows', 'Mobile apps'],
  },
  {
    num: '06', icon: Zap, color: '#F472B6',
    title: 'SmartFlow Automation',
    desc: 'Automate repetitive work and connect your tools. Save 10+ hours per week on autopilot.',
    highlights: ['Zapier & Make', 'CRM workflows', 'Auto reporting'],
  },
  {
    num: '07', icon: BarChart2, color: '#93C5FD',
    title: 'CRM & Sales',
    desc: 'Turn your CRM into a real sales engine. HubSpot, Salesforce—deployed right and optimised for growth.',
    highlights: ['Pipeline setup', 'Lead automation', 'Sales reporting'],
  },
];

function ServiceCard({ s, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      className={`svc-card glass${s.featured ? ' svc-card-featured' : ''}`}
      style={{ '--svc-color': s.color }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.06, type: 'spring', stiffness: 100, damping: 16 }}
      whileHover="hovered"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
        e.currentTarget.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateZ(8px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      }}
    >
      <div className="svc-num">{s.num}</div>
      <motion.div className="svc-icon-wrap"
        variants={{ hovered: { scale: 1.1, rotate: -6 } }}
        transition={{ type: 'spring', stiffness: 200 }}>
        <Icon size={24} />
      </motion.div>
      <h3 className="svc-title">{s.title}</h3>
      <p className="svc-desc">{s.desc}</p>
      <ul className="svc-tags">
        {s.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>
      <motion.div className="svc-arrow"
        variants={{ hovered: { x: 4, y: -4 } }}
        transition={{ type: 'spring', stiffness: 200 }}>
        <ArrowUpRight size={16} />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const bgParallax = useParallax(35);

  return (
    <section id="services" className="services-section">
      <motion.div className="svc-bg-image" ref={bgParallax.ref} style={{ y: bgParallax.y }} />
      <div className="svc-ambient-blob svc-ambient-blob-1" />
      <div className="svc-ambient-blob svc-ambient-blob-2" />
      <div className="container">
        <motion.div className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <div className="section-badge">What We Do</div>
          <SplitText as="h2" className="section-title">
            End-to-End IT Solutions<br /><span className="accent-italic">Built for Business</span>
          </SplitText>
          <p className="section-subtitle">
            Seven specialised services that cover everything your business needs to stay
            secure, connected, and productive.
          </p>
        </motion.div>

        <div className="svc-gif-strip">
          <div className="svc-gif-item">
            <div className="svc-gif-visual"><IsometricIcon size={64} variant="cube" icon={Monitor} color="#D6FF3F" /></div>
            <span>Remote Support</span>
          </div>
          <div className="svc-gif-divider" />
          <div className="svc-gif-item">
            <div className="svc-gif-visual"><IsometricIcon size={64} variant="diamond" icon={Shield} color="#8B7CFF" /></div>
            <span>Cloud &amp; Security</span>
          </div>
          <div className="svc-gif-divider" />
          <div className="svc-gif-item">
            <div className="svc-gif-visual"><IsometricIcon size={64} variant="cube" icon={Zap} color="#FFB020" /></div>
            <span>Automation</span>
          </div>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => <ServiceCard key={s.num} s={s} i={i} />)}
          <motion.a href="#contact" className="svc-cta-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 }}
            whileHover={{ scale: 1.02 }}>
            <div className="svc-cta-text">
              <span>Need a custom solution?</span>
              <h3>Let&apos;s Talk</h3>
            </div>
            <ArrowUpRight size={28} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
