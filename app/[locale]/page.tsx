"use client"
import Schedule from "./components/schedule.component";
import Speakers from "./components/speakers.component";
import BestInformation from "./components/bestInformation.component";
import BtwInformation from "./components/btwInformation.component";
import { useTranslations } from "next-intl";
import TextWithLine from "./components/textWithLine.component";
import BtwHistory from "./components/btwHistory.component";
import JoinUs from "./components/joinUs.component";
import StartInformation from "./components/startInformation.component";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex flex-col gap-4 lg:gap-24 bg-defaulPurple">
      <StartInformation />
      <TextWithLine titleText={t('Header.navigation.who we.title')} />

      <BtwInformation />
      <JoinUs />
      <BtwHistory />
      <BestInformation />
      <Schedule />
      <Speakers />
    </main>
  )
}
