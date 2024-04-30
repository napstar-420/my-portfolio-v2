import Section from '@/app/(portfolio)/ui/section';
import RedirectLink from '@/app/(portfolio)/ui/redirect-link';
import { Routes } from '@/app/constants/routes';

export default function blog() {
  return (
    <Section>
      <div className="grid place-items-center gap-4 text-center">
        <h1 data-aos="fade-up" className="text-display-2">
          Coming soon
        </h1>
        <p data-aos="fade-up" className="text-body-large">
          I am currently working on this page. Please check back later.
        </p>
        <RedirectLink
          data-aos="fade-up"
          href={Routes.HOME}
          label="Return home"
          className="text-2xl"
        />
      </div>
    </Section>
  );
}
