import Image from "next/image";
import JoinUsArrow from "../../../public/joinUsArrow.png";
import { useTranslations } from "next-intl";

export default function JoinUs() {
    const t = useTranslations('BTW');
    const arrowWidth = 50;
    const arrowHeight = 25;

    return (
        <div className="flex flex-row gap-8 my-8 items-center mx-4">
            <Image className="w-52 h-27" src={JoinUsArrow.src} alt="Join Us Right" width={arrowWidth} height={arrowHeight} />
            <div className="text-center -mx-6">
                {t("JoinUs")}
            </div>
            <Image className="rotate-180 w-52 h-27" src={JoinUsArrow.src} alt="Join Us Right" width={arrowWidth} height={arrowHeight} />
        </div>
    );
}
