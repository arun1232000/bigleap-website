import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Hero.css';

/* Particle canvas */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -999, y: -999 };
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
    }));
    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
        if (d < 100) { p.vx -= (dx / d) * 0.05; p.vy -= (dy / d) * 0.05; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,200,255,0.4)';
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,200,255,${0.15 * (1 - d / 100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="hero-canvas" />;
}

/* Spinning circular SVG text */
function SpinningBadge() {
  return (
    <div className="spinning-badge">
      <svg viewBox="0 0 180 180" width="140" height="140" className="spin-svg">
        <defs>
          <path id="spin-circle"
            d="M 90 90 m -62 0 a 62 62 0 1 1 124 0 a 62 62 0 1 1 -124 0" />
        </defs>
        <text fontSize="10.5" fill="rgba(255,255,255,0.55)" fontFamily="Inter,sans-serif" letterSpacing="2.5" fontWeight="500">
          <textPath href="#spin-circle">
            BigLeap IT Services • BigLeap IT Services •
          </textPath>
        </text>
      </svg>
      <div className="spin-center">
        <ArrowUpRight size={22} strokeWidth={1.8} />
      </div>
    </div>
  );
}

/* Typewriter word */
const cycleWords = ['Smarter', 'Faster', 'Securely', 'Efficiently'];
function TypewriterWord() {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = cycleWords[idx];
    let t;
    if (!deleting && txt.length < word.length) t = setTimeout(() => setTxt(word.slice(0, txt.length + 1)), 75);
    else if (!deleting && txt.length === word.length) t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && txt.length > 0) t = setTimeout(() => setTxt(txt.slice(0, -1)), 42);
    else { setDeleting(false); setIdx(i => (i + 1) % cycleWords.length); }
    return () => clearTimeout(t);
  }, [txt, deleting, idx]);
  return (
    <span className="hero-tw">
      <span className="hero-tw-text">{txt}</span>
      <span className="hero-tw-cursor">|</span>
    </span>
  );
}

/* Dashboard progress card */
function DashCard() {
  const bars = [
    { label: 'IT Support Tickets', pct: 94, color: '#00C8FF' },
    { label: 'Security Score',     pct: 98, color: '#10B981' },
    { label: 'Cloud Uptime',       pct: 100, color: '#8B5CF6' },
    { label: 'Automation Coverage',pct: 87, color: '#F59E0B' },
  ];
  return (
    <motion.div className="hero-dash"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}>
      <div className="hero-dash-header">
        <div className="hero-dash-dots"><span/><span/><span/></div>
        <span>System Dashboard</span>
      </div>
      <div className="hero-dash-body">
        {bars.map(({ label, pct, color }) => (
          <div key={label} className="hero-dash-row">
            <div className="hero-dash-labels">
              <span>{label}</span>
              <motion.span style={{ color }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                {pct}%
              </motion.span>
            </div>
            <div className="hero-bar-track">
              <motion.div className="hero-bar-fill" style={{ background: color }}
                initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                transition={{ delay: 1.1, duration: 1.4, ease: 'easeOut' }} />
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dash-footer">
        <span className="dash-dot-live" />All systems operational
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <ParticleCanvas />
      <div className="hero-orbs">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="hero-orb hero-orb-5" />
      </div>
      <div className="hero-grid-bg" />
      <div className="hero-bg-image" />

      <div className="container hero-layout">
        {/* LEFT: text */}
        <div className="hero-left">
          <motion.div className="hero-eyebrow"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span className="eyebrow-dot" />
            Trusted IT Partner for Growing Businesses
          </motion.div>

          <motion.h1 className="hero-headline"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <span className="headline-line">Technology</span>
            <span className="headline-line headline-accent">That Drives</span>
            <span className="headline-line">Business</span>
            <span className="headline-line">Growth</span>
          </motion.h1>

          <motion.p className="hero-sub"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            From remote IT support to cloud workspaces, cybersecurity, and automation—
            BigLeap keeps your technology running so you can focus on growth.
          </motion.p>

          <motion.div className="hero-ctas"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <motion.a href="#contact" className="hero-btn-primary"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Get Free Consultation <ArrowRight size={16} />
            </motion.a>
            <motion.a href="#portfolio" className="hero-btn-ghost"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              See Our Work
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats-row"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            {[['200+','Clients'],['99.9%','Uptime'],['< 2hr','Response'],['7','Services']].map(([n,l]) => (
              <div key={l} className="hero-stat-item">
                <span className="hero-stat-num">{n}</span>
                <span className="hero-stat-lbl">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: dash + spinning badge + floating badges + GIF */}
        <div className="hero-right">
          <DashCard />
          <motion.div className="hero-spin-wrap"
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 80 }}>
            <SpinningBadge />
          </motion.div>

          {/* Floating stat badge 1 */}
          <motion.div
            className="hero-float-badge hfb-clients"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}>
            <div className="hfb-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className="hfb-text">
              <span className="hfb-val">200+</span>
              <span className="hfb-lbl">Happy Clients</span>
            </div>
          </motion.div>

          {/* Floating stat badge 2 */}
          <motion.div
            className="hero-float-badge hfb-uptime"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}>
            <div className="hfb-icon hfb-icon-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div className="hfb-text">
              <span className="hfb-val">99.9%</span>
              <span className="hfb-lbl">Uptime SLA</span>
            </div>
          </motion.div>

          {/* Floating GIF panel */}
          <motion.div
            className="hero-gif-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}>
            <img
              src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
              alt="Tech"
              className="hero-gif-img"
              loading="lazy"
            />
            <div className="hero-gif-footer">
              <span className="hero-gif-dot" />
              <span>Real-time monitoring</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
