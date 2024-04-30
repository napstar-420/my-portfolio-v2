'use client';

import Carousel from '@/app/(portfolio)/ui/carousel';
import skillsSet from '@/app/constants/skills';

export default function Skills() {
  return (
    <Carousel
      title="My Skills"
      description="Technologies i have worked with"
      items={skillsSet}
    />
  );
}
