import React from 'react';
import clsx from 'clsx';

export default function Section({
  children,
  secondaryBg,
  className,
}: {
  children: React.ReactNode;
  secondaryBg?: boolean;
  className?: string;
}) {
  return (
    <section
      className={clsx(
        'px-5 py-24 sm:py-28 md:py-40 lg:py-60',
        secondaryBg && 'bg-neutral-700 bg-opacity-40',
        !secondaryBg && 'mx-auto max-w-7xl',
        className,
      )}
    >
      {secondaryBg ? (
        <div className="mx-auto max-w-7xl">{children}</div>
      ) : (
        <>{children}</>
      )}
    </section>
  );
}
