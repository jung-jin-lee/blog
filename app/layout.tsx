import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JJ Blog',
  description: 'Jungjin Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="_W_F_ON9WkiWgenqQAitMoBqzaaNG6qlEul9w8uivHc"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        {process.env.GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${process.env.GA_MEASUREMENT_ID});
        `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
