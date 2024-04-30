import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import clsx from 'clsx';

const socialMediaLinks = [
  {
    icon: <FaFacebookSquare />,
    href: 'https://www.facebook.com/khanzohaib97/',
  },
  { icon: <FaTwitter />, href: 'https://twitter.com/napstar_420' },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/zohaib_billa_420/',
  },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/napstar420/' },
  { icon: <FaGithub />, href: 'https://github.com/napstar-420' },
];

export default function SocialMediaLinks({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={clsx('flex gap-4 text-3xl', className)}>
      {socialMediaLinks.map(({ icon, href }, index) => (
        <Link target="_blank" key={index} href={href}>
          {icon}
        </Link>
      ))}
    </div>
  );
}
