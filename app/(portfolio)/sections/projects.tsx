import RedirectLink from '@/app/(portfolio)/ui/redirect-link';
import portfolioItems from '@/app/constants/portfolio';
import PortfolioCard from '../ui/portfolio-card';
import { Routes } from '@/app/constants/routes';
import Section from '@/app/(portfolio)/ui/section';

export default function Portfolio() {
  return (
    <Section secondaryBg>
      <div className="grid gap-8 px-5 py-24 md:grid-cols-2 md:gap-10">
        <div>
          <div className="mb-16" data-aos="fade-up">
            <h2 className="subtitle mb-4">
              <span className="text-primary">/</span>&nbsp;&nbsp;My Portfolio
            </h2>
            <h3 className="text-display-3 mb-8">
              Take a look at the latest projects I’ve done
            </h3>
            <RedirectLink
              label="Browser all projects"
              href={Routes.PORTFOLIO}
              className="underline-large"
            />
          </div>
          <PortfolioCard {...portfolioItems[0]} />
        </div>
        <div className="grid gap-8 md:gap-10">
          {portfolioItems.slice(1, 3).map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
