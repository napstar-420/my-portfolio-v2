import Carousel from '@/app/ui/carousel';
import tools from '@/app/constants/tools';

export default function Skills() {
  return (
    <Carousel
      title="My Skills"
      description="Technologies i have worked with"
      items={tools}
    />
  );
}
