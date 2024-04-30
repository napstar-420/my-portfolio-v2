import Section from '@/app/(portfolio)/ui/section';
import RedirectLink from '@/app/(portfolio)/ui/redirect-link';
import { Routes } from '@/app/constants/routes';
import experiences from '@/app/constants/experiences';

export default function MyExperience() {
  return (
    <Section>
      <div>
        <div
          data-aos="fade-up"
          className="mb-12 items-center justify-between md:flex"
        >
          <div>
            <h2 className="subtitle mb-4">
              <span className="text-primary">/</span>&nbsp;&nbsp;My Experience
            </h2>
            <h3 className="text-display-3 mb-3">
              I have worked with some amazing companies
            </h3>
          </div>
          <div>
            <RedirectLink
              href={Routes.CONTACT}
              label="Get in touch"
              className="text-heading-3 underline-large w-max"
            />
          </div>
        </div>
        <div>
          {experiences.map((experience) => (
            <div
              data-aos="fade-up"
              key={experience.id}
              className="grid gap-7 border-t-[1px] border-t-neutral-600 py-10 sm:py-14 md:py-20 lg:grid-cols-[1fr_2fr_1fr]"
            >
              <p className="font-bold uppercase">
                {experience.company} - {experience.location}
              </p>
              <div>
                <h4 className="text-display-4 mb-[10px] font-bold">
                  {experience.title}
                </h4>
                <p className="">{experience.description}</p>
              </div>
              <p className="text-200font-bold uppercase lg:justify-self-end">
                {experience.startDate}&nbsp;
                <span className="mx-2 text-primary">/</span>&nbsp;
                {experience.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
