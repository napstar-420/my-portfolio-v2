import Image from 'next/image';
import myImage from '@/public/my-pic.png';
import SocialMediaLinks from '@/app/ui/social-media-links';
import RedirectLink from '@/app/ui//redirect-link';
import { Routes, RoutesMap } from '../routes';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="border-t border-t-neutral-600" />
      <div className="mx-auto max-w-screen-xl px-5 pb-6 pt-20 lg:pb-10 lg:pt-28">
        <div className="justify-between lg:flex">
          <div>
            <div className="flex items-center gap-6">
              <div className="max-w-28 overflow-hidden rounded-full border">
                <Image src={myImage} alt="Image of Zohaib Khan" />
              </div>
              <div className="col-start-2 col-end-4">
                <h5 className="text-display-5">Zohaib Khan</h5>
                <p className="text-400 font-medium text-neutral-500">
                  Fullstack engineer at Freedom.tm
                </p>
              </div>
            </div>

            <div className="py-8 md:py-10">
              <SocialMediaLinks className="md:gap-6 md:text-4xl" />
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <RedirectLink
              label="Get in touch"
              href={Routes.CONTACT}
              className="border-b-[rgb(0,0,0,0)] text-2xl capitalize md:text-3xl"
              iconClassName="text-primary text-4xl font-bold"
            />

            <div className="flex flex-col gap-8 sm:flex-row md:gap-10 lg:flex-col">
              <div>
                <span className="font-bold text-neutral-400">EMAIL ME:</span>
                <RedirectLink
                  label="dev.zohaib.work@gmail.com"
                  href="mailto:dev.zohaib.work@gmail.com"
                  className="lowercase md:text-2xl"
                />
              </div>
              <div>
                <span className="font-bold text-neutral-400">CONTACT ME:</span>
                <RedirectLink
                  label="+92-322-3947372"
                  href="tel:+923223947372"
                  className="lowercase md:text-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bar-muted my-10" />

        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {RoutesMap.map(([key, route]) => (
              <Link href={route} key={key} className="font-bold md:text-xl">
                {key}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-neutral-500">
              Created by{' '}
              <Link href={Routes.HOME} className="font-bold text-primary">
                Napstar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
