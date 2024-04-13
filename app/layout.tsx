import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from './ui/header';

const font = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Zohaib Portfolio',
  description: 'Under development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="mx-auto max-w-screen-xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
