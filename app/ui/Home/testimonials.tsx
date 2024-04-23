'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Routes } from '@/app/routes';
import RedirectLink from '@/app/ui/redirect-link';
import testimonials from '@/app/lib/testimonials';
import Image from 'next/image';
import CarouselNavigation from '@/app/ui/carousel-navigation';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:py-60">
      <div
        data-aos="fade-up"
        className="mb-12 grid content-between items-center gap-7 md:grid-cols-2"
      >
        <div>
          <h2 className="subtitle">
            <span className="text-primary">/</span>&nbsp;&nbsp;TESTIMONIALS
          </h2>
          <h3 className="text-display-3">What the clients say about my work</h3>
        </div>
        <RedirectLink
          href={Routes.CONTACT}
          label="Get in touch"
          className="underline-large text-heading-3 inline-block capitalize md:place-self-end"
        />
      </div>
      <div data-aos="fade-up" className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4 px-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="mt-20 flex items-center justify-center lg:absolute lg:bottom-72 lg:right-4 lg:mt-0"
      >
        <div className="flex gap-8">
          <CarouselNavigation emblaApi={emblaApi} />
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({
  name,
  title,
  description,
  image,
  company,
}: (typeof testimonials)[0]) {
  return (
    <div className="embla__slide flex flex-[0_0_100%] flex-col items-center gap-4 sm:flex-row sm:gap-8">
      <div className="w-full overflow-hidden rounded-2xl bg-neutral-500 sm:h-full lg:h-[497px]">
        <Image src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div>
        <h3 className="text-display-2 text-neutral-500">{company}</h3>
        <p className="text-display-5 mb-6 font-bold text-neutral-50">
          &ldquo;{description}&quot;
        </p>
        <div>
          <h4 className="text-400 font-bold uppercase">
            <span className="mr-4 text-primary">/</span>
            {name}
          </h4>
          <p className="text-300 mt-2 uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
}
