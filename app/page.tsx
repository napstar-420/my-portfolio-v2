import RedirectLink from '@/app/ui/redirect-link';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import MyPic from '@/public/my-pic.png';

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

function HeroSection() {
  const socialMediaLinks = [
    {
      icon: <FaFacebookSquare />,
      href: 'https://www.facebook.com/khanzohaib97/',
    },
    { icon: <FaTwitter />, href: 'https://twitter.com/napstar_420' },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/zohaib_billa_420/',
    },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/napstar420/' },
    { icon: <FaGithub />, href: 'https://github.com/napstar-420' },
  ];

  return (
    <section className="relative grid gap-4 overflow-y-hidden px-8 pb-9 pt-20 sm:grid-cols-2 lg:mx-14 lg:px-0 lg:pt-36">
      {/* FIXME: Fix typo too close at lg breakpoint */}
      <div className="flex flex-col gap-4 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
        <div className="mb-2 h-1 w-40 bg-white lg:mb-12 lg:h-2" />
        <h1 className="text-4xl font-bold lg:text-7xl">
          Hey there<span className="text-primary">!</span>
          <br />
          i&apos;m Zohaib, a<br />
          Web Developer
        </h1>
        <p className="text-light lg:text-lg">
          I merge creativity and functionality to{' '}
          <br className="hidden max-w-full lg:block" />
          visually stunning and user-friendly websites.
        </p>
      </div>
      <div className="bar-muted my-5 sm:hidden" />
      <div className="grid gap-10 sm:col-start-1 sm:col-end-3 sm:mt-16 sm:grid-cols-2 lg:row-start-1 lg:row-end-2 lg:max-w-96 lg:grid-cols-1 lg:gap-14 lg:justify-self-end">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold uppercase lg:text-lg">About me</h2>
          <p className="text-light lg:text-lg">
            I&apos;m Zohaib, a web developer passionate about crafting stunning
            and user-friendly websites. Stay tuned to learn more about my
            journey in the digital realm.
          </p>
          <RedirectLink href="/about" label="Learn more" />
        </div>
        <div className="bar-muted" />
        <div className="flex flex-col gap-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 lg:row-start-3 lg:row-end-4">
          <h2 className="font-bold uppercase lg:text-lg">My work</h2>
          <p className="text-light lg:text-lg">
            I believe in creating immersive digital experiences that resonate
            with audiences and deliver measurable results.
          </p>
          <RedirectLink href="/portfolio" label="Browse portfolio" />
        </div>
        <div className="bar-muted" />
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-bold uppercase lg:text-lg">Follow me</h2>
          <div className="flex gap-4 text-3xl">
            {socialMediaLinks.map(({ icon, href }, index) => (
              <Link target="_blank" key={index} href={href}>
                {icon}
              </Link>
            ))}
          </div>
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
