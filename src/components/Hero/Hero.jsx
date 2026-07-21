import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Cloud, Zap } from 'lucide-react';
import IsometricIcon from '../About/IsometricIcon';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useParallax } from '../../hooks/useParallax';
import './Hero.css';

const headlineLines = [
  { text: 'Technology', accent: false },
  { text: 'that drives', accent: true },
  { text: 'Business', accent: false },
  { text: 'Growth.', accent: false },
];

/* Generative flow-field canvas — particles drifting along a noise-like vector field */
function getBgRgb() {
  const hex = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  const n = parseInt(hex.replace('#', ''), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

function FlowFieldCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;
    let mouse = { x: -999, y: -999 };
    let bgRgb = getBgRgb();
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const pts = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.6 + 0.4,
      alpha: Math.random() * 0.35 + 0.12,
    }));
    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', resize);
    const themeObserver = new MutationObserver(() => {
      bgRgb = getBgRgb();
      ctx.fillStyle = `rgb(${bgRgb})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const draw = () => {
      t += 0.0028;
      ctx.fillStyle = `rgba(${bgRgb},0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();
      pts.forEach(p => {
        const angle = (Math.sin(p.x * 0.0026 + t) + Math.cos(p.y * 0.0026 - t * 1.15)) * Math.PI;
        const mx = mouse.x - rect.left, my = mouse.y - rect.top;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        let vx = Math.cos(angle) * p.speed, vy = Math.sin(angle) * p.speed;
        if (d < 140) { vx += (dx / d) * 0.6; vy += (dy / d) * 0.6; }
        const px = p.x, py = p.y;
        p.x += vx; p.y += vy;
        const wrapped = p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        if (wrapped) return;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(214,255,63,${p.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      themeObserver.disconnect();
    };
  }, []);
  return <canvas ref={canvasRef} className="hero-canvas" />;
}

/* Orbiting icon constellation around the dashboard — extra animated-graphic density */
const orbitIcons = [
  { Icon: Shield, color: '#8B7CFF' },
  { Icon: Cloud, color: '#5EEAD4' },
  { Icon: Zap, color: '#FFB020' },
];

function OrbitRing() {
  return (
    <div className="hero-orbit-ring" aria-hidden="true">
      {orbitIcons.map(({ Icon, color }, i) => (
        <div
          key={i}
          className="hero-orbit-item"
          style={{ '--orbit-delay': `${i * -6.7}s`, '--orbit-color': color }}
        >
          <div className="hero-orbit-icon">
            <Icon size={16} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* Glowing metric orb — replaces the old spinning text-ring badge */
function MetricOrb() {
  return (
    <div className="metric-orb">
      <ArrowUpRight size={24} strokeWidth={2} />
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
    { label: 'IT Support Tickets', pct: 94, color: '#D6FF3F' },
    { label: 'Security Score',     pct: 98, color: '#8B7CFF' },
    { label: 'Cloud Uptime',       pct: 100, color: '#5EEAD4' },
    { label: 'Automation Coverage',pct: 87, color: '#FFB020' },
  ];
  return (
    <motion.div className="hero-dash"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}>
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
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {pct}%
              </motion.span>
            </div>
            <div className="hero-bar-track">
              <motion.div className="hero-bar-fill" style={{ background: color }}
                initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                transition={{ duration: 0.7, ease: 'easeOut' }} />
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
  const orbsParallax = useParallax(30);
  const bgParallax = useParallax(50);
  const primaryCta = useMagnetic(0.25, 12);
  const ghostCta = useMagnetic(0.25, 12);

  return (
    <section id="hero" className="hero">
      <FlowFieldCanvas />
      <motion.div className="hero-orbs" ref={orbsParallax.ref} style={{ y: orbsParallax.y }}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="hero-orb hero-orb-5" />
      </motion.div>
      <div className="hero-grid-bg" />
      <motion.div className="hero-bg-image" ref={bgParallax.ref} style={{ y: bgParallax.y }} />

      <div className="container hero-layout">
        {/* LEFT: text */}
        <div className="hero-left">
          <motion.div className="hero-eyebrow"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles size={14} />
            Trusted IT Partner for Growing Businesses
          </motion.div>

          <h1 className="hero-headline">
            {headlineLines.map((line, i) => (
              <span key={line.text} className="headline-line-mask">
                <motion.span
                  className={`headline-line${line.accent ? ' headline-accent' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-sub"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            From remote IT support to cloud workspaces, cybersecurity, and automation—
            BigLeap keeps your technology running so you can focus on growth.
          </motion.p>

          <motion.div className="hero-ctas"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <motion.a href="#contact" className="hero-btn-primary"
              ref={primaryCta.ref} style={primaryCta.style} {...primaryCta.handlers}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Get Free Consultation <ArrowRight size={16} />
            </motion.a>
            <motion.a href="#portfolio" className="hero-btn-ghost"
              ref={ghostCta.ref} style={ghostCta.style} {...ghostCta.handlers}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              See Our Work
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats-row"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
          <OrbitRing />
          <DashCard />
          <motion.div className="hero-spin-wrap"
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}>
            <MetricOrb />
          </motion.div>

          {/* Floating stat badge 1 */}
          <motion.div
            className="hero-float-badge hfb-clients"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}>
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
            transition={{ duration: 0.4 }}>
            <div className="hfb-icon hfb-icon-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div className="hfb-text">
              <span className="hfb-val">99.9%</span>
              <span className="hfb-lbl">Uptime SLA</span>
            </div>
          </motion.div>

          {/* Floating animated visual panel */}
          <motion.div
            className="hero-gif-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <div className="hero-gif-visual">
              <IsometricIcon size={68} variant="cube" icon={Sparkles} color="#D6FF3F" />
            </div>
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
