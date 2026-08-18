import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cursor from './components/Cursor/Cursor';
import Grain from './components/Grain/Grain';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import SectionNav from './components/SectionNav/SectionNav';
import BackToTop from './components/BackToTop/BackToTop';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import About from './components/About/About';
import Industries from './components/Industries/Industries';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import { useTheme } from './useTheme';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <Cursor />
      <Grain />
      <ScrollToTop />
      {isHome && <ScrollProgress />}
      {isHome && <SectionNav />}
      <BackToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
