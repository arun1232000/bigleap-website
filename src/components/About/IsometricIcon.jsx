import { useState } from 'react';
import { motion } from 'framer-motion';
import './IsometricIcon.css';

export default function IsometricIcon({ size = 64, variant = 'cube', onLight = false, icon: Icon = null, color = null }) {
  const half = size / 2;
  const baseRotate = variant === 'diamond' ? { rotateX: 45, rotateZ: 45 } : { rotateX: -18 };
  const [hovered, setHovered] = useState(false);
  const tint = color ? { '--iso-tint': color } : undefined;

  return (
    <div
      className={`iso-icon-wrap${onLight ? ' iso-on-light' : ''}${color ? ' iso-tinted' : ''}`}
      style={{ width: size, height: size, ...tint }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="iso-cube"
        style={{ width: size, height: size, ...baseRotate }}
        animate={{ rotateY: 360, scale: hovered ? 1.08 : 1 }}
        transition={{
          rotateY: { duration: hovered ? 3 : 10, repeat: Infinity, ease: 'linear' },
          scale: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <div className="iso-face iso-front" style={{ transform: `translateZ(${half}px)` }} />
        <div className="iso-face iso-back" style={{ transform: `translateZ(-${half}px) rotateY(180deg)` }} />
        <div className="iso-face iso-right" style={{ transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div className="iso-face iso-left" style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div className="iso-face iso-top" style={{ transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className="iso-face iso-bottom" style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </motion.div>
      {Icon && (
        <motion.div
          className="iso-icon-overlay"
          animate={{ scale: hovered ? 1.12 : 1, opacity: hovered ? 1 : 0.92 }}
        >
          <Icon size={Math.round(size * 0.34)} strokeWidth={1.8} />
        </motion.div>
      )}
    </div>
  );
}
