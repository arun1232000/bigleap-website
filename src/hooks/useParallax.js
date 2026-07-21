import { useRef } from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function useParallax(distance = 40) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const y = reduced ? 0 : rawY;

  return { ref, y };
}
