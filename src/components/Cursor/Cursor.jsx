import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const hovered = useRef(false);
  const pressed = useRef(false);
  const raf = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);
      if (ringRef.current) {
        const scale = pressed.current ? ' scale(0.85)' : '';
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)${scale}`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        if (!hovered.current) {
          hovered.current = true;
          ringRef.current?.classList.add('cursor-ring--hover');
          dotRef.current?.classList.add('cursor-dot--hover');
        }
        const label = target.dataset.cursorText || target.closest('[data-cursor-text]')?.dataset.cursorText;
        if (label) {
          if (textRef.current) textRef.current.textContent = label;
          ringRef.current?.classList.add('cursor-ring--text');
        } else {
          ringRef.current?.classList.remove('cursor-ring--text');
        }
      }
    };

    const onOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest('a, button, [data-cursor]')) {
        hovered.current = false;
        ringRef.current?.classList.remove('cursor-ring--hover', 'cursor-ring--text');
        dotRef.current?.classList.remove('cursor-dot--hover');
      }
    };

    const onDown = () => {
      pressed.current = true;
      dotRef.current?.classList.add('cursor-dot--active');
    };
    const onUp = () => {
      pressed.current = false;
      dotRef.current?.classList.remove('cursor-dot--active');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span ref={textRef} className="cursor-ring-text" />
      </div>
    </>
  );
}
