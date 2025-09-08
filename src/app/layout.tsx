import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Header from './components/layout/header/Header';
import Footer from './components/layout/Footer';
import { Toaster } from 'react-hot-toast';

import './globals.css';

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
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: '#9382d8',
                color: '#fff',
              },
              iconTheme: {
                primary: '#fff',
                secondary: '#9382d8',
              },
            },
            error: {
              style: {
                background: '#f87171',
                color: '#fff',
              },
              iconTheme: {
                primary: '#fff',
                secondary: '#b91c1c',
              },
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
