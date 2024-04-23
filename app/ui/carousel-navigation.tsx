'use client';

import { UseEmblaCarouselType } from 'embla-carousel-react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

type EmblaCarouselType = UseEmblaCarouselType[1];

export default function CarouselNavigation({
  emblaApi,
}: {
  emblaApi: EmblaCarouselType;
}) {
  return (
    <>
      <button
        className="primary-circle-btn"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button
        className="primary-circle-btn"
        onClick={() => emblaApi?.scrollNext()}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </>
  );
}
