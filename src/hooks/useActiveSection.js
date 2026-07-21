import { useEffect, useState } from 'react';

/* Tracks which of the given section ids is currently most visible in the
   viewport, using a horizontal "detection band" near the top of the screen
   so the active id flips right as a section's heading crosses into view. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(top.target.id);
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
