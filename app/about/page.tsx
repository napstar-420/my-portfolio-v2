import Hero from '@/app/about/sections/hero';
import MyStory from '@/app/about/sections/my-story';
import MyExperience from '@/app/about/sections/my-experience';
import MyEducation from './sections/my-education';

export default function About() {
  return (
    <main>
      <Hero />
      <MyStory />
      <MyExperience />
      <MyEducation />
    </main>
  );
}
