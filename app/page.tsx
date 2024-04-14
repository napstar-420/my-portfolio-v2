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
      <About />
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

function About() {
  return (
    <section className="relative grid min-h-dvh place-items-center px-5 pb-16 pt-24">
      <div className="grid gap-16 sm:gap-24 lg:grid-cols-2 lg:items-center">
        <div className="">
          <h2 className="mb-4 text-lg font-bold uppercase sm:text-xl">
            <span className="text-primary">/</span>&nbsp;&nbsp;About me
          </h2>
          <h3 className="mb-4 text-2xl font-bold sm:text-4xl">
            I&apos;ve been developing websites since 2021
          </h3>
          <p className="text-light mb-4 sm:text-lg">
            Hi, I&apos;m Zohaib! I have a deep passion for crafting beautiful
            and functional websites that make a difference. With a keen eye for
            design and a love for coding, I create digital experiences that
            captivate and engage users.
          </p>
          <RedirectLink
            href="/about"
            label="More about me"
            className="sm:text-2xl"
          />
        </div>
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold sm:text-xl">
            <span className="text-4xl sm:text-6xl">2+</span> Years
            <br />
            of experience
          </h2>
          <p className="text-light sm:text-lg">
            I have been honing my skills in web development for over two years,
            working on various projects and gaining valuable experience along
            the way. My journey has been filled with learning, growth, and
            exciting challenges that have shaped me into the developer I am
            today.
          </p>
        </div>
        <div className="bar-muted lg:col-start-1 lg:col-end-3"></div>
        <div className="lg:col-start-1 lg:col-end-3">
          <h2 className="text-light text-center text-lg font-bold  sm:text-xl">
            Previously worked with
          </h2>
          <div className="mt-7 flex items-start justify-around text-2xl font-bold uppercase sm:text-3xl">
            <h3>Plotano</h3>
            <h3>Freedom</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
