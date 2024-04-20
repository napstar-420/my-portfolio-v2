import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

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
        <div className="">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
