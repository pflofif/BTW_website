import { useTranslations } from "next-intl"
import Image from "next/image";
import BestLogo from "../../../public/BEST_Lviv.jpg"

export default function BestInformation() {
    const t = useTranslations("BestInformation");
    return (
        <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="text-center px-[10%]">
                <div className="mb-8 text-left" dangerouslySetInnerHTML={{ __html: t("BEST") }} />
                <a href="https://best-lviv.org.ua" target="_blank"
                    className="border rounded-[100px] px-[5vw] py-4 min-h-max
                            bg-gradient-to-r from-purple-500 to-pink-500
                          text-white
                            hover:shadow-2xl">
                    {t("learn more")}
                </a>
            </div>
            <div className="flex justify-center px-[5%] lg:px-0">
                <Image src={BestLogo.src} alt="Best logo" width={500} height={150} />
            </div>
        </div>
    )
}