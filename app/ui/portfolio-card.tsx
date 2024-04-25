import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Routes } from '../routes';

interface ComponentProps {
  id: string;
  title: string;
  description: string;
  skills: string[];
  image: StaticImageData;
  client: string;
  services: string;
  live_url: string;
}

export default function PortfolioCard({
  title,
  description,
  skills,
  image,
  live_url,
}: ComponentProps) {
  return (
    <Link href={live_url} target="_blank">
      <div
        data-aos="fade-up"
        className="portfolio-card flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-neutral-700 transition-transform duration-300 ease-in hover:scale-[1.05]"
      >
        <div className="flex flex-wrap gap-2 self-end px-6 pb-4 pt-6 lg:pt-8">
          {skills.map((skill, index) => {
            return (
              <span key={index} className="badge-primary small">
                {skill}
              </span>
            );
          })}
        </div>
        <div className="px-6 lg:px-8">
          <h2 className="my-4 text-3xl font-bold text-neutral-400 md:text-4xl">
            {title}
          </h2>
          <p className="text-display-5 mb-4 text-neutral-100">{description}</p>
        </div>
        <div className="portfolio-image-wrapper w-full transition-transform duration-500 ease-in-out">
          <Image
            src={image}
            className="inline-block w-full"
            alt="Snapshots of Heartbeat project"
          />
        </div>
      </div>
    </Link>
  );
}
