import Cursor from './components/Cursor/Cursor';
import Grain from './components/Grain/Grain';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import SectionNav from './components/SectionNav/SectionNav';
import BackToTop from './components/BackToTop/BackToTop';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import About from './components/About/About';
import Industries from './components/Industries/Industries';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useTheme } from './useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Cursor />
      <Grain />
      <ScrollProgress />
      <SectionNav />
      <BackToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <div className="section-divider" />
        <Services />
        <div className="section-divider section-divider--purple" />
        <About />
        <Industries />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
