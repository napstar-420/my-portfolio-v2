import Image from 'next/image';
import RedirectLink from '@/app/ui/redirect-link';
import MyPic from '@/public/my-pic.png';
import SocialMediaLinks from '@/app/ui/social-media-links';
import { Routes } from '@/app/routes';

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-4 overflow-y-hidden px-5 pb-9 pt-12 sm:grid-cols-2 lg:px-8 lg:pt-36">
      <div
        data-aos="fade-up"
        className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
      >
        <div className="heading-top-line large" />
        <h1 className="text-display-2 mb-[10px]">
          Hey there<span className="text-primary">!</span>
          <br />
          i&apos;m Zohaib, a<br />
          Web Developer
        </h1>
        <p className="text-200">
          I merge creativity and functionality to{' '}
          <br className="hidden max-w-full lg:block" />
          visually stunning and user-friendly websites.
        </p>
      </div>
      <div className="bar-muted my-5 sm:hidden" />
      <div
        data-aos="fade-up"
        className="grid gap-10 sm:col-start-1 sm:col-end-3 sm:mt-16 sm:grid-cols-2 lg:row-start-1 lg:row-end-2 lg:max-w-96 lg:grid-cols-1 lg:gap-14 lg:justify-self-end"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-200 font-bold uppercase">About me</h2>
          <p>
            I&apos;m Zohaib, a web developer passionate about crafting stunning
            and user-friendly websites. Stay tuned to learn more about my
            journey in the digital realm.
          </p>
          <RedirectLink href={Routes.ABOUT} label="Learn more" />
        </div>
        <div className="bar-muted" />
        <div className="flex flex-col gap-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 lg:row-start-3 lg:row-end-4">
          <h2 className="text-200 font-bold uppercase">My work</h2>
          <p>
            I believe in creating immersive digital experiences that resonate
            with audiences and deliver measurable results.
          </p>
          <RedirectLink href={Routes.PORTFOLIO} label="Browse portfolio" />
        </div>
        <div className="bar-muted" />
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-200 font-bold uppercase">Follow me</h2>
          <SocialMediaLinks />
        </div>
      </div>
      <div className="bottom-0 row-start-2 row-end-3 mx-auto w-4/5 overflow-hidden rounded-[50%] border sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-max sm:w-3/5 sm:self-center lg:absolute lg:-bottom-24 lg:left-1/2 lg:-z-10 lg:col-start-1 lg:col-end-3 lg:w-4/5 lg:translate-x-[-50%] lg:rounded-none lg:border-0">
        <Image
          src={MyPic}
          alt="Pic of Zohaib"
          className="translate-y-4 lg:translate-y-0"
        />
      </div>
    </section>
  );
}
