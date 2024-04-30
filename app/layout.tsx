import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zohaib Portfolio',
  description:
    "Welcome to Zohaib's Portfolio! Explore my projects, skills, and experience.",
  keywords: [
    'Zohaib',
    'Portfolio',
    'Coding',
    'Fullstack developer',
    'Web developer',
    'Software engineer',
  ],
  authors: [{ name: 'Zohaib', url: 'https://zohaib.codes' }],
  applicationName: 'Zohaib Portfolio',
  category: 'Portfolio',
  creator: 'Zohaib',
  metadataBase: new URL('https://zohaib.codes'),
  openGraph: {
    title: 'Zohaib Portfolio',
    description:
      "Welcome to Zohaib's Portfolio! Explore my projects, skills, and experience.",
    type: 'website',
    siteName: 'Zohaib Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
