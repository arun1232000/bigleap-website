import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import Technologies from '../components/Technologies/Technologies';
import Explore from '../components/Explore/Explore';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <div className="section-divider" />
      <Technologies />
      <Explore />
      <Contact />
    </>
  );
}
