import Header from './components/header.component'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Footer from './components/footer.component';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BEST Training Week'
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
