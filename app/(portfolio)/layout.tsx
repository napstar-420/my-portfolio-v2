'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/app/(portfolio)/styles/index.css';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/app/(portfolio)//ui/header';
import Footer from '@/app/(portfolio)//ui/footer';
import clsx from 'clsx';

const font = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      delay: 100,
    });
  }, []);

  return (
    <div className={clsx(font.className, 'pt-20 md:pt-0')}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
