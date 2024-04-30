import Hero from '@/app/(portfolio)/about/sections/hero';
import MyStory from '@/app/(portfolio)/about/sections/my-story';
import MyExperience from '@/app/(portfolio)/about/sections/my-experience';
import MyEducation from '@/app/(portfolio)/about/sections/my-education';
import MyTools from '@/app/(portfolio)/about/sections/my-tools';

export default function About() {
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
