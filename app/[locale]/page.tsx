import { useTranslations } from "next-intl"
import Schedule from "./components/schedule.component";
import FadeInWhenVisible from "./components/FadeInWhenVisible.component";
import Speakers from "./components/speakers.component";
import BestInformation from "./components/bestInformation.component";

export default function Home() {
  const t = useTranslations("Main");
  return (
    <main className="flex flex-col gap-40">
      <BestInformation />
      <FadeInWhenVisible>
        <Schedule />
      </FadeInWhenVisible>
      <Speakers />
    </main>
  )
}
