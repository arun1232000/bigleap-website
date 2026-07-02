import { motion } from 'framer-motion';
import {
  Stethoscope, ShoppingCart, Scale, GraduationCap,
  Wrench, Home, Truck, Briefcase
} from 'lucide-react';
import './Industries.css';

const industries = [
  {
    icon: <Stethoscope size={26} />, name: 'Healthcare',
    desc: 'Secure patient data, HIPAA-compliant systems, and reliable uptime for clinics and practices.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=70',
    color: '#38BDF8',
  },
  {
    icon: <ShoppingCart size={26} />, name: 'Retail & eCommerce',
    desc: 'POS integrations, inventory automation, and fast websites that convert browsers to buyers.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=70',
    color: '#818CF8',
  },
  {
    icon: <Scale size={26} />, name: 'Legal & Finance',
    desc: 'Data security, compliance workflows, and professional communication tools for regulated industries.',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=70',
    color: '#FBBF24',
  },
  {
    icon: <GraduationCap size={26} />, name: 'Education',
    desc: 'Cloud-based learning environments, device management, and Google Workspace for schools.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=70',
    color: '#34D399',
  },
  {
    icon: <Wrench size={26} />, name: 'Trades & Field Services',
    desc: 'Mobile-friendly tools, VoIP for on-the-go teams, and CRM to manage jobs and leads.',
    img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=70',
    color: '#F97316',
  },
  {
    icon: <Home size={26} />, name: 'Real Estate',
    desc: 'CRM setup, automated lead routing, and branded email for property agencies.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=70',
    color: '#EC4899',
  },
  {
    icon: <Truck size={26} />, name: 'Logistics & Transport',
    desc: 'Operations automation, route tracking integrations, and reliable communication systems.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=70',
    color: '#06B6D4',
  },
  {
    icon: <Briefcase size={26} />, name: 'Professional Services',
    desc: 'Productivity suites, project management, and secure remote work for consultants and agencies.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=70',
    color: '#A78BFA',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="industries-bg" />
      <div className="industries-banner-img" />
      <div className="container">
        <motion.div
          className="industries-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Industries We Serve</div>
          <h2 className="section-title">
            Tailored Solutions for<br /><span>Every Industry</span>
          </h2>
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
              <img className="industry-bg-img" src={ind.img} alt="" aria-hidden="true" loading="lazy" />
              <div className="industry-overlay" style={{ '--ind-color': ind.color }} />
              <div className="industry-content">
                <div className="industry-icon" style={{ '--ind-color': ind.color }}>
                  {ind.icon}
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
