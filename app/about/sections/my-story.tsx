import Section from '@/app/ui/section';
import myStoryImage1 from '@/public/my-story-1.jpg';
import myStoryImage2 from '@/public/my-story-2.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <Section
      secondaryBg
      className="md:mb-80 md:max-h-[900px] md:py-24 lg:max-h-[1150px] lg:pt-24"
    >
      <div className="flex flex-col justify-between gap-y-20 md:flex-row md:gap-x-7 lg:gap-x-20">
        <div className="flex flex-col gap-y-12">
          <div data-aos="fade-up">
            <h2 className="subtitle mb-4">
              <span className="text-primary">/</span>&nbsp;&nbsp;MY STORY
            </h2>
            <h3 className="text-display-2 mb-3">
              How i started as a Web developer
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              quibusdam eius tempore nam ex tenetur, animi voluptatem facilis
              eum laboriosam. Aut voluptas atque voluptates tempora doloribus
              non provident aliquid quia.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
            <Image
              src={myStoryImage1}
              alt="My story"
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative flex flex-col gap-y-12 md:bottom-52 md:flex-col-reverse md:self-start">
          <div data-aos="fade-up">
            <h2 className="subtitle mb-4">
              <span className="text-primary">/</span>&nbsp;&nbsp;MY STORY
            </h2>
            <h3 className="text-display-2 mb-3">My first project</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              quibusdam eius tempore nam ex tenetur, animi voluptatem facilis
              eum laboriosam. Aut voluptas atque voluptates tempora doloribus
              non provident aliquid quia.
            </p>
          </div>
          <div data-aos="fade-up" className="overflow-hidden rounded-2xl">
            <Image
              src={myStoryImage2}
              alt="My story"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
