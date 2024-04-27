import Section from '@/app/ui/section';
import RedirectLink from '../ui/redirect-link';
import { Routes } from '../constants/routes';

export default function blog() {
  return (
    <Section>
      <div className="grid place-items-center gap-4 text-center">
        <h1 className="text-display-2">Coming soon</h1>
        <p className="text-body-large">
          I am currently working on this page. Please check back later.
        </p>
        <RedirectLink
          href={Routes.HOME}
          label="Return home"
          className="text-2xl"
        />
      </div>
    </Section>
  );
}
