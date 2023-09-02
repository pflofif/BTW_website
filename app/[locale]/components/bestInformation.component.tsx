import { useTranslations } from "next-intl"
import Image from "next/image";
import BestLogo from "../../../public/best_photos/Best_Lviv_logo.png"
import TextWithLine from "./textWithLine.component";
import LearnMoreButton from "./LearnMoreButton.component";

export default function BestInformation() {
    const t = useTranslations("BestInformation");
    return (
        // TODO: Add backgroun image "bg-bestLines"
        <div className="lg:bg-bestLines lg:bg-no-repeat lg:bg-cover lg:h-[200vh] flex flex-col gap-8 mt-12 lg:gap-12 lg:-mb-96 lg:-mt-80">
            <div className="lg:pt-80">
                <TextWithLine titleText={t("Organizer")} />
                <div className="grid lg:grid-cols-2 gap-4 items-center pt-8">

                    <div className="text-center px-[10%]">
                        <div className="mb-8 text-left text-l lg:text-[35px] bg-[#0000004D] p-4" dangerouslySetInnerHTML={{ __html: t("BEST") }} />
                        <LearnMoreButton href="https://best-lviv.org.ua" />
                    </div>

                    <div className="flex justify-center px-[5%] lg:px-0">
                        <Image src={BestLogo.src} alt="Best logo" width={700} height={350} />
                    </div>

                </div>
            </div>
        </div>

    )
}