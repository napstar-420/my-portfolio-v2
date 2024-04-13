import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import clsx from 'clsx';

interface ComponentProps {
  label: string;
  href: string;
  className?: string;
}

export default function RedirectLink({
  label,
  href,
  className,
}: ComponentProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'redirect-link border-muted flex max-w-max items-center gap-2 border-b-2 py-2 uppercase',
        className,
      )}
    >
      {label}
      <LuArrowRight className="transition-transform" />
    </Link>
  );
}
