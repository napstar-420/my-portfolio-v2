import Carousel from '@/app/ui/carousel';
import skillsSet from '@/app/lib/skills';

export default function Skills() {
  return (
    <Carousel
      title="My Skills"
      description="Technologies i have worked with"
      items={skillsSet}
    />
  );
}
