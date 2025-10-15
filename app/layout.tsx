import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ScrollRestoration } from '@/components/shared/ScrollRestoration';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Human Machine - Making Technology More Human',
  description: 'Exploring digital identity, product passports, and enterprise UX at the intersection of human needs and machine capabilities.',
  openGraph: {
    title: 'Human Machine - Making Technology More Human',
    description: 'Exploring digital identity, product passports, and enterprise UX',
    siteName: 'Human Machine',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollRestoration />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

