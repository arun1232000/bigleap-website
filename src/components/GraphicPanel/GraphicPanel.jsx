import { motion } from 'framer-motion';
import './GraphicPanel.css';

/* Reusable custom-animated visual — replaces stock photography across the site.
   A layered scene: gradient mesh + moving grid + oversized ghost icon + pulsing nodes. */
export default function GraphicPanel({ icon: Icon, color = '#D6FF3F', variant = 'mesh', label, dense = false }) {
  return (
    <div className={`graphic-panel gp-${variant}${dense ? ' gp-dense' : ''}`} style={{ '--gp-color': color }}>
      <div className="gp-mesh" />
      <div className="gp-grid" />
      <motion.div
        className="gp-ghost-icon"
        animate={{ rotate: [0, 6, 0, -6, 0], y: [0, -8, 0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        {Icon && <Icon size={dense ? 64 : 108} strokeWidth={1.2} />}
      </motion.div>
      <div className="gp-nodes">
        <span className="gp-node gp-node-1" />
        <span className="gp-node gp-node-2" />
        <span className="gp-node gp-node-3" />
      </div>
      <div className="gp-scan" />
      {label && (
        <div className="gp-label">
          {Icon && <Icon size={14} />}
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
