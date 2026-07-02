import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import Technologies from './components/Technologies/Technologies';
import Marquee from './components/Marquee/Marquee';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useTheme } from './useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <div className="section-divider" />
        <Services />
        <div className="section-divider section-divider--purple" />
        <About />
        <Industries />
        <Technologies />
        <Marquee />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
