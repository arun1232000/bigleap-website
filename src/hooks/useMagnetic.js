import { useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export function useMagnetic(strength = 0.35, max = 14) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 300, damping: 20, mass: 0.4 });

  if (reduced) {
    return { ref, style: {}, handlers: {} };
  }

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    rawX.set(Math.max(-max, Math.min(max, relX * strength)));
    rawY.set(Math.max(-max, Math.min(max, relY * strength)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return {
    ref,
    style: { x, y },
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
  };
}
