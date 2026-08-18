import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, ArrowUpRight } from 'lucide-react';
import SplitText from '../SplitText/SplitText';
import { useParallax } from '../../hooks/useParallax';
import './Portfolio.css';

const clients = [
  { name: 'Zenew Energy', href: 'https://zenewenergy.com/' },
  { name: 'Prime Compliance', href: 'https://www.theprimecompliance.com/' },
  { name: 'The Pack Saddle', href: 'https://thepacksaddle.com/' },
  { name: 'BigLeap International', href: 'https://bigleapinternational.com/' },
];

function ClientTile({ name, href, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="client-tile glass"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.05, duration: 0.4 }}
    >
      <ArrowUpRight size={14} className="client-tile-link-icon" />
      <Building2 size={22} />
      <span>{name}</span>
    </motion.a>
  );
}

export default function Portfolio() {
  const bannerParallax = useParallax(35);

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
            Real Results,<br /><span className="accent-italic">Real Impact</span>
          </SplitText>
          <p className="section-subtitle">
            We partner with businesses across industries to deliver IT solutions that
            actually move the needle—from day-to-day support to full-scale transformation.
          </p>
        </motion.div>

        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Our Clients</div>
          <SplitText as="h2" className="section-title">
            Trusted By Businesses<br /><span className="accent-italic">We Support</span>
          </SplitText>
          <p className="section-subtitle">
            A growing list of businesses who rely on Orbinexa Technologies to keep their
            technology running smoothly.
          </p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((c, i) => <ClientTile key={c.name} name={c.name} href={c.href} i={i} />)}
        </div>
      </div>
    </section>
  );
}
