import Header from './components/header.component'
import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation';
import Footer from './components/footer.component';
import { Montserrat } from "next/font/google"

export const metadata: Metadata = {
  title: 'BEST Training Week'
}

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  style: 'normal'
});

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
        <body className={`${montserrat.className} text-white`} suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html >
  )
}
