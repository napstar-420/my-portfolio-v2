import Hero from '@/app/(portfolio)/sections/hero';
import About from '@/app/(portfolio)/sections/about';
import Skills from '@/app/(portfolio)/sections/skills';
import Portfolio from '@/app/(portfolio)/sections/projects';
import Testimonials from '@/app/(portfolio)/sections/testimonials';
import Contact from '@/app/(portfolio)/sections/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
