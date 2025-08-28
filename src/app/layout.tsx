import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

import './globals.css';
import Header from './Components/layout/header/Header';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hydra',
  description: 'Dive Into The Depths Of Virtual Reality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/public/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/public/favicon.svg" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/public/site.webmanifest" />
      </Head>
      <body className={`${montserrat.variable}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
