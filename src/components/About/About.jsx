import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
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
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge">About BigLeap</div>
          <h2 className="section-title">
            We Make IT Simple,<br /><span>Secure & Scalable</span>
          </h2>
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

          <a href="#contact" className="btn-primary about-cta">Let's Talk</a>
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
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80"
                alt="BigLeap team working together"
                loading="lazy"
              />
            </div>
            <div className="about-photo-col">
              <div className="about-photo-sm">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=320&q=80"
                  alt="Team collaboration"
                  loading="lazy"
                />
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
              <img
                src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
                alt=""
                loading="lazy"
              />
              <span className="about-gif-label">Automated Workflows</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
