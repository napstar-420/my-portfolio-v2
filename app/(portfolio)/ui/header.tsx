import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { Routes } from '@/app/constants/routes';
import MobileNavbar from '@/app/(portfolio)/ui/mobile-navbar';

const navLinks = [
  { label: 'Home', href: Routes.HOME },
  { label: 'About', href: Routes.ABOUT },
  { label: 'Portfolio', href: Routes.PORTFOLIO },
  { label: 'Blog', href: Routes.BLOG },
  { label: 'Contact', href: Routes.CONTACT },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-20 mx-auto flex w-screen max-w-screen-xl items-center justify-between bg-neutral-800 px-6 py-4 md:static md:py-6">
      <Link
        href={Routes.HOME}
        className="flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-110"
      >
        <FaCode className="text-primary" />
        Napstar
      </Link>
      <nav className="hidden gap-8 md:flex">
        {navLinks.map(({ label, href }, index) => {
          return (
            <Link key={index} href={href} className="text-xl">
              {label}
            </Link>
          );
        })}
      </nav>
      <MobileNavbar />
    </header>
  );
}
