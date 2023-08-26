"use client"
import Schedule from "./components/schedule.component";
import Speakers from "./components/speakers.component";
import BestInformation from "./components/bestInformation.component";
import BtwInformation from "./components/btwInformation.component";
import { useTranslations } from "next-intl";
import TextWithLine from "./components/textWithLine.component";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex flex-col gap-40 bg-defaulPurple">
      <div className='bg-bladerunner min-h-[850px]'></div>

      <TextWithLine titleText={t('Header.navigation.who we.title')} />

      <BtwInformation />
      <BestInformation />
      <Schedule />
      <Speakers />
    </main>
  )
}
