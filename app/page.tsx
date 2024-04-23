'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/app/ui/home/hero';
import About from '@/app/ui/home/about';
import Skills from '@/app/ui/home/skills';
import Portfolio from '@/app/ui/home/projects';
import Testimonials from '@/app/ui/home/testimonials';
import Contact from '@/app/ui/home/contact';

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
