import { useTranslations } from "next-intl"
import Image from "next/image";
import BestLogo from "../../../public/best_photos/Best_Lviv_logo.png"
import TextWithLine from "./textWithLine.component";

export default function BestInformation() {
    const t = useTranslations("BestInformation");
    return (
        // TODO: Add backgroun image "bg-bestLines"
        <div className="flex flex-col gap-8 lg:gap-12 mt-12">
            <TextWithLine titleText={t("Organizer")} />
            <div className="grid lg:grid-cols-2 gap-4 items-center">

                <div className="text-center px-[10%]">
                    <div className="mb-8 text-left text-l lg:text-[35px] bg-[#0000004D] p-4" dangerouslySetInnerHTML={{ __html: t("BEST") }} />

                    <a href="https://best-lviv.org.ua" target="_blank"
                        className="border rounded-[100px] px-8 py-3 lg:px-12 lg:py-4 min-h-max
                            bg-gradient-button text-xl lg:text-[35px]
                          text-white">
                        {t("learn more")}
                    </a>
                </div>

                <div className="flex justify-center px-[5%] lg:px-0">
                    <Image src={BestLogo.src} alt="Best logo" width={700} height={350} />
                </div>

            </div>
        </div>

    )
}