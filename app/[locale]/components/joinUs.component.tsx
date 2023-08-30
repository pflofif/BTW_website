import Image from "next/image";
import JoinUsArrow from "../../../public/joinUsArrow.png";
import { useTranslations } from "next-intl";

export default function JoinUs() {
    const t = useTranslations('BTW');
    const arrowWidth = 52;
    const arrowHeight = 27;

    return (
        <div className="flex flex-row gap-8 my-8 items-center mx-4 lg:mx-16 lg:my-0">
            <Image className="w-52 h-27 " src={JoinUsArrow.src} alt="Join Us Right" width={arrowWidth} height={arrowHeight} />
            <div className="text-center -mx-6 lg:text-[30px] lg:mx-8">
                {t("JoinUs")}
            </div>
            <Image className="rotate-180 w-52 h-27" src={JoinUsArrow.src} alt="Join Us Right" width={arrowWidth} height={arrowHeight} />
        </div>
    );
}
