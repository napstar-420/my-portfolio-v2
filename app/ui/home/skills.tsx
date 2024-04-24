'use client';

import useEmblaCarousel from 'embla-carousel-react';
import skillsSet from '@/app/lib/skills';
import CarouselNavigation from '@/app/ui/carousel-navigation';

export default function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 lg:py-60">
      <div
        data-aos="fade-up"
        className="mx-auto mb-12 max-w-screen-xl px-5 lg:mb-16"
      >
        <h2 className="subtitle mb-4">
          <span className="text-primary">/</span>&nbsp;&nbsp;My skills
        </h2>
        <h3 className="text-display-3 mb-4 flex items-center justify-between">
          My extensive list of skills
          <div className="hidden items-center justify-center gap-6 px-5 lg:flex">
            <CarouselNavigation emblaApi={emblaApi} />
          </div>
        </h3>
      </div>
      <div data-aos="fade-up" className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4 px-4">
          {skillsSet.map(({ title, description, Icon }, index) => {
            return (
              <div
                key={index}
                className="embla__slide flex flex-[0_0_100%] flex-col items-start gap-4 rounded-2xl bg-neutral-700 px-8 pb-14 pt-16 sm:flex-[0_0_434px] lg:px-14 lg:pb-24 lg:pt-32"
              >
                <span className="grid place-items-center rounded-[50%] bg-primary p-3 text-6xl">
                  <Icon />
                </span>
                <h4 className="text-display-4">{title}</h4>
                <p className="text-light sm:text-xl lg:text-2xl">
                  {description}
                </p>
                <div className="mt-4 h-[6px] w-14 bg-white" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-6 px-5 lg:hidden">
        <CarouselNavigation emblaApi={emblaApi} />
      </div>
    </section>
  );
}
