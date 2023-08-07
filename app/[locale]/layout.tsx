import Header from './components/header.component'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
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

export default async function RootLayout({ children, params }: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning={true}>
      <NextIntlClientProvider locale={params.locale} messages={messages}>
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html >
  )
}
