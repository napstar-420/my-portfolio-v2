import { IconType } from 'react-icons';

export type CarouselCardProps = {
  title: string;
  description: string;
  Icon: IconType;
};

export default function CarouselCard({
  title,
  description,
  Icon,
}: CarouselCardProps) {
  return (
    <div className="embla__slide flex flex-[0_0_100%] flex-col items-start gap-4 rounded-2xl bg-neutral-700 px-8 pb-14 pt-16 sm:flex-[0_0_434px] lg:px-14 lg:pb-24 lg:pt-32">
      <span className="grid place-items-center rounded-[50%] bg-primary p-3 text-6xl">
        <Icon />
      </span>
      <h4 className="text-display-4">{title}</h4>
      <p className="text-light sm:text-xl lg:text-2xl">{description}</p>
      <div className="mt-4 h-[6px] w-14 bg-white" />
    </div>
  );
}
