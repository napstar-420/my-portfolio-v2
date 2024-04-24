'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/app/ui/hero';
import About from '@/app/ui/about';
import Skills from '@/app/ui/skills';
import Portfolio from '@/app/ui/projects';
import Testimonials from '@/app/ui/testimonials';
import Contact from '@/app/ui/contact';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      delay: 100,
    });
  }, []);

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
