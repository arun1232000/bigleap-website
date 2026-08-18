import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';
import GraphicPanel from '../components/GraphicPanel/GraphicPanel';
import '../components/Services/Services.css';
import './ServiceDetail.css';

function Bullet({ text }) {
  const splitAt = text.indexOf(' – ');
  if (splitAt === -1) return <li>{text}</li>;
  return (
    <li>
      <strong>{text.slice(0, splitAt)}</strong>
      {text.slice(splitAt)}
    </li>
  );
}

function Section({ heading, intro, bullets, note, wide, i = 0 }) {
  return (
    <motion.div className={`svcd-section glass${wide ? ' svcd-section-wide' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}>
      {heading && <h3 className="svcd-heading">{heading}</h3>}
      {intro && <p className="svcd-text">{intro}</p>}
      {bullets && (
        <ul className="svcd-bullets">
          {bullets.map((b, j) => <Bullet key={j} text={b} />)}
        </ul>
      )}
      {note && <p className="svcd-note">{note}</p>}
    </motion.div>
  );
}

function Group({ title, intro, bullets, sections, result }) {
  return (
    <div className="svcd-group">
      {title && <h2 className="svcd-group-title">{title}</h2>}
      {intro && <p className="svcd-text svcd-group-intro">{intro}</p>}
      {bullets && (
        <motion.ul className="svcd-bullets svcd-group-bullets glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}>
          {bullets.map((b, j) => <Bullet key={j} text={b} />)}
        </motion.ul>
      )}
      {sections && (
        <div className="svcd-section-grid">
          {sections.map((s, i) => <Section key={i} i={i} {...s} />)}
        </div>
      )}
      {result && (
        <motion.p className="svcd-result"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <strong>Result: </strong>{result}
        </motion.p>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/services" replace />;

  const { detail, icon: Icon } = service;
  const index = services.findIndex(s => s.slug === slug);
  const gpVariant = index % 2 === 0 ? 'mesh' : 'grid';

  return (
    <section className="svcd-page" style={{ '--svc-color': service.color }}>
      <div className="svcd-hero">
        <div className="svcd-hero-bg">
          <GraphicPanel icon={Icon} color={service.color} variant={gpVariant} dense />
        </div>
        <div className="svcd-hero-fade" />
        <div className="container">
          <Link to="/services" className="svcd-back">
            <ArrowLeft size={16} /> All Services
          </Link>

          <motion.div className="svcd-header"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="svcd-icon-wrap">
              <Icon size={28} />
            </div>
            <div className="svc-num">{service.num}</div>
            <h1 className="svcd-title">{service.title}</h1>
            <p className="svcd-tagline">{detail.tagline}</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.p className="svcd-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}>
          {detail.intro}
        </motion.p>

        <div className="svcd-body">
          {detail.groups
            ? detail.groups.map((g, i) => <Group key={i} {...g} />)
            : (
              <div className="svcd-section-grid">
                {detail.sections.map((s, i) => <Section key={i} i={i} {...s} />)}
              </div>
            )}

          {detail.outcome && (
            <motion.div className="svcd-outcome glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}>
              <div className="svcd-outcome-badge">
                <Icon size={18} />
              </div>
              <p className="svcd-outcome-intro">{detail.outcome.intro}</p>
              <ul className="svcd-bullets svcd-outcome-bullets">
                {detail.outcome.bullets.map((b, i) => (
                  <li key={i}><CheckCircle2 size={16} className="svcd-check" /> {b}</li>
                ))}
              </ul>
              {detail.outcome.closing && (
                <p className="svcd-closing">{detail.outcome.closing}</p>
              )}
            </motion.div>
          )}
        </div>

        <div className="svcd-cta">
          <h3>Ready to get started?</h3>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
