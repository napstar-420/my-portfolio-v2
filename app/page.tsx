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
    <section className="relative mx-14 grid grid-cols-2 gap-4 pb-9 pt-36">
      <div className="absolute -bottom-10 left-1/2 -z-10 w-3/4 max-w-screen-lg translate-x-[-50%]">
        <Image src={MyPic} alt="Pic of Zohaib" className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="mb-12 h-2 w-40 bg-white" />
        <h1 className="text-7xl font-bold">
          Hey there<span className="text-primary">!</span>
          <br />
          i&apos;m Zohaib, a<br />
          Web Developer
        </h1>
        <p className="text-light text-lg">
          I merge creativity and functionality to <br />
          visually stunning and user-friendly websites.
        </p>
      </div>
      <div className="flex max-w-96 flex-col gap-14 justify-self-end">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold uppercase">About me</h2>
          <p className="text-light text-lg">
            I&apos;m Zohaib, a web developer passionate about crafting stunning
            and user-friendly websites. Stay tuned to learn more about my
            journey in the digital realm.
          </p>
          <RedirectLink href="/about" label="Learn more" />
        </div>
        <div className="bar-muted" />
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold uppercase">My work</h2>
          <p className="text-light text-lg">
            I believe in creating immersive digital experiences that resonate
            with audiences and deliver measurable results.
          </p>
          <RedirectLink href="/portfolio" label="Browse portfolio" />
        </div>
        <div className="bar-muted" />
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold uppercase">Follow me</h2>
          <div className="flex gap-4 text-3xl">
            {socialMediaLinks.map(({ icon, href }, index) => (
              <Link target="_blank" key={index} href={href}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
