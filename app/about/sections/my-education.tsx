import Section from '@/app/ui/section';
import education from '@/app/constants/education';

export default function MyEducation() {
  return (
    <Section secondaryBg>
      <div>
        <div>
          <h2 className="subtitle mb-4">
            <span className="text-primary">/</span>&nbsp;&nbsp;My Education
          </h2>
          <div className="flex flex-col gap-7">
            <h3 className="text-display-3 mb-4">
              Past education & credentials
            </h3>
            <p className="mb-4">
              Although I may not have a formal education in computer science, I
              have proven my skills through self-study and real-world
              experience. I have completed my college education with a Faculty
              of Science degree in Mathematics. I have also completed a number
              of online courses and certifications in web development,
              programming, and software engineering. I am always learning and
              improving my skills.
            </p>
          </div>
        </div>
        <div className="bar-muted mt-9 md:mb-20 md:mt-16 lg:mb-24"></div>
        <div className="md:grid md:grid-cols-2">
          {education.map(
            ({ id, date, description, subtitle, title }, index) => {
              const shouldApplyRightBorder = index % 2 === 0;
              const shouldApplyTopBorder = index >= 2;

              return (
                <div
                  data-aos="fade-up"
                  key={id}
                  className={`border-t-[1px] border-neutral-600 py-8 sm:py-10 md:border-0 lg:py-16 ${
                    shouldApplyRightBorder
                      ? 'md:border-r-[1px] md:pr-10 lg:pr-16'
                      : 'md:pl-10 lg:pl-16'
                  } ${shouldApplyTopBorder ? 'md:border-t-[1px]' : ''}`}
                >
                  <p className="text-200 mb-4 font-bold uppercase">
                    {subtitle}
                    &nbsp;<span className="mx-2 text-primary">/</span>&nbsp;
                    {date}
                  </p>
                  <h4 className="text-display-4 mb-2 font-bold">{title}</h4>
                  <p className="">{description}</p>
                </div>
              );
            },
          )}
        </div>
      </div>
    </Section>
  );
}
