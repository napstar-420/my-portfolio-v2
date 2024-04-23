import Hero from '@/app/ui/Home/hero';
import About from '@/app/ui/Home/about';
import Skills from '@/app/ui/Home/skills';
import Portfolio from '@/app/ui/Home/portfolio';
import Testimonials from '@/app/ui/Home/testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
    </main>
  );
}
