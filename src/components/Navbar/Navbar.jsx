import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

const MotionLink = motion.create(Link);

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();
  const cta = useMagnetic(0.3, 10);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - lastY.current;
    if (latest > 160 && diff > 4) setHidden(true);
    else if (diff < -4 || latest < 160) setHidden(false);
    lastY.current = latest;
  });

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-inner container">
        <Link to="/" className="logo">
          <div className="logo-icon"><Zap size={18} /></div>
          <span>Orbinexa <span className="logo-accent">Technologies</span></span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(link => {
            const isActive = pathname === link.to;
            return (
              <li key={link.label}>
                <Link to={link.to} className={`nav-link ${isActive ? 'nav-link--active' : ''}`}>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveDot"
                      className="nav-link-active-dot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <MotionLink
          to="/contact"
          className="btn-primary nav-cta"
          ref={cta.ref}
          style={cta.style}
          {...cta.handlers}
        >
          Get Started
        </MotionLink>

        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileTap={{ scale: 0.88 }}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`mobile-link ${pathname === link.to ? 'mobile-link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mobile-cta" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
