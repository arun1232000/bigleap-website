import { motion } from 'framer-motion';
import { CheckCircle2, Users2, ShieldCheck, Workflow } from 'lucide-react';
import IsometricIcon from './IsometricIcon';
import GraphicPanel from '../GraphicPanel/GraphicPanel';
import SplitText from '../SplitText/SplitText';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useParallax } from '../../hooks/useParallax';
import './About.css';

const highlights = [
  'No long-term lock-in contracts',
  'Transparent pricing with no hidden fees',
  'Dedicated account manager for each client',
  'Proactive monitoring before problems arise',
  'Scalable solutions that grow with you',
  'Australian-based support team',
];

export default function About() {
  const bgParallax = useParallax(35);
  const cta = useMagnetic(0.3, 10);

  return (
    <section id="about" className="about-section">
      <motion.div className="about-bg" ref={bgParallax.ref} style={{ y: bgParallax.y }} />
      <div className="container about-grid">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge">About BigLeap</div>
          <SplitText as="h2" className="section-title">
            We Make IT Simple,<br /><span className="accent-italic">Secure & Scalable</span>
          </SplitText>
          <p className="section-subtitle">
            BigLeap is a full-service IT company helping small and mid-sized businesses run
            smarter. We remove the complexity of technology so your team can focus entirely
            on growing your business.
          </p>
          <p className="about-body">
            From the first day you engage us, you get a dedicated IT partner who understands
            your goals. Whether you need day-to-day support, a secure cloud workspace, a
            professional website, or business automation—we handle it all, end to end.
          </p>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h}
                className="highlight-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              >
                <CheckCircle2 size={16} className="check-icon" />
                <span>{h}</span>
              </motion.div>
            ))}
          </div>

          <motion.a href="#contact" className="btn-primary about-cta"
            ref={cta.ref} style={cta.style} {...cta.handlers}>
            Let's Talk
          </motion.a>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-photo-mosaic">
            <div className="about-photo-main">
              <GraphicPanel icon={Users2} color="#D6FF3F" variant="mesh" label="Dedicated Account Team" />
            </div>
            <div className="about-photo-col">
              <div className="about-photo-sm">
                <GraphicPanel icon={ShieldCheck} color="#8B7CFF" variant="grid" dense label="Proactive Monitoring" />
              </div>
              <motion.div
                className="about-clients-chip"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 14 }}
              >
                <span className="clients-num">200+</span>
                <span className="clients-label">Happy Clients</span>
              </motion.div>
            </div>

            <motion.div
              className="about-exp-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="badge-num">10+</span>
              <div>
                <span className="badge-text">Years</span>
                <span className="badge-text">Experience</span>
              </div>
            </motion.div>

            <motion.div
              className="about-uptime-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="uptime-dot" />
              <span>99.9% Uptime SLA</span>
            </motion.div>
            <motion.div
              className="about-gif-float"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}>
              <div className="about-gif-visual">
                <IsometricIcon size={56} variant="diamond" icon={Workflow} color="#FFB020" />
              </div>
              <span className="about-gif-label">Automated Workflows</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
