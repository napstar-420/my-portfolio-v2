import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { Routes } from '../routes';

const navLinks = [
  { label: 'Home', href: Routes.HOME },
  { label: 'About', href: Routes.ABOUT },
  { label: 'Portfolio', href: Routes.PORTFOLIO },
  { label: 'Blog', href: Routes.BLOG },
];

export default function Header() {
  return (
    <header className="mx-2 flex items-center justify-between px-6 py-9 lg:mx-14">
      <Link
        href={Routes.HOME}
        className="flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-110"
      >
        <FaCode className="text-primary" />
        Napstar
      </Link>
      <nav className="hidden gap-8 lg:flex">
        {navLinks.map(({ label, href }, index) => {
          return (
            <Link key={index} href={href} className="text-xl">
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
