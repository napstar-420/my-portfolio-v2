import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import clsx from 'clsx';
import { Routes } from '@/app/routes';

interface ComponentProps {
  label: string;
  href: Routes | string;
  className?: string;
  iconClassName?: string;
}

export default function RedirectLink({
  label,
  href,
  className,
  iconClassName,
}: ComponentProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'redirect-link flex max-w-max items-center gap-2 border-b-4 border-gray-700 py-2 font-bold uppercase',
        className,
      )}
    >
      {label}
      <LuArrowRight className={clsx('transition-transform', iconClassName)} />
    </Link>
  );
}
