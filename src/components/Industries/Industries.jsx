import { motion } from 'framer-motion';
import {
  Stethoscope, ShoppingCart, Scale, GraduationCap,
  Wrench, Home, Truck, Briefcase
} from 'lucide-react';
import SplitText from '../SplitText/SplitText';
import GraphicPanel from '../GraphicPanel/GraphicPanel';
import { useParallax } from '../../hooks/useParallax';
import './Industries.css';

const industries = [
  {
    Icon: Stethoscope, name: 'Healthcare',
    desc: 'Secure patient data, HIPAA-compliant systems, and reliable uptime for clinics and practices.',
    color: '#D6FF3F',
  },
  {
    Icon: ShoppingCart, name: 'Retail & eCommerce',
    desc: 'POS integrations, inventory automation, and fast websites that convert browsers to buyers.',
    color: '#FFB020',
  },
  {
    Icon: Scale, name: 'Legal & Finance',
    desc: 'Data security, compliance workflows, and professional communication tools for regulated industries.',
    color: '#8B7CFF',
  },
  {
    Icon: GraduationCap, name: 'Education',
    desc: 'Cloud-based learning environments, device management, and Google Workspace for schools.',
    color: '#5EEAD4',
  },
  {
    Icon: Wrench, name: 'Trades & Field Services',
    desc: 'Mobile-friendly tools, VoIP for on-the-go teams, and CRM to manage jobs and leads.',
    color: '#FF6B5E',
  },
  {
    Icon: Home, name: 'Real Estate',
    desc: 'CRM setup, automated lead routing, and branded email for property agencies.',
    color: '#F472B6',
  },
  {
    Icon: Truck, name: 'Logistics & Transport',
    desc: 'Operations automation, route tracking integrations, and reliable communication systems.',
    color: '#93C5FD',
  },
  {
    Icon: Briefcase, name: 'Professional Services',
    desc: 'Productivity suites, project management, and secure remote work for consultants and agencies.',
    color: '#E5E5E0',
  },
];

export default function Industries() {
  const bannerParallax = useParallax(40);

  return (
    <section id="industries" className="industries-section">
      <div className="industries-bg" />
      <motion.div className="industries-banner-grid" ref={bannerParallax.ref} style={{ y: bannerParallax.y }} />
      <div className="container">
        <motion.div
          className="industries-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Industries We Serve</div>
          <SplitText as="h2" className="section-title">
            Tailored Solutions for<br /><span className="accent-italic">Every Industry</span>
          </SplitText>
          <p className="section-subtitle">
            We understand that different industries have different needs. Our solutions are shaped
            around your specific sector's challenges and compliance requirements.
          </p>
        </motion.div>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: 'spring', stiffness: 120, damping: 14 }}
              whileHover={{ y: -6 }}
            >
              <div className="industry-bg-graphic">
                <GraphicPanel icon={ind.Icon} color={ind.color} variant="mesh" dense />
              </div>
              <div className="industry-overlay" style={{ '--ind-color': ind.color }} />
              <div className="industry-content">
                <div className="industry-icon" style={{ '--ind-color': ind.color }}>
                  <ind.Icon size={26} />
                </div>
                <h3 className="industry-name">{ind.name}</h3>
                <p className="industry-desc">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
