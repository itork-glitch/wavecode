import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🌊 | WaveCode.pl - Pokaż się w sieci!',
  description:
    'Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!',
  icons: './favicon.ico',
  openGraph: {
    title: '🌊 | WaveCode.pl - Pokaż się w sieci!',
    description:
      'Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!',
    images: [{ url: '../public/favicon.png', alt: '' }],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
