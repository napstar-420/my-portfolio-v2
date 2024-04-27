import Section from '@/app/ui/section';
import RedirectLink from '@/app/ui/redirect-link';
import { Routes } from '@/app/constants/routes';

export default function Thanks() {
  return (
    <Section>
      <div className="grid place-items-center gap-5 text-center">
        <h1 className="text-display-2">Thank you for your message!</h1>
        <p className="font-medium sm:text-lg md:text-xl lg:text-2xl">
          I will get back to you as soon as possible.
        </p>
        <RedirectLink
          href={Routes.HOME}
          label="Return home"
          className="sm:text-lg md:text-xl lg:text-2xl"
        />
      </div>
    </Section>
  );
}
