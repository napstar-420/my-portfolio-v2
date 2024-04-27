import Link from 'next/link';
import { Routes } from './constants/routes';
import RedirectLink from '@/app/ui/redirect-link';

export default function NotFound() {
  return (
    <div className="relative grid place-items-center px-8 py-20">
      <div>
        <p className="text-[100px] text-neutral-500 opacity-10 sm:text-[200px] md:text-[300px] lg:text-[400px]">
          404
        </p>
      </div>
      <div className="absolute grid place-items-center text-center">
        <h2 className="text-display-2 font-bold">Page not Found</h2>
        <p className="text-body-large mb-6">
          It seems the page you’re looking for not exists.
        </p>
        <RedirectLink
          href={Routes.HOME}
          label="Return Home"
          className="text-xl sm:text-2xl"
        />
      </div>
    </div>
  );
}
