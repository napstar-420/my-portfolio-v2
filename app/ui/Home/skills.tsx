'use client';

import useEmblaCarousel from 'embla-carousel-react';
import skillsSet from '@/app/lib/skills';

export default function Skills() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 lg:py-60">
      <div className="mx-auto mb-12 max-w-screen-xl px-5 lg:mb-16">
        <h2 className="mb-4 text-lg font-bold uppercase sm:text-xl">
          <span className="text-primary">/</span>&nbsp;&nbsp;My skills
        </h2>
        <h3 className="mb-4 text-2xl font-bold sm:text-4xl lg:text-5xl">
          My extensive list of skills
        </h3>
      </div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4 px-4">
          {skillsSet.map(({ title, description, Icon }, index) => {
            return (
              <div
                key={index}
                className="embla__slide bg-dark flex flex-[0_0_100%] flex-col items-start gap-4 rounded-2xl px-8 pb-14 pt-16 sm:flex-[0_0_434px] lg:px-14 lg:pb-24 lg:pt-32"
              >
                <span className="grid place-items-center rounded-[50%] bg-primary p-3 text-6xl">
                  <Icon />
                </span>
                <h4 className="text-xl font-bold sm:text-3xl lg:text-4xl">
                  {title}
                </h4>
                <p className="text-light sm:text-xl lg:text-2xl">
                  {description}
                </p>
                <div className="mt-4 h-[6px] w-14 bg-white" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
