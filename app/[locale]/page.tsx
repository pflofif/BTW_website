import Schedule from "./components/schedule.component";
import FadeInWhenVisible from "./components/FadeInWhenVisible.component";
import Speakers from "./components/speakers.component";
import BestInformation from "./components/bestInformation.component";
import BtwInformation from "./components/btwInformation.component";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <BtwInformation />
      <BestInformation />
      <FadeInWhenVisible>
        <Schedule />
      </FadeInWhenVisible>
      <Speakers />
    </main>
  )
}
