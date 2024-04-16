import Image, { StaticImageData } from 'next/image';

interface ComponentProps {
  title: string;
  description: string;
  skills: string[];
  image: StaticImageData;
}

export default function PortfolioCard({
  title,
  description,
  skills,
  image,
}: ComponentProps) {
  return (
    <div className="portfolio-card flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-dark transition-transform duration-300 ease-in hover:scale-[1.05]">
      <div className="flex flex-wrap gap-2 self-end px-6 pb-4 pt-6">
        {skills.map((skill, index) => {
          return (
            <span
              key={index}
              className="bg-medium rounded-lg px-4 py-2 text-sm font-bold md:text-base lg:text-xl"
            >
              {skill}
            </span>
          );
        })}
      </div>
      <div className="px-6">
        <h2 className="my-4 text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mb-4 text-xl font-semibold text-light md:text-2xl">
          {description}
        </p>
      </div>
      <div className="portfolio-image-wrapper w-full transition-transform duration-500 ease-in-out">
        <Image
          src={image}
          className="inline-block w-full"
          alt="Snapshots of Heartbeat project"
        />
      </div>
    </div>
  );
}
