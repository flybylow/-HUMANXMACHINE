import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ScrollRestoration } from '@/components/shared/ScrollRestoration';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HumanMachine - Digital Product Passport Platform',
  description: 'Enterprise Digital Product Passport platform helping manufacturers meet CIRPASS-2 requirements. 14 stakeholder dashboards, full supply chain transparency. Based in Belgium.',
  keywords: ['digital product passport', 'DPP', 'CIRPASS-2', 'EU compliance', 'supply chain transparency', 'battery passport', 'textile passport', 'Belgium', 'manufacturing UX', 'enterprise software'],
  openGraph: {
    title: 'HumanMachine - Enterprise DPP Platform for EU Compliance',
    description: 'Enterprise Digital Product Passport platform for EU manufacturers. CIRPASS-2 compliant, production-ready.',
    siteName: 'HumanMachine',
    locale: 'en_US',
    type: 'website',
    url: 'https://humanmachine.be',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HumanMachine - Enterprise DPP Platform',
    description: 'Enterprise Digital Product Passport platform for EU manufacturers. CIRPASS-2 compliant, production-ready.',
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

