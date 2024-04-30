'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HamBurgerBtn from '@/app/(portfolio)/ui/ham-burger-btn';
import { RoutesMap } from '@/app/constants/routes';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute right-4 z-20 block overflow-hidden md:hidden">
        <HamBurgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <motion.div
        className="bg-primary-100 fixed right-0 top-0 z-10 bg-neutral-700 opacity-40 md:hidden"
        initial={{ opacity: 0, scale: 0.5, width: 200, height: 200 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.5,
          borderRadius: isOpen ? 0 : '50%',
          width: isOpen ? '100vw' : 0,
          height: isOpen ? '100vh' : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-4">
          {RoutesMap.map(([label, href], index) => (
            <Link
              key={index}
              href={href}
              className="text-display-2 font-bold text-neutral-100"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
