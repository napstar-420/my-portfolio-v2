'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/app/sections/hero';
import About from '@/app/sections/about';
import Skills from '@/app/sections/skills';
import Portfolio from '@/app/sections/projects';
import Testimonials from '@/app/sections/testimonials';
import Contact from '@/app/sections/contact';

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
