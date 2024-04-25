import Section from '@/app/ui/section';
import portfolioItems from '@/app/lib/portfolio';
import PortfolioCard from '@/app/ui/portfolio-card';

export default function Portfolio() {
  return (
    <main>
      <Section>
        <div>
          <div className="heading-top-line large mx-auto mb-8"></div>
          <h2 className="text-display-2 mb-3 text-center">Portfolio</h2>
          <p className="text-center font-medium">
            Some of the projects I have worked on. I have experience in a wide
            range of technologies and industries.
          </p>
          <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 lg:mt-28 lg:gap-14">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
