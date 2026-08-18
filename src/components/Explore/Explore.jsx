import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Monitor, Users2, Building2, Cpu, Layers, Mail, ArrowUpRight } from 'lucide-react';
import SplitText from '../SplitText/SplitText';
import './Explore.css';

const pages = [
  {
    to: '/services', icon: Monitor, color: '#D6FF3F',
    title: 'Services',
    desc: 'End-to-end IT solutions that cover everything your business needs to stay secure, connected, and productive.',
  },
  {
    to: '/about', icon: Users2, color: '#FFB020',
    title: 'About',
    desc: 'Orbinexa Technologies is a full-service IT company helping small and mid-sized businesses run smarter.',
  },
  {
    to: '/industries', icon: Building2, color: '#5EEAD4',
    title: 'Industries',
    desc: 'Solutions shaped around your specific sector’s challenges and compliance requirements.',
  },
  {
    to: '/technologies', icon: Cpu, color: '#8B7CFF',
    title: 'Technologies',
    desc: 'Certified experts across the leading platforms your business already uses—or needs to adopt.',
  },
  {
    to: '/portfolio', icon: Layers, color: '#F472B6',
    title: 'Portfolio',
    desc: 'A selection of projects where Orbinexa Technologies has transformed IT operations for businesses across industries.',
  },
  {
    to: '/contact', icon: Mail, color: '#93C5FD',
    title: 'Contact',
    desc: 'Tell us about your business and we’ll put together a tailored IT solution. Free consultation, no commitment.',
  },
];

function ExploreCard({ p, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = p.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.06, type: 'spring', stiffness: 100, damping: 16 }}
    >
      <Link to={p.to} className="explore-card glass" style={{ '--explore-color': p.color }}>
        <div className="explore-icon-wrap">
          <Icon size={22} />
        </div>
        <h3 className="explore-title">{p.title}</h3>
        <p className="explore-desc">{p.desc}</p>
        <div className="explore-arrow">
          <ArrowUpRight size={16} />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Explore() {
  return (
    <section id="explore" className="explore-section">
      <div className="container">
        <motion.div className="explore-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <div className="section-badge">Explore Orbinexa Technologies</div>
          <SplitText as="h2" className="section-title">
            Everything You Need,<br /><span className="accent-italic">One Click Away</span>
          </SplitText>
        </motion.div>

        <div className="explore-grid">
          {pages.map((p, i) => <ExploreCard key={p.to} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
