'use client';

import useEmblaCarousel from 'embla-carousel-react';
import CarouselNavigation from '@/app/ui/carousel-navigation';
import CarouselCard, { CarouselCardProps } from '@/app/ui/carousel-card';

interface CarouselProps {
  title: string;
  description: string;
  items: CarouselCardProps[];
}

export default function Carousel({ title, description, items }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 lg:py-60">
      <div
        data-aos="fade-up"
        className="mx-auto mb-12 max-w-screen-xl px-5 lg:mb-16"
      >
        <h2 className="subtitle mb-4">
          <span className="text-primary">/</span>&nbsp;&nbsp;{title}
        </h2>
        <h3 className="text-display-3 mb-4 flex items-center justify-between">
          {description}
          <div className="hidden items-center justify-center gap-6 px-5 lg:flex">
            <CarouselNavigation emblaApi={emblaApi} />
          </div>
        </h3>
      </div>
      <div data-aos="fade-up" className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4 px-4">
          {items.map((item, index) => (
            <CarouselCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-6 px-5 lg:hidden">
        <CarouselNavigation emblaApi={emblaApi} />
      </div>
    </section>
  );
}
