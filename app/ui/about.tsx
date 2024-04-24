import RedirectLink from '@/app/ui/redirect-link';
import { Routes } from '@/app/routes';
import Section from '@/app/ui/section';

export default function About() {
  return (
    <Section secondaryBg>
      <div className="grid gap-16 sm:gap-24 lg:grid-cols-2 lg:items-center">
        <div data-aos="fade-up">
          <h2 className="subtitle mb-4">
            <span className="text-primary">/</span>&nbsp;&nbsp;About me
          </h2>
          <h3 className="text-display-3 mb-4">
            I&apos;ve been developing websites since 2021
          </h3>
          <p className="mb-4">
            Hi, I&apos;m Zohaib! I have a deep passion for crafting beautiful
            and functional websites that make a difference. With a keen eye for
            design and a love for coding, I create digital experiences that
            captivate and engage users.
          </p>
          <RedirectLink
            href={Routes.ABOUT}
            label="More about me"
            className="underline-large capitalize sm:text-2xl"
          />
        </div>
        <div data-aos="fade-up">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold sm:text-xl">
            <span className="text-display-2">2+</span> Years
            <br />
            of experience
          </h2>
          <p className="text-300">
            I have been honing my skills in web development for over two years,
            working on various projects and gaining valuable experience along
            the way. My journey has been filled with learning, growth, and
            exciting challenges that have shaped me into the developer I am
            today.
          </p>
        </div>
        <div className="bar-muted lg:col-start-1 lg:col-end-3"></div>
        <div
          data-aos="fade-up"
          className="items-center md:flex lg:col-start-1 lg:col-end-3"
        >
          <h2 className="text-300 flex-1 text-center font-bold uppercase md:text-left">
            Previously worked with
          </h2>
          <div className="text-400 mt-7 flex items-start justify-around font-bold uppercase md:mt-0 md:gap-16">
            <h3>Plotano</h3>
            <h3>Freedom</h3>
          </div>
        </div>
      </div>
    </Section>
  );
}
