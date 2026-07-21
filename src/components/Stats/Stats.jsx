import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

function Counter({ target, suffix = '', duration = 1.2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const isFloat = target % 1 !== 0;
    const steps = 50;
    const inc = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function StatCard({ s, i }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className={`stat-item glass${i === 0 ? ' stat-item-featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.1 }}
    >
      <div className="stat-num">
        <Counter target={s.num} duration={1.2} />
        <span className="stat-suffix">{s.suffix}</span>
      </div>
      <div className="stat-label">{s.label}</div>
      <div className="stat-desc">{s.desc}</div>
    </motion.div>
  );
}

const stats = [
  { num: 200, suffix: '+', label: 'Clients Served', desc: 'Businesses trust BigLeap' },
  { num: 99.9, suffix: '%', label: 'Uptime SLA', desc: 'Guaranteed availability' },
  { num: 7, suffix: '', label: 'Core Services', desc: 'End-to-end IT solutions' },
  { num: 2, suffix: 'hr', label: 'Response Time', desc: 'Avg support resolution' },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid stats-bento">
          {stats.map((s, i) => <StatCard key={s.label} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
