import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🌊 | WaveCode.pl - Pokaż się w sieci!',
  description:
    'Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!',
  icons: './favicon.ico',
  openGraph: {
    title: {
      template: '🌊 | WaveCode.pl - Pokaż się w sieci!',
      default: '🌊 | WaveCode.pl - Pokaż się w sieci!',
      absolute: '🌊 | WaveCode.pl - Pokaż się w sieci!',
    },
    description:
      'Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!',
    images: '/icon.png',
    locale: 'pl-PL',
    type: 'website',
    siteName: 'WaveCode.pl',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta property='og:image' content='https://i.imgur.com/ENaxAEr.png' />
        <meta name='theme-color' content='#009cff' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
