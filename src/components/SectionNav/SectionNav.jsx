import { motion } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';
import './SectionNav.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'explore', label: 'Explore' },
  { id: 'contact', label: 'Contact' },
];

const ids = sections.map(s => s.id);

export default function SectionNav() {
  const active = useActiveSection(ids);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="section-nav" aria-label="Section navigation">
      {sections.map(s => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            className={`section-nav-dot ${isActive ? 'active' : ''}`}
            onClick={() => goTo(s.id)}
            aria-label={`Go to ${s.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="section-nav-tooltip">{s.label}</span>
            <span className="section-nav-dot-core" />
            {isActive && (
              <motion.span
                layoutId="sectionNavRing"
                className="section-nav-dot-ring"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
