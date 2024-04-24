'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/app/about/sections/hero';
import MyStory from '@/app/about/sections/my-story';
import MyExperience from '@/app/about/sections/my-experience';
import MyEducation from '@/app/about/sections/my-education';
import MyTools from '@/app/about/sections/my-tools';

export default function About() {
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
      <MyStory />
      <MyExperience />
      <MyEducation />
      <MyTools />
    </main>
  );
}
