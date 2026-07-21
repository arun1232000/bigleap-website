import { Children, isValidElement, cloneElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './SplitText.css';

const EASE = [0.22, 1, 0.36, 1];

function wordVariant(reduced, index) {
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.55, delay: index * 0.035, ease: EASE },
  };
}

function splitStringToWords(str, startIndex, reduced) {
  const tokens = str.split(/(\s+)/);
  const nodes = [];
  let idx = startIndex;
  tokens.forEach((tok, i) => {
    if (tok === '') return;
    if (/^\s+$/.test(tok)) {
      nodes.push(tok);
      return;
    }
    nodes.push(
      <motion.span key={`w-${startIndex}-${i}`} className="split-word" {...wordVariant(reduced, idx)}>
        {tok}
      </motion.span>
    );
    idx++;
  });
  return { nodes, nextIndex: idx };
}

export default function SplitText({ as: Tag = 'span', className, children }) {
  const reduced = useReducedMotion();
  let index = 0;
  const output = [];

  Children.forEach(children, (child, i) => {
    if (typeof child === 'string') {
      const { nodes, nextIndex } = splitStringToWords(child, index, reduced);
      output.push(...nodes);
      index = nextIndex;
    } else if (isValidElement(child) && child.type === 'br') {
      output.push(cloneElement(child, { key: `br-${i}` }));
    } else if (isValidElement(child)) {
      output.push(
        <motion.span key={`kt-${i}`} className="split-keep" {...wordVariant(reduced, index)}>
          {child}
        </motion.span>
      );
      index++;
    } else {
      output.push(child);
    }
  });

  return <Tag className={className}>{output}</Tag>;
}
