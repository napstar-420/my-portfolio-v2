import RedirectLink from '@/app/ui/redirect-link';
import portfolioItems from '@/app/lib/portfolio';
import PortfolioCard from '../portfolio-card';
import { Routes } from '@/app/routes';

export default function Portfolio() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-2 md:gap-10">
        <div>
          <div className="mb-16">
            <h2 className="mb-4 text-lg font-bold uppercase sm:text-xl">
              <span className="text-primary">/</span>&nbsp;&nbsp;My Portfolio
            </h2>
            <h3 className="mb-8 text-2xl font-bold sm:text-4xl lg:text-5xl">
              Take a look at the latest projects I’ve done
            </h3>
            <RedirectLink
              label="Browser all projects"
              href={Routes.PORTFOLIO}
            />
          </div>
          <PortfolioCard {...portfolioItems[0]} />
        </div>
        <div className="grid gap-8 md:gap-10">
          {portfolioItems.slice(1).map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
