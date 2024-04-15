import RedirectLink from '@/app/ui/redirect-link';

export default function About() {
  return (
    <section className="bg-background grid place-items-center px-5 pb-16 pt-24">
      <div className="mx-auto grid max-w-screen-xl gap-16 sm:gap-24 lg:grid-cols-2 lg:items-center">
        <div className="">
          <h2 className="mb-4 text-lg font-bold uppercase sm:text-xl">
            <span className="text-primary">/</span>&nbsp;&nbsp;About me
          </h2>
          <h3 className="mb-4 text-2xl font-bold sm:text-4xl lg:text-5xl">
            I&apos;ve been developing websites since 2021
          </h3>
          <p className="mb-4 text-light sm:text-lg">
            Hi, I&apos;m Zohaib! I have a deep passion for crafting beautiful
            and functional websites that make a difference. With a keen eye for
            design and a love for coding, I create digital experiences that
            captivate and engage users.
          </p>
          <RedirectLink
            href="/about"
            label="More about me"
            className="capitalize sm:text-2xl"
          />
        </div>
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold sm:text-xl">
            <span className="text-4xl sm:text-6xl lg:text-7xl">2+</span> Years
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
          <h2 className="text-center text-lg font-bold text-light  sm:text-xl">
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