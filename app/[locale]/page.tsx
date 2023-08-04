import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Main");
  return (
    <main>
      <h1>{t('content')}</h1>
    </main>
  )
}
