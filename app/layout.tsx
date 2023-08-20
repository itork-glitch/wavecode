import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: '🌊 | WaveCode.pl - Pokaż się w sieci!',
  description:
    'Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!',
  icons: './favicon.ico',
  themeColor: '#009cff',
  openGraph: {
    siteName: 'WaveCode.pl',
    title: '🌊 | WaveCode.pl - Pokaż się w sieci!',
    description:
      'Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!',
    type: 'website',
    images: [{ url: '/public/Logo.png', width: 32, height: 32 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*       <head>
        <meta property='og:site_name' content='WaveCode.pl' />
        <meta
          property='og:title'
          content='🌊 | WaveCode.pl - Pokaż się w sieci!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Z pomocą WaveCode zaprojektujemy twoje logo, wykonamy twoją wymarzoną nowoczesną witrynę internetową wraz z pełną oprawą wizualną. Stosujemy własne standardy optymalizacji oraz jakości w zakresie tworzenia stron, baz danych i aplikacji internetowych. Pokaż się w sieci!'
        />
        <meta property='og:image' content='https://i.imgur.com/ENaxAEr.png' />
        <meta name='theme-color' content='#009cff' />
      </head> */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
