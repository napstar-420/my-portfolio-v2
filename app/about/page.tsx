import Image from 'next/image';
import myImage from '@/public/my-pic.png';
import Section from '@/app/ui/section';

export default function About() {
  return (
    <main>
      <Section className="pb-20 pt-12 sm:pb-20 sm:pt-16 md:pb-48 md:pt-32 lg:pb-48 lg:pt-32">
        <div className="grid items-center gap-x-9 gap-y-10 md:grid-cols-2">
          <div className="grid gap-3">
            <div className="heading-top-line large"></div>
            <h1 className="text-display-2 leading-[1.2em]">
              Nice to meet you, I&apos;m Zohaib Khan
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              quis nemo rerum incidunt, explicabo vel adipisci reprehenderit
              veniam odit commodi minima. Nihil temporibus perferendis odit,
              facere iusto natus ab accusantium!
            </p>
            <div className="bar-muted mb-5 mt-10"></div>
            <h2 className="text-300 flex items-center gap-2 font-bold">
              <div className="text-display-2 inline">
                2<span className="text-primary">+</span>
              </div>
              Years of experience
            </h2>
          </div>
          <div className="justify-self-end">
            <div className="max-w-[500px] overflow-hidden rounded-full border border-neutral-400">
              <Image src={myImage} alt="Zohaib Khan" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
